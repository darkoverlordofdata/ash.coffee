goog.provide('asteroids.EntityCreator');

goog.require('asteroids.graphics.WaitForStartView');
goog.require('ash.core.Entity');
goog.require('ash.fsm.EntityStateMachine');
goog.require('asteroids.components.Animation');
goog.require('asteroids.components.Asteroid');
goog.require('asteroids.components.Audio');
goog.require('asteroids.components.Bullet');
goog.require('asteroids.components.Collision');
goog.require('asteroids.components.DeathThroes');
goog.require('asteroids.components.Display');
goog.require('asteroids.components.GameState');
goog.require('asteroids.components.Gun');
goog.require('asteroids.components.GunControls');
goog.require('asteroids.components.Hud');
goog.require('asteroids.components.Motion');
goog.require('asteroids.components.MotionControls');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Spaceship');
goog.require('asteroids.components.WaitForStart');
goog.require('asteroids.graphics.AsteroidDeathView');
goog.require('asteroids.graphics.AsteroidView');
goog.require('asteroids.graphics.BulletView');
goog.require('asteroids.graphics.HudView');
goog.require('asteroids.graphics.SpaceshipDeathView');
goog.require('asteroids.graphics.SpaceshipView');

asteroids.EntityCreator = function(_at_engine, _at_graphic, _at_world) {
  this.engine = _at_engine;
  this.graphic = _at_graphic;
  this.world = _at_world;
}
var KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_Z;
KEY_LEFT = 37;
KEY_UP = 38;
KEY_RIGHT = 39;
KEY_Z = 90;
asteroids.EntityCreator.prototype.engine = null;
asteroids.EntityCreator.prototype.waitEntity = null;
asteroids.EntityCreator.prototype.graphic = null;
asteroids.EntityCreator.prototype.destroyEntity = function(entity) {
  this.engine.removeEntity(entity);
};

/*
 * Game State
 */
asteroids.EntityCreator.prototype.createGame = function() {
  var gameEntity, hud;
  hud = new asteroids.graphics.HudView(this.graphic);
  gameEntity = new ash.core.Entity('game').add(new asteroids.components.GameState()).add(new asteroids.components.Hud(hud)).add(new asteroids.components.Display(hud)).add(new asteroids.components.Position(0, 0, 0, 0));
  this.engine.addEntity(gameEntity);
  return gameEntity;
};

/*
 * Start...
 */
asteroids.EntityCreator.prototype.createWaitForClick = function() {
  var waitView;
  if (!this.waitEntity) {
    waitView = new asteroids.graphics.WaitForStartView(this.graphic);
    this.waitEntity = new ash.core.Entity('wait').add(new asteroids.components.WaitForStart(waitView)).add(new asteroids.components.Display(waitView)).add(new asteroids.components.Position(0, 0, 0, 0));
  }
  this.waitEntity.get(asteroids.components.WaitForStart).startGame = false;
  this.engine.addEntity(this.waitEntity);
  return this.waitEntity;
};

/*
 * Create an Asteroid with FSM Animation
 */
asteroids.EntityCreator.prototype.createAsteroid = function(radius, x, y) {
  var asteroid, deathView, fsm;
  asteroid = new ash.core.Entity();
  fsm = new ash.fsm.EntityStateMachine(asteroid);
  fsm.createState('alive').add(asteroids.components.Motion).withInstance(new asteroids.components.Motion((Math.random() - 0.5) * 4 * (50 - radius), (Math.random() - 0.5) * 4 * (50 - radius), Math.random() * 2 - 1, 0)).add(asteroids.components.Collision).withInstance(new asteroids.components.Collision(radius)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(new asteroids.graphics.AsteroidView(this.graphic, radius)));
  deathView = new asteroids.graphics.AsteroidDeathView(this.graphic, radius);
  fsm.createState('destroyed').add(asteroids.components.DeathThroes).withInstance(new asteroids.components.DeathThroes(3)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(deathView)).add(asteroids.components.Animation).withInstance(new asteroids.components.Animation(deathView));
  asteroid.add(new asteroids.components.Asteroid(fsm)).add(new asteroids.components.Position(x, y, 0)).add(new asteroids.components.Audio());
  fsm.changeState('alive');
  this.engine.addEntity(asteroid);
  return asteroid;
};

/*
 * Create Player Spaceship with FSM Animation
 */
asteroids.EntityCreator.prototype.createSpaceship = function() {
  var deathView, fsm, spaceship;
  spaceship = new ash.core.Entity();
  fsm = new ash.fsm.EntityStateMachine(spaceship);
  fsm.createState('playing').add(asteroids.components.Motion).withInstance(new asteroids.components.Motion(0, 0, 0, 15)).add(asteroids.components.MotionControls).withInstance(new asteroids.components.MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3)).add(asteroids.components.Gun).withInstance(new asteroids.components.Gun(8, 0, 0.3, 2)).add(asteroids.components.GunControls).withInstance(new asteroids.components.GunControls(KEY_Z)).add(asteroids.components.Collision).withInstance(new asteroids.components.Collision(9)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(new asteroids.graphics.SpaceshipView(this.graphic)));
  deathView = new asteroids.graphics.SpaceshipDeathView(this.graphic);
  fsm.createState('destroyed').add(asteroids.components.DeathThroes).withInstance(new asteroids.components.DeathThroes(5)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(deathView)).add(asteroids.components.Animation).withInstance(new asteroids.components.Animation(deathView));
  spaceship.add(new asteroids.components.Spaceship(fsm)).add(new asteroids.components.Position(300, 225, 0)).add(new asteroids.components.Audio());
  fsm.changeState('playing');
  this.engine.addEntity(spaceship);
  return spaceship;
};

/*
 * Create a Bullet
 */
asteroids.EntityCreator.prototype.createUserBullet = function(gun, parentPosition) {
  var bullet, cos, sin, x, y;
  cos = Math.cos(parentPosition.rotation);
  sin = Math.sin(parentPosition.rotation);
  x = cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x;
  y = sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y;
  bullet = new ash.core.Entity().add(new asteroids.components.Bullet(gun.bulletLifetime)).add(new asteroids.components.Position(x, y, 0)).add(new asteroids.components.Collision(0)).add(new asteroids.components.Motion(cos * 150, sin * 150, 0, 0)).add(new asteroids.components.Display(new asteroids.graphics.BulletView(this.graphic)));
  this.engine.addEntity(bullet);
  return bullet;
};