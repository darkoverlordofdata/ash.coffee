ash = require('../../../lib')
example = require('../../../example')

MotionControlNode = example.nodes.MotionControlNode

class MotionControlSystem extends ash.core.System
    keyPoll: null
    nodeList: null
    constructor: (keyPoll) ->
      @keyPoll = keyPoll
      this

    addToEngine: (engine) ->
      @nodeList = engine.getNodeList(MotionControlNode)
      return

    removeFromEngine: (engine) ->
      @nodeList = null
      return

    update: (time) ->
      node = @nodeList.head

      while node
        @updateNode node, time
        node = node.next
      return

    updateNode: (node, time) ->
      control = node.control
      position = node.position
      motion = node.motion
      position.rotation -= control.rotationRate * time  if @keyPoll.isDown(control.left)
      position.rotation += control.rotationRate * time  if @keyPoll.isDown(control.right)
      if @keyPoll.isDown(control.accelerate)
        motion.velocity.x += Math.cos(position.rotation) * control.accelerationRate * time
        motion.velocity.y += Math.sin(position.rotation) * control.accelerationRate * time
      return

