'use strict'
ash = require('../../lib')
example = require('../../example')

GameState             = example.components.GameState
GameManager           = example.systems.GameManager
MotionControlSystem   = example.systems.MotionControlSystem
GunControlSystem      = example.systems.GunControlSystem
BulletAgeSystem       = example.systems.BulletAgeSystem
MovementSystem        = example.systems.MovementSystem
CollisionSystem       = example.systems.CollisionSystem
PhysicsSystem         = example.systems.PhysicsSystem
RenderSystem          = example.systems.RenderSystem
SystemPriorities      = example.systems.SystemPriorities
EntityCreator         = example.EntityCreator
KeyPoll               = example.input.KeyPoll
b2Vec2                = Box2D.Common.Math.b2Vec2
b2World               = Box2D.Dynamics.b2World

class example.Asteroids

  container: null
  engine: null
  tickProvider: null
  creator: null
  keyPoll: null
  config: null

  constructor: (container, width, height) ->

    @container = container
    @prepare(width, height)

  prepare: (width, height) ->

    @world = new b2World(new b2Vec2(0, 0), true)
    @engine = new ash.core.Engine()
    @creator = new EntityCreator(@engine, @container, @world)
    @keyPoll = new KeyPoll(window)
    @config = new GameState()
    @config.height = height
    @config.width = width

    @engine.addSystem(new PhysicsSystem(@world), SystemPriorities.preUpdate)
    @engine.addSystem(new GameManager(@config, @creator), SystemPriorities.preUpdate)
    @engine.addSystem(new MotionControlSystem(@keyPoll), SystemPriorities.update)
    @engine.addSystem(new GunControlSystem(@keyPoll, @creator), SystemPriorities.update)
    @engine.addSystem(new BulletAgeSystem(@creator), SystemPriorities.update)
    @engine.addSystem(new MovementSystem(@config), SystemPriorities.move)
    @engine.addSystem(new CollisionSystem(@creator), SystemPriorities.resolveCollisions)
    @engine.addSystem(new RenderSystem(@container), SystemPriorities.render)
    return

  start: ->

    if not navigator.isCocoonJS
      stats = new Stats()
      stats.setMode 0
      stats.domElement.style.position = "absolute"
      stats.domElement.style.left = "0px"
      stats.domElement.style.top = "0px"
      document.body.appendChild stats.domElement

    @tickProvider = new ash.tick.FrameTickProvider(stats)
    @tickProvider.add(@engine.update)
    @tickProvider.start()
    return

