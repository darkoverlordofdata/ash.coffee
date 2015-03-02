'use strict'
ash = require('../../../lib')
asteroids = require('../../../example')

SpaceshipCollisionNode    = asteroids.nodes.SpaceshipCollisionNode
AsteroidCollisionNode     = asteroids.nodes.AsteroidCollisionNode
BulletCollisionNode       = asteroids.nodes.BulletCollisionNode
GameNode                  = asteroids.nodes.GameNode

Animation             = asteroids.components.Animation
Asteroid              = asteroids.components.Asteroid
Audio                 = asteroids.components.Audio
Bullet                = asteroids.components.Bullet
Collision             = asteroids.components.Collision
DeathThroes           = asteroids.components.DeathThroes
Display               = asteroids.components.Display
GameState             = asteroids.components.GameState
Gun                   = asteroids.components.Gun
GunControls           = asteroids.components.GunControls
Hud                   = asteroids.components.Hud
Motion                = asteroids.components.Motion
MotionControls        = asteroids.components.MotionControls
Physics               = asteroids.components.Physics
Position              = asteroids.components.Position
Spaceship             = asteroids.components.Spaceship
WaitForStart          = asteroids.components.WaitForStart

AsteroidDeathView     = asteroids.graphics.AsteroidDeathView
AsteroidView          = asteroids.graphics.AsteroidView
BulletView            = asteroids.graphics.BulletView
HudView               = asteroids.graphics.HudView
SpaceshipDeathView    = asteroids.graphics.SpaceshipDeathView
SpaceshipView         = asteroids.graphics.SpaceshipView


class asteroids.systems.CollisionSystem extends ash.core.System

  creator       : null #  EntityCreator
  games         : null #  NodeList
  spaceships    : null #  NodeList
  asteroids     : null #  NodeList
  bullets       : null #  NodeList

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
          if (asteroid.collision.radius > 10)
            @creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5)
            @creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5)

#          @creator.destroyEntity asteroid.entity
          asteroid.asteroid.fsm.changeState('destroyed')

          ###
           emulate the fsm state change
          ###
#          deathView = new AsteroidDeathView(@creator.graphic, asteroid.collision.radius)
#          asteroid.entity.remove(Motion)
#          asteroid.entity.remove(Collision)
#          asteroid.entity.remove(Display)
#          asteroid.entity.remove(Audio)
#          asteroid.entity.remove(Position)
#          asteroid.entity.remove(Asteroid)
#          asteroid.entity.add(new DeathThroes(3))
#          asteroid.entity.add(new Display(deathView))
#          asteroid.entity.add(new Animation(deathView))

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
#          @creator.destroyEntity spaceship.entity
          spaceship.spaceship.fsm.changeState('destroyed')

          ###
           emulate the fsm state change
          ###
#          deathView = new SpaceshipDeathView(@creator.graphic)
#          spaceship.entity.remove(Motion)
#          spaceship.entity.remove(MotionControls)
#          spaceship.entity.remove(Gun)
#          spaceship.entity.remove(GunControls)
#          spaceship.entity.remove(Collision)
#          spaceship.entity.remove(Display)
#          spaceship.entity.remove(Audio)
#          spaceship.entity.remove(Position)
#          spaceship.entity.remove(Spaceship)
#          spaceship.entity.add(new DeathThroes(5))
#          spaceship.entity.add(new Display(deathView))
#          spaceship.entity.add(new Animation(deathView))


        #          asteroid.audio.play(ExplodeShip)
          if (@games.head)
            @games.head.state.lives++
          break

        asteroid = asteroid.next
      spaceship = spaceship.next

    return # Void
