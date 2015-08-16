// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var Animation, Asteroid, AsteroidCollisionNode, AsteroidDeathView, AsteroidView, Audio, Bullet, BulletCollisionNode, BulletView, Collision, DeathThroes, Display, GameNode, GameState, Gun, GunControls, Hud, HudView, Motion, MotionControls, Position, Spaceship, SpaceshipCollisionNode, SpaceshipDeathView, SpaceshipView, WaitForStart,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  SpaceshipCollisionNode = asteroids.nodes.SpaceshipCollisionNode;

  AsteroidCollisionNode = asteroids.nodes.AsteroidCollisionNode;

  BulletCollisionNode = asteroids.nodes.BulletCollisionNode;

  GameNode = asteroids.nodes.GameNode;

  Animation = asteroids.components.Animation;

  Asteroid = asteroids.components.Asteroid;

  Audio = asteroids.components.Audio;

  Bullet = asteroids.components.Bullet;

  Collision = asteroids.components.Collision;

  DeathThroes = asteroids.components.DeathThroes;

  Display = asteroids.components.Display;

  GameState = asteroids.components.GameState;

  Gun = asteroids.components.Gun;

  GunControls = asteroids.components.GunControls;

  Hud = asteroids.components.Hud;

  Motion = asteroids.components.Motion;

  MotionControls = asteroids.components.MotionControls;

  Position = asteroids.components.Position;

  Spaceship = asteroids.components.Spaceship;

  WaitForStart = asteroids.components.WaitForStart;

  AsteroidDeathView = asteroids.graphics.AsteroidDeathView;

  AsteroidView = asteroids.graphics.AsteroidView;

  BulletView = asteroids.graphics.BulletView;

  HudView = asteroids.graphics.HudView;

  SpaceshipDeathView = asteroids.graphics.SpaceshipDeathView;

  SpaceshipView = asteroids.graphics.SpaceshipView;

  asteroids.systems.CollisionSystem = (function(_super) {
    __extends(CollisionSystem, _super);

    CollisionSystem.prototype.creator = null;

    CollisionSystem.prototype.games = null;

    CollisionSystem.prototype.spaceships = null;

    CollisionSystem.prototype.asteroids = null;

    CollisionSystem.prototype.bullets = null;

    function CollisionSystem(_at_creator) {
      this.creator = _at_creator;
      this.update = __bind(this.update, this);
    }

    CollisionSystem.prototype.addToEngine = function(engine) {
      this.games = engine.getNodeList(GameNode);
      this.spaceships = engine.getNodeList(SpaceshipCollisionNode);
      this.asteroids = engine.getNodeList(AsteroidCollisionNode);
      this.bullets = engine.getNodeList(BulletCollisionNode);
    };

    CollisionSystem.prototype.removeFromEngine = function(engine) {
      this.games = null;
      this.spaceships = null;
      this.asteroids = null;
      this.bullets = null;
    };

    CollisionSystem.prototype.update = function(time) {
      var asteroid, bullet, spaceship;
      bullet = this.bullets.head;
      while (bullet) {
        asteroid = this.asteroids.head;
        while (asteroid) {
          if (asteroid.position.position.distanceTo(bullet.position.position) <= asteroid.collision.radius) {

            /*
             You hit an asteroid
             */
            this.creator.destroyEntity(bullet.entity);
            if (asteroid.collision.radius > 10) {
              this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
              this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
            }
            asteroid.asteroid.fsm.changeState('destroyed');
            if (this.games.head) {
              this.games.head.state.hits++;
            }
            break;
          }
          asteroid = asteroid.next;
        }
        bullet = bullet.next;
      }
      spaceship = this.spaceships.head;
      while (spaceship) {
        asteroid = this.asteroids.head;
        while (asteroid) {
          if (asteroid.position.position.distanceTo(spaceship.position.position) <= asteroid.collision.radius + spaceship.collision.radius) {

            /*
             You were hit
             */
            spaceship.spaceship.fsm.changeState('destroyed');
            if (this.games.head) {
              this.games.head.state.lives++;
            }
            break;
          }
          asteroid = asteroid.next;
        }
        spaceship = spaceship.next;
      }
    };

    return CollisionSystem;

  })(ash.core.System);

}).call(this);

//# sourceMappingURL=collision_system.js.map
