'use strict'
ash = require('../../../lib')
example = require('../../../example')

PhysicsNode       = example.nodes.PhysicsNode
b2Vec2            = Box2D.Common.Math.b2Vec2

class example.systems.PhysicsSystem extends ash.core.System

  world: null
  count: 0
  kount: 0

  constructor: (@world) ->

  addToEngine: (engine) ->
    @nodeList = engine.getNodeList(PhysicsNode)
    return

  removeFromEngine: (engine) ->
    @nodeList = null
    return

  update: (time) =>

    @world.Step(time, 10, 10)
    @world.ClearForces()

    node = @nodeList.head
    while node
      @updateNode node, time
      node = node.next
    return # Void

  updateNode: (node, time) =>
    if @count is 1
      console.log node.physics.body.m_xf.position.x
    @count++
    if @count is 60 then @count = 0

#    @kount++
#    if @kount is 240
#      console.log 'ApplyForce'
#      node.physics.body.ApplyForce(new b2Vec2(100, 100), node.physics.body.GetWorldCenter())
#

    return # Void
