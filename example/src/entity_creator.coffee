#+--------------------------------------------------------------------+
#| entity_creator.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2015
#+--------------------------------------------------------------------+
#|
#| This file is a part of ash.coffee
#|
#| ash.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# EntityCreator
#
'use strict'
ash = require('../../lib')
example = require('../../example')
###
 * Asteroid Game Components
###
Animation             = example.components.Animation
Asteroid              = example.components.Asteroid
Audio                 = example.components.Audio
Bullet                = example.components.Bullet
Collision             = example.components.Collision
DeathThroes           = example.components.DeathThroes
Display               = example.components.Display
GameState             = example.components.GameState
Gun                   = example.components.Gun
GunControls           = example.components.GunControls
Hud                   = example.components.Hud
Motion                = example.components.Motion
MotionControls        = example.components.MotionControls
Physics               = example.components.Physics
Position              = example.components.Position
Spaceship             = example.components.Spaceship
WaitForStart          = example.components.WaitForStart
###
 * Drawable Components
###
AsteroidDeathView     = example.graphics.AsteroidDeathView
AsteroidView          = example.graphics.AsteroidView
BulletView            = example.graphics.BulletView
HudView               = example.graphics.HudView
SpaceshipDeathView    = example.graphics.SpaceshipDeathView
SpaceshipView         = example.graphics.SpaceshipView

###
 * Box2D subset supported by cocoon's IDTK_SRV_BOX2D:
###
b2Mat22               = Box2D.Common.Math.b2Mat22                 # 2 x 2 Matrix
b2Math                = Box2D.Common.Math.b2Math                  # ??
b2Transform           = Box2D.Common.Math.b2Transform             # A transform contains translation and rotation.
b2Vec2                = Box2D.Common.Math.b2Vec2                  # A 2D column vector.
b2Body                = Box2D.Dynamics.b2Body                     # A rigid body.
b2BodyDef             = Box2D.Dynamics.b2BodyDef                  # A body definition holds all the data needed to construct a rigid body.
b2Contact             = Box2D.Dynamics.b2Contact
b2ContactFilter       = Box2D.Dynamics.b2ContactFilter            # Implement this class to provide collision filtering.
b2ContactListener     = Box2D.Dynamics.b2ContactListener          # Implement this class to get contact information.
b2DebugDraw           = Box2D.Dynamics.b2DebugDraw                # Implement and register this class with a b2World to provide debug drawing of physics entities in your game.
b2Fixture             = Box2D.Dynamics.b2Fixture                  # A fixture is used to attach a shape to a body for collision detection.
b2FixtureDef          = Box2D.Dynamics.b2FixtureDef               # A fixture definition is used to create a fixture.
b2World               = Box2D.Dynamics.b2World                    # The world class manages all physics entities, dynamic simulation, and asynchronous queries
b2CircleShape         = Box2D.Collision.Shapes.b2CircleShape      # A circle shape.
b2PolygonShape        = Box2D.Collision.Shapes.b2PolygonShape     # Convex polygon.
b2DistanceJointDef    = Box2D.Dynamics.Joints.b2DistanceJointDef  # Distance joint definition.
b2Joint               = Box2D.Dynamics.Joints.b2Joint             # The base joint class.
b2RevoluteJointDef    = Box2D.Dynamics.Joints.b2RevoluteJointDef  # Revolute joint definition.

class example.EntityCreator


  KEY_LEFT    = 37
  KEY_UP      = 38
  KEY_RIGHT   = 39
  KEY_Z       = 90

  engine: null
  waitEntity: null
  graphics: null

  constructor: (@engine, @graphics, @world) ->

  destroyEntity: (entity) ->
    @engine.removeEntity entity
    return

  createGame: () ->

    hud = new HudView()

    gameEntity = new ash.core.Entity('game')
    .add(new GameState())
    .add(new Hud(hud))
    .add(new Display(hud))
    .add(new Position(0, 0, 0, 0))
    @engine.addEntity gameEntity
    return gameEntity

  createWaitForClick: () ->

    if not @waitEntity

      waitView = new WaitForStartView()
      @waitEntity = new ash.core.Entity('wait')
      .add(new WaitForStart(waitView))
      .add(new Display(waitView))
      .add(new Position(0, 0, 0, 0))

    @waitEntity.get(WaitForStart).startGame = false
    @engine.addEntity(@waitEntity)
    return @waitEntity


  createAsteroid: (radius, x, y) ->

    velocityX = (Math.random() - 0.5) * 4 * (50 - radius)
    velocityY = (Math.random() - 0.5) * 4 * (50 - radius)
    angularVelocity = Math.random() * 2 - 1
    damping = 0

    rotation = 0
    collisionRadius = radius

    asteroid = new ash.core.Entity()
    .add(new Asteroid())
    .add(new Position(x, y, rotation))
    .add(new Audio())
    .add(new Motion(velocityX, velocityY, angularVelocity, damping))
    .add(new Collision(collisionRadius))
    .add(new Display(new AsteroidView(@graphics, radius)))
    @engine.addEntity asteroid
    return asteroid

  createSpaceship: ->

    velocityX = 0
    velocityY = 0
    angularVelocity = 0
    damping = 15

    x = 400
    y = 300
    rotation = 1
    collisionRadius = 6

    bodyDef = new b2BodyDef()
    bodyDef.type = b2Body.b2_dynamicBody
    bodyDef.fixedRotation = true
    bodyDef.position.x = x
    bodyDef.position.y = y
    bodyDef.linearVelocity.Set(velocityX, velocityY)
    bodyDef.angularVelocity = angularVelocity

    vertices = [new b2Vec2(.45, 0), new b2Vec2(-.25, .25), new b2Vec2(-.25, -.25)]

    fixDef = new b2FixtureDef()
    fixDef.density = 1.0
    fixDef.friction = 0.5
    fixDef.restitution = 0.2
    fixDef.shape = new b2PolygonShape()
    fixDef.shape.SetAsArray(vertices, vertices.length)

    body = @world.CreateBody(bodyDef)
    body.CreateFixture(fixDef)

    spaceship = new ash.core.Entity()
    .add(new Spaceship())
    .add(new Physics(body))
    .add(new Position(x, y, rotation))
    .add(new Audio())
    .add(new Motion(velocityX, velocityY, angularVelocity, damping))
    .add(new MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3))
    .add(new Gun(8, 0, 0.3, 2))
    .add(new GunControls(KEY_Z))
    .add(new Collision(collisionRadius))
    .add(new Display(new SpaceshipView(@graphics)))
    body.SetUserData(spaceship)
    @engine.addEntity spaceship
    return spaceship

  createUserBullet: (gun, parentPosition) ->

    cos = Math.cos(parentPosition.rotation)
    sin = Math.sin(parentPosition.rotation)

    velocityX = cos * 150
    velocityY = sin * 150
    angularVelocity = 0
    damping = 0

    x = cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x
    y = sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y
    rotation = 0
    collisionRadius = 0

    bullet = new ash.core.Entity()
    .add(new Bullet(gun.bulletLifetime))
    .add(new Position(x, y, rotation))
    .add(new Collision(collisionRadius))
    .add(new Motion(velocityX, velocityY, angularVelocity, damping))
    .add(new Display(new BulletView(@graphics)))
    @engine.addEntity bullet
    return bullet

