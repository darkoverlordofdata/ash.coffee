'use strict'
ash = require('../../../lib')
example = require('../../../example')

SpaceshipCollisionNode    = example.nodes.SpaceshipCollisionNode
AsteroidCollisionNode     = example.nodes.AsteroidCollisionNode
BulletCollisionNode       = example.nodes.BulletCollisionNode
GameNode                  = example.nodes.GameNode

class example.systems.CollisionSystem extends ash.core.System

  creator       : null
  games         : null
  spaceships    : null
  asteroids     : null
  bullets       : null

  constructor: (@creator) ->

  addToEngine: (engine) ->
    @games        = engine.getNodeList(GameNode)
    @spaceships   = engine.getNodeList(SpaceshipCollisionNode)
    @asteroids    = engine.getNodeList(AsteroidCollisionNode)
    @bullets      = engine.getNodeList(BulletCollisionNode)
    return # Void

  removeFromEngine: (engine) ->
    @games        = null
    @spaceships   = null
    @asteroids    = null
    @bullets      = null
    return # Void

  # todo: Audio.play

  update: (time) =>

    bullet = @bullets.head
    while bullet
      asteroid = @asteroids.head
      while asteroid
        if asteroid.position.position.distanceTo(bullet.position.position) <= asteroid.collision.radius
          @creator.destroyEntity bullet.entity
          @creator.createAsteroid asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5  if asteroid.collision.radius > 10
          @creator.destroyEntity asteroid.entity

          asteroid.asteroid.fsm.changeState('destroyed')
          #asteroid.audio.play(ExplodeAsteroid)
          if (@games.head)
            @games.head.state.hits++

          break
        asteroid = asteroid.next
      bullet = bullet.next

    spaceship = @spaceships.head
    while spaceship
      asteroid = @asteroids.head
      while asteroid
        if asteroid.position.position.distanceTo(spaceship.position.position) <= asteroid.collision.radius + spaceship.collision.radius
          @creator.destroyEntity spaceship.entity

          spaceship.spaceship.fsm.changeState('destroyed')
          #asteroid.audio.play(ExplodeShip)
          if (@games.head)
            @games.head.state.lives++

          break
        asteroid = asteroid.next
      spaceship = spaceship.next

    return # Void
