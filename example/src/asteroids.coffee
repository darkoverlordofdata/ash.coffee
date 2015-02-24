ash = require('../../lib')
example = require('../../example')

GameState             = example.components.GameState
GameManager           = example.systems.GameManager
MotionControlSystem   = example.systems.MotionControlSystem
GunControlSystem      = example.systems.GunControlSystem
BulletAgeSystem       = example.systems.BulletAgeSystem
MovementSystem        = example.systems.MovementSystem
CollisionSystem       = example.systems.CollisionSystem
RenderSystem          = example.systems.RenderSystem
SystemPriorities      = example.systems.SystemPriorities
EntityCreator         = example.EntityCreator

class example.Asteroids

  width: 0
  height: 0
  engine: null
  gameState: null
  tickProvider: null

  constructor: (canvas, stats) ->
    canvasContext = canvas.getContext("2d")
    @width = canvas.width
    @height = canvas.height
    @engine = new ash.core.Engine()
    @gameState = new GameState(@width, @height)
    creator = new EntityCreator(@engine, canvasContext)
    @engine.addSystem new GameManager(@gameState, creator), SystemPriorities.preUpdate
    @engine.addSystem new MotionControlSystem(KeyPoll), SystemPriorities.update
    @engine.addSystem new GunControlSystem(KeyPoll, creator), SystemPriorities.update
    @engine.addSystem new BulletAgeSystem(creator), SystemPriorities.update
    @engine.addSystem new MovementSystem(@gameState), SystemPriorities.move
    @engine.addSystem new CollisionSystem(creator), SystemPriorities.resolveCollisions
    @engine.addSystem new RenderSystem(canvasContext), SystemPriorities.render
    @tickProvider = new TickProvider(stats)
    return

  start: ->
    @gameState.level = 0
    @gameState.lives = 3
    @gameState.points = 0
    @tickProvider.add @engine.update, @engine
    @tickProvider.start()
    return

