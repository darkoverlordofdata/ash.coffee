#+--------------------------------------------------------------------+
#| asteroids.coffee
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
# Asteroids
#
'use strict'
ash = require('../../lib')
example = require('../../example')

AnimationSystem       = example.systems.AnimationSystem
AudioSystem           = example.systems.AudioSystem
BulletAgeSystem       = example.systems.BulletAgeSystem
CollisionSystem       = example.systems.CollisionSystem
DeathThroesSystem     = example.systems.DeathThroesSystem
GameManager           = example.systems.GameManager
GunControlSystem      = example.systems.GunControlSystem
HudSystem             = example.systems.HudSystem
MotionControlSystem   = example.systems.MotionControlSystem
MovementSystem        = example.systems.MovementSystem
RenderSystem          = example.systems.RenderSystem
SystemPriorities      = example.systems.SystemPriorities
WaitForStartSystem    = example.systems.WaitForStartSystem
PhysicsSystem         = example.systems.PhysicsSystem


GameState             = example.components.GameState
EntityCreator         = example.EntityCreator
GameConfig            = example.GameConfig
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
    @config = new GameConfig()
    @config.height = height
    @config.width = width

#    @engine.addSystem(new PhysicsSystem(@world), SystemPriorities.preUpdate)
    @engine.addSystem(new WaitForStartSystem(@creator), SystemPriorities.preUpdate );
    @engine.addSystem(new GameManager(@creator, @config), SystemPriorities.preUpdate)
    @engine.addSystem(new MotionControlSystem(@keyPoll), SystemPriorities.update)
    @engine.addSystem(new GunControlSystem(@keyPoll, @creator), SystemPriorities.update)
    @engine.addSystem(new BulletAgeSystem(@creator), SystemPriorities.update)
    @engine.addSystem(new DeathThroesSystem(@creator), SystemPriorities.update)
    @engine.addSystem(new MovementSystem(@config), SystemPriorities.move)
    @engine.addSystem(new CollisionSystem(@creator), SystemPriorities.resolveCollisions)
    @engine.addSystem(new AnimationSystem(), SystemPriorities.animate);
    @engine.addSystem(new HudSystem(), SystemPriorities.animate);
    @engine.addSystem(new RenderSystem(@container), SystemPriorities.render)
    @engine.addSystem(new AudioSystem(), SystemPriorities.render);

    @creator.createWaitForClick()
    @creator.createGame()
    return

  start: ->

    if navigator.isCocoonJS
      stats = null
    else
      x = Math.floor(@config.width/2)-40
      y = 0
      stats = new Stats()
      stats.setMode 0
      stats.domElement.style.position = "absolute"
      stats.domElement.style.left = "#{x}px"
      stats.domElement.style.top = "#{y}px"
      document.body.appendChild stats.domElement

    @tickProvider = new ash.tick.FrameTickProvider(stats)
    @tickProvider.add(@engine.update)
    @tickProvider.start()
    return

