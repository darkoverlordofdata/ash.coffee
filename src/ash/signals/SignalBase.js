// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var ListenerNodePool;

  ListenerNodePool = ash.signals.ListenerNodePool;

  ash.signals.SignalBase = (function() {

    /**
     * @type {ash.signals.ListenerNode}
     */
    SignalBase.prototype.head = null;


    /**
     * @type {ash.signals.ListenerNode}
     */

    SignalBase.prototype.tail = null;


    /**
     * @type {number}
     */

    SignalBase.prototype.numListeners = 0;


    /**
     * @type {Array<Object>}
     */

    SignalBase.prototype.keys = null;


    /**
     * @type {ash.signals.ListenerNode}
     */

    SignalBase.prototype.nodes = null;


    /**
     * @type {ash.signals.ListenerNodePool}
     */

    SignalBase.prototype.listenerNodePool = null;


    /**
     * @type {ash.signals.ListenerNode}
     */

    SignalBase.prototype.toAddHead = null;


    /**
     * @type {ash.signals.ListenerNode}
     */

    SignalBase.prototype.toAddTail = null;


    /**
     * @type {boolean}
     */

    SignalBase.prototype.dispatching = false;


    /**
     * @constructor
     */

    function SignalBase() {
      this.nodes = [];
      this.keys = [];
      this.listenerNodePool = new ListenerNodePool();
      this.numListeners = 0;
    }


    /**
     */

    SignalBase.prototype.startDispatch = function() {
      this.dispatching = true;
    };


    /**
     */

    SignalBase.prototype.endDispatch = function() {
      this.dispatching = false;
      if (this.toAddHead) {
        if (!this.head) {
          this.head = this.toAddHead;
          this.tail = this.toAddTail;
        } else {
          this.tail.next = this.toAddHead;
          this.toAddHead.previous = this.tail;
          this.tail = this.toAddTail;
        }
        this.toAddHead = null;
        this.toAddTail = null;
      }
      this.listenerNodePool.releaseCache();
    };


    /**
     * @param {Object} listener
     */

    SignalBase.prototype.getNode = function(listener) {
      var node;
      node = this.head;
      while (node !== null) {
        if (node.listener === listener) {
          break;
        }
        node = node.next;
      }
      if (node === null) {
        node = this.toAddHead;
        while (node !== null) {
          if (node.listener === listener) {
            break;
          }
          node = node.next;
        }
      }
      return node;
    };


    /**
     * @param {Object} listener
     */

    SignalBase.prototype.add = function(listener) {
      var node;
      if (this.keys.indexOf(listener) !== -1) {
        return;
      }
      node = this.listenerNodePool.get();
      node.listener = listener;
      this.nodes.push(node);
      this.keys.push(listener);
      this.addNode(node);
    };


    /**
     * @param {Object} listener
     */

    SignalBase.prototype.addOnce = function(listener) {
      var node;
      if (this.keys.indexOf(listener) !== -1) {
        return;
      }
      node = this.listenerNodePool.get();
      node.listener = listener;
      node.once = true;
      this.nodes.push(node);
      this.keys.push(listener);
      this.addNode(node);
    };


    /**
     * @param {ash.signals.ListenerNode} node
     */

    SignalBase.prototype.addNode = function(node) {
      if (this.dispatching) {
        if (this.toAddHead === null) {
          this.toAddHead = this.toAddTail = node;
        } else {
          this.toAddTail.next = node;
          node.previous = this.toAddTail;
          this.toAddTail = node;
        }
      } else {
        if (this.head === null) {
          this.head = this.tail = node;
        } else {
          this.tail.next = node;
          node.previous = this.tail;
          this.tail = node;
        }
      }
      this.numListeners++;
    };


    /**
     * @param {Object} listener
     */

    SignalBase.prototype.remove = function(listener) {
      var index, node;
      index = this.keys.indexOf(listener);
      node = this.nodes[index];
      if (node) {
        if (this.head === node) {
          this.head = this.head.next;
        }
        if (this.tail === node) {
          this.tail = this.tail.previous;
        }
        if (this.toAddHead === node) {
          this.toAddHead = this.toAddHead.next;
        }
        if (this.toAddTail === node) {
          this.toAddTail = this.toAddTail.previous;
        }
        if (node.previous) {
          node.previous.next = node.next;
        }
        if (node.next) {
          node.next.previous = node.previous;
        }
        this.nodes.splice(index, 1);
        this.keys.splice(index, 1);
        if (this.dispatching) {
          this.listenerNodePool.cache(node);
        } else {
          this.listenerNodePool.dispose(node);
        }
        this.numListeners--;
      }
    };


    /**
     */

    SignalBase.prototype.removeAll = function() {
      var index, node;
      while (this.head) {
        node = this.head;
        this.head = this.head.next;
        index = this.keys.indexOf(node.listener);
        this.nodes.splice(index, 1);
        this.listenerNodePool.dispose(node);
      }
      this.nodes = [];
      this.keys = [];
      this.tail = null;
      this.toAddHead = null;
      this.toAddTail = null;
      this.numListeners = 0;
    };

    return SignalBase;

  })();

}).call(this);

//# sourceMappingURL=SignalBase.js.map
