'use strict'
ash = require('../../../lib')
example = require('../../../example')

WaitForStartNode        = example.nodes.WaitForStartNode
AsteroidCollisionNode   = example.nodes.AsteroidCollisionNode
GameNode                = example.nodes.GameNode

class example.systems.WaitForStartSystem extends ash.core.System

  engine: null
  creator: null
  gameNodes: null
  waitNodes: null
  asteroids: null

  constructor: (@creator) ->

  addToEngine: (engine) ->
    @engine = engine
    @waitNodes = engine.getNodeList(WaitForStartNode)
    @gameNodes = engine.getNodeList(GameNode)
    @asteroids = engine.getNodeList(AsteroidCollisionNode)
    return # Void

  removeFromEngine: (engine) ->
    @waitNodes = null
    @gameNodes = null
    return # Void

  update: (time) =>
    node = @waitNodes.head
    game = @gameNodes.head

    if (node and node.wait.startGame and game)
      asteroid = @asteroids.head
      while asteroid
        @creator.destroyEntity(asteroid.entity)
        asteroid = asteroid.next

      game.state.setForStart()
      node.wait.startGame = false
      @engine.removeEntity(node.entity)
    return # Void
