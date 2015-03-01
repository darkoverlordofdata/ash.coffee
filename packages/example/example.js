!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Example=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var example;

module.exports = example = (function() {
  function example() {}

  return example;

})();

example.input = (function() {
  function input() {}

  return input;

})();

require('./src/input/key_poll');

example.graphics = (function() {
  function graphics() {}

  return graphics;

})();

require('./src/graphics/point');

require('./src/graphics/asteroid_view');

require('./src/graphics/asteroid_death_view');

require('./src/graphics/bullet_view');

require('./src/graphics/hud_view');

require('./src/graphics/spaceship_death_view');

require('./src/graphics/spaceship_view');

require('./src/graphics/wait_for_start_view');

example.components = (function() {
  function components() {}

  return components;

})();

require('./src/components/animation');

require('./src/components/asteroid');

require('./src/components/audio');

require('./src/components/bullet');

require('./src/components/collision');

require('./src/components/death_throes');

require('./src/components/display');

require('./src/components/game_state');

require('./src/components/gun');

require('./src/components/gun_controls');

require('./src/components/hud');

require('./src/components/motion');

require('./src/components/motion_controls');

require('./src/components/physics');

require('./src/components/position');

require('./src/components/spaceship');

require('./src/components/wait_for_start');

example.nodes = (function() {
  function nodes() {}

  return nodes;

})();

require('./src/nodes/animation_node');

require('./src/nodes/asteroid_collision_node');

require('./src/nodes/audio_node');

require('./src/nodes/bullet_age_node');

require('./src/nodes/bullet_collision_node');

require('./src/nodes/death_throes_node');

require('./src/nodes/game_node');

require('./src/nodes/gun_control_node');

require('./src/nodes/hud_node');

require('./src/nodes/motion_control_node');

require('./src/nodes/movement_node');

require('./src/nodes/physics_node');

require('./src/nodes/render_node');

require('./src/nodes/spaceship_collision_node');

require('./src/nodes/spaceship_node');

require('./src/nodes/wait_for_start_node');

example.systems = (function() {
  function systems() {}

  return systems;

})();

require('./src/systems/animation_system');

require('./src/systems/audio_system');

require('./src/systems/bullet_age_system');

require('./src/systems/collision_system');

require('./src/systems/death_throes_system');

require('./src/systems/game_manager');

require('./src/systems/gun_control_system');

require('./src/systems/hud_system');

require('./src/systems/motion_control_system');

require('./src/systems/movement_system');

require('./src/systems/physics_system');

require('./src/systems/render_system');

require('./src/systems/system_priorities');

require('./src/systems/wait_for_start_system');

require('./src/entity_creator');

require('./src/game_config');

require('./src/asteroids');

require('./src/main');

//# sourceMappingURL=index.js.map

},{"./src/asteroids":2,"./src/components/animation":3,"./src/components/asteroid":4,"./src/components/audio":5,"./src/components/bullet":6,"./src/components/collision":7,"./src/components/death_throes":8,"./src/components/display":9,"./src/components/game_state":10,"./src/components/gun":11,"./src/components/gun_controls":12,"./src/components/hud":13,"./src/components/motion":14,"./src/components/motion_controls":15,"./src/components/physics":16,"./src/components/position":17,"./src/components/spaceship":18,"./src/components/wait_for_start":19,"./src/entity_creator":20,"./src/game_config":21,"./src/graphics/asteroid_death_view":22,"./src/graphics/asteroid_view":23,"./src/graphics/bullet_view":24,"./src/graphics/hud_view":25,"./src/graphics/point":26,"./src/graphics/spaceship_death_view":27,"./src/graphics/spaceship_view":28,"./src/graphics/wait_for_start_view":29,"./src/input/key_poll":30,"./src/main":31,"./src/nodes/animation_node":32,"./src/nodes/asteroid_collision_node":33,"./src/nodes/audio_node":34,"./src/nodes/bullet_age_node":35,"./src/nodes/bullet_collision_node":36,"./src/nodes/death_throes_node":37,"./src/nodes/game_node":38,"./src/nodes/gun_control_node":39,"./src/nodes/hud_node":40,"./src/nodes/motion_control_node":41,"./src/nodes/movement_node":42,"./src/nodes/physics_node":43,"./src/nodes/render_node":44,"./src/nodes/spaceship_collision_node":45,"./src/nodes/spaceship_node":46,"./src/nodes/wait_for_start_node":47,"./src/systems/animation_system":48,"./src/systems/audio_system":49,"./src/systems/bullet_age_system":50,"./src/systems/collision_system":51,"./src/systems/death_throes_system":52,"./src/systems/game_manager":53,"./src/systems/gun_control_system":54,"./src/systems/hud_system":55,"./src/systems/motion_control_system":56,"./src/systems/movement_system":57,"./src/systems/physics_system":58,"./src/systems/render_system":59,"./src/systems/system_priorities":60,"./src/systems/wait_for_start_system":61}],2:[function(require,module,exports){
'use strict';
var AnimationSystem, AudioSystem, BulletAgeSystem, CollisionSystem, DeathThroesSystem, EntityCreator, GameConfig, GameManager, GameState, GunControlSystem, HudSystem, KeyPoll, MotionControlSystem, MovementSystem, PhysicsSystem, RenderSystem, SystemPriorities, WaitForStartSystem, ash, b2Vec2, b2World, example;

ash = require('../../lib');

example = require('../../example');

AnimationSystem = example.systems.AnimationSystem;

AudioSystem = example.systems.AudioSystem;

BulletAgeSystem = example.systems.BulletAgeSystem;

CollisionSystem = example.systems.CollisionSystem;

DeathThroesSystem = example.systems.DeathThroesSystem;

GameManager = example.systems.GameManager;

GunControlSystem = example.systems.GunControlSystem;

HudSystem = example.systems.HudSystem;

MotionControlSystem = example.systems.MotionControlSystem;

MovementSystem = example.systems.MovementSystem;

RenderSystem = example.systems.RenderSystem;

SystemPriorities = example.systems.SystemPriorities;

WaitForStartSystem = example.systems.WaitForStartSystem;

PhysicsSystem = example.systems.PhysicsSystem;

GameState = example.components.GameState;

EntityCreator = example.EntityCreator;

GameConfig = example.GameConfig;

KeyPoll = example.input.KeyPoll;

b2Vec2 = Box2D.Common.Math.b2Vec2;

b2World = Box2D.Dynamics.b2World;

example.Asteroids = (function() {
  Asteroids.prototype.container = null;

  Asteroids.prototype.engine = null;

  Asteroids.prototype.tickProvider = null;

  Asteroids.prototype.creator = null;

  Asteroids.prototype.keyPoll = null;

  Asteroids.prototype.config = null;

  function Asteroids(container, width, height) {
    this.container = container;
    this.prepare(width, height);
  }

  Asteroids.prototype.prepare = function(width, height) {
    this.world = new b2World(new b2Vec2(0, 0), true);
    this.engine = new ash.core.Engine();
    this.creator = new EntityCreator(this.engine, this.container, this.world);
    this.keyPoll = new KeyPoll(window);
    this.config = new GameConfig();
    this.config.height = height;
    this.config.width = width;
    this.engine.addSystem(new PhysicsSystem(this.world), SystemPriorities.preUpdate);
    this.engine.addSystem(new WaitForStartSystem(this.creator), SystemPriorities.preUpdate);
    this.engine.addSystem(new GameManager(this.creator, this.config), SystemPriorities.preUpdate);
    this.engine.addSystem(new MotionControlSystem(this.keyPoll), SystemPriorities.update);
    this.engine.addSystem(new GunControlSystem(this.keyPoll, this.creator), SystemPriorities.update);
    this.engine.addSystem(new BulletAgeSystem(this.creator), SystemPriorities.update);
    this.engine.addSystem(new DeathThroesSystem(this.creator), SystemPriorities.update);
    this.engine.addSystem(new MovementSystem(this.config), SystemPriorities.move);
    this.engine.addSystem(new CollisionSystem(this.creator), SystemPriorities.resolveCollisions);
    this.engine.addSystem(new AnimationSystem(), SystemPriorities.animate);
    this.engine.addSystem(new HudSystem(), SystemPriorities.animate);
    this.engine.addSystem(new RenderSystem(this.container), SystemPriorities.render);
    this.engine.addSystem(new AudioSystem(), SystemPriorities.render);
    this.creator.createWaitForClick();
    this.creator.createGame();
  };

  Asteroids.prototype.start = function() {
    var stats, x, y;
    if (navigator.isCocoonJS) {
      stats = null;
    } else {
      x = Math.floor(this.config.width / 2) - 40;
      y = 0;
      stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "" + x + "px";
      stats.domElement.style.top = "" + y + "px";
      document.body.appendChild(stats.domElement);
    }
    this.tickProvider = new ash.tick.FrameTickProvider(stats);
    this.tickProvider.add(this.engine.update);
    this.tickProvider.start();
  };

  return Asteroids;

})();

//# sourceMappingURL=asteroids.js.map

},{"../../example":1,"../../lib":95}],3:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Animation = (function() {
  Animation.prototype.animation = null;

  function Animation(animation) {
    this.animation = animation;
  }

  return Animation;

})();

//# sourceMappingURL=animation.js.map

},{"../../../example":1}],4:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Asteroid = (function() {
  function Asteroid() {}

  return Asteroid;

})();

//# sourceMappingURL=asteroid.js.map

},{"../../../example":1}],5:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Audio = (function() {
  Audio.prototype.toPlay = null;

  function Audio() {
    this.toPlay = [];
  }

  Audio.prototype.play = function(sound) {
    return this.toPlay.push(sound);
  };

  return Audio;

})();

//# sourceMappingURL=audio.js.map

},{"../../../example":1}],6:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Bullet = (function() {
  Bullet.prototype.lifeRemaining = 0;

  function Bullet(lifeRemaining) {
    this.lifeRemaining = lifeRemaining;
  }

  return Bullet;

})();

//# sourceMappingURL=bullet.js.map

},{"../../../example":1}],7:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Collision = (function() {
  Collision.prototype.radius = 0;

  function Collision(radius) {
    this.radius = radius;
  }

  return Collision;

})();

//# sourceMappingURL=collision.js.map

},{"../../../example":1}],8:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.DeathThroes = (function() {
  DeathThroes.prototype.countdown = 0;

  function DeathThroes(duration) {
    this.countdown = duration;
  }

  return DeathThroes;

})();

//# sourceMappingURL=death_throes.js.map

},{"../../../example":1}],9:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Display = (function() {
  Display.prototype.graphic = 0;

  function Display(graphic) {
    this.graphic = graphic;
  }

  return Display;

})();

//# sourceMappingURL=display.js.map

},{"../../../example":1}],10:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.GameState = (function() {
  function GameState() {}

  GameState.prototype.lives = 3;

  GameState.prototype.level = 0;

  GameState.prototype.hits = 0;

  GameState.prototype.playing = false;

  GameState.prototype.setForStart = function() {
    this.lives = 3;
    this.level = 0;
    this.hits = 0;
    this.playing = true;
  };

  return GameState;

})();

//# sourceMappingURL=game_state.js.map

},{"../../../example":1}],11:[function(require,module,exports){
'use strict';
var Point, example;

example = require('../../../example');

Point = example.graphics.Point;

example.components.Gun = (function() {
  Gun.prototype.shooting = false;

  Gun.prototype.offsetFromParent = null;

  Gun.prototype.timeSinceLastShot = 0;

  Gun.prototype.offsetFromParent = null;

  function Gun(offsetX, offsetY, minimumShotInterval, bulletLifetime) {
    this.minimumShotInterval = minimumShotInterval;
    this.bulletLifetime = bulletLifetime;
    this.shooting = false;
    this.offsetFromParent = null;
    this.timeSinceLastShot = 0;
    this.offsetFromParent = new Point(offsetX, offsetY);
  }

  return Gun;

})();

//# sourceMappingURL=gun.js.map

},{"../../../example":1}],12:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.GunControls = (function() {
  GunControls.prototype.trigger = 0;

  function GunControls(trigger) {
    this.trigger = trigger;
  }

  return GunControls;

})();

//# sourceMappingURL=gun_controls.js.map

},{"../../../example":1}],13:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Hud = (function() {
  Hud.prototype.view = null;

  function Hud(view) {
    this.view = view;
  }

  return Hud;

})();

//# sourceMappingURL=hud.js.map

},{"../../../example":1}],14:[function(require,module,exports){
'use strict';
var Point, example;

example = require('../../../example');

Point = example.graphics.Point;

example.components.Motion = (function() {
  Motion.prototype.velocity = null;

  Motion.prototype.angularVelocity = 0;

  Motion.prototype.damping = 0;

  function Motion(velocityX, velocityY, angularVelocity, damping) {
    this.angularVelocity = angularVelocity;
    this.damping = damping;
    this.velocity = new Point(velocityX, velocityY);
  }

  return Motion;

})();

//# sourceMappingURL=motion.js.map

},{"../../../example":1}],15:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.MotionControls = (function() {
  MotionControls.prototype.left = 0;

  MotionControls.prototype.right = 0;

  MotionControls.prototype.accelerate = 0;

  MotionControls.prototype.accelerationRate = 0;

  MotionControls.prototype.rotationRate = 0;

  function MotionControls(left, right, accelerate, accelerationRate, rotationRate) {
    this.left = left;
    this.right = right;
    this.accelerate = accelerate;
    this.accelerationRate = accelerationRate;
    this.rotationRate = rotationRate;
  }

  return MotionControls;

})();

//# sourceMappingURL=motion_controls.js.map

},{"../../../example":1}],16:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Physics = (function() {
  Physics.prototype.body = null;

  function Physics(body) {
    this.body = body;
  }

  return Physics;

})();

//# sourceMappingURL=physics.js.map

},{"../../../example":1}],17:[function(require,module,exports){
'use strict';
var Point, example;

example = require('../../../example');

Point = example.graphics.Point;

example.components.Position = (function() {
  Position.prototype.position = null;

  Position.prototype.rotation = 0;

  function Position(x, y, rotation) {
    this.rotation = rotation;
    this.position = new Point(x, y);
  }

  return Position;

})();

//# sourceMappingURL=position.js.map

},{"../../../example":1}],18:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.components.Spaceship = (function() {
  Spaceship.prototype.fsm = null;

  function Spaceship(fsm) {
    this.fsm = fsm;
  }

  return Spaceship;

})();

//# sourceMappingURL=spaceship.js.map

},{"../../../example":1}],19:[function(require,module,exports){
'use strict';
var example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

example = require('../../../example');

example.components.WaitForStart = (function() {
  WaitForStart.prototype.waitForStart = null;

  WaitForStart.prototype.startGame = false;

  function WaitForStart(waitForStart) {
    this.waitForStart = waitForStart;
    this.setStartGame = __bind(this.setStartGame, this);
    this.waitForStart.click.add(this.setStartGame);
  }

  WaitForStart.prototype.setStartGame = function() {
    this.startGame = true;
  };

  return WaitForStart;

})();

//# sourceMappingURL=wait_for_start.js.map

},{"../../../example":1}],20:[function(require,module,exports){
'use strict';
var Animation, Asteroid, AsteroidDeathView, AsteroidView, Audio, Bullet, BulletView, Collision, DeathThroes, Display, GameState, Gun, GunControls, Hud, HudView, Motion, MotionControls, Physics, Position, Spaceship, SpaceshipDeathView, SpaceshipView, WaitForStart, WaitForStartView, ash, b2Body, b2BodyDef, b2CircleShape, b2Contact, b2ContactFilter, b2ContactListener, b2DebugDraw, b2DistanceJointDef, b2Fixture, b2FixtureDef, b2Joint, b2Mat22, b2Math, b2PolygonShape, b2RevoluteJointDef, b2Transform, b2Vec2, b2World, example;

ash = require('../../lib');

example = require('../../example');


/*
 * Asteroid Game Components
 */

Animation = example.components.Animation;

Asteroid = example.components.Asteroid;

Audio = example.components.Audio;

Bullet = example.components.Bullet;

Collision = example.components.Collision;

DeathThroes = example.components.DeathThroes;

Display = example.components.Display;

GameState = example.components.GameState;

Gun = example.components.Gun;

GunControls = example.components.GunControls;

Hud = example.components.Hud;

Motion = example.components.Motion;

MotionControls = example.components.MotionControls;

Physics = example.components.Physics;

Position = example.components.Position;

Spaceship = example.components.Spaceship;

WaitForStart = example.components.WaitForStart;


/*
 * Drawable Components
 */

AsteroidDeathView = example.graphics.AsteroidDeathView;

AsteroidView = example.graphics.AsteroidView;

BulletView = example.graphics.BulletView;

HudView = example.graphics.HudView;

SpaceshipDeathView = example.graphics.SpaceshipDeathView;

SpaceshipView = example.graphics.SpaceshipView;

WaitForStartView = example.graphics.WaitForStartView;


/*
 * Box2D subset supported by cocoon's IDTK_SRV_BOX2D:
 */

b2Mat22 = Box2D.Common.Math.b2Mat22;

b2Math = Box2D.Common.Math.b2Math;

b2Transform = Box2D.Common.Math.b2Transform;

b2Vec2 = Box2D.Common.Math.b2Vec2;

b2Body = Box2D.Dynamics.b2Body;

b2BodyDef = Box2D.Dynamics.b2BodyDef;

b2Contact = Box2D.Dynamics.b2Contact;

b2ContactFilter = Box2D.Dynamics.b2ContactFilter;

b2ContactListener = Box2D.Dynamics.b2ContactListener;

b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

b2Fixture = Box2D.Dynamics.b2Fixture;

b2FixtureDef = Box2D.Dynamics.b2FixtureDef;

b2World = Box2D.Dynamics.b2World;

b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;

b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;

b2Joint = Box2D.Dynamics.Joints.b2Joint;

b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;

example.EntityCreator = (function() {
  var KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_Z;

  KEY_LEFT = 37;

  KEY_UP = 38;

  KEY_RIGHT = 39;

  KEY_Z = 90;

  EntityCreator.prototype.engine = null;

  EntityCreator.prototype.waitEntity = null;

  EntityCreator.prototype.graphics = null;

  function EntityCreator(engine, graphics, world) {
    this.engine = engine;
    this.graphics = graphics;
    this.world = world;
  }

  EntityCreator.prototype.destroyEntity = function(entity) {
    this.engine.removeEntity(entity);
  };

  EntityCreator.prototype.createGame = function() {
    var gameEntity, hud;
    hud = new HudView(this.graphics);
    gameEntity = new ash.core.Entity('game').add(new GameState()).add(new Hud(hud)).add(new Display(hud)).add(new Position(0, 0, 0, 0));
    this.engine.addEntity(gameEntity);
    return gameEntity;
  };

  EntityCreator.prototype.createWaitForClick = function() {
    var waitView;
    if (!this.waitEntity) {
      waitView = new WaitForStartView(this.graphics);
      this.waitEntity = new ash.core.Entity('wait').add(new WaitForStart(waitView)).add(new Display(waitView)).add(new Position(0, 0, 0, 0));
    }
    this.waitEntity.get(WaitForStart).startGame = false;
    this.engine.addEntity(this.waitEntity);
    return this.waitEntity;
  };

  EntityCreator.prototype.createAsteroid = function(radius, x, y) {
    var angularVelocity, asteroid, collisionRadius, damping, rotation, velocityX, velocityY;
    velocityX = (Math.random() - 0.5) * 4 * (50 - radius);
    velocityY = (Math.random() - 0.5) * 4 * (50 - radius);
    angularVelocity = Math.random() * 2 - 1;
    damping = 0;
    rotation = 0;
    collisionRadius = radius;
    asteroid = new ash.core.Entity().add(new Asteroid()).add(new Position(x, y, rotation)).add(new Audio()).add(new Motion(velocityX, velocityY, angularVelocity, damping)).add(new Collision(collisionRadius)).add(new Display(new AsteroidView(this.graphics, radius)));
    this.engine.addEntity(asteroid);
    return asteroid;
  };

  EntityCreator.prototype.createSpaceship = function() {
    var angularVelocity, body, bodyDef, collisionRadius, damping, fixDef, rotation, spaceship, velocityX, velocityY, vertices, x, y;
    velocityX = 0;
    velocityY = 0;
    angularVelocity = 0;
    damping = 15;
    x = 400;
    y = 300;
    rotation = 1;
    collisionRadius = 6;
    bodyDef = new b2BodyDef();
    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.fixedRotation = true;
    bodyDef.position.x = x;
    bodyDef.position.y = y;
    bodyDef.linearVelocity.Set(velocityX, velocityY);
    bodyDef.angularVelocity = angularVelocity;
    vertices = [new b2Vec2(.45, 0), new b2Vec2(-.25, .25), new b2Vec2(-.25, -.25)];
    fixDef = new b2FixtureDef();
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;
    fixDef.shape = new b2PolygonShape();
    fixDef.shape.SetAsArray(vertices, vertices.length);
    body = this.world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    spaceship = new ash.core.Entity().add(new Spaceship()).add(new Physics(body)).add(new Position(x, y, rotation)).add(new Audio()).add(new Motion(velocityX, velocityY, angularVelocity, damping)).add(new MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3)).add(new Gun(8, 0, 0.3, 2)).add(new GunControls(KEY_Z)).add(new Collision(collisionRadius)).add(new Display(new SpaceshipView(this.graphics)));
    body.SetUserData(spaceship);
    this.engine.addEntity(spaceship);
    return spaceship;
  };

  EntityCreator.prototype.createUserBullet = function(gun, parentPosition) {
    var angularVelocity, bullet, collisionRadius, cos, damping, rotation, sin, velocityX, velocityY, x, y;
    cos = Math.cos(parentPosition.rotation);
    sin = Math.sin(parentPosition.rotation);
    velocityX = cos * 150;
    velocityY = sin * 150;
    angularVelocity = 0;
    damping = 0;
    x = cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x;
    y = sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y;
    rotation = 0;
    collisionRadius = 0;
    bullet = new ash.core.Entity().add(new Bullet(gun.bulletLifetime)).add(new Position(x, y, rotation)).add(new Collision(collisionRadius)).add(new Motion(velocityX, velocityY, angularVelocity, damping)).add(new Display(new BulletView(this.graphics)));
    this.engine.addEntity(bullet);
    return bullet;
  };

  return EntityCreator;

})();

//# sourceMappingURL=entity_creator.js.map

},{"../../example":1,"../../lib":95}],21:[function(require,module,exports){
'use strict';
var example;

example = require('../../example');

example.GameConfig = (function() {
  function GameConfig() {}

  GameConfig.prototype.width = 0;

  GameConfig.prototype.height = 0;

  return GameConfig;

})();

//# sourceMappingURL=game_config.js.map

},{"../../example":1}],22:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.graphics.AsteroidDeathView = (function() {
  AsteroidDeathView.prototype.x = 0;

  AsteroidDeathView.prototype.y = 0;

  AsteroidDeathView.prototype.width = 0;

  AsteroidDeathView.prototype.height = 0;

  AsteroidDeathView.prototype.rotation = 0;

  AsteroidDeathView.prototype.graphic = null;

  AsteroidDeathView.prototype.radius = 0;

  AsteroidDeathView.prototype.points = null;

  AsteroidDeathView.prototype.count = 0;

  function AsteroidDeathView(graphic, radius) {
    var angle, length, posX, posY;
    this.graphic = graphic;
    this.radius = radius;
    this.width = this.radius;
    this.height = this.radius;
    this.points = [];
    angle = 0;
    while (angle < Math.PI * 2) {
      length = (0.75 + Math.random() * 0.25) * this.radius;
      posX = Math.cos(angle) * length;
      posY = Math.sin(angle) * length;
      this.points.push({
        x: posX,
        y: posY
      });
      angle += Math.random() * 0.5;
    }
    this.draw();
  }

  AsteroidDeathView.prototype.draw = function() {
    var graphic, i;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x, this.y);
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(this.radius, 0);
    i = 0;
    while (i < this.points.length) {
      graphic.lineTo(this.points[i].x, this.points[i].y);
      ++i;
    }
    graphic.lineTo(this.radius, 0);
    graphic.fill();
    graphic.restore();
  };

  return AsteroidDeathView;

})();

//# sourceMappingURL=asteroid_death_view.js.map

},{"../../../example":1}],23:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.graphics.AsteroidView = (function() {
  AsteroidView.prototype.x = 0;

  AsteroidView.prototype.y = 0;

  AsteroidView.prototype.width = 0;

  AsteroidView.prototype.height = 0;

  AsteroidView.prototype.rotation = 0;

  AsteroidView.prototype.graphic = null;

  AsteroidView.prototype.radius = 0;

  AsteroidView.prototype.points = null;

  AsteroidView.prototype.count = 0;

  function AsteroidView(graphic, radius) {
    var angle, length, posX, posY;
    this.graphic = graphic;
    this.radius = radius;
    this.width = this.radius;
    this.height = this.radius;
    this.points = [];
    angle = 0;
    while (angle < Math.PI * 2) {
      length = (0.75 + Math.random() * 0.25) * this.radius;
      posX = Math.cos(angle) * length;
      posY = Math.sin(angle) * length;
      this.points.push({
        x: posX,
        y: posY
      });
      angle += Math.random() * 0.5;
    }
    this.draw();
  }

  AsteroidView.prototype.draw = function() {
    var graphic, i;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x, this.y);
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(this.radius, 0);
    i = 0;
    while (i < this.points.length) {
      graphic.lineTo(this.points[i].x, this.points[i].y);
      ++i;
    }
    graphic.lineTo(this.radius, 0);
    graphic.fill();
    graphic.restore();
  };

  return AsteroidView;

})();

//# sourceMappingURL=asteroid_view.js.map

},{"../../../example":1}],24:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.graphics.BulletView = (function() {
  BulletView.prototype.x = 0;

  BulletView.prototype.y = 0;

  BulletView.prototype.width = 4;

  BulletView.prototype.height = 4;

  BulletView.prototype.rotation = 0;

  BulletView.prototype.graphic = null;

  function BulletView(graphic) {
    this.graphic = graphic;
    this.draw();
  }

  BulletView.prototype.draw = function() {
    var graphic;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
    graphic.fill();
    graphic.restore();
  };

  return BulletView;

})();

//# sourceMappingURL=bullet_view.js.map

},{"../../../example":1}],25:[function(require,module,exports){
'use strict';
var example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

example = require('../../../example');

example.graphics.HudView = (function() {
  HudView.prototype.x = 0;

  HudView.prototype.y = 0;

  HudView.prototype.width = 4;

  HudView.prototype.height = 4;

  HudView.prototype.rotation = 0;

  HudView.prototype.graphic = null;

  HudView.prototype.score = 0;

  HudView.prototype.lives = 3;

  HudView.prototype.drawScore = null;

  HudView.prototype.drawLives = null;

  function HudView(graphic) {
    this.graphic = graphic;
    this.setScore = __bind(this.setScore, this);
    this.setLives = __bind(this.setLives, this);
    this.draw = __bind(this.draw, this);
    this.drawScore = this.createScore;
    this.drawLives = this.createLives;
    this.draw();
  }

  HudView.prototype.draw = function() {
    this.drawScore();
    this.drawLives();
  };

  HudView.prototype.setLives = function(lives) {
    if (this.lives !== lives) {
      console.log("setLives " + lives);
    }
    return this.lives = lives;
  };

  HudView.prototype.setScore = function(score) {
    return this.score = score;
  };

  HudView.prototype.createLives = function() {
    var l, s, x, y;
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 18px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    this.graphic.textAlign = 'center';
    s = "LIVES: " + this.lives;
    l = this.graphic.measureText(s);
    x = l.width;
    y = 20;
    this.graphic.fillText(s, x, y);
    this.graphic.fill();
    this.graphic.restore();
  };

  HudView.prototype.createScore = function() {
    var l, s, x, y;
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 18px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    this.graphic.textAlign = 'center';
    s = "SCORE: " + this.score;
    l = this.graphic.measureText(s);
    x = (window.window.innerWidth * window.devicePixelRatio) - l.width;
    y = 20;
    this.graphic.fillText(s, x, y);
    this.graphic.fill();
    this.graphic.restore();
  };

  return HudView;

})();

//# sourceMappingURL=hud_view.js.map

},{"../../../example":1}],26:[function(require,module,exports){
'use strict';
var example;

example = require('../../index');

example.graphics.Point = (function() {
  Point.prototype.x = 0;

  Point.prototype.y = 0;

  function Point(x, y) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
  }

  Point.prototype.distanceSquaredTo = function(targetPoint) {
    var dx, dy;
    dx = this.x - targetPoint.x;
    dy = this.y - targetPoint.y;
    return dx * dx + dy * dy;
  };

  Point.prototype.distanceTo = function(targetPoint) {
    var dx, dy;
    dx = this.x - targetPoint.x;
    dy = this.y - targetPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return Point;

})();

//# sourceMappingURL=point.js.map

},{"../../index":1}],27:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.graphics.SpaceshipDeathView = (function() {
  SpaceshipDeathView.prototype.x = 0;

  SpaceshipDeathView.prototype.y = 0;

  SpaceshipDeathView.prototype.width = 20;

  SpaceshipDeathView.prototype.height = 20;

  SpaceshipDeathView.prototype.rotation = 0;

  SpaceshipDeathView.prototype.graphic = null;

  function SpaceshipDeathView(graphic) {
    this.graphic = graphic;
    this.draw();
  }

  SpaceshipDeathView.prototype.draw = function() {
    var graphic;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x, this.y);
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(10, 0);
    graphic.lineTo(-7, 7);
    graphic.lineTo(-4, 0);
    graphic.lineTo(-7, -7);
    graphic.lineTo(10, 0);
    graphic.fill();
    graphic.restore();
  };

  return SpaceshipDeathView;

})();

//# sourceMappingURL=spaceship_death_view.js.map

},{"../../../example":1}],28:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.graphics.SpaceshipView = (function() {
  SpaceshipView.prototype.x = 0;

  SpaceshipView.prototype.y = 0;

  SpaceshipView.prototype.width = 20;

  SpaceshipView.prototype.height = 20;

  SpaceshipView.prototype.rotation = 0;

  SpaceshipView.prototype.graphic = null;

  function SpaceshipView(graphic) {
    this.graphic = graphic;
    this.draw();
  }

  SpaceshipView.prototype.draw = function() {
    var graphic;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x, this.y);
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(10, 0);
    graphic.lineTo(-7, 7);
    graphic.lineTo(-4, 0);
    graphic.lineTo(-7, -7);
    graphic.lineTo(10, 0);
    graphic.fill();
    graphic.restore();
  };

  return SpaceshipView;

})();

//# sourceMappingURL=spaceship_view.js.map

},{"../../../example":1}],29:[function(require,module,exports){
'use strict';
var Signal0, ash, example;

example = require('../../../example');

ash = require('../../../lib');

Signal0 = ash.signals.Signal0;

example.graphics.WaitForStartView = (function() {
  WaitForStartView.prototype.x = 0;

  WaitForStartView.prototype.y = 0;

  WaitForStartView.prototype.width = 4;

  WaitForStartView.prototype.height = 4;

  WaitForStartView.prototype.rotation = 0;

  WaitForStartView.prototype.graphic = null;

  WaitForStartView.prototype.gameOver = null;

  WaitForStartView.prototype.clickToStart = null;

  WaitForStartView.prototype.instructions = null;

  WaitForStartView.prototype.click = null;

  function WaitForStartView(graphic) {
    this.graphic = graphic;
    this.click = new Signal0();
    this.gameOver = this.createGameOver;
    this.instructions = this.createInstructions;
    this.clickToStart = this.createClickToStart;
    this.graphic.canvas.addEventListener('click', (function(_this) {
      return function(event) {
        return _this.click.dispatch();
      };
    })(this));
    this.draw();
  }

  WaitForStartView.prototype.createGameOver = function() {
    var l, s, x, y;
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 32px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    s = 'ASTEROIDS';
    l = this.graphic.measureText(s);
    x = Math.floor(((window.innerWidth * window.devicePixelRatio) - l.width) / 2);
    y = 175;
    this.graphic.fillText(s, x, y);
    this.graphic.fill();
    this.graphic.restore();
  };

  WaitForStartView.prototype.createClickToStart = function() {
    var l, s, x, y;
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 18px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    s = 'CLICK TO START';
    l = this.graphic.measureText(s);
    x = Math.floor(((window.innerWidth * window.devicePixelRatio) - l.width) / 2);
    y = 225;
    this.graphic.fillText(s, x, y);
    this.graphic.fill();
    this.graphic.restore();
  };

  WaitForStartView.prototype.createInstructions = function() {
    var l, s, x, y;
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 14px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    s = 'CTRL-Z to Fire  ~  Arrow Keys to Move';
    l = this.graphic.measureText(s);
    x = 10;
    y = window.innerHeight * window.devicePixelRatio - 20;
    this.graphic.fillText(s, x, y);
    this.graphic.fill();
    this.graphic.restore();
  };

  WaitForStartView.prototype.draw = function() {
    this.gameOver();
    this.clickToStart();
    this.instructions();
  };

  return WaitForStartView;

})();

//# sourceMappingURL=wait_for_start_view.js.map

},{"../../../example":1,"../../../lib":95}],30:[function(require,module,exports){
'use strict';
var example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

example = require('../../../example');

example.input.KeyPoll = (function() {
  var displayObj, states;

  states = null;

  displayObj = null;

  function KeyPoll(displayObj) {
    this.displayObj = displayObj;
    this.isUp = __bind(this.isUp, this);
    this.isDown = __bind(this.isDown, this);
    this.keyUpListener = __bind(this.keyUpListener, this);
    this.keyDownListener = __bind(this.keyDownListener, this);
    this.states = {};
    this.displayObj.addEventListener("keydown", this.keyDownListener);
    this.displayObj.addEventListener("keyup", this.keyUpListener);
  }

  KeyPoll.prototype.keyDownListener = function(event) {
    this.states[event.keyCode] = true;
  };

  KeyPoll.prototype.keyUpListener = function(event) {
    if (this.states[event.keyCode]) {
      this.states[event.keyCode] = false;
    }
  };

  KeyPoll.prototype.isDown = function(keyCode) {
    return this.states[keyCode];
  };

  KeyPoll.prototype.isUp = function(keyCode) {
    return !this.states[keyCode];
  };

  return KeyPoll;

})();

//# sourceMappingURL=key_poll.js.map

},{"../../../example":1}],31:[function(require,module,exports){
'use strict';
var example;

example = require('../../example');

example.Main = (function() {
  function Main() {
    var asteroids, canvas;
    canvas = this.canvas();
    asteroids = new example.Asteroids(canvas.getContext('2d'), canvas.width, canvas.height);
    asteroids.start();
    return;
  }

  Main.prototype.canvas = function() {
    var canvas;
    canvas = document.createElement(navigator.isCocoonJS ? 'screencanvas' : 'canvas');
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.backgroundColor = '#000000';
    document.body.appendChild(canvas);
    return canvas;
  };

  return Main;

})();

//# sourceMappingURL=main.js.map

},{"../../example":1}],32:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.AnimationNode = (function(_super) {
  __extends(AnimationNode, _super);

  function AnimationNode() {
    return AnimationNode.__super__.constructor.apply(this, arguments);
  }

  AnimationNode.components = {
    animation: example.components.Animation
  };

  AnimationNode.prototype.animation = null;

  return AnimationNode;

})(ash.core.Node);

//# sourceMappingURL=animation_node.js.map

},{"../../../example":1,"../../../lib":95}],33:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.AsteroidCollisionNode = (function(_super) {
  __extends(AsteroidCollisionNode, _super);

  function AsteroidCollisionNode() {
    return AsteroidCollisionNode.__super__.constructor.apply(this, arguments);
  }

  AsteroidCollisionNode.components = {
    asteroid: example.components.Asteroid,
    position: example.components.Position,
    collision: example.components.Collision,
    audio: example.components.Audio
  };

  AsteroidCollisionNode.prototype.asteroid = null;

  AsteroidCollisionNode.prototype.position = null;

  AsteroidCollisionNode.prototype.collision = null;

  AsteroidCollisionNode.prototype.audio = null;

  return AsteroidCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=asteroid_collision_node.js.map

},{"../../../example":1,"../../../lib":95}],34:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.AudioNode = (function(_super) {
  __extends(AudioNode, _super);

  function AudioNode() {
    return AudioNode.__super__.constructor.apply(this, arguments);
  }

  AudioNode.components = {
    audio: example.components.Audio
  };

  AudioNode.prototype.audio = null;

  return AudioNode;

})(ash.core.Node);

//# sourceMappingURL=audio_node.js.map

},{"../../../example":1,"../../../lib":95}],35:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.BulletAgeNode = (function(_super) {
  __extends(BulletAgeNode, _super);

  function BulletAgeNode() {
    return BulletAgeNode.__super__.constructor.apply(this, arguments);
  }

  BulletAgeNode.components = {
    bullet: example.components.Bullet
  };

  BulletAgeNode.prototype.bullet = null;

  return BulletAgeNode;

})(ash.core.Node);

//# sourceMappingURL=bullet_age_node.js.map

},{"../../../example":1,"../../../lib":95}],36:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.BulletCollisionNode = (function(_super) {
  __extends(BulletCollisionNode, _super);

  function BulletCollisionNode() {
    return BulletCollisionNode.__super__.constructor.apply(this, arguments);
  }

  BulletCollisionNode.components = {
    bullet: example.components.Bullet,
    position: example.components.Position,
    collision: example.components.Collision
  };

  BulletCollisionNode.prototype.bullet = null;

  BulletCollisionNode.prototype.position = null;

  BulletCollisionNode.prototype.collision = null;

  return BulletCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=bullet_collision_node.js.map

},{"../../../example":1,"../../../lib":95}],37:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.DeathThroesNode = (function(_super) {
  __extends(DeathThroesNode, _super);

  function DeathThroesNode() {
    return DeathThroesNode.__super__.constructor.apply(this, arguments);
  }

  DeathThroesNode.components = {
    death: example.components.DeathThroes
  };

  DeathThroesNode.prototype.death = null;

  return DeathThroesNode;

})(ash.core.Node);

//# sourceMappingURL=death_throes_node.js.map

},{"../../../example":1,"../../../lib":95}],38:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.GameNode = (function(_super) {
  __extends(GameNode, _super);

  function GameNode() {
    return GameNode.__super__.constructor.apply(this, arguments);
  }

  GameNode.components = {
    state: example.components.GameState
  };

  GameNode.prototype.state = null;

  return GameNode;

})(ash.core.Node);

//# sourceMappingURL=game_node.js.map

},{"../../../example":1,"../../../lib":95}],39:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.GunControlNode = (function(_super) {
  __extends(GunControlNode, _super);

  function GunControlNode() {
    return GunControlNode.__super__.constructor.apply(this, arguments);
  }

  GunControlNode.components = {
    audio: example.components.Audio,
    control: example.components.GunControls,
    gun: example.components.Gun,
    position: example.components.Position
  };

  GunControlNode.prototype.control = null;

  GunControlNode.prototype.gun = null;

  GunControlNode.prototype.position = null;

  GunControlNode.prototype.audio = null;

  return GunControlNode;

})(ash.core.Node);

//# sourceMappingURL=gun_control_node.js.map

},{"../../../example":1,"../../../lib":95}],40:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.HudNode = (function(_super) {
  __extends(HudNode, _super);

  function HudNode() {
    return HudNode.__super__.constructor.apply(this, arguments);
  }

  HudNode.components = {
    state: example.components.GameState,
    hud: example.components.Hud
  };

  HudNode.prototype.state = null;

  HudNode.prototype.hud = null;

  return HudNode;

})(ash.core.Node);

//# sourceMappingURL=hud_node.js.map

},{"../../../example":1,"../../../lib":95}],41:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.MotionControlNode = (function(_super) {
  __extends(MotionControlNode, _super);

  function MotionControlNode() {
    return MotionControlNode.__super__.constructor.apply(this, arguments);
  }

  MotionControlNode.components = {
    control: example.components.MotionControls,
    position: example.components.Position,
    motion: example.components.Motion,
    physics: example.components.Physics
  };

  MotionControlNode.prototype.control = null;

  MotionControlNode.prototype.position = null;

  MotionControlNode.prototype.motion = null;

  MotionControlNode.prototype.physics = null;

  return MotionControlNode;

})(ash.core.Node);

//# sourceMappingURL=motion_control_node.js.map

},{"../../../example":1,"../../../lib":95}],42:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.MovementNode = (function(_super) {
  __extends(MovementNode, _super);

  function MovementNode() {
    return MovementNode.__super__.constructor.apply(this, arguments);
  }

  MovementNode.components = {
    position: example.components.Position,
    motion: example.components.Motion
  };

  MovementNode.prototype.position = null;

  MovementNode.prototype.motion = null;

  return MovementNode;

})(ash.core.Node);

//# sourceMappingURL=movement_node.js.map

},{"../../../example":1,"../../../lib":95}],43:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.PhysicsNode = (function(_super) {
  __extends(PhysicsNode, _super);

  function PhysicsNode() {
    return PhysicsNode.__super__.constructor.apply(this, arguments);
  }

  PhysicsNode.components = {
    physics: example.components.Physics,
    position: example.components.Position,
    motion: example.components.Motion
  };

  PhysicsNode.prototype.physics = null;

  PhysicsNode.prototype.position = null;

  PhysicsNode.prototype.motion = null;

  return PhysicsNode;

})(ash.core.Node);

//# sourceMappingURL=physics_node.js.map

},{"../../../example":1,"../../../lib":95}],44:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.RenderNode = (function(_super) {
  __extends(RenderNode, _super);

  function RenderNode() {
    return RenderNode.__super__.constructor.apply(this, arguments);
  }

  RenderNode.components = {
    position: example.components.Position,
    display: example.components.Display
  };

  RenderNode.prototype.position = null;

  RenderNode.prototype.display = null;

  return RenderNode;

})(ash.core.Node);

//# sourceMappingURL=render_node.js.map

},{"../../../example":1,"../../../lib":95}],45:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.SpaceshipCollisionNode = (function(_super) {
  __extends(SpaceshipCollisionNode, _super);

  function SpaceshipCollisionNode() {
    return SpaceshipCollisionNode.__super__.constructor.apply(this, arguments);
  }

  SpaceshipCollisionNode.components = {
    spaceship: example.components.Spaceship,
    position: example.components.Position,
    collision: example.components.Collision,
    audio: example.components.Audio
  };

  SpaceshipCollisionNode.prototype.spaceship = 0;

  SpaceshipCollisionNode.prototype.position = 0;

  SpaceshipCollisionNode.prototype.collision = null;

  SpaceshipCollisionNode.prototype.audio = null;

  return SpaceshipCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=spaceship_collision_node.js.map

},{"../../../example":1,"../../../lib":95}],46:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.SpaceshipNode = (function(_super) {
  __extends(SpaceshipNode, _super);

  function SpaceshipNode() {
    return SpaceshipNode.__super__.constructor.apply(this, arguments);
  }

  SpaceshipNode.components = {
    spaceship: example.components.Spaceship,
    position: example.components.Position
  };

  SpaceshipNode.prototype.spaceship = 0;

  SpaceshipNode.prototype.position = 0;

  return SpaceshipNode;

})(ash.core.Node);

//# sourceMappingURL=spaceship_node.js.map

},{"../../../example":1,"../../../lib":95}],47:[function(require,module,exports){
'use strict';
var ash, example,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

example.nodes.WaitForStartNode = (function(_super) {
  __extends(WaitForStartNode, _super);

  function WaitForStartNode() {
    return WaitForStartNode.__super__.constructor.apply(this, arguments);
  }

  WaitForStartNode.components = {
    wait: example.components.WaitForStart
  };

  WaitForStartNode.prototype.wait = null;

  return WaitForStartNode;

})(ash.core.Node);

//# sourceMappingURL=wait_for_start_node.js.map

},{"../../../example":1,"../../../lib":95}],48:[function(require,module,exports){
'use strict';
var AnimationNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

AnimationNode = example.nodes.AnimationNode;

example.systems.AnimationSystem = (function(_super) {
  __extends(AnimationSystem, _super);

  function AnimationSystem() {
    this.updateNode = __bind(this.updateNode, this);
    AnimationSystem.__super__.constructor.call(this, AnimationNode, this.updateNode);
  }

  AnimationSystem.prototype.updateNode = function(node, time) {
    node.animation.animation.animate(time);
  };

  return AnimationSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=animation_system.js.map

},{"../../../example":1,"../../../lib":95}],49:[function(require,module,exports){
'use strict';
var AudioNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

AudioNode = example.nodes.AudioNode;

example.systems.AudioSystem = (function(_super) {
  __extends(AudioSystem, _super);

  function AudioSystem() {
    this.updateNode = __bind(this.updateNode, this);
    AudioSystem.__super__.constructor.call(this, AudioNode, this.updateNode);
  }

  AudioSystem.prototype.updateNode = function(node, time) {
    var each, sound, type, _ref;
    _ref = node.audio.toPlay;
    for (each in _ref) {
      type = _ref[each];
      sound = new type();
      sound.play(0, 1);
    }
    node.audio.toPlay.length = 0;
  };

  return AudioSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=audio_system.js.map

},{"../../../example":1,"../../../lib":95}],50:[function(require,module,exports){
'use strict';
var BulletAgeNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

BulletAgeNode = example.nodes.BulletAgeNode;

example.systems.BulletAgeSystem = (function(_super) {
  __extends(BulletAgeSystem, _super);

  BulletAgeSystem.prototype.creator = null;

  function BulletAgeSystem(creator) {
    this.creator = creator;
    this.updateNode = __bind(this.updateNode, this);
    BulletAgeSystem.__super__.constructor.call(this, BulletAgeNode, this.updateNode);
  }

  BulletAgeSystem.prototype.updateNode = function(node, time) {
    var bullet;
    bullet = node.bullet;
    bullet.lifeRemaining -= time;
    if (bullet.lifeRemaining <= 0) {
      this.creator.destroyEntity(node.entity);
    }
  };

  return BulletAgeSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=bullet_age_system.js.map

},{"../../../example":1,"../../../lib":95}],51:[function(require,module,exports){
'use strict';
var AsteroidCollisionNode, BulletCollisionNode, GameNode, SpaceshipCollisionNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

SpaceshipCollisionNode = example.nodes.SpaceshipCollisionNode;

AsteroidCollisionNode = example.nodes.AsteroidCollisionNode;

BulletCollisionNode = example.nodes.BulletCollisionNode;

GameNode = example.nodes.GameNode;

example.systems.CollisionSystem = (function(_super) {
  __extends(CollisionSystem, _super);

  CollisionSystem.prototype.creator = null;

  CollisionSystem.prototype.games = null;

  CollisionSystem.prototype.spaceships = null;

  CollisionSystem.prototype.asteroids = null;

  CollisionSystem.prototype.bullets = null;

  function CollisionSystem(creator) {
    this.creator = creator;
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
          this.creator.destroyEntity(bullet.entity);
          if (asteroid.collision.radius > 10) {
            this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
          }
          this.creator.destroyEntity(asteroid.entity);
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
          this.creator.destroyEntity(spaceship.entity);
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

//# sourceMappingURL=collision_system.js.map

},{"../../../example":1,"../../../lib":95}],52:[function(require,module,exports){
'use strict';
var DeathThroesNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

DeathThroesNode = example.nodes.DeathThroesNode;

example.systems.DeathThroesSystem = (function(_super) {
  __extends(DeathThroesSystem, _super);

  DeathThroesSystem.prototype.creator = null;

  function DeathThroesSystem(creator) {
    this.creator = creator;
    this.updateNode = __bind(this.updateNode, this);
    DeathThroesSystem.__super__.constructor.call(this, DeathThroesNode, this.updateNode);
  }

  DeathThroesSystem.prototype.updateNode = function(node, time) {
    node.death.countdown -= time;
    if (node.death.countdown <= 0) {
      this.creator.destroyEntity(node.entity);
    }
  };

  return DeathThroesSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=death_throes_system.js.map

},{"../../../example":1,"../../../lib":95}],53:[function(require,module,exports){
'use strict';
var AsteroidCollisionNode, BulletCollisionNode, GameNode, Point, SpaceshipNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

GameNode = example.nodes.GameNode;

SpaceshipNode = example.nodes.SpaceshipNode;

AsteroidCollisionNode = example.nodes.AsteroidCollisionNode;

BulletCollisionNode = example.nodes.BulletCollisionNode;

Point = example.graphics.Point;

example.systems.GameManager = (function(_super) {
  __extends(GameManager, _super);

  GameManager.prototype.config = null;

  GameManager.prototype.creator = null;

  GameManager.prototype.gameNodes = null;

  GameManager.prototype.spaceships = null;

  GameManager.prototype.asteroids = null;

  GameManager.prototype.bullets = null;

  function GameManager(creator, config) {
    this.creator = creator;
    this.config = config;
    this.update = __bind(this.update, this);
  }

  GameManager.prototype.addToEngine = function(engine) {
    this.gameNodes = engine.getNodeList(GameNode);
    this.spaceships = engine.getNodeList(SpaceshipNode);
    this.asteroids = engine.getNodeList(AsteroidCollisionNode);
    this.bullets = engine.getNodeList(BulletCollisionNode);
  };

  GameManager.prototype.update = function(time) {
    var asteroid, asteroidCount, clearToAddSpaceship, i, newSpaceshipPosition, node, position, spaceship;
    node = this.gameNodes.head;
    if (node && node.state.playing) {
      if (this.spaceships.empty) {
        if (node.state.lives > 0) {
          newSpaceshipPosition = new Point(this.config.width * 0.5, this.config.height * 0.5);
          clearToAddSpaceship = true;
          asteroid = this.asteroids.head;
          while (asteroid) {
            if (asteroid.position.position.distanceTo(newSpaceshipPosition) <= asteroid.position.collisionRadius + 50) {
              clearToAddSpaceship = false;
              break;
            }
            asteroid = asteroid.next;
          }
          if (clearToAddSpaceship) {
            this.creator.createSpaceship();
          }
        } else {
          node.state.playing = false;
          this.creator.createWaitForClick();
        }
      }
      if (this.asteroids.empty && this.bullets.empty && !this.spaceships.empty) {
        spaceship = this.spaceships.head;
        node.state.level++;
        asteroidCount = 2 + node.state.level;
        i = 0;
        while (i < asteroidCount) {
          while (true) {
            position = new Point(Math.random() * this.config.width, Math.random() * this.config.height);
            if (!(position.distanceTo(spaceship.position.position) <= 80)) {
              break;
            }
          }
          this.creator.createAsteroid(30, position.x, position.y);
          ++i;
        }
      }
    }
  };

  GameManager.prototype.removeFromEngine = function(engine) {
    this.gameNodes = null;
    this.spaceships = null;
    this.asteroids = null;
    this.bullets = null;
  };

  return GameManager;

})(ash.core.System);

//# sourceMappingURL=game_manager.js.map

},{"../../../example":1,"../../../lib":95}],54:[function(require,module,exports){
'use strict';
var GunControlNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

GunControlNode = example.nodes.GunControlNode;

example.systems.GunControlSystem = (function(_super) {
  __extends(GunControlSystem, _super);

  GunControlSystem.prototype.keyPoll = null;

  GunControlSystem.prototype.creator = null;

  GunControlSystem.prototype.nodeList = null;

  function GunControlSystem(keyPoll, creator) {
    this.keyPoll = keyPoll;
    this.creator = creator;
    this.updateNode = __bind(this.updateNode, this);
    GunControlSystem.__super__.constructor.call(this, GunControlNode, this.updateNode);
  }

  GunControlSystem.prototype.updateNode = function(node, time) {
    var control, gun, position;
    control = node.control;
    position = node.position;
    gun = node.gun;
    gun.shooting = this.keyPoll.isDown(control.trigger);
    gun.timeSinceLastShot += time;
    if (gun.shooting && gun.timeSinceLastShot >= gun.minimumShotInterval) {
      this.creator.createUserBullet(gun, position);
      gun.timeSinceLastShot = 0;
    }
  };

  return GunControlSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=gun_control_system.js.map

},{"../../../example":1,"../../../lib":95}],55:[function(require,module,exports){
'use strict';
var HudNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

HudNode = example.nodes.HudNode;

example.systems.HudSystem = (function(_super) {
  __extends(HudSystem, _super);

  function HudSystem() {
    this.updateNode = __bind(this.updateNode, this);
    HudSystem.__super__.constructor.call(this, HudNode, this.updateNode);
  }

  HudSystem.prototype.updateNode = function(node, time) {
    node.hud.view.setLives(node.state.lives);
    node.hud.view.setScore(node.state.hits);
  };

  return HudSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=hud_system.js.map

},{"../../../example":1,"../../../lib":95}],56:[function(require,module,exports){
'use strict';
var MotionControlNode, ash, b2Vec2, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

MotionControlNode = example.nodes.MotionControlNode;

b2Vec2 = Box2D.Common.Math.b2Vec2;

example.systems.MotionControlSystem = (function(_super) {
  __extends(MotionControlSystem, _super);

  MotionControlSystem.prototype.keyPoll = null;

  function MotionControlSystem(keyPoll) {
    this.keyPoll = keyPoll;
    this.updateNode = __bind(this.updateNode, this);
    MotionControlSystem.__super__.constructor.call(this, MotionControlNode, this.updateNode);
  }

  MotionControlSystem.prototype.updateNode = function(node, time) {
    var control, left, motion, physics, position, right;
    control = node.control;
    position = node.position;
    motion = node.motion;
    physics = node.physics;
    left = this.keyPoll.isDown(control.left);
    right = this.keyPoll.isDown(control.right);
    if (left) {
      position.rotation -= control.rotationRate * time;
    }
    if (right) {
      position.rotation += control.rotationRate * time;
    }
    if (this.keyPoll.isDown(control.accelerate)) {
      motion.velocity.x += Math.cos(position.rotation) * control.accelerationRate * time;
      motion.velocity.y += Math.sin(position.rotation) * control.accelerationRate * time;
    }
    if (left) {
      physics.body.ApplyForce(new b2Vec2(100, 100), physics.body.GetWorldCenter());
    }
    if (right) {
      physics.body.ApplyForce(new b2Vec2(-100, -100), physics.body.GetWorldCenter());
    }
  };

  return MotionControlSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=motion_control_system.js.map

},{"../../../example":1,"../../../lib":95}],57:[function(require,module,exports){
'use strict';
var MovementNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

MovementNode = example.nodes.MovementNode;

example.systems.MovementSystem = (function(_super) {
  __extends(MovementSystem, _super);

  MovementSystem.prototype.config = null;

  function MovementSystem(config) {
    this.config = config;
    this.updateNode = __bind(this.updateNode, this);
    MovementSystem.__super__.constructor.call(this, MovementNode, this.updateNode);
  }

  MovementSystem.prototype.updateNode = function(node, time) {
    var motion, position, xDamp, yDamp;
    position = node.position;
    motion = node.motion;
    position.position.x += motion.velocity.x * time;
    position.position.y += motion.velocity.y * time;
    if (position.position.x < 0) {
      position.position.x += this.config.width;
    }
    if (position.position.x > this.config.width) {
      position.position.x -= this.config.width;
    }
    if (position.position.y < 0) {
      position.position.y += this.config.height;
    }
    if (position.position.y > this.config.height) {
      position.position.y -= this.config.height;
    }
    position.rotation += motion.angularVelocity * time;
    if (motion.damping > 0) {
      xDamp = Math.abs(Math.cos(position.rotation) * motion.damping * time);
      yDamp = Math.abs(Math.sin(position.rotation) * motion.damping * time);
      if (motion.velocity.x > xDamp) {
        motion.velocity.x -= xDamp;
      } else if (motion.velocity.x < -xDamp) {
        motion.velocity.x += xDamp;
      } else {
        motion.velocity.x = 0;
      }
      if (motion.velocity.y > yDamp) {
        motion.velocity.y -= yDamp;
      } else if (motion.velocity.y < -yDamp) {
        motion.velocity.y += yDamp;
      } else {
        motion.velocity.y = 0;
      }
    }
  };

  return MovementSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=movement_system.js.map

},{"../../../example":1,"../../../lib":95}],58:[function(require,module,exports){
'use strict';
var PhysicsNode, ash, b2Vec2, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

PhysicsNode = example.nodes.PhysicsNode;

b2Vec2 = Box2D.Common.Math.b2Vec2;

example.systems.PhysicsSystem = (function(_super) {
  __extends(PhysicsSystem, _super);

  PhysicsSystem.prototype.world = null;

  PhysicsSystem.prototype.count = 0;

  PhysicsSystem.prototype.kount = 0;

  function PhysicsSystem(world) {
    this.world = world;
    this.updateNode = __bind(this.updateNode, this);
    this.update = __bind(this.update, this);
  }

  PhysicsSystem.prototype.addToEngine = function(engine) {
    this.nodeList = engine.getNodeList(PhysicsNode);
  };

  PhysicsSystem.prototype.removeFromEngine = function(engine) {
    this.nodeList = null;
  };

  PhysicsSystem.prototype.update = function(time) {
    var node;
    this.world.Step(time, 10, 10);
    this.world.ClearForces();
    node = this.nodeList.head;
    while (node) {
      this.updateNode(node, time);
      node = node.next;
    }
  };

  PhysicsSystem.prototype.updateNode = function(node, time) {
    this.count++;
    if (this.count === 60) {
      this.count = 0;
    }
  };

  return PhysicsSystem;

})(ash.core.System);

//# sourceMappingURL=physics_system.js.map

},{"../../../example":1,"../../../lib":95}],59:[function(require,module,exports){
'use strict';
var RenderNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

RenderNode = example.nodes.RenderNode;

example.systems.RenderSystem = (function(_super) {
  __extends(RenderSystem, _super);

  RenderSystem.prototype.graphic = null;

  RenderSystem.prototype.nodes = null;

  function RenderSystem(graphic) {
    this.graphic = graphic;
    this.update = __bind(this.update, this);
  }

  RenderSystem.prototype.addToEngine = function(engine) {
    var node;
    this.nodes = engine.getNodeList(RenderNode);
    node = this.nodes.head;
    while (node) {
      this.addToDisplay(node);
      node = node.next;
    }
  };

  RenderSystem.prototype.removeFromEngine = function(engine) {
    this.nodes = null;
  };

  RenderSystem.prototype.update = function(time) {
    var display, graphic, node, position;
    this.graphic.save();
    this.graphic.translate(0, 0);
    this.graphic.rotate(0);
    this.graphic.clearRect(0, 0, this.graphic.canvas.width, this.graphic.canvas.height);
    node = this.nodes.head;
    while (node) {
      display = node.display;
      graphic = display.graphic;
      position = node.position;
      graphic.x = position.position.x;
      graphic.y = position.position.y;
      graphic.rotation = position.rotation;
      graphic.draw();
      node = node.next;
    }
    this.graphic.restore();
  };

  return RenderSystem;

})(ash.core.System);

//# sourceMappingURL=render_system.js.map

},{"../../../example":1,"../../../lib":95}],60:[function(require,module,exports){
'use strict';
var example;

example = require('../../../example');

example.systems.SystemPriorities = (function() {
  function SystemPriorities() {}

  SystemPriorities.preUpdate = 1;

  SystemPriorities.update = 2;

  SystemPriorities.move = 3;

  SystemPriorities.resolveCollisions = 4;

  SystemPriorities.stateMachines = 5;

  SystemPriorities.animate = 6;

  SystemPriorities.render = 7;

  return SystemPriorities;

})();

//# sourceMappingURL=system_priorities.js.map

},{"../../../example":1}],61:[function(require,module,exports){
'use strict';
var AsteroidCollisionNode, GameNode, WaitForStartNode, ash, example,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

example = require('../../../example');

WaitForStartNode = example.nodes.WaitForStartNode;

AsteroidCollisionNode = example.nodes.AsteroidCollisionNode;

GameNode = example.nodes.GameNode;

example.systems.WaitForStartSystem = (function(_super) {
  __extends(WaitForStartSystem, _super);

  WaitForStartSystem.prototype.engine = null;

  WaitForStartSystem.prototype.creator = null;

  WaitForStartSystem.prototype.gameNodes = null;

  WaitForStartSystem.prototype.waitNodes = null;

  WaitForStartSystem.prototype.asteroids = null;

  function WaitForStartSystem(creator) {
    this.creator = creator;
    this.update = __bind(this.update, this);
  }

  WaitForStartSystem.prototype.addToEngine = function(engine) {
    this.engine = engine;
    this.waitNodes = engine.getNodeList(WaitForStartNode);
    this.gameNodes = engine.getNodeList(GameNode);
    this.asteroids = engine.getNodeList(AsteroidCollisionNode);
  };

  WaitForStartSystem.prototype.removeFromEngine = function(engine) {
    this.waitNodes = null;
    this.gameNodes = null;
  };

  WaitForStartSystem.prototype.update = function(time) {
    var asteroid, game, node;
    node = this.waitNodes.head;
    game = this.gameNodes.head;
    if (node && node.wait.startGame && game) {
      asteroid = this.asteroids.head;
      while (asteroid) {
        this.creator.destroyEntity(asteroid.entity);
        asteroid = asteroid.next;
      }
      game.state.setForStart();
      node.wait.startGame = false;
      this.engine.removeEntity(node.entity);
    }
  };

  return WaitForStartSystem;

})(ash.core.System);

//# sourceMappingURL=wait_for_start_system.js.map

},{"../../../example":1,"../../../lib":95}],62:[function(require,module,exports){
'use strict';
var Dictionary, NodeList, NodePool, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');

NodeList = ash.core.NodeList;

NodePool = ash.core.NodePool;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * The default class for managing a NodeList. This class creates the NodeList and adds and removes
 * nodes to/from the list as the entities and the components in the engine change.
 *
 * It uses the basic entity matching pattern of an entity system - entities are added to the list if
 * they contain components matching all the public properties of the node class.
 */

ash.core.ComponentMatchingFamily = (function() {
  ComponentMatchingFamily.prototype.nodes = null;

  ComponentMatchingFamily.prototype.entities = null;

  ComponentMatchingFamily.prototype.nodeClass = null;

  ComponentMatchingFamily.prototype.components = null;

  ComponentMatchingFamily.prototype.nodePool = null;

  ComponentMatchingFamily.prototype.engine = null;


  /*
   * The constructor. Creates a ComponentMatchingFamily to provide a NodeList for the
   * given node class.
   *
   * @param nodeClass The type of node to create and manage a NodeList for.
   * @param engine The engine that this family is managing teh NodeList for.
   */

  function ComponentMatchingFamily(nodeClass, engine) {
    this.nodeClass = nodeClass;
    this.engine = engine;
    this.releaseNodePoolCache = __bind(this.releaseNodePoolCache, this);
    this.init();
  }


  /*
   * Initialises the class. Creates the nodelist and other tools. Analyses the node to determine
   * what component types the node requires.
   */

  ComponentMatchingFamily.prototype.init = function() {
    var name, type, _ref;
    this.nodes = new NodeList();
    this.entities = new Dictionary();
    this.components = new Dictionary();
    this.nodePool = new NodePool(this.nodeClass, this.nodeClass.components);
    _ref = this.nodeClass.components;
    for (name in _ref) {
      type = _ref[name];
      this.components[type.name] = type;
    }
  };


  /*
   * The nodelist managed by this family. This is a reference that remains valid always
   * since it is retained and reused by Systems that use the list. i.e. we never recreate the list,
   * we always modify it in place.
   */

  Object.defineProperties(ComponentMatchingFamily.prototype, {
    nodeList: {
      get: function() {
        return this.nodes;
      }
    }
  });


  /*
   * Called by the engine when an entity has been added to it. We check if the entity should be in
   * this family's NodeList and add it if appropriate.
   */

  ComponentMatchingFamily.prototype.newEntity = function(entity) {
    this.addIfMatch(entity);
  };


  /*
   * Called by the engine when a component has been added to an entity. We check if the entity is not in
   * this family's NodeList and should be, and add it if appropriate.
   */

  ComponentMatchingFamily.prototype.componentAddedToEntity = function(entity, componentClass) {
    this.addIfMatch(entity);
  };


  /*
   * Called by the engine when a component has been removed from an entity. We check if the removed component
   * is required by this family's NodeList and if so, we check if the entity is in this this NodeList and
   * remove it if so.
   */

  ComponentMatchingFamily.prototype.componentRemovedFromEntity = function(entity, componentClass) {
    if (componentClass.name in this.components) {
      this.removeIfMatch(entity);
    }
  };


  /*
   * Called by the engine when an entity has been rmoved from it. We check if the entity is in
   * this family's NodeList and remove it if so.
   */

  ComponentMatchingFamily.prototype.removeEntity = function(entity) {
    this.removeIfMatch(entity);
  };


  /*
   * If the entity is not in this family's NodeList, tests the components of the entity to see
   * if it should be in this NodeList and adds it if so.
   */

  ComponentMatchingFamily.prototype.addIfMatch = function(entity) {
    var componentClass, name, node, _ref, _ref1;
    if (this.entities[entity.name] == null) {
      _ref = this.nodeClass.components;
      for (name in _ref) {
        componentClass = _ref[name];
        if (!entity.has(componentClass)) {
          return;
        }
      }
      node = this.nodePool.get();
      node.entity = entity;
      _ref1 = this.nodeClass.components;
      for (name in _ref1) {
        componentClass = _ref1[name];
        node[name] = entity.get(componentClass);
      }
      this.entities[entity.name] = node;
      this.nodes.add(node);
    }
  };


  /*
   * Removes the entity if it is in this family's NodeList.
   */

  ComponentMatchingFamily.prototype.removeIfMatch = function(entity) {
    var node;
    if (entity.name in this.entities) {
      node = this.entities[entity.name];
      delete this.entities[entity.name];
      this.nodes.remove(node);
      if (this.engine.updating) {
        this.nodePool.cache(node);
        this.engine.updateComplete.add(this.releaseNodePoolCache);
      } else {
        this.nodePool.dispose(node);
      }
    }
  };


  /*
   * Releases the nodes that were added to the node pool during this engine update, so they can
   * be reused.
   */

  ComponentMatchingFamily.prototype.releaseNodePoolCache = function() {
    this.engine.updateComplete.remove(this.releaseNodePoolCache);
    this.nodePool.releaseCache();
  };


  /*
   * Removes all nodes from the NodeList.
   */

  ComponentMatchingFamily.prototype.cleanUp = function() {
    var node;
    node = this.nodes.head;
    while (node) {
      this.entities.remove(node.entity);
      node = node.next;
    }
    this.nodes.removeAll();
  };

  return ComponentMatchingFamily;

})();

//# sourceMappingURL=component_matching_family.js.map

},{"../../../lib":95}],63:[function(require,module,exports){
'use strict';
var ComponentMatchingFamily, Dictionary, EntityList, Signal0, SystemList, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');

ComponentMatchingFamily = ash.core.ComponentMatchingFamily;

EntityList = ash.core.EntityList;

Signal0 = ash.signals.Signal0;

SystemList = ash.core.SystemList;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
 */

ash.core.Engine = (function() {
  Engine.prototype.entityNames = null;

  Engine.prototype.entityList = null;

  Engine.prototype.systemList = null;

  Engine.prototype.families = null;


  /*
   * Indicates if the engine is currently in its update loop.
   */

  Engine.prototype.updating = false;


  /*
   * Dispatched when the update loop ends. If you want to add and remove systems from the
   * engine it is usually best not to do so during the update loop. To avoid this you can
   * listen for this signal and make the change when the signal is dispatched.
   */

  Engine.prototype.updateComplete = null;


  /*
   * The class used to manage node lists. In most cases the default class is sufficient
   * but it is exposed here so advanced developers can choose to create and use a
   * different implementation.
   *
   * The class must implement the IFamily interface.
   */

  Engine.prototype.familyClass = ComponentMatchingFamily;

  function Engine() {
    this.update = __bind(this.update, this);
    this.entityList = new EntityList();
    this.entityNames = new Dictionary();
    this.systemList = new SystemList();
    this.families = new Dictionary();
    this.updateComplete = new Signal0();
  }

  Object.defineProperties(Engine.prototype, {

    /*
     * Returns a vector containing all the entities in the engine.
     */
    entities: {
      get: function() {
        var entities, entity;
        entities = [];
        entity = this.entityList.head;
        while (entity) {
          this.entities.push(entity);
          entity = entity.next;
        }
        return entities;
      }
    },

    /*
     * Returns a vector containing all the systems in the engine.
     */
    systems: {
      get: function() {
        var system, systems;
        systems = [];
        system = this.systemList.head;
        while (system) {
          systems.push(system);
          system = system.next;
        }
        return systems;
      }
    }
  });


  /*
   * Add an entity to the engine.
   *
   * @param entity The entity to add.
   */

  Engine.prototype.addEntity = function(entity) {
    var each, family, _ref;
    if (this.entityNames[entity.name]) {
      throw "The entity name " + entity.name + " is already in use by another entity.";
    }
    this.entityList.add(entity);
    this.entityNames[entity.name] = entity;
    entity.componentAdded.add(this.componentAdded);
    entity.componentRemoved.add(this.componentRemoved);
    entity.nameChanged.add(this.entityNameChanged);
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.newEntity(entity);
    }
  };


  /*
   * Remove an entity from the engine.
   *
   * @param entity The entity to remove.
   */

  Engine.prototype.removeEntity = function(entity) {
    var each, family, _ref;
    entity.componentAdded.remove(this.componentAdded);
    entity.componentRemoved.remove(this.componentRemoved);
    entity.nameChanged.remove(this.entityNameChanged);
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.removeEntity(entity);
    }
    delete this.entityNames[entity.name];
    this.entityList.remove(entity);
  };

  Engine.prototype.entityNameChanged = function(entity, oldName) {
    if (this.entityNames[oldName] === entity) {
      delete this.entityNames[oldName];
      this.entityNames[entity.name] = entity;
    }
  };


  /*
   * Get an entity based n its name.
   *
   * @param name The name of the entity
   * @return The entity, or null if no entity with that name exists on the engine
   */

  Engine.prototype.getEntityByName = function(name) {
    return this.entityNames[name];
  };


  /*
   * Remove all entities from the engine.
   */

  Engine.prototype.removeAllEntities = function() {
    while (this.entityList.head !== null) {
      this.removeEntity(this.entityList.head);
    }
  };


  /*
   @private
   */

  Engine.prototype.componentAdded = function(entity, componentClass) {
    var each, family, _ref;
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.componentAddedToEntity(entity, componentClass);
    }
  };


  /*
   @private
   */

  Engine.prototype.componentRemoved = function(entity, componentClass) {
    var each, family, _ref;
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.componentRemovedFromEntity(entity, componentClass);
    }
  };


  /*
   * Get a collection of nodes from the engine, based on the type of the node required.
   *
   * <p>The engine will create the appropriate NodeList if it doesn't already exist and
   * will keep its contents up to date as entities are added to and removed from the
   * engine.</p>
   *
   * <p>If a NodeList is no longer required, release it with the releaseNodeList method.</p>
   *
   * @param nodeClass The type of node required.
   * @return A linked list of all nodes of this type from all entities in the engine.
   */

  Engine.prototype.getNodeList = function(nodeClass) {
    var entity, family;
    if (nodeClass.name in this.families) {
      return this.families[nodeClass.name].nodeList;
    }
    family = new this.familyClass(nodeClass, this);
    this.families[nodeClass.name] = family;
    entity = this.entityList.head;
    while (entity) {
      family.newEntity(entity);
      entity = entity.next;
    }
    return family.nodeList;
  };


  /*
   * If a NodeList is no longer required, this method will stop the engine updating
   * the list and will release all references to the list within the framework
   * classes, enabling it to be garbage collected.
   *
   * <p>It is not essential to release a list, but releasing it will free
   * up memory and processor resources.</p>
   *
   * @param nodeClass The type of the node class if the list to be released.
   */

  Engine.prototype.releaseNodeList = function(nodeClass) {
    if (nodeClass.name in this.families) {
      this.families[nodeClass.name].cleanUp();
      delete this.families[nodeClass.name];
    }
  };


  /*
   * Add a system to the engine, and set its priority for the order in which the
   * systems are updated by the engine update loop.
   *
   * <p>The priority dictates the order in which the systems are updated by the engine update
   * loop. Lower numbers for priority are updated first. i.e. a priority of 1 is
   * updated before a priority of 2.</p>
   *
   * @param system The system to add to the engine.
   * @param priority The priority for updating the systems during the engine loop. A
   * lower number means the system is updated sooner.
   */

  Engine.prototype.addSystem = function(system, priority) {
    system.priority = priority;
    system.addToEngine(this);
    this.systemList.add(system);
  };


  /*
   * Get the system instance of a particular type from within the engine.
   *
   * @param type The type of system
   * @return The instance of the system type that is in the engine, or
   * null if no systems of this type are in the engine.
   */

  Engine.prototype.getSystem = function(type) {
    return systemList.get(type);
  };


  /*
   * Remove a system from the engine.
   *
   * @param system The system to remove from the engine.
   */

  Engine.prototype.removeSystem = function(system) {
    this.systemList.remove(system);
    system.removeFromEngine(this);
  };


  /*
   * Remove all systems from the engine.
   */

  Engine.prototype.removeAllSystems = function() {
    while (this.systemList.head !== null) {
      this.removeSystem(this.systemList.head);
    }
  };


  /*
   * Update the engine. This causes the engine update loop to run, calling update on all the
   * systems in the engine.
   *
   * <p>The package ash.tick contains classes that can be used to provide
   * a steady or variable tick that calls this update method.</p>
   *
   * @time The duration, in seconds, of this update step.
   */

  Engine.prototype.update = function(time) {
    var system;
    this.updating = true;
    system = this.systemList.head;
    while (system) {
      system.update(time);
      system = system.next;
    }
    this.updating = false;
    this.updateComplete.dispatch();
  };

  return Engine;

})();

//# sourceMappingURL=engine.js.map

},{"../../../lib":95}],64:[function(require,module,exports){
'use strict';
var Dictionary, Signal2, ash;

ash = require('../../../lib');

Signal2 = ash.signals.Signal2;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * An entity is composed from components. As such, it is essentially a collection object for components.
 * Sometimes, the entities in a game will mirror the actual characters and objects in the game, but this
 * is not necessary.
 *
 * <p>Components are simple value objects that contain data relevant to the entity. Entities
 * with similar functionality will have instances of the same components. So we might have
 * a position component</p>
 *
 * <p><code>class PositionComponent
 * {
 *   public var x:Float;
 *   public var y:Float;
 * }</code></p>
 *
 * <p>All entities that have a position in the game world, will have an instance of the
 * position component. Systems operate on entities based on the components they have.</p>
 */

ash.core.Entity = (function() {
  var nameCount;

  nameCount = 0;


  /*
   * Optional, give the entity a name. This can help with debugging and with serialising the entity.
   */

  Entity.prototype._name = '';


  /*
   * This signal is dispatched when a component is added to the entity.
   */

  Entity.prototype.componentAdded = null;


  /*
   * This signal is dispatched when a component is removed from the entity.
   */

  Entity.prototype.componentRemoved = null;


  /*
   * Dispatched when the name of the entity changes. Used internally by the engine to track entities based on their names.
   */

  Entity.prototype.nameChanged = null;

  Entity.prototype.previous = null;

  Entity.prototype.next = null;

  Entity.prototype.components = null;

  function Entity(name) {
    if (name == null) {
      name = '';
    }
    Object.defineProperties(this, {

      /*
       * All entities have a name. If no name is set, a default name is used. Names are used to
       * fetch specific entities from the engine, and can also help to identify an entity when debugging.
       */
      name: {
        get: function() {
          return this._name;
        },
        set: function(value) {
          var previous;
          if (this._name !== value) {
            previous = this._name;
            this._name = value;
            return this.nameChanged.dispatch(this, previous);
          }
        }
      }
    });
    this.componentAdded = new Signal2();
    this.componentRemoved = new Signal2();
    this.nameChanged = new Signal2();
    this.components = new Dictionary();
    if (name !== '') {
      this._name = name;
    } else {
      this._name = "_entity" + (++nameCount);
    }
  }


  /*
   * Add a component to the entity.
   *
   * @param component The component object to add.
   * @param componentClass The class of the component. This is only necessary if the component
   * extends another component class and you want the framework to treat the component as of
   * the base class type. If not set, the class type is determined directly from the component.
   *
   * @return A reference to the entity. This enables the chaining of calls to add, to make
   * creating and configuring entities cleaner. e.g.
   *
   * <code>var entity:Entity = new Entity()
   *     .add(new Position(100, 200)
   *     .add(new Display(new PlayerClip());</code>
   */

  Entity.prototype.add = function(component, componentClass) {
    if (componentClass == null) {
      componentClass = component.constructor;
    }
    if (componentClass.name in this.components) {
      this.remove(componentClass);
    }
    this.components[componentClass.name] = component;
    this.componentAdded.dispatch(this, componentClass);
    return this;
  };


  /*
   * Remove a component from the entity.
   *
   * @param componentClass The class of the component to be removed.
   * @return the component, or null if the component doesn't exist in the entity
   */

  Entity.prototype.remove = function(componentClass) {
    var component, name;
    name = 'string' === typeof componentClass ? componentClass : componentClass.name;
    component = this.components[name];
    if (component !== null) {
      delete this.components[name];
      this.componentRemoved.dispatch(this, name);
      return component;
    }
    return null;
  };


  /*
   * Get a component from the entity.
   *
   * @param componentClass The class of the component requested.
   * @return The component, or null if none was found.
   */

  Entity.prototype.get = function(componentClass) {
    return this.components[componentClass.name];
  };


  /*
   * Get all components from the entity.
   *
   * @return An array containing all the components that are on the entity.
   */

  Entity.prototype.getAll = function() {
    var component, componentArray, _i, _len, _ref;
    componentArray = [];
    _ref = this.components;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      component = _ref[_i];
      componentArray.push(component);
    }
    return componentArray;
  };


  /*
   * Does the entity have a component of a particular type.
   *
   * @param componentClass The class of the component sought.
   * @return true if the entity has a component of the type, false if not.
   */

  Entity.prototype.has = function(componentClass) {
    return componentClass.name in this.components;
  };

  return Entity;

})();

//# sourceMappingURL=entity.js.map

},{"../../../lib":95}],65:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * An internal class for a linked list of entities. Used inside the framework for
 * managing the entities.
 */

ash.core.EntityList = (function() {
  function EntityList() {}

  EntityList.prototype.head = null;

  EntityList.prototype.tail = null;

  EntityList.prototype.add = function(entity) {
    if (this.head === null) {
      this.head = this.tail = entity;
      entity.next = entity.previous = null;
    } else {
      this.tail.next = entity;
      entity.previous = this.tail;
      entity.next = null;
      this.tail = entity;
    }
  };

  EntityList.prototype.remove = function(entity) {
    return;
    if (this.head === entity) {
      this.head = this.head.next;
    }
    if (this.tail === entity) {
      this.tail = this.tail.previous;
    }
    if (entity.previous !== null) {
      entity.previous.next = entity.next;
    }
    if (entity.next !== null) {
      entity.next.previous = entity.previous;
    }
  };

  EntityList.prototype.removeAll = function() {
    var entity;
    while (this.head !== null) {
      entity = this.head;
      this.head = this.head.next;
      entity.previous = null;
      entity.next = null;
    }
    this.tail = null;
  };

  return EntityList;

})();

//# sourceMappingURL=entity_list.js.map

},{"../../../lib":95}],66:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * The interface for classes that are used to manage NodeLists (set as the familyClass property
 * in the Engine object). Most developers don't need to use this since the default implementation
 * is used by default and suits most needs.
 */

ash.core.Family = (function() {
  Family.prototype.nodes = null;


  /*
   * Returns the NodeList managed by this class. This should be a reference that remains valid always
   * since it is retained and reused by Systems that use the list. i.e. never recreate the list,
   * always modify it in place.
   */

  function Family() {
    Object.defineProperties(this, {
      nodeList: {
        get: function() {
          return this.nodes;
        }
      }
    });
  }


  /*
   * An entity has been added to the engine. It may already have components so test the entity
   * for inclusion in this family's NodeList.
   */

  Family.prototype.newEntity = function(entity) {
    throw new Error('Method must be overriden');
  };


  /*
   * An entity has been removed from the engine. If it's in this family's NodeList it should be removed.
   */

  Family.prototype.removeEntity = function(entity) {
    throw new Error('Method must be overriden');
  };


  /*
   * A component has been added to an entity. Test whether the entity's inclusion in this family's
   * NodeList should be modified.
   */

  Family.prototype.componentAddedToEntity = function(entity, componentClass) {
    throw new Error('Method must be overriden');
  };


  /*
   * A component has been removed from an entity. Test whether the entity's inclusion in this family's
   * NodeList should be modified.
   */

  Family.prototype.componentRemovedFromEntity = function(entity, componentClass) {
    throw new Error('Method must be overriden');
  };


  /*
   * The family is about to be discarded. Clean up all properties as necessary. Usually, you will
   * want to empty the NodeList at this time.
   */

  Family.prototype.cleanUp = function() {
    throw new Error('Method must be overriden');
  };

  return Family;

})();

//# sourceMappingURL=family.js.map

},{"../../../lib":95}],67:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.core.Node = (function() {
  function Node() {}

  Node.prototype.entity = null;

  Node.prototype.previous = null;

  Node.prototype.next = null;

  return Node;

})();

//# sourceMappingURL=node.js.map

},{"../../../lib":95}],68:[function(require,module,exports){
'use strict';
var Signal1, ash;

ash = require('../../../lib');

Signal1 = ash.signals.Signal1;


/*
 * A collection of nodes.
 *
 * <p>Systems within the engine access the components of entities via NodeLists. A NodeList contains
 * a node for each Entity in the engine that has all the components required by the node. To iterate
 * over a NodeList, start from the head and step to the next on each loop, until the returned value
 * is null. Or just use for in syntax.</p>
 *
 * <p>for (node in nodeList)
 * {
 *   // do stuff
 * }</p>
 *
 * <p>It is safe to remove items from a nodelist during the loop. When a Node is removed form the
 * NodeList it's previous and next properties still point to the nodes that were before and after
 * it in the NodeList just before it was removed.</p>
 */

ash.core.NodeList = (function() {

  /*
   * The first item in the node list, or null if the list contains no nodes.
   */
  NodeList.prototype.head = null;


  /*
   * The last item in the node list, or null if the list contains no nodes.
   */

  NodeList.prototype.tail = null;


  /*
   * A signal that is dispatched whenever a node is added to the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was added.</p>
   */

  NodeList.prototype.nodeAdded = null;


  /*
   * A signal that is dispatched whenever a node is removed from the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was removed.</p>
   */

  NodeList.prototype.nodeRemoved = null;

  function NodeList() {
    this.nodeAdded = new Signal1();
    this.nodeRemoved = new Signal1();
  }

  NodeList.prototype.add = function(node) {
    if (this.head === null) {
      this.head = this.tail = node;
      node.next = node.previous = null;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      node.next = null;
      this.tail = node;
    }
    this.nodeAdded.dispatch(node);
  };

  NodeList.prototype.remove = function(node) {
    if (this.head === node) {
      this.head = this.head.next;
    }
    if (this.tail === node) {
      this.tail = this.tail.previous;
    }
    if (node.previous !== null) {
      node.previous.next = node.next;
    }
    if (node.next !== null) {
      node.next.previous = node.previous;
    }
    this.nodeRemoved.dispatch(node);
  };

  NodeList.prototype.removeAll = function() {
    var node;
    while (this.head !== null) {
      node = this.head;
      this.head = this.head.next;
      node.previous = null;
      node.next = null;
      this.nodeRemoved.dispatch(node);
    }
    this.tail = null;
  };


  /*
   * true if the list is empty, false otherwise.
   */

  Object.defineProperties(NodeList.prototype, {
    empty: {
      get: function() {
        return this.head === null;
      }
    }
  });


  /*
   * Swaps the positions of two nodes in the list. Useful when sorting a list.
   */

  NodeList.prototype.swap = function(node1, node2) {
    var temp;
    if (node1.previous === node2) {
      node1.previous = node2.previous;
      node2.previous = node1;
      node2.next = node1.next;
      node1.next = node2;
    } else if (node2.previous === node1) {
      node2.previous = node1.previous;
      node1.previous = node2;
      node1.next = node2.next;
      node2.next = node1;
    } else {
      temp = node1.previous;
      node1.previous = node2.previous;
      node2.previous = temp;
      temp = node1.next;
      node1.next = node2.next;
      node2.next = temp;
    }
    if (this.head === node1) {
      this.head = node2;
    } else if (this.head === node2) {
      this.head = node1;
    }
    if (this.tail === node1) {
      this.tail = node2;
    } else if (this.tail === node2) {
      this.tail = node1;
    }
    if (node1.previous !== null) {
      node1.previous.next = node1;
    }
    if (node2.previous !== null) {
      node2.previous.next = node2;
    }
    if (node1.next !== null) {
      node1.next.previous = node1;
    }
    if (node2.next !== null) {
      node2.next.previous = node2;
    }
  };


  /*
   * Performs an insertion sort on the node list. In general, insertion sort is very efficient with short lists
   * and with lists that are mostly sorted, but is inefficient with large lists that are randomly ordered.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter
   * and the original order will be retained.</p>
   *
   * <p>This insertion sort implementation runs in place so no objects are created during the sort.</p>
   */

  NodeList.prototype.insertionSort = function(sortFunction) {
    var node, other, remains;
    if (this.head === this.tail) {
      return;
    }
    remains = this.head.next;
    node = remains;
    while (node !== null) {
      remains = node.next;
      other = node.previous;
      while (other !== null) {
        if (sortFunction(node, other) >= 0) {
          if (node !== other.next) {
            if (this.tail === node) {
              this.tail = node.previous;
            }
            node.previous.next = node.next;
            if (node.next !== null) {
              node.next.previous = node.previous;
            }
            node.next = other.next;
            node.previous = other;
            node.next.previous = node;
            other.next = node;
          }
          break;
        }
        other = other.previous;
      }
      if (other === null) {
        if (this.tail === node) {
          this.tail = node.previous;
        }
        node.previous.next = node.next;
        if (node.next !== null) {
          node.next.previous = node.previous;
        }
        node.next = this.head;
        this.head.previous = node;
        node.previous = null;
        this.head = node;
      }
      node = remains;
    }
  };


  /*
   * Performs a merge sort on the node list. In general, merge sort is more efficient than insertion sort
   * with long lists that are very unsorted.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter.</p>
   *
   * <p>This merge sort implementation creates and uses a single Vector during the sort operation.</p>
   */

  NodeList.prototype.mergeSort = function(sortFunction) {
    var end, lists, next, start;
    if (this.head === this.tail) {
      return;
    }
    lists = [];
    start = this.head;
    while (start !== null) {
      end = start;
      while (end.next !== null && sortFunction(end, end.next) <= 0) {
        end = end.next;
      }
      next = end.next;
      start.previous = end.next = null;
      lists.push(start);
      start = next;
    }
    while (lists.length > 1) {
      lists.push(this.merge(lists.shift(), lists.shift(), sortFunction));
    }
    this.tail = this.head = lists[0];
    while (this.tail.next !== null) {
      this.tail = this.tail.next;
    }
  };

  NodeList.prototype.merge = function(head1, head2, sortFunction) {
    var head, node;
    if (sortFunction(head1, head2) <= 0) {
      head = node = head1;
      head1 = head1.next;
    } else {
      head = node = head2;
      head2 = head2.next;
    }
    while (head1 !== null && head2 !== null) {
      if (sortFunction(head1, head2) <= 0) {
        node.next = head1;
        head1.previous = node;
        node = head1;
        head1 = head1.next;
      } else {
        node.next = head2;
        head2.previous = node;
        node = head2;
        head2 = head2.next;
      }
    }
    if (head1 !== null) {
      node.next = head1;
      head1.previous = node;
    } else {
      node.next = head2;
      head2.previous = node;
    }
    return head;
  };

  return NodeList;

})();

//# sourceMappingURL=node_list.js.map

},{"../../../lib":95}],69:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This internal class maintains a pool of deleted nodes for reuse by the framework. This reduces the overhead
 * from object creation and garbage collection.
 *
 * Because nodes may be deleted from a NodeList while in use, by deleting Nodes from a NodeList
 * while iterating through the NodeList, the pool also maintains a cache of nodes that are added to the pool
 * but should not be reused yet. They are then released into the pool by calling the releaseCache method.
 */

ash.core.NodePool = (function() {
  NodePool.prototype.tail = null;

  NodePool.prototype.nodeClass = null;

  NodePool.prototype.cacheTail = null;

  NodePool.prototype.components = null;


  /*
   * Creates a pool for the given node class.
   */

  function NodePool(nodeClass, components) {
    this.nodeClass = nodeClass;
    this.components = components;
  }


  /*
   * Fetches a node from the pool.
   */

  NodePool.prototype.get = function() {
    var node;
    if (this.tail !== null) {
      node = this.tail;
      this.tail = this.tail.previous;
      node.previous = null;
      return node;
    } else {
      return new this.nodeClass.constructor();
    }
  };


  /*
   * Adds a node to the pool.
   */

  NodePool.prototype.dispose = function(node) {
    var componentName;
    for (componentName in this.components) {
      node[componentName] = null;
    }
    node.entity = null;
    node.next = null;
    node.previous = this.tail;
    this.tail = node;
  };


  /*
   * Adds a node to the cache
   */

  NodePool.prototype.cache = function(node) {
    node.previous = this.cacheTail;
    this.cacheTail = node;
  };


  /*
   * Releases all nodes from the cache into the pool
   */

  NodePool.prototype.releaseCache = function() {
    var node;
    while (this.cacheTail !== null) {
      node = this.cacheTail;
      this.cacheTail = node.previous;
      node.next = null;
      node.previous = this.tail;
      this.tail = node;
    }
  };

  return NodePool;

})();

//# sourceMappingURL=node_pool.js.map

},{"../../../lib":95}],70:[function(require,module,exports){
'use strict';
var ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');


/*
 * The base class for a system.
 *
 * <p>A system is part of the core functionality of the game. After a system is added to the engine, its
 * update method will be called on every frame of the engine. When the system is removed from the engine,
 * the update method is no longer called.</p>
 *
 * <p>The aggregate of all systems in the engine is the functionality of the game, with the update
 * methods of those systems collectively constituting the engine update loop. Systems generally operate on
 * node lists - collections of nodes. Each node contains the components from an entity in the engine
 * that match the node.</p>
 */

ash.core.System = (function() {
  function System() {
    this.update = __bind(this.update, this);
  }


  /*
    * Used internally to manage the list of systems within the engine. The previous system in the list.
   */

  System.prototype.previous = null;


  /*
   * Used internally to manage the list of systems within the engine. The next system in the list.
   */

  System.prototype.next = null;


  /*
   * Used internally to hold the priority of this system within the system list. This is
   * used to order the systems so they are updated in the correct order.
   */

  System.prototype.priority = 0;


  /*
   * Called just after the system is added to the engine, before any calls to the update method.
   * Override this method to add your own functionality.
   *
   * @param engine The engine the system was added to.
   */

  System.prototype.addToEngine = function(engine) {};


  /*
   * Called just after the system is removed from the engine, after all calls to the update method.
   * Override this method to add your own functionality.
   *
   * @param engine The engine the system was removed from.
   */

  System.prototype.removeFromEngine = function(engine) {};


  /*
   * After the system is added to the engine, this method is called every frame until the system
   * is removed from the engine. Override this method to add your own functionality.
   *
   * <p>If you need to perform an action outside of the update loop (e.g. you need to change the
   * systems in the engine and you don't want to do it while they're updating) add a listener to
   * the engine's updateComplete signal to be notified when the update loop completes.</p>
   *
   * @param time The duration, in seconds, of the frame.
   */

  System.prototype.update = function(time) {};

  return System;

})();

//# sourceMappingURL=system.js.map

},{"../../../lib":95}],71:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * Used internally, this is an ordered list of Systems for use by the engine update loop.
 */

ash.core.SystemList = (function() {
  function SystemList() {}

  SystemList.prototype.head = null;

  SystemList.prototype.tail = null;

  SystemList.prototype.add = function(system) {
    var node;
    if (this.head === null) {
      this.head = this.tail = system;
      system.next = system.previous = null;
    } else {
      node = this.tail;
      while (node !== null) {
        if (node.priority <= system.priority) {
          break;
        }
        node = node.previous;
      }
      if (node === this.tail) {
        this.tail.next = system;
        system.previous = this.tail;
        system.next = null;
        this.tail = system;
      } else if (node === null) {
        system.next = this.head;
        system.previous = null;
        this.head.previous = system;
        this.head = system;
      } else {
        system.next = node.next;
        system.previous = node;
        node.next.previous = system;
        node.next = system;
      }
    }
  };

  SystemList.prototype.remove = function(system) {
    if (this.head === system) {
      this.head = this.head.next;
    }
    if (this.tail === system) {
      this.tail = this.tail.previous;
    }
    if (system.previous !== null) {
      system.previous.next = system.next;
    }
    if (system.next !== null) {
      system.next.previous = system.previous;
    }
  };

  SystemList.prototype.removeAll = function() {
    var system;
    while (this.head !== null) {
      system = this.head;
      this.head = this.head.next;
      system.previous = null;
      system.next = null;
    }
    this.tail = null;
  };

  SystemList.prototype.get = function(type) {
    var system;
    system = this.systemList.head;
    while (system) {
      if (system.constructor === type) {
        return system;
      }
      system = system.next;
    }
    return null;
  };

  return SystemList;

})();

//# sourceMappingURL=system_list.js.map

},{"../../../lib":95}],72:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This component provider always returns the same instance of the component. The instance
 * is passed to the provider at initialisation.
 */

ash.fsm.ComponentInstanceProvider = (function() {
  ComponentInstanceProvider.prototype.instance = null;


  /*
   * Constructor
   *
   * @param instance The instance to return whenever a component is requested.
   */

  function ComponentInstanceProvider(instance) {
    this.instance = instance;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance
   */

  ComponentInstanceProvider.prototype.getComponent = function() {
    return this.instance;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentInstanceProvider.prototype, {
    identifier: {
      get: function() {
        return this.instance;
      }
    }
  });

  return ComponentInstanceProvider;

})();

//# sourceMappingURL=component_instance_provider.js.map

},{"../../../lib":95}],73:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.ComponentSingletonProvider = (function() {
  ComponentSingletonProvider.prototype.componentType = null;

  ComponentSingletonProvider.prototype.instance = null;


  /*
   * Constructor
   *
   * @param type The type of the single instance
   */

  function ComponentSingletonProvider(type) {
    this.componentType = type;

    /*
     * Used to request a component from this provider
     *
     * @return The instance
     */
  }

  ComponentSingletonProvider.prototype.getComponent = function() {
    if (this.instance == null) {
      this.instance = new this.componentType();
    }
    return this.instance;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentSingletonProvider.prototype, {
    identifier: {
      get: function() {
        return this.getComponent();
      }
    }
  });

  return ComponentSingletonProvider;

})();

//# sourceMappingURL=component_singleton_provider.js.map

},{"../../../lib":95}],74:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.ComponentTypeProvider = (function() {
  ComponentTypeProvider.prototype.componentType = null;


  /*
   * Constructor
   *
   * @param type The type of the single instance
   */

  function ComponentTypeProvider(type) {
    this.componentType = type;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance
   */

  ComponentTypeProvider.prototype.getComponent = function() {
    return new this.componentType();
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentTypeProvider.prototype, {
    identifier: {
      get: function() {
        return this.componentType;
      }
    }
  });

  return ComponentTypeProvider;

})();

//# sourceMappingURL=component_type_provider.js.map

},{"../../../lib":95}],75:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.DynamicComponentProvider = (function() {
  DynamicComponentProvider.prototype._closure = null;


  /*
   * Constructor
   *
   * @param closure The function that will return the component instance when called.
   */

  function DynamicComponentProvider(closure) {
    this._closure = closure;

    /*
     * Used to request a component from this provider
     *
     * @return The instance
     */
  }

  DynamicComponentProvider.prototype.getComponent = function() {
    return this._closure;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(DynamicComponentProvider.prototype, {
    identifier: {
      get: function() {
        return this._closure;
      }
    }
  });

  return DynamicComponentProvider;

})();

//# sourceMappingURL=dynamic_component_provider.js.map

},{"../../../lib":95}],76:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider returns results of a method call. The method
 * is passed to the provider at initialisation.
 */

ash.fsm.DynamicSystemProvider = (function() {
  DynamicSystemProvider.prototype.method = function() {};

  DynamicSystemProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param method The method that returns the System instance;
   */

  function DynamicSystemProvider(method) {
    this.method = method;
  }


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The method used to call the System instances
   */

  DynamicSystemProvider.prototype.getSystem = function() {
    return this.method();
  };

  Object.defineProperties(DynamicSystemProvider.prototype, {

    /*
     * The priority at which the System should be added to the Engine
     */
    identifier: {
      get: function() {
        return this.method;
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return DynamicSystemProvider;

})();

//# sourceMappingURL=dynamic_system_provider.js.map

},{"../../../lib":95}],77:[function(require,module,exports){
'use strict';
var DynamicSystemProvider, StateSystemMapping, SystemInstanceProvider, SystemSingletonProvider, ash;

ash = require('../../../lib');

SystemInstanceProvider = ash.fsm.SystemInstanceProvider;

SystemSingletonProvider = ash.fsm.SystemSingletonProvider;

DynamicSystemProvider = ash.fsm.DynamicSystemProvider;

StateSystemMapping = ash.fsm.StateSystemMapping;


/*
 * Represents a state for a SystemStateMachine. The state contains any number of SystemProviders which
 * are used to add Systems to the Engine when this state is entered.
 */

ash.fsm.EngineState = (function() {
  EngineState.prototype.providers = null;

  function EngineState() {
    this.providers = [];
  }


  /*
   * Creates a mapping for the System type to a specific System instance. A
   * SystemInstanceProvider is used for the mapping.
   *
   * @param system The System instance to use for the mapping
   * @return This StateSystemMapping, so more modifications can be applied
   */

  EngineState.prototype.addInstance = function(system) {
    return this.addProvider(new SystemInstanceProvider(system));
  };


  /*
   * Creates a mapping for the System type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A SystemSingletonProvider is used for
   * the mapping.
   *
   * @param type The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This StateSystemMapping, so more modifications can be applied
   */

  EngineState.prototype.addSingleton = function(type) {
    return this.addProvider(new SystemSingletonProvider(type));
  };


  /*
   * Creates a mapping for the System type to a method call.
   * The method should return a System instance. A DynamicSystemProvider is used for
   * the mapping.
   *
   * @param method The method to provide the System instance.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  EngineState.prototype.addMethod = function(method) {
    return this.addProvider(new DynamicSystemProvider(method));
  };


  /*
   * Adds any SystemProvider.
   *
   * @param provider The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  EngineState.prototype.addProvider = function(provider) {
    var mapping;
    mapping = new StateSystemMapping(this, provider);
    this.providers.push(provider);
    return mapping;
  };

  return EngineState;

})();

//# sourceMappingURL=engine_state.js.map

},{"../../../lib":95}],78:[function(require,module,exports){
'use strict';
var Dictionary, EngineState, ash;

ash = require('../../../lib');

EngineState = ash.fsm.EngineState;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * This is a state machine for the Engine. The state machine manages a set of states,
 * each of which has a set of System providers. When the state machine changes the state, it removes
 * Systems associated with the previous state and adds Systems associated with the new state.
 */

ash.fsm.EngineStateMachine = (function() {
  EngineStateMachine.prototype.engine = null;

  EngineStateMachine.prototype.states = null;

  EngineStateMachine.prototype.currentState = null;


  /*
   * Constructor. Creates an SystemStateMachine.
   */

  function EngineStateMachine(engine) {
    this.engine = engine;
    this.states = new Dictionary();
  }


  /*
   * Add a state to this state machine.
   *
   * @param name The name of this state - used to identify it later in the changeState method call.
   * @param state The state.
   * @return This state machine, so methods can be chained.
   */

  EngineStateMachine.prototype.addState = function(name, state) {
    this.states[name] = state;
    return this;
  };


  /*
   * Create a new state in this state machine.
   *
   * @param name The name of the new state - used to identify it later in the changeState method call.
   * @return The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
   */

  EngineStateMachine.prototype.createState = function(name) {
    var state;
    state = new EngineState();
    this.states[name] = state;
    return this;
  };


  /*
   * Change to a new state. The Systems from the old state will be removed and the Systems
   * for the new state will be added.
   *
   * @param name The name of the state to change to.
   */

  EngineStateMachine.prototype.changeState = function(name) {
    var each, id, newState, other, provider, toAdd, _ref, _ref1;
    newState = this.states[name];
    if (newState == null) {
      throw new Error("Engine state " + name + " doesn't exist");
    }
    if (newState === this.currentState) {
      newState = null;
      return;
    }
    toAdd = new Dictionary();
    _ref = newState.providers;
    for (each in _ref) {
      provider = _ref[each];
      id = provider.identifier;
      toAdd[id] = provider;
    }
    if (currentState) {
      _ref1 = this.currentState.providers;
      for (each in _ref1) {
        provider = _ref1[each];
        id = provider.identifier;
        other = toAdd[id];
        if (other) {
          delete toAdd[id];
        } else {
          this.engine.removeSystem(provider.getSystem());
        }
      }
    }
    for (each in toAdd) {
      provider = toAdd[each];
      this.engine.addSystem(provider.getSystem(), provider.priority);
    }
    return this.currentState = newState;
  };

  return EngineStateMachine;

})();

//# sourceMappingURL=engine_state_machine.js.map

},{"../../../lib":95}],79:[function(require,module,exports){
'use strict';
var Dictionary, StateComponentMapping, ash;

ash = require('../../../lib');

StateComponentMapping = ash.fsm.StateComponentMapping;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * Represents a state for an EntityStateMachine. The state contains any number of ComponentProviders which
 * are used to add components to the entity when this state is entered.
 */

ash.fsm.EntityState = (function() {
  EntityState.prototype.providers = null;

  function EntityState() {
    this.providers = new Dictionary();
  }


  /*
   * Add a new ComponentMapping to this state. The mapping is a utility class that is used to
   * map a component type to the provider that provides the component.
   *
   * @param type The type of component to be mapped
   * @return The component mapping to use when setting the provider for the component
   */

  EntityState.prototype.add = function(type) {
    return new StateComponentMapping(this, type);
  };


  /*
   * Get the ComponentProvider for a particular component type.
   *
   * @param type The type of component to get the provider for
   * @return The ComponentProvider
   */

  EntityState.prototype.get = function(type) {
    return this.providers[type];
  };


  /*
   * To determine whether this state has a provider for a specific component type.
   *
   * @param type The type of component to look for a provider for
   * @return true if there is a provider for the given type, false otherwise
   */

  EntityState.prototype.has = function(type) {
    return this.providers[type] !== null;
  };

  return EntityState;

})();

//# sourceMappingURL=entity_state.js.map

},{"../../../lib":95}],80:[function(require,module,exports){
'use strict';
var Dictionary, EntityState, ash;

ash = require('../../../lib');

EntityState = ash.fsm.EntityState;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * This is a state machine for an entity. The state machine manages a set of states,
 * each of which has a set of component providers. When the state machine changes the state, it removes
 * components associated with the previous state and adds components associated with the new state.
 */

ash.fsm.EntityStateMachine = (function() {
  EntityStateMachine.prototype.states = null;


  /*
  	 * The current state of the state machine.
   */

  EntityStateMachine.prototype.currentState = null;


  /*
   * The entity whose state machine this is
   */

  EntityStateMachine.prototype.entity = null;


  /*
   * Constructor. Creates an EntityStateMachine.
   */

  function EntityStateMachine(entity) {
    this.entity = entity;
    this.states = new Dictionary();
  }


  /*
   * Create a new state in this state machine.
   *
   * @param name The name of the new state - used to identify it later in the changeState method call.
   * @return The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
   */

  EntityStateMachine.prototype.createState = function(name) {
    var state;
    state = new EntityState();
    this.states.push(state);
    return state;
  };


  /*
   * Change to a new state. The components from the old state will be removed and the components
   * for the new state will be added.
   *
   * @param name The name of the state to change to.
   */

  EntityStateMachine.prototype.changeState = function(name) {
    var currentState, newState, other, toAdd, type;
    newState = this.states[name];
    if (!newState) {
      throw new Error("Entity state " + name + " doesn't exist");
    }
    if (newState === this.currentState) {
      newState = null;
      return;
    }
    if (this.currentState) {
      toAdd = new Dictionary();
      for (type in newState.providers) {
        toAdd[type] = newState.providers[type];
      }
      for (type in this.currentState.providers) {
        other = toAdd[type];
        if (other && other.identifier === currentState.providers[type].identifier) {
          delete toAdd[type];
        } else {
          this.entity.remove(type);
        }
      }
    } else {
      toAdd = newState.providers;
    }
    for (type in toAdd) {
      this.entity.add(toAdd[type].getComponent(), type);
    }
    return currentState = newState;
  };

  return EntityStateMachine;

})();

//# sourceMappingURL=entity_state_machine.js.map

},{"../../../lib":95}],81:[function(require,module,exports){
'use strict';
var ComponentInstanceProvider, ComponentSingletonProvider, ComponentTypeProvider, DynamicComponentProvider, ash;

ash = require('../../../lib');

ComponentInstanceProvider = ash.fsm.ComponentInstanceProvider;

ComponentTypeProvider = ash.fsm.ComponentTypeProvider;

ComponentSingletonProvider = ash.fsm.ComponentSingletonProvider;

DynamicComponentProvider = ash.fsm.DynamicComponentProvider;


/*
 * Used by the EntityState class to create the mappings of components to providers via a fluent interface.
 */

ash.fsm.StateComponentMapping = (function() {
  StateComponentMapping.prototype.componentType = null;

  StateComponentMapping.prototype.creatingState = null;

  StateComponentMapping.prototype.provider = null;


  /*
   * Used internally, the constructor creates a component mapping. The constructor
   * creates a ComponentTypeProvider as the default mapping, which will be replaced
   * by more specific mappings if other methods are called.
   *
   * @param creatingState The EntityState that the mapping will belong to
   * @param type The component type for the mapping
   */

  function StateComponentMapping(creatingState, type) {
    this.creatingState = creatingState;
    this.componentType = type;
    this.withType(type);
  }


  /*
   * Creates a mapping for the component type to a specific component instance. A
   * ComponentInstanceProvider is used for the mapping.
   *
   * @param component The component instance to use for the mapping
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withInstance = function(component) {
    this.setProvider(new ComponentInstanceProvider(component));
    return this;
  };


  /*
   * Creates a mapping for the component type to new instances of the provided type.
   * The type should be the same as or extend the type for this mapping. A ComponentTypeProvider
   * is used for the mapping.
   *
   * @param type The type of components to be created by this mapping
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withType = function(type) {
    this.setProvider(new ComponentTypeProvider(type));
    return this;
  };


  /*
   * Creates a mapping for the component type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A ComponentSingletonProvider is used for
   * the mapping.
   *
   * @param The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withSingleton = function(type) {
    if (type == null) {
      type = this.componentType;
    }
    this.setProvider(new ComponentSingletonProvider(type));
    return this;
  };


  /*
   * Creates a mapping for the component type to a method call. A
   * DynamicComponentProvider is used for the mapping.
   *
   * @param method The method to return the component instance
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withMethod = function(method) {
    this.setProvider(new DynamicComponentProvider(method));
    return this;
  };


  /*
   * Creates a mapping for the component type to any ComponentProvider.
   *
   * @param provider The component provider to use.
   * @return This ComponentMapping, so more modifications can be applied.
   */

  StateComponentMapping.prototype.withProvider = function(provider) {
    this.setProvider(provider);
    return this;
  };


  /*
   * Maps through to the add method of the EntityState that this mapping belongs to
   * so that a fluent interface can be used when configuring entity states.
   *
   * @param type The type of component to add a mapping to the state for
   * @return The new ComponentMapping for that type
   */

  StateComponentMapping.prototype.add = function(type) {
    return this.creatingState.add(type);
  };

  StateComponentMapping.prototype.setProvider = function(provider) {
    this.provider = provider;
    return this.creatingState.providers[this.componentType] = provider;
  };

  return StateComponentMapping;

})();

//# sourceMappingURL=state_component_mapping.js.map

},{"../../../lib":95}],82:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * Used by the SystemState class to create the mappings of Systems to providers via a fluent interface.
 */

ash.fsm.StateSystemMapping = (function() {
  StateSystemMapping.prototype.creatingState = null;

  StateSystemMapping.prototype.provider = null;


  /*
   * Used internally, the constructor creates a component mapping. The constructor
   * creates a SystemSingletonProvider as the default mapping, which will be replaced
   * by more specific mappings if other methods are called.
   *
   * @param creatingState The SystemState that the mapping will belong to
   * @param type The System type for the mapping
   */

  function StateSystemMapping(creatingState, provider) {
    this.creatingState = creatingState;
    this.provider = provider;
  }


  /*
   * Applies the priority to the provider that the System will be.
   *
   * @param priority The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.withPriority = function(priority) {
    this.provider.priority = priority;
    return this;
  };


  /*
   * Creates a mapping for the System type to a specific System instance. A
   * SystemInstanceProvider is used for the mapping.
   *
   * @param system The System instance to use for the mapping
   * @return This StateSystemMapping, so more modifications can be applied
   */

  StateSystemMapping.prototype.addInstance = function(system) {
    return creatingState.addInstance(system);
  };


  /*
   * Creates a mapping for the System type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A SystemSingletonProvider is used for
   * the mapping.
   *
   * @param type The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This StateSystemMapping, so more modifications can be applied
   */

  StateSystemMapping.prototype.addSingleton = function(type) {
    return creatingState.addSingleton(type);
  };


  /*
   * Creates a mapping for the System type to a method call.
   * The method should return a System instance. A DynamicSystemProvider is used for
   * the mapping.
   *
   * @param method The method to provide the System instance.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.addMethod = function(method) {
    return creatingState.addMethod(method);
  };


  /*
   * Maps through to the addProvider method of the SystemState that this mapping belongs to
   * so that a fluent interface can be used when configuring entity states.
   *
   * @param provider The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.addProvider = function(provider) {
    return creatingState.addProvider(provider);
  };


  /*
   */

  return StateSystemMapping;

})();

//# sourceMappingURL=state_system_mapping.js.map

},{"../../../lib":95}],83:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider always returns the same instance of the component. The system
 * is passed to the provider at initialisation.
 */

ash.fsm.SystemInstanceProvider = (function() {
  SystemInstanceProvider.prototype.instance = null;

  SystemInstanceProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param instance The instance to return whenever a System is requested.
   */

  function SystemInstanceProvider(instance) {
    this.instance = instance;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance of the System
   */

  SystemInstanceProvider.prototype.getSystem = function() {
    return this.instance;
  };

  Object.defineProperties(SystemInstanceProvider.prototype, {

    /*
     * Used to compare this provider with others. Any provider that returns the same component
     * instance will be regarded as equivalent.
     *
     * @return The instance
     */
    identifier: {
      get: function() {
        return this.instance;
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return SystemInstanceProvider;

})();

//# sourceMappingURL=system_instance_provider.js.map

},{"../../../lib":95}],84:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider always returns the same instance of the System. The instance
 * is created when first required and is of the type passed in to the constructor.
 */

ash.fsm.SystemSingletonProvider = (function() {
  SystemSingletonProvider.prototype.componentType = null;

  SystemSingletonProvider.prototype.instance = null;

  SystemSingletonProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param type The type of the single System instance
   */

  function SystemSingletonProvider(type) {
    this.componentType = type;
  }


  /*
   * Used to request a System from this provider
   *
   * @return The single instance
   */

  SystemSingletonProvider.prototype.getSystem = function() {
    if (!this.instance) {
      this.instance = new this.componentType();
    }
    return this.instance;
  };

  Object.defineProperties(SystemSingletonProvider.prototype, {

    /*
    		 * Used to compare this provider with others. Any provider that returns the same single
    		 * instance will be regarded as equivalent.
    		 *
    		 * @return The single instance
     */
    identifier: {
      get: function() {
        return this.getSystem();
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return SystemSingletonProvider;

})();

//# sourceMappingURL=system_singleton_provider.js.map

},{"../../../lib":95}],85:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * A node in the list of listeners in a signal.
 */

ash.signals.ListenerNode = (function() {
  function ListenerNode() {}

  ListenerNode.prototype.previous = null;

  ListenerNode.prototype.next = null;

  ListenerNode.prototype.listener = null;

  ListenerNode.prototype.once = false;

  return ListenerNode;

})();

//# sourceMappingURL=listener_node.js.map

},{"../../../lib":95}],86:[function(require,module,exports){
'use strict';
var ListenerNode, ash;

ash = require('../../../lib');

ListenerNode = ash.signals.ListenerNode;


/*
 * This internal class maintains a pool of deleted listener nodes for reuse by framework. This reduces
 * the overhead from object creation and garbage collection.
 */

ash.signals.ListenerNodePool = (function() {
  function ListenerNodePool() {}

  ListenerNodePool.prototype.tail = null;

  ListenerNodePool.prototype.cacheTail = null;

  ListenerNodePool.prototype.get = function() {
    var node;
    if (this.tail !== null) {
      node = this.tail;
      this.tail = this.tail.previous;
      node.previous = null;
      return node;
    } else {
      return new ListenerNode();
    }
  };

  ListenerNodePool.prototype.dispose = function(node) {
    node.listener = null;
    node.once = false;
    node.next = null;
    node.previous = this.tail;
    this.tail = node;
  };

  ListenerNodePool.prototype.cache = function(node) {
    node.listener = null;
    node.previous = this.cacheTail;
    this.cacheTail = node;
  };

  ListenerNodePool.prototype.releaseCache = function() {
    var node;
    while (this.cacheTail !== null) {
      node = this.cacheTail;
      this.cacheTail = node.previous;
      node.next = null;
      node.previous = this.tail;
      this.tail = node;
    }
  };

  return ListenerNodePool;

})();

//# sourceMappingURL=listener_node_pool.js.map

},{"../../../lib":95}],87:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal0 = (function(_super) {
  __extends(Signal0, _super);

  function Signal0() {
    return Signal0.__super__.constructor.apply(this, arguments);
  }

  Signal0.prototype.dispatch = function() {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener();
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal0;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal0.js.map

},{"../../../lib":95}],88:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal1 = (function(_super) {
  __extends(Signal1, _super);

  function Signal1() {
    return Signal1.__super__.constructor.apply(this, arguments);
  }

  Signal1.prototype.dispatch = function($1) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal1;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal1.js.map

},{"../../../lib":95}],89:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal2 = (function(_super) {
  __extends(Signal2, _super);

  function Signal2() {
    return Signal2.__super__.constructor.apply(this, arguments);
  }

  Signal2.prototype.dispatch = function($1, $2) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1, $2);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal2;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal2.js.map

},{"../../../lib":95}],90:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal3 = (function(_super) {
  __extends(Signal3, _super);

  function Signal3() {
    return Signal3.__super__.constructor.apply(this, arguments);
  }

  Signal3.prototype.dispatch = function($1, $2, $3) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1, $2, $3);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal3;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal3.js.map

},{"../../../lib":95}],91:[function(require,module,exports){
'use strict';
var ListenerNodePool, ash;

ash = require('../../../lib');

ListenerNodePool = ash.signals.ListenerNodePool;

ash.signals.SignalBase = (function() {
  SignalBase.prototype.head = null;

  SignalBase.prototype.tail = null;

  SignalBase.prototype.numListeners = 0;

  SignalBase.prototype.listenerNodePool = null;

  SignalBase.prototype.toAddHead = null;

  SignalBase.prototype.toAddTail = null;

  SignalBase.prototype.dispatching = false;

  function SignalBase() {
    this.listenerNodePool = new ListenerNodePool();
    this.numListeners = 0;
  }

  SignalBase.prototype.startDispatch = function() {
    this.dispatching = true;
  };

  SignalBase.prototype.endDispatch = function() {
    this.dispatching = false;
    if (this.toAddHead !== null) {
      if (this.head === null) {
        this.head = this.toAddHead;
        this.tail = this.toAddTail;
      } else {
        this.tail.next = this.toAddHead;
        this.toAddHead.previous = this.tail;
        this.tail = this.toAddTail;
      }
      this.toAddHead = null;
      this.toAddTail = null;
    }
    this.listenerNodePool.releaseCache();
  };

  SignalBase.prototype.getNode = function(listener) {
    var node;
    node = this.head;
    while (node !== null) {
      if (node.listener === listener) {
        break;
      }
      node = node.next;
    }
    if (node === null) {
      node = this.toAddHead;
      while (node !== null) {
        if (node.listener === listener) {
          break;
        }
        node = node.next;
      }
    }
    return node;
  };

  SignalBase.prototype.nodeExists = function(listener) {
    return this.getNode(listener) !== null;
  };

  SignalBase.prototype.add = function(listener) {
    var node;
    if (this.nodeExists(listener)) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    this.addNode(node);
  };

  SignalBase.prototype.addOnce = function(listener) {
    var node;
    if (this.nodeExists(listener)) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    node.once = true;
    this.addNode(node);
  };

  SignalBase.prototype.addNode = function(node) {
    if (this.dispatching) {
      if (this.toAddHead === null) {
        this.toAddHead = this.toAddTail = node;
      } else {
        this.toAddTail.next = node;
        node.previous = this.toAddTail;
        this.toAddTail = node;
      }
    } else {
      if (this.head === null) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }
    }
    this.numListeners++;
  };

  SignalBase.prototype.remove = function(listener) {
    var node;
    node = this.getNode(listener);
    if (node !== null) {
      if (this.head === node) {
        this.head = this.head.next;
      }
      if (this.tail === node) {
        this.tail = this.tail.previous;
      }
      if (this.toAddHead === node) {
        this.toAddHead = this.toAddHead.next;
      }
      if (this.toAddTail === node) {
        this.toAddTail = this.toAddTail.previous;
      }
      if (node.previous !== null) {
        node.previous.next = node.next;
      }
      if (node.next !== null) {
        node.next.previous = node.previous;
      }
      if (this.dispatching) {
        this.listenerNodePool.cache(node);
      } else {
        this.listenerNodePool.dispose(node);
      }
      this.numListeners--;
    }
  };

  SignalBase.prototype.removeAll = function() {
    var node;
    while (this.head !== null) {
      node = this.head;
      this.head = this.head.next;
      this.listenerNodePool.dispose(node);
    }
    this.tail = null;
    this.toAddHead = null;
    this.toAddTail = null;
    this.numListeners = 0;
  };

  return SignalBase;

})();

//# sourceMappingURL=signal_base.js.map

},{"../../../lib":95}],92:[function(require,module,exports){
'use strict';
var Signal1, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

Signal1 = ash.signals.Signal1;


/*
 * Uses the enter frame event to provide a frame tick where the frame duration is the time since the previous frame.
 * There is a maximum frame time parameter in the constructor that can be used to limit
 * the longest period a frame can be.
 */

ash.tick.FrameTickProvider = (function(_super) {
  __extends(FrameTickProvider, _super);

  FrameTickProvider.prototype.displayObject = null;

  FrameTickProvider.prototype.previousTime = 0;

  FrameTickProvider.prototype.maximumFrameTime = 0;

  FrameTickProvider.prototype.isPlaying = false;

  FrameTickProvider.prototype.request = null;


  /*
   * Applies a time adjustement factor to the tick, so you can slow down or speed up the entire engine.
   * The update tick time is multiplied by this value, so a value of 1 will run the engine at the normal rate.
   */

  FrameTickProvider.prototype.timeAdjustment = 1;

  function FrameTickProvider(displayObject, maximumFrameTime) {
    this.displayObject = displayObject;
    this.maximumFrameTime = maximumFrameTime;
    this.dispatchTick = __bind(this.dispatchTick, this);
    FrameTickProvider.__super__.constructor.apply(this, arguments);
  }

  Object.defineProperties(FrameTickProvider.prototype, {
    playing: {
      get: function() {
        return this.isPlaying;
      }
    }
  });

  FrameTickProvider.prototype.start = function() {
    this.request = requestAnimationFrame(this.dispatchTick);
    this.isPlaying = true;
  };

  FrameTickProvider.prototype.stop = function() {
    cancelRequestAnimationFrame(this.request);
    this.isPlaying = false;
  };

  FrameTickProvider.prototype.dispatchTick = function(timestamp) {
    var frameTime, temp;
    if (timestamp == null) {
      timestamp = Date.now();
    }
    if (this.displayObject) {
      this.displayObject.begin();
    }
    temp = this.previousTime || timestamp;
    this.previousTime = timestamp;
    frameTime = (timestamp - temp) * 0.001;
    this.dispatch(frameTime);
    requestAnimationFrame(this.dispatchTick);
    if (this.displayObject) {
      this.displayObject.end();
    }
  };

  return FrameTickProvider;

})(Signal1);

//# sourceMappingURL=frame_tick_provider.js.map

},{"../../../lib":95}],93:[function(require,module,exports){
'use strict';
var Dictionary, ash,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ash = require('../../../lib');

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * An object pool for re-using components. This is not integrated in to Ash but is used dierectly by
 * the developer. It expects components to not require any parameters in their constructor.
 *
 * <p>Fetch an object from the pool with</p>
 *
 * <p>ComponentPool.get( ComponentClass );</p>
 *
 * <p>If the pool contains an object of the required type, it will be returned. If it does not, a new object
 * will be created and returned.</p>
 *
 * <p>The object returned may have properties set on it from the time it was previously used, so all properties
 * should be reset in the object once it is received.</p>
 *
 * <p>Add an object to the pool with</p>
 *
 * <p>ComponentPool.dispose( component );</p>
 *
 * <p>You will usually want to do this when removing a component from an entity. The remove method on the entity
 * returns the component that was removed, so this can be done in one line of code like this</p>
 *
 * <p>ComponentPool.dispose( entity.remove( component ) );</p>
 */

ash.tools.ComponentPool = (function() {
  var getPool, pools;

  function ComponentPool() {}

  pools = new Dictionary();

  getPool = function(componentClass) {
    var _ref;
    if ((_ref = componentClass.name, __indexOf.call(pools, _ref) >= 0)) {
      return pools[componentClass.name];
    } else {
      return pools[componentClass.name] = [];
    }
  };


  /*
   * Get an object from the pool.
   *
   * @param componentClass The type of component wanted.
   * @return The component.
   */

  ComponentPool.get = function(componentClass) {
    var pool;
    pool = getPool(componentClass);
    if (pool.length > 0) {
      return pool.pop();
    } else {
      return new componentClass();
    }
  };


  /*
   * Return an object to the pool for reuse.
   *
   * @param component The component to return to the pool.
   */

  ComponentPool.dispose = function(component) {
    var pool, type;
    if (component) {
      type = component.constructor;
      pool = getPool(type);
      pool.push(component);
    }
  };


  /*
   * Dispose of all pooled resources, freeing them for garbage collection.
   */

  ComponentPool.empty = function() {
    return pools = new Dictionary();
  };

  return ComponentPool;

})();

//# sourceMappingURL=component_pool.js.map

},{"../../../lib":95}],94:[function(require,module,exports){
'use strict';
var Engine, Node, NodeList, System, ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

Engine = ash.core.Engine;

Node = ash.core.Node;

NodeList = ash.core.NodeList;

System = ash.core.System;


/*
 * A useful class for systems which simply iterate over a set of nodes, performing the same action on each node. This
 * class removes the need for a lot of boilerplate code in such systems. Extend this class and pass the node type and
 * a node update method into the constructor. The node update method will be called once per node on the update cycle
 * with the node instance and the frame time as parameters. e.g.
 *
 * <code>package;
 * class MySystem extends ListIteratingSystem<MyNode>
 * {
 *     public function new()
 *     {
 *         super(MyNode, updateNode);
 *     }
 *
 *     private function updateNode(node:MyNode, time:Float):Void
 *     {
 *         // process the node here
 *     }
 * }
 * </code>
 */

ash.tools.ListIteratingSystem = (function(_super) {
  __extends(ListIteratingSystem, _super);

  ListIteratingSystem.prototype.nodeList = null;

  ListIteratingSystem.prototype.nodeClass = null;

  ListIteratingSystem.prototype.nodeUpdateFunction = null;

  ListIteratingSystem.prototype.nodeAddedFunction = null;

  ListIteratingSystem.prototype.nodeRemovedFunction = null;

  function ListIteratingSystem(nodeClass, nodeUpdateFunction, nodeAddedFunction, nodeRemovedFunction) {
    if (nodeAddedFunction == null) {
      nodeAddedFunction = null;
    }
    if (nodeRemovedFunction == null) {
      nodeRemovedFunction = null;
    }
    this.nodeClass = nodeClass;
    this.nodeUpdateFunction = nodeUpdateFunction;
    this.nodeAddedFunction = nodeAddedFunction;
    this.nodeRemovedFunction = nodeRemovedFunction;
  }

  ListIteratingSystem.prototype.addToEngine = function(engine) {
    var node;
    this.nodeList = engine.getNodeList(this.nodeClass);
    if (this.nodeAddedFunction !== null) {
      node = this.nodeList.head;
      while (node) {
        this.nodeAddedFunction(node);
        node = node.next;
      }
      this.nodeList.nodeAdded.add(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.add(this.nodeRemovedFunction);
    }
  };

  ListIteratingSystem.prototype.removeFromEngine = function(engine) {
    if (this.nodeAddedFunction !== null) {
      this.nodeList.nodeAdded.remove(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.remove(this.nodeRemovedFunction);
    }
    this.nodeList = null;
  };

  ListIteratingSystem.prototype.update = function(time) {
    var node;
    node = this.nodeList.head;
    while (node) {
      this.nodeUpdateFunction(node, time);
      node = node.next;
    }
  };

  return ListIteratingSystem;

})(System);

//# sourceMappingURL=list_iterating_system.js.map

},{"../../../lib":95}],95:[function(require,module,exports){

/*

   _       _
  /_\  ___| |__
 //_\\/ __| '_ \
/  _  \__ \ | | |
\_/ \_/___/_| |_|

              __  __
    ___ ___  / _|/ _| ___  ___
   / __/ _ \| |_| |_ / _ \/ _ \
  | (_| (_) |  _|  _|  __/  __/
 (_)___\___/|_| |_|  \___|\___|


Copyright (c) 2015 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Author: Richard Lord
Copyright (c) Richard Lord 2011-2012
http://www.richardlord.net


Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
'use strict';
var ash;

module.exports = ash = (function() {
  function ash() {}

  return ash;

})();

ash.signals = (function() {
  function signals() {}

  return signals;

})();

require('./ash/signals/listener_node');

require('./ash/signals/listener_node_pool');

require('./ash/signals/signal_base');

require('./ash/signals/signal0');

require('./ash/signals/signal1');

require('./ash/signals/signal2');

require('./ash/signals/signal3');

ash.core = (function() {
  function core() {}

  return core;

})();

require('./ash/core/entity');

require('./ash/core/entity_list');

require('./ash/core/node');

require('./ash/core/node_list');

require('./ash/core/node_pool');

require('./ash/core/system');

require('./ash/core/system_list');

require('./ash/core/family');

require('./ash/core/component_matching_family');

require('./ash/core/engine');

ash.fsm = (function() {
  function fsm() {}

  return fsm;

})();

require('./ash/fsm/component_instance_provider');

require('./ash/fsm/component_singleton_provider');

require('./ash/fsm/component_type_provider');

require('./ash/fsm/dynamic_component_provider');

require('./ash/fsm/dynamic_system_provider');

require('./ash/fsm/engine_state');

require('./ash/fsm/engine_state_machine');

require('./ash/fsm/entity_state');

require('./ash/fsm/entity_state_machine');

require('./ash/fsm/state_component_mapping');

require('./ash/fsm/state_system_mapping');

require('./ash/fsm/system_instance_provider');

require('./ash/fsm/system_singleton_provider');

ash.tick = (function() {
  function tick() {}

  return tick;

})();

require('./ash/tick/frame_tick_provider');

ash.tools = (function() {
  function tools() {}

  return tools;

})();

require('./ash/tools/component_pool');

require('./ash/tools/list_iterating_system');

//# sourceMappingURL=index.js.map

},{"./ash/core/component_matching_family":62,"./ash/core/engine":63,"./ash/core/entity":64,"./ash/core/entity_list":65,"./ash/core/family":66,"./ash/core/node":67,"./ash/core/node_list":68,"./ash/core/node_pool":69,"./ash/core/system":70,"./ash/core/system_list":71,"./ash/fsm/component_instance_provider":72,"./ash/fsm/component_singleton_provider":73,"./ash/fsm/component_type_provider":74,"./ash/fsm/dynamic_component_provider":75,"./ash/fsm/dynamic_system_provider":76,"./ash/fsm/engine_state":77,"./ash/fsm/engine_state_machine":78,"./ash/fsm/entity_state":79,"./ash/fsm/entity_state_machine":80,"./ash/fsm/state_component_mapping":81,"./ash/fsm/state_system_mapping":82,"./ash/fsm/system_instance_provider":83,"./ash/fsm/system_singleton_provider":84,"./ash/signals/listener_node":85,"./ash/signals/listener_node_pool":86,"./ash/signals/signal0":87,"./ash/signals/signal1":88,"./ash/signals/signal2":89,"./ash/signals/signal3":90,"./ash/signals/signal_base":91,"./ash/tick/frame_tick_provider":92,"./ash/tools/component_pool":93,"./ash/tools/list_iterating_system":94}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvZXhhbXBsZS9pbmRleC5qcyIsInRtcC9leGFtcGxlL3NyYy9hc3Rlcm9pZHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hbmltYXRpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hc3Rlcm9pZC5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvYnVsbGV0LmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGVhdGhfdGhyb2VzLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGlzcGxheS5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2dhbWVfc3RhdGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW4uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW5fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9odWQuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb25fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9waHlzaWNzLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvcG9zaXRpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9zcGFjZXNoaXAuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy93YWl0X2Zvcl9zdGFydC5qcyIsInRtcC9leGFtcGxlL3NyYy9lbnRpdHlfY3JlYXRvci5qcyIsInRtcC9leGFtcGxlL3NyYy9nYW1lX2NvbmZpZy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9hc3Rlcm9pZF9kZWF0aF92aWV3LmpzIiwidG1wL2V4YW1wbGUvc3JjL2dyYXBoaWNzL2FzdGVyb2lkX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvYnVsbGV0X3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvaHVkX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvcG9pbnQuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvc3BhY2VzaGlwX2RlYXRoX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvc3BhY2VzaGlwX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvd2FpdF9mb3Jfc3RhcnRfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9pbnB1dC9rZXlfcG9sbC5qcyIsInRtcC9leGFtcGxlL3NyYy9tYWluLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2FuaW1hdGlvbl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2FzdGVyb2lkX2NvbGxpc2lvbl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2F1ZGlvX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYnVsbGV0X2FnZV9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2J1bGxldF9jb2xsaXNpb25fbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9kZWF0aF90aHJvZXNfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9nYW1lX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvZ3VuX2NvbnRyb2xfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9odWRfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9tb3Rpb25fY29udHJvbF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL21vdmVtZW50X25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvcGh5c2ljc19ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL3JlbmRlcl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL3NwYWNlc2hpcF9jb2xsaXNpb25fbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9zcGFjZXNoaXBfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy93YWl0X2Zvcl9zdGFydF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvYW5pbWF0aW9uX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2F1ZGlvX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2J1bGxldF9hZ2Vfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvY29sbGlzaW9uX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2RlYXRoX3Rocm9lc19zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9nYW1lX21hbmFnZXIuanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9ndW5fY29udHJvbF9zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9odWRfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvbW90aW9uX2NvbnRyb2xfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvbW92ZW1lbnRfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvcGh5c2ljc19zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9yZW5kZXJfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvc3lzdGVtX3ByaW9yaXRpZXMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy93YWl0X2Zvcl9zdGFydF9zeXN0ZW0uanMiLCJ0bXAvbGliL2FzaC9jb3JlL2NvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2VuZ2luZS5qcyIsInRtcC9saWIvYXNoL2NvcmUvZW50aXR5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9lbnRpdHlfbGlzdC5qcyIsInRtcC9saWIvYXNoL2NvcmUvZmFtaWx5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlLmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlX2xpc3QuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGVfcG9vbC5qcyIsInRtcC9saWIvYXNoL2NvcmUvc3lzdGVtLmpzIiwidG1wL2xpYi9hc2gvY29yZS9zeXN0ZW1fbGlzdC5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX2NvbXBvbmVudF9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbmdpbmVfc3RhdGUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW50aXR5X3N0YXRlLmpzIiwidG1wL2xpYi9hc2gvZnNtL2VudGl0eV9zdGF0ZV9tYWNoaW5lLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlX3Bvb2wuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDAuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDEuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDIuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDMuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlLmpzIiwidG1wL2xpYi9hc2gvdGljay9mcmFtZV90aWNrX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvdG9vbHMvY29tcG9uZW50X3Bvb2wuanMiLCJ0bXAvbGliL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0uanMiLCJ0bXAvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gZXhhbXBsZSgpIHt9XG5cbiAgcmV0dXJuIGV4YW1wbGU7XG5cbn0pKCk7XG5cbmV4YW1wbGUuaW5wdXQgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGlucHV0KCkge31cblxuICByZXR1cm4gaW5wdXQ7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vc3JjL2lucHV0L2tleV9wb2xsJyk7XG5cbmV4YW1wbGUuZ3JhcGhpY3MgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGdyYXBoaWNzKCkge31cblxuICByZXR1cm4gZ3JhcGhpY3M7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL3BvaW50Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL2FzdGVyb2lkX3ZpZXcnKTtcblxucmVxdWlyZSgnLi9zcmMvZ3JhcGhpY3MvYXN0ZXJvaWRfZGVhdGhfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9idWxsZXRfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9odWRfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfZGVhdGhfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy93YWl0X2Zvcl9zdGFydF92aWV3Jyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY29tcG9uZW50cygpIHt9XG5cbiAgcmV0dXJuIGNvbXBvbmVudHM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9uJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvYXN0ZXJvaWQnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9hdWRpbycpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2J1bGxldCcpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbicpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2RlYXRoX3Rocm9lcycpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2Rpc3BsYXknKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9nYW1lX3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZ3VuJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZ3VuX2NvbnRyb2xzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvaHVkJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvbW90aW9uJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvbW90aW9uX2NvbnRyb2xzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvcGh5c2ljcycpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL3Bvc2l0aW9uJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvc3BhY2VzaGlwJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvd2FpdF9mb3Jfc3RhcnQnKTtcblxuZXhhbXBsZS5ub2RlcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gbm9kZXMoKSB7fVxuXG4gIHJldHVybiBub2RlcztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYW5pbWF0aW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYXN0ZXJvaWRfY29sbGlzaW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYXVkaW9fbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9idWxsZXRfYWdlX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYnVsbGV0X2NvbGxpc2lvbl9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2RlYXRoX3Rocm9lc19ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2dhbWVfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9ndW5fY29udHJvbF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2h1ZF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL21vdGlvbl9jb250cm9sX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvbW92ZW1lbnRfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9waHlzaWNzX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvcmVuZGVyX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvc3BhY2VzaGlwX2NvbGxpc2lvbl9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL3NwYWNlc2hpcF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL3dhaXRfZm9yX3N0YXJ0X25vZGUnKTtcblxuZXhhbXBsZS5zeXN0ZW1zID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzeXN0ZW1zKCkge31cblxuICByZXR1cm4gc3lzdGVtcztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9hbmltYXRpb25fc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvYXVkaW9fc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvYnVsbGV0X2FnZV9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9jb2xsaXNpb25fc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvZGVhdGhfdGhyb2VzX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2dhbWVfbWFuYWdlcicpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2d1bl9jb250cm9sX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2h1ZF9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9tb3Rpb25fY29udHJvbF9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9tb3ZlbWVudF9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9waHlzaWNzX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL3JlbmRlcl9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9zeXN0ZW1fcHJpb3JpdGllcycpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL3dhaXRfZm9yX3N0YXJ0X3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9lbnRpdHlfY3JlYXRvcicpO1xuXG5yZXF1aXJlKCcuL3NyYy9nYW1lX2NvbmZpZycpO1xuXG5yZXF1aXJlKCcuL3NyYy9hc3Rlcm9pZHMnKTtcblxucmVxdWlyZSgnLi9zcmMvbWFpbicpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb25TeXN0ZW0sIEF1ZGlvU3lzdGVtLCBCdWxsZXRBZ2VTeXN0ZW0sIENvbGxpc2lvblN5c3RlbSwgRGVhdGhUaHJvZXNTeXN0ZW0sIEVudGl0eUNyZWF0b3IsIEdhbWVDb25maWcsIEdhbWVNYW5hZ2VyLCBHYW1lU3RhdGUsIEd1bkNvbnRyb2xTeXN0ZW0sIEh1ZFN5c3RlbSwgS2V5UG9sbCwgTW90aW9uQ29udHJvbFN5c3RlbSwgTW92ZW1lbnRTeXN0ZW0sIFBoeXNpY3NTeXN0ZW0sIFJlbmRlclN5c3RlbSwgU3lzdGVtUHJpb3JpdGllcywgV2FpdEZvclN0YXJ0U3lzdGVtLCBhc2gsIGIyVmVjMiwgYjJXb3JsZCwgZXhhbXBsZTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyk7XG5cbkFuaW1hdGlvblN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5BbmltYXRpb25TeXN0ZW07XG5cbkF1ZGlvU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLkF1ZGlvU3lzdGVtO1xuXG5CdWxsZXRBZ2VTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuQnVsbGV0QWdlU3lzdGVtO1xuXG5Db2xsaXNpb25TeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuQ29sbGlzaW9uU3lzdGVtO1xuXG5EZWF0aFRocm9lc1N5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5EZWF0aFRocm9lc1N5c3RlbTtcblxuR2FtZU1hbmFnZXIgPSBleGFtcGxlLnN5c3RlbXMuR2FtZU1hbmFnZXI7XG5cbkd1bkNvbnRyb2xTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuR3VuQ29udHJvbFN5c3RlbTtcblxuSHVkU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLkh1ZFN5c3RlbTtcblxuTW90aW9uQ29udHJvbFN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5Nb3Rpb25Db250cm9sU3lzdGVtO1xuXG5Nb3ZlbWVudFN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5Nb3ZlbWVudFN5c3RlbTtcblxuUmVuZGVyU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLlJlbmRlclN5c3RlbTtcblxuU3lzdGVtUHJpb3JpdGllcyA9IGV4YW1wbGUuc3lzdGVtcy5TeXN0ZW1Qcmlvcml0aWVzO1xuXG5XYWl0Rm9yU3RhcnRTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuV2FpdEZvclN0YXJ0U3lzdGVtO1xuXG5QaHlzaWNzU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLlBoeXNpY3NTeXN0ZW07XG5cbkdhbWVTdGF0ZSA9IGV4YW1wbGUuY29tcG9uZW50cy5HYW1lU3RhdGU7XG5cbkVudGl0eUNyZWF0b3IgPSBleGFtcGxlLkVudGl0eUNyZWF0b3I7XG5cbkdhbWVDb25maWcgPSBleGFtcGxlLkdhbWVDb25maWc7XG5cbktleVBvbGwgPSBleGFtcGxlLmlucHV0LktleVBvbGw7XG5cbmIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMjtcblxuYjJXb3JsZCA9IEJveDJELkR5bmFtaWNzLmIyV29ybGQ7XG5cbmV4YW1wbGUuQXN0ZXJvaWRzID0gKGZ1bmN0aW9uKCkge1xuICBBc3Rlcm9pZHMucHJvdG90eXBlLmNvbnRhaW5lciA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUudGlja1Byb3ZpZGVyID0gbnVsbDtcblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUua2V5UG9sbCA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5jb25maWcgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkcyhjb250YWluZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnByZXBhcmUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53b3JsZCA9IG5ldyBiMldvcmxkKG5ldyBiMlZlYzIoMCwgMCksIHRydWUpO1xuICAgIHRoaXMuZW5naW5lID0gbmV3IGFzaC5jb3JlLkVuZ2luZSgpO1xuICAgIHRoaXMuY3JlYXRvciA9IG5ldyBFbnRpdHlDcmVhdG9yKHRoaXMuZW5naW5lLCB0aGlzLmNvbnRhaW5lciwgdGhpcy53b3JsZCk7XG4gICAgdGhpcy5rZXlQb2xsID0gbmV3IEtleVBvbGwod2luZG93KTtcbiAgICB0aGlzLmNvbmZpZyA9IG5ldyBHYW1lQ29uZmlnKCk7XG4gICAgdGhpcy5jb25maWcuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY29uZmlnLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBQaHlzaWNzU3lzdGVtKHRoaXMud29ybGQpLCBTeXN0ZW1Qcmlvcml0aWVzLnByZVVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBXYWl0Rm9yU3RhcnRTeXN0ZW0odGhpcy5jcmVhdG9yKSwgU3lzdGVtUHJpb3JpdGllcy5wcmVVcGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgR2FtZU1hbmFnZXIodGhpcy5jcmVhdG9yLCB0aGlzLmNvbmZpZyksIFN5c3RlbVByaW9yaXRpZXMucHJlVXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IE1vdGlvbkNvbnRyb2xTeXN0ZW0odGhpcy5rZXlQb2xsKSwgU3lzdGVtUHJpb3JpdGllcy51cGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgR3VuQ29udHJvbFN5c3RlbSh0aGlzLmtleVBvbGwsIHRoaXMuY3JlYXRvciksIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IEJ1bGxldEFnZVN5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBEZWF0aFRocm9lc1N5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBNb3ZlbWVudFN5c3RlbSh0aGlzLmNvbmZpZyksIFN5c3RlbVByaW9yaXRpZXMubW92ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBDb2xsaXNpb25TeXN0ZW0odGhpcy5jcmVhdG9yKSwgU3lzdGVtUHJpb3JpdGllcy5yZXNvbHZlQ29sbGlzaW9ucyk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBBbmltYXRpb25TeXN0ZW0oKSwgU3lzdGVtUHJpb3JpdGllcy5hbmltYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IEh1ZFN5c3RlbSgpLCBTeXN0ZW1Qcmlvcml0aWVzLmFuaW1hdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgUmVuZGVyU3lzdGVtKHRoaXMuY29udGFpbmVyKSwgU3lzdGVtUHJpb3JpdGllcy5yZW5kZXIpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgQXVkaW9TeXN0ZW0oKSwgU3lzdGVtUHJpb3JpdGllcy5yZW5kZXIpO1xuICAgIHRoaXMuY3JlYXRvci5jcmVhdGVXYWl0Rm9yQ2xpY2soKTtcbiAgICB0aGlzLmNyZWF0b3IuY3JlYXRlR2FtZSgpO1xuICB9O1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhdHMsIHgsIHk7XG4gICAgaWYgKG5hdmlnYXRvci5pc0NvY29vbkpTKSB7XG4gICAgICBzdGF0cyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKHRoaXMuY29uZmlnLndpZHRoIC8gMikgLSA0MDtcbiAgICAgIHkgPSAwO1xuICAgICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgIHN0YXRzLnNldE1vZGUoMCk7XG4gICAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCJcIiArIHggKyBcInB4XCI7XG4gICAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiXCIgKyB5ICsgXCJweFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb21FbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy50aWNrUHJvdmlkZXIgPSBuZXcgYXNoLnRpY2suRnJhbWVUaWNrUHJvdmlkZXIoc3RhdHMpO1xuICAgIHRoaXMudGlja1Byb3ZpZGVyLmFkZCh0aGlzLmVuZ2luZS51cGRhdGUpO1xuICAgIHRoaXMudGlja1Byb3ZpZGVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgcmV0dXJuIEFzdGVyb2lkcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN0ZXJvaWRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5BbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIEFuaW1hdGlvbi5wcm90b3R5cGUuYW5pbWF0aW9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBBbmltYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gIH1cblxuICByZXR1cm4gQW5pbWF0aW9uO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb24uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkFzdGVyb2lkID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBc3Rlcm9pZCgpIHt9XG5cbiAgcmV0dXJuIEFzdGVyb2lkO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuQXVkaW8gPSAoZnVuY3Rpb24oKSB7XG4gIEF1ZGlvLnByb3RvdHlwZS50b1BsYXkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvKCkge1xuICAgIHRoaXMudG9QbGF5ID0gW107XG4gIH1cblxuICBBdWRpby5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgcmV0dXJuIHRoaXMudG9QbGF5LnB1c2goc291bmQpO1xuICB9O1xuXG4gIHJldHVybiBBdWRpbztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW8uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkJ1bGxldCA9IChmdW5jdGlvbigpIHtcbiAgQnVsbGV0LnByb3RvdHlwZS5saWZlUmVtYWluaW5nID0gMDtcblxuICBmdW5jdGlvbiBCdWxsZXQobGlmZVJlbWFpbmluZykge1xuICAgIHRoaXMubGlmZVJlbWFpbmluZyA9IGxpZmVSZW1haW5pbmc7XG4gIH1cblxuICByZXR1cm4gQnVsbGV0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgQ29sbGlzaW9uLnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIGZ1bmN0aW9uIENvbGxpc2lvbihyYWRpdXMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgfVxuXG4gIHJldHVybiBDb2xsaXNpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxpc2lvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuRGVhdGhUaHJvZXMgPSAoZnVuY3Rpb24oKSB7XG4gIERlYXRoVGhyb2VzLnByb3RvdHlwZS5jb3VudGRvd24gPSAwO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzKGR1cmF0aW9uKSB7XG4gICAgdGhpcy5jb3VudGRvd24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBEZWF0aFRocm9lcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVhdGhfdGhyb2VzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5EaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICBEaXNwbGF5LnByb3RvdHlwZS5ncmFwaGljID0gMDtcblxuICBmdW5jdGlvbiBEaXNwbGF5KGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICB9XG5cbiAgcmV0dXJuIERpc3BsYXk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2FtZVN0YXRlKCkge31cblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxldmVsID0gMDtcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmhpdHMgPSAwO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUucGxheWluZyA9IGZhbHNlO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUuc2V0Rm9yU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIEdhbWVTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQb2ludCwgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuUG9pbnQgPSBleGFtcGxlLmdyYXBoaWNzLlBvaW50O1xuXG5leGFtcGxlLmNvbXBvbmVudHMuR3VuID0gKGZ1bmN0aW9uKCkge1xuICBHdW4ucHJvdG90eXBlLnNob290aW5nID0gZmFsc2U7XG5cbiAgR3VuLnByb3RvdHlwZS5vZmZzZXRGcm9tUGFyZW50ID0gbnVsbDtcblxuICBHdW4ucHJvdG90eXBlLnRpbWVTaW5jZUxhc3RTaG90ID0gMDtcblxuICBHdW4ucHJvdG90eXBlLm9mZnNldEZyb21QYXJlbnQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEd1bihvZmZzZXRYLCBvZmZzZXRZLCBtaW5pbXVtU2hvdEludGVydmFsLCBidWxsZXRMaWZldGltZSkge1xuICAgIHRoaXMubWluaW11bVNob3RJbnRlcnZhbCA9IG1pbmltdW1TaG90SW50ZXJ2YWw7XG4gICAgdGhpcy5idWxsZXRMaWZldGltZSA9IGJ1bGxldExpZmV0aW1lO1xuICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldEZyb21QYXJlbnQgPSBudWxsO1xuICAgIHRoaXMudGltZVNpbmNlTGFzdFNob3QgPSAwO1xuICAgIHRoaXMub2Zmc2V0RnJvbVBhcmVudCA9IG5ldyBQb2ludChvZmZzZXRYLCBvZmZzZXRZKTtcbiAgfVxuXG4gIHJldHVybiBHdW47XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1bi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuR3VuQ29udHJvbHMgPSAoZnVuY3Rpb24oKSB7XG4gIEd1bkNvbnRyb2xzLnByb3RvdHlwZS50cmlnZ2VyID0gMDtcblxuICBmdW5jdGlvbiBHdW5Db250cm9scyh0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgfVxuXG4gIHJldHVybiBHdW5Db250cm9scztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VuX2NvbnRyb2xzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5IdWQgPSAoZnVuY3Rpb24oKSB7XG4gIEh1ZC5wcm90b3R5cGUudmlldyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gSHVkKHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG5cbiAgcmV0dXJuIEh1ZDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFBvaW50LCBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Qb2ludCA9IGV4YW1wbGUuZ3JhcGhpY3MuUG9pbnQ7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb24gPSAoZnVuY3Rpb24oKSB7XG4gIE1vdGlvbi5wcm90b3R5cGUudmVsb2NpdHkgPSBudWxsO1xuXG4gIE1vdGlvbi5wcm90b3R5cGUuYW5ndWxhclZlbG9jaXR5ID0gMDtcblxuICBNb3Rpb24ucHJvdG90eXBlLmRhbXBpbmcgPSAwO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSB7XG4gICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgPSBhbmd1bGFyVmVsb2NpdHk7XG4gICAgdGhpcy5kYW1waW5nID0gZGFtcGluZztcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFBvaW50KHZlbG9jaXR5WCwgdmVsb2NpdHlZKTtcbiAgfVxuXG4gIHJldHVybiBNb3Rpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuTW90aW9uQ29udHJvbHMgPSAoZnVuY3Rpb24oKSB7XG4gIE1vdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5sZWZ0ID0gMDtcblxuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUucmlnaHQgPSAwO1xuXG4gIE1vdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5hY2NlbGVyYXRlID0gMDtcblxuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUuYWNjZWxlcmF0aW9uUmF0ZSA9IDA7XG5cbiAgTW90aW9uQ29udHJvbHMucHJvdG90eXBlLnJvdGF0aW9uUmF0ZSA9IDA7XG5cbiAgZnVuY3Rpb24gTW90aW9uQ29udHJvbHMobGVmdCwgcmlnaHQsIGFjY2VsZXJhdGUsIGFjY2VsZXJhdGlvblJhdGUsIHJvdGF0aW9uUmF0ZSkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGFjY2VsZXJhdGU7XG4gICAgdGhpcy5hY2NlbGVyYXRpb25SYXRlID0gYWNjZWxlcmF0aW9uUmF0ZTtcbiAgICB0aGlzLnJvdGF0aW9uUmF0ZSA9IHJvdGF0aW9uUmF0ZTtcbiAgfVxuXG4gIHJldHVybiBNb3Rpb25Db250cm9scztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW90aW9uX2NvbnRyb2xzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5QaHlzaWNzID0gKGZ1bmN0aW9uKCkge1xuICBQaHlzaWNzLnByb3RvdHlwZS5ib2R5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBQaHlzaWNzKGJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG5cbiAgcmV0dXJuIFBoeXNpY3M7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBoeXNpY3MuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgUG9pbnQsIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gZXhhbXBsZS5ncmFwaGljcy5Qb2ludDtcblxuZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBQb3NpdGlvbi5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIFBvc2l0aW9uLnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gUG9zaXRpb24oeCwgeSwgcm90YXRpb24pIHtcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBQb3NpdGlvbjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9zaXRpb24uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLlNwYWNlc2hpcCA9IChmdW5jdGlvbigpIHtcbiAgU3BhY2VzaGlwLnByb3RvdHlwZS5mc20gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcChmc20pIHtcbiAgICB0aGlzLmZzbSA9IGZzbTtcbiAgfVxuXG4gIHJldHVybiBTcGFjZXNoaXA7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0ID0gKGZ1bmN0aW9uKCkge1xuICBXYWl0Rm9yU3RhcnQucHJvdG90eXBlLndhaXRGb3JTdGFydCA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0LnByb3RvdHlwZS5zdGFydEdhbWUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnQod2FpdEZvclN0YXJ0KSB7XG4gICAgdGhpcy53YWl0Rm9yU3RhcnQgPSB3YWl0Rm9yU3RhcnQ7XG4gICAgdGhpcy5zZXRTdGFydEdhbWUgPSBfX2JpbmQodGhpcy5zZXRTdGFydEdhbWUsIHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0LmNsaWNrLmFkZCh0aGlzLnNldFN0YXJ0R2FtZSk7XG4gIH1cblxuICBXYWl0Rm9yU3RhcnQucHJvdG90eXBlLnNldFN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhcnRHYW1lID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gV2FpdEZvclN0YXJ0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0X2Zvcl9zdGFydC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb24sIEFzdGVyb2lkLCBBc3Rlcm9pZERlYXRoVmlldywgQXN0ZXJvaWRWaWV3LCBBdWRpbywgQnVsbGV0LCBCdWxsZXRWaWV3LCBDb2xsaXNpb24sIERlYXRoVGhyb2VzLCBEaXNwbGF5LCBHYW1lU3RhdGUsIEd1biwgR3VuQ29udHJvbHMsIEh1ZCwgSHVkVmlldywgTW90aW9uLCBNb3Rpb25Db250cm9scywgUGh5c2ljcywgUG9zaXRpb24sIFNwYWNlc2hpcCwgU3BhY2VzaGlwRGVhdGhWaWV3LCBTcGFjZXNoaXBWaWV3LCBXYWl0Rm9yU3RhcnQsIFdhaXRGb3JTdGFydFZpZXcsIGFzaCwgYjJCb2R5LCBiMkJvZHlEZWYsIGIyQ2lyY2xlU2hhcGUsIGIyQ29udGFjdCwgYjJDb250YWN0RmlsdGVyLCBiMkNvbnRhY3RMaXN0ZW5lciwgYjJEZWJ1Z0RyYXcsIGIyRGlzdGFuY2VKb2ludERlZiwgYjJGaXh0dXJlLCBiMkZpeHR1cmVEZWYsIGIySm9pbnQsIGIyTWF0MjIsIGIyTWF0aCwgYjJQb2x5Z29uU2hhcGUsIGIyUmV2b2x1dGVKb2ludERlZiwgYjJUcmFuc2Zvcm0sIGIyVmVjMiwgYjJXb3JsZCwgZXhhbXBsZTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyk7XG5cblxuLypcbiAqIEFzdGVyb2lkIEdhbWUgQ29tcG9uZW50c1xuICovXG5cbkFuaW1hdGlvbiA9IGV4YW1wbGUuY29tcG9uZW50cy5BbmltYXRpb247XG5cbkFzdGVyb2lkID0gZXhhbXBsZS5jb21wb25lbnRzLkFzdGVyb2lkO1xuXG5BdWRpbyA9IGV4YW1wbGUuY29tcG9uZW50cy5BdWRpbztcblxuQnVsbGV0ID0gZXhhbXBsZS5jb21wb25lbnRzLkJ1bGxldDtcblxuQ29sbGlzaW9uID0gZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbjtcblxuRGVhdGhUaHJvZXMgPSBleGFtcGxlLmNvbXBvbmVudHMuRGVhdGhUaHJvZXM7XG5cbkRpc3BsYXkgPSBleGFtcGxlLmNvbXBvbmVudHMuRGlzcGxheTtcblxuR2FtZVN0YXRlID0gZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZTtcblxuR3VuID0gZXhhbXBsZS5jb21wb25lbnRzLkd1bjtcblxuR3VuQ29udHJvbHMgPSBleGFtcGxlLmNvbXBvbmVudHMuR3VuQ29udHJvbHM7XG5cbkh1ZCA9IGV4YW1wbGUuY29tcG9uZW50cy5IdWQ7XG5cbk1vdGlvbiA9IGV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb247XG5cbk1vdGlvbkNvbnRyb2xzID0gZXhhbXBsZS5jb21wb25lbnRzLk1vdGlvbkNvbnRyb2xzO1xuXG5QaHlzaWNzID0gZXhhbXBsZS5jb21wb25lbnRzLlBoeXNpY3M7XG5cblBvc2l0aW9uID0gZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uO1xuXG5TcGFjZXNoaXAgPSBleGFtcGxlLmNvbXBvbmVudHMuU3BhY2VzaGlwO1xuXG5XYWl0Rm9yU3RhcnQgPSBleGFtcGxlLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0O1xuXG5cbi8qXG4gKiBEcmF3YWJsZSBDb21wb25lbnRzXG4gKi9cblxuQXN0ZXJvaWREZWF0aFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLkFzdGVyb2lkRGVhdGhWaWV3O1xuXG5Bc3Rlcm9pZFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLkFzdGVyb2lkVmlldztcblxuQnVsbGV0VmlldyA9IGV4YW1wbGUuZ3JhcGhpY3MuQnVsbGV0VmlldztcblxuSHVkVmlldyA9IGV4YW1wbGUuZ3JhcGhpY3MuSHVkVmlldztcblxuU3BhY2VzaGlwRGVhdGhWaWV3ID0gZXhhbXBsZS5ncmFwaGljcy5TcGFjZXNoaXBEZWF0aFZpZXc7XG5cblNwYWNlc2hpcFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLlNwYWNlc2hpcFZpZXc7XG5cbldhaXRGb3JTdGFydFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLldhaXRGb3JTdGFydFZpZXc7XG5cblxuLypcbiAqIEJveDJEIHN1YnNldCBzdXBwb3J0ZWQgYnkgY29jb29uJ3MgSURUS19TUlZfQk9YMkQ6XG4gKi9cblxuYjJNYXQyMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyTWF0MjI7XG5cbmIyTWF0aCA9IEJveDJELkNvbW1vbi5NYXRoLmIyTWF0aDtcblxuYjJUcmFuc2Zvcm0gPSBCb3gyRC5Db21tb24uTWF0aC5iMlRyYW5zZm9ybTtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5iMkJvZHkgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHk7XG5cbmIyQm9keURlZiA9IEJveDJELkR5bmFtaWNzLmIyQm9keURlZjtcblxuYjJDb250YWN0ID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0O1xuXG5iMkNvbnRhY3RGaWx0ZXIgPSBCb3gyRC5EeW5hbWljcy5iMkNvbnRhY3RGaWx0ZXI7XG5cbmIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXI7XG5cbmIyRGVidWdEcmF3ID0gQm94MkQuRHluYW1pY3MuYjJEZWJ1Z0RyYXc7XG5cbmIyRml4dHVyZSA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZTtcblxuYjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmO1xuXG5iMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZDtcblxuYjJDaXJjbGVTaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJDaXJjbGVTaGFwZTtcblxuYjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlO1xuXG5iMkRpc3RhbmNlSm9pbnREZWYgPSBCb3gyRC5EeW5hbWljcy5Kb2ludHMuYjJEaXN0YW5jZUpvaW50RGVmO1xuXG5iMkpvaW50ID0gQm94MkQuRHluYW1pY3MuSm9pbnRzLmIySm9pbnQ7XG5cbmIyUmV2b2x1dGVKb2ludERlZiA9IEJveDJELkR5bmFtaWNzLkpvaW50cy5iMlJldm9sdXRlSm9pbnREZWY7XG5cbmV4YW1wbGUuRW50aXR5Q3JlYXRvciA9IChmdW5jdGlvbigpIHtcbiAgdmFyIEtFWV9MRUZULCBLRVlfUklHSFQsIEtFWV9VUCwgS0VZX1o7XG5cbiAgS0VZX0xFRlQgPSAzNztcblxuICBLRVlfVVAgPSAzODtcblxuICBLRVlfUklHSFQgPSAzOTtcblxuICBLRVlfWiA9IDkwO1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUud2FpdEVudGl0eSA9IG51bGw7XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuZ3JhcGhpY3MgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVudGl0eUNyZWF0b3IoZW5naW5lLCBncmFwaGljcywgd29ybGQpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLmdyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICB9XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuZGVzdHJveUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRoaXMuZW5naW5lLnJlbW92ZUVudGl0eShlbnRpdHkpO1xuICB9O1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2FtZUVudGl0eSwgaHVkO1xuICAgIGh1ZCA9IG5ldyBIdWRWaWV3KHRoaXMuZ3JhcGhpY3MpO1xuICAgIGdhbWVFbnRpdHkgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCdnYW1lJykuYWRkKG5ldyBHYW1lU3RhdGUoKSkuYWRkKG5ldyBIdWQoaHVkKSkuYWRkKG5ldyBEaXNwbGF5KGh1ZCkpLmFkZChuZXcgUG9zaXRpb24oMCwgMCwgMCwgMCkpO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShnYW1lRW50aXR5KTtcbiAgICByZXR1cm4gZ2FtZUVudGl0eTtcbiAgfTtcblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGVXYWl0Rm9yQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2FpdFZpZXc7XG4gICAgaWYgKCF0aGlzLndhaXRFbnRpdHkpIHtcbiAgICAgIHdhaXRWaWV3ID0gbmV3IFdhaXRGb3JTdGFydFZpZXcodGhpcy5ncmFwaGljcyk7XG4gICAgICB0aGlzLndhaXRFbnRpdHkgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCd3YWl0JykuYWRkKG5ldyBXYWl0Rm9yU3RhcnQod2FpdFZpZXcpKS5hZGQobmV3IERpc3BsYXkod2FpdFZpZXcpKS5hZGQobmV3IFBvc2l0aW9uKDAsIDAsIDAsIDApKTtcbiAgICB9XG4gICAgdGhpcy53YWl0RW50aXR5LmdldChXYWl0Rm9yU3RhcnQpLnN0YXJ0R2FtZSA9IGZhbHNlO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eSh0aGlzLndhaXRFbnRpdHkpO1xuICAgIHJldHVybiB0aGlzLndhaXRFbnRpdHk7XG4gIH07XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuY3JlYXRlQXN0ZXJvaWQgPSBmdW5jdGlvbihyYWRpdXMsIHgsIHkpIHtcbiAgICB2YXIgYW5ndWxhclZlbG9jaXR5LCBhc3Rlcm9pZCwgY29sbGlzaW9uUmFkaXVzLCBkYW1waW5nLCByb3RhdGlvbiwgdmVsb2NpdHlYLCB2ZWxvY2l0eVk7XG4gICAgdmVsb2NpdHlYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNCAqICg1MCAtIHJhZGl1cyk7XG4gICAgdmVsb2NpdHlZID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNCAqICg1MCAtIHJhZGl1cyk7XG4gICAgYW5ndWxhclZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgIGRhbXBpbmcgPSAwO1xuICAgIHJvdGF0aW9uID0gMDtcbiAgICBjb2xsaXNpb25SYWRpdXMgPSByYWRpdXM7XG4gICAgYXN0ZXJvaWQgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCkuYWRkKG5ldyBBc3Rlcm9pZCgpKS5hZGQobmV3IFBvc2l0aW9uKHgsIHksIHJvdGF0aW9uKSkuYWRkKG5ldyBBdWRpbygpKS5hZGQobmV3IE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSkuYWRkKG5ldyBDb2xsaXNpb24oY29sbGlzaW9uUmFkaXVzKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBBc3Rlcm9pZFZpZXcodGhpcy5ncmFwaGljcywgcmFkaXVzKSkpO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShhc3Rlcm9pZCk7XG4gICAgcmV0dXJuIGFzdGVyb2lkO1xuICB9O1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZVNwYWNlc2hpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbmd1bGFyVmVsb2NpdHksIGJvZHksIGJvZHlEZWYsIGNvbGxpc2lvblJhZGl1cywgZGFtcGluZywgZml4RGVmLCByb3RhdGlvbiwgc3BhY2VzaGlwLCB2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgdmVydGljZXMsIHgsIHk7XG4gICAgdmVsb2NpdHlYID0gMDtcbiAgICB2ZWxvY2l0eVkgPSAwO1xuICAgIGFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgZGFtcGluZyA9IDE1O1xuICAgIHggPSA0MDA7XG4gICAgeSA9IDMwMDtcbiAgICByb3RhdGlvbiA9IDE7XG4gICAgY29sbGlzaW9uUmFkaXVzID0gNjtcbiAgICBib2R5RGVmID0gbmV3IGIyQm9keURlZigpO1xuICAgIGJvZHlEZWYudHlwZSA9IGIyQm9keS5iMl9keW5hbWljQm9keTtcbiAgICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgIGJvZHlEZWYucG9zaXRpb24ueCA9IHg7XG4gICAgYm9keURlZi5wb3NpdGlvbi55ID0geTtcbiAgICBib2R5RGVmLmxpbmVhclZlbG9jaXR5LlNldCh2ZWxvY2l0eVgsIHZlbG9jaXR5WSk7XG4gICAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBhbmd1bGFyVmVsb2NpdHk7XG4gICAgdmVydGljZXMgPSBbbmV3IGIyVmVjMiguNDUsIDApLCBuZXcgYjJWZWMyKC0uMjUsIC4yNSksIG5ldyBiMlZlYzIoLS4yNSwgLS4yNSldO1xuICAgIGZpeERlZiA9IG5ldyBiMkZpeHR1cmVEZWYoKTtcbiAgICBmaXhEZWYuZGVuc2l0eSA9IDEuMDtcbiAgICBmaXhEZWYuZnJpY3Rpb24gPSAwLjU7XG4gICAgZml4RGVmLnJlc3RpdHV0aW9uID0gMC4yO1xuICAgIGZpeERlZi5zaGFwZSA9IG5ldyBiMlBvbHlnb25TaGFwZSgpO1xuICAgIGZpeERlZi5zaGFwZS5TZXRBc0FycmF5KHZlcnRpY2VzLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgIGJvZHkgPSB0aGlzLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZik7XG4gICAgYm9keS5DcmVhdGVGaXh0dXJlKGZpeERlZik7XG4gICAgc3BhY2VzaGlwID0gbmV3IGFzaC5jb3JlLkVudGl0eSgpLmFkZChuZXcgU3BhY2VzaGlwKCkpLmFkZChuZXcgUGh5c2ljcyhib2R5KSkuYWRkKG5ldyBQb3NpdGlvbih4LCB5LCByb3RhdGlvbikpLmFkZChuZXcgQXVkaW8oKSkuYWRkKG5ldyBNb3Rpb24odmVsb2NpdHlYLCB2ZWxvY2l0eVksIGFuZ3VsYXJWZWxvY2l0eSwgZGFtcGluZykpLmFkZChuZXcgTW90aW9uQ29udHJvbHMoS0VZX0xFRlQsIEtFWV9SSUdIVCwgS0VZX1VQLCAxMDAsIDMpKS5hZGQobmV3IEd1big4LCAwLCAwLjMsIDIpKS5hZGQobmV3IEd1bkNvbnRyb2xzKEtFWV9aKSkuYWRkKG5ldyBDb2xsaXNpb24oY29sbGlzaW9uUmFkaXVzKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBTcGFjZXNoaXBWaWV3KHRoaXMuZ3JhcGhpY3MpKSk7XG4gICAgYm9keS5TZXRVc2VyRGF0YShzcGFjZXNoaXApO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShzcGFjZXNoaXApO1xuICAgIHJldHVybiBzcGFjZXNoaXA7XG4gIH07XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuY3JlYXRlVXNlckJ1bGxldCA9IGZ1bmN0aW9uKGd1biwgcGFyZW50UG9zaXRpb24pIHtcbiAgICB2YXIgYW5ndWxhclZlbG9jaXR5LCBidWxsZXQsIGNvbGxpc2lvblJhZGl1cywgY29zLCBkYW1waW5nLCByb3RhdGlvbiwgc2luLCB2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgeCwgeTtcbiAgICBjb3MgPSBNYXRoLmNvcyhwYXJlbnRQb3NpdGlvbi5yb3RhdGlvbik7XG4gICAgc2luID0gTWF0aC5zaW4ocGFyZW50UG9zaXRpb24ucm90YXRpb24pO1xuICAgIHZlbG9jaXR5WCA9IGNvcyAqIDE1MDtcbiAgICB2ZWxvY2l0eVkgPSBzaW4gKiAxNTA7XG4gICAgYW5ndWxhclZlbG9jaXR5ID0gMDtcbiAgICBkYW1waW5nID0gMDtcbiAgICB4ID0gY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueCAtIHNpbiAqIGd1bi5vZmZzZXRGcm9tUGFyZW50LnkgKyBwYXJlbnRQb3NpdGlvbi5wb3NpdGlvbi54O1xuICAgIHkgPSBzaW4gKiBndW4ub2Zmc2V0RnJvbVBhcmVudC54ICsgY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueSArIHBhcmVudFBvc2l0aW9uLnBvc2l0aW9uLnk7XG4gICAgcm90YXRpb24gPSAwO1xuICAgIGNvbGxpc2lvblJhZGl1cyA9IDA7XG4gICAgYnVsbGV0ID0gbmV3IGFzaC5jb3JlLkVudGl0eSgpLmFkZChuZXcgQnVsbGV0KGd1bi5idWxsZXRMaWZldGltZSkpLmFkZChuZXcgUG9zaXRpb24oeCwgeSwgcm90YXRpb24pKS5hZGQobmV3IENvbGxpc2lvbihjb2xsaXNpb25SYWRpdXMpKS5hZGQobmV3IE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBCdWxsZXRWaWV3KHRoaXMuZ3JhcGhpY3MpKSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KGJ1bGxldCk7XG4gICAgcmV0dXJuIGJ1bGxldDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5Q3JlYXRvcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X2NyZWF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5HYW1lQ29uZmlnID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHYW1lQ29uZmlnKCkge31cblxuICBHYW1lQ29uZmlnLnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgR2FtZUNvbmZpZy5wcm90b3R5cGUuaGVpZ2h0ID0gMDtcblxuICByZXR1cm4gR2FtZUNvbmZpZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9jb25maWcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5Bc3Rlcm9pZERlYXRoVmlldyA9IChmdW5jdGlvbigpIHtcbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUud2lkdGggPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLmdyYXBoaWMgPSBudWxsO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5wb2ludHMgPSBudWxsO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5jb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gQXN0ZXJvaWREZWF0aFZpZXcoZ3JhcGhpYywgcmFkaXVzKSB7XG4gICAgdmFyIGFuZ2xlLCBsZW5ndGgsIHBvc1gsIHBvc1k7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnJhZGl1cztcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICB3aGlsZSAoYW5nbGUgPCBNYXRoLlBJICogMikge1xuICAgICAgbGVuZ3RoID0gKDAuNzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNSkgKiB0aGlzLnJhZGl1cztcbiAgICAgIHBvc1ggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gICAgICBwb3NZID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvc1gsXG4gICAgICAgIHk6IHBvc1lcbiAgICAgIH0pO1xuICAgICAgYW5nbGUgKz0gTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICB9XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmFwaGljLCBpO1xuICAgIGdyYXBoaWMgPSB0aGlzLmdyYXBoaWM7XG4gICAgZ3JhcGhpYy5zYXZlKCk7XG4gICAgZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICBncmFwaGljLnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLm1vdmVUbyh0aGlzLnJhZGl1cywgMCk7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGdyYXBoaWMubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgKytpO1xuICAgIH1cbiAgICBncmFwaGljLmxpbmVUbyh0aGlzLnJhZGl1cywgMCk7XG4gICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIEFzdGVyb2lkRGVhdGhWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZF9kZWF0aF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuZ3JhcGhpY3MuQXN0ZXJvaWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucG9pbnRzID0gbnVsbDtcblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBBc3Rlcm9pZFZpZXcoZ3JhcGhpYywgcmFkaXVzKSB7XG4gICAgdmFyIGFuZ2xlLCBsZW5ndGgsIHBvc1gsIHBvc1k7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnJhZGl1cztcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICB3aGlsZSAoYW5nbGUgPCBNYXRoLlBJICogMikge1xuICAgICAgbGVuZ3RoID0gKDAuNzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNSkgKiB0aGlzLnJhZGl1cztcbiAgICAgIHBvc1ggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gICAgICBwb3NZID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvc1gsXG4gICAgICAgIHk6IHBvc1lcbiAgICAgIH0pO1xuICAgICAgYW5nbGUgKz0gTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICB9XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYywgaTtcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBncmFwaGljLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICsraTtcbiAgICB9XG4gICAgZ3JhcGhpYy5saW5lVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBBc3Rlcm9pZFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzdGVyb2lkX3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5CdWxsZXRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBCdWxsZXRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gQnVsbGV0VmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIEJ1bGxldFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLmFyYyh0aGlzLngsIHRoaXMueSwgMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gQnVsbGV0VmlldztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVsbGV0X3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5IdWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBIdWRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2NvcmUgPSAwO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBIdWRWaWV3LnByb3RvdHlwZS5kcmF3U2NvcmUgPSBudWxsO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXdMaXZlcyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gSHVkVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnNldFNjb3JlID0gX19iaW5kKHRoaXMuc2V0U2NvcmUsIHRoaXMpO1xuICAgIHRoaXMuc2V0TGl2ZXMgPSBfX2JpbmQodGhpcy5zZXRMaXZlcywgdGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gX19iaW5kKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgdGhpcy5kcmF3U2NvcmUgPSB0aGlzLmNyZWF0ZVNjb3JlO1xuICAgIHRoaXMuZHJhd0xpdmVzID0gdGhpcy5jcmVhdGVMaXZlcztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2V0TGl2ZXMgPSBmdW5jdGlvbihsaXZlcykge1xuICAgIGlmICh0aGlzLmxpdmVzICE9PSBsaXZlcykge1xuICAgICAgY29uc29sZS5sb2coXCJzZXRMaXZlcyBcIiArIGxpdmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGl2ZXMgPSBsaXZlcztcbiAgfTtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5zZXRTY29yZSA9IGZ1bmN0aW9uKHNjb3JlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgfTtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5jcmVhdGVMaXZlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsLCBzLCB4LCB5O1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5mb250ID0gJ2JvbGQgMThweCBIZWx2ZXRpY2EnO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgdGhpcy5ncmFwaGljLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHMgPSBcIkxJVkVTOiBcIiArIHRoaXMubGl2ZXM7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gbC53aWR0aDtcbiAgICB5ID0gMjA7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxUZXh0KHMsIHgsIHkpO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsKCk7XG4gICAgdGhpcy5ncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5jcmVhdGVTY29yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsLCBzLCB4LCB5O1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5mb250ID0gJ2JvbGQgMThweCBIZWx2ZXRpY2EnO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgdGhpcy5ncmFwaGljLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHMgPSBcIlNDT1JFOiBcIiArIHRoaXMuc2NvcmU7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gKHdpbmRvdy53aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSAtIGwud2lkdGg7XG4gICAgeSA9IDIwO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsVGV4dChzLCB4LCB5KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIEh1ZFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh1ZF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5leGFtcGxlLmdyYXBoaWNzLlBvaW50ID0gKGZ1bmN0aW9uKCkge1xuICBQb2ludC5wcm90b3R5cGUueCA9IDA7XG5cbiAgUG9pbnQucHJvdG90eXBlLnkgPSAwO1xuXG4gIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4ICE9IG51bGwgPyB4IDogMDtcbiAgICB0aGlzLnkgPSB5ICE9IG51bGwgPyB5IDogMDtcbiAgfVxuXG4gIFBvaW50LnByb3RvdHlwZS5kaXN0YW5jZVNxdWFyZWRUbyA9IGZ1bmN0aW9uKHRhcmdldFBvaW50KSB7XG4gICAgdmFyIGR4LCBkeTtcbiAgICBkeCA9IHRoaXMueCAtIHRhcmdldFBvaW50Lng7XG4gICAgZHkgPSB0aGlzLnkgLSB0YXJnZXRQb2ludC55O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgfTtcblxuICBQb2ludC5wcm90b3R5cGUuZGlzdGFuY2VUbyA9IGZ1bmN0aW9uKHRhcmdldFBvaW50KSB7XG4gICAgdmFyIGR4LCBkeTtcbiAgICBkeCA9IHRoaXMueCAtIHRhcmdldFBvaW50Lng7XG4gICAgZHkgPSB0aGlzLnkgLSB0YXJnZXRQb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9O1xuXG4gIHJldHVybiBQb2ludDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9pbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5TcGFjZXNoaXBEZWF0aFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueCA9IDA7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLndpZHRoID0gMjA7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAyMDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLnJvdGF0aW9uID0gMDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLmdyYXBoaWMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcERlYXRoVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmFwaGljO1xuICAgIGdyYXBoaWMgPSB0aGlzLmdyYXBoaWM7XG4gICAgZ3JhcGhpYy5zYXZlKCk7XG4gICAgZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICBncmFwaGljLnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLm1vdmVUbygxMCwgMCk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTcsIDcpO1xuICAgIGdyYXBoaWMubGluZVRvKC00LCAwKTtcbiAgICBncmFwaGljLmxpbmVUbygtNywgLTcpO1xuICAgIGdyYXBoaWMubGluZVRvKDEwLCAwKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gU3BhY2VzaGlwRGVhdGhWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFjZXNoaXBfZGVhdGhfdmlldy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmdyYXBoaWNzLlNwYWNlc2hpcFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLnkgPSAwO1xuXG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLndpZHRoID0gMjA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gMjA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLmdyYXBoaWMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcFZpZXcoZ3JhcGhpYykge1xuICAgIHRoaXMuZ3JhcGhpYyA9IGdyYXBoaWM7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBTcGFjZXNoaXBWaWV3LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdyYXBoaWM7XG4gICAgZ3JhcGhpYyA9IHRoaXMuZ3JhcGhpYztcbiAgICBncmFwaGljLnNhdmUoKTtcbiAgICBncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIGdyYXBoaWMudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBncmFwaGljLnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICBncmFwaGljLmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgIGdyYXBoaWMubW92ZVRvKDEwLCAwKTtcbiAgICBncmFwaGljLmxpbmVUbygtNywgNyk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTQsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKC03LCAtNyk7XG4gICAgZ3JhcGhpYy5saW5lVG8oMTAsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBTcGFjZXNoaXBWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFjZXNoaXBfdmlldy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBTaWduYWwwLCBhc2gsIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwwID0gYXNoLnNpZ25hbHMuU2lnbmFsMDtcblxuZXhhbXBsZS5ncmFwaGljcy5XYWl0Rm9yU3RhcnRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLmNsaWNrVG9TdGFydCA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuaW5zdHJ1Y3Rpb25zID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5jbGljayA9IG51bGw7XG5cbiAgZnVuY3Rpb24gV2FpdEZvclN0YXJ0VmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmNsaWNrID0gbmV3IFNpZ25hbDAoKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5jcmVhdGVHYW1lT3ZlcjtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHRoaXMuY3JlYXRlSW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuY2xpY2tUb1N0YXJ0ID0gdGhpcy5jcmVhdGVDbGlja1RvU3RhcnQ7XG4gICAgdGhpcy5ncmFwaGljLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jbGljay5kaXNwYXRjaCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5jcmVhdGVHYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsLCBzLCB4LCB5O1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5mb250ID0gJ2JvbGQgMzJweCBIZWx2ZXRpY2EnO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgcyA9ICdBU1RFUk9JRFMnO1xuICAgIGwgPSB0aGlzLmdyYXBoaWMubWVhc3VyZVRleHQocyk7XG4gICAgeCA9IE1hdGguZmxvb3IoKCh3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSAtIGwud2lkdGgpIC8gMik7XG4gICAgeSA9IDE3NTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFRleHQocywgeCwgeSk7XG4gICAgdGhpcy5ncmFwaGljLmZpbGwoKTtcbiAgICB0aGlzLmdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLmNyZWF0ZUNsaWNrVG9TdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsLCBzLCB4LCB5O1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5mb250ID0gJ2JvbGQgMThweCBIZWx2ZXRpY2EnO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgcyA9ICdDTElDSyBUTyBTVEFSVCc7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gTWF0aC5mbG9vcigoKHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pIC0gbC53aWR0aCkgLyAyKTtcbiAgICB5ID0gMjI1O1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsVGV4dChzLCB4LCB5KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY3JlYXRlSW5zdHJ1Y3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGwsIHMsIHgsIHk7XG4gICAgdGhpcy5ncmFwaGljLnNhdmUoKTtcbiAgICB0aGlzLmdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5ncmFwaGljLmZvbnQgPSAnYm9sZCAxNHB4IEhlbHZldGljYSc7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICBzID0gJ0NUUkwtWiB0byBGaXJlICB+ICBBcnJvdyBLZXlzIHRvIE1vdmUnO1xuICAgIGwgPSB0aGlzLmdyYXBoaWMubWVhc3VyZVRleHQocyk7XG4gICAgeCA9IDEwO1xuICAgIHkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAtIDIwO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsVGV4dChzLCB4LCB5KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB0aGlzLmNsaWNrVG9TdGFydCgpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zKCk7XG4gIH07XG5cbiAgcmV0dXJuIFdhaXRGb3JTdGFydFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXRfZm9yX3N0YXJ0X3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5pbnB1dC5LZXlQb2xsID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZGlzcGxheU9iaiwgc3RhdGVzO1xuXG4gIHN0YXRlcyA9IG51bGw7XG5cbiAgZGlzcGxheU9iaiA9IG51bGw7XG5cbiAgZnVuY3Rpb24gS2V5UG9sbChkaXNwbGF5T2JqKSB7XG4gICAgdGhpcy5kaXNwbGF5T2JqID0gZGlzcGxheU9iajtcbiAgICB0aGlzLmlzVXAgPSBfX2JpbmQodGhpcy5pc1VwLCB0aGlzKTtcbiAgICB0aGlzLmlzRG93biA9IF9fYmluZCh0aGlzLmlzRG93biwgdGhpcyk7XG4gICAgdGhpcy5rZXlVcExpc3RlbmVyID0gX19iaW5kKHRoaXMua2V5VXBMaXN0ZW5lciwgdGhpcyk7XG4gICAgdGhpcy5rZXlEb3duTGlzdGVuZXIgPSBfX2JpbmQodGhpcy5rZXlEb3duTGlzdGVuZXIsIHRoaXMpO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5kaXNwbGF5T2JqLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkxpc3RlbmVyKTtcbiAgICB0aGlzLmRpc3BsYXlPYmouYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBMaXN0ZW5lcik7XG4gIH1cblxuICBLZXlQb2xsLnByb3RvdHlwZS5rZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuc3RhdGVzW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcbiAgfTtcblxuICBLZXlQb2xsLnByb3RvdHlwZS5rZXlVcExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgIHRoaXMuc3RhdGVzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIEtleVBvbGwucHJvdG90eXBlLmlzRG93biA9IGZ1bmN0aW9uKGtleUNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXNba2V5Q29kZV07XG4gIH07XG5cbiAgS2V5UG9sbC5wcm90b3R5cGUuaXNVcCA9IGZ1bmN0aW9uKGtleUNvZGUpIHtcbiAgICByZXR1cm4gIXRoaXMuc3RhdGVzW2tleUNvZGVdO1xuICB9O1xuXG4gIHJldHVybiBLZXlQb2xsO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXlfcG9sbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLk1haW4gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1haW4oKSB7XG4gICAgdmFyIGFzdGVyb2lkcywgY2FudmFzO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzKCk7XG4gICAgYXN0ZXJvaWRzID0gbmV3IGV4YW1wbGUuQXN0ZXJvaWRzKGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGFzdGVyb2lkcy5zdGFydCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE1haW4ucHJvdG90eXBlLmNhbnZhcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYW52YXM7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYXZpZ2F0b3IuaXNDb2Nvb25KUyA/ICdzY3JlZW5jYW52YXMnIDogJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMDAwMCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH07XG5cbiAgcmV0dXJuIE1haW47XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLkFuaW1hdGlvbk5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBbmltYXRpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGlvbk5vZGUoKSB7XG4gICAgcmV0dXJuIEFuaW1hdGlvbk5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBBbmltYXRpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYW5pbWF0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuQW5pbWF0aW9uXG4gIH07XG5cbiAgQW5pbWF0aW9uTm9kZS5wcm90b3R5cGUuYW5pbWF0aW9uID0gbnVsbDtcblxuICByZXR1cm4gQW5pbWF0aW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5Bc3Rlcm9pZENvbGxpc2lvbk5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBc3Rlcm9pZENvbGxpc2lvbk5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQXN0ZXJvaWRDb2xsaXNpb25Ob2RlKCkge1xuICAgIHJldHVybiBBc3Rlcm9pZENvbGxpc2lvbk5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBhc3Rlcm9pZDogZXhhbXBsZS5jb21wb25lbnRzLkFzdGVyb2lkLFxuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgY29sbGlzaW9uOiBleGFtcGxlLmNvbXBvbmVudHMuQ29sbGlzaW9uLFxuICAgIGF1ZGlvOiBleGFtcGxlLmNvbXBvbmVudHMuQXVkaW9cbiAgfTtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmFzdGVyb2lkID0gbnVsbDtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmNvbGxpc2lvbiA9IG51bGw7XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIEFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzdGVyb2lkX2NvbGxpc2lvbl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5BdWRpb05vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBdWRpb05vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQXVkaW9Ob2RlKCkge1xuICAgIHJldHVybiBBdWRpb05vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBBdWRpb05vZGUuY29tcG9uZW50cyA9IHtcbiAgICBhdWRpbzogZXhhbXBsZS5jb21wb25lbnRzLkF1ZGlvXG4gIH07XG5cbiAgQXVkaW9Ob2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIEF1ZGlvTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1ZGlvX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLkJ1bGxldEFnZU5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhCdWxsZXRBZ2VOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEJ1bGxldEFnZU5vZGUoKSB7XG4gICAgcmV0dXJuIEJ1bGxldEFnZU5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBCdWxsZXRBZ2VOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYnVsbGV0OiBleGFtcGxlLmNvbXBvbmVudHMuQnVsbGV0XG4gIH07XG5cbiAgQnVsbGV0QWdlTm9kZS5wcm90b3R5cGUuYnVsbGV0ID0gbnVsbDtcblxuICByZXR1cm4gQnVsbGV0QWdlTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJ1bGxldF9hZ2Vfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuQnVsbGV0Q29sbGlzaW9uTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEJ1bGxldENvbGxpc2lvbk5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQnVsbGV0Q29sbGlzaW9uTm9kZSgpIHtcbiAgICByZXR1cm4gQnVsbGV0Q29sbGlzaW9uTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEJ1bGxldENvbGxpc2lvbk5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBidWxsZXQ6IGV4YW1wbGUuY29tcG9uZW50cy5CdWxsZXQsXG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBjb2xsaXNpb246IGV4YW1wbGUuY29tcG9uZW50cy5Db2xsaXNpb25cbiAgfTtcblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5idWxsZXQgPSBudWxsO1xuXG4gIEJ1bGxldENvbGxpc2lvbk5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5jb2xsaXNpb24gPSBudWxsO1xuXG4gIHJldHVybiBCdWxsZXRDb2xsaXNpb25Ob2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVsbGV0X2NvbGxpc2lvbl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5EZWF0aFRocm9lc05vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhEZWF0aFRocm9lc05vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gRGVhdGhUaHJvZXNOb2RlKCkge1xuICAgIHJldHVybiBEZWF0aFRocm9lc05vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBEZWF0aFRocm9lc05vZGUuY29tcG9uZW50cyA9IHtcbiAgICBkZWF0aDogZXhhbXBsZS5jb21wb25lbnRzLkRlYXRoVGhyb2VzXG4gIH07XG5cbiAgRGVhdGhUaHJvZXNOb2RlLnByb3RvdHlwZS5kZWF0aCA9IG51bGw7XG5cbiAgcmV0dXJuIERlYXRoVGhyb2VzTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYXRoX3Rocm9lc19ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5HYW1lTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEdhbWVOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEdhbWVOb2RlKCkge1xuICAgIHJldHVybiBHYW1lTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEdhbWVOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgc3RhdGU6IGV4YW1wbGUuY29tcG9uZW50cy5HYW1lU3RhdGVcbiAgfTtcblxuICBHYW1lTm9kZS5wcm90b3R5cGUuc3RhdGUgPSBudWxsO1xuXG4gIHJldHVybiBHYW1lTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdhbWVfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuR3VuQ29udHJvbE5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhHdW5Db250cm9sTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBHdW5Db250cm9sTm9kZSgpIHtcbiAgICByZXR1cm4gR3VuQ29udHJvbE5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBHdW5Db250cm9sTm9kZS5jb21wb25lbnRzID0ge1xuICAgIGF1ZGlvOiBleGFtcGxlLmNvbXBvbmVudHMuQXVkaW8sXG4gICAgY29udHJvbDogZXhhbXBsZS5jb21wb25lbnRzLkd1bkNvbnRyb2xzLFxuICAgIGd1bjogZXhhbXBsZS5jb21wb25lbnRzLkd1bixcbiAgICBwb3NpdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uXG4gIH07XG5cbiAgR3VuQ29udHJvbE5vZGUucHJvdG90eXBlLmNvbnRyb2wgPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5ndW4gPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgR3VuQ29udHJvbE5vZGUucHJvdG90eXBlLmF1ZGlvID0gbnVsbDtcblxuICByZXR1cm4gR3VuQ29udHJvbE5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndW5fY29udHJvbF9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5IdWROb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoSHVkTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBIdWROb2RlKCkge1xuICAgIHJldHVybiBIdWROb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgSHVkTm9kZS5jb21wb25lbnRzID0ge1xuICAgIHN0YXRlOiBleGFtcGxlLmNvbXBvbmVudHMuR2FtZVN0YXRlLFxuICAgIGh1ZDogZXhhbXBsZS5jb21wb25lbnRzLkh1ZFxuICB9O1xuXG4gIEh1ZE5vZGUucHJvdG90eXBlLnN0YXRlID0gbnVsbDtcblxuICBIdWROb2RlLnByb3RvdHlwZS5odWQgPSBudWxsO1xuXG4gIHJldHVybiBIdWROb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLk1vdGlvbkNvbnRyb2xOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTW90aW9uQ29udHJvbE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gTW90aW9uQ29udHJvbE5vZGUoKSB7XG4gICAgcmV0dXJuIE1vdGlvbkNvbnRyb2xOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgTW90aW9uQ29udHJvbE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBjb250cm9sOiBleGFtcGxlLmNvbXBvbmVudHMuTW90aW9uQ29udHJvbHMsXG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBtb3Rpb246IGV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb24sXG4gICAgcGh5c2ljczogZXhhbXBsZS5jb21wb25lbnRzLlBoeXNpY3NcbiAgfTtcblxuICBNb3Rpb25Db250cm9sTm9kZS5wcm90b3R5cGUuY29udHJvbCA9IG51bGw7XG5cbiAgTW90aW9uQ29udHJvbE5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBNb3Rpb25Db250cm9sTm9kZS5wcm90b3R5cGUubW90aW9uID0gbnVsbDtcblxuICBNb3Rpb25Db250cm9sTm9kZS5wcm90b3R5cGUucGh5c2ljcyA9IG51bGw7XG5cbiAgcmV0dXJuIE1vdGlvbkNvbnRyb2xOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW90aW9uX2NvbnRyb2xfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuTW92ZW1lbnROb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTW92ZW1lbnROb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIE1vdmVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gTW92ZW1lbnROb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgTW92ZW1lbnROb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBtb3Rpb246IGV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb25cbiAgfTtcblxuICBNb3ZlbWVudE5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBNb3ZlbWVudE5vZGUucHJvdG90eXBlLm1vdGlvbiA9IG51bGw7XG5cbiAgcmV0dXJuIE1vdmVtZW50Tm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVtZW50X25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLlBoeXNpY3NOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoUGh5c2ljc05vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljc05vZGUoKSB7XG4gICAgcmV0dXJuIFBoeXNpY3NOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgUGh5c2ljc05vZGUuY29tcG9uZW50cyA9IHtcbiAgICBwaHlzaWNzOiBleGFtcGxlLmNvbXBvbmVudHMuUGh5c2ljcyxcbiAgICBwb3NpdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uLFxuICAgIG1vdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLk1vdGlvblxuICB9O1xuXG4gIFBoeXNpY3NOb2RlLnByb3RvdHlwZS5waHlzaWNzID0gbnVsbDtcblxuICBQaHlzaWNzTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIFBoeXNpY3NOb2RlLnByb3RvdHlwZS5tb3Rpb24gPSBudWxsO1xuXG4gIHJldHVybiBQaHlzaWNzTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBoeXNpY3Nfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuUmVuZGVyTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFJlbmRlck5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gUmVuZGVyTm9kZSgpIHtcbiAgICByZXR1cm4gUmVuZGVyTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFJlbmRlck5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBwb3NpdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uLFxuICAgIGRpc3BsYXk6IGV4YW1wbGUuY29tcG9uZW50cy5EaXNwbGF5XG4gIH07XG5cbiAgUmVuZGVyTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIFJlbmRlck5vZGUucHJvdG90eXBlLmRpc3BsYXkgPSBudWxsO1xuXG4gIHJldHVybiBSZW5kZXJOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLlNwYWNlc2hpcENvbGxpc2lvbk5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUoKSB7XG4gICAgcmV0dXJuIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgc3BhY2VzaGlwOiBleGFtcGxlLmNvbXBvbmVudHMuU3BhY2VzaGlwLFxuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgY29sbGlzaW9uOiBleGFtcGxlLmNvbXBvbmVudHMuQ29sbGlzaW9uLFxuICAgIGF1ZGlvOiBleGFtcGxlLmNvbXBvbmVudHMuQXVkaW9cbiAgfTtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5zcGFjZXNoaXAgPSAwO1xuXG4gIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gMDtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5jb2xsaXNpb24gPSBudWxsO1xuXG4gIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmF1ZGlvID0gbnVsbDtcblxuICByZXR1cm4gU3BhY2VzaGlwQ29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9jb2xsaXNpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuU3BhY2VzaGlwTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNwYWNlc2hpcE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU3BhY2VzaGlwTm9kZSgpIHtcbiAgICByZXR1cm4gU3BhY2VzaGlwTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNwYWNlc2hpcE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBzcGFjZXNoaXA6IGV4YW1wbGUuY29tcG9uZW50cy5TcGFjZXNoaXAsXG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvblxuICB9O1xuXG4gIFNwYWNlc2hpcE5vZGUucHJvdG90eXBlLnNwYWNlc2hpcCA9IDA7XG5cbiAgU3BhY2VzaGlwTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSAwO1xuXG4gIHJldHVybiBTcGFjZXNoaXBOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3BhY2VzaGlwX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLldhaXRGb3JTdGFydE5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhXYWl0Rm9yU3RhcnROb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFdhaXRGb3JTdGFydE5vZGUoKSB7XG4gICAgcmV0dXJuIFdhaXRGb3JTdGFydE5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBXYWl0Rm9yU3RhcnROb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgd2FpdDogZXhhbXBsZS5jb21wb25lbnRzLldhaXRGb3JTdGFydFxuICB9O1xuXG4gIFdhaXRGb3JTdGFydE5vZGUucHJvdG90eXBlLndhaXQgPSBudWxsO1xuXG4gIHJldHVybiBXYWl0Rm9yU3RhcnROb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdF9mb3Jfc3RhcnRfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb25Ob2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkFuaW1hdGlvbk5vZGUgPSBleGFtcGxlLm5vZGVzLkFuaW1hdGlvbk5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5BbmltYXRpb25TeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBbmltYXRpb25TeXN0ZW0sIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQW5pbWF0aW9uU3lzdGVtKCkge1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEFuaW1hdGlvblN5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBBbmltYXRpb25Ob2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgQW5pbWF0aW9uU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIG5vZGUuYW5pbWF0aW9uLmFuaW1hdGlvbi5hbmltYXRlKHRpbWUpO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb25TeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5pbWF0aW9uX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBdWRpb05vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuQXVkaW9Ob2RlID0gZXhhbXBsZS5ub2Rlcy5BdWRpb05vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5BdWRpb1N5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEF1ZGlvU3lzdGVtLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvU3lzdGVtKCkge1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEF1ZGlvU3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIEF1ZGlvTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEF1ZGlvU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHZhciBlYWNoLCBzb3VuZCwgdHlwZSwgX3JlZjtcbiAgICBfcmVmID0gbm9kZS5hdWRpby50b1BsYXk7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIHR5cGUgPSBfcmVmW2VhY2hdO1xuICAgICAgc291bmQgPSBuZXcgdHlwZSgpO1xuICAgICAgc291bmQucGxheSgwLCAxKTtcbiAgICB9XG4gICAgbm9kZS5hdWRpby50b1BsYXkubGVuZ3RoID0gMDtcbiAgfTtcblxuICByZXR1cm4gQXVkaW9TeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW9fc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEJ1bGxldEFnZU5vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuQnVsbGV0QWdlTm9kZSA9IGV4YW1wbGUubm9kZXMuQnVsbGV0QWdlTm9kZTtcblxuZXhhbXBsZS5zeXN0ZW1zLkJ1bGxldEFnZVN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEJ1bGxldEFnZVN5c3RlbSwgX3N1cGVyKTtcblxuICBCdWxsZXRBZ2VTeXN0ZW0ucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEJ1bGxldEFnZVN5c3RlbShjcmVhdG9yKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBCdWxsZXRBZ2VTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgQnVsbGV0QWdlTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEJ1bGxldEFnZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICB2YXIgYnVsbGV0O1xuICAgIGJ1bGxldCA9IG5vZGUuYnVsbGV0O1xuICAgIGJ1bGxldC5saWZlUmVtYWluaW5nIC09IHRpbWU7XG4gICAgaWYgKGJ1bGxldC5saWZlUmVtYWluaW5nIDw9IDApIHtcbiAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KG5vZGUuZW50aXR5KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEJ1bGxldEFnZVN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXRfYWdlX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBc3Rlcm9pZENvbGxpc2lvbk5vZGUsIEJ1bGxldENvbGxpc2lvbk5vZGUsIEdhbWVOb2RlLCBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblNwYWNlc2hpcENvbGxpc2lvbk5vZGUgPSBleGFtcGxlLm5vZGVzLlNwYWNlc2hpcENvbGxpc2lvbk5vZGU7XG5cbkFzdGVyb2lkQ29sbGlzaW9uTm9kZSA9IGV4YW1wbGUubm9kZXMuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlO1xuXG5CdWxsZXRDb2xsaXNpb25Ob2RlID0gZXhhbXBsZS5ub2Rlcy5CdWxsZXRDb2xsaXNpb25Ob2RlO1xuXG5HYW1lTm9kZSA9IGV4YW1wbGUubm9kZXMuR2FtZU5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5Db2xsaXNpb25TeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhDb2xsaXNpb25TeXN0ZW0sIF9zdXBlcik7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLmdhbWVzID0gbnVsbDtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLnNwYWNlc2hpcHMgPSBudWxsO1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUuYXN0ZXJvaWRzID0gbnVsbDtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLmJ1bGxldHMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIENvbGxpc2lvblN5c3RlbShjcmVhdG9yKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy5nYW1lcyA9IGVuZ2luZS5nZXROb2RlTGlzdChHYW1lTm9kZSk7XG4gICAgdGhpcy5zcGFjZXNoaXBzID0gZW5naW5lLmdldE5vZGVMaXN0KFNwYWNlc2hpcENvbGxpc2lvbk5vZGUpO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gZW5naW5lLmdldE5vZGVMaXN0KEFzdGVyb2lkQ29sbGlzaW9uTm9kZSk7XG4gICAgdGhpcy5idWxsZXRzID0gZW5naW5lLmdldE5vZGVMaXN0KEJ1bGxldENvbGxpc2lvbk5vZGUpO1xuICB9O1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZXMgPSBudWxsO1xuICAgIHRoaXMuc3BhY2VzaGlwcyA9IG51bGw7XG4gICAgdGhpcy5hc3Rlcm9pZHMgPSBudWxsO1xuICAgIHRoaXMuYnVsbGV0cyA9IG51bGw7XG4gIH07XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIGFzdGVyb2lkLCBidWxsZXQsIHNwYWNlc2hpcDtcbiAgICBidWxsZXQgPSB0aGlzLmJ1bGxldHMuaGVhZDtcbiAgICB3aGlsZSAoYnVsbGV0KSB7XG4gICAgICBhc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzLmhlYWQ7XG4gICAgICB3aGlsZSAoYXN0ZXJvaWQpIHtcbiAgICAgICAgaWYgKGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLmRpc3RhbmNlVG8oYnVsbGV0LnBvc2l0aW9uLnBvc2l0aW9uKSA8PSBhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmRlc3Ryb3lFbnRpdHkoYnVsbGV0LmVudGl0eSk7XG4gICAgICAgICAgaWYgKGFzdGVyb2lkLmNvbGxpc2lvbi5yYWRpdXMgPiAxMCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZUFzdGVyb2lkKGFzdGVyb2lkLmNvbGxpc2lvbi5yYWRpdXMgLSAxMCwgYXN0ZXJvaWQucG9zaXRpb24ucG9zaXRpb24ueCArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDUsIGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLnkgKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmRlc3Ryb3lFbnRpdHkoYXN0ZXJvaWQuZW50aXR5KTtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lcy5oZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVzLmhlYWQuc3RhdGUuaGl0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhc3Rlcm9pZCA9IGFzdGVyb2lkLm5leHQ7XG4gICAgICB9XG4gICAgICBidWxsZXQgPSBidWxsZXQubmV4dDtcbiAgICB9XG4gICAgc3BhY2VzaGlwID0gdGhpcy5zcGFjZXNoaXBzLmhlYWQ7XG4gICAgd2hpbGUgKHNwYWNlc2hpcCkge1xuICAgICAgYXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkcy5oZWFkO1xuICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgIGlmIChhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi5kaXN0YW5jZVRvKHNwYWNlc2hpcC5wb3NpdGlvbi5wb3NpdGlvbikgPD0gYXN0ZXJvaWQuY29sbGlzaW9uLnJhZGl1cyArIHNwYWNlc2hpcC5jb2xsaXNpb24ucmFkaXVzKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmRlc3Ryb3lFbnRpdHkoc3BhY2VzaGlwLmVudGl0eSk7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZXMuaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lcy5oZWFkLnN0YXRlLmxpdmVzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgIH1cbiAgICAgIHNwYWNlc2hpcCA9IHNwYWNlc2hpcC5uZXh0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29sbGlzaW9uU3lzdGVtO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsaXNpb25fc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERlYXRoVGhyb2VzTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5EZWF0aFRocm9lc05vZGUgPSBleGFtcGxlLm5vZGVzLkRlYXRoVGhyb2VzTm9kZTtcblxuZXhhbXBsZS5zeXN0ZW1zLkRlYXRoVGhyb2VzU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoRGVhdGhUaHJvZXNTeXN0ZW0sIF9zdXBlcik7XG5cbiAgRGVhdGhUaHJvZXNTeXN0ZW0ucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzU3lzdGVtKGNyZWF0b3IpIHtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIERlYXRoVGhyb2VzU3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIERlYXRoVGhyb2VzTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIERlYXRoVGhyb2VzU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIG5vZGUuZGVhdGguY291bnRkb3duIC09IHRpbWU7XG4gICAgaWYgKG5vZGUuZGVhdGguY291bnRkb3duIDw9IDApIHtcbiAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KG5vZGUuZW50aXR5KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIERlYXRoVGhyb2VzU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYXRoX3Rocm9lc19zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLCBCdWxsZXRDb2xsaXNpb25Ob2RlLCBHYW1lTm9kZSwgUG9pbnQsIFNwYWNlc2hpcE5vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuR2FtZU5vZGUgPSBleGFtcGxlLm5vZGVzLkdhbWVOb2RlO1xuXG5TcGFjZXNoaXBOb2RlID0gZXhhbXBsZS5ub2Rlcy5TcGFjZXNoaXBOb2RlO1xuXG5Bc3Rlcm9pZENvbGxpc2lvbk5vZGUgPSBleGFtcGxlLm5vZGVzLkFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxuQnVsbGV0Q29sbGlzaW9uTm9kZSA9IGV4YW1wbGUubm9kZXMuQnVsbGV0Q29sbGlzaW9uTm9kZTtcblxuUG9pbnQgPSBleGFtcGxlLmdyYXBoaWNzLlBvaW50O1xuXG5leGFtcGxlLnN5c3RlbXMuR2FtZU1hbmFnZXIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhHYW1lTWFuYWdlciwgX3N1cGVyKTtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuY29uZmlnID0gbnVsbDtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLmdhbWVOb2RlcyA9IG51bGw7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnNwYWNlc2hpcHMgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5hc3Rlcm9pZHMgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5idWxsZXRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBHYW1lTWFuYWdlcihjcmVhdG9yLCBjb25maWcpIHtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZU5vZGVzID0gZW5naW5lLmdldE5vZGVMaXN0KEdhbWVOb2RlKTtcbiAgICB0aGlzLnNwYWNlc2hpcHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoU3BhY2VzaGlwTm9kZSk7XG4gICAgdGhpcy5hc3Rlcm9pZHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoQXN0ZXJvaWRDb2xsaXNpb25Ob2RlKTtcbiAgICB0aGlzLmJ1bGxldHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoQnVsbGV0Q29sbGlzaW9uTm9kZSk7XG4gIH07XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgYXN0ZXJvaWQsIGFzdGVyb2lkQ291bnQsIGNsZWFyVG9BZGRTcGFjZXNoaXAsIGksIG5ld1NwYWNlc2hpcFBvc2l0aW9uLCBub2RlLCBwb3NpdGlvbiwgc3BhY2VzaGlwO1xuICAgIG5vZGUgPSB0aGlzLmdhbWVOb2Rlcy5oZWFkO1xuICAgIGlmIChub2RlICYmIG5vZGUuc3RhdGUucGxheWluZykge1xuICAgICAgaWYgKHRoaXMuc3BhY2VzaGlwcy5lbXB0eSkge1xuICAgICAgICBpZiAobm9kZS5zdGF0ZS5saXZlcyA+IDApIHtcbiAgICAgICAgICBuZXdTcGFjZXNoaXBQb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLmNvbmZpZy53aWR0aCAqIDAuNSwgdGhpcy5jb25maWcuaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICBjbGVhclRvQWRkU3BhY2VzaGlwID0gdHJ1ZTtcbiAgICAgICAgICBhc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzLmhlYWQ7XG4gICAgICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgICAgICBpZiAoYXN0ZXJvaWQucG9zaXRpb24ucG9zaXRpb24uZGlzdGFuY2VUbyhuZXdTcGFjZXNoaXBQb3NpdGlvbikgPD0gYXN0ZXJvaWQucG9zaXRpb24uY29sbGlzaW9uUmFkaXVzICsgNTApIHtcbiAgICAgICAgICAgICAgY2xlYXJUb0FkZFNwYWNlc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNsZWFyVG9BZGRTcGFjZXNoaXApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVTcGFjZXNoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zdGF0ZS5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVdhaXRGb3JDbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3Rlcm9pZHMuZW1wdHkgJiYgdGhpcy5idWxsZXRzLmVtcHR5ICYmICF0aGlzLnNwYWNlc2hpcHMuZW1wdHkpIHtcbiAgICAgICAgc3BhY2VzaGlwID0gdGhpcy5zcGFjZXNoaXBzLmhlYWQ7XG4gICAgICAgIG5vZGUuc3RhdGUubGV2ZWwrKztcbiAgICAgICAgYXN0ZXJvaWRDb3VudCA9IDIgKyBub2RlLnN0YXRlLmxldmVsO1xuICAgICAgICBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBhc3Rlcm9pZENvdW50KSB7XG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbmZpZy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuY29uZmlnLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoIShwb3NpdGlvbi5kaXN0YW5jZVRvKHNwYWNlc2hpcC5wb3NpdGlvbi5wb3NpdGlvbikgPD0gODApKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNyZWF0b3IuY3JlYXRlQXN0ZXJvaWQoMzAsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgICAgICsraTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZU5vZGVzID0gbnVsbDtcbiAgICB0aGlzLnNwYWNlc2hpcHMgPSBudWxsO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gbnVsbDtcbiAgICB0aGlzLmJ1bGxldHMgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBHYW1lTWFuYWdlcjtcblxufSkoYXNoLmNvcmUuU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9tYW5hZ2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEd1bkNvbnRyb2xOb2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkd1bkNvbnRyb2xOb2RlID0gZXhhbXBsZS5ub2Rlcy5HdW5Db250cm9sTm9kZTtcblxuZXhhbXBsZS5zeXN0ZW1zLkd1bkNvbnRyb2xTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhHdW5Db250cm9sU3lzdGVtLCBfc3VwZXIpO1xuXG4gIEd1bkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLmtleVBvbGwgPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLm5vZGVMaXN0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBHdW5Db250cm9sU3lzdGVtKGtleVBvbGwsIGNyZWF0b3IpIHtcbiAgICB0aGlzLmtleVBvbGwgPSBrZXlQb2xsO1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgR3VuQ29udHJvbFN5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBHdW5Db250cm9sTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEd1bkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdmFyIGNvbnRyb2wsIGd1biwgcG9zaXRpb247XG4gICAgY29udHJvbCA9IG5vZGUuY29udHJvbDtcbiAgICBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gICAgZ3VuID0gbm9kZS5ndW47XG4gICAgZ3VuLnNob290aW5nID0gdGhpcy5rZXlQb2xsLmlzRG93bihjb250cm9sLnRyaWdnZXIpO1xuICAgIGd1bi50aW1lU2luY2VMYXN0U2hvdCArPSB0aW1lO1xuICAgIGlmIChndW4uc2hvb3RpbmcgJiYgZ3VuLnRpbWVTaW5jZUxhc3RTaG90ID49IGd1bi5taW5pbXVtU2hvdEludGVydmFsKSB7XG4gICAgICB0aGlzLmNyZWF0b3IuY3JlYXRlVXNlckJ1bGxldChndW4sIHBvc2l0aW9uKTtcbiAgICAgIGd1bi50aW1lU2luY2VMYXN0U2hvdCA9IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBHdW5Db250cm9sU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1bl9jb250cm9sX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBIdWROb2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkh1ZE5vZGUgPSBleGFtcGxlLm5vZGVzLkh1ZE5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5IdWRTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhIdWRTeXN0ZW0sIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gSHVkU3lzdGVtKCkge1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEh1ZFN5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBIdWROb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgSHVkU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIG5vZGUuaHVkLnZpZXcuc2V0TGl2ZXMobm9kZS5zdGF0ZS5saXZlcyk7XG4gICAgbm9kZS5odWQudmlldy5zZXRTY29yZShub2RlLnN0YXRlLmhpdHMpO1xuICB9O1xuXG4gIHJldHVybiBIdWRTeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNb3Rpb25Db250cm9sTm9kZSwgYXNoLCBiMlZlYzIsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbk1vdGlvbkNvbnRyb2xOb2RlID0gZXhhbXBsZS5ub2Rlcy5Nb3Rpb25Db250cm9sTm9kZTtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5leGFtcGxlLnN5c3RlbXMuTW90aW9uQ29udHJvbFN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKE1vdGlvbkNvbnRyb2xTeXN0ZW0sIF9zdXBlcik7XG5cbiAgTW90aW9uQ29udHJvbFN5c3RlbS5wcm90b3R5cGUua2V5UG9sbCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTW90aW9uQ29udHJvbFN5c3RlbShrZXlQb2xsKSB7XG4gICAgdGhpcy5rZXlQb2xsID0ga2V5UG9sbDtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBNb3Rpb25Db250cm9sU3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIE1vdGlvbkNvbnRyb2xOb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgTW90aW9uQ29udHJvbFN5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICB2YXIgY29udHJvbCwgbGVmdCwgbW90aW9uLCBwaHlzaWNzLCBwb3NpdGlvbiwgcmlnaHQ7XG4gICAgY29udHJvbCA9IG5vZGUuY29udHJvbDtcbiAgICBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gICAgbW90aW9uID0gbm9kZS5tb3Rpb247XG4gICAgcGh5c2ljcyA9IG5vZGUucGh5c2ljcztcbiAgICBsZWZ0ID0gdGhpcy5rZXlQb2xsLmlzRG93bihjb250cm9sLmxlZnQpO1xuICAgIHJpZ2h0ID0gdGhpcy5rZXlQb2xsLmlzRG93bihjb250cm9sLnJpZ2h0KTtcbiAgICBpZiAobGVmdCkge1xuICAgICAgcG9zaXRpb24ucm90YXRpb24gLT0gY29udHJvbC5yb3RhdGlvblJhdGUgKiB0aW1lO1xuICAgIH1cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIHBvc2l0aW9uLnJvdGF0aW9uICs9IGNvbnRyb2wucm90YXRpb25SYXRlICogdGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC5hY2NlbGVyYXRlKSkge1xuICAgICAgbW90aW9uLnZlbG9jaXR5LnggKz0gTWF0aC5jb3MocG9zaXRpb24ucm90YXRpb24pICogY29udHJvbC5hY2NlbGVyYXRpb25SYXRlICogdGltZTtcbiAgICAgIG1vdGlvbi52ZWxvY2l0eS55ICs9IE1hdGguc2luKHBvc2l0aW9uLnJvdGF0aW9uKSAqIGNvbnRyb2wuYWNjZWxlcmF0aW9uUmF0ZSAqIHRpbWU7XG4gICAgfVxuICAgIGlmIChsZWZ0KSB7XG4gICAgICBwaHlzaWNzLmJvZHkuQXBwbHlGb3JjZShuZXcgYjJWZWMyKDEwMCwgMTAwKSwgcGh5c2ljcy5ib2R5LkdldFdvcmxkQ2VudGVyKCkpO1xuICAgIH1cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIHBoeXNpY3MuYm9keS5BcHBseUZvcmNlKG5ldyBiMlZlYzIoLTEwMCwgLTEwMCksIHBoeXNpY3MuYm9keS5HZXRXb3JsZENlbnRlcigpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE1vdGlvbkNvbnRyb2xTeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW90aW9uX2NvbnRyb2xfc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1vdmVtZW50Tm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Nb3ZlbWVudE5vZGUgPSBleGFtcGxlLm5vZGVzLk1vdmVtZW50Tm9kZTtcblxuZXhhbXBsZS5zeXN0ZW1zLk1vdmVtZW50U3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTW92ZW1lbnRTeXN0ZW0sIF9zdXBlcik7XG5cbiAgTW92ZW1lbnRTeXN0ZW0ucHJvdG90eXBlLmNvbmZpZyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTW92ZW1lbnRTeXN0ZW0oY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgTW92ZW1lbnRTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgTW92ZW1lbnROb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgTW92ZW1lbnRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdmFyIG1vdGlvbiwgcG9zaXRpb24sIHhEYW1wLCB5RGFtcDtcbiAgICBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gICAgbW90aW9uID0gbm9kZS5tb3Rpb247XG4gICAgcG9zaXRpb24ucG9zaXRpb24ueCArPSBtb3Rpb24udmVsb2NpdHkueCAqIHRpbWU7XG4gICAgcG9zaXRpb24ucG9zaXRpb24ueSArPSBtb3Rpb24udmVsb2NpdHkueSAqIHRpbWU7XG4gICAgaWYgKHBvc2l0aW9uLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbi54ICs9IHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueCA+IHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbi54IC09IHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueSA8IDApIHtcbiAgICAgIHBvc2l0aW9uLnBvc2l0aW9uLnkgKz0gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueSA+IHRoaXMuY29uZmlnLmhlaWdodCkge1xuICAgICAgcG9zaXRpb24ucG9zaXRpb24ueSAtPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgfVxuICAgIHBvc2l0aW9uLnJvdGF0aW9uICs9IG1vdGlvbi5hbmd1bGFyVmVsb2NpdHkgKiB0aW1lO1xuICAgIGlmIChtb3Rpb24uZGFtcGluZyA+IDApIHtcbiAgICAgIHhEYW1wID0gTWF0aC5hYnMoTWF0aC5jb3MocG9zaXRpb24ucm90YXRpb24pICogbW90aW9uLmRhbXBpbmcgKiB0aW1lKTtcbiAgICAgIHlEYW1wID0gTWF0aC5hYnMoTWF0aC5zaW4ocG9zaXRpb24ucm90YXRpb24pICogbW90aW9uLmRhbXBpbmcgKiB0aW1lKTtcbiAgICAgIGlmIChtb3Rpb24udmVsb2NpdHkueCA+IHhEYW1wKSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS54IC09IHhEYW1wO1xuICAgICAgfSBlbHNlIGlmIChtb3Rpb24udmVsb2NpdHkueCA8IC14RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueCArPSB4RGFtcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS54ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChtb3Rpb24udmVsb2NpdHkueSA+IHlEYW1wKSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS55IC09IHlEYW1wO1xuICAgICAgfSBlbHNlIGlmIChtb3Rpb24udmVsb2NpdHkueSA8IC15RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueSArPSB5RGFtcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS55ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE1vdmVtZW50U3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVtZW50X3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQaHlzaWNzTm9kZSwgYXNoLCBiMlZlYzIsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBoeXNpY3NOb2RlID0gZXhhbXBsZS5ub2Rlcy5QaHlzaWNzTm9kZTtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5leGFtcGxlLnN5c3RlbXMuUGh5c2ljc1N5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFBoeXNpY3NTeXN0ZW0sIF9zdXBlcik7XG5cbiAgUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUud29ybGQgPSBudWxsO1xuXG4gIFBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLmNvdW50ID0gMDtcblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5rb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gUGh5c2ljc1N5c3RlbSh3b3JsZCkge1xuICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMubm9kZUxpc3QgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoUGh5c2ljc05vZGUpO1xuICB9O1xuXG4gIFBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLm5vZGVMaXN0ID0gbnVsbDtcbiAgfTtcblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy53b3JsZC5TdGVwKHRpbWUsIDEwLCAxMCk7XG4gICAgdGhpcy53b3JsZC5DbGVhckZvcmNlcygpO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVMaXN0LmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTm9kZShub2RlLCB0aW1lKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICB9O1xuXG4gIFBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdGhpcy5jb3VudCsrO1xuICAgIGlmICh0aGlzLmNvdW50ID09PSA2MCkge1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzU3lzdGVtO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waHlzaWNzX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBSZW5kZXJOb2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblJlbmRlck5vZGUgPSBleGFtcGxlLm5vZGVzLlJlbmRlck5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5SZW5kZXJTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhSZW5kZXJTeXN0ZW0sIF9zdXBlcik7XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBSZW5kZXJTeXN0ZW0ucHJvdG90eXBlLm5vZGVzID0gbnVsbDtcblxuICBmdW5jdGlvbiBSZW5kZXJTeXN0ZW0oZ3JhcGhpYykge1xuICAgIHRoaXMuZ3JhcGhpYyA9IGdyYXBoaWM7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoUmVuZGVyTm9kZSk7XG4gICAgbm9kZSA9IHRoaXMubm9kZXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgdGhpcy5hZGRUb0Rpc3BsYXkobm9kZSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgfTtcblxuICBSZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLm5vZGVzID0gbnVsbDtcbiAgfTtcblxuICBSZW5kZXJTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgZGlzcGxheSwgZ3JhcGhpYywgbm9kZSwgcG9zaXRpb247XG4gICAgdGhpcy5ncmFwaGljLnNhdmUoKTtcbiAgICB0aGlzLmdyYXBoaWMudHJhbnNsYXRlKDAsIDApO1xuICAgIHRoaXMuZ3JhcGhpYy5yb3RhdGUoMCk7XG4gICAgdGhpcy5ncmFwaGljLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdyYXBoaWMuY2FudmFzLndpZHRoLCB0aGlzLmdyYXBoaWMuY2FudmFzLmhlaWdodCk7XG4gICAgbm9kZSA9IHRoaXMubm9kZXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgZGlzcGxheSA9IG5vZGUuZGlzcGxheTtcbiAgICAgIGdyYXBoaWMgPSBkaXNwbGF5LmdyYXBoaWM7XG4gICAgICBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gICAgICBncmFwaGljLnggPSBwb3NpdGlvbi5wb3NpdGlvbi54O1xuICAgICAgZ3JhcGhpYy55ID0gcG9zaXRpb24ucG9zaXRpb24ueTtcbiAgICAgIGdyYXBoaWMucm90YXRpb24gPSBwb3NpdGlvbi5yb3RhdGlvbjtcbiAgICAgIGdyYXBoaWMuZHJhdygpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgdGhpcy5ncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyU3lzdGVtO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXJfc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuc3lzdGVtcy5TeXN0ZW1Qcmlvcml0aWVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTeXN0ZW1Qcmlvcml0aWVzKCkge31cblxuICBTeXN0ZW1Qcmlvcml0aWVzLnByZVVwZGF0ZSA9IDE7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy51cGRhdGUgPSAyO1xuXG4gIFN5c3RlbVByaW9yaXRpZXMubW92ZSA9IDM7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5yZXNvbHZlQ29sbGlzaW9ucyA9IDQ7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5zdGF0ZU1hY2hpbmVzID0gNTtcblxuICBTeXN0ZW1Qcmlvcml0aWVzLmFuaW1hdGUgPSA2O1xuXG4gIFN5c3RlbVByaW9yaXRpZXMucmVuZGVyID0gNztcblxuICByZXR1cm4gU3lzdGVtUHJpb3JpdGllcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX3ByaW9yaXRpZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLCBHYW1lTm9kZSwgV2FpdEZvclN0YXJ0Tm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5XYWl0Rm9yU3RhcnROb2RlID0gZXhhbXBsZS5ub2Rlcy5XYWl0Rm9yU3RhcnROb2RlO1xuXG5Bc3Rlcm9pZENvbGxpc2lvbk5vZGUgPSBleGFtcGxlLm5vZGVzLkFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxuR2FtZU5vZGUgPSBleGFtcGxlLm5vZGVzLkdhbWVOb2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuV2FpdEZvclN0YXJ0U3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoV2FpdEZvclN0YXJ0U3lzdGVtLCBfc3VwZXIpO1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUuZW5naW5lID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUuZ2FtZU5vZGVzID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLndhaXROb2RlcyA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5hc3Rlcm9pZHMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFdhaXRGb3JTdGFydFN5c3RlbShjcmVhdG9yKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy53YWl0Tm9kZXMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoV2FpdEZvclN0YXJ0Tm9kZSk7XG4gICAgdGhpcy5nYW1lTm9kZXMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoR2FtZU5vZGUpO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gZW5naW5lLmdldE5vZGVMaXN0KEFzdGVyb2lkQ29sbGlzaW9uTm9kZSk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy53YWl0Tm9kZXMgPSBudWxsO1xuICAgIHRoaXMuZ2FtZU5vZGVzID0gbnVsbDtcbiAgfTtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgYXN0ZXJvaWQsIGdhbWUsIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMud2FpdE5vZGVzLmhlYWQ7XG4gICAgZ2FtZSA9IHRoaXMuZ2FtZU5vZGVzLmhlYWQ7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS53YWl0LnN0YXJ0R2FtZSAmJiBnYW1lKSB7XG4gICAgICBhc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzLmhlYWQ7XG4gICAgICB3aGlsZSAoYXN0ZXJvaWQpIHtcbiAgICAgICAgdGhpcy5jcmVhdG9yLmRlc3Ryb3lFbnRpdHkoYXN0ZXJvaWQuZW50aXR5KTtcbiAgICAgICAgYXN0ZXJvaWQgPSBhc3Rlcm9pZC5uZXh0O1xuICAgICAgfVxuICAgICAgZ2FtZS5zdGF0ZS5zZXRGb3JTdGFydCgpO1xuICAgICAgbm9kZS53YWl0LnN0YXJ0R2FtZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRW50aXR5KG5vZGUuZW50aXR5KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFdhaXRGb3JTdGFydFN5c3RlbTtcblxufSkoYXNoLmNvcmUuU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdF9mb3Jfc3RhcnRfc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIE5vZGVMaXN0LCBOb2RlUG9vbCwgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuTm9kZUxpc3QgPSBhc2guY29yZS5Ob2RlTGlzdDtcblxuTm9kZVBvb2wgPSBhc2guY29yZS5Ob2RlUG9vbDtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoZSBkZWZhdWx0IGNsYXNzIGZvciBtYW5hZ2luZyBhIE5vZGVMaXN0LiBUaGlzIGNsYXNzIGNyZWF0ZXMgdGhlIE5vZGVMaXN0IGFuZCBhZGRzIGFuZCByZW1vdmVzXG4gKiBub2RlcyB0by9mcm9tIHRoZSBsaXN0IGFzIHRoZSBlbnRpdGllcyBhbmQgdGhlIGNvbXBvbmVudHMgaW4gdGhlIGVuZ2luZSBjaGFuZ2UuXG4gKlxuICogSXQgdXNlcyB0aGUgYmFzaWMgZW50aXR5IG1hdGNoaW5nIHBhdHRlcm4gb2YgYW4gZW50aXR5IHN5c3RlbSAtIGVudGl0aWVzIGFyZSBhZGRlZCB0byB0aGUgbGlzdCBpZlxuICogdGhleSBjb250YWluIGNvbXBvbmVudHMgbWF0Y2hpbmcgYWxsIHRoZSBwdWJsaWMgcHJvcGVydGllcyBvZiB0aGUgbm9kZSBjbGFzcy5cbiAqL1xuXG5hc2guY29yZS5Db21wb25lbnRNYXRjaGluZ0ZhbWlseSA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5vZGVzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuZW50aXRpZXMgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5ub2RlQ2xhc3MgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubm9kZVBvb2wgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGNvbnN0cnVjdG9yLiBDcmVhdGVzIGEgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgdG8gcHJvdmlkZSBhIE5vZGVMaXN0IGZvciB0aGVcbiAgICogZ2l2ZW4gbm9kZSBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIG5vZGVDbGFzcyBUaGUgdHlwZSBvZiBub2RlIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIGEgTm9kZUxpc3QgZm9yLlxuICAgKiBAcGFyYW0gZW5naW5lIFRoZSBlbmdpbmUgdGhhdCB0aGlzIGZhbWlseSBpcyBtYW5hZ2luZyB0ZWggTm9kZUxpc3QgZm9yLlxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRNYXRjaGluZ0ZhbWlseShub2RlQ2xhc3MsIGVuZ2luZSkge1xuICAgIHRoaXMubm9kZUNsYXNzID0gbm9kZUNsYXNzO1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUgPSBfX2JpbmQodGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSwgdGhpcyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEluaXRpYWxpc2VzIHRoZSBjbGFzcy4gQ3JlYXRlcyB0aGUgbm9kZWxpc3QgYW5kIG90aGVyIHRvb2xzLiBBbmFseXNlcyB0aGUgbm9kZSB0byBkZXRlcm1pbmVcbiAgICogd2hhdCBjb21wb25lbnQgdHlwZXMgdGhlIG5vZGUgcmVxdWlyZXMuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUsIHR5cGUsIF9yZWY7XG4gICAgdGhpcy5ub2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy5ub2RlUG9vbCA9IG5ldyBOb2RlUG9vbCh0aGlzLm5vZGVDbGFzcywgdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cyk7XG4gICAgX3JlZiA9IHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHM7XG4gICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgIHR5cGUgPSBfcmVmW25hbWVdO1xuICAgICAgdGhpcy5jb21wb25lbnRzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFRoZSBub2RlbGlzdCBtYW5hZ2VkIGJ5IHRoaXMgZmFtaWx5LiBUaGlzIGlzIGEgcmVmZXJlbmNlIHRoYXQgcmVtYWlucyB2YWxpZCBhbHdheXNcbiAgICogc2luY2UgaXQgaXMgcmV0YWluZWQgYW5kIHJldXNlZCBieSBTeXN0ZW1zIHRoYXQgdXNlIHRoZSBsaXN0LiBpLmUuIHdlIG5ldmVyIHJlY3JlYXRlIHRoZSBsaXN0LFxuICAgKiB3ZSBhbHdheXMgbW9kaWZ5IGl0IGluIHBsYWNlLlxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUsIHtcbiAgICBub2RlTGlzdDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYW4gZW50aXR5IGhhcyBiZWVuIGFkZGVkIHRvIGl0LiBXZSBjaGVjayBpZiB0aGUgZW50aXR5IHNob3VsZCBiZSBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCBhZGQgaXQgaWYgYXBwcm9wcmlhdGUuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5uZXdFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aGlzLmFkZElmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYSBjb21wb25lbnQgaGFzIGJlZW4gYWRkZWQgdG8gYW4gZW50aXR5LiBXZSBjaGVjayBpZiB0aGUgZW50aXR5IGlzIG5vdCBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCBzaG91bGQgYmUsIGFuZCBhZGQgaXQgaWYgYXBwcm9wcmlhdGUuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRBZGRlZFRvRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHRoaXMuYWRkSWZNYXRjaChlbnRpdHkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhIGNvbXBvbmVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW4gZW50aXR5LiBXZSBjaGVjayBpZiB0aGUgcmVtb3ZlZCBjb21wb25lbnRcbiAgICogaXMgcmVxdWlyZWQgYnkgdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgaWYgc28sIHdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgaXMgaW4gdGhpcyB0aGlzIE5vZGVMaXN0IGFuZFxuICAgKiByZW1vdmUgaXQgaWYgc28uXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkRnJvbUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICBpZiAoY29tcG9uZW50Q2xhc3MubmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlSWZNYXRjaChlbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYW4gZW50aXR5IGhhcyBiZWVuIHJtb3ZlZCBmcm9tIGl0LiBXZSBjaGVjayBpZiB0aGUgZW50aXR5IGlzIGluXG4gICAqIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgYW5kIHJlbW92ZSBpdCBpZiBzby5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRoaXMucmVtb3ZlSWZNYXRjaChlbnRpdHkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogSWYgdGhlIGVudGl0eSBpcyBub3QgaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdCwgdGVzdHMgdGhlIGNvbXBvbmVudHMgb2YgdGhlIGVudGl0eSB0byBzZWVcbiAgICogaWYgaXQgc2hvdWxkIGJlIGluIHRoaXMgTm9kZUxpc3QgYW5kIGFkZHMgaXQgaWYgc28uXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5hZGRJZk1hdGNoID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudENsYXNzLCBuYW1lLCBub2RlLCBfcmVmLCBfcmVmMTtcbiAgICBpZiAodGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV0gPT0gbnVsbCkge1xuICAgICAgX3JlZiA9IHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHM7XG4gICAgICBmb3IgKG5hbWUgaW4gX3JlZikge1xuICAgICAgICBjb21wb25lbnRDbGFzcyA9IF9yZWZbbmFtZV07XG4gICAgICAgIGlmICghZW50aXR5Lmhhcyhjb21wb25lbnRDbGFzcykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSB0aGlzLm5vZGVQb29sLmdldCgpO1xuICAgICAgbm9kZS5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICBfcmVmMSA9IHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHM7XG4gICAgICBmb3IgKG5hbWUgaW4gX3JlZjEpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3MgPSBfcmVmMVtuYW1lXTtcbiAgICAgICAgbm9kZVtuYW1lXSA9IGVudGl0eS5nZXQoY29tcG9uZW50Q2xhc3MpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV0gPSBub2RlO1xuICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlcyB0aGUgZW50aXR5IGlmIGl0IGlzIGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5yZW1vdmVJZk1hdGNoID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGVudGl0eS5uYW1lIGluIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXTtcbiAgICAgIGRlbGV0ZSB0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXTtcbiAgICAgIHRoaXMubm9kZXMucmVtb3ZlKG5vZGUpO1xuICAgICAgaWYgKHRoaXMuZW5naW5lLnVwZGF0aW5nKSB7XG4gICAgICAgIHRoaXMubm9kZVBvb2wuY2FjaGUobm9kZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZUNvbXBsZXRlLmFkZCh0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm9kZVBvb2wuZGlzcG9zZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBSZWxlYXNlcyB0aGUgbm9kZXMgdGhhdCB3ZXJlIGFkZGVkIHRvIHRoZSBub2RlIHBvb2wgZHVyaW5nIHRoaXMgZW5naW5lIHVwZGF0ZSwgc28gdGhleSBjYW5cbiAgICogYmUgcmV1c2VkLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUucmVsZWFzZU5vZGVQb29sQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVuZ2luZS51cGRhdGVDb21wbGV0ZS5yZW1vdmUodGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSk7XG4gICAgdGhpcy5ub2RlUG9vbC5yZWxlYXNlQ2FjaGUoKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZXMgYWxsIG5vZGVzIGZyb20gdGhlIE5vZGVMaXN0LlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY2xlYW5VcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMucmVtb3ZlKG5vZGUuZW50aXR5KTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHRoaXMubm9kZXMucmVtb3ZlQWxsKCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfbWF0Y2hpbmdfZmFtaWx5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LCBEaWN0aW9uYXJ5LCBFbnRpdHlMaXN0LCBTaWduYWwwLCBTeXN0ZW1MaXN0LCBhc2gsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5Db21wb25lbnRNYXRjaGluZ0ZhbWlseSA9IGFzaC5jb3JlLkNvbXBvbmVudE1hdGNoaW5nRmFtaWx5O1xuXG5FbnRpdHlMaXN0ID0gYXNoLmNvcmUuRW50aXR5TGlzdDtcblxuU2lnbmFsMCA9IGFzaC5zaWduYWxzLlNpZ25hbDA7XG5cblN5c3RlbUxpc3QgPSBhc2guY29yZS5TeXN0ZW1MaXN0O1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogVGhlIEVuZ2luZSBjbGFzcyBpcyB0aGUgY2VudHJhbCBwb2ludCBmb3IgY3JlYXRpbmcgYW5kIG1hbmFnaW5nIHlvdXIgZ2FtZSBzdGF0ZS4gQWRkXG4gKiBlbnRpdGllcyBhbmQgc3lzdGVtcyB0byB0aGUgZW5naW5lLCBhbmQgZmV0Y2ggZmFtaWxpZXMgb2Ygbm9kZXMgZnJvbSB0aGUgZW5naW5lLlxuICovXG5cbmFzaC5jb3JlLkVuZ2luZSA9IChmdW5jdGlvbigpIHtcbiAgRW5naW5lLnByb3RvdHlwZS5lbnRpdHlOYW1lcyA9IG51bGw7XG5cbiAgRW5naW5lLnByb3RvdHlwZS5lbnRpdHlMaXN0ID0gbnVsbDtcblxuICBFbmdpbmUucHJvdG90eXBlLnN5c3RlbUxpc3QgPSBudWxsO1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZmFtaWxpZXMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBlbmdpbmUgaXMgY3VycmVudGx5IGluIGl0cyB1cGRhdGUgbG9vcC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS51cGRhdGluZyA9IGZhbHNlO1xuXG5cbiAgLypcbiAgICogRGlzcGF0Y2hlZCB3aGVuIHRoZSB1cGRhdGUgbG9vcCBlbmRzLiBJZiB5b3Ugd2FudCB0byBhZGQgYW5kIHJlbW92ZSBzeXN0ZW1zIGZyb20gdGhlXG4gICAqIGVuZ2luZSBpdCBpcyB1c3VhbGx5IGJlc3Qgbm90IHRvIGRvIHNvIGR1cmluZyB0aGUgdXBkYXRlIGxvb3AuIFRvIGF2b2lkIHRoaXMgeW91IGNhblxuICAgKiBsaXN0ZW4gZm9yIHRoaXMgc2lnbmFsIGFuZCBtYWtlIHRoZSBjaGFuZ2Ugd2hlbiB0aGUgc2lnbmFsIGlzIGRpc3BhdGNoZWQuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUudXBkYXRlQ29tcGxldGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGNsYXNzIHVzZWQgdG8gbWFuYWdlIG5vZGUgbGlzdHMuIEluIG1vc3QgY2FzZXMgdGhlIGRlZmF1bHQgY2xhc3MgaXMgc3VmZmljaWVudFxuICAgKiBidXQgaXQgaXMgZXhwb3NlZCBoZXJlIHNvIGFkdmFuY2VkIGRldmVsb3BlcnMgY2FuIGNob29zZSB0byBjcmVhdGUgYW5kIHVzZSBhXG4gICAqIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhlIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSBJRmFtaWx5IGludGVyZmFjZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5mYW1pbHlDbGFzcyA9IENvbXBvbmVudE1hdGNoaW5nRmFtaWx5O1xuXG4gIGZ1bmN0aW9uIEVuZ2luZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5lbnRpdHlMaXN0ID0gbmV3IEVudGl0eUxpc3QoKTtcbiAgICB0aGlzLmVudGl0eU5hbWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLnN5c3RlbUxpc3QgPSBuZXcgU3lzdGVtTGlzdCgpO1xuICAgIHRoaXMuZmFtaWxpZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUgPSBuZXcgU2lnbmFsMCgpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRW5naW5lLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIGEgdmVjdG9yIGNvbnRhaW5pbmcgYWxsIHRoZSBlbnRpdGllcyBpbiB0aGUgZW5naW5lLlxuICAgICAqL1xuICAgIGVudGl0aWVzOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZW50aXRpZXMsIGVudGl0eTtcbiAgICAgICAgZW50aXRpZXMgPSBbXTtcbiAgICAgICAgZW50aXR5ID0gdGhpcy5lbnRpdHlMaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChlbnRpdHkpIHtcbiAgICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICBlbnRpdHkgPSBlbnRpdHkubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogUmV0dXJucyBhIHZlY3RvciBjb250YWluaW5nIGFsbCB0aGUgc3lzdGVtcyBpbiB0aGUgZW5naW5lLlxuICAgICAqL1xuICAgIHN5c3RlbXM6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzeXN0ZW0sIHN5c3RlbXM7XG4gICAgICAgIHN5c3RlbXMgPSBbXTtcbiAgICAgICAgc3lzdGVtID0gdGhpcy5zeXN0ZW1MaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChzeXN0ZW0pIHtcbiAgICAgICAgICBzeXN0ZW1zLnB1c2goc3lzdGVtKTtcbiAgICAgICAgICBzeXN0ZW0gPSBzeXN0ZW0ubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3lzdGVtcztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLypcbiAgICogQWRkIGFuIGVudGl0eSB0byB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gYWRkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgaWYgKHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdKSB7XG4gICAgICB0aHJvdyBcIlRoZSBlbnRpdHkgbmFtZSBcIiArIGVudGl0eS5uYW1lICsgXCIgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBlbnRpdHkuXCI7XG4gICAgfVxuICAgIHRoaXMuZW50aXR5TGlzdC5hZGQoZW50aXR5KTtcbiAgICB0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXSA9IGVudGl0eTtcbiAgICBlbnRpdHkuY29tcG9uZW50QWRkZWQuYWRkKHRoaXMuY29tcG9uZW50QWRkZWQpO1xuICAgIGVudGl0eS5jb21wb25lbnRSZW1vdmVkLmFkZCh0aGlzLmNvbXBvbmVudFJlbW92ZWQpO1xuICAgIGVudGl0eS5uYW1lQ2hhbmdlZC5hZGQodGhpcy5lbnRpdHlOYW1lQ2hhbmdlZCk7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkubmV3RW50aXR5KGVudGl0eSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFuIGVudGl0eSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byByZW1vdmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdmFyIGVhY2gsIGZhbWlseSwgX3JlZjtcbiAgICBlbnRpdHkuY29tcG9uZW50QWRkZWQucmVtb3ZlKHRoaXMuY29tcG9uZW50QWRkZWQpO1xuICAgIGVudGl0eS5jb21wb25lbnRSZW1vdmVkLnJlbW92ZSh0aGlzLmNvbXBvbmVudFJlbW92ZWQpO1xuICAgIGVudGl0eS5uYW1lQ2hhbmdlZC5yZW1vdmUodGhpcy5lbnRpdHlOYW1lQ2hhbmdlZCk7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkucmVtb3ZlRW50aXR5KGVudGl0eSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXTtcbiAgICB0aGlzLmVudGl0eUxpc3QucmVtb3ZlKGVudGl0eSk7XG4gIH07XG5cbiAgRW5naW5lLnByb3RvdHlwZS5lbnRpdHlOYW1lQ2hhbmdlZCA9IGZ1bmN0aW9uKGVudGl0eSwgb2xkTmFtZSkge1xuICAgIGlmICh0aGlzLmVudGl0eU5hbWVzW29sZE5hbWVdID09PSBlbnRpdHkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVudGl0eU5hbWVzW29sZE5hbWVdO1xuICAgICAgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV0gPSBlbnRpdHk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFuIGVudGl0eSBiYXNlZCBuIGl0cyBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZW50aXR5XG4gICAqIEByZXR1cm4gVGhlIGVudGl0eSwgb3IgbnVsbCBpZiBubyBlbnRpdHkgd2l0aCB0aGF0IG5hbWUgZXhpc3RzIG9uIHRoZSBlbmdpbmVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXRFbnRpdHlCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5TmFtZXNbbmFtZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYWxsIGVudGl0aWVzIGZyb20gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVBbGxFbnRpdGllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlICh0aGlzLmVudGl0eUxpc3QuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVFbnRpdHkodGhpcy5lbnRpdHlMaXN0LmhlYWQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICBAcHJpdmF0ZVxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkuY29tcG9uZW50QWRkZWRUb0VudGl0eShlbnRpdHksIGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgQHByaXZhdGVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkoZW50aXR5LCBjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvbiBvZiBub2RlcyBmcm9tIHRoZSBlbmdpbmUsIGJhc2VkIG9uIHRoZSB0eXBlIG9mIHRoZSBub2RlIHJlcXVpcmVkLlxuICAgKlxuICAgKiA8cD5UaGUgZW5naW5lIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBOb2RlTGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QgYW5kXG4gICAqIHdpbGwga2VlcCBpdHMgY29udGVudHMgdXAgdG8gZGF0ZSBhcyBlbnRpdGllcyBhcmUgYWRkZWQgdG8gYW5kIHJlbW92ZWQgZnJvbSB0aGVcbiAgICogZW5naW5lLjwvcD5cbiAgICpcbiAgICogPHA+SWYgYSBOb2RlTGlzdCBpcyBubyBsb25nZXIgcmVxdWlyZWQsIHJlbGVhc2UgaXQgd2l0aCB0aGUgcmVsZWFzZU5vZGVMaXN0IG1ldGhvZC48L3A+XG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2Ygbm9kZSByZXF1aXJlZC5cbiAgICogQHJldHVybiBBIGxpbmtlZCBsaXN0IG9mIGFsbCBub2RlcyBvZiB0aGlzIHR5cGUgZnJvbSBhbGwgZW50aXRpZXMgaW4gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXROb2RlTGlzdCA9IGZ1bmN0aW9uKG5vZGVDbGFzcykge1xuICAgIHZhciBlbnRpdHksIGZhbWlseTtcbiAgICBpZiAobm9kZUNsYXNzLm5hbWUgaW4gdGhpcy5mYW1pbGllcykge1xuICAgICAgcmV0dXJuIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdLm5vZGVMaXN0O1xuICAgIH1cbiAgICBmYW1pbHkgPSBuZXcgdGhpcy5mYW1pbHlDbGFzcyhub2RlQ2xhc3MsIHRoaXMpO1xuICAgIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdID0gZmFtaWx5O1xuICAgIGVudGl0eSA9IHRoaXMuZW50aXR5TGlzdC5oZWFkO1xuICAgIHdoaWxlIChlbnRpdHkpIHtcbiAgICAgIGZhbWlseS5uZXdFbnRpdHkoZW50aXR5KTtcbiAgICAgIGVudGl0eSA9IGVudGl0eS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZmFtaWx5Lm5vZGVMaXN0O1xuICB9O1xuXG5cbiAgLypcbiAgICogSWYgYSBOb2RlTGlzdCBpcyBubyBsb25nZXIgcmVxdWlyZWQsIHRoaXMgbWV0aG9kIHdpbGwgc3RvcCB0aGUgZW5naW5lIHVwZGF0aW5nXG4gICAqIHRoZSBsaXN0IGFuZCB3aWxsIHJlbGVhc2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGxpc3Qgd2l0aGluIHRoZSBmcmFtZXdvcmtcbiAgICogY2xhc3NlcywgZW5hYmxpbmcgaXQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqXG4gICAqIDxwPkl0IGlzIG5vdCBlc3NlbnRpYWwgdG8gcmVsZWFzZSBhIGxpc3QsIGJ1dCByZWxlYXNpbmcgaXQgd2lsbCBmcmVlXG4gICAqIHVwIG1lbW9yeSBhbmQgcHJvY2Vzc29yIHJlc291cmNlcy48L3A+XG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2YgdGhlIG5vZGUgY2xhc3MgaWYgdGhlIGxpc3QgdG8gYmUgcmVsZWFzZWQuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVsZWFzZU5vZGVMaXN0ID0gZnVuY3Rpb24obm9kZUNsYXNzKSB7XG4gICAgaWYgKG5vZGVDbGFzcy5uYW1lIGluIHRoaXMuZmFtaWxpZXMpIHtcbiAgICAgIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdLmNsZWFuVXAoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGQgYSBzeXN0ZW0gdG8gdGhlIGVuZ2luZSwgYW5kIHNldCBpdHMgcHJpb3JpdHkgZm9yIHRoZSBvcmRlciBpbiB3aGljaCB0aGVcbiAgICogc3lzdGVtcyBhcmUgdXBkYXRlZCBieSB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLlxuICAgKlxuICAgKiA8cD5UaGUgcHJpb3JpdHkgZGljdGF0ZXMgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzeXN0ZW1zIGFyZSB1cGRhdGVkIGJ5IHRoZSBlbmdpbmUgdXBkYXRlXG4gICAqIGxvb3AuIExvd2VyIG51bWJlcnMgZm9yIHByaW9yaXR5IGFyZSB1cGRhdGVkIGZpcnN0LiBpLmUuIGEgcHJpb3JpdHkgb2YgMSBpc1xuICAgKiB1cGRhdGVkIGJlZm9yZSBhIHByaW9yaXR5IG9mIDIuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBzeXN0ZW0gdG8gYWRkIHRvIHRoZSBlbmdpbmUuXG4gICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgZm9yIHVwZGF0aW5nIHRoZSBzeXN0ZW1zIGR1cmluZyB0aGUgZW5naW5lIGxvb3AuIEFcbiAgICogbG93ZXIgbnVtYmVyIG1lYW5zIHRoZSBzeXN0ZW0gaXMgdXBkYXRlZCBzb29uZXIuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuYWRkU3lzdGVtID0gZnVuY3Rpb24oc3lzdGVtLCBwcmlvcml0eSkge1xuICAgIHN5c3RlbS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHN5c3RlbS5hZGRUb0VuZ2luZSh0aGlzKTtcbiAgICB0aGlzLnN5c3RlbUxpc3QuYWRkKHN5c3RlbSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgdGhlIHN5c3RlbSBpbnN0YW5jZSBvZiBhIHBhcnRpY3VsYXIgdHlwZSBmcm9tIHdpdGhpbiB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBzeXN0ZW1cbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2Ugb2YgdGhlIHN5c3RlbSB0eXBlIHRoYXQgaXMgaW4gdGhlIGVuZ2luZSwgb3JcbiAgICogbnVsbCBpZiBubyBzeXN0ZW1zIG9mIHRoaXMgdHlwZSBhcmUgaW4gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHN5c3RlbUxpc3QuZ2V0KHR5cGUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGEgc3lzdGVtIGZyb20gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgc3lzdGVtIHRvIHJlbW92ZSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlU3lzdGVtID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgdGhpcy5zeXN0ZW1MaXN0LnJlbW92ZShzeXN0ZW0pO1xuICAgIHN5c3RlbS5yZW1vdmVGcm9tRW5naW5lKHRoaXMpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFsbCBzeXN0ZW1zIGZyb20gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVBbGxTeXN0ZW1zID0gZnVuY3Rpb24oKSB7XG4gICAgd2hpbGUgKHRoaXMuc3lzdGVtTGlzdC5oZWFkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZVN5c3RlbSh0aGlzLnN5c3RlbUxpc3QuaGVhZCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogVXBkYXRlIHRoZSBlbmdpbmUuIFRoaXMgY2F1c2VzIHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AgdG8gcnVuLCBjYWxsaW5nIHVwZGF0ZSBvbiBhbGwgdGhlXG4gICAqIHN5c3RlbXMgaW4gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogPHA+VGhlIHBhY2thZ2UgYXNoLnRpY2sgY29udGFpbnMgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGVcbiAgICogYSBzdGVhZHkgb3IgdmFyaWFibGUgdGljayB0aGF0IGNhbGxzIHRoaXMgdXBkYXRlIG1ldGhvZC48L3A+XG4gICAqXG4gICAqIEB0aW1lIFRoZSBkdXJhdGlvbiwgaW4gc2Vjb25kcywgb2YgdGhpcyB1cGRhdGUgc3RlcC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICB0aGlzLnVwZGF0aW5nID0gdHJ1ZTtcbiAgICBzeXN0ZW0gPSB0aGlzLnN5c3RlbUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICBzeXN0ZW0udXBkYXRlKHRpbWUpO1xuICAgICAgc3lzdGVtID0gc3lzdGVtLm5leHQ7XG4gICAgfVxuICAgIHRoaXMudXBkYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLmRpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIFNpZ25hbDIsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDIgPSBhc2guc2lnbmFscy5TaWduYWwyO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogQW4gZW50aXR5IGlzIGNvbXBvc2VkIGZyb20gY29tcG9uZW50cy4gQXMgc3VjaCwgaXQgaXMgZXNzZW50aWFsbHkgYSBjb2xsZWN0aW9uIG9iamVjdCBmb3IgY29tcG9uZW50cy5cbiAqIFNvbWV0aW1lcywgdGhlIGVudGl0aWVzIGluIGEgZ2FtZSB3aWxsIG1pcnJvciB0aGUgYWN0dWFsIGNoYXJhY3RlcnMgYW5kIG9iamVjdHMgaW4gdGhlIGdhbWUsIGJ1dCB0aGlzXG4gKiBpcyBub3QgbmVjZXNzYXJ5LlxuICpcbiAqIDxwPkNvbXBvbmVudHMgYXJlIHNpbXBsZSB2YWx1ZSBvYmplY3RzIHRoYXQgY29udGFpbiBkYXRhIHJlbGV2YW50IHRvIHRoZSBlbnRpdHkuIEVudGl0aWVzXG4gKiB3aXRoIHNpbWlsYXIgZnVuY3Rpb25hbGl0eSB3aWxsIGhhdmUgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGNvbXBvbmVudHMuIFNvIHdlIG1pZ2h0IGhhdmVcbiAqIGEgcG9zaXRpb24gY29tcG9uZW50PC9wPlxuICpcbiAqIDxwPjxjb2RlPmNsYXNzIFBvc2l0aW9uQ29tcG9uZW50XG4gKiB7XG4gKiAgIHB1YmxpYyB2YXIgeDpGbG9hdDtcbiAqICAgcHVibGljIHZhciB5OkZsb2F0O1xuICogfTwvY29kZT48L3A+XG4gKlxuICogPHA+QWxsIGVudGl0aWVzIHRoYXQgaGF2ZSBhIHBvc2l0aW9uIGluIHRoZSBnYW1lIHdvcmxkLCB3aWxsIGhhdmUgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gKiBwb3NpdGlvbiBjb21wb25lbnQuIFN5c3RlbXMgb3BlcmF0ZSBvbiBlbnRpdGllcyBiYXNlZCBvbiB0aGUgY29tcG9uZW50cyB0aGV5IGhhdmUuPC9wPlxuICovXG5cbmFzaC5jb3JlLkVudGl0eSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWVDb3VudDtcblxuICBuYW1lQ291bnQgPSAwO1xuXG5cbiAgLypcbiAgICogT3B0aW9uYWwsIGdpdmUgdGhlIGVudGl0eSBhIG5hbWUuIFRoaXMgY2FuIGhlbHAgd2l0aCBkZWJ1Z2dpbmcgYW5kIHdpdGggc2VyaWFsaXNpbmcgdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5fbmFtZSA9ICcnO1xuXG5cbiAgLypcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aGVuIGEgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogRGlzcGF0Y2hlZCB3aGVuIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHkgY2hhbmdlcy4gVXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBlbmdpbmUgdG8gdHJhY2sgZW50aXRpZXMgYmFzZWQgb24gdGhlaXIgbmFtZXMuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUubmFtZUNoYW5nZWQgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgRW50aXR5LnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBFbnRpdHkobmFtZSkge1xuICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgIG5hbWUgPSAnJztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAvKlxuICAgICAgICogQWxsIGVudGl0aWVzIGhhdmUgYSBuYW1lLiBJZiBubyBuYW1lIGlzIHNldCwgYSBkZWZhdWx0IG5hbWUgaXMgdXNlZC4gTmFtZXMgYXJlIHVzZWQgdG9cbiAgICAgICAqIGZldGNoIHNwZWNpZmljIGVudGl0aWVzIGZyb20gdGhlIGVuZ2luZSwgYW5kIGNhbiBhbHNvIGhlbHAgdG8gaWRlbnRpZnkgYW4gZW50aXR5IHdoZW4gZGVidWdnaW5nLlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXM7XG4gICAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBwcmV2aW91cyA9IHRoaXMuX25hbWU7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lQ2hhbmdlZC5kaXNwYXRjaCh0aGlzLCBwcmV2aW91cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jb21wb25lbnRBZGRlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZW1vdmVkID0gbmV3IFNpZ25hbDIoKTtcbiAgICB0aGlzLm5hbWVDaGFuZ2VkID0gbmV3IFNpZ25hbDIoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIl9lbnRpdHlcIiArICgrK25hbWVDb3VudCk7XG4gICAgfVxuICB9XG5cblxuICAvKlxuICAgKiBBZGQgYSBjb21wb25lbnQgdG8gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IG9iamVjdCB0byBhZGQuXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGUgY29tcG9uZW50XG4gICAqIGV4dGVuZHMgYW5vdGhlciBjb21wb25lbnQgY2xhc3MgYW5kIHlvdSB3YW50IHRoZSBmcmFtZXdvcmsgdG8gdHJlYXQgdGhlIGNvbXBvbmVudCBhcyBvZlxuICAgKiB0aGUgYmFzZSBjbGFzcyB0eXBlLiBJZiBub3Qgc2V0LCB0aGUgY2xhc3MgdHlwZSBpcyBkZXRlcm1pbmVkIGRpcmVjdGx5IGZyb20gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHJldHVybiBBIHJlZmVyZW5jZSB0byB0aGUgZW50aXR5LiBUaGlzIGVuYWJsZXMgdGhlIGNoYWluaW5nIG9mIGNhbGxzIHRvIGFkZCwgdG8gbWFrZVxuICAgKiBjcmVhdGluZyBhbmQgY29uZmlndXJpbmcgZW50aXRpZXMgY2xlYW5lci4gZS5nLlxuICAgKlxuICAgKiA8Y29kZT52YXIgZW50aXR5OkVudGl0eSA9IG5ldyBFbnRpdHkoKVxuICAgKiAgICAgLmFkZChuZXcgUG9zaXRpb24oMTAwLCAyMDApXG4gICAqICAgICAuYWRkKG5ldyBEaXNwbGF5KG5ldyBQbGF5ZXJDbGlwKCkpOzwvY29kZT5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb21wb25lbnQsIGNvbXBvbmVudENsYXNzKSB7XG4gICAgaWYgKGNvbXBvbmVudENsYXNzID09IG51bGwpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Q2xhc3MubmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudENsYXNzLm5hbWVdID0gY29tcG9uZW50O1xuICAgIHRoaXMuY29tcG9uZW50QWRkZWQuZGlzcGF0Y2godGhpcywgY29tcG9uZW50Q2xhc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHJlbW92ZWQuXG4gICAqIEByZXR1cm4gdGhlIGNvbXBvbmVudCwgb3IgbnVsbCBpZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGVudGl0eVxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgbmFtZTtcbiAgICBuYW1lID0gJ3N0cmluZycgPT09IHR5cGVvZiBjb21wb25lbnRDbGFzcyA/IGNvbXBvbmVudENsYXNzIDogY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgICBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbbmFtZV07XG4gICAgaWYgKGNvbXBvbmVudCAhPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIHRoaXMuY29tcG9uZW50c1tuYW1lXTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVtb3ZlZC5kaXNwYXRjaCh0aGlzLCBuYW1lKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGEgY29tcG9uZW50IGZyb20gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IHJlcXVlc3RlZC5cbiAgICogQHJldHVybiBUaGUgY29tcG9uZW50LCBvciBudWxsIGlmIG5vbmUgd2FzIGZvdW5kLlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRDbGFzcy5uYW1lXTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhbGwgY29tcG9uZW50cyBmcm9tIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEByZXR1cm4gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgb24gdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50LCBjb21wb25lbnRBcnJheSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgY29tcG9uZW50QXJyYXkgPSBbXTtcbiAgICBfcmVmID0gdGhpcy5jb21wb25lbnRzO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgY29tcG9uZW50ID0gX3JlZltfaV07XG4gICAgICBjb21wb25lbnRBcnJheS5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRBcnJheTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIERvZXMgdGhlIGVudGl0eSBoYXZlIGEgY29tcG9uZW50IG9mIGEgcGFydGljdWxhciB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQgc291Z2h0LlxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGVudGl0eSBoYXMgYSBjb21wb25lbnQgb2YgdGhlIHR5cGUsIGZhbHNlIGlmIG5vdC5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHJldHVybiBjb21wb25lbnRDbGFzcy5uYW1lIGluIHRoaXMuY29tcG9uZW50cztcbiAgfTtcblxuICByZXR1cm4gRW50aXR5O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogQW4gaW50ZXJuYWwgY2xhc3MgZm9yIGEgbGlua2VkIGxpc3Qgb2YgZW50aXRpZXMuIFVzZWQgaW5zaWRlIHRoZSBmcmFtZXdvcmsgZm9yXG4gKiBtYW5hZ2luZyB0aGUgZW50aXRpZXMuXG4gKi9cblxuYXNoLmNvcmUuRW50aXR5TGlzdCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRW50aXR5TGlzdCgpIHt9XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUuaGVhZCA9IG51bGw7XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gZW50aXR5O1xuICAgICAgZW50aXR5Lm5leHQgPSBlbnRpdHkucHJldmlvdXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IGVudGl0eTtcbiAgICAgIGVudGl0eS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIGVudGl0eS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMudGFpbCA9IGVudGl0eTtcbiAgICB9XG4gIH07XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IGVudGl0eSkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IGVudGl0eSkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgIH1cbiAgICBpZiAoZW50aXR5LnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHkucHJldmlvdXMubmV4dCA9IGVudGl0eS5uZXh0O1xuICAgIH1cbiAgICBpZiAoZW50aXR5Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIGVudGl0eS5uZXh0LnByZXZpb3VzID0gZW50aXR5LnByZXZpb3VzO1xuICAgIH1cbiAgfTtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZW50aXR5O1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIGVudGl0eSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgZW50aXR5LnByZXZpb3VzID0gbnVsbDtcbiAgICAgIGVudGl0eS5uZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5TGlzdDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X2xpc3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhlIGludGVyZmFjZSBmb3IgY2xhc3NlcyB0aGF0IGFyZSB1c2VkIHRvIG1hbmFnZSBOb2RlTGlzdHMgKHNldCBhcyB0aGUgZmFtaWx5Q2xhc3MgcHJvcGVydHlcbiAqIGluIHRoZSBFbmdpbmUgb2JqZWN0KS4gTW9zdCBkZXZlbG9wZXJzIGRvbid0IG5lZWQgdG8gdXNlIHRoaXMgc2luY2UgdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAqIGlzIHVzZWQgYnkgZGVmYXVsdCBhbmQgc3VpdHMgbW9zdCBuZWVkcy5cbiAqL1xuXG5hc2guY29yZS5GYW1pbHkgPSAoZnVuY3Rpb24oKSB7XG4gIEZhbWlseS5wcm90b3R5cGUubm9kZXMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgTm9kZUxpc3QgbWFuYWdlZCBieSB0aGlzIGNsYXNzLiBUaGlzIHNob3VsZCBiZSBhIHJlZmVyZW5jZSB0aGF0IHJlbWFpbnMgdmFsaWQgYWx3YXlzXG4gICAqIHNpbmNlIGl0IGlzIHJldGFpbmVkIGFuZCByZXVzZWQgYnkgU3lzdGVtcyB0aGF0IHVzZSB0aGUgbGlzdC4gaS5lLiBuZXZlciByZWNyZWF0ZSB0aGUgbGlzdCxcbiAgICogYWx3YXlzIG1vZGlmeSBpdCBpbiBwbGFjZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gRmFtaWx5KCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIG5vZGVMaXN0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgLypcbiAgICogQW4gZW50aXR5IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBlbmdpbmUuIEl0IG1heSBhbHJlYWR5IGhhdmUgY29tcG9uZW50cyBzbyB0ZXN0IHRoZSBlbnRpdHlcbiAgICogZm9yIGluY2x1c2lvbiBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0LlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLm5ld0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBbiBlbnRpdHkgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUuIElmIGl0J3MgaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQSBjb21wb25lbnQgaGFzIGJlZW4gYWRkZWQgdG8gYW4gZW50aXR5LiBUZXN0IHdoZXRoZXIgdGhlIGVudGl0eSdzIGluY2x1c2lvbiBpbiB0aGlzIGZhbWlseSdzXG4gICAqIE5vZGVMaXN0IHNob3VsZCBiZSBtb2RpZmllZC5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRBZGRlZFRvRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBIGNvbXBvbmVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW4gZW50aXR5LiBUZXN0IHdoZXRoZXIgdGhlIGVudGl0eSdzIGluY2x1c2lvbiBpbiB0aGlzIGZhbWlseSdzXG4gICAqIE5vZGVMaXN0IHNob3VsZCBiZSBtb2RpZmllZC5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkRnJvbUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogVGhlIGZhbWlseSBpcyBhYm91dCB0byBiZSBkaXNjYXJkZWQuIENsZWFuIHVwIGFsbCBwcm9wZXJ0aWVzIGFzIG5lY2Vzc2FyeS4gVXN1YWxseSwgeW91IHdpbGxcbiAgICogd2FudCB0byBlbXB0eSB0aGUgTm9kZUxpc3QgYXQgdGhpcyB0aW1lLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLmNsZWFuVXAgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG4gIHJldHVybiBGYW1pbHk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhbWlseS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guY29yZS5Ob2RlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBOb2RlKCkge31cblxuICBOb2RlLnByb3RvdHlwZS5lbnRpdHkgPSBudWxsO1xuXG4gIE5vZGUucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuICBOb2RlLnByb3RvdHlwZS5uZXh0ID0gbnVsbDtcblxuICByZXR1cm4gTm9kZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBTaWduYWwxLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwxID0gYXNoLnNpZ25hbHMuU2lnbmFsMTtcblxuXG4vKlxuICogQSBjb2xsZWN0aW9uIG9mIG5vZGVzLlxuICpcbiAqIDxwPlN5c3RlbXMgd2l0aGluIHRoZSBlbmdpbmUgYWNjZXNzIHRoZSBjb21wb25lbnRzIG9mIGVudGl0aWVzIHZpYSBOb2RlTGlzdHMuIEEgTm9kZUxpc3QgY29udGFpbnNcbiAqIGEgbm9kZSBmb3IgZWFjaCBFbnRpdHkgaW4gdGhlIGVuZ2luZSB0aGF0IGhhcyBhbGwgdGhlIGNvbXBvbmVudHMgcmVxdWlyZWQgYnkgdGhlIG5vZGUuIFRvIGl0ZXJhdGVcbiAqIG92ZXIgYSBOb2RlTGlzdCwgc3RhcnQgZnJvbSB0aGUgaGVhZCBhbmQgc3RlcCB0byB0aGUgbmV4dCBvbiBlYWNoIGxvb3AsIHVudGlsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogaXMgbnVsbC4gT3IganVzdCB1c2UgZm9yIGluIHN5bnRheC48L3A+XG4gKlxuICogPHA+Zm9yIChub2RlIGluIG5vZGVMaXN0KVxuICoge1xuICogICAvLyBkbyBzdHVmZlxuICogfTwvcD5cbiAqXG4gKiA8cD5JdCBpcyBzYWZlIHRvIHJlbW92ZSBpdGVtcyBmcm9tIGEgbm9kZWxpc3QgZHVyaW5nIHRoZSBsb29wLiBXaGVuIGEgTm9kZSBpcyByZW1vdmVkIGZvcm0gdGhlXG4gKiBOb2RlTGlzdCBpdCdzIHByZXZpb3VzIGFuZCBuZXh0IHByb3BlcnRpZXMgc3RpbGwgcG9pbnQgdG8gdGhlIG5vZGVzIHRoYXQgd2VyZSBiZWZvcmUgYW5kIGFmdGVyXG4gKiBpdCBpbiB0aGUgTm9kZUxpc3QganVzdCBiZWZvcmUgaXQgd2FzIHJlbW92ZWQuPC9wPlxuICovXG5cbmFzaC5jb3JlLk5vZGVMaXN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gIC8qXG4gICAqIFRoZSBmaXJzdCBpdGVtIGluIHRoZSBub2RlIGxpc3QsIG9yIG51bGwgaWYgdGhlIGxpc3QgY29udGFpbnMgbm8gbm9kZXMuXG4gICAqL1xuICBOb2RlTGlzdC5wcm90b3R5cGUuaGVhZCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGUgbGFzdCBpdGVtIGluIHRoZSBub2RlIGxpc3QsIG9yIG51bGwgaWYgdGhlIGxpc3QgY29udGFpbnMgbm8gbm9kZXMuXG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEEgc2lnbmFsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuZXZlciBhIG5vZGUgaXMgYWRkZWQgdG8gdGhlIG5vZGUgbGlzdC5cbiAgICpcbiAgICogPHA+VGhlIHNpZ25hbCB3aWxsIHBhc3MgYSBzaW5nbGUgcGFyYW1ldGVyIHRvIHRoZSBsaXN0ZW5lcnMgLSB0aGUgbm9kZSB0aGF0IHdhcyBhZGRlZC48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5ub2RlQWRkZWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQSBzaWduYWwgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW5ldmVyIGEgbm9kZSBpcyByZW1vdmVkIGZyb20gdGhlIG5vZGUgbGlzdC5cbiAgICpcbiAgICogPHA+VGhlIHNpZ25hbCB3aWxsIHBhc3MgYSBzaW5nbGUgcGFyYW1ldGVyIHRvIHRoZSBsaXN0ZW5lcnMgLSB0aGUgbm9kZSB0aGF0IHdhcyByZW1vdmVkLjwvcD5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLm5vZGVSZW1vdmVkID0gbnVsbDtcblxuICBmdW5jdGlvbiBOb2RlTGlzdCgpIHtcbiAgICB0aGlzLm5vZGVBZGRlZCA9IG5ldyBTaWduYWwxKCk7XG4gICAgdGhpcy5ub2RlUmVtb3ZlZCA9IG5ldyBTaWduYWwxKCk7XG4gIH1cblxuICBOb2RlTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICBub2RlLm5leHQgPSBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cbiAgICB0aGlzLm5vZGVBZGRlZC5kaXNwYXRjaChub2RlKTtcbiAgfTtcblxuICBOb2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgfVxuICAgIGlmIChub2RlLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgfVxuICAgIHRoaXMubm9kZVJlbW92ZWQuZGlzcGF0Y2gobm9kZSk7XG4gIH07XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMubm9kZVJlbW92ZWQuZGlzcGF0Y2gobm9kZSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cblxuICAvKlxuICAgKiB0cnVlIGlmIHRoZSBsaXN0IGlzIGVtcHR5LCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE5vZGVMaXN0LnByb3RvdHlwZSwge1xuICAgIGVtcHR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkID09PSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvKlxuICAgKiBTd2FwcyB0aGUgcG9zaXRpb25zIG9mIHR3byBub2RlcyBpbiB0aGUgbGlzdC4gVXNlZnVsIHdoZW4gc29ydGluZyBhIGxpc3QuXG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24obm9kZTEsIG5vZGUyKSB7XG4gICAgdmFyIHRlbXA7XG4gICAgaWYgKG5vZGUxLnByZXZpb3VzID09PSBub2RlMikge1xuICAgICAgbm9kZTEucHJldmlvdXMgPSBub2RlMi5wcmV2aW91cztcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gbm9kZTE7XG4gICAgICBub2RlMi5uZXh0ID0gbm9kZTEubmV4dDtcbiAgICAgIG5vZGUxLm5leHQgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKG5vZGUyLnByZXZpb3VzID09PSBub2RlMSkge1xuICAgICAgbm9kZTIucHJldmlvdXMgPSBub2RlMS5wcmV2aW91cztcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTI7XG4gICAgICBub2RlMS5uZXh0ID0gbm9kZTIubmV4dDtcbiAgICAgIG5vZGUyLm5leHQgPSBub2RlMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcCA9IG5vZGUxLnByZXZpb3VzO1xuICAgICAgbm9kZTEucHJldmlvdXMgPSBub2RlMi5wcmV2aW91cztcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gdGVtcDtcbiAgICAgIHRlbXAgPSBub2RlMS5uZXh0O1xuICAgICAgbm9kZTEubmV4dCA9IG5vZGUyLm5leHQ7XG4gICAgICBub2RlMi5uZXh0ID0gdGVtcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZTEpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGUyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkID09PSBub2RlMikge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUxKSB7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFpbCA9PT0gbm9kZTIpIHtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAobm9kZTEucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIG5vZGUxLnByZXZpb3VzLm5leHQgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKG5vZGUyLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBub2RlMi5wcmV2aW91cy5uZXh0ID0gbm9kZTI7XG4gICAgfVxuICAgIGlmIChub2RlMS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlMS5uZXh0LnByZXZpb3VzID0gbm9kZTE7XG4gICAgfVxuICAgIGlmIChub2RlMi5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlMi5uZXh0LnByZXZpb3VzID0gbm9kZTI7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUGVyZm9ybXMgYW4gaW5zZXJ0aW9uIHNvcnQgb24gdGhlIG5vZGUgbGlzdC4gSW4gZ2VuZXJhbCwgaW5zZXJ0aW9uIHNvcnQgaXMgdmVyeSBlZmZpY2llbnQgd2l0aCBzaG9ydCBsaXN0c1xuICAgKiBhbmQgd2l0aCBsaXN0cyB0aGF0IGFyZSBtb3N0bHkgc29ydGVkLCBidXQgaXMgaW5lZmZpY2llbnQgd2l0aCBsYXJnZSBsaXN0cyB0aGF0IGFyZSByYW5kb21seSBvcmRlcmVkLlxuICAgKlxuICAgKiA8cD5UaGUgc29ydCBmdW5jdGlvbiB0YWtlcyB0d28gbm9kZXMgYW5kIHJldHVybnMgYW4gSW50LjwvcD5cbiAgICpcbiAgICogPHA+PGNvZGU+ZnVuY3Rpb24gc29ydEZ1bmN0aW9uKCBub2RlMSA6IE1vY2tOb2RlLCBub2RlMiA6IE1vY2tOb2RlICkgOiBJbnQ8L2NvZGU+PC9wPlxuICAgKlxuICAgKiA8cD5JZiB0aGUgcmV0dXJuZWQgbnVtYmVyIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGUgZmlyc3Qgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBzZWNvbmQuIElmIGl0IGlzIGdyZWF0ZXJcbiAgICogdGhhbiB6ZXJvIHRoZSBzZWNvbmQgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBmaXJzdC4gSWYgaXQgaXMgemVybyB0aGUgb3JkZXIgb2YgdGhlIG5vZGVzIGRvZXNuJ3QgbWF0dGVyXG4gICAqIGFuZCB0aGUgb3JpZ2luYWwgb3JkZXIgd2lsbCBiZSByZXRhaW5lZC48L3A+XG4gICAqXG4gICAqIDxwPlRoaXMgaW5zZXJ0aW9uIHNvcnQgaW1wbGVtZW50YXRpb24gcnVucyBpbiBwbGFjZSBzbyBubyBvYmplY3RzIGFyZSBjcmVhdGVkIGR1cmluZyB0aGUgc29ydC48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5pbnNlcnRpb25Tb3J0ID0gZnVuY3Rpb24oc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIG5vZGUsIG90aGVyLCByZW1haW5zO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHRoaXMudGFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1haW5zID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgbm9kZSA9IHJlbWFpbnM7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlbWFpbnMgPSBub2RlLm5leHQ7XG4gICAgICBvdGhlciA9IG5vZGUucHJldmlvdXM7XG4gICAgICB3aGlsZSAob3RoZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHNvcnRGdW5jdGlvbihub2RlLCBvdGhlcikgPj0gMCkge1xuICAgICAgICAgIGlmIChub2RlICE9PSBvdGhlci5uZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLm5leHQgPSBvdGhlci5uZXh0O1xuICAgICAgICAgICAgbm9kZS5wcmV2aW91cyA9IG90aGVyO1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgICAgIG90aGVyLm5leHQgPSBub2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvdGhlciA9IG90aGVyLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG90aGVyID09PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSByZW1haW5zO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFBlcmZvcm1zIGEgbWVyZ2Ugc29ydCBvbiB0aGUgbm9kZSBsaXN0LiBJbiBnZW5lcmFsLCBtZXJnZSBzb3J0IGlzIG1vcmUgZWZmaWNpZW50IHRoYW4gaW5zZXJ0aW9uIHNvcnRcbiAgICogd2l0aCBsb25nIGxpc3RzIHRoYXQgYXJlIHZlcnkgdW5zb3J0ZWQuXG4gICAqXG4gICAqIDxwPlRoZSBzb3J0IGZ1bmN0aW9uIHRha2VzIHR3byBub2RlcyBhbmQgcmV0dXJucyBhbiBJbnQuPC9wPlxuICAgKlxuICAgKiA8cD48Y29kZT5mdW5jdGlvbiBzb3J0RnVuY3Rpb24oIG5vZGUxIDogTW9ja05vZGUsIG5vZGUyIDogTW9ja05vZGUgKSA6IEludDwvY29kZT48L3A+XG4gICAqXG4gICAqIDxwPklmIHRoZSByZXR1cm5lZCBudW1iZXIgaXMgbGVzcyB0aGFuIHplcm8sIHRoZSBmaXJzdCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIHNlY29uZC4gSWYgaXQgaXMgZ3JlYXRlclxuICAgKiB0aGFuIHplcm8gdGhlIHNlY29uZCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIGZpcnN0LiBJZiBpdCBpcyB6ZXJvIHRoZSBvcmRlciBvZiB0aGUgbm9kZXMgZG9lc24ndCBtYXR0ZXIuPC9wPlxuICAgKlxuICAgKiA8cD5UaGlzIG1lcmdlIHNvcnQgaW1wbGVtZW50YXRpb24gY3JlYXRlcyBhbmQgdXNlcyBhIHNpbmdsZSBWZWN0b3IgZHVyaW5nIHRoZSBzb3J0IG9wZXJhdGlvbi48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5tZXJnZVNvcnQgPSBmdW5jdGlvbihzb3J0RnVuY3Rpb24pIHtcbiAgICB2YXIgZW5kLCBsaXN0cywgbmV4dCwgc3RhcnQ7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gdGhpcy50YWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpc3RzID0gW107XG4gICAgc3RhcnQgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICAgIHdoaWxlIChlbmQubmV4dCAhPT0gbnVsbCAmJiBzb3J0RnVuY3Rpb24oZW5kLCBlbmQubmV4dCkgPD0gMCkge1xuICAgICAgICBlbmQgPSBlbmQubmV4dDtcbiAgICAgIH1cbiAgICAgIG5leHQgPSBlbmQubmV4dDtcbiAgICAgIHN0YXJ0LnByZXZpb3VzID0gZW5kLm5leHQgPSBudWxsO1xuICAgICAgbGlzdHMucHVzaChzdGFydCk7XG4gICAgICBzdGFydCA9IG5leHQ7XG4gICAgfVxuICAgIHdoaWxlIChsaXN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBsaXN0cy5wdXNoKHRoaXMubWVyZ2UobGlzdHMuc2hpZnQoKSwgbGlzdHMuc2hpZnQoKSwgc29ydEZ1bmN0aW9uKSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZCA9IGxpc3RzWzBdO1xuICAgIHdoaWxlICh0aGlzLnRhaWwubmV4dCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLm5leHQ7XG4gICAgfVxuICB9O1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKGhlYWQxLCBoZWFkMiwgc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIGhlYWQsIG5vZGU7XG4gICAgaWYgKHNvcnRGdW5jdGlvbihoZWFkMSwgaGVhZDIpIDw9IDApIHtcbiAgICAgIGhlYWQgPSBub2RlID0gaGVhZDE7XG4gICAgICBoZWFkMSA9IGhlYWQxLm5leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBub2RlID0gaGVhZDI7XG4gICAgICBoZWFkMiA9IGhlYWQyLm5leHQ7XG4gICAgfVxuICAgIHdoaWxlIChoZWFkMSAhPT0gbnVsbCAmJiBoZWFkMiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNvcnRGdW5jdGlvbihoZWFkMSwgaGVhZDIpIDw9IDApIHtcbiAgICAgICAgbm9kZS5uZXh0ID0gaGVhZDE7XG4gICAgICAgIGhlYWQxLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IGhlYWQxO1xuICAgICAgICBoZWFkMSA9IGhlYWQxLm5leHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm5leHQgPSBoZWFkMjtcbiAgICAgICAgaGVhZDIucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlID0gaGVhZDI7XG4gICAgICAgIGhlYWQyID0gaGVhZDIubmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhlYWQxICE9PSBudWxsKSB7XG4gICAgICBub2RlLm5leHQgPSBoZWFkMTtcbiAgICAgIGhlYWQxLnByZXZpb3VzID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5uZXh0ID0gaGVhZDI7XG4gICAgICBoZWFkMi5wcmV2aW91cyA9IG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xuICB9O1xuXG4gIHJldHVybiBOb2RlTGlzdDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgaW50ZXJuYWwgY2xhc3MgbWFpbnRhaW5zIGEgcG9vbCBvZiBkZWxldGVkIG5vZGVzIGZvciByZXVzZSBieSB0aGUgZnJhbWV3b3JrLiBUaGlzIHJlZHVjZXMgdGhlIG92ZXJoZWFkXG4gKiBmcm9tIG9iamVjdCBjcmVhdGlvbiBhbmQgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICpcbiAqIEJlY2F1c2Ugbm9kZXMgbWF5IGJlIGRlbGV0ZWQgZnJvbSBhIE5vZGVMaXN0IHdoaWxlIGluIHVzZSwgYnkgZGVsZXRpbmcgTm9kZXMgZnJvbSBhIE5vZGVMaXN0XG4gKiB3aGlsZSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgTm9kZUxpc3QsIHRoZSBwb29sIGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2Ygbm9kZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhlIHBvb2xcbiAqIGJ1dCBzaG91bGQgbm90IGJlIHJldXNlZCB5ZXQuIFRoZXkgYXJlIHRoZW4gcmVsZWFzZWQgaW50byB0aGUgcG9vbCBieSBjYWxsaW5nIHRoZSByZWxlYXNlQ2FjaGUgbWV0aG9kLlxuICovXG5cbmFzaC5jb3JlLk5vZGVQb29sID0gKGZ1bmN0aW9uKCkge1xuICBOb2RlUG9vbC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLm5vZGVDbGFzcyA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlVGFpbCA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNvbXBvbmVudHMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIHBvb2wgZm9yIHRoZSBnaXZlbiBub2RlIGNsYXNzLlxuICAgKi9cblxuICBmdW5jdGlvbiBOb2RlUG9vbChub2RlQ2xhc3MsIGNvbXBvbmVudHMpIHtcbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICB9XG5cblxuICAvKlxuICAgKiBGZXRjaGVzIGEgbm9kZSBmcm9tIHRoZSBwb29sLlxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMudGFpbCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5ub2RlQ2xhc3MuY29uc3RydWN0b3IoKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGEgbm9kZSB0byB0aGUgcG9vbC5cbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWU7XG4gICAgZm9yIChjb21wb25lbnROYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgbm9kZVtjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgfVxuICAgIG5vZGUuZW50aXR5ID0gbnVsbDtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy50YWlsID0gbm9kZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZHMgYSBub2RlIHRvIHRoZSBjYWNoZVxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMuY2FjaGVUYWlsO1xuICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbGVhc2VzIGFsbCBub2RlcyBmcm9tIHRoZSBjYWNoZSBpbnRvIHRoZSBwb29sXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5yZWxlYXNlQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAodGhpcy5jYWNoZVRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE5vZGVQb29sO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlX3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIGEgc3lzdGVtLlxuICpcbiAqIDxwPkEgc3lzdGVtIGlzIHBhcnQgb2YgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgZ2FtZS4gQWZ0ZXIgYSBzeXN0ZW0gaXMgYWRkZWQgdG8gdGhlIGVuZ2luZSwgaXRzXG4gKiB1cGRhdGUgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIG9uIGV2ZXJ5IGZyYW1lIG9mIHRoZSBlbmdpbmUuIFdoZW4gdGhlIHN5c3RlbSBpcyByZW1vdmVkIGZyb20gdGhlIGVuZ2luZSxcbiAqIHRoZSB1cGRhdGUgbWV0aG9kIGlzIG5vIGxvbmdlciBjYWxsZWQuPC9wPlxuICpcbiAqIDxwPlRoZSBhZ2dyZWdhdGUgb2YgYWxsIHN5c3RlbXMgaW4gdGhlIGVuZ2luZSBpcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgZ2FtZSwgd2l0aCB0aGUgdXBkYXRlXG4gKiBtZXRob2RzIG9mIHRob3NlIHN5c3RlbXMgY29sbGVjdGl2ZWx5IGNvbnN0aXR1dGluZyB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLiBTeXN0ZW1zIGdlbmVyYWxseSBvcGVyYXRlIG9uXG4gKiBub2RlIGxpc3RzIC0gY29sbGVjdGlvbnMgb2Ygbm9kZXMuIEVhY2ggbm9kZSBjb250YWlucyB0aGUgY29tcG9uZW50cyBmcm9tIGFuIGVudGl0eSBpbiB0aGUgZW5naW5lXG4gKiB0aGF0IG1hdGNoIHRoZSBub2RlLjwvcD5cbiAqL1xuXG5hc2guY29yZS5TeXN0ZW0gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuXG4gIC8qXG4gICAgKiBVc2VkIGludGVybmFsbHkgdG8gbWFuYWdlIHRoZSBsaXN0IG9mIHN5c3RlbXMgd2l0aGluIHRoZSBlbmdpbmUuIFRoZSBwcmV2aW91cyBzeXN0ZW0gaW4gdGhlIGxpc3QuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5IHRvIG1hbmFnZSB0aGUgbGlzdCBvZiBzeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lLiBUaGUgbmV4dCBzeXN0ZW0gaW4gdGhlIGxpc3QuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHkgdG8gaG9sZCB0aGUgcHJpb3JpdHkgb2YgdGhpcyBzeXN0ZW0gd2l0aGluIHRoZSBzeXN0ZW0gbGlzdC4gVGhpcyBpc1xuICAgKiB1c2VkIHRvIG9yZGVyIHRoZSBzeXN0ZW1zIHNvIHRoZXkgYXJlIHVwZGF0ZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHN5c3RlbSBpcyBhZGRlZCB0byB0aGUgZW5naW5lLCBiZWZvcmUgYW55IGNhbGxzIHRvIHRoZSB1cGRhdGUgbWV0aG9kLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgeW91ciBvd24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGVuZ2luZSBUaGUgZW5naW5lIHRoZSBzeXN0ZW0gd2FzIGFkZGVkIHRvLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7fTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBzeXN0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUsIGFmdGVyIGFsbCBjYWxscyB0byB0aGUgdXBkYXRlIG1ldGhvZC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbmdpbmUgVGhlIGVuZ2luZSB0aGUgc3lzdGVtIHdhcyByZW1vdmVkIGZyb20uXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge307XG5cblxuICAvKlxuICAgKiBBZnRlciB0aGUgc3lzdGVtIGlzIGFkZGVkIHRvIHRoZSBlbmdpbmUsIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBldmVyeSBmcmFtZSB1bnRpbCB0aGUgc3lzdGVtXG4gICAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgeW91ciBvd24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogPHA+SWYgeW91IG5lZWQgdG8gcGVyZm9ybSBhbiBhY3Rpb24gb3V0c2lkZSBvZiB0aGUgdXBkYXRlIGxvb3AgKGUuZy4geW91IG5lZWQgdG8gY2hhbmdlIHRoZVxuICAgKiBzeXN0ZW1zIGluIHRoZSBlbmdpbmUgYW5kIHlvdSBkb24ndCB3YW50IHRvIGRvIGl0IHdoaWxlIHRoZXkncmUgdXBkYXRpbmcpIGFkZCBhIGxpc3RlbmVyIHRvXG4gICAqIHRoZSBlbmdpbmUncyB1cGRhdGVDb21wbGV0ZSBzaWduYWwgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXBkYXRlIGxvb3AgY29tcGxldGVzLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIHRpbWUgVGhlIGR1cmF0aW9uLCBpbiBzZWNvbmRzLCBvZiB0aGUgZnJhbWUuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge307XG5cbiAgcmV0dXJuIFN5c3RlbTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFVzZWQgaW50ZXJuYWxseSwgdGhpcyBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgU3lzdGVtcyBmb3IgdXNlIGJ5IHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AuXG4gKi9cblxuYXNoLmNvcmUuU3lzdGVtTGlzdCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU3lzdGVtTGlzdCgpIHt9XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuaGVhZCA9IG51bGw7XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gc3lzdGVtO1xuICAgICAgc3lzdGVtLm5leHQgPSBzeXN0ZW0ucHJldmlvdXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy50YWlsO1xuICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG5vZGUucHJpb3JpdHkgPD0gc3lzdGVtLnByaW9yaXR5KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gc3lzdGVtO1xuICAgICAgICBzeXN0ZW0ucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICAgIHN5c3RlbS5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlsID0gc3lzdGVtO1xuICAgICAgfSBlbHNlIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHN5c3RlbS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICBzeXN0ZW0ucHJldmlvdXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBzeXN0ZW07XG4gICAgICAgIHRoaXMuaGVhZCA9IHN5c3RlbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN5c3RlbS5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICBzeXN0ZW0ucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBzeXN0ZW07XG4gICAgICAgIG5vZGUubmV4dCA9IHN5c3RlbTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gc3lzdGVtKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gc3lzdGVtKSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgfVxuICAgIGlmIChzeXN0ZW0ucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIHN5c3RlbS5wcmV2aW91cy5uZXh0ID0gc3lzdGVtLm5leHQ7XG4gICAgfVxuICAgIGlmIChzeXN0ZW0ubmV4dCAhPT0gbnVsbCkge1xuICAgICAgc3lzdGVtLm5leHQucHJldmlvdXMgPSBzeXN0ZW0ucHJldmlvdXM7XG4gICAgfVxuICB9O1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzeXN0ZW07XG4gICAgd2hpbGUgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgc3lzdGVtID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICBzeXN0ZW0ucHJldmlvdXMgPSBudWxsO1xuICAgICAgc3lzdGVtLm5leHQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9O1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgc3lzdGVtO1xuICAgIHN5c3RlbSA9IHRoaXMuc3lzdGVtTGlzdC5oZWFkO1xuICAgIHdoaWxlIChzeXN0ZW0pIHtcbiAgICAgIGlmIChzeXN0ZW0uY29uc3RydWN0b3IgPT09IHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHN5c3RlbTtcbiAgICAgIH1cbiAgICAgIHN5c3RlbSA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gU3lzdGVtTGlzdDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX2xpc3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gVGhlIGluc3RhbmNlXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSB0byByZXR1cm4gd2hlbmV2ZXIgYSBjb21wb25lbnQgaXMgcmVxdWVzdGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmZzbS5Db21wb25lbnRTaW5nbGV0b25Qcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyKHR5cGUpIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICB9XG5cbiAgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9zaW5nbGV0b25fcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmZzbS5Db21wb25lbnRUeXBlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudFR5cGVQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFR5cGVQcm92aWRlcih0eXBlKSB7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50VHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRUeXBlUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF90eXBlX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIucHJvdG90eXBlLl9jbG9zdXJlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjbG9zdXJlIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2hlbiBjYWxsZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIER5bmFtaWNDb21wb25lbnRQcm92aWRlcihjbG9zdXJlKSB7XG4gICAgdGhpcy5fY2xvc3VyZSA9IGNsb3N1cmU7XG5cbiAgICAvKlxuICAgICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAgICovXG4gIH1cblxuICBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9zdXJlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zdXJlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIER5bmFtaWNDb21wb25lbnRQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pY19jb21wb25lbnRfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgcmV0dXJucyByZXN1bHRzIG9mIGEgbWV0aG9kIGNhbGwuIFRoZSBtZXRob2RcbiAqIGlzIHBhc3NlZCB0byB0aGUgcHJvdmlkZXIgYXQgaW5pdGlhbGlzYXRpb24uXG4gKi9cblxuYXNoLmZzbS5EeW5hbWljU3lzdGVtUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24oKSB7fTtcblxuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIFN5c3RlbSBpbnN0YW5jZTtcbiAgICovXG5cbiAgZnVuY3Rpb24gRHluYW1pY1N5c3RlbVByb3ZpZGVyKG1ldGhvZCkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBtZXRob2QgdXNlZCB0byBjYWxsIHRoZSBTeXN0ZW0gaW5zdGFuY2VzXG4gICAqL1xuXG4gIER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0aG9kKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIHByaW9yaXR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRHluYW1pY1N5c3RlbVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEeW5hbWljU3lzdGVtUHJvdmlkZXIsIFN0YXRlU3lzdGVtTWFwcGluZywgU3lzdGVtSW5zdGFuY2VQcm92aWRlciwgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblN5c3RlbUluc3RhbmNlUHJvdmlkZXIgPSBhc2guZnNtLlN5c3RlbUluc3RhbmNlUHJvdmlkZXI7XG5cblN5c3RlbVNpbmdsZXRvblByb3ZpZGVyID0gYXNoLmZzbS5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlcjtcblxuRHluYW1pY1N5c3RlbVByb3ZpZGVyID0gYXNoLmZzbS5EeW5hbWljU3lzdGVtUHJvdmlkZXI7XG5cblN0YXRlU3lzdGVtTWFwcGluZyA9IGFzaC5mc20uU3RhdGVTeXN0ZW1NYXBwaW5nO1xuXG5cbi8qXG4gKiBSZXByZXNlbnRzIGEgc3RhdGUgZm9yIGEgU3lzdGVtU3RhdGVNYWNoaW5lLiBUaGUgc3RhdGUgY29udGFpbnMgYW55IG51bWJlciBvZiBTeXN0ZW1Qcm92aWRlcnMgd2hpY2hcbiAqIGFyZSB1c2VkIHRvIGFkZCBTeXN0ZW1zIHRvIHRoZSBFbmdpbmUgd2hlbiB0aGlzIHN0YXRlIGlzIGVudGVyZWQuXG4gKi9cblxuYXNoLmZzbS5FbmdpbmVTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLnByb3ZpZGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW5naW5lU3RhdGUoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSBbXTtcbiAgfVxuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNwZWNpZmljIFN5c3RlbSBpbnN0YW5jZS4gQVxuICAgKiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBTeXN0ZW0gaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IFN5c3RlbUluc3RhbmNlUHJvdmlkZXIoc3lzdGVtKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyKHR5cGUpKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBtZXRob2QgY2FsbC5cbiAgICogVGhlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGEgU3lzdGVtIGluc3RhbmNlLiBBIER5bmFtaWNTeXN0ZW1Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIFN5c3RlbSBpbnN0YW5jZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IER5bmFtaWNTeXN0ZW1Qcm92aWRlcihtZXRob2QpKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZHMgYW55IFN5c3RlbVByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB2YXIgbWFwcGluZztcbiAgICBtYXBwaW5nID0gbmV3IFN0YXRlU3lzdGVtTWFwcGluZyh0aGlzLCBwcm92aWRlcik7XG4gICAgdGhpcy5wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZVN0YXRlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmdpbmVfc3RhdGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgRW5naW5lU3RhdGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVuZ2luZVN0YXRlID0gYXNoLmZzbS5FbmdpbmVTdGF0ZTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoaXMgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciB0aGUgRW5naW5lLiBUaGUgc3RhdGUgbWFjaGluZSBtYW5hZ2VzIGEgc2V0IG9mIHN0YXRlcyxcbiAqIGVhY2ggb2Ygd2hpY2ggaGFzIGEgc2V0IG9mIFN5c3RlbSBwcm92aWRlcnMuIFdoZW4gdGhlIHN0YXRlIG1hY2hpbmUgY2hhbmdlcyB0aGUgc3RhdGUsIGl0IHJlbW92ZXNcbiAqIFN5c3RlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmV2aW91cyBzdGF0ZSBhbmQgYWRkcyBTeXN0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICovXG5cbmFzaC5mc20uRW5naW5lU3RhdGVNYWNoaW5lID0gKGZ1bmN0aW9uKCkge1xuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5zdGF0ZXMgPSBudWxsO1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3VycmVudFN0YXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yLiBDcmVhdGVzIGFuIFN5c3RlbVN0YXRlTWFjaGluZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gRW5naW5lU3RhdGVNYWNoaW5lKGVuZ2luZSkge1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgc3RhdGUgdG8gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEBwYXJhbSBzdGF0ZSBUaGUgc3RhdGUuXG4gICAqIEByZXR1cm4gVGhpcyBzdGF0ZSBtYWNoaW5lLCBzbyBtZXRob2RzIGNhbiBiZSBjaGFpbmVkLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmFkZFN0YXRlID0gZnVuY3Rpb24obmFtZSwgc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlIGEgbmV3IHN0YXRlIGluIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIG5ldyBzdGF0ZSAtIHVzZWQgdG8gaWRlbnRpZnkgaXQgbGF0ZXIgaW4gdGhlIGNoYW5nZVN0YXRlIG1ldGhvZCBjYWxsLlxuICAgKiBAcmV0dXJuIFRoZSBuZXcgRW50aXR5U3RhdGUgb2JqZWN0IHRoYXQgaXMgdGhlIHN0YXRlLiBUaGlzIHdpbGwgbmVlZCB0byBiZSBjb25maWd1cmVkIHdpdGhcbiAgICogdGhlIGFwcHJvcHJpYXRlIGNvbXBvbmVudCBwcm92aWRlcnMuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIHN0YXRlID0gbmV3IEVuZ2luZVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXNbbmFtZV0gPSBzdGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENoYW5nZSB0byBhIG5ldyBzdGF0ZS4gVGhlIFN5c3RlbXMgZnJvbSB0aGUgb2xkIHN0YXRlIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIFN5c3RlbXNcbiAgICogZm9yIHRoZSBuZXcgc3RhdGUgd2lsbCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0YXRlIHRvIGNoYW5nZSB0by5cbiAgICovXG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgZWFjaCwgaWQsIG5ld1N0YXRlLCBvdGhlciwgcHJvdmlkZXIsIHRvQWRkLCBfcmVmLCBfcmVmMTtcbiAgICBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVzW25hbWVdO1xuICAgIGlmIChuZXdTdGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbmdpbmUgc3RhdGUgXCIgKyBuYW1lICsgXCIgZG9lc24ndCBleGlzdFwiKTtcbiAgICB9XG4gICAgaWYgKG5ld1N0YXRlID09PSB0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b0FkZCA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgX3JlZiA9IG5ld1N0YXRlLnByb3ZpZGVycztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgcHJvdmlkZXIgPSBfcmVmW2VhY2hdO1xuICAgICAgaWQgPSBwcm92aWRlci5pZGVudGlmaWVyO1xuICAgICAgdG9BZGRbaWRdID0gcHJvdmlkZXI7XG4gICAgfVxuICAgIGlmIChjdXJyZW50U3RhdGUpIHtcbiAgICAgIF9yZWYxID0gdGhpcy5jdXJyZW50U3RhdGUucHJvdmlkZXJzO1xuICAgICAgZm9yIChlYWNoIGluIF9yZWYxKSB7XG4gICAgICAgIHByb3ZpZGVyID0gX3JlZjFbZWFjaF07XG4gICAgICAgIGlkID0gcHJvdmlkZXIuaWRlbnRpZmllcjtcbiAgICAgICAgb3RoZXIgPSB0b0FkZFtpZF07XG4gICAgICAgIGlmIChvdGhlcikge1xuICAgICAgICAgIGRlbGV0ZSB0b0FkZFtpZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlU3lzdGVtKHByb3ZpZGVyLmdldFN5c3RlbSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGVhY2ggaW4gdG9BZGQpIHtcbiAgICAgIHByb3ZpZGVyID0gdG9BZGRbZWFjaF07XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0ocHJvdmlkZXIuZ2V0U3lzdGVtKCksIHByb3ZpZGVyLnByaW9yaXR5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZVN0YXRlTWFjaGluZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lX3N0YXRlX21hY2hpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgU3RhdGVDb21wb25lbnRNYXBwaW5nLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TdGF0ZUNvbXBvbmVudE1hcHBpbmcgPSBhc2guZnNtLlN0YXRlQ29tcG9uZW50TWFwcGluZztcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFJlcHJlc2VudHMgYSBzdGF0ZSBmb3IgYW4gRW50aXR5U3RhdGVNYWNoaW5lLiBUaGUgc3RhdGUgY29udGFpbnMgYW55IG51bWJlciBvZiBDb21wb25lbnRQcm92aWRlcnMgd2hpY2hcbiAqIGFyZSB1c2VkIHRvIGFkZCBjb21wb25lbnRzIHRvIHRoZSBlbnRpdHkgd2hlbiB0aGlzIHN0YXRlIGlzIGVudGVyZWQuXG4gKi9cblxuYXNoLmZzbS5FbnRpdHlTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLnByb3ZpZGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW50aXR5U3RhdGUoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cblxuICAvKlxuICAgKiBBZGQgYSBuZXcgQ29tcG9uZW50TWFwcGluZyB0byB0aGlzIHN0YXRlLiBUaGUgbWFwcGluZyBpcyBhIHV0aWxpdHkgY2xhc3MgdGhhdCBpcyB1c2VkIHRvXG4gICAqIG1hcCBhIGNvbXBvbmVudCB0eXBlIHRvIHRoZSBwcm92aWRlciB0aGF0IHByb3ZpZGVzIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBiZSBtYXBwZWRcbiAgICogQHJldHVybiBUaGUgY29tcG9uZW50IG1hcHBpbmcgdG8gdXNlIHdoZW4gc2V0dGluZyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRlQ29tcG9uZW50TWFwcGluZyh0aGlzLCB0eXBlKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCB0aGUgQ29tcG9uZW50UHJvdmlkZXIgZm9yIGEgcGFydGljdWxhciBjb21wb25lbnQgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50IHRvIGdldCB0aGUgcHJvdmlkZXIgZm9yXG4gICAqIEByZXR1cm4gVGhlIENvbXBvbmVudFByb3ZpZGVyXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3R5cGVdO1xuICB9O1xuXG5cbiAgLypcbiAgICogVG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBzdGF0ZSBoYXMgYSBwcm92aWRlciBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50IHRvIGxvb2sgZm9yIGEgcHJvdmlkZXIgZm9yXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGVyZSBpcyBhIHByb3ZpZGVyIGZvciB0aGUgZ2l2ZW4gdHlwZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3R5cGVdICE9PSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHlTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X3N0YXRlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIEVudGl0eVN0YXRlLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5FbnRpdHlTdGF0ZSA9IGFzaC5mc20uRW50aXR5U3RhdGU7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGlzIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgYW4gZW50aXR5LiBUaGUgc3RhdGUgbWFjaGluZSBtYW5hZ2VzIGEgc2V0IG9mIHN0YXRlcyxcbiAqIGVhY2ggb2Ygd2hpY2ggaGFzIGEgc2V0IG9mIGNvbXBvbmVudCBwcm92aWRlcnMuIFdoZW4gdGhlIHN0YXRlIG1hY2hpbmUgY2hhbmdlcyB0aGUgc3RhdGUsIGl0IHJlbW92ZXNcbiAqIGNvbXBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmV2aW91cyBzdGF0ZSBhbmQgYWRkcyBjb21wb25lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICovXG5cbmFzaC5mc20uRW50aXR5U3RhdGVNYWNoaW5lID0gKGZ1bmN0aW9uKCkge1xuICBFbnRpdHlTdGF0ZU1hY2hpbmUucHJvdG90eXBlLnN0YXRlcyA9IG51bGw7XG5cblxuICAvKlxuICBcdCAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzdGF0ZSBtYWNoaW5lLlxuICAgKi9cblxuICBFbnRpdHlTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGUgZW50aXR5IHdob3NlIHN0YXRlIG1hY2hpbmUgdGhpcyBpc1xuICAgKi9cblxuICBFbnRpdHlTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmVudGl0eSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3Rvci4gQ3JlYXRlcyBhbiBFbnRpdHlTdGF0ZU1hY2hpbmUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEVudGl0eVN0YXRlTWFjaGluZShlbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICB0aGlzLnN0YXRlcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIENyZWF0ZSBhIG5ldyBzdGF0ZSBpbiB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBuZXcgc3RhdGUgLSB1c2VkIHRvIGlkZW50aWZ5IGl0IGxhdGVyIGluIHRoZSBjaGFuZ2VTdGF0ZSBtZXRob2QgY2FsbC5cbiAgICogQHJldHVybiBUaGUgbmV3IEVudGl0eVN0YXRlIG9iamVjdCB0aGF0IGlzIHRoZSBzdGF0ZS4gVGhpcyB3aWxsIG5lZWQgdG8gYmUgY29uZmlndXJlZCB3aXRoXG4gICAqIHRoZSBhcHByb3ByaWF0ZSBjb21wb25lbnQgcHJvdmlkZXJzLlxuICAgKi9cblxuICBFbnRpdHlTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBzdGF0ZSA9IG5ldyBFbnRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENoYW5nZSB0byBhIG5ldyBzdGF0ZS4gVGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgb2xkIHN0YXRlIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIGNvbXBvbmVudHNcbiAgICogZm9yIHRoZSBuZXcgc3RhdGUgd2lsbCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0YXRlIHRvIGNoYW5nZSB0by5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgY3VycmVudFN0YXRlLCBuZXdTdGF0ZSwgb3RoZXIsIHRvQWRkLCB0eXBlO1xuICAgIG5ld1N0YXRlID0gdGhpcy5zdGF0ZXNbbmFtZV07XG4gICAgaWYgKCFuZXdTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXR5IHN0YXRlIFwiICsgbmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChuZXdTdGF0ZSA9PT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICB0b0FkZCA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgICBmb3IgKHR5cGUgaW4gbmV3U3RhdGUucHJvdmlkZXJzKSB7XG4gICAgICAgIHRvQWRkW3R5cGVdID0gbmV3U3RhdGUucHJvdmlkZXJzW3R5cGVdO1xuICAgICAgfVxuICAgICAgZm9yICh0eXBlIGluIHRoaXMuY3VycmVudFN0YXRlLnByb3ZpZGVycykge1xuICAgICAgICBvdGhlciA9IHRvQWRkW3R5cGVdO1xuICAgICAgICBpZiAob3RoZXIgJiYgb3RoZXIuaWRlbnRpZmllciA9PT0gY3VycmVudFN0YXRlLnByb3ZpZGVyc1t0eXBlXS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgZGVsZXRlIHRvQWRkW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b0FkZCA9IG5ld1N0YXRlLnByb3ZpZGVycztcbiAgICB9XG4gICAgZm9yICh0eXBlIGluIHRvQWRkKSB7XG4gICAgICB0aGlzLmVudGl0eS5hZGQodG9BZGRbdHlwZV0uZ2V0Q29tcG9uZW50KCksIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eVN0YXRlTWFjaGluZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X3N0YXRlX21hY2hpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciwgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIsIENvbXBvbmVudFR5cGVQcm92aWRlciwgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5Db21wb25lbnRJbnN0YW5jZVByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRJbnN0YW5jZVByb3ZpZGVyO1xuXG5Db21wb25lbnRUeXBlUHJvdmlkZXIgPSBhc2guZnNtLkNvbXBvbmVudFR5cGVQcm92aWRlcjtcblxuQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgPSBhc2guZnNtLkNvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyO1xuXG5EeW5hbWljQ29tcG9uZW50UHJvdmlkZXIgPSBhc2guZnNtLkR5bmFtaWNDb21wb25lbnRQcm92aWRlcjtcblxuXG4vKlxuICogVXNlZCBieSB0aGUgRW50aXR5U3RhdGUgY2xhc3MgdG8gY3JlYXRlIHRoZSBtYXBwaW5ncyBvZiBjb21wb25lbnRzIHRvIHByb3ZpZGVycyB2aWEgYSBmbHVlbnQgaW50ZXJmYWNlLlxuICovXG5cbmFzaC5mc20uU3RhdGVDb21wb25lbnRNYXBwaW5nID0gKGZ1bmN0aW9uKCkge1xuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuY3JlYXRpbmdTdGF0ZSA9IG51bGw7XG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5wcm92aWRlciA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHksIHRoZSBjb25zdHJ1Y3RvciBjcmVhdGVzIGEgY29tcG9uZW50IG1hcHBpbmcuIFRoZSBjb25zdHJ1Y3RvclxuICAgKiBjcmVhdGVzIGEgQ29tcG9uZW50VHlwZVByb3ZpZGVyIGFzIHRoZSBkZWZhdWx0IG1hcHBpbmcsIHdoaWNoIHdpbGwgYmUgcmVwbGFjZWRcbiAgICogYnkgbW9yZSBzcGVjaWZpYyBtYXBwaW5ncyBpZiBvdGhlciBtZXRob2RzIGFyZSBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjcmVhdGluZ1N0YXRlIFRoZSBFbnRpdHlTdGF0ZSB0aGF0IHRoZSBtYXBwaW5nIHdpbGwgYmVsb25nIHRvXG4gICAqIEBwYXJhbSB0eXBlIFRoZSBjb21wb25lbnQgdHlwZSBmb3IgdGhlIG1hcHBpbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gU3RhdGVDb21wb25lbnRNYXBwaW5nKGNyZWF0aW5nU3RhdGUsIHR5cGUpIHtcbiAgICB0aGlzLmNyZWF0aW5nU3RhdGUgPSBjcmVhdGluZ1N0YXRlO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gICAgdGhpcy53aXRoVHlwZSh0eXBlKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhIHNwZWNpZmljIGNvbXBvbmVudCBpbnN0YW5jZS4gQVxuICAgKiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aEluc3RhbmNlID0gZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcihjb21wb25lbnQpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gbmV3IGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIENvbXBvbmVudFR5cGVQcm92aWRlclxuICAgKiBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkIGJ5IHRoaXMgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50VHlwZVByb3ZpZGVyKHR5cGUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSBpbnN0YW5jZSBpcyBub3QgY3JlYXRlZCB1bnRpbCBpdCBpcyBmaXJzdCByZXF1ZXN0ZWQuIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZVxuICAgKiBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcG9uZW50VHlwZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIodHlwZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhIG1ldGhvZCBjYWxsLiBBXG4gICAqIER5bmFtaWNDb21wb25lbnRQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyKG1ldGhvZCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhbnkgQ29tcG9uZW50UHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwcm92aWRlciBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoUHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogTWFwcyB0aHJvdWdoIHRvIHRoZSBhZGQgbWV0aG9kIG9mIHRoZSBFbnRpdHlTdGF0ZSB0aGF0IHRoaXMgbWFwcGluZyBiZWxvbmdzIHRvXG4gICAqIHNvIHRoYXQgYSBmbHVlbnQgaW50ZXJmYWNlIGNhbiBiZSB1c2VkIHdoZW4gY29uZmlndXJpbmcgZW50aXR5IHN0YXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50IHRvIGFkZCBhIG1hcHBpbmcgdG8gdGhlIHN0YXRlIGZvclxuICAgKiBAcmV0dXJuIFRoZSBuZXcgQ29tcG9uZW50TWFwcGluZyBmb3IgdGhhdCB0eXBlXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0aW5nU3RhdGUuYWRkKHR5cGUpO1xuICB9O1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuc2V0UHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGluZ1N0YXRlLnByb3ZpZGVyc1t0aGlzLmNvbXBvbmVudFR5cGVdID0gcHJvdmlkZXI7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRlQ29tcG9uZW50TWFwcGluZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGVfY29tcG9uZW50X21hcHBpbmcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVXNlZCBieSB0aGUgU3lzdGVtU3RhdGUgY2xhc3MgdG8gY3JlYXRlIHRoZSBtYXBwaW5ncyBvZiBTeXN0ZW1zIHRvIHByb3ZpZGVycyB2aWEgYSBmbHVlbnQgaW50ZXJmYWNlLlxuICovXG5cbmFzaC5mc20uU3RhdGVTeXN0ZW1NYXBwaW5nID0gKGZ1bmN0aW9uKCkge1xuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmNyZWF0aW5nU3RhdGUgPSBudWxsO1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUucHJvdmlkZXIgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5LCB0aGUgY29uc3RydWN0b3IgY3JlYXRlcyBhIGNvbXBvbmVudCBtYXBwaW5nLiBUaGUgY29uc3RydWN0b3JcbiAgICogY3JlYXRlcyBhIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyIGFzIHRoZSBkZWZhdWx0IG1hcHBpbmcsIHdoaWNoIHdpbGwgYmUgcmVwbGFjZWRcbiAgICogYnkgbW9yZSBzcGVjaWZpYyBtYXBwaW5ncyBpZiBvdGhlciBtZXRob2RzIGFyZSBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjcmVhdGluZ1N0YXRlIFRoZSBTeXN0ZW1TdGF0ZSB0aGF0IHRoZSBtYXBwaW5nIHdpbGwgYmVsb25nIHRvXG4gICAqIEBwYXJhbSB0eXBlIFRoZSBTeXN0ZW0gdHlwZSBmb3IgdGhlIG1hcHBpbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gU3RhdGVTeXN0ZW1NYXBwaW5nKGNyZWF0aW5nU3RhdGUsIHByb3ZpZGVyKSB7XG4gICAgdGhpcy5jcmVhdGluZ1N0YXRlID0gY3JlYXRpbmdTdGF0ZTtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFwcGxpZXMgdGhlIHByaW9yaXR5IHRvIHRoZSBwcm92aWRlciB0aGF0IHRoZSBTeXN0ZW0gd2lsbCBiZS5cbiAgICpcbiAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUud2l0aFByaW9yaXR5ID0gZnVuY3Rpb24ocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByb3ZpZGVyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc3BlY2lmaWMgU3lzdGVtIGluc3RhbmNlLiBBXG4gICAqIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIFN5c3RlbSBpbnN0YW5jZSB0byB1c2UgZm9yIHRoZSBtYXBwaW5nXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkSW5zdGFuY2Uoc3lzdGVtKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSBpbnN0YW5jZSBpcyBub3QgY3JlYXRlZCB1bnRpbCBpdCBpcyBmaXJzdCByZXF1ZXN0ZWQuIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZVxuICAgKiBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLiBJZiBvbWl0dGVkLCB0aGUgdHlwZSBvZiB0aGVcbiAgICogbWFwcGluZyBpcyB1c2VkLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkU2luZ2xldG9uKHR5cGUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIG1ldGhvZCBjYWxsLlxuICAgKiBUaGUgbWV0aG9kIHNob3VsZCByZXR1cm4gYSBTeXN0ZW0gaW5zdGFuY2UuIEEgRHluYW1pY1N5c3RlbVByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gcHJvdmlkZSB0aGUgU3lzdGVtIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkTWV0aG9kKG1ldGhvZCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBNYXBzIHRocm91Z2ggdG8gdGhlIGFkZFByb3ZpZGVyIG1ldGhvZCBvZiB0aGUgU3lzdGVtU3RhdGUgdGhhdCB0aGlzIG1hcHBpbmcgYmVsb25ncyB0b1xuICAgKiBzbyB0aGF0IGEgZmx1ZW50IGludGVyZmFjZSBjYW4gYmUgdXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGVudGl0eSBzdGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBwcm92aWRlciBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gY3JlYXRpbmdTdGF0ZS5hZGRQcm92aWRlcihwcm92aWRlcik7XG4gIH07XG5cblxuICAvKlxuICAgKi9cblxuICByZXR1cm4gU3RhdGVTeXN0ZW1NYXBwaW5nO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZV9zeXN0ZW1fbWFwcGluZy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIFN5c3RlbSBwcm92aWRlciBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LiBUaGUgc3lzdGVtXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uU3lzdGVtSW5zdGFuY2VQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgU3lzdGVtSW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gcmV0dXJuIHdoZW5ldmVyIGEgU3lzdGVtIGlzIHJlcXVlc3RlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gU3lzdGVtSW5zdGFuY2VQcm92aWRlcihpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtXG4gICAqL1xuXG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKlxuICAgICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN5c3RlbUluc3RhbmNlUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIFN5c3RlbSBwcm92aWRlciBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtLiBUaGUgaW5zdGFuY2VcbiAqIGlzIGNyZWF0ZWQgd2hlbiBmaXJzdCByZXF1aXJlZCBhbmQgaXMgb2YgdGhlIHR5cGUgcGFzc2VkIGluIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuXG5hc2guZnNtLlN5c3RlbVNpbmdsZXRvblByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuc3lzdGVtUHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBTeXN0ZW0gaW5zdGFuY2VcbiAgICovXG5cbiAgZnVuY3Rpb24gU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIodHlwZSkge1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIFN5c3RlbSBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICBcdFx0ICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgc2luZ2xlXG4gICAgXHRcdCAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHJldHVybiBUaGUgc2luZ2xlIGluc3RhbmNlXG4gICAgICovXG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3lzdGVtKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIEEgbm9kZSBpbiB0aGUgbGlzdCBvZiBsaXN0ZW5lcnMgaW4gYSBzaWduYWwuXG4gKi9cblxuYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMaXN0ZW5lck5vZGUoKSB7fVxuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5saXN0ZW5lciA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5vbmNlID0gZmFsc2U7XG5cbiAgcmV0dXJuIExpc3RlbmVyTm9kZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdGVuZXJfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMaXN0ZW5lck5vZGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkxpc3RlbmVyTm9kZSA9IGFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZTtcblxuXG4vKlxuICogVGhpcyBpbnRlcm5hbCBjbGFzcyBtYWludGFpbnMgYSBwb29sIG9mIGRlbGV0ZWQgbGlzdGVuZXIgbm9kZXMgZm9yIHJldXNlIGJ5IGZyYW1ld29yay4gVGhpcyByZWR1Y2VzXG4gKiB0aGUgb3ZlcmhlYWQgZnJvbSBvYmplY3QgY3JlYXRpb24gYW5kIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqL1xuXG5hc2guc2lnbmFscy5MaXN0ZW5lck5vZGVQb29sID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMaXN0ZW5lck5vZGVQb29sKCkge31cblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5jYWNoZVRhaWwgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IExpc3RlbmVyTm9kZSgpO1xuICAgIH1cbiAgfTtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUubGlzdGVuZXIgPSBudWxsO1xuICAgIG5vZGUub25jZSA9IGZhbHNlO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICB0aGlzLnRhaWwgPSBub2RlO1xuICB9O1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUubGlzdGVuZXIgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGU7XG4gIH07XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUucmVsZWFzZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuY2FjaGVUYWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMaXN0ZW5lck5vZGVQb29sO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0ZW5lcl9ub2RlX3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwwID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMCwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwwKCkge1xuICAgIHJldHVybiBTaWduYWwwLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCk7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMDtcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwxID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwxKCkge1xuICAgIHJldHVybiBTaWduYWwxLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigkMSkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDE7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwxLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMiA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDIsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMigpIHtcbiAgICByZXR1cm4gU2lnbmFsMi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEsICQyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigkMSwgJDIpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDI7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMyA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDMsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMygpIHtcbiAgICByZXR1cm4gU2lnbmFsMy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDMucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEsICQyLCAkMykge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEsICQyLCAkMyk7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMztcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgTGlzdGVuZXJOb2RlUG9vbCwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuTGlzdGVuZXJOb2RlUG9vbCA9IGFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZVBvb2w7XG5cbmFzaC5zaWduYWxzLlNpZ25hbEJhc2UgPSAoZnVuY3Rpb24oKSB7XG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLm51bUxpc3RlbmVycyA9IDA7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUubGlzdGVuZXJOb2RlUG9vbCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudG9BZGRIZWFkID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS50b0FkZFRhaWwgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmRpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gU2lnbmFsQmFzZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wgPSBuZXcgTGlzdGVuZXJOb2RlUG9vbCgpO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gMDtcbiAgfVxuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnN0YXJ0RGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5lbmREaXNwYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy50b0FkZEhlYWQgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSB0aGlzLnRvQWRkSGVhZDtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgfVxuICAgICAgdGhpcy50b0FkZEhlYWQgPSBudWxsO1xuICAgICAgdGhpcy50b0FkZFRhaWwgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wucmVsZWFzZUNhY2hlKCk7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRvQWRkSGVhZDtcbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLm5vZGVFeGlzdHMgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0aGlzLmdldE5vZGUobGlzdGVuZXIpICE9PSBudWxsO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMubm9kZUV4aXN0cyhsaXN0ZW5lcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZSA9IHRoaXMubGlzdGVuZXJOb2RlUG9vbC5nZXQoKTtcbiAgICBub2RlLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZE9uY2UgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLm5vZGVFeGlzdHMobGlzdGVuZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUgPSB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZ2V0KCk7XG4gICAgbm9kZS5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIG5vZGUub25jZSA9IHRydWU7XG4gICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKHRoaXMuZGlzcGF0Y2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLnRvQWRkSGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvQWRkSGVhZCA9IHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50b0FkZFRhaWw7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMuZ2V0Tm9kZShsaXN0ZW5lcik7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvQWRkSGVhZCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLnRvQWRkSGVhZCA9IHRoaXMudG9BZGRIZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b0FkZFRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy50b0FkZFRhaWwgPSB0aGlzLnRvQWRkVGFpbC5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5jYWNoZShub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICB9XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgdGhpcy5saXN0ZW5lck5vZGVQb29sLmRpc3Bvc2Uobm9kZSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgdGhpcy50b0FkZEhlYWQgPSBudWxsO1xuICAgIHRoaXMudG9BZGRUYWlsID0gbnVsbDtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbEJhc2U7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbF9iYXNlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDEsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU2lnbmFsMSA9IGFzaC5zaWduYWxzLlNpZ25hbDE7XG5cblxuLypcbiAqIFVzZXMgdGhlIGVudGVyIGZyYW1lIGV2ZW50IHRvIHByb3ZpZGUgYSBmcmFtZSB0aWNrIHdoZXJlIHRoZSBmcmFtZSBkdXJhdGlvbiBpcyB0aGUgdGltZSBzaW5jZSB0aGUgcHJldmlvdXMgZnJhbWUuXG4gKiBUaGVyZSBpcyBhIG1heGltdW0gZnJhbWUgdGltZSBwYXJhbWV0ZXIgaW4gdGhlIGNvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gbGltaXRcbiAqIHRoZSBsb25nZXN0IHBlcmlvZCBhIGZyYW1lIGNhbiBiZS5cbiAqL1xuXG5hc2gudGljay5GcmFtZVRpY2tQcm92aWRlciA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEZyYW1lVGlja1Byb3ZpZGVyLCBfc3VwZXIpO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5kaXNwbGF5T2JqZWN0ID0gbnVsbDtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUucHJldmlvdXNUaW1lID0gMDtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUubWF4aW11bUZyYW1lVGltZSA9IDA7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLmlzUGxheWluZyA9IGZhbHNlO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5yZXF1ZXN0ID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEFwcGxpZXMgYSB0aW1lIGFkanVzdGVtZW50IGZhY3RvciB0byB0aGUgdGljaywgc28geW91IGNhbiBzbG93IGRvd24gb3Igc3BlZWQgdXAgdGhlIGVudGlyZSBlbmdpbmUuXG4gICAqIFRoZSB1cGRhdGUgdGljayB0aW1lIGlzIG11bHRpcGxpZWQgYnkgdGhpcyB2YWx1ZSwgc28gYSB2YWx1ZSBvZiAxIHdpbGwgcnVuIHRoZSBlbmdpbmUgYXQgdGhlIG5vcm1hbCByYXRlLlxuICAgKi9cblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUudGltZUFkanVzdG1lbnQgPSAxO1xuXG4gIGZ1bmN0aW9uIEZyYW1lVGlja1Byb3ZpZGVyKGRpc3BsYXlPYmplY3QsIG1heGltdW1GcmFtZVRpbWUpIHtcbiAgICB0aGlzLmRpc3BsYXlPYmplY3QgPSBkaXNwbGF5T2JqZWN0O1xuICAgIHRoaXMubWF4aW11bUZyYW1lVGltZSA9IG1heGltdW1GcmFtZVRpbWU7XG4gICAgdGhpcy5kaXNwYXRjaFRpY2sgPSBfX2JpbmQodGhpcy5kaXNwYXRjaFRpY2ssIHRoaXMpO1xuICAgIEZyYW1lVGlja1Byb3ZpZGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgcGxheWluZzoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQbGF5aW5nO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZGlzcGF0Y2hUaWNrKTtcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gIH07XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0KTtcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICB9O1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5kaXNwYXRjaFRpY2sgPSBmdW5jdGlvbih0aW1lc3RhbXApIHtcbiAgICB2YXIgZnJhbWVUaW1lLCB0ZW1wO1xuICAgIGlmICh0aW1lc3RhbXAgPT0gbnVsbCkge1xuICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy5kaXNwbGF5T2JqZWN0LmJlZ2luKCk7XG4gICAgfVxuICAgIHRlbXAgPSB0aGlzLnByZXZpb3VzVGltZSB8fCB0aW1lc3RhbXA7XG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aW1lc3RhbXA7XG4gICAgZnJhbWVUaW1lID0gKHRpbWVzdGFtcCAtIHRlbXApICogMC4wMDE7XG4gICAgdGhpcy5kaXNwYXRjaChmcmFtZVRpbWUpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRpc3BhdGNoVGljayk7XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy5kaXNwbGF5T2JqZWN0LmVuZCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRnJhbWVUaWNrUHJvdmlkZXI7XG5cbn0pKFNpZ25hbDEpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFtZV90aWNrX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIGFzaCxcbiAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogQW4gb2JqZWN0IHBvb2wgZm9yIHJlLXVzaW5nIGNvbXBvbmVudHMuIFRoaXMgaXMgbm90IGludGVncmF0ZWQgaW4gdG8gQXNoIGJ1dCBpcyB1c2VkIGRpZXJlY3RseSBieVxuICogdGhlIGRldmVsb3Blci4gSXQgZXhwZWN0cyBjb21wb25lbnRzIHRvIG5vdCByZXF1aXJlIGFueSBwYXJhbWV0ZXJzIGluIHRoZWlyIGNvbnN0cnVjdG9yLlxuICpcbiAqIDxwPkZldGNoIGFuIG9iamVjdCBmcm9tIHRoZSBwb29sIHdpdGg8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5nZXQoIENvbXBvbmVudENsYXNzICk7PC9wPlxuICpcbiAqIDxwPklmIHRoZSBwb29sIGNvbnRhaW5zIGFuIG9iamVjdCBvZiB0aGUgcmVxdWlyZWQgdHlwZSwgaXQgd2lsbCBiZSByZXR1cm5lZC4gSWYgaXQgZG9lcyBub3QsIGEgbmV3IG9iamVjdFxuICogd2lsbCBiZSBjcmVhdGVkIGFuZCByZXR1cm5lZC48L3A+XG4gKlxuICogPHA+VGhlIG9iamVjdCByZXR1cm5lZCBtYXkgaGF2ZSBwcm9wZXJ0aWVzIHNldCBvbiBpdCBmcm9tIHRoZSB0aW1lIGl0IHdhcyBwcmV2aW91c2x5IHVzZWQsIHNvIGFsbCBwcm9wZXJ0aWVzXG4gKiBzaG91bGQgYmUgcmVzZXQgaW4gdGhlIG9iamVjdCBvbmNlIGl0IGlzIHJlY2VpdmVkLjwvcD5cbiAqXG4gKiA8cD5BZGQgYW4gb2JqZWN0IHRvIHRoZSBwb29sIHdpdGg8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5kaXNwb3NlKCBjb21wb25lbnQgKTs8L3A+XG4gKlxuICogPHA+WW91IHdpbGwgdXN1YWxseSB3YW50IHRvIGRvIHRoaXMgd2hlbiByZW1vdmluZyBhIGNvbXBvbmVudCBmcm9tIGFuIGVudGl0eS4gVGhlIHJlbW92ZSBtZXRob2Qgb24gdGhlIGVudGl0eVxuICogcmV0dXJucyB0aGUgY29tcG9uZW50IHRoYXQgd2FzIHJlbW92ZWQsIHNvIHRoaXMgY2FuIGJlIGRvbmUgaW4gb25lIGxpbmUgb2YgY29kZSBsaWtlIHRoaXM8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5kaXNwb3NlKCBlbnRpdHkucmVtb3ZlKCBjb21wb25lbnQgKSApOzwvcD5cbiAqL1xuXG5hc2gudG9vbHMuQ29tcG9uZW50UG9vbCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGdldFBvb2wsIHBvb2xzO1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFBvb2woKSB7fVxuXG4gIHBvb2xzID0gbmV3IERpY3Rpb25hcnkoKTtcblxuICBnZXRQb29sID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAoKF9yZWYgPSBjb21wb25lbnRDbGFzcy5uYW1lLCBfX2luZGV4T2YuY2FsbChwb29scywgX3JlZikgPj0gMCkpIHtcbiAgICAgIHJldHVybiBwb29sc1tjb21wb25lbnRDbGFzcy5uYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBvb2xzW2NvbXBvbmVudENsYXNzLm5hbWVdID0gW107XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFuIG9iamVjdCBmcm9tIHRoZSBwb29sLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIHR5cGUgb2YgY29tcG9uZW50IHdhbnRlZC5cbiAgICogQHJldHVybiBUaGUgY29tcG9uZW50LlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmdldCA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHBvb2w7XG4gICAgcG9vbCA9IGdldFBvb2woY29tcG9uZW50Q2xhc3MpO1xuICAgIGlmIChwb29sLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwb29sLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IGNvbXBvbmVudENsYXNzKCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmV0dXJuIGFuIG9iamVjdCB0byB0aGUgcG9vbCBmb3IgcmV1c2UuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXR1cm4gdG8gdGhlIHBvb2wuXG4gICAqL1xuXG4gIENvbXBvbmVudFBvb2wuZGlzcG9zZSA9IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIHZhciBwb29sLCB0eXBlO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHR5cGUgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgICBwb29sID0gZ2V0UG9vbCh0eXBlKTtcbiAgICAgIHBvb2wucHVzaChjb21wb25lbnQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIERpc3Bvc2Ugb2YgYWxsIHBvb2xlZCByZXNvdXJjZXMsIGZyZWVpbmcgdGhlbSBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBvb2xzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50UG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRW5naW5lLCBOb2RlLCBOb2RlTGlzdCwgU3lzdGVtLCBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVuZ2luZSA9IGFzaC5jb3JlLkVuZ2luZTtcblxuTm9kZSA9IGFzaC5jb3JlLk5vZGU7XG5cbk5vZGVMaXN0ID0gYXNoLmNvcmUuTm9kZUxpc3Q7XG5cblN5c3RlbSA9IGFzaC5jb3JlLlN5c3RlbTtcblxuXG4vKlxuICogQSB1c2VmdWwgY2xhc3MgZm9yIHN5c3RlbXMgd2hpY2ggc2ltcGx5IGl0ZXJhdGUgb3ZlciBhIHNldCBvZiBub2RlcywgcGVyZm9ybWluZyB0aGUgc2FtZSBhY3Rpb24gb24gZWFjaCBub2RlLiBUaGlzXG4gKiBjbGFzcyByZW1vdmVzIHRoZSBuZWVkIGZvciBhIGxvdCBvZiBib2lsZXJwbGF0ZSBjb2RlIGluIHN1Y2ggc3lzdGVtcy4gRXh0ZW5kIHRoaXMgY2xhc3MgYW5kIHBhc3MgdGhlIG5vZGUgdHlwZSBhbmRcbiAqIGEgbm9kZSB1cGRhdGUgbWV0aG9kIGludG8gdGhlIGNvbnN0cnVjdG9yLiBUaGUgbm9kZSB1cGRhdGUgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIG5vZGUgb24gdGhlIHVwZGF0ZSBjeWNsZVxuICogd2l0aCB0aGUgbm9kZSBpbnN0YW5jZSBhbmQgdGhlIGZyYW1lIHRpbWUgYXMgcGFyYW1ldGVycy4gZS5nLlxuICpcbiAqIDxjb2RlPnBhY2thZ2U7XG4gKiBjbGFzcyBNeVN5c3RlbSBleHRlbmRzIExpc3RJdGVyYXRpbmdTeXN0ZW08TXlOb2RlPlxuICoge1xuICogICAgIHB1YmxpYyBmdW5jdGlvbiBuZXcoKVxuICogICAgIHtcbiAqICAgICAgICAgc3VwZXIoTXlOb2RlLCB1cGRhdGVOb2RlKTtcbiAqICAgICB9XG4gKlxuICogICAgIHByaXZhdGUgZnVuY3Rpb24gdXBkYXRlTm9kZShub2RlOk15Tm9kZSwgdGltZTpGbG9hdCk6Vm9pZFxuICogICAgIHtcbiAqICAgICAgICAgLy8gcHJvY2VzcyB0aGUgbm9kZSBoZXJlXG4gKiAgICAgfVxuICogfVxuICogPC9jb2RlPlxuICovXG5cbmFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTGlzdEl0ZXJhdGluZ1N5c3RlbSwgX3N1cGVyKTtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlTGlzdCA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZUNsYXNzID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlVXBkYXRlRnVuY3Rpb24gPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVBZGRlZEZ1bmN0aW9uID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBMaXN0SXRlcmF0aW5nU3lzdGVtKG5vZGVDbGFzcywgbm9kZVVwZGF0ZUZ1bmN0aW9uLCBub2RlQWRkZWRGdW5jdGlvbiwgbm9kZVJlbW92ZWRGdW5jdGlvbikge1xuICAgIGlmIChub2RlQWRkZWRGdW5jdGlvbiA9PSBudWxsKSB7XG4gICAgICBub2RlQWRkZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChub2RlUmVtb3ZlZEZ1bmN0aW9uID09IG51bGwpIHtcbiAgICAgIG5vZGVSZW1vdmVkRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLm5vZGVVcGRhdGVGdW5jdGlvbiA9IG5vZGVVcGRhdGVGdW5jdGlvbjtcbiAgICB0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uID0gbm9kZUFkZGVkRnVuY3Rpb247XG4gICAgdGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbm9kZVJlbW92ZWRGdW5jdGlvbjtcbiAgfVxuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5ub2RlTGlzdCA9IGVuZ2luZS5nZXROb2RlTGlzdCh0aGlzLm5vZGVDbGFzcyk7XG4gICAgaWYgKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLm5vZGVMaXN0LmhlYWQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlQWRkZWQuYWRkKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVSZW1vdmVkLmFkZCh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgaWYgKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZUFkZGVkLnJlbW92ZSh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlUmVtb3ZlZC5yZW1vdmUodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlTGlzdCA9IG51bGw7XG4gIH07XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVMaXN0LmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIHRoaXMubm9kZVVwZGF0ZUZ1bmN0aW9uKG5vZGUsIHRpbWUpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIExpc3RJdGVyYXRpbmdTeXN0ZW07XG5cbn0pKFN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RfaXRlcmF0aW5nX3N5c3RlbS5qcy5tYXBcbiIsIlxuLypcblxuICAgXyAgICAgICBfXG4gIC9fXFwgIF9fX3wgfF9fXG4gLy9fXFxcXC8gX198ICdfIFxcXG4vICBfICBcXF9fIFxcIHwgfCB8XG5cXF8vIFxcXy9fX18vX3wgfF98XG5cbiAgICAgICAgICAgICAgX18gIF9fXG4gICAgX19fIF9fXyAgLyBffC8gX3wgX19fICBfX19cbiAgIC8gX18vIF8gXFx8IHxffCB8XyAvIF8gXFwvIF8gXFxcbiAgfCAoX3wgKF8pIHwgIF98ICBffCAgX18vICBfXy9cbiAoXylfX19cXF9fXy98X3wgfF98ICBcXF9fX3xcXF9fX3xcblxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ1Y2UgRGF2aWRzb24gJmx0O2RhcmtvdmVybG9yZG9mZGF0YUBnbWFpbC5jb20mZ3Q7XG5cbkF1dGhvcjogUmljaGFyZCBMb3JkXG5Db3B5cmlnaHQgKGMpIFJpY2hhcmQgTG9yZCAyMDExLTIwMTJcbmh0dHA6Ly93d3cucmljaGFyZGxvcmQubmV0XG5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbidTb2Z0d2FyZScpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzaCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYXNoKCkge31cblxuICByZXR1cm4gYXNoO1xuXG59KSgpO1xuXG5hc2guc2lnbmFscyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2lnbmFscygpIHt9XG5cbiAgcmV0dXJuIHNpZ25hbHM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvbGlzdGVuZXJfbm9kZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGVfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDEnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMycpO1xuXG5hc2guY29yZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY29yZSgpIHt9XG5cbiAgcmV0dXJuIGNvcmU7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5X2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9saXN0Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9wb29sJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtX2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9mYW1pbHknKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9jb21wb25lbnRfbWF0Y2hpbmdfZmFtaWx5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW5naW5lJyk7XG5cbmFzaC5mc20gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGZzbSgpIHt9XG5cbiAgcmV0dXJuIGZzbTtcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2NvbXBvbmVudF9pbnN0YW5jZV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3R5cGVfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2R5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW5naW5lX3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbmdpbmVfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW50aXR5X3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbnRpdHlfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vc3RhdGVfY29tcG9uZW50X21hcHBpbmcnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zeXN0ZW1faW5zdGFuY2VfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N5c3RlbV9zaW5nbGV0b25fcHJvdmlkZXInKTtcblxuYXNoLnRpY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRpY2soKSB7fVxuXG4gIHJldHVybiB0aWNrO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90aWNrL2ZyYW1lX3RpY2tfcHJvdmlkZXInKTtcblxuYXNoLnRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB0b29scygpIHt9XG5cbiAgcmV0dXJuIHRvb2xzO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9jb21wb25lbnRfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0nKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXX0=
