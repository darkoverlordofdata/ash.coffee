'use strict'
ash = require('../../../lib')
example = require('../../../example')

SpaceshipCollision    = example.nodes.SpaceshipCollision
AsteroidCollision     = example.nodes.AsteroidCollision
BulletCollision       = example.nodes.BulletCollision

class example.systems.CollisionSystem extends ash.core.System
    creator: null
    spaceships: null
    asteroids: null
    bullets: null
    constructor: (creator) ->
      @creator = creator
      this

    addToEngine: (game) ->
      @spaceships = game.getNodeList(SpaceshipCollision)
      @asteroids = game.getNodeList(AsteroidCollision)
      @bullets = game.getNodeList(BulletCollision)
      return

    removeFromEngine: (game) ->
      @spaceships = null
      @asteroids = null
      @bullets = null
      return

    update: (time) =>
      bullet = undefined
      asteroid = undefined
      spaceship = undefined
      bullet = @bullets.head
      while bullet
        asteroid = @asteroids.head
        while asteroid
          if asteroid.position.position.distanceTo(bullet.position.position) <= asteroid.position.collisionRadius
            @creator.destroyEntity bullet.entity
            @creator.createAsteroid asteroid.position.collisionRadius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5  if asteroid.position.collisionRadius > 10
            @creator.destroyEntity asteroid.entity
            break
          asteroid = asteroid.next
        bullet = bullet.next
      spaceship = @spaceships.head
      while spaceship
        asteroid = @asteroids.head
        while asteroid
          if asteroid.position.position.distanceTo(spaceship.position.position) <= asteroid.position.collisionRadius + spaceship.position.collisionRadius
            @creator.destroyEntity spaceship.entity
            break
          asteroid = asteroid.next
        spaceship = spaceship.next
      return
