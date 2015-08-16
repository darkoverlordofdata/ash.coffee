goog.provide('asteroids.Asteroids');

goog.require('asteroids.systems.AnimationSystem');
goog.require('asteroids.systems.AudioSystem');
goog.require('asteroids.systems.BulletAgeSystem');
goog.require('asteroids.systems.CollisionSystem');
goog.require('asteroids.systems.DeathThroesSystem');
goog.require('asteroids.systems.GameManager');
goog.require('asteroids.systems.GunControlSystem');
goog.require('asteroids.systems.HudSystem');
goog.require('asteroids.systems.MotionControlSystem');
goog.require('asteroids.systems.MovementSystem');
goog.require('asteroids.systems.RenderSystem');
goog.require('asteroids.systems.SystemPriorities');
goog.require('asteroids.systems.WaitForStartSystem');
goog.require('asteroids.components.GameState');
goog.require('asteroids.EntityCreator');
goog.require('asteroids.GameConfig');
goog.require('asteroids.input.KeyPoll');
goog.require('ash.core.Engine');
goog.require('ash.tick.FrameTickProvider');
goog.require('ash.ext.Helper');

asteroids.Asteroids = function(_at_container, width, height) {
  this.container = _at_container;
  this.prepare(width, height);
}
asteroids.Asteroids.prototype.container = null;
asteroids.Asteroids.prototype.engine = null;
asteroids.Asteroids.prototype.tickProvider = null;
asteroids.Asteroids.prototype.creator = null;
asteroids.Asteroids.prototype.keyPoll = null;
asteroids.Asteroids.prototype.config = null;
asteroids.Asteroids.prototype.prepare = function(width, height) {
  this.engine = new ash.core.Engine();
  this.creator = new asteroids.EntityCreator(this.engine, this.container, this.world);
  this.keyPoll = new asteroids.input.KeyPoll(window);
  this.config = new asteroids.GameConfig();
  this.config.height = height;
  this.config.width = width;
  SystemPriorities = {
    preUpdate: 1,
    update: 2,
    move: 3,
    resolveCollisions: 4,
    stateMachines: 5,
    animate: 6,
    render: 7
  };
  this.engine.addSystem(new asteroids.systems.WaitForStartSystem(this.creator), asteroids.systems.SystemPriorities.preUpdate);
  this.engine.addSystem(new asteroids.systems.GameManager(this.creator, this.config), asteroids.systems.SystemPriorities.preUpdate);
  this.engine.addSystem(new asteroids.systems.MotionControlSystem(this.keyPoll), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.GunControlSystem(this.keyPoll, this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.BulletAgeSystem(this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.DeathThroesSystem(this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.MovementSystem(this.config), asteroids.systems.SystemPriorities.move);
  this.engine.addSystem(new asteroids.systems.CollisionSystem(this.creator), asteroids.systems.SystemPriorities.resolveCollisions);
  this.engine.addSystem(new asteroids.systems.AnimationSystem(), asteroids.systems.SystemPriorities.animate);
  this.engine.addSystem(new asteroids.systems.HudSystem(), asteroids.systems.SystemPriorities.animate);
  this.engine.addSystem(new asteroids.systems.RenderSystem(this.container), asteroids.systems.SystemPriorities.render);
  this.engine.addSystem(new asteroids.systems.AudioSystem(), asteroids.systems.SystemPriorities.render);
  this.creator.createWaitForClick();
  this.creator.createGame();
};
asteroids.Asteroids.prototype.start = function() {
  var stats, x, y;
  if (navigator.isCocoonJS) {
    stats = null;
  } else {
    x = Math.floor(this.config.width / 2) - 40;
    y = 0;
    stats = new Stats();
    stats['setMode'](0);
    stats['domElement'].style.position = "absolute";
    stats['domElement'].style.left = x + "px";
    stats['domElement'].style.top = y + "px";
    document.body.appendChild(stats['domElement']);
  }
  this.tickProvider = new ash.tick.FrameTickProvider(stats);
  this.tickProvider.add(this.engine.update);
  this.tickProvider.start();
};