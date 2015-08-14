// Generated by CoffeeScript 1.9.0

/*
 * A useful class for systems which simply iterate over a set of nodes, performing the same action on each node. This
 * class removes the need for a lot of boilerplate code in such systems. Extend this class and pass the node type and
 * a node update method into the constructor. The node update method will be called once per node on the update cycle
 * with the node instance and the frame time as parameters. e.g.
 *
 * <code>package;
 * class MySystem extends ListIteratingSystem<MyNode>
 * {
 *     public function new()
 *     {
 *         super(MyNode, updateNode);
 *     }
 *
 *     private function updateNode(node:MyNode, time:Float):Void
 *     {
 *         // process the node here
 *     }
 * }
 * </code>
 */
'use strict';
var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

ash.tools.ListIteratingSystem = (function(_super) {
  __extends(ListIteratingSystem, _super);


  /**
   * @type {ash.core.NodeList}
   */

  ListIteratingSystem.prototype.nodeList = null;


  /**
   * @type {Function}
   */

  ListIteratingSystem.prototype.nodeClass = null;


  /**
   * @type {Function}
   */

  ListIteratingSystem.prototype.nodeUpdateFunction = null;


  /**
   * @type {Function}
   */

  ListIteratingSystem.prototype.nodeAddedFunction = null;


  /**
   * @type {Function}
   */

  ListIteratingSystem.prototype.nodeRemovedFunction = null;


  /**
   * @extends {ash.core.System}
   * @constructor
   * @param {Function} nodeClass
   * @param {Function} nodeUpdateFunction
   * @param {Function} nodeAddedFunction
   * @param {Function} nodeRemovedFunction
   */

  function ListIteratingSystem(nodeClass, nodeUpdateFunction, nodeAddedFunction, nodeRemovedFunction) {
    if (nodeAddedFunction == null) {
      nodeAddedFunction = null;
    }
    if (nodeRemovedFunction == null) {
      nodeRemovedFunction = null;
    }
    this.nodeClass = nodeClass;
    this.nodeUpdateFunction = nodeUpdateFunction;
    this.nodeAddedFunction = nodeAddedFunction;
    this.nodeRemovedFunction = nodeRemovedFunction;
  }


  /**
   * System is added to engine
   * @param {ash.core.Engine}
   */

  ListIteratingSystem.prototype.addToEngine = function(engine) {
    var node;
    this.nodeList = engine.getNodeList(this.nodeClass);
    if (this.nodeAddedFunction !== null) {
      node = this.nodeList.head;
      while (node) {
        this.nodeAddedFunction(node);
        node = node.next;
      }
      this.nodeList.nodeAdded.add(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.add(this.nodeRemovedFunction);
    }
  };


  /**
   * System is removed from engine
   * @param {ash.core.Engine}
   */

  ListIteratingSystem.prototype.removeFromEngine = function(engine) {
    if (this.nodeAddedFunction !== null) {
      this.nodeList.nodeAdded.remove(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.remove(this.nodeRemovedFunction);
    }
    this.nodeList = null;
  };


  /**
   * frame update
   * @param {number} time ms since last update
   */

  ListIteratingSystem.prototype.update = function(time) {
    var node;
    node = this.nodeList.head;
    while (node) {
      this.nodeUpdateFunction(node, time);
      node = node.next;
    }
  };

  return ListIteratingSystem;

})(ash.core.System);

//# sourceMappingURL=ListIteratingSystem.js.map
