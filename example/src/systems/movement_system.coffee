'use strict'
ash = require('../../../lib')
example = require('../../../example')

MovementNode = example.nodes.MovementNode

class example.systems.MovementSystem extends ash.core.ListIteratingSystem

    config: null

    constructor: (@config) ->
      super(MovementNode, @updateNode)

    updateNode: (node, time) =>
      position = node.position
      motion = node.motion
      position.position.x += motion.velocity.x * time
      position.position.y += motion.velocity.y * time
      
      # check boundaries
      position.position.x += @gameState.width  if position.position.x < 0
      position.position.x -= @gameState.width  if position.position.x > @gameState.width
      position.position.y += @gameState.height  if position.position.y < 0
      position.position.y -= @gameState.height  if position.position.y > @gameState.height
      position.rotation += motion.angularVelocity * time
      if motion.damping > 0
        xDamp = Math.abs(Math.cos(position.rotation) * motion.damping * time)
        yDamp = Math.abs(Math.sin(position.rotation) * motion.damping * time)
        if motion.velocity.x > xDamp
          motion.velocity.x -= xDamp
        else if motion.velocity.x < -xDamp
          motion.velocity.x += xDamp
        else
          motion.velocity.x = 0
        if motion.velocity.y > yDamp
          motion.velocity.y -= yDamp
        else if motion.velocity.y < -yDamp
          motion.velocity.y += yDamp
        else
          motion.velocity.y = 0
      return

