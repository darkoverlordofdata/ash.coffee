'use strict'
ash = require('../../../lib')
example = require('../../../example')

MotionControl     = example.nodes.MotionControl
b2Vec2            = Box2D.Common.Math.b2Vec2

class example.systems.MotionControlSystem extends ash.core.System
    keyPoll: null
    nodeList: null
    constructor: (keyPoll) ->
      @keyPoll = keyPoll
      this

    addToEngine: (engine) ->
      @nodeList = engine.getNodeList(MotionControl)
      return

    removeFromEngine: (engine) ->
      @nodeList = null
      return

    update: (time) =>
      node = @nodeList.head

      while node
        @updateNode node, time
        node = node.next
      return

    updateNode: (node, time) =>

      control = node.control
      position = node.position
      motion = node.motion
      physics = node.physics

      left = @keyPoll.isDown(control.left)
      right = @keyPoll.isDown(control.right)

      position.rotation -= control.rotationRate * time  if left
      position.rotation += control.rotationRate * time  if right
      if @keyPoll.isDown(control.accelerate)
        motion.velocity.x += Math.cos(position.rotation) * control.accelerationRate * time
        motion.velocity.y += Math.sin(position.rotation) * control.accelerationRate * time


      physics.body.ApplyForce(new b2Vec2(100, 100), physics.body.GetWorldCenter()) if left
      physics.body.ApplyForce(new b2Vec2(-100, -100), physics.body.GetWorldCenter()) if right

      return

