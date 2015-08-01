###
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
###
'use strict'

class ash.tools.ListIteratingSystem extends ash.core.System

  nodeList: null
  nodeClass: null
  nodeUpdateFunction: null
  nodeAddedFunction: null
  nodeRemovedFunction: null

  constructor: (nodeClass, nodeUpdateFunction, nodeAddedFunction=null, nodeRemovedFunction=null) ->
    @nodeClass = nodeClass
    @nodeUpdateFunction = nodeUpdateFunction
    @nodeAddedFunction = nodeAddedFunction
    @nodeRemovedFunction = nodeRemovedFunction

  addToEngine: (engine) ->
    @nodeList = engine.getNodeList(@nodeClass)
    if (@nodeAddedFunction isnt null)
      node = this.nodeList.head
      while node
        @nodeAddedFunction(node)
        node = node.next
      @nodeList.nodeAdded.add(@nodeAddedFunction)

    if (@nodeRemovedFunction isnt null)
      @nodeList.nodeRemoved.add(@nodeRemovedFunction)
    return # Void

  removeFromEngine: (engine) ->
    if (@nodeAddedFunction isnt null)
      @nodeList.nodeAdded.remove(@nodeAddedFunction)
    if (@nodeRemovedFunction isnt null)
      @nodeList.nodeRemoved.remove(@nodeRemovedFunction)
    @nodeList = null
    return # Void

  update: (time) ->
    node = this.nodeList.head
    while node
      @nodeUpdateFunction(node, time)
      node = node.next
    return # void
