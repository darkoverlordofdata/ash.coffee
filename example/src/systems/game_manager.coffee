'use strict'
ash = require('../../../lib')
example = require('../../../example')

GameNode              = example.nodes.GameNode
SpaceshipNode         = example.nodes.SpaceshipNode
AsteroidCollisionNode     = example.nodes.AsteroidCollisionNode
BulletCollisionNode       = example.nodes.BulletCollisionNode
Point                 = example.graphics.Point

class example.systems.GameManager extends ash.core.System
  config: null
  creator: null

  gameNodes: null
  spaceships: null
  asteroids: null
  bullets: null

  constructor: (@creator, @config) ->
    return

  addToEngine: (game) ->
    @gameNodes = game.getNodeList(GameNode)
    @spaceships = game.getNodeList(SpaceshipNode)
    @asteroids = game.getNodeList(AsteroidCollisionNode)
    @bullets = game.getNodeList(BulletCollisionNode)
    return

  update: (time) =>
    node = gameNodes.head
    if node and node.state.playing
      if @spaceships.empty
        if @node.state.lives > 0
          newSpaceshipPosition = new Point(@node.state.width * 0.5, @node.state.height * 0.5)
          clearToAddSpaceship = true
          asteroid = @asteroids.head
  
          while asteroid
            if asteroid.position.position.distanceTo(newSpaceshipPosition) <= asteroid.position.collisionRadius + 50
              clearToAddSpaceship = false
              break
            asteroid = asteroid.next
          if clearToAddSpaceship
            @creator.createSpaceship()
            @node.state.lives--
        else
  
      # game over
      if @asteroids.empty and @bullets.empty and not @spaceships.empty
        position = undefined
  
        # next level
        spaceship = @spaceships.head
        @node.state.level++
        asteroidCount = 2 + @node.state.level
        i = 0
  
        while i < asteroidCount
  
          # check not on top of spaceship
          loop
            position = new Point(Math.random() * @node.state.width, Math.random() * @node.state.height)
            break unless position.distanceTo(spaceship.position.position) <= 80
          @creator.createAsteroid 30, position.x, position.y
          ++i
      return

  removeFromEngine: (game) ->
    @gameNodes = null
    @spaceships = null
    @asteroids = null
    @bullets = null
    return

