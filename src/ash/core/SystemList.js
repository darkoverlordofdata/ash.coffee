// Generated by CoffeeScript 1.9.0

/*
 * Used internally, this is an ordered list of Systems for use by the engine update loop.
 */
'use strict';

/*
 * @constructor
 */
ash.core.SystemList = (function() {
  function SystemList() {}


  /**
   * @type {ash.core.System}
   */

  SystemList.prototype.head = null;


  /**
   * @type {ash.core.System}
   */

  SystemList.prototype.tail = null;


  /**
   * Add system
   * @param {ash.core.System}
   */

  SystemList.prototype.add = function(system) {
    var node;
    if (!this.head) {
      this.head = this.tail = system;
      system.next = system.previous = null;
    } else {
      node = this.tail;
      while (node) {
        if (node.priority <= system.priority) {
          break;
        }
        node = node.previous;
      }
      if (node === this.tail) {
        this.tail.next = system;
        system.previous = this.tail;
        system.next = null;
        this.tail = system;
      } else if (!node) {
        system.next = this.head;
        system.previous = null;
        this.head.previous = system;
        this.head = system;
      } else {
        system.next = node.next;
        system.previous = node;
        node.next.previous = system;
        node.next = system;
      }
    }
  };


  /**
   * remove system
   * @param {ash.core.System}
   */

  SystemList.prototype.remove = function(system) {
    if (this.head === system) {
      this.head = this.head.next;
    }
    if (this.tail === system) {
      this.tail = this.tail.previous;
    }
    if (system.previous) {
      system.previous.next = system.next;
    }
    if (system.next) {
      system.next.previous = system.previous;
    }
  };


  /**
   * Remove all systems
   */

  SystemList.prototype.removeAll = function() {
    var system;
    while (this.head) {
      system = this.head;
      this.head = this.head.next;
      system.previous = null;
      system.next = null;
    }
    this.tail = null;
  };


  /**
   * Get system for class
   * @param {Function}
   * @return {ash.core.System}
   */

  SystemList.prototype.get = function(type) {
    var system;
    system = this.head;
    while (system) {
      if (system.constructor === type) {
        return system;
      }
      system = system.next;
    }
    return null;
  };

  return SystemList;

})();

//# sourceMappingURL=SystemList.js.map
