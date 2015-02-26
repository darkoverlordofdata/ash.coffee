ash = require('../../lib')
example = require('../../example')

Asteroid        = example.components.Asteroid
Spaceship       = example.components.Spaceship
Bullet          = example.components.Bullet
Position        = example.components.Position
Motion          = example.components.Motion
MotionControls  = example.components.MotionControls
Gun             = example.components.Gun
GunControls     = example.components.GunControls
Display         = example.components.Display
AsteroidView    = example.graphics.AsteroidView
SpaceshipView   = example.graphics.SpaceshipView
BulletView      = example.graphics.BulletView

class example.EntityCreator


  KEY_LEFT    = 37
  KEY_UP      = 38
  KEY_RIGHT   = 39
  KEY_Z       = 90

  game: null
  graphics: null
  constructor: (game, graphics) ->
    @game = game
    @graphics = graphics
    return

  destroyEntity: (entity) ->
    @game.removeEntity entity
    return

  createAsteroid: (radius, x, y) ->
    asteroid = new ash.core.Entity()
    .add(new Asteroid())
    .add(new Position(x, y, 0, radius))
    .add(new Motion((Math.random() - 0.5) * 4 * (50 - radius), (Math.random() - 0.5) * 4 * (50 - radius), Math.random() * 2 - 1, 0))
    .add(new Display(new AsteroidView(radius, @graphics)))
    @game.addEntity asteroid
    asteroid

  createSpaceship: ->
    spaceship = new ash.core.Entity()
    .add(new Spaceship())
    .add(new Position(400, 300, 1, 6))
    .add(new Motion(0, 0, 0, 15))
    .add(new MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3))
    .add(new Gun(8, 0, 0.3, 2))
    .add(new GunControls(KEY_Z))
    .add(new Display(new SpaceshipView(@graphics)))
    @game.addEntity spaceship
    spaceship

  createUserBullet: (gun, parentPosition) ->
    cos = Math.cos(parentPosition.rotation)
    sin = Math.sin(parentPosition.rotation)
    bullet = new ash.core.Entity()
    .add(new Bullet(gun.bulletLifetime))
    .add(new Position(cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x, sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y, 0, 0))
    .add(new Motion(cos * 150, sin * 150, 0, 0))
    .add(new Display(new BulletView(@graphics)))
    @game.addEntity bullet
    bullet

