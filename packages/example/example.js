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
    var stats;
    stats = null;
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
    y = l.height;
    this.graphic.fillText(s, x, 20);
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
    y = l.height;
    this.graphic.fillText(s, x, 20);
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

  WaitForStartView.prototype.click = null;

  function WaitForStartView(graphic) {
    this.graphic = graphic;
    this.click = new Signal0();
    this.gameOver = this.createGameOver;
    this.clickToStart = this.createClickToStart;
    this.graphic.canvas.addEventListener('click', (function(_this) {
      return function(event) {
        return _this.click.dispatch();
      };
    })(this));
    this.draw();
  }

  WaitForStartView.prototype.createGameOver = function() {
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 32px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    this.graphic.textAlign = 'center';
    this.graphic.fillText('ASTEROIDS', 200, 175);
    this.graphic.fill();
    this.graphic.restore();
  };

  WaitForStartView.prototype.createClickToStart = function() {
    this.graphic.save();
    this.graphic.beginPath();
    this.graphic.font = 'bold 18px Helvetica';
    this.graphic.fillStyle = '#FFFFFF';
    this.graphic.textAlign = 'center';
    this.graphic.fillText('CLICK TO START', 200, 225);
    this.graphic.fill();
    this.graphic.restore();
  };

  WaitForStartView.prototype.draw = function() {
    this.gameOver();
    this.clickToStart();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvZXhhbXBsZS9pbmRleC5qcyIsInRtcC9leGFtcGxlL3NyYy9hc3Rlcm9pZHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hbmltYXRpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hc3Rlcm9pZC5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvYnVsbGV0LmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGVhdGhfdGhyb2VzLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGlzcGxheS5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2dhbWVfc3RhdGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW4uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW5fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9odWQuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb25fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9waHlzaWNzLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvcG9zaXRpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9zcGFjZXNoaXAuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy93YWl0X2Zvcl9zdGFydC5qcyIsInRtcC9leGFtcGxlL3NyYy9lbnRpdHlfY3JlYXRvci5qcyIsInRtcC9leGFtcGxlL3NyYy9nYW1lX2NvbmZpZy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9hc3Rlcm9pZF9kZWF0aF92aWV3LmpzIiwidG1wL2V4YW1wbGUvc3JjL2dyYXBoaWNzL2FzdGVyb2lkX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvYnVsbGV0X3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvaHVkX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvcG9pbnQuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvc3BhY2VzaGlwX2RlYXRoX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvc3BhY2VzaGlwX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3Mvd2FpdF9mb3Jfc3RhcnRfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9pbnB1dC9rZXlfcG9sbC5qcyIsInRtcC9leGFtcGxlL3NyYy9tYWluLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2FuaW1hdGlvbl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2FzdGVyb2lkX2NvbGxpc2lvbl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2F1ZGlvX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYnVsbGV0X2FnZV9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2J1bGxldF9jb2xsaXNpb25fbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9kZWF0aF90aHJvZXNfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9nYW1lX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvZ3VuX2NvbnRyb2xfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9odWRfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9tb3Rpb25fY29udHJvbF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL21vdmVtZW50X25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvcGh5c2ljc19ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL3JlbmRlcl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL3NwYWNlc2hpcF9jb2xsaXNpb25fbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9zcGFjZXNoaXBfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy93YWl0X2Zvcl9zdGFydF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvYW5pbWF0aW9uX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2F1ZGlvX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2J1bGxldF9hZ2Vfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvY29sbGlzaW9uX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2RlYXRoX3Rocm9lc19zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9nYW1lX21hbmFnZXIuanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9ndW5fY29udHJvbF9zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9odWRfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvbW90aW9uX2NvbnRyb2xfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvbW92ZW1lbnRfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvcGh5c2ljc19zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9yZW5kZXJfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvc3lzdGVtX3ByaW9yaXRpZXMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy93YWl0X2Zvcl9zdGFydF9zeXN0ZW0uanMiLCJ0bXAvbGliL2FzaC9jb3JlL2NvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2VuZ2luZS5qcyIsInRtcC9saWIvYXNoL2NvcmUvZW50aXR5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9lbnRpdHlfbGlzdC5qcyIsInRtcC9saWIvYXNoL2NvcmUvZmFtaWx5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlLmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlX2xpc3QuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGVfcG9vbC5qcyIsInRtcC9saWIvYXNoL2NvcmUvc3lzdGVtLmpzIiwidG1wL2xpYi9hc2gvY29yZS9zeXN0ZW1fbGlzdC5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX2NvbXBvbmVudF9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbmdpbmVfc3RhdGUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW50aXR5X3N0YXRlLmpzIiwidG1wL2xpYi9hc2gvZnNtL2VudGl0eV9zdGF0ZV9tYWNoaW5lLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlX3Bvb2wuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDAuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDEuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDIuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDMuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlLmpzIiwidG1wL2xpYi9hc2gvdGljay9mcmFtZV90aWNrX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvdG9vbHMvY29tcG9uZW50X3Bvb2wuanMiLCJ0bXAvbGliL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0uanMiLCJ0bXAvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBleGFtcGxlKCkge31cblxuICByZXR1cm4gZXhhbXBsZTtcblxufSkoKTtcblxuZXhhbXBsZS5pbnB1dCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gaW5wdXQoKSB7fVxuXG4gIHJldHVybiBpbnB1dDtcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvaW5wdXQva2V5X3BvbGwnKTtcblxuZXhhbXBsZS5ncmFwaGljcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gZ3JhcGhpY3MoKSB7fVxuXG4gIHJldHVybiBncmFwaGljcztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvZ3JhcGhpY3MvcG9pbnQnKTtcblxucmVxdWlyZSgnLi9zcmMvZ3JhcGhpY3MvYXN0ZXJvaWRfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9hc3Rlcm9pZF9kZWF0aF92aWV3Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL2J1bGxldF92aWV3Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL2h1ZF92aWV3Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL3NwYWNlc2hpcF9kZWF0aF92aWV3Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL3NwYWNlc2hpcF92aWV3Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL3dhaXRfZm9yX3N0YXJ0X3ZpZXcnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjb21wb25lbnRzKCkge31cblxuICByZXR1cm4gY29tcG9uZW50cztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb24nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9hc3Rlcm9pZCcpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2F1ZGlvJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvYnVsbGV0Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZGVhdGhfdGhyb2VzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheScpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2dhbWVfc3RhdGUnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9ndW4nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9ndW5fY29udHJvbHMnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9odWQnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9tb3Rpb24nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9tb3Rpb25fY29udHJvbHMnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9waHlzaWNzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvcG9zaXRpb24nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9zcGFjZXNoaXAnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy93YWl0X2Zvcl9zdGFydCcpO1xuXG5leGFtcGxlLm5vZGVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBub2RlcygpIHt9XG5cbiAgcmV0dXJuIG5vZGVzO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9hbmltYXRpb25fbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9hc3Rlcm9pZF9jb2xsaXNpb25fbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9hdWRpb19ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2J1bGxldF9hZ2Vfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9idWxsZXRfY29sbGlzaW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvZGVhdGhfdGhyb2VzX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvZ2FtZV9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2d1bl9jb250cm9sX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvaHVkX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvbW90aW9uX2NvbnRyb2xfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9tb3ZlbWVudF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL3BoeXNpY3Nfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9yZW5kZXJfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9zcGFjZXNoaXBfY29sbGlzaW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvc3BhY2VzaGlwX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvd2FpdF9mb3Jfc3RhcnRfbm9kZScpO1xuXG5leGFtcGxlLnN5c3RlbXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHN5c3RlbXMoKSB7fVxuXG4gIHJldHVybiBzeXN0ZW1zO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2FuaW1hdGlvbl9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9hdWRpb19zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9idWxsZXRfYWdlX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2NvbGxpc2lvbl9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9kZWF0aF90aHJvZXNfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvZ2FtZV9tYW5hZ2VyJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvZ3VuX2NvbnRyb2xfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvaHVkX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL21vdGlvbl9jb250cm9sX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL21vdmVtZW50X3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL3BoeXNpY3Nfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvcmVuZGVyX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL3N5c3RlbV9wcmlvcml0aWVzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvd2FpdF9mb3Jfc3RhcnRfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2VudGl0eV9jcmVhdG9yJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dhbWVfY29uZmlnJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2FzdGVyb2lkcycpO1xuXG5yZXF1aXJlKCcuL3NyYy9tYWluJyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFuaW1hdGlvblN5c3RlbSwgQXVkaW9TeXN0ZW0sIEJ1bGxldEFnZVN5c3RlbSwgQ29sbGlzaW9uU3lzdGVtLCBEZWF0aFRocm9lc1N5c3RlbSwgRW50aXR5Q3JlYXRvciwgR2FtZUNvbmZpZywgR2FtZU1hbmFnZXIsIEdhbWVTdGF0ZSwgR3VuQ29udHJvbFN5c3RlbSwgSHVkU3lzdGVtLCBLZXlQb2xsLCBNb3Rpb25Db250cm9sU3lzdGVtLCBNb3ZlbWVudFN5c3RlbSwgUGh5c2ljc1N5c3RlbSwgUmVuZGVyU3lzdGVtLCBTeXN0ZW1Qcmlvcml0aWVzLCBXYWl0Rm9yU3RhcnRTeXN0ZW0sIGFzaCwgYjJWZWMyLCBiMldvcmxkLCBleGFtcGxlO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUnKTtcblxuQW5pbWF0aW9uU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLkFuaW1hdGlvblN5c3RlbTtcblxuQXVkaW9TeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuQXVkaW9TeXN0ZW07XG5cbkJ1bGxldEFnZVN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5CdWxsZXRBZ2VTeXN0ZW07XG5cbkNvbGxpc2lvblN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5Db2xsaXNpb25TeXN0ZW07XG5cbkRlYXRoVGhyb2VzU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLkRlYXRoVGhyb2VzU3lzdGVtO1xuXG5HYW1lTWFuYWdlciA9IGV4YW1wbGUuc3lzdGVtcy5HYW1lTWFuYWdlcjtcblxuR3VuQ29udHJvbFN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5HdW5Db250cm9sU3lzdGVtO1xuXG5IdWRTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuSHVkU3lzdGVtO1xuXG5Nb3Rpb25Db250cm9sU3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLk1vdGlvbkNvbnRyb2xTeXN0ZW07XG5cbk1vdmVtZW50U3lzdGVtID0gZXhhbXBsZS5zeXN0ZW1zLk1vdmVtZW50U3lzdGVtO1xuXG5SZW5kZXJTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuUmVuZGVyU3lzdGVtO1xuXG5TeXN0ZW1Qcmlvcml0aWVzID0gZXhhbXBsZS5zeXN0ZW1zLlN5c3RlbVByaW9yaXRpZXM7XG5cbldhaXRGb3JTdGFydFN5c3RlbSA9IGV4YW1wbGUuc3lzdGVtcy5XYWl0Rm9yU3RhcnRTeXN0ZW07XG5cblBoeXNpY3NTeXN0ZW0gPSBleGFtcGxlLnN5c3RlbXMuUGh5c2ljc1N5c3RlbTtcblxuR2FtZVN0YXRlID0gZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZTtcblxuRW50aXR5Q3JlYXRvciA9IGV4YW1wbGUuRW50aXR5Q3JlYXRvcjtcblxuR2FtZUNvbmZpZyA9IGV4YW1wbGUuR2FtZUNvbmZpZztcblxuS2V5UG9sbCA9IGV4YW1wbGUuaW5wdXQuS2V5UG9sbDtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5iMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZDtcblxuZXhhbXBsZS5Bc3Rlcm9pZHMgPSAoZnVuY3Rpb24oKSB7XG4gIEFzdGVyb2lkcy5wcm90b3R5cGUuY29udGFpbmVyID0gbnVsbDtcblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS50aWNrUHJvdmlkZXIgPSBudWxsO1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5rZXlQb2xsID0gbnVsbDtcblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLmNvbmZpZyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gQXN0ZXJvaWRzKGNvbnRhaW5lciwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGFyZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndvcmxkID0gbmV3IGIyV29ybGQobmV3IGIyVmVjMigwLCAwKSwgdHJ1ZSk7XG4gICAgdGhpcy5lbmdpbmUgPSBuZXcgYXNoLmNvcmUuRW5naW5lKCk7XG4gICAgdGhpcy5jcmVhdG9yID0gbmV3IEVudGl0eUNyZWF0b3IodGhpcy5lbmdpbmUsIHRoaXMuY29udGFpbmVyLCB0aGlzLndvcmxkKTtcbiAgICB0aGlzLmtleVBvbGwgPSBuZXcgS2V5UG9sbCh3aW5kb3cpO1xuICAgIHRoaXMuY29uZmlnID0gbmV3IEdhbWVDb25maWcoKTtcbiAgICB0aGlzLmNvbmZpZy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jb25maWcud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IFBoeXNpY3NTeXN0ZW0odGhpcy53b3JsZCksIFN5c3RlbVByaW9yaXRpZXMucHJlVXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IFdhaXRGb3JTdGFydFN5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnByZVVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBHYW1lTWFuYWdlcih0aGlzLmNyZWF0b3IsIHRoaXMuY29uZmlnKSwgU3lzdGVtUHJpb3JpdGllcy5wcmVVcGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgTW90aW9uQ29udHJvbFN5c3RlbSh0aGlzLmtleVBvbGwpLCBTeXN0ZW1Qcmlvcml0aWVzLnVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBHdW5Db250cm9sU3lzdGVtKHRoaXMua2V5UG9sbCwgdGhpcy5jcmVhdG9yKSwgU3lzdGVtUHJpb3JpdGllcy51cGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgQnVsbGV0QWdlU3lzdGVtKHRoaXMuY3JlYXRvciksIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IERlYXRoVGhyb2VzU3lzdGVtKHRoaXMuY3JlYXRvciksIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IE1vdmVtZW50U3lzdGVtKHRoaXMuY29uZmlnKSwgU3lzdGVtUHJpb3JpdGllcy5tb3ZlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IENvbGxpc2lvblN5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlc29sdmVDb2xsaXNpb25zKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IEFuaW1hdGlvblN5c3RlbSgpLCBTeXN0ZW1Qcmlvcml0aWVzLmFuaW1hdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgSHVkU3lzdGVtKCksIFN5c3RlbVByaW9yaXRpZXMuYW5pbWF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBSZW5kZXJTeXN0ZW0odGhpcy5jb250YWluZXIpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlbmRlcik7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBBdWRpb1N5c3RlbSgpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlbmRlcik7XG4gICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVdhaXRGb3JDbGljaygpO1xuICAgIHRoaXMuY3JlYXRvci5jcmVhdGVHYW1lKCk7XG4gIH07XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGF0cztcbiAgICBzdGF0cyA9IG51bGw7XG4gICAgdGhpcy50aWNrUHJvdmlkZXIgPSBuZXcgYXNoLnRpY2suRnJhbWVUaWNrUHJvdmlkZXIoc3RhdHMpO1xuICAgIHRoaXMudGlja1Byb3ZpZGVyLmFkZCh0aGlzLmVuZ2luZS51cGRhdGUpO1xuICAgIHRoaXMudGlja1Byb3ZpZGVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgcmV0dXJuIEFzdGVyb2lkcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN0ZXJvaWRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5BbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIEFuaW1hdGlvbi5wcm90b3R5cGUuYW5pbWF0aW9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBBbmltYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gIH1cblxuICByZXR1cm4gQW5pbWF0aW9uO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb24uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkFzdGVyb2lkID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBc3Rlcm9pZCgpIHt9XG5cbiAgcmV0dXJuIEFzdGVyb2lkO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuQXVkaW8gPSAoZnVuY3Rpb24oKSB7XG4gIEF1ZGlvLnByb3RvdHlwZS50b1BsYXkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvKCkge1xuICAgIHRoaXMudG9QbGF5ID0gW107XG4gIH1cblxuICBBdWRpby5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgcmV0dXJuIHRoaXMudG9QbGF5LnB1c2goc291bmQpO1xuICB9O1xuXG4gIHJldHVybiBBdWRpbztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW8uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkJ1bGxldCA9IChmdW5jdGlvbigpIHtcbiAgQnVsbGV0LnByb3RvdHlwZS5saWZlUmVtYWluaW5nID0gMDtcblxuICBmdW5jdGlvbiBCdWxsZXQobGlmZVJlbWFpbmluZykge1xuICAgIHRoaXMubGlmZVJlbWFpbmluZyA9IGxpZmVSZW1haW5pbmc7XG4gIH1cblxuICByZXR1cm4gQnVsbGV0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgQ29sbGlzaW9uLnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIGZ1bmN0aW9uIENvbGxpc2lvbihyYWRpdXMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgfVxuXG4gIHJldHVybiBDb2xsaXNpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxpc2lvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuRGVhdGhUaHJvZXMgPSAoZnVuY3Rpb24oKSB7XG4gIERlYXRoVGhyb2VzLnByb3RvdHlwZS5jb3VudGRvd24gPSAwO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzKGR1cmF0aW9uKSB7XG4gICAgdGhpcy5jb3VudGRvd24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBEZWF0aFRocm9lcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVhdGhfdGhyb2VzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5EaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICBEaXNwbGF5LnByb3RvdHlwZS5ncmFwaGljID0gMDtcblxuICBmdW5jdGlvbiBEaXNwbGF5KGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICB9XG5cbiAgcmV0dXJuIERpc3BsYXk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2FtZVN0YXRlKCkge31cblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxldmVsID0gMDtcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmhpdHMgPSAwO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUucGxheWluZyA9IGZhbHNlO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUuc2V0Rm9yU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIEdhbWVTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQb2ludCwgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuUG9pbnQgPSBleGFtcGxlLmdyYXBoaWNzLlBvaW50O1xuXG5leGFtcGxlLmNvbXBvbmVudHMuR3VuID0gKGZ1bmN0aW9uKCkge1xuICBHdW4ucHJvdG90eXBlLnNob290aW5nID0gZmFsc2U7XG5cbiAgR3VuLnByb3RvdHlwZS5vZmZzZXRGcm9tUGFyZW50ID0gbnVsbDtcblxuICBHdW4ucHJvdG90eXBlLnRpbWVTaW5jZUxhc3RTaG90ID0gMDtcblxuICBHdW4ucHJvdG90eXBlLm9mZnNldEZyb21QYXJlbnQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEd1bihvZmZzZXRYLCBvZmZzZXRZLCBtaW5pbXVtU2hvdEludGVydmFsLCBidWxsZXRMaWZldGltZSkge1xuICAgIHRoaXMubWluaW11bVNob3RJbnRlcnZhbCA9IG1pbmltdW1TaG90SW50ZXJ2YWw7XG4gICAgdGhpcy5idWxsZXRMaWZldGltZSA9IGJ1bGxldExpZmV0aW1lO1xuICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9mZnNldEZyb21QYXJlbnQgPSBudWxsO1xuICAgIHRoaXMudGltZVNpbmNlTGFzdFNob3QgPSAwO1xuICAgIHRoaXMub2Zmc2V0RnJvbVBhcmVudCA9IG5ldyBQb2ludChvZmZzZXRYLCBvZmZzZXRZKTtcbiAgfVxuXG4gIHJldHVybiBHdW47XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1bi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuR3VuQ29udHJvbHMgPSAoZnVuY3Rpb24oKSB7XG4gIEd1bkNvbnRyb2xzLnByb3RvdHlwZS50cmlnZ2VyID0gMDtcblxuICBmdW5jdGlvbiBHdW5Db250cm9scyh0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgfVxuXG4gIHJldHVybiBHdW5Db250cm9scztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VuX2NvbnRyb2xzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5IdWQgPSAoZnVuY3Rpb24oKSB7XG4gIEh1ZC5wcm90b3R5cGUudmlldyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gSHVkKHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG5cbiAgcmV0dXJuIEh1ZDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFBvaW50LCBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Qb2ludCA9IGV4YW1wbGUuZ3JhcGhpY3MuUG9pbnQ7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb24gPSAoZnVuY3Rpb24oKSB7XG4gIE1vdGlvbi5wcm90b3R5cGUudmVsb2NpdHkgPSBudWxsO1xuXG4gIE1vdGlvbi5wcm90b3R5cGUuYW5ndWxhclZlbG9jaXR5ID0gMDtcblxuICBNb3Rpb24ucHJvdG90eXBlLmRhbXBpbmcgPSAwO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSB7XG4gICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgPSBhbmd1bGFyVmVsb2NpdHk7XG4gICAgdGhpcy5kYW1waW5nID0gZGFtcGluZztcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFBvaW50KHZlbG9jaXR5WCwgdmVsb2NpdHlZKTtcbiAgfVxuXG4gIHJldHVybiBNb3Rpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuTW90aW9uQ29udHJvbHMgPSAoZnVuY3Rpb24oKSB7XG4gIE1vdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5sZWZ0ID0gMDtcblxuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUucmlnaHQgPSAwO1xuXG4gIE1vdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5hY2NlbGVyYXRlID0gMDtcblxuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUuYWNjZWxlcmF0aW9uUmF0ZSA9IDA7XG5cbiAgTW90aW9uQ29udHJvbHMucHJvdG90eXBlLnJvdGF0aW9uUmF0ZSA9IDA7XG5cbiAgZnVuY3Rpb24gTW90aW9uQ29udHJvbHMobGVmdCwgcmlnaHQsIGFjY2VsZXJhdGUsIGFjY2VsZXJhdGlvblJhdGUsIHJvdGF0aW9uUmF0ZSkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGFjY2VsZXJhdGU7XG4gICAgdGhpcy5hY2NlbGVyYXRpb25SYXRlID0gYWNjZWxlcmF0aW9uUmF0ZTtcbiAgICB0aGlzLnJvdGF0aW9uUmF0ZSA9IHJvdGF0aW9uUmF0ZTtcbiAgfVxuXG4gIHJldHVybiBNb3Rpb25Db250cm9scztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW90aW9uX2NvbnRyb2xzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuY29tcG9uZW50cy5QaHlzaWNzID0gKGZ1bmN0aW9uKCkge1xuICBQaHlzaWNzLnByb3RvdHlwZS5ib2R5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBQaHlzaWNzKGJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG5cbiAgcmV0dXJuIFBoeXNpY3M7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBoeXNpY3MuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgUG9pbnQsIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gZXhhbXBsZS5ncmFwaGljcy5Qb2ludDtcblxuZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBQb3NpdGlvbi5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIFBvc2l0aW9uLnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gUG9zaXRpb24oeCwgeSwgcm90YXRpb24pIHtcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiBQb3NpdGlvbjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9zaXRpb24uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5jb21wb25lbnRzLlNwYWNlc2hpcCA9IChmdW5jdGlvbigpIHtcbiAgU3BhY2VzaGlwLnByb3RvdHlwZS5mc20gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcChmc20pIHtcbiAgICB0aGlzLmZzbSA9IGZzbTtcbiAgfVxuXG4gIHJldHVybiBTcGFjZXNoaXA7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0ID0gKGZ1bmN0aW9uKCkge1xuICBXYWl0Rm9yU3RhcnQucHJvdG90eXBlLndhaXRGb3JTdGFydCA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0LnByb3RvdHlwZS5zdGFydEdhbWUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnQod2FpdEZvclN0YXJ0KSB7XG4gICAgdGhpcy53YWl0Rm9yU3RhcnQgPSB3YWl0Rm9yU3RhcnQ7XG4gICAgdGhpcy5zZXRTdGFydEdhbWUgPSBfX2JpbmQodGhpcy5zZXRTdGFydEdhbWUsIHRoaXMpO1xuICAgIHRoaXMud2FpdEZvclN0YXJ0LmNsaWNrLmFkZCh0aGlzLnNldFN0YXJ0R2FtZSk7XG4gIH1cblxuICBXYWl0Rm9yU3RhcnQucHJvdG90eXBlLnNldFN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhcnRHYW1lID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gV2FpdEZvclN0YXJ0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0X2Zvcl9zdGFydC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb24sIEFzdGVyb2lkLCBBc3Rlcm9pZERlYXRoVmlldywgQXN0ZXJvaWRWaWV3LCBBdWRpbywgQnVsbGV0LCBCdWxsZXRWaWV3LCBDb2xsaXNpb24sIERlYXRoVGhyb2VzLCBEaXNwbGF5LCBHYW1lU3RhdGUsIEd1biwgR3VuQ29udHJvbHMsIEh1ZCwgSHVkVmlldywgTW90aW9uLCBNb3Rpb25Db250cm9scywgUGh5c2ljcywgUG9zaXRpb24sIFNwYWNlc2hpcCwgU3BhY2VzaGlwRGVhdGhWaWV3LCBTcGFjZXNoaXBWaWV3LCBXYWl0Rm9yU3RhcnQsIFdhaXRGb3JTdGFydFZpZXcsIGFzaCwgYjJCb2R5LCBiMkJvZHlEZWYsIGIyQ2lyY2xlU2hhcGUsIGIyQ29udGFjdCwgYjJDb250YWN0RmlsdGVyLCBiMkNvbnRhY3RMaXN0ZW5lciwgYjJEZWJ1Z0RyYXcsIGIyRGlzdGFuY2VKb2ludERlZiwgYjJGaXh0dXJlLCBiMkZpeHR1cmVEZWYsIGIySm9pbnQsIGIyTWF0MjIsIGIyTWF0aCwgYjJQb2x5Z29uU2hhcGUsIGIyUmV2b2x1dGVKb2ludERlZiwgYjJUcmFuc2Zvcm0sIGIyVmVjMiwgYjJXb3JsZCwgZXhhbXBsZTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyk7XG5cblxuLypcbiAqIEFzdGVyb2lkIEdhbWUgQ29tcG9uZW50c1xuICovXG5cbkFuaW1hdGlvbiA9IGV4YW1wbGUuY29tcG9uZW50cy5BbmltYXRpb247XG5cbkFzdGVyb2lkID0gZXhhbXBsZS5jb21wb25lbnRzLkFzdGVyb2lkO1xuXG5BdWRpbyA9IGV4YW1wbGUuY29tcG9uZW50cy5BdWRpbztcblxuQnVsbGV0ID0gZXhhbXBsZS5jb21wb25lbnRzLkJ1bGxldDtcblxuQ29sbGlzaW9uID0gZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbjtcblxuRGVhdGhUaHJvZXMgPSBleGFtcGxlLmNvbXBvbmVudHMuRGVhdGhUaHJvZXM7XG5cbkRpc3BsYXkgPSBleGFtcGxlLmNvbXBvbmVudHMuRGlzcGxheTtcblxuR2FtZVN0YXRlID0gZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZTtcblxuR3VuID0gZXhhbXBsZS5jb21wb25lbnRzLkd1bjtcblxuR3VuQ29udHJvbHMgPSBleGFtcGxlLmNvbXBvbmVudHMuR3VuQ29udHJvbHM7XG5cbkh1ZCA9IGV4YW1wbGUuY29tcG9uZW50cy5IdWQ7XG5cbk1vdGlvbiA9IGV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb247XG5cbk1vdGlvbkNvbnRyb2xzID0gZXhhbXBsZS5jb21wb25lbnRzLk1vdGlvbkNvbnRyb2xzO1xuXG5QaHlzaWNzID0gZXhhbXBsZS5jb21wb25lbnRzLlBoeXNpY3M7XG5cblBvc2l0aW9uID0gZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uO1xuXG5TcGFjZXNoaXAgPSBleGFtcGxlLmNvbXBvbmVudHMuU3BhY2VzaGlwO1xuXG5XYWl0Rm9yU3RhcnQgPSBleGFtcGxlLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0O1xuXG5cbi8qXG4gKiBEcmF3YWJsZSBDb21wb25lbnRzXG4gKi9cblxuQXN0ZXJvaWREZWF0aFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLkFzdGVyb2lkRGVhdGhWaWV3O1xuXG5Bc3Rlcm9pZFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLkFzdGVyb2lkVmlldztcblxuQnVsbGV0VmlldyA9IGV4YW1wbGUuZ3JhcGhpY3MuQnVsbGV0VmlldztcblxuSHVkVmlldyA9IGV4YW1wbGUuZ3JhcGhpY3MuSHVkVmlldztcblxuU3BhY2VzaGlwRGVhdGhWaWV3ID0gZXhhbXBsZS5ncmFwaGljcy5TcGFjZXNoaXBEZWF0aFZpZXc7XG5cblNwYWNlc2hpcFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLlNwYWNlc2hpcFZpZXc7XG5cbldhaXRGb3JTdGFydFZpZXcgPSBleGFtcGxlLmdyYXBoaWNzLldhaXRGb3JTdGFydFZpZXc7XG5cblxuLypcbiAqIEJveDJEIHN1YnNldCBzdXBwb3J0ZWQgYnkgY29jb29uJ3MgSURUS19TUlZfQk9YMkQ6XG4gKi9cblxuYjJNYXQyMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyTWF0MjI7XG5cbmIyTWF0aCA9IEJveDJELkNvbW1vbi5NYXRoLmIyTWF0aDtcblxuYjJUcmFuc2Zvcm0gPSBCb3gyRC5Db21tb24uTWF0aC5iMlRyYW5zZm9ybTtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5iMkJvZHkgPSBCb3gyRC5EeW5hbWljcy5iMkJvZHk7XG5cbmIyQm9keURlZiA9IEJveDJELkR5bmFtaWNzLmIyQm9keURlZjtcblxuYjJDb250YWN0ID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0O1xuXG5iMkNvbnRhY3RGaWx0ZXIgPSBCb3gyRC5EeW5hbWljcy5iMkNvbnRhY3RGaWx0ZXI7XG5cbmIyQ29udGFjdExpc3RlbmVyID0gQm94MkQuRHluYW1pY3MuYjJDb250YWN0TGlzdGVuZXI7XG5cbmIyRGVidWdEcmF3ID0gQm94MkQuRHluYW1pY3MuYjJEZWJ1Z0RyYXc7XG5cbmIyRml4dHVyZSA9IEJveDJELkR5bmFtaWNzLmIyRml4dHVyZTtcblxuYjJGaXh0dXJlRGVmID0gQm94MkQuRHluYW1pY3MuYjJGaXh0dXJlRGVmO1xuXG5iMldvcmxkID0gQm94MkQuRHluYW1pY3MuYjJXb3JsZDtcblxuYjJDaXJjbGVTaGFwZSA9IEJveDJELkNvbGxpc2lvbi5TaGFwZXMuYjJDaXJjbGVTaGFwZTtcblxuYjJQb2x5Z29uU2hhcGUgPSBCb3gyRC5Db2xsaXNpb24uU2hhcGVzLmIyUG9seWdvblNoYXBlO1xuXG5iMkRpc3RhbmNlSm9pbnREZWYgPSBCb3gyRC5EeW5hbWljcy5Kb2ludHMuYjJEaXN0YW5jZUpvaW50RGVmO1xuXG5iMkpvaW50ID0gQm94MkQuRHluYW1pY3MuSm9pbnRzLmIySm9pbnQ7XG5cbmIyUmV2b2x1dGVKb2ludERlZiA9IEJveDJELkR5bmFtaWNzLkpvaW50cy5iMlJldm9sdXRlSm9pbnREZWY7XG5cbmV4YW1wbGUuRW50aXR5Q3JlYXRvciA9IChmdW5jdGlvbigpIHtcbiAgdmFyIEtFWV9MRUZULCBLRVlfUklHSFQsIEtFWV9VUCwgS0VZX1o7XG5cbiAgS0VZX0xFRlQgPSAzNztcblxuICBLRVlfVVAgPSAzODtcblxuICBLRVlfUklHSFQgPSAzOTtcblxuICBLRVlfWiA9IDkwO1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUud2FpdEVudGl0eSA9IG51bGw7XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuZ3JhcGhpY3MgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVudGl0eUNyZWF0b3IoZW5naW5lLCBncmFwaGljcywgd29ybGQpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLmdyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICB9XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuZGVzdHJveUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRoaXMuZW5naW5lLnJlbW92ZUVudGl0eShlbnRpdHkpO1xuICB9O1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2FtZUVudGl0eSwgaHVkO1xuICAgIGh1ZCA9IG5ldyBIdWRWaWV3KHRoaXMuZ3JhcGhpY3MpO1xuICAgIGdhbWVFbnRpdHkgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCdnYW1lJykuYWRkKG5ldyBHYW1lU3RhdGUoKSkuYWRkKG5ldyBIdWQoaHVkKSkuYWRkKG5ldyBEaXNwbGF5KGh1ZCkpLmFkZChuZXcgUG9zaXRpb24oMCwgMCwgMCwgMCkpO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShnYW1lRW50aXR5KTtcbiAgICByZXR1cm4gZ2FtZUVudGl0eTtcbiAgfTtcblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGVXYWl0Rm9yQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2FpdFZpZXc7XG4gICAgaWYgKCF0aGlzLndhaXRFbnRpdHkpIHtcbiAgICAgIHdhaXRWaWV3ID0gbmV3IFdhaXRGb3JTdGFydFZpZXcodGhpcy5ncmFwaGljcyk7XG4gICAgICB0aGlzLndhaXRFbnRpdHkgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCd3YWl0JykuYWRkKG5ldyBXYWl0Rm9yU3RhcnQod2FpdFZpZXcpKS5hZGQobmV3IERpc3BsYXkod2FpdFZpZXcpKS5hZGQobmV3IFBvc2l0aW9uKDAsIDAsIDAsIDApKTtcbiAgICB9XG4gICAgdGhpcy53YWl0RW50aXR5LmdldChXYWl0Rm9yU3RhcnQpLnN0YXJ0R2FtZSA9IGZhbHNlO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eSh0aGlzLndhaXRFbnRpdHkpO1xuICAgIHJldHVybiB0aGlzLndhaXRFbnRpdHk7XG4gIH07XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuY3JlYXRlQXN0ZXJvaWQgPSBmdW5jdGlvbihyYWRpdXMsIHgsIHkpIHtcbiAgICB2YXIgYW5ndWxhclZlbG9jaXR5LCBhc3Rlcm9pZCwgY29sbGlzaW9uUmFkaXVzLCBkYW1waW5nLCByb3RhdGlvbiwgdmVsb2NpdHlYLCB2ZWxvY2l0eVk7XG4gICAgdmVsb2NpdHlYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNCAqICg1MCAtIHJhZGl1cyk7XG4gICAgdmVsb2NpdHlZID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNCAqICg1MCAtIHJhZGl1cyk7XG4gICAgYW5ndWxhclZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgIGRhbXBpbmcgPSAwO1xuICAgIHJvdGF0aW9uID0gMDtcbiAgICBjb2xsaXNpb25SYWRpdXMgPSByYWRpdXM7XG4gICAgYXN0ZXJvaWQgPSBuZXcgYXNoLmNvcmUuRW50aXR5KCkuYWRkKG5ldyBBc3Rlcm9pZCgpKS5hZGQobmV3IFBvc2l0aW9uKHgsIHksIHJvdGF0aW9uKSkuYWRkKG5ldyBBdWRpbygpKS5hZGQobmV3IE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSkuYWRkKG5ldyBDb2xsaXNpb24oY29sbGlzaW9uUmFkaXVzKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBBc3Rlcm9pZFZpZXcodGhpcy5ncmFwaGljcywgcmFkaXVzKSkpO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShhc3Rlcm9pZCk7XG4gICAgcmV0dXJuIGFzdGVyb2lkO1xuICB9O1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZVNwYWNlc2hpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbmd1bGFyVmVsb2NpdHksIGJvZHksIGJvZHlEZWYsIGNvbGxpc2lvblJhZGl1cywgZGFtcGluZywgZml4RGVmLCByb3RhdGlvbiwgc3BhY2VzaGlwLCB2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgdmVydGljZXMsIHgsIHk7XG4gICAgdmVsb2NpdHlYID0gMDtcbiAgICB2ZWxvY2l0eVkgPSAwO1xuICAgIGFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgZGFtcGluZyA9IDE1O1xuICAgIHggPSA0MDA7XG4gICAgeSA9IDMwMDtcbiAgICByb3RhdGlvbiA9IDE7XG4gICAgY29sbGlzaW9uUmFkaXVzID0gNjtcbiAgICBib2R5RGVmID0gbmV3IGIyQm9keURlZigpO1xuICAgIGJvZHlEZWYudHlwZSA9IGIyQm9keS5iMl9keW5hbWljQm9keTtcbiAgICBib2R5RGVmLmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgIGJvZHlEZWYucG9zaXRpb24ueCA9IHg7XG4gICAgYm9keURlZi5wb3NpdGlvbi55ID0geTtcbiAgICBib2R5RGVmLmxpbmVhclZlbG9jaXR5LlNldCh2ZWxvY2l0eVgsIHZlbG9jaXR5WSk7XG4gICAgYm9keURlZi5hbmd1bGFyVmVsb2NpdHkgPSBhbmd1bGFyVmVsb2NpdHk7XG4gICAgdmVydGljZXMgPSBbbmV3IGIyVmVjMiguNDUsIDApLCBuZXcgYjJWZWMyKC0uMjUsIC4yNSksIG5ldyBiMlZlYzIoLS4yNSwgLS4yNSldO1xuICAgIGZpeERlZiA9IG5ldyBiMkZpeHR1cmVEZWYoKTtcbiAgICBmaXhEZWYuZGVuc2l0eSA9IDEuMDtcbiAgICBmaXhEZWYuZnJpY3Rpb24gPSAwLjU7XG4gICAgZml4RGVmLnJlc3RpdHV0aW9uID0gMC4yO1xuICAgIGZpeERlZi5zaGFwZSA9IG5ldyBiMlBvbHlnb25TaGFwZSgpO1xuICAgIGZpeERlZi5zaGFwZS5TZXRBc0FycmF5KHZlcnRpY2VzLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgIGJvZHkgPSB0aGlzLndvcmxkLkNyZWF0ZUJvZHkoYm9keURlZik7XG4gICAgYm9keS5DcmVhdGVGaXh0dXJlKGZpeERlZik7XG4gICAgc3BhY2VzaGlwID0gbmV3IGFzaC5jb3JlLkVudGl0eSgpLmFkZChuZXcgU3BhY2VzaGlwKCkpLmFkZChuZXcgUGh5c2ljcyhib2R5KSkuYWRkKG5ldyBQb3NpdGlvbih4LCB5LCByb3RhdGlvbikpLmFkZChuZXcgQXVkaW8oKSkuYWRkKG5ldyBNb3Rpb24odmVsb2NpdHlYLCB2ZWxvY2l0eVksIGFuZ3VsYXJWZWxvY2l0eSwgZGFtcGluZykpLmFkZChuZXcgTW90aW9uQ29udHJvbHMoS0VZX0xFRlQsIEtFWV9SSUdIVCwgS0VZX1VQLCAxMDAsIDMpKS5hZGQobmV3IEd1big4LCAwLCAwLjMsIDIpKS5hZGQobmV3IEd1bkNvbnRyb2xzKEtFWV9aKSkuYWRkKG5ldyBDb2xsaXNpb24oY29sbGlzaW9uUmFkaXVzKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBTcGFjZXNoaXBWaWV3KHRoaXMuZ3JhcGhpY3MpKSk7XG4gICAgYm9keS5TZXRVc2VyRGF0YShzcGFjZXNoaXApO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShzcGFjZXNoaXApO1xuICAgIHJldHVybiBzcGFjZXNoaXA7XG4gIH07XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuY3JlYXRlVXNlckJ1bGxldCA9IGZ1bmN0aW9uKGd1biwgcGFyZW50UG9zaXRpb24pIHtcbiAgICB2YXIgYW5ndWxhclZlbG9jaXR5LCBidWxsZXQsIGNvbGxpc2lvblJhZGl1cywgY29zLCBkYW1waW5nLCByb3RhdGlvbiwgc2luLCB2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgeCwgeTtcbiAgICBjb3MgPSBNYXRoLmNvcyhwYXJlbnRQb3NpdGlvbi5yb3RhdGlvbik7XG4gICAgc2luID0gTWF0aC5zaW4ocGFyZW50UG9zaXRpb24ucm90YXRpb24pO1xuICAgIHZlbG9jaXR5WCA9IGNvcyAqIDE1MDtcbiAgICB2ZWxvY2l0eVkgPSBzaW4gKiAxNTA7XG4gICAgYW5ndWxhclZlbG9jaXR5ID0gMDtcbiAgICBkYW1waW5nID0gMDtcbiAgICB4ID0gY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueCAtIHNpbiAqIGd1bi5vZmZzZXRGcm9tUGFyZW50LnkgKyBwYXJlbnRQb3NpdGlvbi5wb3NpdGlvbi54O1xuICAgIHkgPSBzaW4gKiBndW4ub2Zmc2V0RnJvbVBhcmVudC54ICsgY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueSArIHBhcmVudFBvc2l0aW9uLnBvc2l0aW9uLnk7XG4gICAgcm90YXRpb24gPSAwO1xuICAgIGNvbGxpc2lvblJhZGl1cyA9IDA7XG4gICAgYnVsbGV0ID0gbmV3IGFzaC5jb3JlLkVudGl0eSgpLmFkZChuZXcgQnVsbGV0KGd1bi5idWxsZXRMaWZldGltZSkpLmFkZChuZXcgUG9zaXRpb24oeCwgeSwgcm90YXRpb24pKS5hZGQobmV3IENvbGxpc2lvbihjb2xsaXNpb25SYWRpdXMpKS5hZGQobmV3IE1vdGlvbih2ZWxvY2l0eVgsIHZlbG9jaXR5WSwgYW5ndWxhclZlbG9jaXR5LCBkYW1waW5nKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBCdWxsZXRWaWV3KHRoaXMuZ3JhcGhpY3MpKSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KGJ1bGxldCk7XG4gICAgcmV0dXJuIGJ1bGxldDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5Q3JlYXRvcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X2NyZWF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5HYW1lQ29uZmlnID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHYW1lQ29uZmlnKCkge31cblxuICBHYW1lQ29uZmlnLnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgR2FtZUNvbmZpZy5wcm90b3R5cGUuaGVpZ2h0ID0gMDtcblxuICByZXR1cm4gR2FtZUNvbmZpZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9jb25maWcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5Bc3Rlcm9pZERlYXRoVmlldyA9IChmdW5jdGlvbigpIHtcbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUud2lkdGggPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLmdyYXBoaWMgPSBudWxsO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5wb2ludHMgPSBudWxsO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5jb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gQXN0ZXJvaWREZWF0aFZpZXcoZ3JhcGhpYywgcmFkaXVzKSB7XG4gICAgdmFyIGFuZ2xlLCBsZW5ndGgsIHBvc1gsIHBvc1k7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnJhZGl1cztcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICB3aGlsZSAoYW5nbGUgPCBNYXRoLlBJICogMikge1xuICAgICAgbGVuZ3RoID0gKDAuNzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNSkgKiB0aGlzLnJhZGl1cztcbiAgICAgIHBvc1ggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gICAgICBwb3NZID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvc1gsXG4gICAgICAgIHk6IHBvc1lcbiAgICAgIH0pO1xuICAgICAgYW5nbGUgKz0gTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICB9XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmFwaGljLCBpO1xuICAgIGdyYXBoaWMgPSB0aGlzLmdyYXBoaWM7XG4gICAgZ3JhcGhpYy5zYXZlKCk7XG4gICAgZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICBncmFwaGljLnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLm1vdmVUbyh0aGlzLnJhZGl1cywgMCk7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGdyYXBoaWMubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgKytpO1xuICAgIH1cbiAgICBncmFwaGljLmxpbmVUbyh0aGlzLnJhZGl1cywgMCk7XG4gICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIEFzdGVyb2lkRGVhdGhWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZF9kZWF0aF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuZ3JhcGhpY3MuQXN0ZXJvaWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucG9pbnRzID0gbnVsbDtcblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBBc3Rlcm9pZFZpZXcoZ3JhcGhpYywgcmFkaXVzKSB7XG4gICAgdmFyIGFuZ2xlLCBsZW5ndGgsIHBvc1gsIHBvc1k7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnJhZGl1cztcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICB3aGlsZSAoYW5nbGUgPCBNYXRoLlBJICogMikge1xuICAgICAgbGVuZ3RoID0gKDAuNzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNSkgKiB0aGlzLnJhZGl1cztcbiAgICAgIHBvc1ggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gICAgICBwb3NZID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvc1gsXG4gICAgICAgIHk6IHBvc1lcbiAgICAgIH0pO1xuICAgICAgYW5nbGUgKz0gTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICB9XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYywgaTtcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBncmFwaGljLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICsraTtcbiAgICB9XG4gICAgZ3JhcGhpYy5saW5lVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBBc3Rlcm9pZFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzdGVyb2lkX3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5CdWxsZXRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBCdWxsZXRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gQnVsbGV0VmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIEJ1bGxldFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLmFyYyh0aGlzLngsIHRoaXMueSwgMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gQnVsbGV0VmlldztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVsbGV0X3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ncmFwaGljcy5IdWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBIdWRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2NvcmUgPSAwO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBIdWRWaWV3LnByb3RvdHlwZS5kcmF3U2NvcmUgPSBudWxsO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXdMaXZlcyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gSHVkVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnNldFNjb3JlID0gX19iaW5kKHRoaXMuc2V0U2NvcmUsIHRoaXMpO1xuICAgIHRoaXMuc2V0TGl2ZXMgPSBfX2JpbmQodGhpcy5zZXRMaXZlcywgdGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gX19iaW5kKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgdGhpcy5kcmF3U2NvcmUgPSB0aGlzLmNyZWF0ZVNjb3JlO1xuICAgIHRoaXMuZHJhd0xpdmVzID0gdGhpcy5jcmVhdGVMaXZlcztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2V0TGl2ZXMgPSBmdW5jdGlvbihsaXZlcykge1xuICAgIGlmICh0aGlzLmxpdmVzICE9PSBsaXZlcykge1xuICAgICAgY29uc29sZS5sb2coXCJzZXRMaXZlcyBcIiArIGxpdmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGl2ZXMgPSBsaXZlcztcbiAgfTtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5zZXRTY29yZSA9IGZ1bmN0aW9uKHNjb3JlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgfTtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5jcmVhdGVMaXZlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsLCBzLCB4LCB5O1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5mb250ID0gJ2JvbGQgMThweCBIZWx2ZXRpY2EnO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgdGhpcy5ncmFwaGljLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHMgPSBcIkxJVkVTOiBcIiArIHRoaXMubGl2ZXM7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gbC53aWR0aDtcbiAgICB5ID0gbC5oZWlnaHQ7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxUZXh0KHMsIHgsIDIwKTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuY3JlYXRlU2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbCwgcywgeCwgeTtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmdyYXBoaWMuZm9udCA9ICdib2xkIDE4cHggSGVsdmV0aWNhJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIHRoaXMuZ3JhcGhpYy50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBzID0gXCJTQ09SRTogXCIgKyB0aGlzLnNjb3JlO1xuICAgIGwgPSB0aGlzLmdyYXBoaWMubWVhc3VyZVRleHQocyk7XG4gICAgeCA9ICh3aW5kb3cud2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgLSBsLndpZHRoO1xuICAgIHkgPSBsLmhlaWdodDtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFRleHQocywgeCwgMjApO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsKCk7XG4gICAgdGhpcy5ncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gSHVkVmlldztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkX3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7XG5cbmV4YW1wbGUuZ3JhcGhpY3MuUG9pbnQgPSAoZnVuY3Rpb24oKSB7XG4gIFBvaW50LnByb3RvdHlwZS54ID0gMDtcblxuICBQb2ludC5wcm90b3R5cGUueSA9IDA7XG5cbiAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHggIT0gbnVsbCA/IHggOiAwO1xuICAgIHRoaXMueSA9IHkgIT0gbnVsbCA/IHkgOiAwO1xuICB9XG5cbiAgUG9pbnQucHJvdG90eXBlLmRpc3RhbmNlU3F1YXJlZFRvID0gZnVuY3Rpb24odGFyZ2V0UG9pbnQpIHtcbiAgICB2YXIgZHgsIGR5O1xuICAgIGR4ID0gdGhpcy54IC0gdGFyZ2V0UG9pbnQueDtcbiAgICBkeSA9IHRoaXMueSAtIHRhcmdldFBvaW50Lnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICB9O1xuXG4gIFBvaW50LnByb3RvdHlwZS5kaXN0YW5jZVRvID0gZnVuY3Rpb24odGFyZ2V0UG9pbnQpIHtcbiAgICB2YXIgZHgsIGR5O1xuICAgIGR4ID0gdGhpcy54IC0gdGFyZ2V0UG9pbnQueDtcbiAgICBkeSA9IHRoaXMueSAtIHRhcmdldFBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvaW50O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2ludC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLmdyYXBoaWNzLlNwYWNlc2hpcERlYXRoVmlldyA9IChmdW5jdGlvbigpIHtcbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLnkgPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUud2lkdGggPSAyMDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLmhlaWdodCA9IDIwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gU3BhY2VzaGlwRGVhdGhWaWV3KGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdyYXBoaWM7XG4gICAgZ3JhcGhpYyA9IHRoaXMuZ3JhcGhpYztcbiAgICBncmFwaGljLnNhdmUoKTtcbiAgICBncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIGdyYXBoaWMudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBncmFwaGljLnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICBncmFwaGljLmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgIGdyYXBoaWMubW92ZVRvKDEwLCAwKTtcbiAgICBncmFwaGljLmxpbmVUbygtNywgNyk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTQsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKC03LCAtNyk7XG4gICAgZ3JhcGhpYy5saW5lVG8oMTAsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBTcGFjZXNoaXBEZWF0aFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9kZWF0aF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGU7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuZ3JhcGhpY3MuU3BhY2VzaGlwVmlldyA9IChmdW5jdGlvbigpIHtcbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUueCA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUud2lkdGggPSAyMDtcblxuICBTcGFjZXNoaXBWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAyMDtcblxuICBTcGFjZXNoaXBWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gU3BhY2VzaGlwVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8oMTAsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKC03LCA3KTtcbiAgICBncmFwaGljLmxpbmVUbygtNCwgMCk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTcsIC03KTtcbiAgICBncmFwaGljLmxpbmVUbygxMCwgMCk7XG4gICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNwYWNlc2hpcFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDAsIGFzaCwgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDAgPSBhc2guc2lnbmFscy5TaWduYWwwO1xuXG5leGFtcGxlLmdyYXBoaWNzLldhaXRGb3JTdGFydFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnkgPSAwO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLndpZHRoID0gNDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSA0O1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnJvdGF0aW9uID0gMDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5nYW1lT3ZlciA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY2xpY2tUb1N0YXJ0ID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5jbGljayA9IG51bGw7XG5cbiAgZnVuY3Rpb24gV2FpdEZvclN0YXJ0VmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLmNsaWNrID0gbmV3IFNpZ25hbDAoKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5jcmVhdGVHYW1lT3ZlcjtcbiAgICB0aGlzLmNsaWNrVG9TdGFydCA9IHRoaXMuY3JlYXRlQ2xpY2tUb1N0YXJ0O1xuICAgIHRoaXMuZ3JhcGhpYy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xpY2suZGlzcGF0Y2goKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY3JlYXRlR2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmdyYXBoaWMuZm9udCA9ICdib2xkIDMycHggSGVsdmV0aWNhJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIHRoaXMuZ3JhcGhpYy50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFRleHQoJ0FTVEVST0lEUycsIDIwMCwgMTc1KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY3JlYXRlQ2xpY2tUb1N0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ncmFwaGljLnNhdmUoKTtcbiAgICB0aGlzLmdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5ncmFwaGljLmZvbnQgPSAnYm9sZCAxOHB4IEhlbHZldGljYSc7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICB0aGlzLmdyYXBoaWMudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxUZXh0KCdDTElDSyBUTyBTVEFSVCcsIDIwMCwgMjI1KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB0aGlzLmNsaWNrVG9TdGFydCgpO1xuICB9O1xuXG4gIHJldHVybiBXYWl0Rm9yU3RhcnRWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0X2Zvcl9zdGFydF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUuaW5wdXQuS2V5UG9sbCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGRpc3BsYXlPYmosIHN0YXRlcztcblxuICBzdGF0ZXMgPSBudWxsO1xuXG4gIGRpc3BsYXlPYmogPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEtleVBvbGwoZGlzcGxheU9iaikge1xuICAgIHRoaXMuZGlzcGxheU9iaiA9IGRpc3BsYXlPYmo7XG4gICAgdGhpcy5pc1VwID0gX19iaW5kKHRoaXMuaXNVcCwgdGhpcyk7XG4gICAgdGhpcy5pc0Rvd24gPSBfX2JpbmQodGhpcy5pc0Rvd24sIHRoaXMpO1xuICAgIHRoaXMua2V5VXBMaXN0ZW5lciA9IF9fYmluZCh0aGlzLmtleVVwTGlzdGVuZXIsIHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkxpc3RlbmVyID0gX19iaW5kKHRoaXMua2V5RG93bkxpc3RlbmVyLCB0aGlzKTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuZGlzcGxheU9iai5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25MaXN0ZW5lcik7XG4gICAgdGhpcy5kaXNwbGF5T2JqLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwTGlzdGVuZXIpO1xuICB9XG5cbiAgS2V5UG9sbC5wcm90b3R5cGUua2V5RG93bkxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlc1tldmVudC5rZXlDb2RlXSA9IHRydWU7XG4gIH07XG5cbiAgS2V5UG9sbC5wcm90b3R5cGUua2V5VXBMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2V2ZW50LmtleUNvZGVdKSB7XG4gICAgICB0aGlzLnN0YXRlc1tldmVudC5rZXlDb2RlXSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBLZXlQb2xsLnByb3RvdHlwZS5pc0Rvd24gPSBmdW5jdGlvbihrZXlDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzW2tleUNvZGVdO1xuICB9O1xuXG4gIEtleVBvbGwucHJvdG90eXBlLmlzVXAgPSBmdW5jdGlvbihrZXlDb2RlKSB7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlc1trZXlDb2RlXTtcbiAgfTtcblxuICByZXR1cm4gS2V5UG9sbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2V5X3BvbGwuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhhbXBsZTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5NYWluID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBNYWluKCkge1xuICAgIHZhciBhc3Rlcm9pZHMsIGNhbnZhcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcygpO1xuICAgIGFzdGVyb2lkcyA9IG5ldyBleGFtcGxlLkFzdGVyb2lkcyhjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBhc3Rlcm9pZHMuc3RhcnQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBNYWluLnByb3RvdHlwZS5jYW52YXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FudmFzO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmF2aWdhdG9yLmlzQ29jb29uSlMgPyAnc2NyZWVuY2FudmFzJyA6ICdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9O1xuXG4gIHJldHVybiBNYWluO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5BbmltYXRpb25Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQW5pbWF0aW9uTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBBbmltYXRpb25Ob2RlKCkge1xuICAgIHJldHVybiBBbmltYXRpb25Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQW5pbWF0aW9uTm9kZS5jb21wb25lbnRzID0ge1xuICAgIGFuaW1hdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLkFuaW1hdGlvblxuICB9O1xuXG4gIEFuaW1hdGlvbk5vZGUucHJvdG90eXBlLmFuaW1hdGlvbiA9IG51bGw7XG5cbiAgcmV0dXJuIEFuaW1hdGlvbk5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkQ29sbGlzaW9uTm9kZSgpIHtcbiAgICByZXR1cm4gQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYXN0ZXJvaWQ6IGV4YW1wbGUuY29tcG9uZW50cy5Bc3Rlcm9pZCxcbiAgICBwb3NpdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uLFxuICAgIGNvbGxpc2lvbjogZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbixcbiAgICBhdWRpbzogZXhhbXBsZS5jb21wb25lbnRzLkF1ZGlvXG4gIH07XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5hc3Rlcm9pZCA9IG51bGw7XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5jb2xsaXNpb24gPSBudWxsO1xuXG4gIEFzdGVyb2lkQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUuYXVkaW8gPSBudWxsO1xuXG4gIHJldHVybiBBc3Rlcm9pZENvbGxpc2lvbk5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZF9jb2xsaXNpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuQXVkaW9Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQXVkaW9Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvTm9kZSgpIHtcbiAgICByZXR1cm4gQXVkaW9Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQXVkaW9Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYXVkaW86IGV4YW1wbGUuY29tcG9uZW50cy5BdWRpb1xuICB9O1xuXG4gIEF1ZGlvTm9kZS5wcm90b3R5cGUuYXVkaW8gPSBudWxsO1xuXG4gIHJldHVybiBBdWRpb05vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdWRpb19ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5CdWxsZXRBZ2VOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQnVsbGV0QWdlTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBCdWxsZXRBZ2VOb2RlKCkge1xuICAgIHJldHVybiBCdWxsZXRBZ2VOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQnVsbGV0QWdlTm9kZS5jb21wb25lbnRzID0ge1xuICAgIGJ1bGxldDogZXhhbXBsZS5jb21wb25lbnRzLkJ1bGxldFxuICB9O1xuXG4gIEJ1bGxldEFnZU5vZGUucHJvdG90eXBlLmJ1bGxldCA9IG51bGw7XG5cbiAgcmV0dXJuIEJ1bGxldEFnZU5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXRfYWdlX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLkJ1bGxldENvbGxpc2lvbk5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhCdWxsZXRDb2xsaXNpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEJ1bGxldENvbGxpc2lvbk5vZGUoKSB7XG4gICAgcmV0dXJuIEJ1bGxldENvbGxpc2lvbk5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYnVsbGV0OiBleGFtcGxlLmNvbXBvbmVudHMuQnVsbGV0LFxuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgY29sbGlzaW9uOiBleGFtcGxlLmNvbXBvbmVudHMuQ29sbGlzaW9uXG4gIH07XG5cbiAgQnVsbGV0Q29sbGlzaW9uTm9kZS5wcm90b3R5cGUuYnVsbGV0ID0gbnVsbDtcblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgQnVsbGV0Q29sbGlzaW9uTm9kZS5wcm90b3R5cGUuY29sbGlzaW9uID0gbnVsbDtcblxuICByZXR1cm4gQnVsbGV0Q29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJ1bGxldF9jb2xsaXNpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuRGVhdGhUaHJvZXNOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoRGVhdGhUaHJvZXNOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzTm9kZSgpIHtcbiAgICByZXR1cm4gRGVhdGhUaHJvZXNOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgRGVhdGhUaHJvZXNOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgZGVhdGg6IGV4YW1wbGUuY29tcG9uZW50cy5EZWF0aFRocm9lc1xuICB9O1xuXG4gIERlYXRoVGhyb2VzTm9kZS5wcm90b3R5cGUuZGVhdGggPSBudWxsO1xuXG4gIHJldHVybiBEZWF0aFRocm9lc05vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWF0aF90aHJvZXNfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuR2FtZU5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhHYW1lTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBHYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gR2FtZU5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBHYW1lTm9kZS5jb21wb25lbnRzID0ge1xuICAgIHN0YXRlOiBleGFtcGxlLmNvbXBvbmVudHMuR2FtZVN0YXRlXG4gIH07XG5cbiAgR2FtZU5vZGUucHJvdG90eXBlLnN0YXRlID0gbnVsbDtcblxuICByZXR1cm4gR2FtZU5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nYW1lX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLkd1bkNvbnRyb2xOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoR3VuQ29udHJvbE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gR3VuQ29udHJvbE5vZGUoKSB7XG4gICAgcmV0dXJuIEd1bkNvbnRyb2xOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgR3VuQ29udHJvbE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBhdWRpbzogZXhhbXBsZS5jb21wb25lbnRzLkF1ZGlvLFxuICAgIGNvbnRyb2w6IGV4YW1wbGUuY29tcG9uZW50cy5HdW5Db250cm9scyxcbiAgICBndW46IGV4YW1wbGUuY29tcG9uZW50cy5HdW4sXG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvblxuICB9O1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5jb250cm9sID0gbnVsbDtcblxuICBHdW5Db250cm9sTm9kZS5wcm90b3R5cGUuZ3VuID0gbnVsbDtcblxuICBHdW5Db250cm9sTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIEd1bkNvbnRyb2xOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VuX2NvbnRyb2xfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGV4YW1wbGUsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmV4YW1wbGUubm9kZXMuSHVkTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEh1ZE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gSHVkTm9kZSgpIHtcbiAgICByZXR1cm4gSHVkTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEh1ZE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBzdGF0ZTogZXhhbXBsZS5jb21wb25lbnRzLkdhbWVTdGF0ZSxcbiAgICBodWQ6IGV4YW1wbGUuY29tcG9uZW50cy5IdWRcbiAgfTtcblxuICBIdWROb2RlLnByb3RvdHlwZS5zdGF0ZSA9IG51bGw7XG5cbiAgSHVkTm9kZS5wcm90b3R5cGUuaHVkID0gbnVsbDtcblxuICByZXR1cm4gSHVkTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh1ZF9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5Nb3Rpb25Db250cm9sTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKE1vdGlvbkNvbnRyb2xOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbkNvbnRyb2xOb2RlKCkge1xuICAgIHJldHVybiBNb3Rpb25Db250cm9sTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE1vdGlvbkNvbnRyb2xOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgY29udHJvbDogZXhhbXBsZS5jb21wb25lbnRzLk1vdGlvbkNvbnRyb2xzLFxuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgbW90aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuTW90aW9uLFxuICAgIHBoeXNpY3M6IGV4YW1wbGUuY29tcG9uZW50cy5QaHlzaWNzXG4gIH07XG5cbiAgTW90aW9uQ29udHJvbE5vZGUucHJvdG90eXBlLmNvbnRyb2wgPSBudWxsO1xuXG4gIE1vdGlvbkNvbnRyb2xOb2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgTW90aW9uQ29udHJvbE5vZGUucHJvdG90eXBlLm1vdGlvbiA9IG51bGw7XG5cbiAgTW90aW9uQ29udHJvbE5vZGUucHJvdG90eXBlLnBoeXNpY3MgPSBudWxsO1xuXG4gIHJldHVybiBNb3Rpb25Db250cm9sTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbl9jb250cm9sX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLk1vdmVtZW50Tm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKE1vdmVtZW50Tm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBNb3ZlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIE1vdmVtZW50Tm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE1vdmVtZW50Tm9kZS5jb21wb25lbnRzID0ge1xuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgbW90aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuTW90aW9uXG4gIH07XG5cbiAgTW92ZW1lbnROb2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgTW92ZW1lbnROb2RlLnByb3RvdHlwZS5tb3Rpb24gPSBudWxsO1xuXG4gIHJldHVybiBNb3ZlbWVudE5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlbWVudF9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5QaHlzaWNzTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFBoeXNpY3NOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3NOb2RlKCkge1xuICAgIHJldHVybiBQaHlzaWNzTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFBoeXNpY3NOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgcGh5c2ljczogZXhhbXBsZS5jb21wb25lbnRzLlBoeXNpY3MsXG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBtb3Rpb246IGV4YW1wbGUuY29tcG9uZW50cy5Nb3Rpb25cbiAgfTtcblxuICBQaHlzaWNzTm9kZS5wcm90b3R5cGUucGh5c2ljcyA9IG51bGw7XG5cbiAgUGh5c2ljc05vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBQaHlzaWNzTm9kZS5wcm90b3R5cGUubW90aW9uID0gbnVsbDtcblxuICByZXR1cm4gUGh5c2ljc05vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waHlzaWNzX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLlJlbmRlck5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhSZW5kZXJOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFJlbmRlck5vZGUoKSB7XG4gICAgcmV0dXJuIFJlbmRlck5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBSZW5kZXJOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgcG9zaXRpb246IGV4YW1wbGUuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBkaXNwbGF5OiBleGFtcGxlLmNvbXBvbmVudHMuRGlzcGxheVxuICB9O1xuXG4gIFJlbmRlck5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBSZW5kZXJOb2RlLnByb3RvdHlwZS5kaXNwbGF5ID0gbnVsbDtcblxuICByZXR1cm4gUmVuZGVyTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlcl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5TcGFjZXNoaXBDb2xsaXNpb25Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU3BhY2VzaGlwQ29sbGlzaW9uTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlKCkge1xuICAgIHJldHVybiBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZS5jb21wb25lbnRzID0ge1xuICAgIHNwYWNlc2hpcDogZXhhbXBsZS5jb21wb25lbnRzLlNwYWNlc2hpcCxcbiAgICBwb3NpdGlvbjogZXhhbXBsZS5jb21wb25lbnRzLlBvc2l0aW9uLFxuICAgIGNvbGxpc2lvbjogZXhhbXBsZS5jb21wb25lbnRzLkNvbGxpc2lvbixcbiAgICBhdWRpbzogZXhhbXBsZS5jb21wb25lbnRzLkF1ZGlvXG4gIH07XG5cbiAgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUuc3BhY2VzaGlwID0gMDtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IDA7XG5cbiAgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUuY29sbGlzaW9uID0gbnVsbDtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIFNwYWNlc2hpcENvbGxpc2lvbk5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFjZXNoaXBfY29sbGlzaW9uX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBleGFtcGxlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLm5vZGVzLlNwYWNlc2hpcE5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTcGFjZXNoaXBOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcE5vZGUoKSB7XG4gICAgcmV0dXJuIFNwYWNlc2hpcE5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTcGFjZXNoaXBOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgc3BhY2VzaGlwOiBleGFtcGxlLmNvbXBvbmVudHMuU3BhY2VzaGlwLFxuICAgIHBvc2l0aW9uOiBleGFtcGxlLmNvbXBvbmVudHMuUG9zaXRpb25cbiAgfTtcblxuICBTcGFjZXNoaXBOb2RlLnByb3RvdHlwZS5zcGFjZXNoaXAgPSAwO1xuXG4gIFNwYWNlc2hpcE5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gMDtcblxuICByZXR1cm4gU3BhY2VzaGlwTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgZXhhbXBsZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuZXhhbXBsZS5ub2Rlcy5XYWl0Rm9yU3RhcnROb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoV2FpdEZvclN0YXJ0Tm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnROb2RlKCkge1xuICAgIHJldHVybiBXYWl0Rm9yU3RhcnROb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgV2FpdEZvclN0YXJ0Tm9kZS5jb21wb25lbnRzID0ge1xuICAgIHdhaXQ6IGV4YW1wbGUuY29tcG9uZW50cy5XYWl0Rm9yU3RhcnRcbiAgfTtcblxuICBXYWl0Rm9yU3RhcnROb2RlLnByb3RvdHlwZS53YWl0ID0gbnVsbDtcblxuICByZXR1cm4gV2FpdEZvclN0YXJ0Tm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXRfZm9yX3N0YXJ0X25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQW5pbWF0aW9uTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5BbmltYXRpb25Ob2RlID0gZXhhbXBsZS5ub2Rlcy5BbmltYXRpb25Ob2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuQW5pbWF0aW9uU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQW5pbWF0aW9uU3lzdGVtLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGlvblN5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBBbmltYXRpb25TeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgQW5pbWF0aW9uTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEFuaW1hdGlvblN5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICBub2RlLmFuaW1hdGlvbi5hbmltYXRpb24uYW5pbWF0ZSh0aW1lKTtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbl9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXVkaW9Ob2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkF1ZGlvTm9kZSA9IGV4YW1wbGUubm9kZXMuQXVkaW9Ob2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuQXVkaW9TeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBdWRpb1N5c3RlbSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBBdWRpb1N5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBBdWRpb1N5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBBdWRpb05vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBBdWRpb1N5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICB2YXIgZWFjaCwgc291bmQsIHR5cGUsIF9yZWY7XG4gICAgX3JlZiA9IG5vZGUuYXVkaW8udG9QbGF5O1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICB0eXBlID0gX3JlZltlYWNoXTtcbiAgICAgIHNvdW5kID0gbmV3IHR5cGUoKTtcbiAgICAgIHNvdW5kLnBsYXkoMCwgMSk7XG4gICAgfVxuICAgIG5vZGUuYXVkaW8udG9QbGF5Lmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIEF1ZGlvU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1ZGlvX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBCdWxsZXRBZ2VOb2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkJ1bGxldEFnZU5vZGUgPSBleGFtcGxlLm5vZGVzLkJ1bGxldEFnZU5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5CdWxsZXRBZ2VTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhCdWxsZXRBZ2VTeXN0ZW0sIF9zdXBlcik7XG5cbiAgQnVsbGV0QWdlU3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBmdW5jdGlvbiBCdWxsZXRBZ2VTeXN0ZW0oY3JlYXRvcikge1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgQnVsbGV0QWdlU3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIEJ1bGxldEFnZU5vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBCdWxsZXRBZ2VTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdmFyIGJ1bGxldDtcbiAgICBidWxsZXQgPSBub2RlLmJ1bGxldDtcbiAgICBidWxsZXQubGlmZVJlbWFpbmluZyAtPSB0aW1lO1xuICAgIGlmIChidWxsZXQubGlmZVJlbWFpbmluZyA8PSAwKSB7XG4gICAgICB0aGlzLmNyZWF0b3IuZGVzdHJveUVudGl0eShub2RlLmVudGl0eSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBCdWxsZXRBZ2VTeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVsbGV0X2FnZV9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLCBCdWxsZXRDb2xsaXNpb25Ob2RlLCBHYW1lTm9kZSwgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5TcGFjZXNoaXBDb2xsaXNpb25Ob2RlID0gZXhhbXBsZS5ub2Rlcy5TcGFjZXNoaXBDb2xsaXNpb25Ob2RlO1xuXG5Bc3Rlcm9pZENvbGxpc2lvbk5vZGUgPSBleGFtcGxlLm5vZGVzLkFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxuQnVsbGV0Q29sbGlzaW9uTm9kZSA9IGV4YW1wbGUubm9kZXMuQnVsbGV0Q29sbGlzaW9uTm9kZTtcblxuR2FtZU5vZGUgPSBleGFtcGxlLm5vZGVzLkdhbWVOb2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuQ29sbGlzaW9uU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQ29sbGlzaW9uU3lzdGVtLCBfc3VwZXIpO1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5nYW1lcyA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5zcGFjZXNoaXBzID0gbnVsbDtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLmFzdGVyb2lkcyA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5idWxsZXRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBDb2xsaXNpb25TeXN0ZW0oY3JlYXRvcikge1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZXMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoR2FtZU5vZGUpO1xuICAgIHRoaXMuc3BhY2VzaGlwcyA9IGVuZ2luZS5nZXROb2RlTGlzdChTcGFjZXNoaXBDb2xsaXNpb25Ob2RlKTtcbiAgICB0aGlzLmFzdGVyb2lkcyA9IGVuZ2luZS5nZXROb2RlTGlzdChBc3Rlcm9pZENvbGxpc2lvbk5vZGUpO1xuICAgIHRoaXMuYnVsbGV0cyA9IGVuZ2luZS5nZXROb2RlTGlzdChCdWxsZXRDb2xsaXNpb25Ob2RlKTtcbiAgfTtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLmdhbWVzID0gbnVsbDtcbiAgICB0aGlzLnNwYWNlc2hpcHMgPSBudWxsO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gbnVsbDtcbiAgICB0aGlzLmJ1bGxldHMgPSBudWxsO1xuICB9O1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBhc3Rlcm9pZCwgYnVsbGV0LCBzcGFjZXNoaXA7XG4gICAgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmhlYWQ7XG4gICAgd2hpbGUgKGJ1bGxldCkge1xuICAgICAgYXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkcy5oZWFkO1xuICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgIGlmIChhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi5kaXN0YW5jZVRvKGJ1bGxldC5wb3NpdGlvbi5wb3NpdGlvbikgPD0gYXN0ZXJvaWQuY29sbGlzaW9uLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KGJ1bGxldC5lbnRpdHkpO1xuICAgICAgICAgIGlmIChhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzID4gMTApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVBc3Rlcm9pZChhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzIC0gMTAsIGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLnggKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1LCBhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi55ICsgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KGFzdGVyb2lkLmVudGl0eSk7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZXMuaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lcy5oZWFkLnN0YXRlLmhpdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXN0ZXJvaWQgPSBhc3Rlcm9pZC5uZXh0O1xuICAgICAgfVxuICAgICAgYnVsbGV0ID0gYnVsbGV0Lm5leHQ7XG4gICAgfVxuICAgIHNwYWNlc2hpcCA9IHRoaXMuc3BhY2VzaGlwcy5oZWFkO1xuICAgIHdoaWxlIChzcGFjZXNoaXApIHtcbiAgICAgIGFzdGVyb2lkID0gdGhpcy5hc3Rlcm9pZHMuaGVhZDtcbiAgICAgIHdoaWxlIChhc3Rlcm9pZCkge1xuICAgICAgICBpZiAoYXN0ZXJvaWQucG9zaXRpb24ucG9zaXRpb24uZGlzdGFuY2VUbyhzcGFjZXNoaXAucG9zaXRpb24ucG9zaXRpb24pIDw9IGFzdGVyb2lkLmNvbGxpc2lvbi5yYWRpdXMgKyBzcGFjZXNoaXAuY29sbGlzaW9uLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KHNwYWNlc2hpcC5lbnRpdHkpO1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVzLmhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMuaGVhZC5zdGF0ZS5saXZlcysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhc3Rlcm9pZCA9IGFzdGVyb2lkLm5leHQ7XG4gICAgICB9XG4gICAgICBzcGFjZXNoaXAgPSBzcGFjZXNoaXAubmV4dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENvbGxpc2lvblN5c3RlbTtcblxufSkoYXNoLmNvcmUuU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGlzaW9uX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEZWF0aFRocm9lc05vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuRGVhdGhUaHJvZXNOb2RlID0gZXhhbXBsZS5ub2Rlcy5EZWF0aFRocm9lc05vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5EZWF0aFRocm9lc1N5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKERlYXRoVGhyb2VzU3lzdGVtLCBfc3VwZXIpO1xuXG4gIERlYXRoVGhyb2VzU3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBmdW5jdGlvbiBEZWF0aFRocm9lc1N5c3RlbShjcmVhdG9yKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBEZWF0aFRocm9lc1N5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBEZWF0aFRocm9lc05vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBEZWF0aFRocm9lc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICBub2RlLmRlYXRoLmNvdW50ZG93biAtPSB0aW1lO1xuICAgIGlmIChub2RlLmRlYXRoLmNvdW50ZG93biA8PSAwKSB7XG4gICAgICB0aGlzLmNyZWF0b3IuZGVzdHJveUVudGl0eShub2RlLmVudGl0eSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEZWF0aFRocm9lc1N5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWF0aF90aHJvZXNfc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFzdGVyb2lkQ29sbGlzaW9uTm9kZSwgQnVsbGV0Q29sbGlzaW9uTm9kZSwgR2FtZU5vZGUsIFBvaW50LCBTcGFjZXNoaXBOb2RlLCBhc2gsIGV4YW1wbGUsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkdhbWVOb2RlID0gZXhhbXBsZS5ub2Rlcy5HYW1lTm9kZTtcblxuU3BhY2VzaGlwTm9kZSA9IGV4YW1wbGUubm9kZXMuU3BhY2VzaGlwTm9kZTtcblxuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gZXhhbXBsZS5ub2Rlcy5Bc3Rlcm9pZENvbGxpc2lvbk5vZGU7XG5cbkJ1bGxldENvbGxpc2lvbk5vZGUgPSBleGFtcGxlLm5vZGVzLkJ1bGxldENvbGxpc2lvbk5vZGU7XG5cblBvaW50ID0gZXhhbXBsZS5ncmFwaGljcy5Qb2ludDtcblxuZXhhbXBsZS5zeXN0ZW1zLkdhbWVNYW5hZ2VyID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoR2FtZU1hbmFnZXIsIF9zdXBlcik7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLmNvbmZpZyA9IG51bGw7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5nYW1lTm9kZXMgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5zcGFjZXNoaXBzID0gbnVsbDtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuYXN0ZXJvaWRzID0gbnVsbDtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuYnVsbGV0cyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gR2FtZU1hbmFnZXIoY3JlYXRvciwgY29uZmlnKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLmdhbWVOb2RlcyA9IGVuZ2luZS5nZXROb2RlTGlzdChHYW1lTm9kZSk7XG4gICAgdGhpcy5zcGFjZXNoaXBzID0gZW5naW5lLmdldE5vZGVMaXN0KFNwYWNlc2hpcE5vZGUpO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gZW5naW5lLmdldE5vZGVMaXN0KEFzdGVyb2lkQ29sbGlzaW9uTm9kZSk7XG4gICAgdGhpcy5idWxsZXRzID0gZW5naW5lLmdldE5vZGVMaXN0KEJ1bGxldENvbGxpc2lvbk5vZGUpO1xuICB9O1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIGFzdGVyb2lkLCBhc3Rlcm9pZENvdW50LCBjbGVhclRvQWRkU3BhY2VzaGlwLCBpLCBuZXdTcGFjZXNoaXBQb3NpdGlvbiwgbm9kZSwgcG9zaXRpb24sIHNwYWNlc2hpcDtcbiAgICBub2RlID0gdGhpcy5nYW1lTm9kZXMuaGVhZDtcbiAgICBpZiAobm9kZSAmJiBub2RlLnN0YXRlLnBsYXlpbmcpIHtcbiAgICAgIGlmICh0aGlzLnNwYWNlc2hpcHMuZW1wdHkpIHtcbiAgICAgICAgaWYgKG5vZGUuc3RhdGUubGl2ZXMgPiAwKSB7XG4gICAgICAgICAgbmV3U3BhY2VzaGlwUG9zaXRpb24gPSBuZXcgUG9pbnQodGhpcy5jb25maWcud2lkdGggKiAwLjUsIHRoaXMuY29uZmlnLmhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgY2xlYXJUb0FkZFNwYWNlc2hpcCA9IHRydWU7XG4gICAgICAgICAgYXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkcy5oZWFkO1xuICAgICAgICAgIHdoaWxlIChhc3Rlcm9pZCkge1xuICAgICAgICAgICAgaWYgKGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLmRpc3RhbmNlVG8obmV3U3BhY2VzaGlwUG9zaXRpb24pIDw9IGFzdGVyb2lkLnBvc2l0aW9uLmNvbGxpc2lvblJhZGl1cyArIDUwKSB7XG4gICAgICAgICAgICAgIGNsZWFyVG9BZGRTcGFjZXNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3Rlcm9pZCA9IGFzdGVyb2lkLm5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjbGVhclRvQWRkU3BhY2VzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0b3IuY3JlYXRlU3BhY2VzaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuc3RhdGUucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVXYWl0Rm9yQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXN0ZXJvaWRzLmVtcHR5ICYmIHRoaXMuYnVsbGV0cy5lbXB0eSAmJiAhdGhpcy5zcGFjZXNoaXBzLmVtcHR5KSB7XG4gICAgICAgIHNwYWNlc2hpcCA9IHRoaXMuc3BhY2VzaGlwcy5oZWFkO1xuICAgICAgICBub2RlLnN0YXRlLmxldmVsKys7XG4gICAgICAgIGFzdGVyb2lkQ291bnQgPSAyICsgbm9kZS5zdGF0ZS5sZXZlbDtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgYXN0ZXJvaWRDb3VudCkge1xuICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLnJhbmRvbSgpICogdGhpcy5jb25maWcud2lkdGgsIE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbmZpZy5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKCEocG9zaXRpb24uZGlzdGFuY2VUbyhzcGFjZXNoaXAucG9zaXRpb24ucG9zaXRpb24pIDw9IDgwKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZUFzdGVyb2lkKDMwLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgICArK2k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLmdhbWVOb2RlcyA9IG51bGw7XG4gICAgdGhpcy5zcGFjZXNoaXBzID0gbnVsbDtcbiAgICB0aGlzLmFzdGVyb2lkcyA9IG51bGw7XG4gICAgdGhpcy5idWxsZXRzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gR2FtZU1hbmFnZXI7XG5cbn0pKGFzaC5jb3JlLlN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdhbWVfbWFuYWdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBHdW5Db250cm9sTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5HdW5Db250cm9sTm9kZSA9IGV4YW1wbGUubm9kZXMuR3VuQ29udHJvbE5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5HdW5Db250cm9sU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoR3VuQ29udHJvbFN5c3RlbSwgX3N1cGVyKTtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5rZXlQb2xsID0gbnVsbDtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5ub2RlTGlzdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gR3VuQ29udHJvbFN5c3RlbShrZXlQb2xsLCBjcmVhdG9yKSB7XG4gICAgdGhpcy5rZXlQb2xsID0ga2V5UG9sbDtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEd1bkNvbnRyb2xTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgR3VuQ29udHJvbE5vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHZhciBjb250cm9sLCBndW4sIHBvc2l0aW9uO1xuICAgIGNvbnRyb2wgPSBub2RlLmNvbnRyb2w7XG4gICAgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICAgIGd1biA9IG5vZGUuZ3VuO1xuICAgIGd1bi5zaG9vdGluZyA9IHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC50cmlnZ2VyKTtcbiAgICBndW4udGltZVNpbmNlTGFzdFNob3QgKz0gdGltZTtcbiAgICBpZiAoZ3VuLnNob290aW5nICYmIGd1bi50aW1lU2luY2VMYXN0U2hvdCA+PSBndW4ubWluaW11bVNob3RJbnRlcnZhbCkge1xuICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVVzZXJCdWxsZXQoZ3VuLCBwb3NpdGlvbik7XG4gICAgICBndW4udGltZVNpbmNlTGFzdFNob3QgPSAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gR3VuQ29udHJvbFN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndW5fY29udHJvbF9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgSHVkTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5IdWROb2RlID0gZXhhbXBsZS5ub2Rlcy5IdWROb2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuSHVkU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoSHVkU3lzdGVtLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEh1ZFN5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBIdWRTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgSHVkTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEh1ZFN5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICBub2RlLmh1ZC52aWV3LnNldExpdmVzKG5vZGUuc3RhdGUubGl2ZXMpO1xuICAgIG5vZGUuaHVkLnZpZXcuc2V0U2NvcmUobm9kZS5zdGF0ZS5oaXRzKTtcbiAgfTtcblxuICByZXR1cm4gSHVkU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh1ZF9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgTW90aW9uQ29udHJvbE5vZGUsIGFzaCwgYjJWZWMyLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Nb3Rpb25Db250cm9sTm9kZSA9IGV4YW1wbGUubm9kZXMuTW90aW9uQ29udHJvbE5vZGU7XG5cbmIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMjtcblxuZXhhbXBsZS5zeXN0ZW1zLk1vdGlvbkNvbnRyb2xTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhNb3Rpb25Db250cm9sU3lzdGVtLCBfc3VwZXIpO1xuXG4gIE1vdGlvbkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLmtleVBvbGwgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbkNvbnRyb2xTeXN0ZW0oa2V5UG9sbCkge1xuICAgIHRoaXMua2V5UG9sbCA9IGtleVBvbGw7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgTW90aW9uQ29udHJvbFN5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBNb3Rpb25Db250cm9sTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIE1vdGlvbkNvbnRyb2xTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdmFyIGNvbnRyb2wsIGxlZnQsIG1vdGlvbiwgcGh5c2ljcywgcG9zaXRpb24sIHJpZ2h0O1xuICAgIGNvbnRyb2wgPSBub2RlLmNvbnRyb2w7XG4gICAgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICAgIG1vdGlvbiA9IG5vZGUubW90aW9uO1xuICAgIHBoeXNpY3MgPSBub2RlLnBoeXNpY3M7XG4gICAgbGVmdCA9IHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC5sZWZ0KTtcbiAgICByaWdodCA9IHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC5yaWdodCk7XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHBvc2l0aW9uLnJvdGF0aW9uIC09IGNvbnRyb2wucm90YXRpb25SYXRlICogdGltZTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0KSB7XG4gICAgICBwb3NpdGlvbi5yb3RhdGlvbiArPSBjb250cm9sLnJvdGF0aW9uUmF0ZSAqIHRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleVBvbGwuaXNEb3duKGNvbnRyb2wuYWNjZWxlcmF0ZSkpIHtcbiAgICAgIG1vdGlvbi52ZWxvY2l0eS54ICs9IE1hdGguY29zKHBvc2l0aW9uLnJvdGF0aW9uKSAqIGNvbnRyb2wuYWNjZWxlcmF0aW9uUmF0ZSAqIHRpbWU7XG4gICAgICBtb3Rpb24udmVsb2NpdHkueSArPSBNYXRoLnNpbihwb3NpdGlvbi5yb3RhdGlvbikgKiBjb250cm9sLmFjY2VsZXJhdGlvblJhdGUgKiB0aW1lO1xuICAgIH1cbiAgICBpZiAobGVmdCkge1xuICAgICAgcGh5c2ljcy5ib2R5LkFwcGx5Rm9yY2UobmV3IGIyVmVjMigxMDAsIDEwMCksIHBoeXNpY3MuYm9keS5HZXRXb3JsZENlbnRlcigpKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0KSB7XG4gICAgICBwaHlzaWNzLmJvZHkuQXBwbHlGb3JjZShuZXcgYjJWZWMyKC0xMDAsIC0xMDApLCBwaHlzaWNzLmJvZHkuR2V0V29ybGRDZW50ZXIoKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb3Rpb25Db250cm9sU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbl9jb250cm9sX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNb3ZlbWVudE5vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuTW92ZW1lbnROb2RlID0gZXhhbXBsZS5ub2Rlcy5Nb3ZlbWVudE5vZGU7XG5cbmV4YW1wbGUuc3lzdGVtcy5Nb3ZlbWVudFN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKE1vdmVtZW50U3lzdGVtLCBfc3VwZXIpO1xuXG4gIE1vdmVtZW50U3lzdGVtLnByb3RvdHlwZS5jb25maWcgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIE1vdmVtZW50U3lzdGVtKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIE1vdmVtZW50U3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIE1vdmVtZW50Tm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIE1vdmVtZW50U3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHZhciBtb3Rpb24sIHBvc2l0aW9uLCB4RGFtcCwgeURhbXA7XG4gICAgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICAgIG1vdGlvbiA9IG5vZGUubW90aW9uO1xuICAgIHBvc2l0aW9uLnBvc2l0aW9uLnggKz0gbW90aW9uLnZlbG9jaXR5LnggKiB0aW1lO1xuICAgIHBvc2l0aW9uLnBvc2l0aW9uLnkgKz0gbW90aW9uLnZlbG9jaXR5LnkgKiB0aW1lO1xuICAgIGlmIChwb3NpdGlvbi5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgcG9zaXRpb24ucG9zaXRpb24ueCArPSB0aGlzLmNvbmZpZy53aWR0aDtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uLnBvc2l0aW9uLnggPiB0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgcG9zaXRpb24ucG9zaXRpb24ueCAtPSB0aGlzLmNvbmZpZy53aWR0aDtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uLnBvc2l0aW9uLnkgPCAwKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbi55ICs9IHRoaXMuY29uZmlnLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uLnBvc2l0aW9uLnkgPiB0aGlzLmNvbmZpZy5oZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uLnBvc2l0aW9uLnkgLT0gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgIH1cbiAgICBwb3NpdGlvbi5yb3RhdGlvbiArPSBtb3Rpb24uYW5ndWxhclZlbG9jaXR5ICogdGltZTtcbiAgICBpZiAobW90aW9uLmRhbXBpbmcgPiAwKSB7XG4gICAgICB4RGFtcCA9IE1hdGguYWJzKE1hdGguY29zKHBvc2l0aW9uLnJvdGF0aW9uKSAqIG1vdGlvbi5kYW1waW5nICogdGltZSk7XG4gICAgICB5RGFtcCA9IE1hdGguYWJzKE1hdGguc2luKHBvc2l0aW9uLnJvdGF0aW9uKSAqIG1vdGlvbi5kYW1waW5nICogdGltZSk7XG4gICAgICBpZiAobW90aW9uLnZlbG9jaXR5LnggPiB4RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueCAtPSB4RGFtcDtcbiAgICAgIH0gZWxzZSBpZiAobW90aW9uLnZlbG9jaXR5LnggPCAteERhbXApIHtcbiAgICAgICAgbW90aW9uLnZlbG9jaXR5LnggKz0geERhbXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAobW90aW9uLnZlbG9jaXR5LnkgPiB5RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueSAtPSB5RGFtcDtcbiAgICAgIH0gZWxzZSBpZiAobW90aW9uLnZlbG9jaXR5LnkgPCAteURhbXApIHtcbiAgICAgICAgbW90aW9uLnZlbG9jaXR5LnkgKz0geURhbXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb3ZlbWVudFN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlbWVudF9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgUGh5c2ljc05vZGUsIGFzaCwgYjJWZWMyLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5QaHlzaWNzTm9kZSA9IGV4YW1wbGUubm9kZXMuUGh5c2ljc05vZGU7XG5cbmIyVmVjMiA9IEJveDJELkNvbW1vbi5NYXRoLmIyVmVjMjtcblxuZXhhbXBsZS5zeXN0ZW1zLlBoeXNpY3NTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhQaHlzaWNzU3lzdGVtLCBfc3VwZXIpO1xuXG4gIFBoeXNpY3NTeXN0ZW0ucHJvdG90eXBlLndvcmxkID0gbnVsbDtcblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5jb3VudCA9IDA7XG5cbiAgUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUua291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3NTeXN0ZW0od29ybGQpIHtcbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLm5vZGVMaXN0ID0gZW5naW5lLmdldE5vZGVMaXN0KFBoeXNpY3NOb2RlKTtcbiAgfTtcblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy5ub2RlTGlzdCA9IG51bGw7XG4gIH07XG5cbiAgUGh5c2ljc1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMud29ybGQuU3RlcCh0aW1lLCAxMCwgMTApO1xuICAgIHRoaXMud29ybGQuQ2xlYXJGb3JjZXMoKTtcbiAgICBub2RlID0gdGhpcy5ub2RlTGlzdC5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU5vZGUobm9kZSwgdGltZSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgfTtcblxuICBQaHlzaWNzU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHRoaXMuY291bnQrKztcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gNjApIHtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGh5c2ljc1N5c3RlbTtcblxufSkoYXNoLmNvcmUuU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGh5c2ljc19zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgUmVuZGVyTm9kZSwgYXNoLCBleGFtcGxlLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5SZW5kZXJOb2RlID0gZXhhbXBsZS5ub2Rlcy5SZW5kZXJOb2RlO1xuXG5leGFtcGxlLnN5c3RlbXMuUmVuZGVyU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoUmVuZGVyU3lzdGVtLCBfc3VwZXIpO1xuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gUmVuZGVyU3lzdGVtKGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gZW5naW5lLmdldE5vZGVMaXN0KFJlbmRlck5vZGUpO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIHRoaXMuYWRkVG9EaXNwbGF5KG5vZGUpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gIH07XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy5ub2RlcyA9IG51bGw7XG4gIH07XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIGRpc3BsYXksIGdyYXBoaWMsIG5vZGUsIHBvc2l0aW9uO1xuICAgIHRoaXMuZ3JhcGhpYy5zYXZlKCk7XG4gICAgdGhpcy5ncmFwaGljLnRyYW5zbGF0ZSgwLCAwKTtcbiAgICB0aGlzLmdyYXBoaWMucm90YXRlKDApO1xuICAgIHRoaXMuZ3JhcGhpYy5jbGVhclJlY3QoMCwgMCwgdGhpcy5ncmFwaGljLmNhbnZhcy53aWR0aCwgdGhpcy5ncmFwaGljLmNhbnZhcy5oZWlnaHQpO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGRpc3BsYXkgPSBub2RlLmRpc3BsYXk7XG4gICAgICBncmFwaGljID0gZGlzcGxheS5ncmFwaGljO1xuICAgICAgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICAgICAgZ3JhcGhpYy54ID0gcG9zaXRpb24ucG9zaXRpb24ueDtcbiAgICAgIGdyYXBoaWMueSA9IHBvc2l0aW9uLnBvc2l0aW9uLnk7XG4gICAgICBncmFwaGljLnJvdGF0aW9uID0gcG9zaXRpb24ucm90YXRpb247XG4gICAgICBncmFwaGljLmRyYXcoKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlclN5c3RlbTtcblxufSkoYXNoLmNvcmUuU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleGFtcGxlO1xuXG5leGFtcGxlID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5leGFtcGxlLnN5c3RlbXMuU3lzdGVtUHJpb3JpdGllcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU3lzdGVtUHJpb3JpdGllcygpIHt9XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5wcmVVcGRhdGUgPSAxO1xuXG4gIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlID0gMjtcblxuICBTeXN0ZW1Qcmlvcml0aWVzLm1vdmUgPSAzO1xuXG4gIFN5c3RlbVByaW9yaXRpZXMucmVzb2x2ZUNvbGxpc2lvbnMgPSA0O1xuXG4gIFN5c3RlbVByaW9yaXRpZXMuc3RhdGVNYWNoaW5lcyA9IDU7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5hbmltYXRlID0gNjtcblxuICBTeXN0ZW1Qcmlvcml0aWVzLnJlbmRlciA9IDc7XG5cbiAgcmV0dXJuIFN5c3RlbVByaW9yaXRpZXM7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9wcmlvcml0aWVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFzdGVyb2lkQ29sbGlzaW9uTm9kZSwgR2FtZU5vZGUsIFdhaXRGb3JTdGFydE5vZGUsIGFzaCwgZXhhbXBsZSxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuZXhhbXBsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuV2FpdEZvclN0YXJ0Tm9kZSA9IGV4YW1wbGUubm9kZXMuV2FpdEZvclN0YXJ0Tm9kZTtcblxuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gZXhhbXBsZS5ub2Rlcy5Bc3Rlcm9pZENvbGxpc2lvbk5vZGU7XG5cbkdhbWVOb2RlID0gZXhhbXBsZS5ub2Rlcy5HYW1lTm9kZTtcblxuZXhhbXBsZS5zeXN0ZW1zLldhaXRGb3JTdGFydFN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFdhaXRGb3JTdGFydFN5c3RlbSwgX3N1cGVyKTtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLmdhbWVOb2RlcyA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS53YWl0Tm9kZXMgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUuYXN0ZXJvaWRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnRTeXN0ZW0oY3JlYXRvcikge1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMud2FpdE5vZGVzID0gZW5naW5lLmdldE5vZGVMaXN0KFdhaXRGb3JTdGFydE5vZGUpO1xuICAgIHRoaXMuZ2FtZU5vZGVzID0gZW5naW5lLmdldE5vZGVMaXN0KEdhbWVOb2RlKTtcbiAgICB0aGlzLmFzdGVyb2lkcyA9IGVuZ2luZS5nZXROb2RlTGlzdChBc3Rlcm9pZENvbGxpc2lvbk5vZGUpO1xuICB9O1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMud2FpdE5vZGVzID0gbnVsbDtcbiAgICB0aGlzLmdhbWVOb2RlcyA9IG51bGw7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIGFzdGVyb2lkLCBnYW1lLCBub2RlO1xuICAgIG5vZGUgPSB0aGlzLndhaXROb2Rlcy5oZWFkO1xuICAgIGdhbWUgPSB0aGlzLmdhbWVOb2Rlcy5oZWFkO1xuICAgIGlmIChub2RlICYmIG5vZGUud2FpdC5zdGFydEdhbWUgJiYgZ2FtZSkge1xuICAgICAgYXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkcy5oZWFkO1xuICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KGFzdGVyb2lkLmVudGl0eSk7XG4gICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgIH1cbiAgICAgIGdhbWUuc3RhdGUuc2V0Rm9yU3RhcnQoKTtcbiAgICAgIG5vZGUud2FpdC5zdGFydEdhbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUVudGl0eShub2RlLmVudGl0eSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBXYWl0Rm9yU3RhcnRTeXN0ZW07XG5cbn0pKGFzaC5jb3JlLlN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXRfZm9yX3N0YXJ0X3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBOb2RlTGlzdCwgTm9kZVBvb2wsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbk5vZGVMaXN0ID0gYXNoLmNvcmUuTm9kZUxpc3Q7XG5cbk5vZGVQb29sID0gYXNoLmNvcmUuTm9kZVBvb2w7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGUgZGVmYXVsdCBjbGFzcyBmb3IgbWFuYWdpbmcgYSBOb2RlTGlzdC4gVGhpcyBjbGFzcyBjcmVhdGVzIHRoZSBOb2RlTGlzdCBhbmQgYWRkcyBhbmQgcmVtb3Zlc1xuICogbm9kZXMgdG8vZnJvbSB0aGUgbGlzdCBhcyB0aGUgZW50aXRpZXMgYW5kIHRoZSBjb21wb25lbnRzIGluIHRoZSBlbmdpbmUgY2hhbmdlLlxuICpcbiAqIEl0IHVzZXMgdGhlIGJhc2ljIGVudGl0eSBtYXRjaGluZyBwYXR0ZXJuIG9mIGFuIGVudGl0eSBzeXN0ZW0gLSBlbnRpdGllcyBhcmUgYWRkZWQgdG8gdGhlIGxpc3QgaWZcbiAqIHRoZXkgY29udGFpbiBjb21wb25lbnRzIG1hdGNoaW5nIGFsbCB0aGUgcHVibGljIHByb3BlcnRpZXMgb2YgdGhlIG5vZGUgY2xhc3MuXG4gKi9cblxuYXNoLmNvcmUuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmVudGl0aWVzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubm9kZUNsYXNzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50cyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5vZGVQb29sID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuZW5naW5lID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBjb25zdHJ1Y3Rvci4gQ3JlYXRlcyBhIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5IHRvIHByb3ZpZGUgYSBOb2RlTGlzdCBmb3IgdGhlXG4gICAqIGdpdmVuIG5vZGUgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2Ygbm9kZSB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIE5vZGVMaXN0IGZvci5cbiAgICogQHBhcmFtIGVuZ2luZSBUaGUgZW5naW5lIHRoYXQgdGhpcyBmYW1pbHkgaXMgbWFuYWdpbmcgdGVoIE5vZGVMaXN0IGZvci5cbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkobm9kZUNsYXNzLCBlbmdpbmUpIHtcbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlID0gX19iaW5kKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUsIHRoaXMpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cblxuICAvKlxuICAgKiBJbml0aWFsaXNlcyB0aGUgY2xhc3MuIENyZWF0ZXMgdGhlIG5vZGVsaXN0IGFuZCBvdGhlciB0b29scy4gQW5hbHlzZXMgdGhlIG5vZGUgdG8gZGV0ZXJtaW5lXG4gICAqIHdoYXQgY29tcG9uZW50IHR5cGVzIHRoZSBub2RlIHJlcXVpcmVzLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuYW1lLCB0eXBlLCBfcmVmO1xuICAgIHRoaXMubm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICB0aGlzLmVudGl0aWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMubm9kZVBvb2wgPSBuZXcgTm9kZVBvb2wodGhpcy5ub2RlQ2xhc3MsIHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHMpO1xuICAgIF9yZWYgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICB0eXBlID0gX3JlZltuYW1lXTtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBUaGUgbm9kZWxpc3QgbWFuYWdlZCBieSB0aGlzIGZhbWlseS4gVGhpcyBpcyBhIHJlZmVyZW5jZSB0aGF0IHJlbWFpbnMgdmFsaWQgYWx3YXlzXG4gICAqIHNpbmNlIGl0IGlzIHJldGFpbmVkIGFuZCByZXVzZWQgYnkgU3lzdGVtcyB0aGF0IHVzZSB0aGUgbGlzdC4gaS5lLiB3ZSBuZXZlciByZWNyZWF0ZSB0aGUgbGlzdCxcbiAgICogd2UgYWx3YXlzIG1vZGlmeSBpdCBpbiBwbGFjZS5cbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLCB7XG4gICAgbm9kZUxpc3Q6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGFuIGVudGl0eSBoYXMgYmVlbiBhZGRlZCB0byBpdC4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBzaG91bGQgYmUgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgYWRkIGl0IGlmIGFwcHJvcHJpYXRlLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubmV3RW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhpcy5hZGRJZk1hdGNoKGVudGl0eSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGEgY29tcG9uZW50IGhhcyBiZWVuIGFkZGVkIHRvIGFuIGVudGl0eS4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBpcyBub3QgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgc2hvdWxkIGJlLCBhbmQgYWRkIGl0IGlmIGFwcHJvcHJpYXRlLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWRUb0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aGlzLmFkZElmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYSBjb21wb25lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFuIGVudGl0eS4gV2UgY2hlY2sgaWYgdGhlIHJlbW92ZWQgY29tcG9uZW50XG4gICAqIGlzIHJlcXVpcmVkIGJ5IHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgYW5kIGlmIHNvLCB3ZSBjaGVjayBpZiB0aGUgZW50aXR5IGlzIGluIHRoaXMgdGhpcyBOb2RlTGlzdCBhbmRcbiAgICogcmVtb3ZlIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgaWYgKGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUlmTWF0Y2goZW50aXR5KTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGFuIGVudGl0eSBoYXMgYmVlbiBybW92ZWQgZnJvbSBpdC4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBpcyBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCByZW1vdmUgaXQgaWYgc28uXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aGlzLnJlbW92ZUlmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIElmIHRoZSBlbnRpdHkgaXMgbm90IGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QsIHRlc3RzIHRoZSBjb21wb25lbnRzIG9mIHRoZSBlbnRpdHkgdG8gc2VlXG4gICAqIGlmIGl0IHNob3VsZCBiZSBpbiB0aGlzIE5vZGVMaXN0IGFuZCBhZGRzIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuYWRkSWZNYXRjaCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBjb21wb25lbnRDbGFzcywgbmFtZSwgbm9kZSwgX3JlZiwgX3JlZjE7XG4gICAgaWYgKHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdID09IG51bGwpIHtcbiAgICAgIF9yZWYgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3MgPSBfcmVmW25hbWVdO1xuICAgICAgICBpZiAoIWVudGl0eS5oYXMoY29tcG9uZW50Q2xhc3MpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlID0gdGhpcy5ub2RlUG9vbC5nZXQoKTtcbiAgICAgIG5vZGUuZW50aXR5ID0gZW50aXR5O1xuICAgICAgX3JlZjEgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgICAgZm9yIChuYW1lIGluIF9yZWYxKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzID0gX3JlZjFbbmFtZV07XG4gICAgICAgIG5vZGVbbmFtZV0gPSBlbnRpdHkuZ2V0KGNvbXBvbmVudENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdID0gbm9kZTtcbiAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZXMgdGhlIGVudGl0eSBpZiBpdCBpcyBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0LlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUucmVtb3ZlSWZNYXRjaCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChlbnRpdHkubmFtZSBpbiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICBub2RlID0gdGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV07XG4gICAgICB0aGlzLm5vZGVzLnJlbW92ZShub2RlKTtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS51cGRhdGluZykge1xuICAgICAgICB0aGlzLm5vZGVQb29sLmNhY2hlKG5vZGUpO1xuICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVDb21wbGV0ZS5hZGQodGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vZGVQb29sLmRpc3Bvc2Uobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmVsZWFzZXMgdGhlIG5vZGVzIHRoYXQgd2VyZSBhZGRlZCB0byB0aGUgbm9kZSBwb29sIGR1cmluZyB0aGlzIGVuZ2luZSB1cGRhdGUsIHNvIHRoZXkgY2FuXG4gICAqIGJlIHJldXNlZC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLnJlbGVhc2VOb2RlUG9vbENhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbmdpbmUudXBkYXRlQ29tcGxldGUucmVtb3ZlKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUpO1xuICAgIHRoaXMubm9kZVBvb2wucmVsZWFzZUNhY2hlKCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmVzIGFsbCBub2RlcyBmcm9tIHRoZSBOb2RlTGlzdC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmNsZWFuVXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBub2RlID0gdGhpcy5ub2Rlcy5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB0aGlzLmVudGl0aWVzLnJlbW92ZShub2RlLmVudGl0eSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLm5vZGVzLnJlbW92ZUFsbCgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X21hdGNoaW5nX2ZhbWlseS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBDb21wb25lbnRNYXRjaGluZ0ZhbWlseSwgRGljdGlvbmFyeSwgRW50aXR5TGlzdCwgU2lnbmFsMCwgU3lzdGVtTGlzdCwgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgPSBhc2guY29yZS5Db21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxuRW50aXR5TGlzdCA9IGFzaC5jb3JlLkVudGl0eUxpc3Q7XG5cblNpZ25hbDAgPSBhc2guc2lnbmFscy5TaWduYWwwO1xuXG5TeXN0ZW1MaXN0ID0gYXNoLmNvcmUuU3lzdGVtTGlzdDtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoZSBFbmdpbmUgY2xhc3MgaXMgdGhlIGNlbnRyYWwgcG9pbnQgZm9yIGNyZWF0aW5nIGFuZCBtYW5hZ2luZyB5b3VyIGdhbWUgc3RhdGUuIEFkZFxuICogZW50aXRpZXMgYW5kIHN5c3RlbXMgdG8gdGhlIGVuZ2luZSwgYW5kIGZldGNoIGZhbWlsaWVzIG9mIG5vZGVzIGZyb20gdGhlIGVuZ2luZS5cbiAqL1xuXG5hc2guY29yZS5FbmdpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TmFtZXMgPSBudWxsO1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TGlzdCA9IG51bGw7XG5cbiAgRW5naW5lLnByb3RvdHlwZS5zeXN0ZW1MaXN0ID0gbnVsbDtcblxuICBFbmdpbmUucHJvdG90eXBlLmZhbWlsaWVzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZW5naW5lIGlzIGN1cnJlbnRseSBpbiBpdHMgdXBkYXRlIGxvb3AuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUudXBkYXRpbmcgPSBmYWxzZTtcblxuXG4gIC8qXG4gICAqIERpc3BhdGNoZWQgd2hlbiB0aGUgdXBkYXRlIGxvb3AgZW5kcy4gSWYgeW91IHdhbnQgdG8gYWRkIGFuZCByZW1vdmUgc3lzdGVtcyBmcm9tIHRoZVxuICAgKiBlbmdpbmUgaXQgaXMgdXN1YWxseSBiZXN0IG5vdCB0byBkbyBzbyBkdXJpbmcgdGhlIHVwZGF0ZSBsb29wLiBUbyBhdm9pZCB0aGlzIHlvdSBjYW5cbiAgICogbGlzdGVuIGZvciB0aGlzIHNpZ25hbCBhbmQgbWFrZSB0aGUgY2hhbmdlIHdoZW4gdGhlIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnVwZGF0ZUNvbXBsZXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBjbGFzcyB1c2VkIHRvIG1hbmFnZSBub2RlIGxpc3RzLiBJbiBtb3N0IGNhc2VzIHRoZSBkZWZhdWx0IGNsYXNzIGlzIHN1ZmZpY2llbnRcbiAgICogYnV0IGl0IGlzIGV4cG9zZWQgaGVyZSBzbyBhZHZhbmNlZCBkZXZlbG9wZXJzIGNhbiBjaG9vc2UgdG8gY3JlYXRlIGFuZCB1c2UgYVxuICAgKiBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoZSBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgSUZhbWlseSBpbnRlcmZhY2UuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZmFtaWx5Q2xhc3MgPSBDb21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxuICBmdW5jdGlvbiBFbmdpbmUoKSB7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuZW50aXR5TGlzdCA9IG5ldyBFbnRpdHlMaXN0KCk7XG4gICAgdGhpcy5lbnRpdHlOYW1lcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy5zeXN0ZW1MaXN0ID0gbmV3IFN5c3RlbUxpc3QoKTtcbiAgICB0aGlzLmZhbWlsaWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlID0gbmV3IFNpZ25hbDAoKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEVuZ2luZS5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgICogUmV0dXJucyBhIHZlY3RvciBjb250YWluaW5nIGFsbCB0aGUgZW50aXRpZXMgaW4gdGhlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBlbnRpdGllczoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudGl0aWVzLCBlbnRpdHk7XG4gICAgICAgIGVudGl0aWVzID0gW107XG4gICAgICAgIGVudGl0eSA9IHRoaXMuZW50aXR5TGlzdC5oZWFkO1xuICAgICAgICB3aGlsZSAoZW50aXR5KSB7XG4gICAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgZW50aXR5ID0gZW50aXR5Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFJldHVybnMgYSB2ZWN0b3IgY29udGFpbmluZyBhbGwgdGhlIHN5c3RlbXMgaW4gdGhlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBzeXN0ZW1zOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3lzdGVtLCBzeXN0ZW1zO1xuICAgICAgICBzeXN0ZW1zID0gW107XG4gICAgICAgIHN5c3RlbSA9IHRoaXMuc3lzdGVtTGlzdC5oZWFkO1xuICAgICAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICAgICAgc3lzdGVtcy5wdXNoKHN5c3RlbSk7XG4gICAgICAgICAgc3lzdGVtID0gc3lzdGVtLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5c3RlbXM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8qXG4gICAqIEFkZCBhbiBlbnRpdHkgdG8gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IHRvIGFkZC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5hZGRFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIGlmICh0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXSkge1xuICAgICAgdGhyb3cgXCJUaGUgZW50aXR5IG5hbWUgXCIgKyBlbnRpdHkubmFtZSArIFwiIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgZW50aXR5LlwiO1xuICAgIH1cbiAgICB0aGlzLmVudGl0eUxpc3QuYWRkKGVudGl0eSk7XG4gICAgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV0gPSBlbnRpdHk7XG4gICAgZW50aXR5LmNvbXBvbmVudEFkZGVkLmFkZCh0aGlzLmNvbXBvbmVudEFkZGVkKTtcbiAgICBlbnRpdHkuY29tcG9uZW50UmVtb3ZlZC5hZGQodGhpcy5jb21wb25lbnRSZW1vdmVkKTtcbiAgICBlbnRpdHkubmFtZUNoYW5nZWQuYWRkKHRoaXMuZW50aXR5TmFtZUNoYW5nZWQpO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5Lm5ld0VudGl0eShlbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhbiBlbnRpdHkgZnJvbSB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gcmVtb3ZlLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgZW50aXR5LmNvbXBvbmVudEFkZGVkLnJlbW92ZSh0aGlzLmNvbXBvbmVudEFkZGVkKTtcbiAgICBlbnRpdHkuY29tcG9uZW50UmVtb3ZlZC5yZW1vdmUodGhpcy5jb21wb25lbnRSZW1vdmVkKTtcbiAgICBlbnRpdHkubmFtZUNoYW5nZWQucmVtb3ZlKHRoaXMuZW50aXR5TmFtZUNoYW5nZWQpO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LnJlbW92ZUVudGl0eShlbnRpdHkpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV07XG4gICAgdGhpcy5lbnRpdHlMaXN0LnJlbW92ZShlbnRpdHkpO1xuICB9O1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TmFtZUNoYW5nZWQgPSBmdW5jdGlvbihlbnRpdHksIG9sZE5hbWUpIHtcbiAgICBpZiAodGhpcy5lbnRpdHlOYW1lc1tvbGROYW1lXSA9PT0gZW50aXR5KSB7XG4gICAgICBkZWxldGUgdGhpcy5lbnRpdHlOYW1lc1tvbGROYW1lXTtcbiAgICAgIHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdID0gZW50aXR5O1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhbiBlbnRpdHkgYmFzZWQgbiBpdHMgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGVudGl0eVxuICAgKiBAcmV0dXJuIFRoZSBlbnRpdHksIG9yIG51bGwgaWYgbm8gZW50aXR5IHdpdGggdGhhdCBuYW1lIGV4aXN0cyBvbiB0aGUgZW5naW5lXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0RW50aXR5QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eU5hbWVzW25hbWVdO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFsbCBlbnRpdGllcyBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlQWxsRW50aXRpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB3aGlsZSAodGhpcy5lbnRpdHlMaXN0LmhlYWQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlRW50aXR5KHRoaXMuZW50aXR5TGlzdC5oZWFkKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgQHByaXZhdGVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5jb21wb25lbnRBZGRlZCA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LmNvbXBvbmVudEFkZGVkVG9FbnRpdHkoZW50aXR5LCBjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgIEBwcml2YXRlXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZCA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LmNvbXBvbmVudFJlbW92ZWRGcm9tRW50aXR5KGVudGl0eSwgY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhIGNvbGxlY3Rpb24gb2Ygbm9kZXMgZnJvbSB0aGUgZW5naW5lLCBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUgbm9kZSByZXF1aXJlZC5cbiAgICpcbiAgICogPHA+VGhlIGVuZ2luZSB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgTm9kZUxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0IGFuZFxuICAgKiB3aWxsIGtlZXAgaXRzIGNvbnRlbnRzIHVwIHRvIGRhdGUgYXMgZW50aXRpZXMgYXJlIGFkZGVkIHRvIGFuZCByZW1vdmVkIGZyb20gdGhlXG4gICAqIGVuZ2luZS48L3A+XG4gICAqXG4gICAqIDxwPklmIGEgTm9kZUxpc3QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkLCByZWxlYXNlIGl0IHdpdGggdGhlIHJlbGVhc2VOb2RlTGlzdCBtZXRob2QuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUNsYXNzIFRoZSB0eXBlIG9mIG5vZGUgcmVxdWlyZWQuXG4gICAqIEByZXR1cm4gQSBsaW5rZWQgbGlzdCBvZiBhbGwgbm9kZXMgb2YgdGhpcyB0eXBlIGZyb20gYWxsIGVudGl0aWVzIGluIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0Tm9kZUxpc3QgPSBmdW5jdGlvbihub2RlQ2xhc3MpIHtcbiAgICB2YXIgZW50aXR5LCBmYW1pbHk7XG4gICAgaWYgKG5vZGVDbGFzcy5uYW1lIGluIHRoaXMuZmFtaWxpZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXS5ub2RlTGlzdDtcbiAgICB9XG4gICAgZmFtaWx5ID0gbmV3IHRoaXMuZmFtaWx5Q2xhc3Mobm9kZUNsYXNzLCB0aGlzKTtcbiAgICB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXSA9IGZhbWlseTtcbiAgICBlbnRpdHkgPSB0aGlzLmVudGl0eUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoZW50aXR5KSB7XG4gICAgICBmYW1pbHkubmV3RW50aXR5KGVudGl0eSk7XG4gICAgICBlbnRpdHkgPSBlbnRpdHkubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbWlseS5ub2RlTGlzdDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIElmIGEgTm9kZUxpc3QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkLCB0aGlzIG1ldGhvZCB3aWxsIHN0b3AgdGhlIGVuZ2luZSB1cGRhdGluZ1xuICAgKiB0aGUgbGlzdCBhbmQgd2lsbCByZWxlYXNlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBsaXN0IHdpdGhpbiB0aGUgZnJhbWV3b3JrXG4gICAqIGNsYXNzZXMsIGVuYWJsaW5nIGl0IHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKlxuICAgKiA8cD5JdCBpcyBub3QgZXNzZW50aWFsIHRvIHJlbGVhc2UgYSBsaXN0LCBidXQgcmVsZWFzaW5nIGl0IHdpbGwgZnJlZVxuICAgKiB1cCBtZW1vcnkgYW5kIHByb2Nlc3NvciByZXNvdXJjZXMuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUNsYXNzIFRoZSB0eXBlIG9mIHRoZSBub2RlIGNsYXNzIGlmIHRoZSBsaXN0IHRvIGJlIHJlbGVhc2VkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbGVhc2VOb2RlTGlzdCA9IGZ1bmN0aW9uKG5vZGVDbGFzcykge1xuICAgIGlmIChub2RlQ2xhc3MubmFtZSBpbiB0aGlzLmZhbWlsaWVzKSB7XG4gICAgICB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXS5jbGVhblVwKCk7XG4gICAgICBkZWxldGUgdGhpcy5mYW1pbGllc1tub2RlQ2xhc3MubmFtZV07XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQWRkIGEgc3lzdGVtIHRvIHRoZSBlbmdpbmUsIGFuZCBzZXQgaXRzIHByaW9yaXR5IGZvciB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlXG4gICAqIHN5c3RlbXMgYXJlIHVwZGF0ZWQgYnkgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcC5cbiAgICpcbiAgICogPHA+VGhlIHByaW9yaXR5IGRpY3RhdGVzIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3lzdGVtcyBhcmUgdXBkYXRlZCBieSB0aGUgZW5naW5lIHVwZGF0ZVxuICAgKiBsb29wLiBMb3dlciBudW1iZXJzIGZvciBwcmlvcml0eSBhcmUgdXBkYXRlZCBmaXJzdC4gaS5lLiBhIHByaW9yaXR5IG9mIDEgaXNcbiAgICogdXBkYXRlZCBiZWZvcmUgYSBwcmlvcml0eSBvZiAyLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgc3lzdGVtIHRvIGFkZCB0byB0aGUgZW5naW5lLlxuICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIHByaW9yaXR5IGZvciB1cGRhdGluZyB0aGUgc3lzdGVtcyBkdXJpbmcgdGhlIGVuZ2luZSBsb29wLiBBXG4gICAqIGxvd2VyIG51bWJlciBtZWFucyB0aGUgc3lzdGVtIGlzIHVwZGF0ZWQgc29vbmVyLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmFkZFN5c3RlbSA9IGZ1bmN0aW9uKHN5c3RlbSwgcHJpb3JpdHkpIHtcbiAgICBzeXN0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzeXN0ZW0uYWRkVG9FbmdpbmUodGhpcyk7XG4gICAgdGhpcy5zeXN0ZW1MaXN0LmFkZChzeXN0ZW0pO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IHRoZSBzeXN0ZW0gaW5zdGFuY2Ugb2YgYSBwYXJ0aWN1bGFyIHR5cGUgZnJvbSB3aXRoaW4gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2Ygc3lzdGVtXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlIG9mIHRoZSBzeXN0ZW0gdHlwZSB0aGF0IGlzIGluIHRoZSBlbmdpbmUsIG9yXG4gICAqIG51bGwgaWYgbm8gc3lzdGVtcyBvZiB0aGlzIHR5cGUgYXJlIGluIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBzeXN0ZW1MaXN0LmdldCh0eXBlKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhIHN5c3RlbSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIHN5c3RlbSB0byByZW1vdmUgZnJvbSB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZVN5c3RlbSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHRoaXMuc3lzdGVtTGlzdC5yZW1vdmUoc3lzdGVtKTtcbiAgICBzeXN0ZW0ucmVtb3ZlRnJvbUVuZ2luZSh0aGlzKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhbGwgc3lzdGVtcyBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlQWxsU3lzdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlICh0aGlzLnN5c3RlbUxpc3QuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVTeXN0ZW0odGhpcy5zeXN0ZW1MaXN0LmhlYWQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFVwZGF0ZSB0aGUgZW5naW5lLiBUaGlzIGNhdXNlcyB0aGUgZW5naW5lIHVwZGF0ZSBsb29wIHRvIHJ1biwgY2FsbGluZyB1cGRhdGUgb24gYWxsIHRoZVxuICAgKiBzeXN0ZW1zIGluIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIDxwPlRoZSBwYWNrYWdlIGFzaC50aWNrIGNvbnRhaW5zIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBwcm92aWRlXG4gICAqIGEgc3RlYWR5IG9yIHZhcmlhYmxlIHRpY2sgdGhhdCBjYWxscyB0aGlzIHVwZGF0ZSBtZXRob2QuPC9wPlxuICAgKlxuICAgKiBAdGltZSBUaGUgZHVyYXRpb24sIGluIHNlY29uZHMsIG9mIHRoaXMgdXBkYXRlIHN0ZXAuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBzeXN0ZW07XG4gICAgdGhpcy51cGRhdGluZyA9IHRydWU7XG4gICAgc3lzdGVtID0gdGhpcy5zeXN0ZW1MaXN0LmhlYWQ7XG4gICAgd2hpbGUgKHN5c3RlbSkge1xuICAgICAgc3lzdGVtLnVwZGF0ZSh0aW1lKTtcbiAgICAgIHN5c3RlbSA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLnVwZGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBTaWduYWwyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwyID0gYXNoLnNpZ25hbHMuU2lnbmFsMjtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIEFuIGVudGl0eSBpcyBjb21wb3NlZCBmcm9tIGNvbXBvbmVudHMuIEFzIHN1Y2gsIGl0IGlzIGVzc2VudGlhbGx5IGEgY29sbGVjdGlvbiBvYmplY3QgZm9yIGNvbXBvbmVudHMuXG4gKiBTb21ldGltZXMsIHRoZSBlbnRpdGllcyBpbiBhIGdhbWUgd2lsbCBtaXJyb3IgdGhlIGFjdHVhbCBjaGFyYWN0ZXJzIGFuZCBvYmplY3RzIGluIHRoZSBnYW1lLCBidXQgdGhpc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiA8cD5Db21wb25lbnRzIGFyZSBzaW1wbGUgdmFsdWUgb2JqZWN0cyB0aGF0IGNvbnRhaW4gZGF0YSByZWxldmFudCB0byB0aGUgZW50aXR5LiBFbnRpdGllc1xuICogd2l0aCBzaW1pbGFyIGZ1bmN0aW9uYWxpdHkgd2lsbCBoYXZlIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBjb21wb25lbnRzLiBTbyB3ZSBtaWdodCBoYXZlXG4gKiBhIHBvc2l0aW9uIGNvbXBvbmVudDwvcD5cbiAqXG4gKiA8cD48Y29kZT5jbGFzcyBQb3NpdGlvbkNvbXBvbmVudFxuICoge1xuICogICBwdWJsaWMgdmFyIHg6RmxvYXQ7XG4gKiAgIHB1YmxpYyB2YXIgeTpGbG9hdDtcbiAqIH08L2NvZGU+PC9wPlxuICpcbiAqIDxwPkFsbCBlbnRpdGllcyB0aGF0IGhhdmUgYSBwb3NpdGlvbiBpbiB0aGUgZ2FtZSB3b3JsZCwgd2lsbCBoYXZlIGFuIGluc3RhbmNlIG9mIHRoZVxuICogcG9zaXRpb24gY29tcG9uZW50LiBTeXN0ZW1zIG9wZXJhdGUgb24gZW50aXRpZXMgYmFzZWQgb24gdGhlIGNvbXBvbmVudHMgdGhleSBoYXZlLjwvcD5cbiAqL1xuXG5hc2guY29yZS5FbnRpdHkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lQ291bnQ7XG5cbiAgbmFtZUNvdW50ID0gMDtcblxuXG4gIC8qXG4gICAqIE9wdGlvbmFsLCBnaXZlIHRoZSBlbnRpdHkgYSBuYW1lLiBUaGlzIGNhbiBoZWxwIHdpdGggZGVidWdnaW5nIGFuZCB3aXRoIHNlcmlhbGlzaW5nIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuX25hbWUgPSAnJztcblxuXG4gIC8qXG4gICAqIFRoaXMgc2lnbmFsIGlzIGRpc3BhdGNoZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoaXMgc2lnbmFsIGlzIGRpc3BhdGNoZWQgd2hlbiBhIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIERpc3BhdGNoZWQgd2hlbiB0aGUgbmFtZSBvZiB0aGUgZW50aXR5IGNoYW5nZXMuIFVzZWQgaW50ZXJuYWxseSBieSB0aGUgZW5naW5lIHRvIHRyYWNrIGVudGl0aWVzIGJhc2VkIG9uIHRoZWlyIG5hbWVzLlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLm5hbWVDaGFuZ2VkID0gbnVsbDtcblxuICBFbnRpdHkucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuICBFbnRpdHkucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUuY29tcG9uZW50cyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW50aXR5KG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICBuYW1lID0gJyc7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgLypcbiAgICAgICAqIEFsbCBlbnRpdGllcyBoYXZlIGEgbmFtZS4gSWYgbm8gbmFtZSBpcyBzZXQsIGEgZGVmYXVsdCBuYW1lIGlzIHVzZWQuIE5hbWVzIGFyZSB1c2VkIHRvXG4gICAgICAgKiBmZXRjaCBzcGVjaWZpYyBlbnRpdGllcyBmcm9tIHRoZSBlbmdpbmUsIGFuZCBjYW4gYWxzbyBoZWxwIHRvIGlkZW50aWZ5IGFuIGVudGl0eSB3aGVuIGRlYnVnZ2luZy5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzO1xuICAgICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcHJldmlvdXMgPSB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZUNoYW5nZWQuZGlzcGF0Y2godGhpcywgcHJldmlvdXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50QWRkZWQgPSBuZXcgU2lnbmFsMigpO1xuICAgIHRoaXMuY29tcG9uZW50UmVtb3ZlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5uYW1lQ2hhbmdlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gXCJfZW50aXR5XCIgKyAoKytuYW1lQ291bnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgY29tcG9uZW50IHRvIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCBvYmplY3QgdG8gYWRkLlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuIFRoaXMgaXMgb25seSBuZWNlc3NhcnkgaWYgdGhlIGNvbXBvbmVudFxuICAgKiBleHRlbmRzIGFub3RoZXIgY29tcG9uZW50IGNsYXNzIGFuZCB5b3Ugd2FudCB0aGUgZnJhbWV3b3JrIHRvIHRyZWF0IHRoZSBjb21wb25lbnQgYXMgb2ZcbiAgICogdGhlIGJhc2UgY2xhc3MgdHlwZS4gSWYgbm90IHNldCwgdGhlIGNsYXNzIHR5cGUgaXMgZGV0ZXJtaW5lZCBkaXJlY3RseSBmcm9tIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4gQSByZWZlcmVuY2UgdG8gdGhlIGVudGl0eS4gVGhpcyBlbmFibGVzIHRoZSBjaGFpbmluZyBvZiBjYWxscyB0byBhZGQsIHRvIG1ha2VcbiAgICogY3JlYXRpbmcgYW5kIGNvbmZpZ3VyaW5nIGVudGl0aWVzIGNsZWFuZXIuIGUuZy5cbiAgICpcbiAgICogPGNvZGU+dmFyIGVudGl0eTpFbnRpdHkgPSBuZXcgRW50aXR5KClcbiAgICogICAgIC5hZGQobmV3IFBvc2l0aW9uKDEwMCwgMjAwKVxuICAgKiAgICAgLmFkZChuZXcgRGlzcGxheShuZXcgUGxheWVyQ2xpcCgpKTs8L2NvZGU+XG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY29tcG9uZW50LCBjb21wb25lbnRDbGFzcykge1xuICAgIGlmIChjb21wb25lbnRDbGFzcyA9PSBudWxsKSB7XG4gICAgICBjb21wb25lbnRDbGFzcyA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLnJlbW92ZShjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRDbGFzcy5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmNvbXBvbmVudEFkZGVkLmRpc3BhdGNoKHRoaXMsIGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhIGNvbXBvbmVudCBmcm9tIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCB0byBiZSByZW1vdmVkLlxuICAgKiBAcmV0dXJuIHRoZSBjb21wb25lbnQsIG9yIG51bGwgaWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGV4aXN0IGluIHRoZSBlbnRpdHlcbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBjb21wb25lbnQsIG5hbWU7XG4gICAgbmFtZSA9ICdzdHJpbmcnID09PSB0eXBlb2YgY29tcG9uZW50Q2xhc3MgPyBjb21wb25lbnRDbGFzcyA6IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gICAgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW25hbWVdO1xuICAgIGlmIChjb21wb25lbnQgIT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudHNbbmFtZV07XG4gICAgICB0aGlzLmNvbXBvbmVudFJlbW92ZWQuZGlzcGF0Y2godGhpcywgbmFtZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhIGNvbXBvbmVudCBmcm9tIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCByZXF1ZXN0ZWQuXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudCwgb3IgbnVsbCBpZiBub25lIHdhcyBmb3VuZC5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Q2xhc3MubmFtZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYWxsIGNvbXBvbmVudHMgZnJvbSB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIG9uIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgY29tcG9uZW50QXJyYXksIF9pLCBfbGVuLCBfcmVmO1xuICAgIGNvbXBvbmVudEFycmF5ID0gW107XG4gICAgX3JlZiA9IHRoaXMuY29tcG9uZW50cztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGNvbXBvbmVudCA9IF9yZWZbX2ldO1xuICAgICAgY29tcG9uZW50QXJyYXkucHVzaChjb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50QXJyYXk7XG4gIH07XG5cblxuICAvKlxuICAgKiBEb2VzIHRoZSBlbnRpdHkgaGF2ZSBhIGNvbXBvbmVudCBvZiBhIHBhcnRpY3VsYXIgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IHNvdWdodC5cbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBlbnRpdHkgaGFzIGEgY29tcG9uZW50IG9mIHRoZSB0eXBlLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3MubmFtZSBpbiB0aGlzLmNvbXBvbmVudHM7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIEFuIGludGVybmFsIGNsYXNzIGZvciBhIGxpbmtlZCBsaXN0IG9mIGVudGl0aWVzLiBVc2VkIGluc2lkZSB0aGUgZnJhbWV3b3JrIGZvclxuICogbWFuYWdpbmcgdGhlIGVudGl0aWVzLlxuICovXG5cbmFzaC5jb3JlLkVudGl0eUxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVudGl0eUxpc3QoKSB7fVxuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IGVudGl0eTtcbiAgICAgIGVudGl0eS5uZXh0ID0gZW50aXR5LnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWlsLm5leHQgPSBlbnRpdHk7XG4gICAgICBlbnRpdHkucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICBlbnRpdHkubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLnRhaWwgPSBlbnRpdHk7XG4gICAgfVxuICB9O1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5oZWFkID09PSBlbnRpdHkpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBlbnRpdHkpIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICB9XG4gICAgaWYgKGVudGl0eS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5LnByZXZpb3VzLm5leHQgPSBlbnRpdHkubmV4dDtcbiAgICB9XG4gICAgaWYgKGVudGl0eS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHkubmV4dC5wcmV2aW91cyA9IGVudGl0eS5wcmV2aW91cztcbiAgICB9XG4gIH07XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVudGl0eTtcbiAgICB3aGlsZSAodGhpcy5oZWFkICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHkgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIGVudGl0eS5wcmV2aW91cyA9IG51bGw7XG4gICAgICBlbnRpdHkubmV4dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIGNsYXNzZXMgdGhhdCBhcmUgdXNlZCB0byBtYW5hZ2UgTm9kZUxpc3RzIChzZXQgYXMgdGhlIGZhbWlseUNsYXNzIHByb3BlcnR5XG4gKiBpbiB0aGUgRW5naW5lIG9iamVjdCkuIE1vc3QgZGV2ZWxvcGVycyBkb24ndCBuZWVkIHRvIHVzZSB0aGlzIHNpbmNlIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiBpcyB1c2VkIGJ5IGRlZmF1bHQgYW5kIHN1aXRzIG1vc3QgbmVlZHMuXG4gKi9cblxuYXNoLmNvcmUuRmFtaWx5ID0gKGZ1bmN0aW9uKCkge1xuICBGYW1pbHkucHJvdG90eXBlLm5vZGVzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIE5vZGVMaXN0IG1hbmFnZWQgYnkgdGhpcyBjbGFzcy4gVGhpcyBzaG91bGQgYmUgYSByZWZlcmVuY2UgdGhhdCByZW1haW5zIHZhbGlkIGFsd2F5c1xuICAgKiBzaW5jZSBpdCBpcyByZXRhaW5lZCBhbmQgcmV1c2VkIGJ5IFN5c3RlbXMgdGhhdCB1c2UgdGhlIGxpc3QuIGkuZS4gbmV2ZXIgcmVjcmVhdGUgdGhlIGxpc3QsXG4gICAqIGFsd2F5cyBtb2RpZnkgaXQgaW4gcGxhY2UuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEZhbWlseSgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBub2RlTGlzdDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFuIGVudGl0eSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgZW5naW5lLiBJdCBtYXkgYWxyZWFkeSBoYXZlIGNvbXBvbmVudHMgc28gdGVzdCB0aGUgZW50aXR5XG4gICAqIGZvciBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdC5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5uZXdFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQW4gZW50aXR5IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLiBJZiBpdCdzIGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEEgY29tcG9uZW50IGhhcyBiZWVuIGFkZGVkIHRvIGFuIGVudGl0eS4gVGVzdCB3aGV0aGVyIHRoZSBlbnRpdHkncyBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHknc1xuICAgKiBOb2RlTGlzdCBzaG91bGQgYmUgbW9kaWZpZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWRUb0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQSBjb21wb25lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFuIGVudGl0eS4gVGVzdCB3aGV0aGVyIHRoZSBlbnRpdHkncyBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHknc1xuICAgKiBOb2RlTGlzdCBzaG91bGQgYmUgbW9kaWZpZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFRoZSBmYW1pbHkgaXMgYWJvdXQgdG8gYmUgZGlzY2FyZGVkLiBDbGVhbiB1cCBhbGwgcHJvcGVydGllcyBhcyBuZWNlc3NhcnkuIFVzdWFsbHksIHlvdSB3aWxsXG4gICAqIHdhbnQgdG8gZW1wdHkgdGhlIE5vZGVMaXN0IGF0IHRoaXMgdGltZS5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5jbGVhblVwID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuICByZXR1cm4gRmFtaWx5O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYW1pbHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmNvcmUuTm9kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTm9kZSgpIHt9XG5cbiAgTm9kZS5wcm90b3R5cGUuZW50aXR5ID0gbnVsbDtcblxuICBOb2RlLnByb3RvdHlwZS5wcmV2aW91cyA9IG51bGw7XG5cbiAgTm9kZS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgcmV0dXJuIE5vZGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgU2lnbmFsMSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU2lnbmFsMSA9IGFzaC5zaWduYWxzLlNpZ25hbDE7XG5cblxuLypcbiAqIEEgY29sbGVjdGlvbiBvZiBub2Rlcy5cbiAqXG4gKiA8cD5TeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lIGFjY2VzcyB0aGUgY29tcG9uZW50cyBvZiBlbnRpdGllcyB2aWEgTm9kZUxpc3RzLiBBIE5vZGVMaXN0IGNvbnRhaW5zXG4gKiBhIG5vZGUgZm9yIGVhY2ggRW50aXR5IGluIHRoZSBlbmdpbmUgdGhhdCBoYXMgYWxsIHRoZSBjb21wb25lbnRzIHJlcXVpcmVkIGJ5IHRoZSBub2RlLiBUbyBpdGVyYXRlXG4gKiBvdmVyIGEgTm9kZUxpc3QsIHN0YXJ0IGZyb20gdGhlIGhlYWQgYW5kIHN0ZXAgdG8gdGhlIG5leHQgb24gZWFjaCBsb29wLCB1bnRpbCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqIGlzIG51bGwuIE9yIGp1c3QgdXNlIGZvciBpbiBzeW50YXguPC9wPlxuICpcbiAqIDxwPmZvciAobm9kZSBpbiBub2RlTGlzdClcbiAqIHtcbiAqICAgLy8gZG8gc3R1ZmZcbiAqIH08L3A+XG4gKlxuICogPHA+SXQgaXMgc2FmZSB0byByZW1vdmUgaXRlbXMgZnJvbSBhIG5vZGVsaXN0IGR1cmluZyB0aGUgbG9vcC4gV2hlbiBhIE5vZGUgaXMgcmVtb3ZlZCBmb3JtIHRoZVxuICogTm9kZUxpc3QgaXQncyBwcmV2aW91cyBhbmQgbmV4dCBwcm9wZXJ0aWVzIHN0aWxsIHBvaW50IHRvIHRoZSBub2RlcyB0aGF0IHdlcmUgYmVmb3JlIGFuZCBhZnRlclxuICogaXQgaW4gdGhlIE5vZGVMaXN0IGp1c3QgYmVmb3JlIGl0IHdhcyByZW1vdmVkLjwvcD5cbiAqL1xuXG5hc2guY29yZS5Ob2RlTGlzdCA9IChmdW5jdGlvbigpIHtcblxuICAvKlxuICAgKiBUaGUgZmlyc3QgaXRlbSBpbiB0aGUgbm9kZSBsaXN0LCBvciBudWxsIGlmIHRoZSBsaXN0IGNvbnRhaW5zIG5vIG5vZGVzLlxuICAgKi9cbiAgTm9kZUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGxhc3QgaXRlbSBpbiB0aGUgbm9kZSBsaXN0LCBvciBudWxsIGlmIHRoZSBsaXN0IGNvbnRhaW5zIG5vIG5vZGVzLlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgYSBub2RlIGlzIGFkZGVkIHRvIHRoZSBub2RlIGxpc3QuXG4gICAqXG4gICAqIDxwPlRoZSBzaWduYWwgd2lsbCBwYXNzIGEgc2luZ2xlIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXJzIC0gdGhlIG5vZGUgdGhhdCB3YXMgYWRkZWQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubm9kZUFkZGVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEEgc2lnbmFsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuZXZlciBhIG5vZGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBub2RlIGxpc3QuXG4gICAqXG4gICAqIDxwPlRoZSBzaWduYWwgd2lsbCBwYXNzIGEgc2luZ2xlIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXJzIC0gdGhlIG5vZGUgdGhhdCB3YXMgcmVtb3ZlZC48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5ub2RlUmVtb3ZlZCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG4gICAgdGhpcy5ub2RlQWRkZWQgPSBuZXcgU2lnbmFsMSgpO1xuICAgIHRoaXMubm9kZVJlbW92ZWQgPSBuZXcgU2lnbmFsMSgpO1xuICB9XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgbm9kZS5uZXh0ID0gbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG4gICAgdGhpcy5ub2RlQWRkZWQuZGlzcGF0Y2gobm9kZSk7XG4gIH07XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBub2RlKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgIH1cbiAgICBpZiAobm9kZS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgIH1cbiAgICB0aGlzLm5vZGVSZW1vdmVkLmRpc3BhdGNoKG5vZGUpO1xuICB9O1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAodGhpcy5oZWFkICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLm5vZGVSZW1vdmVkLmRpc3BhdGNoKG5vZGUpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9O1xuXG5cbiAgLypcbiAgICogdHJ1ZSBpZiB0aGUgbGlzdCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhOb2RlTGlzdC5wcm90b3R5cGUsIHtcbiAgICBlbXB0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZCA9PT0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLypcbiAgICogU3dhcHMgdGhlIHBvc2l0aW9ucyBvZiB0d28gbm9kZXMgaW4gdGhlIGxpc3QuIFVzZWZ1bCB3aGVuIHNvcnRpbmcgYSBsaXN0LlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKG5vZGUxLCBub2RlMikge1xuICAgIHZhciB0ZW1wO1xuICAgIGlmIChub2RlMS5wcmV2aW91cyA9PT0gbm9kZTIpIHtcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTIucHJldmlvdXM7XG4gICAgICBub2RlMi5wcmV2aW91cyA9IG5vZGUxO1xuICAgICAgbm9kZTIubmV4dCA9IG5vZGUxLm5leHQ7XG4gICAgICBub2RlMS5uZXh0ID0gbm9kZTI7XG4gICAgfSBlbHNlIGlmIChub2RlMi5wcmV2aW91cyA9PT0gbm9kZTEpIHtcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gbm9kZTEucHJldmlvdXM7XG4gICAgICBub2RlMS5wcmV2aW91cyA9IG5vZGUyO1xuICAgICAgbm9kZTEubmV4dCA9IG5vZGUyLm5leHQ7XG4gICAgICBub2RlMi5uZXh0ID0gbm9kZTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXAgPSBub2RlMS5wcmV2aW91cztcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTIucHJldmlvdXM7XG4gICAgICBub2RlMi5wcmV2aW91cyA9IHRlbXA7XG4gICAgICB0ZW1wID0gbm9kZTEubmV4dDtcbiAgICAgIG5vZGUxLm5leHQgPSBub2RlMi5uZXh0O1xuICAgICAgbm9kZTIubmV4dCA9IHRlbXA7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUxKSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZTIpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBub2RlMSkge1xuICAgICAgdGhpcy50YWlsID0gbm9kZTI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhaWwgPT09IG5vZGUyKSB7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKG5vZGUxLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBub2RlMS5wcmV2aW91cy5uZXh0ID0gbm9kZTE7XG4gICAgfVxuICAgIGlmIChub2RlMi5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgbm9kZTIucHJldmlvdXMubmV4dCA9IG5vZGUyO1xuICAgIH1cbiAgICBpZiAobm9kZTEubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZTEubmV4dC5wcmV2aW91cyA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAobm9kZTIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZTIubmV4dC5wcmV2aW91cyA9IG5vZGUyO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFBlcmZvcm1zIGFuIGluc2VydGlvbiBzb3J0IG9uIHRoZSBub2RlIGxpc3QuIEluIGdlbmVyYWwsIGluc2VydGlvbiBzb3J0IGlzIHZlcnkgZWZmaWNpZW50IHdpdGggc2hvcnQgbGlzdHNcbiAgICogYW5kIHdpdGggbGlzdHMgdGhhdCBhcmUgbW9zdGx5IHNvcnRlZCwgYnV0IGlzIGluZWZmaWNpZW50IHdpdGggbGFyZ2UgbGlzdHMgdGhhdCBhcmUgcmFuZG9tbHkgb3JkZXJlZC5cbiAgICpcbiAgICogPHA+VGhlIHNvcnQgZnVuY3Rpb24gdGFrZXMgdHdvIG5vZGVzIGFuZCByZXR1cm5zIGFuIEludC48L3A+XG4gICAqXG4gICAqIDxwPjxjb2RlPmZ1bmN0aW9uIHNvcnRGdW5jdGlvbiggbm9kZTEgOiBNb2NrTm9kZSwgbm9kZTIgOiBNb2NrTm9kZSApIDogSW50PC9jb2RlPjwvcD5cbiAgICpcbiAgICogPHA+SWYgdGhlIHJldHVybmVkIG51bWJlciBpcyBsZXNzIHRoYW4gemVybywgdGhlIGZpcnN0IG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgc2Vjb25kLiBJZiBpdCBpcyBncmVhdGVyXG4gICAqIHRoYW4gemVybyB0aGUgc2Vjb25kIG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgZmlyc3QuIElmIGl0IGlzIHplcm8gdGhlIG9yZGVyIG9mIHRoZSBub2RlcyBkb2Vzbid0IG1hdHRlclxuICAgKiBhbmQgdGhlIG9yaWdpbmFsIG9yZGVyIHdpbGwgYmUgcmV0YWluZWQuPC9wPlxuICAgKlxuICAgKiA8cD5UaGlzIGluc2VydGlvbiBzb3J0IGltcGxlbWVudGF0aW9uIHJ1bnMgaW4gcGxhY2Ugc28gbm8gb2JqZWN0cyBhcmUgY3JlYXRlZCBkdXJpbmcgdGhlIHNvcnQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUuaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uKHNvcnRGdW5jdGlvbikge1xuICAgIHZhciBub2RlLCBvdGhlciwgcmVtYWlucztcbiAgICBpZiAodGhpcy5oZWFkID09PSB0aGlzLnRhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtYWlucyA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIG5vZGUgPSByZW1haW5zO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZW1haW5zID0gbm9kZS5uZXh0O1xuICAgICAgb3RoZXIgPSBub2RlLnByZXZpb3VzO1xuICAgICAgd2hpbGUgKG90aGVyICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChzb3J0RnVuY3Rpb24obm9kZSwgb3RoZXIpID49IDApIHtcbiAgICAgICAgICBpZiAobm9kZSAhPT0gb3RoZXIubmV4dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5uZXh0ID0gb3RoZXIubmV4dDtcbiAgICAgICAgICAgIG5vZGUucHJldmlvdXMgPSBvdGhlcjtcbiAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgICAgICBvdGhlci5uZXh0ID0gbm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb3RoZXIgPSBvdGhlci5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmIChvdGhlciA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgICAgdGhpcy50YWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9XG4gICAgICBub2RlID0gcmVtYWlucztcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBQZXJmb3JtcyBhIG1lcmdlIHNvcnQgb24gdGhlIG5vZGUgbGlzdC4gSW4gZ2VuZXJhbCwgbWVyZ2Ugc29ydCBpcyBtb3JlIGVmZmljaWVudCB0aGFuIGluc2VydGlvbiBzb3J0XG4gICAqIHdpdGggbG9uZyBsaXN0cyB0aGF0IGFyZSB2ZXJ5IHVuc29ydGVkLlxuICAgKlxuICAgKiA8cD5UaGUgc29ydCBmdW5jdGlvbiB0YWtlcyB0d28gbm9kZXMgYW5kIHJldHVybnMgYW4gSW50LjwvcD5cbiAgICpcbiAgICogPHA+PGNvZGU+ZnVuY3Rpb24gc29ydEZ1bmN0aW9uKCBub2RlMSA6IE1vY2tOb2RlLCBub2RlMiA6IE1vY2tOb2RlICkgOiBJbnQ8L2NvZGU+PC9wPlxuICAgKlxuICAgKiA8cD5JZiB0aGUgcmV0dXJuZWQgbnVtYmVyIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGUgZmlyc3Qgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBzZWNvbmQuIElmIGl0IGlzIGdyZWF0ZXJcbiAgICogdGhhbiB6ZXJvIHRoZSBzZWNvbmQgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBmaXJzdC4gSWYgaXQgaXMgemVybyB0aGUgb3JkZXIgb2YgdGhlIG5vZGVzIGRvZXNuJ3QgbWF0dGVyLjwvcD5cbiAgICpcbiAgICogPHA+VGhpcyBtZXJnZSBzb3J0IGltcGxlbWVudGF0aW9uIGNyZWF0ZXMgYW5kIHVzZXMgYSBzaW5nbGUgVmVjdG9yIGR1cmluZyB0aGUgc29ydCBvcGVyYXRpb24uPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubWVyZ2VTb3J0ID0gZnVuY3Rpb24oc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIGVuZCwgbGlzdHMsIG5leHQsIHN0YXJ0O1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHRoaXMudGFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaXN0cyA9IFtdO1xuICAgIHN0YXJ0ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChzdGFydCAhPT0gbnVsbCkge1xuICAgICAgZW5kID0gc3RhcnQ7XG4gICAgICB3aGlsZSAoZW5kLm5leHQgIT09IG51bGwgJiYgc29ydEZ1bmN0aW9uKGVuZCwgZW5kLm5leHQpIDw9IDApIHtcbiAgICAgICAgZW5kID0gZW5kLm5leHQ7XG4gICAgICB9XG4gICAgICBuZXh0ID0gZW5kLm5leHQ7XG4gICAgICBzdGFydC5wcmV2aW91cyA9IGVuZC5uZXh0ID0gbnVsbDtcbiAgICAgIGxpc3RzLnB1c2goc3RhcnQpO1xuICAgICAgc3RhcnQgPSBuZXh0O1xuICAgIH1cbiAgICB3aGlsZSAobGlzdHMubGVuZ3RoID4gMSkge1xuICAgICAgbGlzdHMucHVzaCh0aGlzLm1lcmdlKGxpc3RzLnNoaWZ0KCksIGxpc3RzLnNoaWZ0KCksIHNvcnRGdW5jdGlvbikpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSB0aGlzLmhlYWQgPSBsaXN0c1swXTtcbiAgICB3aGlsZSAodGhpcy50YWlsLm5leHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0O1xuICAgIH1cbiAgfTtcblxuICBOb2RlTGlzdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbihoZWFkMSwgaGVhZDIsIHNvcnRGdW5jdGlvbikge1xuICAgIHZhciBoZWFkLCBub2RlO1xuICAgIGlmIChzb3J0RnVuY3Rpb24oaGVhZDEsIGhlYWQyKSA8PSAwKSB7XG4gICAgICBoZWFkID0gbm9kZSA9IGhlYWQxO1xuICAgICAgaGVhZDEgPSBoZWFkMS5uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkID0gbm9kZSA9IGhlYWQyO1xuICAgICAgaGVhZDIgPSBoZWFkMi5uZXh0O1xuICAgIH1cbiAgICB3aGlsZSAoaGVhZDEgIT09IG51bGwgJiYgaGVhZDIgIT09IG51bGwpIHtcbiAgICAgIGlmIChzb3J0RnVuY3Rpb24oaGVhZDEsIGhlYWQyKSA8PSAwKSB7XG4gICAgICAgIG5vZGUubmV4dCA9IGhlYWQxO1xuICAgICAgICBoZWFkMS5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUgPSBoZWFkMTtcbiAgICAgICAgaGVhZDEgPSBoZWFkMS5uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5uZXh0ID0gaGVhZDI7XG4gICAgICAgIGhlYWQyLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IGhlYWQyO1xuICAgICAgICBoZWFkMiA9IGhlYWQyLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkMSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5uZXh0ID0gaGVhZDE7XG4gICAgICBoZWFkMS5wcmV2aW91cyA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubmV4dCA9IGhlYWQyO1xuICAgICAgaGVhZDIucHJldmlvdXMgPSBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbiAgfTtcblxuICByZXR1cm4gTm9kZUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVfbGlzdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIGludGVybmFsIGNsYXNzIG1haW50YWlucyBhIHBvb2wgb2YgZGVsZXRlZCBub2RlcyBmb3IgcmV1c2UgYnkgdGhlIGZyYW1ld29yay4gVGhpcyByZWR1Y2VzIHRoZSBvdmVyaGVhZFxuICogZnJvbSBvYmplY3QgY3JlYXRpb24gYW5kIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqXG4gKiBCZWNhdXNlIG5vZGVzIG1heSBiZSBkZWxldGVkIGZyb20gYSBOb2RlTGlzdCB3aGlsZSBpbiB1c2UsIGJ5IGRlbGV0aW5nIE5vZGVzIGZyb20gYSBOb2RlTGlzdFxuICogd2hpbGUgaXRlcmF0aW5nIHRocm91Z2ggdGhlIE5vZGVMaXN0LCB0aGUgcG9vbCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIG5vZGVzIHRoYXQgYXJlIGFkZGVkIHRvIHRoZSBwb29sXG4gKiBidXQgc2hvdWxkIG5vdCBiZSByZXVzZWQgeWV0LiBUaGV5IGFyZSB0aGVuIHJlbGVhc2VkIGludG8gdGhlIHBvb2wgYnkgY2FsbGluZyB0aGUgcmVsZWFzZUNhY2hlIG1ldGhvZC5cbiAqL1xuXG5hc2guY29yZS5Ob2RlUG9vbCA9IChmdW5jdGlvbigpIHtcbiAgTm9kZVBvb2wucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5ub2RlQ2xhc3MgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5jYWNoZVRhaWwgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBwb29sIGZvciB0aGUgZ2l2ZW4gbm9kZSBjbGFzcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gTm9kZVBvb2wobm9kZUNsYXNzLCBjb21wb25lbnRzKSB7XG4gICAgdGhpcy5ub2RlQ2xhc3MgPSBub2RlQ2xhc3M7XG4gICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgfVxuXG5cbiAgLypcbiAgICogRmV0Y2hlcyBhIG5vZGUgZnJvbSB0aGUgcG9vbC5cbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMubm9kZUNsYXNzLmNvbnN0cnVjdG9yKCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQWRkcyBhIG5vZGUgdG8gdGhlIHBvb2wuXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lO1xuICAgIGZvciAoY29tcG9uZW50TmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIG5vZGVbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgIH1cbiAgICBub2RlLmVudGl0eSA9IG51bGw7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGEgbm9kZSB0byB0aGUgY2FjaGVcbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZWxlYXNlcyBhbGwgbm9kZXMgZnJvbSB0aGUgY2FjaGUgaW50byB0aGUgcG9vbFxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUucmVsZWFzZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuY2FjaGVUYWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBOb2RlUG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZV9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhIHN5c3RlbS5cbiAqXG4gKiA8cD5BIHN5c3RlbSBpcyBwYXJ0IG9mIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGdhbWUuIEFmdGVyIGEgc3lzdGVtIGlzIGFkZGVkIHRvIHRoZSBlbmdpbmUsIGl0c1xuICogdXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBmcmFtZSBvZiB0aGUgZW5naW5lLiBXaGVuIHRoZSBzeXN0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUsXG4gKiB0aGUgdXBkYXRlIG1ldGhvZCBpcyBubyBsb25nZXIgY2FsbGVkLjwvcD5cbiAqXG4gKiA8cD5UaGUgYWdncmVnYXRlIG9mIGFsbCBzeXN0ZW1zIGluIHRoZSBlbmdpbmUgaXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGdhbWUsIHdpdGggdGhlIHVwZGF0ZVxuICogbWV0aG9kcyBvZiB0aG9zZSBzeXN0ZW1zIGNvbGxlY3RpdmVseSBjb25zdGl0dXRpbmcgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcC4gU3lzdGVtcyBnZW5lcmFsbHkgb3BlcmF0ZSBvblxuICogbm9kZSBsaXN0cyAtIGNvbGxlY3Rpb25zIG9mIG5vZGVzLiBFYWNoIG5vZGUgY29udGFpbnMgdGhlIGNvbXBvbmVudHMgZnJvbSBhbiBlbnRpdHkgaW4gdGhlIGVuZ2luZVxuICogdGhhdCBtYXRjaCB0aGUgbm9kZS48L3A+XG4gKi9cblxuYXNoLmNvcmUuU3lzdGVtID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTeXN0ZW0oKSB7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cblxuICAvKlxuICAgICogVXNlZCBpbnRlcm5hbGx5IHRvIG1hbmFnZSB0aGUgbGlzdCBvZiBzeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lLiBUaGUgcHJldmlvdXMgc3lzdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSB0byBtYW5hZ2UgdGhlIGxpc3Qgb2Ygc3lzdGVtcyB3aXRoaW4gdGhlIGVuZ2luZS4gVGhlIG5leHQgc3lzdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5IHRvIGhvbGQgdGhlIHByaW9yaXR5IG9mIHRoaXMgc3lzdGVtIHdpdGhpbiB0aGUgc3lzdGVtIGxpc3QuIFRoaXMgaXNcbiAgICogdXNlZCB0byBvcmRlciB0aGUgc3lzdGVtcyBzbyB0aGV5IGFyZSB1cGRhdGVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBzeXN0ZW0gaXMgYWRkZWQgdG8gdGhlIGVuZ2luZSwgYmVmb3JlIGFueSBjYWxscyB0byB0aGUgdXBkYXRlIG1ldGhvZC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbmdpbmUgVGhlIGVuZ2luZSB0aGUgc3lzdGVtIHdhcyBhZGRlZCB0by5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge307XG5cblxuICAvKlxuICAgKiBDYWxsZWQganVzdCBhZnRlciB0aGUgc3lzdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLCBhZnRlciBhbGwgY2FsbHMgdG8gdGhlIHVwZGF0ZSBtZXRob2QuXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCB5b3VyIG93biBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAcGFyYW0gZW5naW5lIFRoZSBlbmdpbmUgdGhlIHN5c3RlbSB3YXMgcmVtb3ZlZCBmcm9tLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHt9O1xuXG5cbiAgLypcbiAgICogQWZ0ZXIgdGhlIHN5c3RlbSBpcyBhZGRlZCB0byB0aGUgZW5naW5lLCB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgZXZlcnkgZnJhbWUgdW50aWwgdGhlIHN5c3RlbVxuICAgKiBpcyByZW1vdmVkIGZyb20gdGhlIGVuZ2luZS4gT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIDxwPklmIHlvdSBuZWVkIHRvIHBlcmZvcm0gYW4gYWN0aW9uIG91dHNpZGUgb2YgdGhlIHVwZGF0ZSBsb29wIChlLmcuIHlvdSBuZWVkIHRvIGNoYW5nZSB0aGVcbiAgICogc3lzdGVtcyBpbiB0aGUgZW5naW5lIGFuZCB5b3UgZG9uJ3Qgd2FudCB0byBkbyBpdCB3aGlsZSB0aGV5J3JlIHVwZGF0aW5nKSBhZGQgYSBsaXN0ZW5lciB0b1xuICAgKiB0aGUgZW5naW5lJ3MgdXBkYXRlQ29tcGxldGUgc2lnbmFsIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVwZGF0ZSBsb29wIGNvbXBsZXRlcy48L3A+XG4gICAqXG4gICAqIEBwYXJhbSB0aW1lIFRoZSBkdXJhdGlvbiwgaW4gc2Vjb25kcywgb2YgdGhlIGZyYW1lLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHt9O1xuXG4gIHJldHVybiBTeXN0ZW07XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBVc2VkIGludGVybmFsbHksIHRoaXMgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIFN5c3RlbXMgZm9yIHVzZSBieSB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLlxuICovXG5cbmFzaC5jb3JlLlN5c3RlbUxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN5c3RlbUxpc3QoKSB7fVxuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIHN5c3RlbS5uZXh0ID0gc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlLnByaW9yaXR5IDw9IHN5c3RlbS5wcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IHN5c3RlbTtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gc3lzdGVtO1xuICAgICAgICB0aGlzLmhlYWQgPSBzeXN0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gc3lzdGVtO1xuICAgICAgICBub2RlLm5leHQgPSBzeXN0ZW07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHN5c3RlbSkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IHN5c3RlbSkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgIH1cbiAgICBpZiAoc3lzdGVtLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBzeXN0ZW0ucHJldmlvdXMubmV4dCA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICBpZiAoc3lzdGVtLm5leHQgIT09IG51bGwpIHtcbiAgICAgIHN5c3RlbS5uZXh0LnByZXZpb3VzID0gc3lzdGVtLnByZXZpb3VzO1xuICAgIH1cbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3lzdGVtO1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIHN5c3RlbSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHN5c3RlbS5uZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICBzeXN0ZW0gPSB0aGlzLnN5c3RlbUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICBpZiAoc3lzdGVtLmNvbnN0cnVjdG9yID09PSB0eXBlKSB7XG4gICAgICAgIHJldHVybiBzeXN0ZW07XG4gICAgICB9XG4gICAgICBzeXN0ZW0gPSBzeXN0ZW0ubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFN5c3RlbUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVyIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQuIFRoZSBpbnN0YW5jZVxuICogaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlciBhdCBpbml0aWFsaXNhdGlvbi5cbiAqL1xuXG5hc2guZnNtLkNvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gcmV0dXJuIHdoZW5ldmVyIGEgY29tcG9uZW50IGlzIHJlcXVlc3RlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcihpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X2luc3RhbmNlX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuICBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlcih0eXBlKSB7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcblxuICAgIC8qXG4gICAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgICAqXG4gICAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgfVxuXG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfc2luZ2xldG9uX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uQ29tcG9uZW50VHlwZVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRUeXBlUHJvdmlkZXIodHlwZSkge1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgQ29tcG9uZW50VHlwZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50VHlwZVByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50VHlwZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guZnNtLkR5bmFtaWNDb21wb25lbnRQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZS5fY2xvc3VyZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gY2xvc3VyZSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdoZW4gY2FsbGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIoY2xvc3VyZSkge1xuICAgIHRoaXMuX2Nsb3N1cmUgPSBjbG9zdXJlO1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICB9XG5cbiAgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc3VyZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKER5bmFtaWNDb21wb25lbnRQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc3VyZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgU3lzdGVtIHByb3ZpZGVyIHJldHVybnMgcmVzdWx0cyBvZiBhIG1ldGhvZCBjYWxsLiBUaGUgbWV0aG9kXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uRHluYW1pY1N5c3RlbVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uKCkge307XG5cbiAgRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZS5zeXN0ZW1Qcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdGhhdCByZXR1cm5zIHRoZSBTeXN0ZW0gaW5zdGFuY2U7XG4gICAqL1xuXG4gIGZ1bmN0aW9uIER5bmFtaWNTeXN0ZW1Qcm92aWRlcihtZXRob2QpIHtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgbWV0aG9kIHVzZWQgdG8gY2FsbCB0aGUgU3lzdGVtIGluc3RhbmNlc1xuICAgKi9cblxuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZCgpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRob2Q7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIER5bmFtaWNTeXN0ZW1Qcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pY19zeXN0ZW1fcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRHluYW1pY1N5c3RlbVByb3ZpZGVyLCBTdGF0ZVN5c3RlbU1hcHBpbmcsIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIsIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TeXN0ZW1JbnN0YW5jZVByb3ZpZGVyID0gYXNoLmZzbS5TeXN0ZW1JbnN0YW5jZVByb3ZpZGVyO1xuXG5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlciA9IGFzaC5mc20uU3lzdGVtU2luZ2xldG9uUHJvdmlkZXI7XG5cbkR5bmFtaWNTeXN0ZW1Qcm92aWRlciA9IGFzaC5mc20uRHluYW1pY1N5c3RlbVByb3ZpZGVyO1xuXG5TdGF0ZVN5c3RlbU1hcHBpbmcgPSBhc2guZnNtLlN0YXRlU3lzdGVtTWFwcGluZztcblxuXG4vKlxuICogUmVwcmVzZW50cyBhIHN0YXRlIGZvciBhIFN5c3RlbVN0YXRlTWFjaGluZS4gVGhlIHN0YXRlIGNvbnRhaW5zIGFueSBudW1iZXIgb2YgU3lzdGVtUHJvdmlkZXJzIHdoaWNoXG4gKiBhcmUgdXNlZCB0byBhZGQgU3lzdGVtcyB0byB0aGUgRW5naW5lIHdoZW4gdGhpcyBzdGF0ZSBpcyBlbnRlcmVkLlxuICovXG5cbmFzaC5mc20uRW5naW5lU3RhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5wcm92aWRlcnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVuZ2luZVN0YXRlKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0gW107XG4gIH1cblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzcGVjaWZpYyBTeXN0ZW0gaW5zdGFuY2UuIEFcbiAgICogU3lzdGVtSW5zdGFuY2VQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgU3lzdGVtIGluc3RhbmNlIHRvIHVzZSBmb3IgdGhlIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyKHN5c3RlbSkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIGluc3RhbmNlIGlzIG5vdCBjcmVhdGVkIHVudGlsIGl0IGlzIGZpcnN0IHJlcXVlc3RlZC4gVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lXG4gICAqIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuIElmIG9taXR0ZWQsIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBtYXBwaW5nIGlzIHVzZWQuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlcih0eXBlKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgbWV0aG9kIGNhbGwuXG4gICAqIFRoZSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFN5c3RlbSBpbnN0YW5jZS4gQSBEeW5hbWljU3lzdGVtUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0byBwcm92aWRlIHRoZSBTeXN0ZW0gaW5zdGFuY2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBEeW5hbWljU3lzdGVtUHJvdmlkZXIobWV0aG9kKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGFueSBTeXN0ZW1Qcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHByb3ZpZGVyIFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgdmFyIG1hcHBpbmc7XG4gICAgbWFwcGluZyA9IG5ldyBTdGF0ZVN5c3RlbU1hcHBpbmcodGhpcywgcHJvdmlkZXIpO1xuICAgIHRoaXMucHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuICAgIHJldHVybiBtYXBwaW5nO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmVTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lX3N0YXRlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIEVuZ2luZVN0YXRlLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5FbmdpbmVTdGF0ZSA9IGFzaC5mc20uRW5naW5lU3RhdGU7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGlzIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgdGhlIEVuZ2luZS4gVGhlIHN0YXRlIG1hY2hpbmUgbWFuYWdlcyBhIHNldCBvZiBzdGF0ZXMsXG4gKiBlYWNoIG9mIHdoaWNoIGhhcyBhIHNldCBvZiBTeXN0ZW0gcHJvdmlkZXJzLiBXaGVuIHRoZSBzdGF0ZSBtYWNoaW5lIGNoYW5nZXMgdGhlIHN0YXRlLCBpdCByZW1vdmVzXG4gKiBTeXN0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJldmlvdXMgc3RhdGUgYW5kIGFkZHMgU3lzdGVtcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAqL1xuXG5hc2guZnNtLkVuZ2luZVN0YXRlTWFjaGluZSA9IChmdW5jdGlvbigpIHtcbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuc3RhdGVzID0gbnVsbDtcblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3Rvci4gQ3JlYXRlcyBhbiBTeXN0ZW1TdGF0ZU1hY2hpbmUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEVuZ2luZVN0YXRlTWFjaGluZShlbmdpbmUpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLnN0YXRlcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFkZCBhIHN0YXRlIHRvIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhpcyBzdGF0ZSAtIHVzZWQgdG8gaWRlbnRpZnkgaXQgbGF0ZXIgaW4gdGhlIGNoYW5nZVN0YXRlIG1ldGhvZCBjYWxsLlxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlLlxuICAgKiBAcmV0dXJuIFRoaXMgc3RhdGUgbWFjaGluZSwgc28gbWV0aG9kcyBjYW4gYmUgY2hhaW5lZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5hZGRTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUsIHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZXNbbmFtZV0gPSBzdGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZSBhIG5ldyBzdGF0ZSBpbiB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBuZXcgc3RhdGUgLSB1c2VkIHRvIGlkZW50aWZ5IGl0IGxhdGVyIGluIHRoZSBjaGFuZ2VTdGF0ZSBtZXRob2QgY2FsbC5cbiAgICogQHJldHVybiBUaGUgbmV3IEVudGl0eVN0YXRlIG9iamVjdCB0aGF0IGlzIHRoZSBzdGF0ZS4gVGhpcyB3aWxsIG5lZWQgdG8gYmUgY29uZmlndXJlZCB3aXRoXG4gICAqIHRoZSBhcHByb3ByaWF0ZSBjb21wb25lbnQgcHJvdmlkZXJzLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBzdGF0ZSA9IG5ldyBFbmdpbmVTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzW25hbWVdID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDaGFuZ2UgdG8gYSBuZXcgc3RhdGUuIFRoZSBTeXN0ZW1zIGZyb20gdGhlIG9sZCBzdGF0ZSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSBTeXN0ZW1zXG4gICAqIGZvciB0aGUgbmV3IHN0YXRlIHdpbGwgYmUgYWRkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSB0byBjaGFuZ2UgdG8uXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGVhY2gsIGlkLCBuZXdTdGF0ZSwgb3RoZXIsIHByb3ZpZGVyLCB0b0FkZCwgX3JlZiwgX3JlZjE7XG4gICAgbmV3U3RhdGUgPSB0aGlzLnN0YXRlc1tuYW1lXTtcbiAgICBpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW5naW5lIHN0YXRlIFwiICsgbmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChuZXdTdGF0ZSA9PT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9BZGQgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIF9yZWYgPSBuZXdTdGF0ZS5wcm92aWRlcnM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIHByb3ZpZGVyID0gX3JlZltlYWNoXTtcbiAgICAgIGlkID0gcHJvdmlkZXIuaWRlbnRpZmllcjtcbiAgICAgIHRvQWRkW2lkXSA9IHByb3ZpZGVyO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0YXRlKSB7XG4gICAgICBfcmVmMSA9IHRoaXMuY3VycmVudFN0YXRlLnByb3ZpZGVycztcbiAgICAgIGZvciAoZWFjaCBpbiBfcmVmMSkge1xuICAgICAgICBwcm92aWRlciA9IF9yZWYxW2VhY2hdO1xuICAgICAgICBpZCA9IHByb3ZpZGVyLmlkZW50aWZpZXI7XG4gICAgICAgIG90aGVyID0gdG9BZGRbaWRdO1xuICAgICAgICBpZiAob3RoZXIpIHtcbiAgICAgICAgICBkZWxldGUgdG9BZGRbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZVN5c3RlbShwcm92aWRlci5nZXRTeXN0ZW0oKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChlYWNoIGluIHRvQWRkKSB7XG4gICAgICBwcm92aWRlciA9IHRvQWRkW2VhY2hdO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKHByb3ZpZGVyLmdldFN5c3RlbSgpLCBwcm92aWRlci5wcmlvcml0eSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmVTdGF0ZU1hY2hpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZV9zdGF0ZV9tYWNoaW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIFN0YXRlQ29tcG9uZW50TWFwcGluZywgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU3RhdGVDb21wb25lbnRNYXBwaW5nID0gYXNoLmZzbS5TdGF0ZUNvbXBvbmVudE1hcHBpbmc7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBSZXByZXNlbnRzIGEgc3RhdGUgZm9yIGFuIEVudGl0eVN0YXRlTWFjaGluZS4gVGhlIHN0YXRlIGNvbnRhaW5zIGFueSBudW1iZXIgb2YgQ29tcG9uZW50UHJvdmlkZXJzIHdoaWNoXG4gKiBhcmUgdXNlZCB0byBhZGQgY29tcG9uZW50cyB0byB0aGUgZW50aXR5IHdoZW4gdGhpcyBzdGF0ZSBpcyBlbnRlcmVkLlxuICovXG5cbmFzaC5mc20uRW50aXR5U3RhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5wcm92aWRlcnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVudGl0eVN0YXRlKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgbmV3IENvbXBvbmVudE1hcHBpbmcgdG8gdGhpcyBzdGF0ZS4gVGhlIG1hcHBpbmcgaXMgYSB1dGlsaXR5IGNsYXNzIHRoYXQgaXMgdXNlZCB0b1xuICAgKiBtYXAgYSBjb21wb25lbnQgdHlwZSB0byB0aGUgcHJvdmlkZXIgdGhhdCBwcm92aWRlcyB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gYmUgbWFwcGVkXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudCBtYXBwaW5nIHRvIHVzZSB3aGVuIHNldHRpbmcgdGhlIHByb3ZpZGVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqL1xuXG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZUNvbXBvbmVudE1hcHBpbmcodGhpcywgdHlwZSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgdGhlIENvbXBvbmVudFByb3ZpZGVyIGZvciBhIHBhcnRpY3VsYXIgY29tcG9uZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBnZXQgdGhlIHByb3ZpZGVyIGZvclxuICAgKiBAcmV0dXJuIFRoZSBDb21wb25lbnRQcm92aWRlclxuICAgKi9cblxuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0eXBlXTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgc3RhdGUgaGFzIGEgcHJvdmlkZXIgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBsb29rIGZvciBhIHByb3ZpZGVyIGZvclxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlcmUgaXMgYSBwcm92aWRlciBmb3IgdGhlIGdpdmVuIHR5cGUsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cblxuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0eXBlXSAhPT0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5U3RhdGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBFbnRpdHlTdGF0ZSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRW50aXR5U3RhdGUgPSBhc2guZnNtLkVudGl0eVN0YXRlO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogVGhpcyBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIGFuIGVudGl0eS4gVGhlIHN0YXRlIG1hY2hpbmUgbWFuYWdlcyBhIHNldCBvZiBzdGF0ZXMsXG4gKiBlYWNoIG9mIHdoaWNoIGhhcyBhIHNldCBvZiBjb21wb25lbnQgcHJvdmlkZXJzLiBXaGVuIHRoZSBzdGF0ZSBtYWNoaW5lIGNoYW5nZXMgdGhlIHN0YXRlLCBpdCByZW1vdmVzXG4gKiBjb21wb25lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJldmlvdXMgc3RhdGUgYW5kIGFkZHMgY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAqL1xuXG5hc2guZnNtLkVudGl0eVN0YXRlTWFjaGluZSA9IChmdW5jdGlvbigpIHtcbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5zdGF0ZXMgPSBudWxsO1xuXG5cbiAgLypcbiAgXHQgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3RhdGUgbWFjaGluZS5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jdXJyZW50U3RhdGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGVudGl0eSB3aG9zZSBzdGF0ZSBtYWNoaW5lIHRoaXMgaXNcbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5lbnRpdHkgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3IuIENyZWF0ZXMgYW4gRW50aXR5U3RhdGVNYWNoaW5lLlxuICAgKi9cblxuICBmdW5jdGlvbiBFbnRpdHlTdGF0ZU1hY2hpbmUoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYSBuZXcgc3RhdGUgaW4gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV3IHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEByZXR1cm4gVGhlIG5ldyBFbnRpdHlTdGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgc3RhdGUuIFRoaXMgd2lsbCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQgd2l0aFxuICAgKiB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHByb3ZpZGVycy5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBuZXcgRW50aXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBDaGFuZ2UgdG8gYSBuZXcgc3RhdGUuIFRoZSBjb21wb25lbnRzIGZyb20gdGhlIG9sZCBzdGF0ZSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSBjb21wb25lbnRzXG4gICAqIGZvciB0aGUgbmV3IHN0YXRlIHdpbGwgYmUgYWRkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSB0byBjaGFuZ2UgdG8uXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSwgbmV3U3RhdGUsIG90aGVyLCB0b0FkZCwgdHlwZTtcbiAgICBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVzW25hbWVdO1xuICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBzdGF0ZSBcIiArIG5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAobmV3U3RhdGUgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgdG9BZGQgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgICAgZm9yICh0eXBlIGluIG5ld1N0YXRlLnByb3ZpZGVycykge1xuICAgICAgICB0b0FkZFt0eXBlXSA9IG5ld1N0YXRlLnByb3ZpZGVyc1t0eXBlXTtcbiAgICAgIH1cbiAgICAgIGZvciAodHlwZSBpbiB0aGlzLmN1cnJlbnRTdGF0ZS5wcm92aWRlcnMpIHtcbiAgICAgICAgb3RoZXIgPSB0b0FkZFt0eXBlXTtcbiAgICAgICAgaWYgKG90aGVyICYmIG90aGVyLmlkZW50aWZpZXIgPT09IGN1cnJlbnRTdGF0ZS5wcm92aWRlcnNbdHlwZV0uaWRlbnRpZmllcikge1xuICAgICAgICAgIGRlbGV0ZSB0b0FkZFt0eXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVudGl0eS5yZW1vdmUodHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9BZGQgPSBuZXdTdGF0ZS5wcm92aWRlcnM7XG4gICAgfVxuICAgIGZvciAodHlwZSBpbiB0b0FkZCkge1xuICAgICAgdGhpcy5lbnRpdHkuYWRkKHRvQWRkW3R5cGVdLmdldENvbXBvbmVudCgpLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHlTdGF0ZU1hY2hpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9zdGF0ZV9tYWNoaW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIsIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLCBDb21wb25lbnRUeXBlUHJvdmlkZXIsIER5bmFtaWNDb21wb25lbnRQcm92aWRlciwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciA9IGFzaC5mc20uQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcjtcblxuQ29tcG9uZW50VHlwZVByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRUeXBlUHJvdmlkZXI7XG5cbkNvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRTaW5nbGV0b25Qcm92aWRlcjtcblxuRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyID0gYXNoLmZzbS5EeW5hbWljQ29tcG9uZW50UHJvdmlkZXI7XG5cblxuLypcbiAqIFVzZWQgYnkgdGhlIEVudGl0eVN0YXRlIGNsYXNzIHRvIGNyZWF0ZSB0aGUgbWFwcGluZ3Mgb2YgY29tcG9uZW50cyB0byBwcm92aWRlcnMgdmlhIGEgZmx1ZW50IGludGVyZmFjZS5cbiAqL1xuXG5hc2guZnNtLlN0YXRlQ29tcG9uZW50TWFwcGluZyA9IChmdW5jdGlvbigpIHtcbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmNyZWF0aW5nU3RhdGUgPSBudWxsO1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUucHJvdmlkZXIgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5LCB0aGUgY29uc3RydWN0b3IgY3JlYXRlcyBhIGNvbXBvbmVudCBtYXBwaW5nLiBUaGUgY29uc3RydWN0b3JcbiAgICogY3JlYXRlcyBhIENvbXBvbmVudFR5cGVQcm92aWRlciBhcyB0aGUgZGVmYXVsdCBtYXBwaW5nLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkXG4gICAqIGJ5IG1vcmUgc3BlY2lmaWMgbWFwcGluZ3MgaWYgb3RoZXIgbWV0aG9kcyBhcmUgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0gY3JlYXRpbmdTdGF0ZSBUaGUgRW50aXR5U3RhdGUgdGhhdCB0aGUgbWFwcGluZyB3aWxsIGJlbG9uZyB0b1xuICAgKiBAcGFyYW0gdHlwZSBUaGUgY29tcG9uZW50IHR5cGUgZm9yIHRoZSBtYXBwaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN0YXRlQ29tcG9uZW50TWFwcGluZyhjcmVhdGluZ1N0YXRlLCB0eXBlKSB7XG4gICAgdGhpcy5jcmVhdGluZ1N0YXRlID0gY3JlYXRpbmdTdGF0ZTtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuICAgIHRoaXMud2l0aFR5cGUodHlwZSk7XG4gIH1cblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBzcGVjaWZpYyBjb21wb25lbnQgaW5zdGFuY2UuIEFcbiAgICogQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IGluc3RhbmNlIHRvIHVzZSBmb3IgdGhlIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhJbnN0YW5jZSA9IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIoY29tcG9uZW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIG5ldyBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBDb21wb25lbnRUeXBlUHJvdmlkZXJcbiAgICogaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCBieSB0aGlzIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudFR5cGVQcm92aWRlcih0eXBlKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuIElmIG9taXR0ZWQsIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBtYXBwaW5nIGlzIHVzZWQuXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBvbmVudFR5cGU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyKHR5cGUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBtZXRob2QgY2FsbC4gQVxuICAgKiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0byByZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IER5bmFtaWNDb21wb25lbnRQcm92aWRlcihtZXRob2QpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYW55IENvbXBvbmVudFByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB0aGlzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIE1hcHMgdGhyb3VnaCB0byB0aGUgYWRkIG1ldGhvZCBvZiB0aGUgRW50aXR5U3RhdGUgdGhhdCB0aGlzIG1hcHBpbmcgYmVsb25ncyB0b1xuICAgKiBzbyB0aGF0IGEgZmx1ZW50IGludGVyZmFjZSBjYW4gYmUgdXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGVudGl0eSBzdGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBhZGQgYSBtYXBwaW5nIHRvIHRoZSBzdGF0ZSBmb3JcbiAgICogQHJldHVybiBUaGUgbmV3IENvbXBvbmVudE1hcHBpbmcgZm9yIHRoYXQgdHlwZVxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGluZ1N0YXRlLmFkZCh0eXBlKTtcbiAgfTtcblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLnNldFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRpbmdTdGF0ZS5wcm92aWRlcnNbdGhpcy5jb21wb25lbnRUeXBlXSA9IHByb3ZpZGVyO1xuICB9O1xuXG4gIHJldHVybiBTdGF0ZUNvbXBvbmVudE1hcHBpbmc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFVzZWQgYnkgdGhlIFN5c3RlbVN0YXRlIGNsYXNzIHRvIGNyZWF0ZSB0aGUgbWFwcGluZ3Mgb2YgU3lzdGVtcyB0byBwcm92aWRlcnMgdmlhIGEgZmx1ZW50IGludGVyZmFjZS5cbiAqL1xuXG5hc2guZnNtLlN0YXRlU3lzdGVtTWFwcGluZyA9IChmdW5jdGlvbigpIHtcbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5jcmVhdGluZ1N0YXRlID0gbnVsbDtcblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLnByb3ZpZGVyID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSwgdGhlIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYSBjb21wb25lbnQgbWFwcGluZy4gVGhlIGNvbnN0cnVjdG9yXG4gICAqIGNyZWF0ZXMgYSBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciBhcyB0aGUgZGVmYXVsdCBtYXBwaW5nLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkXG4gICAqIGJ5IG1vcmUgc3BlY2lmaWMgbWFwcGluZ3MgaWYgb3RoZXIgbWV0aG9kcyBhcmUgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0gY3JlYXRpbmdTdGF0ZSBUaGUgU3lzdGVtU3RhdGUgdGhhdCB0aGUgbWFwcGluZyB3aWxsIGJlbG9uZyB0b1xuICAgKiBAcGFyYW0gdHlwZSBUaGUgU3lzdGVtIHR5cGUgZm9yIHRoZSBtYXBwaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN0YXRlU3lzdGVtTWFwcGluZyhjcmVhdGluZ1N0YXRlLCBwcm92aWRlcikge1xuICAgIHRoaXMuY3JlYXRpbmdTdGF0ZSA9IGNyZWF0aW5nU3RhdGU7XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICB9XG5cblxuICAvKlxuICAgKiBBcHBsaWVzIHRoZSBwcmlvcml0eSB0byB0aGUgcHJvdmlkZXIgdGhhdCB0aGUgU3lzdGVtIHdpbGwgYmUuXG4gICAqXG4gICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLndpdGhQcmlvcml0eSA9IGZ1bmN0aW9uKHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm92aWRlci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNwZWNpZmljIFN5c3RlbSBpbnN0YW5jZS4gQVxuICAgKiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBTeXN0ZW0gaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZEluc3RhbmNlKHN5c3RlbSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZFNpbmdsZXRvbih0eXBlKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBtZXRob2QgY2FsbC5cbiAgICogVGhlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGEgU3lzdGVtIGluc3RhbmNlLiBBIER5bmFtaWNTeXN0ZW1Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIFN5c3RlbSBpbnN0YW5jZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZE1ldGhvZChtZXRob2QpO1xuICB9O1xuXG5cbiAgLypcbiAgICogTWFwcyB0aHJvdWdoIHRvIHRoZSBhZGRQcm92aWRlciBtZXRob2Qgb2YgdGhlIFN5c3RlbVN0YXRlIHRoYXQgdGhpcyBtYXBwaW5nIGJlbG9uZ3MgdG9cbiAgICogc28gdGhhdCBhIGZsdWVudCBpbnRlcmZhY2UgY2FuIGJlIHVzZWQgd2hlbiBjb25maWd1cmluZyBlbnRpdHkgc3RhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkUHJvdmlkZXIocHJvdmlkZXIpO1xuICB9O1xuXG5cbiAgLypcbiAgICovXG5cbiAgcmV0dXJuIFN0YXRlU3lzdGVtTWFwcGluZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGVfc3lzdGVtX21hcHBpbmcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gVGhlIHN5c3RlbVxuICogaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlciBhdCBpbml0aWFsaXNhdGlvbi5cbiAqL1xuXG5hc2guZnNtLlN5c3RlbUluc3RhbmNlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuICBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5zeXN0ZW1Qcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIHRvIHJldHVybiB3aGVuZXZlciBhIFN5c3RlbSBpcyByZXF1ZXN0ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbVxuICAgKi9cblxuICBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1faW5zdGFuY2VfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbS4gVGhlIGluc3RhbmNlXG4gKiBpcyBjcmVhdGVkIHdoZW4gZmlyc3QgcmVxdWlyZWQgYW5kIGlzIG9mIHRoZSB0eXBlIHBhc3NlZCBpbiB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cblxuYXNoLmZzbS5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgU3lzdGVtIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyKHR5cGUpIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBTeXN0ZW0gZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgXHRcdCAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIHNpbmdsZVxuICAgIFx0XHQgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEByZXR1cm4gVGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN5c3RlbSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX3NpbmdsZXRvbl9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBBIG5vZGUgaW4gdGhlIGxpc3Qgb2YgbGlzdGVuZXJzIGluIGEgc2lnbmFsLlxuICovXG5cbmFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGlzdGVuZXJOb2RlKCkge31cblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUubGlzdGVuZXIgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUub25jZSA9IGZhbHNlO1xuXG4gIHJldHVybiBMaXN0ZW5lck5vZGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RlbmVyX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgTGlzdGVuZXJOb2RlLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5MaXN0ZW5lck5vZGUgPSBhc2guc2lnbmFscy5MaXN0ZW5lck5vZGU7XG5cblxuLypcbiAqIFRoaXMgaW50ZXJuYWwgY2xhc3MgbWFpbnRhaW5zIGEgcG9vbCBvZiBkZWxldGVkIGxpc3RlbmVyIG5vZGVzIGZvciByZXVzZSBieSBmcmFtZXdvcmsuIFRoaXMgcmVkdWNlc1xuICogdGhlIG92ZXJoZWFkIGZyb20gb2JqZWN0IGNyZWF0aW9uIGFuZCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gKi9cblxuYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlUG9vbCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGlzdGVuZXJOb2RlUG9vbCgpIHt9XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGVUYWlsID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBMaXN0ZW5lck5vZGUoKTtcbiAgICB9XG4gIH07XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBub2RlLmxpc3RlbmVyID0gbnVsbDtcbiAgICBub2RlLm9uY2UgPSBmYWxzZTtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy50YWlsID0gbm9kZTtcbiAgfTtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5jYWNoZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBub2RlLmxpc3RlbmVyID0gbnVsbDtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlO1xuICB9O1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLnJlbGVhc2VDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmNhY2hlVGFpbCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuY2FjaGVUYWlsO1xuICAgICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGlzdGVuZXJOb2RlUG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdGVuZXJfbm9kZV9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDAsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMCgpIHtcbiAgICByZXR1cm4gU2lnbmFsMC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDAucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDA7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDEsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMSgpIHtcbiAgICByZXR1cm4gU2lnbmFsMS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDEucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCQxKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwxO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwyLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDIoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCQxLCAkMikge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEsICQyKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwyO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDMgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwzLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDMoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwzLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCQxLCAkMiwgJDMpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCQxLCAkMiwgJDMpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDM7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExpc3RlbmVyTm9kZVBvb2wsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkxpc3RlbmVyTm9kZVBvb2wgPSBhc2guc2lnbmFscy5MaXN0ZW5lck5vZGVQb29sO1xuXG5hc2guc2lnbmFscy5TaWduYWxCYXNlID0gKGZ1bmN0aW9uKCkge1xuICBTaWduYWxCYXNlLnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5udW1MaXN0ZW5lcnMgPSAwO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmxpc3RlbmVyTm9kZVBvb2wgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnRvQWRkSGVhZCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudG9BZGRUYWlsID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5kaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbEJhc2UoKSB7XG4gICAgdGhpcy5saXN0ZW5lck5vZGVQb29sID0gbmV3IExpc3RlbmVyTm9kZVBvb2woKTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IDA7XG4gIH1cblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5zdGFydERpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuZW5kRGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9BZGRIZWFkICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudG9BZGRIZWFkO1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRvQWRkVGFpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICAgIHRoaXMudG9BZGRIZWFkLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRvQWRkVGFpbDtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9BZGRIZWFkID0gbnVsbDtcbiAgICAgIHRoaXMudG9BZGRUYWlsID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW5lck5vZGVQb29sLnJlbGVhc2VDYWNoZSgpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5ub2RlRXhpc3RzID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlKGxpc3RlbmVyKSAhPT0gbnVsbDtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLm5vZGVFeGlzdHMobGlzdGVuZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUgPSB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZ2V0KCk7XG4gICAgbm9kZS5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGRPbmNlID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy5ub2RlRXhpc3RzKGxpc3RlbmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gdGhpcy5saXN0ZW5lck5vZGVQb29sLmdldCgpO1xuICAgIG5vZGUubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICBub2RlLm9uY2UgPSB0cnVlO1xuICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICBpZiAodGhpcy50b0FkZEhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQgPSB0aGlzLnRvQWRkVGFpbCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvQWRkVGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgICB0aGlzLnRvQWRkVGFpbCA9IG5vZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLmdldE5vZGUobGlzdGVuZXIpO1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oZWFkID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b0FkZEhlYWQgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQgPSB0aGlzLnRvQWRkSGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9BZGRUYWlsID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsID0gdGhpcy50b0FkZFRhaWwucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNwYXRjaGluZykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuY2FjaGUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZGlzcG9zZShub2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgfVxuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMudG9BZGRIZWFkID0gbnVsbDtcbiAgICB0aGlzLnRvQWRkVGFpbCA9IG51bGw7XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWxCYXNlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWxfYmFzZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBTaWduYWwxLCBhc2gsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDEgPSBhc2guc2lnbmFscy5TaWduYWwxO1xuXG5cbi8qXG4gKiBVc2VzIHRoZSBlbnRlciBmcmFtZSBldmVudCB0byBwcm92aWRlIGEgZnJhbWUgdGljayB3aGVyZSB0aGUgZnJhbWUgZHVyYXRpb24gaXMgdGhlIHRpbWUgc2luY2UgdGhlIHByZXZpb3VzIGZyYW1lLlxuICogVGhlcmUgaXMgYSBtYXhpbXVtIGZyYW1lIHRpbWUgcGFyYW1ldGVyIGluIHRoZSBjb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIGxpbWl0XG4gKiB0aGUgbG9uZ2VzdCBwZXJpb2QgYSBmcmFtZSBjYW4gYmUuXG4gKi9cblxuYXNoLnRpY2suRnJhbWVUaWNrUHJvdmlkZXIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhGcmFtZVRpY2tQcm92aWRlciwgX3N1cGVyKTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuZGlzcGxheU9iamVjdCA9IG51bGw7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnByZXZpb3VzVGltZSA9IDA7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLm1heGltdW1GcmFtZVRpbWUgPSAwO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5pc1BsYXlpbmcgPSBmYWxzZTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUucmVxdWVzdCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBcHBsaWVzIGEgdGltZSBhZGp1c3RlbWVudCBmYWN0b3IgdG8gdGhlIHRpY2ssIHNvIHlvdSBjYW4gc2xvdyBkb3duIG9yIHNwZWVkIHVwIHRoZSBlbnRpcmUgZW5naW5lLlxuICAgKiBUaGUgdXBkYXRlIHRpY2sgdGltZSBpcyBtdWx0aXBsaWVkIGJ5IHRoaXMgdmFsdWUsIHNvIGEgdmFsdWUgb2YgMSB3aWxsIHJ1biB0aGUgZW5naW5lIGF0IHRoZSBub3JtYWwgcmF0ZS5cbiAgICovXG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnRpbWVBZGp1c3RtZW50ID0gMTtcblxuICBmdW5jdGlvbiBGcmFtZVRpY2tQcm92aWRlcihkaXNwbGF5T2JqZWN0LCBtYXhpbXVtRnJhbWVUaW1lKSB7XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0ID0gZGlzcGxheU9iamVjdDtcbiAgICB0aGlzLm1heGltdW1GcmFtZVRpbWUgPSBtYXhpbXVtRnJhbWVUaW1lO1xuICAgIHRoaXMuZGlzcGF0Y2hUaWNrID0gX19iaW5kKHRoaXMuZGlzcGF0Y2hUaWNrLCB0aGlzKTtcbiAgICBGcmFtZVRpY2tQcm92aWRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIHBsYXlpbmc6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUGxheWluZztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRpc3BhdGNoVGljayk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICB9O1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdCk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgfTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuZGlzcGF0Y2hUaWNrID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgdmFyIGZyYW1lVGltZSwgdGVtcDtcbiAgICBpZiAodGltZXN0YW1wID09IG51bGwpIHtcbiAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMuZGlzcGxheU9iamVjdC5iZWdpbigpO1xuICAgIH1cbiAgICB0ZW1wID0gdGhpcy5wcmV2aW91c1RpbWUgfHwgdGltZXN0YW1wO1xuICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGltZXN0YW1wO1xuICAgIGZyYW1lVGltZSA9ICh0aW1lc3RhbXAgLSB0ZW1wKSAqIDAuMDAxO1xuICAgIHRoaXMuZGlzcGF0Y2goZnJhbWVUaW1lKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kaXNwYXRjaFRpY2spO1xuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMuZGlzcGxheU9iamVjdC5lbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZyYW1lVGlja1Byb3ZpZGVyO1xuXG59KShTaWduYWwxKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJhbWVfdGlja19wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBhc2gsXG4gIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIEFuIG9iamVjdCBwb29sIGZvciByZS11c2luZyBjb21wb25lbnRzLiBUaGlzIGlzIG5vdCBpbnRlZ3JhdGVkIGluIHRvIEFzaCBidXQgaXMgdXNlZCBkaWVyZWN0bHkgYnlcbiAqIHRoZSBkZXZlbG9wZXIuIEl0IGV4cGVjdHMgY29tcG9uZW50cyB0byBub3QgcmVxdWlyZSBhbnkgcGFyYW1ldGVycyBpbiB0aGVpciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiA8cD5GZXRjaCBhbiBvYmplY3QgZnJvbSB0aGUgcG9vbCB3aXRoPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZ2V0KCBDb21wb25lbnRDbGFzcyApOzwvcD5cbiAqXG4gKiA8cD5JZiB0aGUgcG9vbCBjb250YWlucyBhbiBvYmplY3Qgb2YgdGhlIHJlcXVpcmVkIHR5cGUsIGl0IHdpbGwgYmUgcmV0dXJuZWQuIElmIGl0IGRvZXMgbm90LCBhIG5ldyBvYmplY3RcbiAqIHdpbGwgYmUgY3JlYXRlZCBhbmQgcmV0dXJuZWQuPC9wPlxuICpcbiAqIDxwPlRoZSBvYmplY3QgcmV0dXJuZWQgbWF5IGhhdmUgcHJvcGVydGllcyBzZXQgb24gaXQgZnJvbSB0aGUgdGltZSBpdCB3YXMgcHJldmlvdXNseSB1c2VkLCBzbyBhbGwgcHJvcGVydGllc1xuICogc2hvdWxkIGJlIHJlc2V0IGluIHRoZSBvYmplY3Qgb25jZSBpdCBpcyByZWNlaXZlZC48L3A+XG4gKlxuICogPHA+QWRkIGFuIG9iamVjdCB0byB0aGUgcG9vbCB3aXRoPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZGlzcG9zZSggY29tcG9uZW50ICk7PC9wPlxuICpcbiAqIDxwPllvdSB3aWxsIHVzdWFsbHkgd2FudCB0byBkbyB0aGlzIHdoZW4gcmVtb3ZpbmcgYSBjb21wb25lbnQgZnJvbSBhbiBlbnRpdHkuIFRoZSByZW1vdmUgbWV0aG9kIG9uIHRoZSBlbnRpdHlcbiAqIHJldHVybnMgdGhlIGNvbXBvbmVudCB0aGF0IHdhcyByZW1vdmVkLCBzbyB0aGlzIGNhbiBiZSBkb25lIGluIG9uZSBsaW5lIG9mIGNvZGUgbGlrZSB0aGlzPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZGlzcG9zZSggZW50aXR5LnJlbW92ZSggY29tcG9uZW50ICkgKTs8L3A+XG4gKi9cblxuYXNoLnRvb2xzLkNvbXBvbmVudFBvb2wgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBnZXRQb29sLCBwb29scztcblxuICBmdW5jdGlvbiBDb21wb25lbnRQb29sKCkge31cblxuICBwb29scyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG5cbiAgZ2V0UG9vbCA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKChfcmVmID0gY29tcG9uZW50Q2xhc3MubmFtZSwgX19pbmRleE9mLmNhbGwocG9vbHMsIF9yZWYpID49IDApKSB7XG4gICAgICByZXR1cm4gcG9vbHNbY29tcG9uZW50Q2xhc3MubmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwb29sc1tjb21wb25lbnRDbGFzcy5uYW1lXSA9IFtdO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhbiBvYmplY3QgZnJvbSB0aGUgcG9vbC5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB3YW50ZWQuXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudC5cbiAgICovXG5cbiAgQ29tcG9uZW50UG9vbC5nZXQgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBwb29sO1xuICAgIHBvb2wgPSBnZXRQb29sKGNvbXBvbmVudENsYXNzKTtcbiAgICBpZiAocG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcG9vbC5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBjb21wb25lbnRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJldHVybiBhbiBvYmplY3QgdG8gdGhlIHBvb2wgZm9yIHJldXNlLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmV0dXJuIHRvIHRoZSBwb29sLlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmRpc3Bvc2UgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICB2YXIgcG9vbCwgdHlwZTtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICB0eXBlID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgICAgcG9vbCA9IGdldFBvb2wodHlwZSk7XG4gICAgICBwb29sLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBEaXNwb3NlIG9mIGFsbCBwb29sZWQgcmVzb3VyY2VzLCBmcmVlaW5nIHRoZW0gZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICovXG5cbiAgQ29tcG9uZW50UG9vbC5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb29scyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvbmVudFBvb2w7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEVuZ2luZSwgTm9kZSwgTm9kZUxpc3QsIFN5c3RlbSwgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5FbmdpbmUgPSBhc2guY29yZS5FbmdpbmU7XG5cbk5vZGUgPSBhc2guY29yZS5Ob2RlO1xuXG5Ob2RlTGlzdCA9IGFzaC5jb3JlLk5vZGVMaXN0O1xuXG5TeXN0ZW0gPSBhc2guY29yZS5TeXN0ZW07XG5cblxuLypcbiAqIEEgdXNlZnVsIGNsYXNzIGZvciBzeXN0ZW1zIHdoaWNoIHNpbXBseSBpdGVyYXRlIG92ZXIgYSBzZXQgb2Ygbm9kZXMsIHBlcmZvcm1pbmcgdGhlIHNhbWUgYWN0aW9uIG9uIGVhY2ggbm9kZS4gVGhpc1xuICogY2xhc3MgcmVtb3ZlcyB0aGUgbmVlZCBmb3IgYSBsb3Qgb2YgYm9pbGVycGxhdGUgY29kZSBpbiBzdWNoIHN5c3RlbXMuIEV4dGVuZCB0aGlzIGNsYXNzIGFuZCBwYXNzIHRoZSBub2RlIHR5cGUgYW5kXG4gKiBhIG5vZGUgdXBkYXRlIG1ldGhvZCBpbnRvIHRoZSBjb25zdHJ1Y3Rvci4gVGhlIG5vZGUgdXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvbmNlIHBlciBub2RlIG9uIHRoZSB1cGRhdGUgY3ljbGVcbiAqIHdpdGggdGhlIG5vZGUgaW5zdGFuY2UgYW5kIHRoZSBmcmFtZSB0aW1lIGFzIHBhcmFtZXRlcnMuIGUuZy5cbiAqXG4gKiA8Y29kZT5wYWNrYWdlO1xuICogY2xhc3MgTXlTeXN0ZW0gZXh0ZW5kcyBMaXN0SXRlcmF0aW5nU3lzdGVtPE15Tm9kZT5cbiAqIHtcbiAqICAgICBwdWJsaWMgZnVuY3Rpb24gbmV3KClcbiAqICAgICB7XG4gKiAgICAgICAgIHN1cGVyKE15Tm9kZSwgdXBkYXRlTm9kZSk7XG4gKiAgICAgfVxuICpcbiAqICAgICBwcml2YXRlIGZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZTpNeU5vZGUsIHRpbWU6RmxvYXQpOlZvaWRcbiAqICAgICB7XG4gKiAgICAgICAgIC8vIHByb2Nlc3MgdGhlIG5vZGUgaGVyZVxuICogICAgIH1cbiAqIH1cbiAqIDwvY29kZT5cbiAqL1xuXG5hc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKExpc3RJdGVyYXRpbmdTeXN0ZW0sIF9zdXBlcik7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZUxpc3QgPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVDbGFzcyA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZVVwZGF0ZUZ1bmN0aW9uID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlQWRkZWRGdW5jdGlvbiA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZVJlbW92ZWRGdW5jdGlvbiA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTGlzdEl0ZXJhdGluZ1N5c3RlbShub2RlQ2xhc3MsIG5vZGVVcGRhdGVGdW5jdGlvbiwgbm9kZUFkZGVkRnVuY3Rpb24sIG5vZGVSZW1vdmVkRnVuY3Rpb24pIHtcbiAgICBpZiAobm9kZUFkZGVkRnVuY3Rpb24gPT0gbnVsbCkge1xuICAgICAgbm9kZUFkZGVkRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAobm9kZVJlbW92ZWRGdW5jdGlvbiA9PSBudWxsKSB7XG4gICAgICBub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5ub2RlQ2xhc3MgPSBub2RlQ2xhc3M7XG4gICAgdGhpcy5ub2RlVXBkYXRlRnVuY3Rpb24gPSBub2RlVXBkYXRlRnVuY3Rpb247XG4gICAgdGhpcy5ub2RlQWRkZWRGdW5jdGlvbiA9IG5vZGVBZGRlZEZ1bmN0aW9uO1xuICAgIHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiA9IG5vZGVSZW1vdmVkRnVuY3Rpb247XG4gIH1cblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMubm9kZUxpc3QgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QodGhpcy5ub2RlQ2xhc3MpO1xuICAgIGlmICh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5ub2RlTGlzdC5oZWFkO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlQWRkZWRGdW5jdGlvbihub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZUFkZGVkLmFkZCh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlUmVtb3ZlZC5hZGQodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIGlmICh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVBZGRlZC5yZW1vdmUodGhpcy5ub2RlQWRkZWRGdW5jdGlvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZVJlbW92ZWQucmVtb3ZlKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbik7XG4gICAgfVxuICAgIHRoaXMubm9kZUxpc3QgPSBudWxsO1xuICB9O1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBub2RlID0gdGhpcy5ub2RlTGlzdC5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB0aGlzLm5vZGVVcGRhdGVGdW5jdGlvbihub2RlLCB0aW1lKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMaXN0SXRlcmF0aW5nU3lzdGVtO1xuXG59KShTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0X2l0ZXJhdGluZ19zeXN0ZW0uanMubWFwXG4iLCJcbi8qXG5cbiAgIF8gICAgICAgX1xuICAvX1xcICBfX198IHxfX1xuIC8vX1xcXFwvIF9ffCAnXyBcXFxuLyAgXyAgXFxfXyBcXCB8IHwgfFxuXFxfLyBcXF8vX19fL198IHxffFxuXG4gICAgICAgICAgICAgIF9fICBfX1xuICAgIF9fXyBfX18gIC8gX3wvIF98IF9fXyAgX19fXG4gICAvIF9fLyBfIFxcfCB8X3wgfF8gLyBfIFxcLyBfIFxcXG4gIHwgKF98IChfKSB8ICBffCAgX3wgIF9fLyAgX18vXG4gKF8pX19fXFxfX18vfF98IHxffCAgXFxfX198XFxfX198XG5cblxuQ29weXJpZ2h0IChjKSAyMDE1IEJydWNlIERhdmlkc29uICZsdDtkYXJrb3ZlcmxvcmRvZmRhdGFAZ21haWwuY29tJmd0O1xuXG5BdXRob3I6IFJpY2hhcmQgTG9yZFxuQ29weXJpZ2h0IChjKSBSaWNoYXJkIExvcmQgMjAxMS0yMDEyXG5odHRwOi8vd3d3LnJpY2hhcmRsb3JkLm5ldFxuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4nU29mdHdhcmUnKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG5JTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcblRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG5TT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxubW9kdWxlLmV4cG9ydHMgPSBhc2ggPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGFzaCgpIHt9XG5cbiAgcmV0dXJuIGFzaDtcblxufSkoKTtcblxuYXNoLnNpZ25hbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNpZ25hbHMoKSB7fVxuXG4gIHJldHVybiBzaWduYWxzO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGUnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlX3Bvb2wnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWxfYmFzZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDAnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwxJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMicpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDMnKTtcblxuYXNoLmNvcmUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNvcmUoKSB7fVxuXG4gIHJldHVybiBjb3JlO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL2VudGl0eScpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL2VudGl0eV9saXN0Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL25vZGVfbGlzdCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL25vZGVfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL3N5c3RlbV9saXN0Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZmFtaWx5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvY29tcG9uZW50X21hdGNoaW5nX2ZhbWlseScpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL2VuZ2luZScpO1xuXG5hc2guZnNtID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBmc20oKSB7fVxuXG4gIHJldHVybiBmc207XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2NvbXBvbmVudF9zaW5nbGV0b25fcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2NvbXBvbmVudF90eXBlX3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9keW5hbWljX2NvbXBvbmVudF9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZHluYW1pY19zeXN0ZW1fcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2VuZ2luZV9zdGF0ZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2VudGl0eV9zdGF0ZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW50aXR5X3N0YXRlX21hY2hpbmUnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zdGF0ZV9zeXN0ZW1fbWFwcGluZycpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vc3lzdGVtX2luc3RhbmNlX3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyJyk7XG5cbmFzaC50aWNrID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB0aWNrKCkge31cblxuICByZXR1cm4gdGljaztcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvdGljay9mcmFtZV90aWNrX3Byb3ZpZGVyJyk7XG5cbmFzaC50b29scyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gdG9vbHMoKSB7fVxuXG4gIHJldHVybiB0b29scztcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvdG9vbHMvY29tcG9uZW50X3Bvb2wnKTtcblxucmVxdWlyZSgnLi9hc2gvdG9vbHMvbGlzdF9pdGVyYXRpbmdfc3lzdGVtJyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl19
