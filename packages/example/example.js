!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Example=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var asteroids;

module.exports = asteroids = (function() {
  function asteroids() {}

  return asteroids;

})();

asteroids.input = (function() {
  function input() {}

  return input;

})();

require('./src/input/key_poll');

asteroids.ui = (function() {
  function ui() {}

  return ui;

})();

require('./src/ui/point');

asteroids.graphics = (function() {
  function graphics() {}

  return graphics;

})();

require('./src/graphics/asteroid_view');

require('./src/graphics/asteroid_death_view');

require('./src/graphics/bullet_view');

require('./src/graphics/hud_view');

require('./src/graphics/spaceship_death_view');

require('./src/graphics/spaceship_view');

require('./src/graphics/wait_for_start_view');

asteroids.components = (function() {
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

require('./src/components/position');

require('./src/components/spaceship');

require('./src/components/wait_for_start');

asteroids.nodes = (function() {
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

require('./src/nodes/render_node');

require('./src/nodes/spaceship_collision_node');

require('./src/nodes/spaceship_node');

require('./src/nodes/wait_for_start_node');

asteroids.systems = (function() {
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

require('./src/systems/render_system');

require('./src/systems/system_priorities');

require('./src/systems/wait_for_start_system');

require('./src/entity_creator');

require('./src/game_config');

require('./src/asteroids');

require('./src/main');

//# sourceMappingURL=index.js.map

},{"./src/asteroids":2,"./src/components/animation":3,"./src/components/asteroid":4,"./src/components/audio":5,"./src/components/bullet":6,"./src/components/collision":7,"./src/components/death_throes":8,"./src/components/display":9,"./src/components/game_state":10,"./src/components/gun":11,"./src/components/gun_controls":12,"./src/components/hud":13,"./src/components/motion":14,"./src/components/motion_controls":15,"./src/components/position":16,"./src/components/spaceship":17,"./src/components/wait_for_start":18,"./src/entity_creator":19,"./src/game_config":20,"./src/graphics/asteroid_death_view":21,"./src/graphics/asteroid_view":22,"./src/graphics/bullet_view":23,"./src/graphics/hud_view":24,"./src/graphics/spaceship_death_view":25,"./src/graphics/spaceship_view":26,"./src/graphics/wait_for_start_view":27,"./src/input/key_poll":28,"./src/main":29,"./src/nodes/animation_node":30,"./src/nodes/asteroid_collision_node":31,"./src/nodes/audio_node":32,"./src/nodes/bullet_age_node":33,"./src/nodes/bullet_collision_node":34,"./src/nodes/death_throes_node":35,"./src/nodes/game_node":36,"./src/nodes/gun_control_node":37,"./src/nodes/hud_node":38,"./src/nodes/motion_control_node":39,"./src/nodes/movement_node":40,"./src/nodes/render_node":41,"./src/nodes/spaceship_collision_node":42,"./src/nodes/spaceship_node":43,"./src/nodes/wait_for_start_node":44,"./src/systems/animation_system":45,"./src/systems/audio_system":46,"./src/systems/bullet_age_system":47,"./src/systems/collision_system":48,"./src/systems/death_throes_system":49,"./src/systems/game_manager":50,"./src/systems/gun_control_system":51,"./src/systems/hud_system":52,"./src/systems/motion_control_system":53,"./src/systems/movement_system":54,"./src/systems/render_system":55,"./src/systems/system_priorities":56,"./src/systems/wait_for_start_system":57,"./src/ui/point":58}],2:[function(require,module,exports){
'use strict';
var AnimationSystem, AudioSystem, BulletAgeSystem, CollisionSystem, DeathThroesSystem, EntityCreator, GameConfig, GameManager, GameState, GunControlSystem, HudSystem, KeyPoll, MotionControlSystem, MovementSystem, PhysicsSystem, RenderSystem, SystemPriorities, WaitForStartSystem, ash, asteroids;

ash = require('../../lib');

asteroids = require('../../example');

AnimationSystem = asteroids.systems.AnimationSystem;

AudioSystem = asteroids.systems.AudioSystem;

BulletAgeSystem = asteroids.systems.BulletAgeSystem;

CollisionSystem = asteroids.systems.CollisionSystem;

DeathThroesSystem = asteroids.systems.DeathThroesSystem;

GameManager = asteroids.systems.GameManager;

GunControlSystem = asteroids.systems.GunControlSystem;

HudSystem = asteroids.systems.HudSystem;

MotionControlSystem = asteroids.systems.MotionControlSystem;

MovementSystem = asteroids.systems.MovementSystem;

RenderSystem = asteroids.systems.RenderSystem;

SystemPriorities = asteroids.systems.SystemPriorities;

WaitForStartSystem = asteroids.systems.WaitForStartSystem;

PhysicsSystem = asteroids.systems.PhysicsSystem;

GameState = asteroids.components.GameState;

EntityCreator = asteroids.EntityCreator;

GameConfig = asteroids.GameConfig;

KeyPoll = asteroids.input.KeyPoll;

asteroids.Asteroids = (function() {
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
    this.engine = new ash.core.Engine();
    this.creator = new EntityCreator(this.engine, this.container, this.world);
    this.keyPoll = new KeyPoll(window);
    this.config = new GameConfig();
    this.config.height = height;
    this.config.width = width;
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

},{"../../example":1,"../../lib":92}],3:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Animation = (function() {
  Animation.prototype.animation = null;

  function Animation(animation) {
    this.animation = animation;
  }

  return Animation;

})();

//# sourceMappingURL=animation.js.map

},{"../../../example":1}],4:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Asteroid = (function() {
  Asteroid.prototype.fsm = null;

  function Asteroid(fsm) {
    this.fsm = fsm;
  }

  return Asteroid;

})();

//# sourceMappingURL=asteroid.js.map

},{"../../../example":1}],5:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Audio = (function() {
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
var asteroids;

asteroids = require('../../../example');

asteroids.components.Bullet = (function() {
  Bullet.prototype.lifeRemaining = 0;

  function Bullet(lifeRemaining) {
    this.lifeRemaining = lifeRemaining;
  }

  return Bullet;

})();

//# sourceMappingURL=bullet.js.map

},{"../../../example":1}],7:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Collision = (function() {
  Collision.prototype.radius = 0;

  function Collision(radius) {
    this.radius = radius;
  }

  return Collision;

})();

//# sourceMappingURL=collision.js.map

},{"../../../example":1}],8:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.DeathThroes = (function() {
  DeathThroes.prototype.countdown = 0;

  function DeathThroes(duration) {
    this.countdown = duration;
  }

  return DeathThroes;

})();

//# sourceMappingURL=death_throes.js.map

},{"../../../example":1}],9:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Display = (function() {
  Display.prototype.graphic = 0;

  function Display(graphic) {
    this.graphic = graphic;
  }

  return Display;

})();

//# sourceMappingURL=display.js.map

},{"../../../example":1}],10:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.GameState = (function() {
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
var Point, asteroids;

asteroids = require('../../../example');

Point = asteroids.ui.Point;

asteroids.components.Gun = (function() {
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
var asteroids;

asteroids = require('../../../example');

asteroids.components.GunControls = (function() {
  GunControls.prototype.trigger = 0;

  function GunControls(trigger) {
    this.trigger = trigger;
  }

  return GunControls;

})();

//# sourceMappingURL=gun_controls.js.map

},{"../../../example":1}],13:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Hud = (function() {
  Hud.prototype.view = null;

  function Hud(view) {
    this.view = view;
  }

  return Hud;

})();

//# sourceMappingURL=hud.js.map

},{"../../../example":1}],14:[function(require,module,exports){
'use strict';
var Point, asteroids;

asteroids = require('../../../example');

Point = asteroids.ui.Point;

asteroids.components.Motion = (function() {
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
var asteroids;

asteroids = require('../../../example');

asteroids.components.MotionControls = (function() {
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
var Point, asteroids;

asteroids = require('../../../example');

Point = asteroids.ui.Point;

asteroids.components.Position = (function() {
  Position.prototype.position = null;

  Position.prototype.rotation = 0;

  function Position(x, y, rotation) {
    this.rotation = rotation;
    this.position = new Point(x, y);
  }

  return Position;

})();

//# sourceMappingURL=position.js.map

},{"../../../example":1}],17:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.components.Spaceship = (function() {
  Spaceship.prototype.fsm = null;

  function Spaceship(fsm) {
    this.fsm = fsm;
  }

  return Spaceship;

})();

//# sourceMappingURL=spaceship.js.map

},{"../../../example":1}],18:[function(require,module,exports){
'use strict';
var asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

asteroids = require('../../../example');

asteroids.components.WaitForStart = (function() {
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

},{"../../../example":1}],19:[function(require,module,exports){
'use strict';
var Animation, Asteroid, AsteroidDeathView, AsteroidView, Audio, Bullet, BulletView, Collision, DeathThroes, Display, Entity, EntityStateMachine, GameState, Gun, GunControls, Hud, HudView, Motion, MotionControls, Physics, Position, Spaceship, SpaceshipDeathView, SpaceshipView, WaitForStart, WaitForStartView, ash, asteroids;

ash = require('../../lib');

asteroids = require('../../example');

WaitForStartView = asteroids.graphics.WaitForStartView;

Entity = ash.core.Entity;

EntityStateMachine = ash.fsm.EntityStateMachine;


/*
 * Asteroid Game Components
 */

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

Physics = asteroids.components.Physics;

Position = asteroids.components.Position;

Spaceship = asteroids.components.Spaceship;

WaitForStart = asteroids.components.WaitForStart;


/*
 * Drawable Components
 */

AsteroidDeathView = asteroids.graphics.AsteroidDeathView;

AsteroidView = asteroids.graphics.AsteroidView;

BulletView = asteroids.graphics.BulletView;

HudView = asteroids.graphics.HudView;

SpaceshipDeathView = asteroids.graphics.SpaceshipDeathView;

SpaceshipView = asteroids.graphics.SpaceshipView;

asteroids.EntityCreator = (function() {
  var KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_Z;

  KEY_LEFT = 37;

  KEY_UP = 38;

  KEY_RIGHT = 39;

  KEY_Z = 90;

  EntityCreator.prototype.engine = null;

  EntityCreator.prototype.waitEntity = null;

  EntityCreator.prototype.graphic = null;

  function EntityCreator(engine, graphic, world) {
    this.engine = engine;
    this.graphic = graphic;
    this.world = world;
  }

  EntityCreator.prototype.destroyEntity = function(entity) {
    this.engine.removeEntity(entity);
  };


  /*
   * Game State
   */

  EntityCreator.prototype.createGame = function() {
    var gameEntity, hud;
    hud = new HudView(this.graphic);
    gameEntity = new Entity('game').add(new GameState()).add(new Hud(hud)).add(new Display(hud)).add(new Position(0, 0, 0, 0));
    this.engine.addEntity(gameEntity);
    return gameEntity;
  };


  /*
   * Start...
   */

  EntityCreator.prototype.createWaitForClick = function() {
    var waitView;
    if (!this.waitEntity) {
      waitView = new WaitForStartView(this.graphic);
      this.waitEntity = new Entity('wait').add(new WaitForStart(waitView)).add(new Display(waitView)).add(new Position(0, 0, 0, 0));
    }
    this.waitEntity.get(WaitForStart).startGame = false;
    this.engine.addEntity(this.waitEntity);
    return this.waitEntity;
  };


  /*
   * Create Player Spaceship
   */

  EntityCreator.prototype.createSpaceshipWithoutFsm = function() {
    var spaceship;
    spaceship = new Entity().add(new Spaceship()).add(new Position(300, 225, 0)).add(new Audio()).add(new Motion(0, 0, 0, 15)).add(new MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3)).add(new Gun(8, 0, 0.3, 2)).add(new GunControls(KEY_Z)).add(new Collision(9)).add(new Display(new SpaceshipView(this.graphic)));
    this.engine.addEntity(spaceship);
    return spaceship;
  };


  /*
   * Create an Asteroid
   */

  EntityCreator.prototype.createAsteroidWithoutFsm = function(radius, x, y) {
    var asteroid;
    asteroid = new Entity().add(new Asteroid()).add(new Position(x, y, 0)).add(new Audio()).add(new Motion((Math.random() - 0.5) * 4 * (50 - radius), (Math.random() - 0.5) * 4 * (50 - radius), Math.random() * 2 - 1, 0)).add(new Collision(radius)).add(new Display(new AsteroidView(this.graphic, radius)));
    this.engine.addEntity(asteroid);
    return asteroid;
  };


  /*
   * Create an Asteroid with FSM Animation
   */

  EntityCreator.prototype.createAsteroid = function(radius, x, y) {
    var asteroid, deathView, fsm;
    asteroid = new Entity();
    fsm = new EntityStateMachine(asteroid);
    fsm.createState('alive').add(Motion).withInstance(new Motion((Math.random() - 0.5) * 4 * (50 - radius), (Math.random() - 0.5) * 4 * (50 - radius), Math.random() * 2 - 1, 0)).add(Collision).withInstance(new Collision(radius)).add(Display).withInstance(new Display(new AsteroidView(this.graphic, radius)));
    deathView = new AsteroidDeathView(this.graphic, radius);
    fsm.createState('destroyed').add(DeathThroes).withInstance(new DeathThroes(3)).add(Display).withInstance(new Display(deathView)).add(Animation).withInstance(new Animation(deathView));
    asteroid.add(new Asteroid(fsm)).add(new Position(x, y, 0)).add(new Audio());
    fsm.changeState('alive');
    this.engine.addEntity(asteroid);
    return asteroid;
  };


  /*
   * Create Player Spaceship with FSM Animation
   */

  EntityCreator.prototype.createSpaceship = function() {
    var deathView, fsm, spaceship;
    spaceship = new Entity();
    fsm = new EntityStateMachine(spaceship);
    fsm.createState('playing').add(Motion).withInstance(new Motion(0, 0, 0, 15)).add(MotionControls).withInstance(new MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3)).add(Gun).withInstance(new Gun(8, 0, 0.3, 2)).add(GunControls).withInstance(new GunControls(KEY_Z)).add(Collision).withInstance(new Collision(9)).add(Display).withInstance(new Display(new SpaceshipView(this.graphic)));
    deathView = new SpaceshipDeathView(this.graphic);
    fsm.createState('destroyed').add(DeathThroes).withInstance(new DeathThroes(5)).add(Display).withInstance(new Display(deathView)).add(Animation).withInstance(new Animation(deathView));
    spaceship.add(new Spaceship(fsm)).add(new Position(300, 225, 0)).add(new Audio());
    fsm.changeState('playing');
    this.engine.addEntity(spaceship);
    return spaceship;
  };


  /*
   * Create a Bullet
   */

  EntityCreator.prototype.createUserBullet = function(gun, parentPosition) {
    var bullet, cos, sin, x, y;
    cos = Math.cos(parentPosition.rotation);
    sin = Math.sin(parentPosition.rotation);
    x = cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x;
    y = sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y;
    bullet = new Entity().add(new Bullet(gun.bulletLifetime)).add(new Position(x, y, 0)).add(new Collision(0)).add(new Motion(cos * 150, sin * 150, 0, 0)).add(new Display(new BulletView(this.graphic)));
    this.engine.addEntity(bullet);
    return bullet;
  };

  return EntityCreator;

})();

//# sourceMappingURL=entity_creator.js.map

},{"../../example":1,"../../lib":92}],20:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../example');

asteroids.GameConfig = (function() {
  function GameConfig() {}

  GameConfig.prototype.width = 0;

  GameConfig.prototype.height = 0;

  return GameConfig;

})();

//# sourceMappingURL=game_config.js.map

},{"../../example":1}],21:[function(require,module,exports){
'use strict';
var Dot, Point, asteroids;

asteroids = require('../../../example');

Point = asteroids.ui.Point;

asteroids.graphics.AsteroidDeathView = (function() {
  var numDots;

  numDots = 8;

  AsteroidDeathView.prototype.dots = null;

  AsteroidDeathView.prototype.x = 0;

  AsteroidDeathView.prototype.y = 0;

  AsteroidDeathView.prototype.width = 0;

  AsteroidDeathView.prototype.height = 0;

  AsteroidDeathView.prototype.rotation = 0;

  AsteroidDeathView.prototype.graphic = null;

  AsteroidDeathView.prototype.radius = 0;

  AsteroidDeathView.prototype.points = null;

  AsteroidDeathView.prototype.count = 0;

  AsteroidDeathView.prototype.first = true;

  function AsteroidDeathView(graphic, radius) {
    this.graphic = graphic;
    this.radius = radius;
    this.dots = [];
  }

  AsteroidDeathView.prototype.animate = function(time) {
    var dot, i, _i, _j, _len, _ref;
    if (this.first) {
      this.first = false;
      for (i = _i = 0; 0 <= numDots ? _i < numDots : _i > numDots; i = 0 <= numDots ? ++_i : --_i) {
        dot = new Dot(this.graphic, this.radius);
        this.dots.push(dot);
      }
    }
    _ref = this.dots;
    for (_j = 0, _len = _ref.length; _j < _len; _j++) {
      dot = _ref[_j];
      dot.x += dot.velocity.x * time;
      dot.y += dot.velocity.y * time;
    }
    return this.draw();
  };

  AsteroidDeathView.prototype.draw = function() {
    var dot, _i, _len, _ref, _results;
    _ref = this.dots;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      dot = _ref[_i];
      _results.push(dot.draw(this.x, this.y));
    }
    return _results;
  };

  return AsteroidDeathView;

})();

Dot = (function() {
  Dot.prototype.velocity = null;

  Dot.prototype.graphic = null;

  Dot.prototype.x1 = 0;

  Dot.prototype.y1 = 0;

  Dot.prototype.x = 0;

  Dot.prototype.y = 0;

  function Dot(graphic, maxDistance) {
    var angle, distance, speed;
    this.graphic = graphic;
    angle = Math.random() * 2 * Math.PI;
    distance = Math.random() * maxDistance;
    this.x = Math.cos(angle) * distance;
    this.y = Math.sin(angle) * distance;
    speed = Math.random() * 10 + 10;
    this.velocity = new Point(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }

  Dot.prototype.draw = function(x, y) {
    var graphic;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(x, y);
    graphic.rotate(this.rotation);
    graphic.fillStyle = "#FFFFFF";
    graphic.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
    graphic.fill();
    graphic.restore();
  };

  return Dot;

})();

//# sourceMappingURL=asteroid_death_view.js.map

},{"../../../example":1}],22:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.graphics.AsteroidView = (function() {
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

},{"../../../example":1}],23:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.graphics.BulletView = (function() {
  BulletView.prototype.x = 0;

  BulletView.prototype.y = 0;

  BulletView.prototype.width = 4;

  BulletView.prototype.height = 4;

  BulletView.prototype.rotation = 0;

  BulletView.prototype.graphic = null;

  function BulletView(graphic) {
    this.graphic = graphic;
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

},{"../../../example":1}],24:[function(require,module,exports){
'use strict';
var asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

asteroids = require('../../../example');

asteroids.graphics.HudView = (function() {
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
  }

  HudView.prototype.draw = function() {
    this.drawScore();
    this.drawLives();
  };

  HudView.prototype.setLives = function(lives) {
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

},{"../../../example":1}],25:[function(require,module,exports){
'use strict';
var Point, asteroids;

asteroids = require('../../../example');

Point = asteroids.ui.Point;

asteroids.graphics.SpaceshipDeathView = (function() {
  SpaceshipDeathView.prototype.x = 0;

  SpaceshipDeathView.prototype.y = 0;

  SpaceshipDeathView.prototype.width = 20;

  SpaceshipDeathView.prototype.height = 20;

  SpaceshipDeathView.prototype.rotation = 0;

  SpaceshipDeathView.prototype.graphic = null;

  SpaceshipDeathView.prototype.vel1 = null;

  SpaceshipDeathView.prototype.vel2 = null;

  SpaceshipDeathView.prototype.rot1 = null;

  SpaceshipDeathView.prototype.rot2 = null;

  SpaceshipDeathView.prototype.x1 = 0;

  SpaceshipDeathView.prototype.y2 = 0;

  SpaceshipDeathView.prototype.y1 = 0;

  SpaceshipDeathView.prototype.y2 = 0;

  SpaceshipDeathView.prototype.first = true;

  function SpaceshipDeathView(graphic) {
    this.graphic = graphic;
  }

  SpaceshipDeathView.prototype.animate = function(time) {
    if (this.first) {
      this.first = false;
      this.vel1 = new Point(Math.random() * 10 - 5, Math.random() * 10 + 10);
      this.vel2 = new Point(Math.random() * 10 - 5, -(Math.random() * 10 + 10));
      this.rot1 = Math.random() * 300 - 150;
      this.rot2 = Math.random() * 300 - 150;
      this.x1 = this.x2 = this.x;
      this.y1 = this.y2 = this.y;
      this.r1 = this.r2 = this.rotation;
    }
    this.x1 += this.vel1.x * time;
    this.y1 += this.vel1.y * time;
    this.r1 += this.rot1 * time;
    this.x2 += this.vel2.x * time;
    this.y2 += this.vel2.y * time;
    this.r2 += this.rot2 * time;
    return this.draw();
  };

  SpaceshipDeathView.prototype.draw = function() {
    var graphic;
    graphic = this.graphic;
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x + this.x1, this.y + this.y1);
    graphic.rotate(this.r1);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(10, 0);
    graphic.lineTo(-7, 7);
    graphic.lineTo(-4, 0);
    graphic.lineTo(10, 0);
    graphic.fill();
    graphic.restore();
    graphic.save();
    graphic.beginPath();
    graphic.translate(this.x + this.x2, this.y + this.y2);
    graphic.rotate(this.r2);
    graphic.fillStyle = "#FFFFFF";
    graphic.moveTo(10, 0);
    graphic.lineTo(-7, 7);
    graphic.lineTo(-4, 0);
    graphic.lineTo(10, 0);
    graphic.fill();
    graphic.restore();
  };

  return SpaceshipDeathView;

})();

//# sourceMappingURL=spaceship_death_view.js.map

},{"../../../example":1}],26:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.graphics.SpaceshipView = (function() {
  SpaceshipView.prototype.x = 0;

  SpaceshipView.prototype.y = 0;

  SpaceshipView.prototype.width = 20;

  SpaceshipView.prototype.height = 20;

  SpaceshipView.prototype.rotation = 0;

  SpaceshipView.prototype.graphic = null;

  function SpaceshipView(graphic) {
    this.graphic = graphic;
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

},{"../../../example":1}],27:[function(require,module,exports){
'use strict';
var Signal0, ash, asteroids;

asteroids = require('../../../example');

ash = require('../../../lib');

Signal0 = ash.signals.Signal0;

asteroids.graphics.WaitForStartView = (function() {
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

},{"../../../example":1,"../../../lib":92}],28:[function(require,module,exports){
'use strict';
var asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

asteroids = require('../../../example');

asteroids.input.KeyPoll = (function() {
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

},{"../../../example":1}],29:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../example');

asteroids.Main = (function() {
  function Main() {
    var canvas;
    canvas = this.canvas();
    asteroids = new asteroids.Asteroids(canvas.getContext('2d'), canvas.width, canvas.height);
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

},{"../../example":1}],30:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.AnimationNode = (function(_super) {
  __extends(AnimationNode, _super);

  function AnimationNode() {
    return AnimationNode.__super__.constructor.apply(this, arguments);
  }

  AnimationNode.components = {
    animation: asteroids.components.Animation
  };

  AnimationNode.prototype.animation = null;

  return AnimationNode;

})(ash.core.Node);

//# sourceMappingURL=animation_node.js.map

},{"../../../example":1,"../../../lib":92}],31:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.AsteroidCollisionNode = (function(_super) {
  __extends(AsteroidCollisionNode, _super);

  function AsteroidCollisionNode() {
    return AsteroidCollisionNode.__super__.constructor.apply(this, arguments);
  }

  AsteroidCollisionNode.components = {
    asteroid: asteroids.components.Asteroid,
    position: asteroids.components.Position,
    collision: asteroids.components.Collision,
    audio: asteroids.components.Audio
  };

  AsteroidCollisionNode.prototype.asteroid = null;

  AsteroidCollisionNode.prototype.position = null;

  AsteroidCollisionNode.prototype.collision = null;

  AsteroidCollisionNode.prototype.audio = null;

  return AsteroidCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=asteroid_collision_node.js.map

},{"../../../example":1,"../../../lib":92}],32:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.AudioNode = (function(_super) {
  __extends(AudioNode, _super);

  function AudioNode() {
    return AudioNode.__super__.constructor.apply(this, arguments);
  }

  AudioNode.components = {
    audio: asteroids.components.Audio
  };

  AudioNode.prototype.audio = null;

  return AudioNode;

})(ash.core.Node);

//# sourceMappingURL=audio_node.js.map

},{"../../../example":1,"../../../lib":92}],33:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.BulletAgeNode = (function(_super) {
  __extends(BulletAgeNode, _super);

  function BulletAgeNode() {
    return BulletAgeNode.__super__.constructor.apply(this, arguments);
  }

  BulletAgeNode.components = {
    bullet: asteroids.components.Bullet
  };

  BulletAgeNode.prototype.bullet = null;

  return BulletAgeNode;

})(ash.core.Node);

//# sourceMappingURL=bullet_age_node.js.map

},{"../../../example":1,"../../../lib":92}],34:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.BulletCollisionNode = (function(_super) {
  __extends(BulletCollisionNode, _super);

  function BulletCollisionNode() {
    return BulletCollisionNode.__super__.constructor.apply(this, arguments);
  }

  BulletCollisionNode.components = {
    bullet: asteroids.components.Bullet,
    position: asteroids.components.Position,
    collision: asteroids.components.Collision
  };

  BulletCollisionNode.prototype.bullet = null;

  BulletCollisionNode.prototype.position = null;

  BulletCollisionNode.prototype.collision = null;

  return BulletCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=bullet_collision_node.js.map

},{"../../../example":1,"../../../lib":92}],35:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.DeathThroesNode = (function(_super) {
  __extends(DeathThroesNode, _super);

  function DeathThroesNode() {
    return DeathThroesNode.__super__.constructor.apply(this, arguments);
  }

  DeathThroesNode.components = {
    death: asteroids.components.DeathThroes
  };

  DeathThroesNode.prototype.death = null;

  return DeathThroesNode;

})(ash.core.Node);

//# sourceMappingURL=death_throes_node.js.map

},{"../../../example":1,"../../../lib":92}],36:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.GameNode = (function(_super) {
  __extends(GameNode, _super);

  function GameNode() {
    return GameNode.__super__.constructor.apply(this, arguments);
  }

  GameNode.components = {
    state: asteroids.components.GameState
  };

  GameNode.prototype.state = null;

  return GameNode;

})(ash.core.Node);

//# sourceMappingURL=game_node.js.map

},{"../../../example":1,"../../../lib":92}],37:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.GunControlNode = (function(_super) {
  __extends(GunControlNode, _super);

  function GunControlNode() {
    return GunControlNode.__super__.constructor.apply(this, arguments);
  }

  GunControlNode.components = {
    audio: asteroids.components.Audio,
    control: asteroids.components.GunControls,
    gun: asteroids.components.Gun,
    position: asteroids.components.Position
  };

  GunControlNode.prototype.control = null;

  GunControlNode.prototype.gun = null;

  GunControlNode.prototype.position = null;

  GunControlNode.prototype.audio = null;

  return GunControlNode;

})(ash.core.Node);

//# sourceMappingURL=gun_control_node.js.map

},{"../../../example":1,"../../../lib":92}],38:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.HudNode = (function(_super) {
  __extends(HudNode, _super);

  function HudNode() {
    return HudNode.__super__.constructor.apply(this, arguments);
  }

  HudNode.components = {
    state: asteroids.components.GameState,
    hud: asteroids.components.Hud
  };

  HudNode.prototype.state = null;

  HudNode.prototype.hud = null;

  return HudNode;

})(ash.core.Node);

//# sourceMappingURL=hud_node.js.map

},{"../../../example":1,"../../../lib":92}],39:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.MotionControlNode = (function(_super) {
  __extends(MotionControlNode, _super);

  function MotionControlNode() {
    return MotionControlNode.__super__.constructor.apply(this, arguments);
  }

  MotionControlNode.components = {
    control: asteroids.components.MotionControls,
    position: asteroids.components.Position,
    motion: asteroids.components.Motion
  };

  MotionControlNode.prototype.control = null;

  MotionControlNode.prototype.position = null;

  MotionControlNode.prototype.motion = null;

  return MotionControlNode;

})(ash.core.Node);

//# sourceMappingURL=motion_control_node.js.map

},{"../../../example":1,"../../../lib":92}],40:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.MovementNode = (function(_super) {
  __extends(MovementNode, _super);

  function MovementNode() {
    return MovementNode.__super__.constructor.apply(this, arguments);
  }

  MovementNode.components = {
    position: asteroids.components.Position,
    motion: asteroids.components.Motion
  };

  MovementNode.prototype.position = null;

  MovementNode.prototype.motion = null;

  return MovementNode;

})(ash.core.Node);

//# sourceMappingURL=movement_node.js.map

},{"../../../example":1,"../../../lib":92}],41:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.RenderNode = (function(_super) {
  __extends(RenderNode, _super);

  function RenderNode() {
    return RenderNode.__super__.constructor.apply(this, arguments);
  }

  RenderNode.components = {
    position: asteroids.components.Position,
    display: asteroids.components.Display
  };

  RenderNode.prototype.position = null;

  RenderNode.prototype.display = null;

  return RenderNode;

})(ash.core.Node);

//# sourceMappingURL=render_node.js.map

},{"../../../example":1,"../../../lib":92}],42:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.SpaceshipCollisionNode = (function(_super) {
  __extends(SpaceshipCollisionNode, _super);

  function SpaceshipCollisionNode() {
    return SpaceshipCollisionNode.__super__.constructor.apply(this, arguments);
  }

  SpaceshipCollisionNode.components = {
    spaceship: asteroids.components.Spaceship,
    position: asteroids.components.Position,
    collision: asteroids.components.Collision,
    audio: asteroids.components.Audio
  };

  SpaceshipCollisionNode.prototype.spaceship = 0;

  SpaceshipCollisionNode.prototype.position = 0;

  SpaceshipCollisionNode.prototype.collision = null;

  SpaceshipCollisionNode.prototype.audio = null;

  return SpaceshipCollisionNode;

})(ash.core.Node);

//# sourceMappingURL=spaceship_collision_node.js.map

},{"../../../example":1,"../../../lib":92}],43:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.SpaceshipNode = (function(_super) {
  __extends(SpaceshipNode, _super);

  function SpaceshipNode() {
    return SpaceshipNode.__super__.constructor.apply(this, arguments);
  }

  SpaceshipNode.components = {
    spaceship: asteroids.components.Spaceship,
    position: asteroids.components.Position
  };

  SpaceshipNode.prototype.spaceship = 0;

  SpaceshipNode.prototype.position = 0;

  return SpaceshipNode;

})(ash.core.Node);

//# sourceMappingURL=spaceship_node.js.map

},{"../../../example":1,"../../../lib":92}],44:[function(require,module,exports){
'use strict';
var ash, asteroids,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

asteroids.nodes.WaitForStartNode = (function(_super) {
  __extends(WaitForStartNode, _super);

  function WaitForStartNode() {
    return WaitForStartNode.__super__.constructor.apply(this, arguments);
  }

  WaitForStartNode.components = {
    wait: asteroids.components.WaitForStart
  };

  WaitForStartNode.prototype.wait = null;

  return WaitForStartNode;

})(ash.core.Node);

//# sourceMappingURL=wait_for_start_node.js.map

},{"../../../example":1,"../../../lib":92}],45:[function(require,module,exports){
'use strict';
var AnimationNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

AnimationNode = asteroids.nodes.AnimationNode;

asteroids.systems.AnimationSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],46:[function(require,module,exports){
'use strict';
var AudioNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

AudioNode = asteroids.nodes.AudioNode;

asteroids.systems.AudioSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],47:[function(require,module,exports){
'use strict';
var BulletAgeNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

BulletAgeNode = asteroids.nodes.BulletAgeNode;

asteroids.systems.BulletAgeSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],48:[function(require,module,exports){
'use strict';
var Animation, Asteroid, AsteroidCollisionNode, AsteroidDeathView, AsteroidView, Audio, Bullet, BulletCollisionNode, BulletView, Collision, DeathThroes, Display, GameNode, GameState, Gun, GunControls, Hud, HudView, Motion, MotionControls, Physics, Position, Spaceship, SpaceshipCollisionNode, SpaceshipDeathView, SpaceshipView, WaitForStart, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

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

Physics = asteroids.components.Physics;

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
            this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
          }
          asteroid.asteroid.fsm.changeState('destroyed');

          /*
           emulate the fsm state change
           */
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
          spaceship.spaceship.fsm.changeState('destroyed');

          /*
           emulate the fsm state change
           */
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

},{"../../../example":1,"../../../lib":92}],49:[function(require,module,exports){
'use strict';
var DeathThroesNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

DeathThroesNode = asteroids.nodes.DeathThroesNode;

asteroids.systems.DeathThroesSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],50:[function(require,module,exports){
'use strict';
var AsteroidCollisionNode, BulletCollisionNode, GameNode, Point, SpaceshipNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

GameNode = asteroids.nodes.GameNode;

SpaceshipNode = asteroids.nodes.SpaceshipNode;

AsteroidCollisionNode = asteroids.nodes.AsteroidCollisionNode;

BulletCollisionNode = asteroids.nodes.BulletCollisionNode;

Point = asteroids.ui.Point;

asteroids.systems.GameManager = (function(_super) {
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
            if (Point.distance(asteroid.position.position, newSpaceshipPosition) <= asteroid.collision.radius + 50) {
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
            if (!(Point.distance(position, spaceship.position.position) <= 80)) {
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

},{"../../../example":1,"../../../lib":92}],51:[function(require,module,exports){
'use strict';
var GunControlNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

GunControlNode = asteroids.nodes.GunControlNode;

asteroids.systems.GunControlSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],52:[function(require,module,exports){
'use strict';
var HudNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

HudNode = asteroids.nodes.HudNode;

asteroids.systems.HudSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],53:[function(require,module,exports){
'use strict';
var MotionControlNode, ash, asteroids, b2Vec2,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

MotionControlNode = asteroids.nodes.MotionControlNode;

b2Vec2 = Box2D.Common.Math.b2Vec2;

asteroids.systems.MotionControlSystem = (function(_super) {
  __extends(MotionControlSystem, _super);

  MotionControlSystem.prototype.keyPoll = null;

  function MotionControlSystem(keyPoll) {
    this.keyPoll = keyPoll;
    this.updateNode = __bind(this.updateNode, this);
    MotionControlSystem.__super__.constructor.call(this, MotionControlNode, this.updateNode);
  }

  MotionControlSystem.prototype.updateNode = function(node, time) {
    var control, left, motion, position, right;
    control = node.control;
    position = node.position;
    motion = node.motion;
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
  };

  return MotionControlSystem;

})(ash.tools.ListIteratingSystem);

//# sourceMappingURL=motion_control_system.js.map

},{"../../../example":1,"../../../lib":92}],54:[function(require,module,exports){
'use strict';
var MovementNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

MovementNode = asteroids.nodes.MovementNode;

asteroids.systems.MovementSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],55:[function(require,module,exports){
'use strict';
var RenderNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

RenderNode = asteroids.nodes.RenderNode;

asteroids.systems.RenderSystem = (function(_super) {
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

  RenderSystem.prototype.addToDisplay = function(node) {};

  RenderSystem.prototype.removeFromDisplay = function(node) {};

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

},{"../../../example":1,"../../../lib":92}],56:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../../example');

asteroids.systems.SystemPriorities = (function() {
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

},{"../../../example":1}],57:[function(require,module,exports){
'use strict';
var AsteroidCollisionNode, GameNode, WaitForStartNode, ash, asteroids,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

asteroids = require('../../../example');

WaitForStartNode = asteroids.nodes.WaitForStartNode;

AsteroidCollisionNode = asteroids.nodes.AsteroidCollisionNode;

GameNode = asteroids.nodes.GameNode;

asteroids.systems.WaitForStartSystem = (function(_super) {
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

},{"../../../example":1,"../../../lib":92}],58:[function(require,module,exports){
'use strict';
var asteroids;

asteroids = require('../../index');

asteroids.ui.Point = (function() {
  Point.prototype.x = 0;

  Point.prototype.y = 0;

  function Point(x, y) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
  }

  Point.distance = function(point1, point2) {
    var dx, dy;
    dx = point1.x - point2.x;
    dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

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

},{"../../index":1}],59:[function(require,module,exports){
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
    var name;
    name = componentClass.name != null ? componentClass.name : componentClass;
    if (name in this.components) {
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

},{"../../../lib":92}],60:[function(require,module,exports){
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
    this.componentRemoved = __bind(this.componentRemoved, this);
    this.componentAdded = __bind(this.componentAdded, this);
    this.entityNameChanged = __bind(this.entityNameChanged, this);
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

},{"../../../lib":92}],61:[function(require,module,exports){
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
    name = componentClass.name != null ? componentClass.name : componentClass;
    component = this.components[name];
    if (component) {
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

},{"../../../lib":92}],62:[function(require,module,exports){
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
    if (!this.head) {
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
    if (this.head === entity) {
      this.head = this.head.next;
    }
    if (this.tail === entity) {
      this.tail = this.tail.previous;
    }
    if (entity.previous) {
      entity.previous.next = entity.next;
    }
    if (entity.next) {
      entity.next.previous = entity.previous;
    }
  };

  EntityList.prototype.removeAll = function() {
    var entity;
    while (this.head) {
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

},{"../../../lib":92}],63:[function(require,module,exports){
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

},{"../../../lib":92}],64:[function(require,module,exports){
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

},{"../../../lib":92}],65:[function(require,module,exports){
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
    if (!this.head) {
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
    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }
    this.nodeRemoved.dispatch(node);
  };

  NodeList.prototype.removeAll = function() {
    var node;
    while (this.head) {
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

},{"../../../lib":92}],66:[function(require,module,exports){
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
    if (this.tail) {
      node = this.tail;
      this.tail = this.tail.previous;
      node.previous = null;
      return node;
    } else {
      return new this.nodeClass();
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
    while (this.cacheTail) {
      node = this.cacheTail;
      this.cacheTail = node.previous;
      this.dispose(node);
    }
  };

  return NodePool;

})();

//# sourceMappingURL=node_pool.js.map

},{"../../../lib":92}],67:[function(require,module,exports){
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

},{"../../../lib":92}],68:[function(require,module,exports){
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
    if (!this.head) {
      this.head = this.tail = system;
      system.next = system.previous = null;
    } else {
      node = this.tail;
      while (node) {
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
      } else if (!node) {
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
    if (system.previous) {
      system.previous.next = system.next;
    }
    if (system.next) {
      system.next.previous = system.previous;
    }
  };

  SystemList.prototype.removeAll = function() {
    var system;
    while (this.head) {
      system = this.head;
      this.head = this.head.next;
      system.previous = null;
      system.next = null;
    }
    this.tail = null;
  };

  SystemList.prototype.get = function(type) {
    var system;
    system = this.head;
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

},{"../../../lib":92}],69:[function(require,module,exports){
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

},{"../../../lib":92}],70:[function(require,module,exports){
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

},{"../../../lib":92}],71:[function(require,module,exports){
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

},{"../../../lib":92}],72:[function(require,module,exports){
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

},{"../../../lib":92}],73:[function(require,module,exports){
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

},{"../../../lib":92}],74:[function(require,module,exports){
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

},{"../../../lib":92}],75:[function(require,module,exports){
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

},{"../../../lib":92}],76:[function(require,module,exports){
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
    return new StateComponentMapping(this, type.name);
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

},{"../../../lib":92}],77:[function(require,module,exports){
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
  		 * Add a state to this state machine.
  		 *
  		 * @param name The name of this state - used to identify it later in the changeState method call.
  		 * @param state The state.
  		 * @return This state machine, so methods can be chained.
   */

  EntityStateMachine.prototype.addState = function(name, state) {
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

  EntityStateMachine.prototype.createState = function(name) {
    var state;
    state = new EntityState();
    this.states[name] = state;
    return state;
  };


  /*
   * Change to a new state. The components from the old state will be removed and the components
   * for the new state will be added.
   *
   * @param name The name of the state to change to.
   */

  EntityStateMachine.prototype.changeState = function(name) {
    var newState, other, toAdd, type;
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
        if (other && other.identifier === this.currentState.providers[type].identifier) {
          delete toAdd[type];
        } else {
          this.entity.remove(type);
        }
      }
    } else {
      toAdd = newState.providers;
    }
    for (type in toAdd) {
      this.entity.add(toAdd[type].getComponent());
    }
    return this.currentState = newState;
  };

  return EntityStateMachine;

})();

//# sourceMappingURL=entity_state_machine.js.map

},{"../../../lib":92}],78:[function(require,module,exports){
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

},{"../../../lib":92}],79:[function(require,module,exports){
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

},{"../../../lib":92}],80:[function(require,module,exports){
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

},{"../../../lib":92}],81:[function(require,module,exports){
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

},{"../../../lib":92}],82:[function(require,module,exports){
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

},{"../../../lib":92}],83:[function(require,module,exports){
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

},{"../../../lib":92}],84:[function(require,module,exports){
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

},{"../../../lib":92}],85:[function(require,module,exports){
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

},{"../../../lib":92}],86:[function(require,module,exports){
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
    while (node) {
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

},{"../../../lib":92}],87:[function(require,module,exports){
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

},{"../../../lib":92}],88:[function(require,module,exports){
'use strict';
var ListenerNodePool, ash;

ash = require('../../../lib');

ListenerNodePool = ash.signals.ListenerNodePool;

ash.signals.SignalBase = (function() {
  SignalBase.prototype.head = null;

  SignalBase.prototype.tail = null;

  SignalBase.prototype.numListeners = 0;

  SignalBase.prototype.keys = null;

  SignalBase.prototype.nodes = null;

  SignalBase.prototype.listenerNodePool = null;

  SignalBase.prototype.toAddHead = null;

  SignalBase.prototype.toAddTail = null;

  SignalBase.prototype.dispatching = false;

  function SignalBase() {
    this.nodes = [];
    this.keys = [];
    this.listenerNodePool = new ListenerNodePool();
    this.numListeners = 0;
  }

  SignalBase.prototype.startDispatch = function() {
    this.dispatching = true;
  };

  SignalBase.prototype.endDispatch = function() {
    this.dispatching = false;
    if (this.toAddHead) {
      if (!this.head) {
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

  SignalBase.prototype.add = function(listener) {
    var node;
    if (this.keys.indexOf(listener) !== -1) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    this.nodes.push(node);
    this.keys.push(listener);
    this.addNode(node);
  };

  SignalBase.prototype.addOnce = function(listener) {
    var node;
    if (this.keys.indexOf(listener) !== -1) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    node.once = true;
    this.nodes.push(node);
    this.keys.push(listener);
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
    var index, node;
    index = this.keys.indexOf(listener);
    node = this.nodes[index];
    if (node) {
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
      if (node.previous) {
        node.previous.next = node.next;
      }
      if (node.next) {
        node.next.previous = node.previous;
      }
      this.nodes.splice(index, 1);
      this.keys.splice(index, 1);
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
    while (this.head) {
      node = this.head;
      this.head = this.head.next;
      this.nodes.splice(index, 1);
      this.listenerNodePool.dispose(node);
    }
    this.nodes = [];
    this.keys = [];
    this.tail = null;
    this.toAddHead = null;
    this.toAddTail = null;
    this.numListeners = 0;
  };

  return SignalBase;

})();

//# sourceMappingURL=signal_base.js.map

},{"../../../lib":92}],89:[function(require,module,exports){
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

},{"../../../lib":92}],90:[function(require,module,exports){
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

},{"../../../lib":92}],91:[function(require,module,exports){
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

},{"../../../lib":92}],92:[function(require,module,exports){

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

require('./ash/fsm/state_component_mapping');

require('./ash/fsm/engine_state_machine');

require('./ash/fsm/entity_state');

require('./ash/fsm/entity_state_machine');

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

},{"./ash/core/component_matching_family":59,"./ash/core/engine":60,"./ash/core/entity":61,"./ash/core/entity_list":62,"./ash/core/family":63,"./ash/core/node":64,"./ash/core/node_list":65,"./ash/core/node_pool":66,"./ash/core/system":67,"./ash/core/system_list":68,"./ash/fsm/component_instance_provider":69,"./ash/fsm/component_singleton_provider":70,"./ash/fsm/component_type_provider":71,"./ash/fsm/dynamic_component_provider":72,"./ash/fsm/dynamic_system_provider":73,"./ash/fsm/engine_state":74,"./ash/fsm/engine_state_machine":75,"./ash/fsm/entity_state":76,"./ash/fsm/entity_state_machine":77,"./ash/fsm/state_component_mapping":78,"./ash/fsm/state_system_mapping":79,"./ash/fsm/system_instance_provider":80,"./ash/fsm/system_singleton_provider":81,"./ash/signals/listener_node":82,"./ash/signals/listener_node_pool":83,"./ash/signals/signal0":84,"./ash/signals/signal1":85,"./ash/signals/signal2":86,"./ash/signals/signal3":87,"./ash/signals/signal_base":88,"./ash/tick/frame_tick_provider":89,"./ash/tools/component_pool":90,"./ash/tools/list_iterating_system":91}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvZXhhbXBsZS9pbmRleC5qcyIsInRtcC9leGFtcGxlL3NyYy9hc3Rlcm9pZHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hbmltYXRpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9hc3Rlcm9pZC5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvYnVsbGV0LmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGVhdGhfdGhyb2VzLmpzIiwidG1wL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGlzcGxheS5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL2dhbWVfc3RhdGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW4uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ndW5fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9odWQuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb24uanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9tb3Rpb25fY29udHJvbHMuanMiLCJ0bXAvZXhhbXBsZS9zcmMvY29tcG9uZW50cy9wb3NpdGlvbi5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL3NwYWNlc2hpcC5qcyIsInRtcC9leGFtcGxlL3NyYy9jb21wb25lbnRzL3dhaXRfZm9yX3N0YXJ0LmpzIiwidG1wL2V4YW1wbGUvc3JjL2VudGl0eV9jcmVhdG9yLmpzIiwidG1wL2V4YW1wbGUvc3JjL2dhbWVfY29uZmlnLmpzIiwidG1wL2V4YW1wbGUvc3JjL2dyYXBoaWNzL2FzdGVyb2lkX2RlYXRoX3ZpZXcuanMiLCJ0bXAvZXhhbXBsZS9zcmMvZ3JhcGhpY3MvYXN0ZXJvaWRfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9idWxsZXRfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9odWRfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfZGVhdGhfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfdmlldy5qcyIsInRtcC9leGFtcGxlL3NyYy9ncmFwaGljcy93YWl0X2Zvcl9zdGFydF92aWV3LmpzIiwidG1wL2V4YW1wbGUvc3JjL2lucHV0L2tleV9wb2xsLmpzIiwidG1wL2V4YW1wbGUvc3JjL21haW4uanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYW5pbWF0aW9uX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYXN0ZXJvaWRfY29sbGlzaW9uX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYXVkaW9fbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9idWxsZXRfYWdlX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvYnVsbGV0X2NvbGxpc2lvbl9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2RlYXRoX3Rocm9lc19ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2dhbWVfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9ndW5fY29udHJvbF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL2h1ZF9ub2RlLmpzIiwidG1wL2V4YW1wbGUvc3JjL25vZGVzL21vdGlvbl9jb250cm9sX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvbW92ZW1lbnRfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9yZW5kZXJfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9ub2Rlcy9zcGFjZXNoaXBfY29sbGlzaW9uX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvc3BhY2VzaGlwX25vZGUuanMiLCJ0bXAvZXhhbXBsZS9zcmMvbm9kZXMvd2FpdF9mb3Jfc3RhcnRfbm9kZS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2FuaW1hdGlvbl9zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9hdWRpb19zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9idWxsZXRfYWdlX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL2NvbGxpc2lvbl9zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9kZWF0aF90aHJvZXNfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvZ2FtZV9tYW5hZ2VyLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvZ3VuX2NvbnRyb2xfc3lzdGVtLmpzIiwidG1wL2V4YW1wbGUvc3JjL3N5c3RlbXMvaHVkX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL21vdGlvbl9jb250cm9sX3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL21vdmVtZW50X3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL3JlbmRlcl9zeXN0ZW0uanMiLCJ0bXAvZXhhbXBsZS9zcmMvc3lzdGVtcy9zeXN0ZW1fcHJpb3JpdGllcy5qcyIsInRtcC9leGFtcGxlL3NyYy9zeXN0ZW1zL3dhaXRfZm9yX3N0YXJ0X3N5c3RlbS5qcyIsInRtcC9leGFtcGxlL3NyYy91aS9wb2ludC5qcyIsInRtcC9saWIvYXNoL2NvcmUvY29tcG9uZW50X21hdGNoaW5nX2ZhbWlseS5qcyIsInRtcC9saWIvYXNoL2NvcmUvZW5naW5lLmpzIiwidG1wL2xpYi9hc2gvY29yZS9lbnRpdHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2VudGl0eV9saXN0LmpzIiwidG1wL2xpYi9hc2gvY29yZS9mYW1pbHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGUuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGVfbGlzdC5qcyIsInRtcC9saWIvYXNoL2NvcmUvbm9kZV9wb29sLmpzIiwidG1wL2xpYi9hc2gvY29yZS9zeXN0ZW0uanMiLCJ0bXAvbGliL2FzaC9jb3JlL3N5c3RlbV9saXN0LmpzIiwidG1wL2xpYi9hc2gvZnNtL2NvbXBvbmVudF9pbnN0YW5jZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfc2luZ2xldG9uX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvZnNtL2NvbXBvbmVudF90eXBlX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvZnNtL2R5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvZnNtL2R5bmFtaWNfc3lzdGVtX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvZnNtL2VuZ2luZV9zdGF0ZS5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbmdpbmVfc3RhdGVfbWFjaGluZS5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbnRpdHlfc3RhdGUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW50aXR5X3N0YXRlX21hY2hpbmUuanMiLCJ0bXAvbGliL2FzaC9mc20vc3RhdGVfY29tcG9uZW50X21hcHBpbmcuanMiLCJ0bXAvbGliL2FzaC9mc20vc3RhdGVfc3lzdGVtX21hcHBpbmcuanMiLCJ0bXAvbGliL2FzaC9mc20vc3lzdGVtX2luc3RhbmNlX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N5c3RlbV9zaW5nbGV0b25fcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGUuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGVfcG9vbC5qcyIsInRtcC9saWIvYXNoL3NpZ25hbHMvc2lnbmFsMC5qcyIsInRtcC9saWIvYXNoL3NpZ25hbHMvc2lnbmFsMS5qcyIsInRtcC9saWIvYXNoL3NpZ25hbHMvc2lnbmFsMi5qcyIsInRtcC9saWIvYXNoL3NpZ25hbHMvc2lnbmFsMy5qcyIsInRtcC9saWIvYXNoL3NpZ25hbHMvc2lnbmFsX2Jhc2UuanMiLCJ0bXAvbGliL2FzaC90aWNrL2ZyYW1lX3RpY2tfcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC90b29scy9jb21wb25lbnRfcG9vbC5qcyIsInRtcC9saWIvYXNoL3Rvb2xzL2xpc3RfaXRlcmF0aW5nX3N5c3RlbS5qcyIsInRtcC9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbnZhciBhc3Rlcm9pZHM7XG5cbm1vZHVsZS5leHBvcnRzID0gYXN0ZXJvaWRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBhc3Rlcm9pZHMoKSB7fVxuXG4gIHJldHVybiBhc3Rlcm9pZHM7XG5cbn0pKCk7XG5cbmFzdGVyb2lkcy5pbnB1dCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gaW5wdXQoKSB7fVxuXG4gIHJldHVybiBpbnB1dDtcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvaW5wdXQva2V5X3BvbGwnKTtcblxuYXN0ZXJvaWRzLnVpID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB1aSgpIHt9XG5cbiAgcmV0dXJuIHVpO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL3NyYy91aS9wb2ludCcpO1xuXG5hc3Rlcm9pZHMuZ3JhcGhpY3MgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGdyYXBoaWNzKCkge31cblxuICByZXR1cm4gZ3JhcGhpY3M7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vc3JjL2dyYXBoaWNzL2FzdGVyb2lkX3ZpZXcnKTtcblxucmVxdWlyZSgnLi9zcmMvZ3JhcGhpY3MvYXN0ZXJvaWRfZGVhdGhfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9idWxsZXRfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9odWRfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfZGVhdGhfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy9zcGFjZXNoaXBfdmlldycpO1xuXG5yZXF1aXJlKCcuL3NyYy9ncmFwaGljcy93YWl0X2Zvcl9zdGFydF92aWV3Jyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjb21wb25lbnRzKCkge31cblxuICByZXR1cm4gY29tcG9uZW50cztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb24nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9hc3Rlcm9pZCcpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2F1ZGlvJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvYnVsbGV0Jyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvY29sbGlzaW9uJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZGVhdGhfdGhyb2VzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheScpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL2dhbWVfc3RhdGUnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9ndW4nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9ndW5fY29udHJvbHMnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9odWQnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9tb3Rpb24nKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9tb3Rpb25fY29udHJvbHMnKTtcblxucmVxdWlyZSgnLi9zcmMvY29tcG9uZW50cy9wb3NpdGlvbicpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL3NwYWNlc2hpcCcpO1xuXG5yZXF1aXJlKCcuL3NyYy9jb21wb25lbnRzL3dhaXRfZm9yX3N0YXJ0Jyk7XG5cbmFzdGVyb2lkcy5ub2RlcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gbm9kZXMoKSB7fVxuXG4gIHJldHVybiBub2RlcztcblxufSkoKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYW5pbWF0aW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYXN0ZXJvaWRfY29sbGlzaW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYXVkaW9fbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9idWxsZXRfYWdlX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvYnVsbGV0X2NvbGxpc2lvbl9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2RlYXRoX3Rocm9lc19ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2dhbWVfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9ndW5fY29udHJvbF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL2h1ZF9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vc3JjL25vZGVzL21vdGlvbl9jb250cm9sX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvbW92ZW1lbnRfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9yZW5kZXJfbm9kZScpO1xuXG5yZXF1aXJlKCcuL3NyYy9ub2Rlcy9zcGFjZXNoaXBfY29sbGlzaW9uX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvc3BhY2VzaGlwX25vZGUnKTtcblxucmVxdWlyZSgnLi9zcmMvbm9kZXMvd2FpdF9mb3Jfc3RhcnRfbm9kZScpO1xuXG5hc3Rlcm9pZHMuc3lzdGVtcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc3lzdGVtcygpIHt9XG5cbiAgcmV0dXJuIHN5c3RlbXM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvYW5pbWF0aW9uX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2F1ZGlvX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2J1bGxldF9hZ2Vfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvY29sbGlzaW9uX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL2RlYXRoX3Rocm9lc19zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9nYW1lX21hbmFnZXInKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9ndW5fY29udHJvbF9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9zcmMvc3lzdGVtcy9odWRfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvbW90aW9uX2NvbnRyb2xfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvbW92ZW1lbnRfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvcmVuZGVyX3N5c3RlbScpO1xuXG5yZXF1aXJlKCcuL3NyYy9zeXN0ZW1zL3N5c3RlbV9wcmlvcml0aWVzJyk7XG5cbnJlcXVpcmUoJy4vc3JjL3N5c3RlbXMvd2FpdF9mb3Jfc3RhcnRfc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2VudGl0eV9jcmVhdG9yJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2dhbWVfY29uZmlnJyk7XG5cbnJlcXVpcmUoJy4vc3JjL2FzdGVyb2lkcycpO1xuXG5yZXF1aXJlKCcuL3NyYy9tYWluJyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFuaW1hdGlvblN5c3RlbSwgQXVkaW9TeXN0ZW0sIEJ1bGxldEFnZVN5c3RlbSwgQ29sbGlzaW9uU3lzdGVtLCBEZWF0aFRocm9lc1N5c3RlbSwgRW50aXR5Q3JlYXRvciwgR2FtZUNvbmZpZywgR2FtZU1hbmFnZXIsIEdhbWVTdGF0ZSwgR3VuQ29udHJvbFN5c3RlbSwgSHVkU3lzdGVtLCBLZXlQb2xsLCBNb3Rpb25Db250cm9sU3lzdGVtLCBNb3ZlbWVudFN5c3RlbSwgUGh5c2ljc1N5c3RlbSwgUmVuZGVyU3lzdGVtLCBTeXN0ZW1Qcmlvcml0aWVzLCBXYWl0Rm9yU3RhcnRTeXN0ZW0sIGFzaCwgYXN0ZXJvaWRzO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZScpO1xuXG5BbmltYXRpb25TeXN0ZW0gPSBhc3Rlcm9pZHMuc3lzdGVtcy5BbmltYXRpb25TeXN0ZW07XG5cbkF1ZGlvU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuQXVkaW9TeXN0ZW07XG5cbkJ1bGxldEFnZVN5c3RlbSA9IGFzdGVyb2lkcy5zeXN0ZW1zLkJ1bGxldEFnZVN5c3RlbTtcblxuQ29sbGlzaW9uU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuQ29sbGlzaW9uU3lzdGVtO1xuXG5EZWF0aFRocm9lc1N5c3RlbSA9IGFzdGVyb2lkcy5zeXN0ZW1zLkRlYXRoVGhyb2VzU3lzdGVtO1xuXG5HYW1lTWFuYWdlciA9IGFzdGVyb2lkcy5zeXN0ZW1zLkdhbWVNYW5hZ2VyO1xuXG5HdW5Db250cm9sU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuR3VuQ29udHJvbFN5c3RlbTtcblxuSHVkU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuSHVkU3lzdGVtO1xuXG5Nb3Rpb25Db250cm9sU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuTW90aW9uQ29udHJvbFN5c3RlbTtcblxuTW92ZW1lbnRTeXN0ZW0gPSBhc3Rlcm9pZHMuc3lzdGVtcy5Nb3ZlbWVudFN5c3RlbTtcblxuUmVuZGVyU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuUmVuZGVyU3lzdGVtO1xuXG5TeXN0ZW1Qcmlvcml0aWVzID0gYXN0ZXJvaWRzLnN5c3RlbXMuU3lzdGVtUHJpb3JpdGllcztcblxuV2FpdEZvclN0YXJ0U3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuV2FpdEZvclN0YXJ0U3lzdGVtO1xuXG5QaHlzaWNzU3lzdGVtID0gYXN0ZXJvaWRzLnN5c3RlbXMuUGh5c2ljc1N5c3RlbTtcblxuR2FtZVN0YXRlID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuR2FtZVN0YXRlO1xuXG5FbnRpdHlDcmVhdG9yID0gYXN0ZXJvaWRzLkVudGl0eUNyZWF0b3I7XG5cbkdhbWVDb25maWcgPSBhc3Rlcm9pZHMuR2FtZUNvbmZpZztcblxuS2V5UG9sbCA9IGFzdGVyb2lkcy5pbnB1dC5LZXlQb2xsO1xuXG5hc3Rlcm9pZHMuQXN0ZXJvaWRzID0gKGZ1bmN0aW9uKCkge1xuICBBc3Rlcm9pZHMucHJvdG90eXBlLmNvbnRhaW5lciA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUudGlja1Byb3ZpZGVyID0gbnVsbDtcblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIEFzdGVyb2lkcy5wcm90b3R5cGUua2V5UG9sbCA9IG51bGw7XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5jb25maWcgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkcyhjb250YWluZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnByZXBhcmUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBBc3Rlcm9pZHMucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5lbmdpbmUgPSBuZXcgYXNoLmNvcmUuRW5naW5lKCk7XG4gICAgdGhpcy5jcmVhdG9yID0gbmV3IEVudGl0eUNyZWF0b3IodGhpcy5lbmdpbmUsIHRoaXMuY29udGFpbmVyLCB0aGlzLndvcmxkKTtcbiAgICB0aGlzLmtleVBvbGwgPSBuZXcgS2V5UG9sbCh3aW5kb3cpO1xuICAgIHRoaXMuY29uZmlnID0gbmV3IEdhbWVDb25maWcoKTtcbiAgICB0aGlzLmNvbmZpZy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jb25maWcud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IFdhaXRGb3JTdGFydFN5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnByZVVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBHYW1lTWFuYWdlcih0aGlzLmNyZWF0b3IsIHRoaXMuY29uZmlnKSwgU3lzdGVtUHJpb3JpdGllcy5wcmVVcGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgTW90aW9uQ29udHJvbFN5c3RlbSh0aGlzLmtleVBvbGwpLCBTeXN0ZW1Qcmlvcml0aWVzLnVwZGF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBHdW5Db250cm9sU3lzdGVtKHRoaXMua2V5UG9sbCwgdGhpcy5jcmVhdG9yKSwgU3lzdGVtUHJpb3JpdGllcy51cGRhdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgQnVsbGV0QWdlU3lzdGVtKHRoaXMuY3JlYXRvciksIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IERlYXRoVGhyb2VzU3lzdGVtKHRoaXMuY3JlYXRvciksIFN5c3RlbVByaW9yaXRpZXMudXBkYXRlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IE1vdmVtZW50U3lzdGVtKHRoaXMuY29uZmlnKSwgU3lzdGVtUHJpb3JpdGllcy5tb3ZlKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IENvbGxpc2lvblN5c3RlbSh0aGlzLmNyZWF0b3IpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlc29sdmVDb2xsaXNpb25zKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0obmV3IEFuaW1hdGlvblN5c3RlbSgpLCBTeXN0ZW1Qcmlvcml0aWVzLmFuaW1hdGUpO1xuICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShuZXcgSHVkU3lzdGVtKCksIFN5c3RlbVByaW9yaXRpZXMuYW5pbWF0ZSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBSZW5kZXJTeXN0ZW0odGhpcy5jb250YWluZXIpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlbmRlcik7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKG5ldyBBdWRpb1N5c3RlbSgpLCBTeXN0ZW1Qcmlvcml0aWVzLnJlbmRlcik7XG4gICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVdhaXRGb3JDbGljaygpO1xuICAgIHRoaXMuY3JlYXRvci5jcmVhdGVHYW1lKCk7XG4gIH07XG5cbiAgQXN0ZXJvaWRzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGF0cywgeCwgeTtcbiAgICBpZiAobmF2aWdhdG9yLmlzQ29jb29uSlMpIHtcbiAgICAgIHN0YXRzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IE1hdGguZmxvb3IodGhpcy5jb25maWcud2lkdGggLyAyKSAtIDQwO1xuICAgICAgeSA9IDA7XG4gICAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgc3RhdHMuc2V0TW9kZSgwKTtcbiAgICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIlwiICsgeCArIFwicHhcIjtcbiAgICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCJcIiArIHkgKyBcInB4XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLnRpY2tQcm92aWRlciA9IG5ldyBhc2gudGljay5GcmFtZVRpY2tQcm92aWRlcihzdGF0cyk7XG4gICAgdGhpcy50aWNrUHJvdmlkZXIuYWRkKHRoaXMuZW5naW5lLnVwZGF0ZSk7XG4gICAgdGhpcy50aWNrUHJvdmlkZXIuc3RhcnQoKTtcbiAgfTtcblxuICByZXR1cm4gQXN0ZXJvaWRzO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZHMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLkFuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgQW5pbWF0aW9uLnByb3RvdHlwZS5hbmltYXRpb24gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGlvbihhbmltYXRpb24pIHtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgfVxuXG4gIHJldHVybiBBbmltYXRpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc3Rlcm9pZHM7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLmNvbXBvbmVudHMuQXN0ZXJvaWQgPSAoZnVuY3Rpb24oKSB7XG4gIEFzdGVyb2lkLnByb3RvdHlwZS5mc20gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGZzbSkge1xuICAgIHRoaXMuZnNtID0gZnNtO1xuICB9XG5cbiAgcmV0dXJuIEFzdGVyb2lkO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc3Rlcm9pZHM7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLmNvbXBvbmVudHMuQXVkaW8gPSAoZnVuY3Rpb24oKSB7XG4gIEF1ZGlvLnByb3RvdHlwZS50b1BsYXkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvKCkge1xuICAgIHRoaXMudG9QbGF5ID0gW107XG4gIH1cblxuICBBdWRpby5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgcmV0dXJuIHRoaXMudG9QbGF5LnB1c2goc291bmQpO1xuICB9O1xuXG4gIHJldHVybiBBdWRpbztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW8uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLkJ1bGxldCA9IChmdW5jdGlvbigpIHtcbiAgQnVsbGV0LnByb3RvdHlwZS5saWZlUmVtYWluaW5nID0gMDtcblxuICBmdW5jdGlvbiBCdWxsZXQobGlmZVJlbWFpbmluZykge1xuICAgIHRoaXMubGlmZVJlbWFpbmluZyA9IGxpZmVSZW1haW5pbmc7XG4gIH1cblxuICByZXR1cm4gQnVsbGV0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLkNvbGxpc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgQ29sbGlzaW9uLnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIGZ1bmN0aW9uIENvbGxpc2lvbihyYWRpdXMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgfVxuXG4gIHJldHVybiBDb2xsaXNpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxpc2lvbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc3Rlcm9pZHM7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLmNvbXBvbmVudHMuRGVhdGhUaHJvZXMgPSAoZnVuY3Rpb24oKSB7XG4gIERlYXRoVGhyb2VzLnByb3RvdHlwZS5jb3VudGRvd24gPSAwO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzKGR1cmF0aW9uKSB7XG4gICAgdGhpcy5jb3VudGRvd24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBEZWF0aFRocm9lcztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVhdGhfdGhyb2VzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuY29tcG9uZW50cy5EaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICBEaXNwbGF5LnByb3RvdHlwZS5ncmFwaGljID0gMDtcblxuICBmdW5jdGlvbiBEaXNwbGF5KGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICB9XG5cbiAgcmV0dXJuIERpc3BsYXk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLkdhbWVTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2FtZVN0YXRlKCkge31cblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmxldmVsID0gMDtcblxuICBHYW1lU3RhdGUucHJvdG90eXBlLmhpdHMgPSAwO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUucGxheWluZyA9IGZhbHNlO1xuXG4gIEdhbWVTdGF0ZS5wcm90b3R5cGUuc2V0Rm9yU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIEdhbWVTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQb2ludCwgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gYXN0ZXJvaWRzLnVpLlBvaW50O1xuXG5hc3Rlcm9pZHMuY29tcG9uZW50cy5HdW4gPSAoZnVuY3Rpb24oKSB7XG4gIEd1bi5wcm90b3R5cGUuc2hvb3RpbmcgPSBmYWxzZTtcblxuICBHdW4ucHJvdG90eXBlLm9mZnNldEZyb21QYXJlbnQgPSBudWxsO1xuXG4gIEd1bi5wcm90b3R5cGUudGltZVNpbmNlTGFzdFNob3QgPSAwO1xuXG4gIEd1bi5wcm90b3R5cGUub2Zmc2V0RnJvbVBhcmVudCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gR3VuKG9mZnNldFgsIG9mZnNldFksIG1pbmltdW1TaG90SW50ZXJ2YWwsIGJ1bGxldExpZmV0aW1lKSB7XG4gICAgdGhpcy5taW5pbXVtU2hvdEludGVydmFsID0gbWluaW11bVNob3RJbnRlcnZhbDtcbiAgICB0aGlzLmJ1bGxldExpZmV0aW1lID0gYnVsbGV0TGlmZXRpbWU7XG4gICAgdGhpcy5zaG9vdGluZyA9IGZhbHNlO1xuICAgIHRoaXMub2Zmc2V0RnJvbVBhcmVudCA9IG51bGw7XG4gICAgdGhpcy50aW1lU2luY2VMYXN0U2hvdCA9IDA7XG4gICAgdGhpcy5vZmZzZXRGcm9tUGFyZW50ID0gbmV3IFBvaW50KG9mZnNldFgsIG9mZnNldFkpO1xuICB9XG5cbiAgcmV0dXJuIEd1bjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VuLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuY29tcG9uZW50cy5HdW5Db250cm9scyA9IChmdW5jdGlvbigpIHtcbiAgR3VuQ29udHJvbHMucHJvdG90eXBlLnRyaWdnZXIgPSAwO1xuXG4gIGZ1bmN0aW9uIEd1bkNvbnRyb2xzKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICB9XG5cbiAgcmV0dXJuIEd1bkNvbnRyb2xzO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndW5fY29udHJvbHMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLkh1ZCA9IChmdW5jdGlvbigpIHtcbiAgSHVkLnByb3RvdHlwZS52aWV3ID0gbnVsbDtcblxuICBmdW5jdGlvbiBIdWQodmlldykge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cblxuICByZXR1cm4gSHVkO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1odWQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgUG9pbnQsIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Qb2ludCA9IGFzdGVyb2lkcy51aS5Qb2ludDtcblxuYXN0ZXJvaWRzLmNvbXBvbmVudHMuTW90aW9uID0gKGZ1bmN0aW9uKCkge1xuICBNb3Rpb24ucHJvdG90eXBlLnZlbG9jaXR5ID0gbnVsbDtcblxuICBNb3Rpb24ucHJvdG90eXBlLmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG5cbiAgTW90aW9uLnByb3RvdHlwZS5kYW1waW5nID0gMDtcblxuICBmdW5jdGlvbiBNb3Rpb24odmVsb2NpdHlYLCB2ZWxvY2l0eVksIGFuZ3VsYXJWZWxvY2l0eSwgZGFtcGluZykge1xuICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gYW5ndWxhclZlbG9jaXR5O1xuICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBQb2ludCh2ZWxvY2l0eVgsIHZlbG9jaXR5WSk7XG4gIH1cblxuICByZXR1cm4gTW90aW9uO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3Rpb24uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvbkNvbnRyb2xzID0gKGZ1bmN0aW9uKCkge1xuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUubGVmdCA9IDA7XG5cbiAgTW90aW9uQ29udHJvbHMucHJvdG90eXBlLnJpZ2h0ID0gMDtcblxuICBNb3Rpb25Db250cm9scy5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IDA7XG5cbiAgTW90aW9uQ29udHJvbHMucHJvdG90eXBlLmFjY2VsZXJhdGlvblJhdGUgPSAwO1xuXG4gIE1vdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5yb3RhdGlvblJhdGUgPSAwO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbkNvbnRyb2xzKGxlZnQsIHJpZ2h0LCBhY2NlbGVyYXRlLCBhY2NlbGVyYXRpb25SYXRlLCByb3RhdGlvblJhdGUpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmFjY2VsZXJhdGUgPSBhY2NlbGVyYXRlO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uUmF0ZSA9IGFjY2VsZXJhdGlvblJhdGU7XG4gICAgdGhpcy5yb3RhdGlvblJhdGUgPSByb3RhdGlvblJhdGU7XG4gIH1cblxuICByZXR1cm4gTW90aW9uQ29udHJvbHM7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbl9jb250cm9scy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQb2ludCwgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gYXN0ZXJvaWRzLnVpLlBvaW50O1xuXG5hc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgUG9zaXRpb24ucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBQb3NpdGlvbi5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIFBvc2l0aW9uKHgsIHksIHJvdGF0aW9uKSB7XG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XG4gIH1cblxuICByZXR1cm4gUG9zaXRpb247XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvc2l0aW9uLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuY29tcG9uZW50cy5TcGFjZXNoaXAgPSAoZnVuY3Rpb24oKSB7XG4gIFNwYWNlc2hpcC5wcm90b3R5cGUuZnNtID0gbnVsbDtcblxuICBmdW5jdGlvbiBTcGFjZXNoaXAoZnNtKSB7XG4gICAgdGhpcy5mc20gPSBmc207XG4gIH1cblxuICByZXR1cm4gU3BhY2VzaGlwO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFjZXNoaXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5jb21wb25lbnRzLldhaXRGb3JTdGFydCA9IChmdW5jdGlvbigpIHtcbiAgV2FpdEZvclN0YXJ0LnByb3RvdHlwZS53YWl0Rm9yU3RhcnQgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydC5wcm90b3R5cGUuc3RhcnRHYW1lID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gV2FpdEZvclN0YXJ0KHdhaXRGb3JTdGFydCkge1xuICAgIHRoaXMud2FpdEZvclN0YXJ0ID0gd2FpdEZvclN0YXJ0O1xuICAgIHRoaXMuc2V0U3RhcnRHYW1lID0gX19iaW5kKHRoaXMuc2V0U3RhcnRHYW1lLCB0aGlzKTtcbiAgICB0aGlzLndhaXRGb3JTdGFydC5jbGljay5hZGQodGhpcy5zZXRTdGFydEdhbWUpO1xuICB9XG5cbiAgV2FpdEZvclN0YXJ0LnByb3RvdHlwZS5zZXRTdGFydEdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIFdhaXRGb3JTdGFydDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdF9mb3Jfc3RhcnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQW5pbWF0aW9uLCBBc3Rlcm9pZCwgQXN0ZXJvaWREZWF0aFZpZXcsIEFzdGVyb2lkVmlldywgQXVkaW8sIEJ1bGxldCwgQnVsbGV0VmlldywgQ29sbGlzaW9uLCBEZWF0aFRocm9lcywgRGlzcGxheSwgRW50aXR5LCBFbnRpdHlTdGF0ZU1hY2hpbmUsIEdhbWVTdGF0ZSwgR3VuLCBHdW5Db250cm9scywgSHVkLCBIdWRWaWV3LCBNb3Rpb24sIE1vdGlvbkNvbnRyb2xzLCBQaHlzaWNzLCBQb3NpdGlvbiwgU3BhY2VzaGlwLCBTcGFjZXNoaXBEZWF0aFZpZXcsIFNwYWNlc2hpcFZpZXcsIFdhaXRGb3JTdGFydCwgV2FpdEZvclN0YXJ0VmlldywgYXNoLCBhc3Rlcm9pZHM7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyk7XG5cbldhaXRGb3JTdGFydFZpZXcgPSBhc3Rlcm9pZHMuZ3JhcGhpY3MuV2FpdEZvclN0YXJ0VmlldztcblxuRW50aXR5ID0gYXNoLmNvcmUuRW50aXR5O1xuXG5FbnRpdHlTdGF0ZU1hY2hpbmUgPSBhc2guZnNtLkVudGl0eVN0YXRlTWFjaGluZTtcblxuXG4vKlxuICogQXN0ZXJvaWQgR2FtZSBDb21wb25lbnRzXG4gKi9cblxuQW5pbWF0aW9uID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuQW5pbWF0aW9uO1xuXG5Bc3Rlcm9pZCA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkFzdGVyb2lkO1xuXG5BdWRpbyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkF1ZGlvO1xuXG5CdWxsZXQgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5CdWxsZXQ7XG5cbkNvbGxpc2lvbiA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkNvbGxpc2lvbjtcblxuRGVhdGhUaHJvZXMgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5EZWF0aFRocm9lcztcblxuRGlzcGxheSA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkRpc3BsYXk7XG5cbkdhbWVTdGF0ZSA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkdhbWVTdGF0ZTtcblxuR3VuID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuR3VuO1xuXG5HdW5Db250cm9scyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkd1bkNvbnRyb2xzO1xuXG5IdWQgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5IdWQ7XG5cbk1vdGlvbiA9IGFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvbjtcblxuTW90aW9uQ29udHJvbHMgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5Nb3Rpb25Db250cm9scztcblxuUGh5c2ljcyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLlBoeXNpY3M7XG5cblBvc2l0aW9uID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuUG9zaXRpb247XG5cblNwYWNlc2hpcCA9IGFzdGVyb2lkcy5jb21wb25lbnRzLlNwYWNlc2hpcDtcblxuV2FpdEZvclN0YXJ0ID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0O1xuXG5cbi8qXG4gKiBEcmF3YWJsZSBDb21wb25lbnRzXG4gKi9cblxuQXN0ZXJvaWREZWF0aFZpZXcgPSBhc3Rlcm9pZHMuZ3JhcGhpY3MuQXN0ZXJvaWREZWF0aFZpZXc7XG5cbkFzdGVyb2lkVmlldyA9IGFzdGVyb2lkcy5ncmFwaGljcy5Bc3Rlcm9pZFZpZXc7XG5cbkJ1bGxldFZpZXcgPSBhc3Rlcm9pZHMuZ3JhcGhpY3MuQnVsbGV0VmlldztcblxuSHVkVmlldyA9IGFzdGVyb2lkcy5ncmFwaGljcy5IdWRWaWV3O1xuXG5TcGFjZXNoaXBEZWF0aFZpZXcgPSBhc3Rlcm9pZHMuZ3JhcGhpY3MuU3BhY2VzaGlwRGVhdGhWaWV3O1xuXG5TcGFjZXNoaXBWaWV3ID0gYXN0ZXJvaWRzLmdyYXBoaWNzLlNwYWNlc2hpcFZpZXc7XG5cbmFzdGVyb2lkcy5FbnRpdHlDcmVhdG9yID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgS0VZX0xFRlQsIEtFWV9SSUdIVCwgS0VZX1VQLCBLRVlfWjtcblxuICBLRVlfTEVGVCA9IDM3O1xuXG4gIEtFWV9VUCA9IDM4O1xuXG4gIEtFWV9SSUdIVCA9IDM5O1xuXG4gIEtFWV9aID0gOTA7XG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuZW5naW5lID0gbnVsbDtcblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS53YWl0RW50aXR5ID0gbnVsbDtcblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBmdW5jdGlvbiBFbnRpdHlDcmVhdG9yKGVuZ2luZSwgZ3JhcGhpYywgd29ybGQpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgfVxuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmRlc3Ryb3lFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aGlzLmVuZ2luZS5yZW1vdmVFbnRpdHkoZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdhbWUgU3RhdGVcbiAgICovXG5cbiAgRW50aXR5Q3JlYXRvci5wcm90b3R5cGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnYW1lRW50aXR5LCBodWQ7XG4gICAgaHVkID0gbmV3IEh1ZFZpZXcodGhpcy5ncmFwaGljKTtcbiAgICBnYW1lRW50aXR5ID0gbmV3IEVudGl0eSgnZ2FtZScpLmFkZChuZXcgR2FtZVN0YXRlKCkpLmFkZChuZXcgSHVkKGh1ZCkpLmFkZChuZXcgRGlzcGxheShodWQpKS5hZGQobmV3IFBvc2l0aW9uKDAsIDAsIDAsIDApKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRFbnRpdHkoZ2FtZUVudGl0eSk7XG4gICAgcmV0dXJuIGdhbWVFbnRpdHk7XG4gIH07XG5cblxuICAvKlxuICAgKiBTdGFydC4uLlxuICAgKi9cblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGVXYWl0Rm9yQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2FpdFZpZXc7XG4gICAgaWYgKCF0aGlzLndhaXRFbnRpdHkpIHtcbiAgICAgIHdhaXRWaWV3ID0gbmV3IFdhaXRGb3JTdGFydFZpZXcodGhpcy5ncmFwaGljKTtcbiAgICAgIHRoaXMud2FpdEVudGl0eSA9IG5ldyBFbnRpdHkoJ3dhaXQnKS5hZGQobmV3IFdhaXRGb3JTdGFydCh3YWl0VmlldykpLmFkZChuZXcgRGlzcGxheSh3YWl0VmlldykpLmFkZChuZXcgUG9zaXRpb24oMCwgMCwgMCwgMCkpO1xuICAgIH1cbiAgICB0aGlzLndhaXRFbnRpdHkuZ2V0KFdhaXRGb3JTdGFydCkuc3RhcnRHYW1lID0gZmFsc2U7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KHRoaXMud2FpdEVudGl0eSk7XG4gICAgcmV0dXJuIHRoaXMud2FpdEVudGl0eTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZSBQbGF5ZXIgU3BhY2VzaGlwXG4gICAqL1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZVNwYWNlc2hpcFdpdGhvdXRGc20gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3BhY2VzaGlwO1xuICAgIHNwYWNlc2hpcCA9IG5ldyBFbnRpdHkoKS5hZGQobmV3IFNwYWNlc2hpcCgpKS5hZGQobmV3IFBvc2l0aW9uKDMwMCwgMjI1LCAwKSkuYWRkKG5ldyBBdWRpbygpKS5hZGQobmV3IE1vdGlvbigwLCAwLCAwLCAxNSkpLmFkZChuZXcgTW90aW9uQ29udHJvbHMoS0VZX0xFRlQsIEtFWV9SSUdIVCwgS0VZX1VQLCAxMDAsIDMpKS5hZGQobmV3IEd1big4LCAwLCAwLjMsIDIpKS5hZGQobmV3IEd1bkNvbnRyb2xzKEtFWV9aKSkuYWRkKG5ldyBDb2xsaXNpb24oOSkpLmFkZChuZXcgRGlzcGxheShuZXcgU3BhY2VzaGlwVmlldyh0aGlzLmdyYXBoaWMpKSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KHNwYWNlc2hpcCk7XG4gICAgcmV0dXJuIHNwYWNlc2hpcDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZSBhbiBBc3Rlcm9pZFxuICAgKi9cblxuICBFbnRpdHlDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGVBc3Rlcm9pZFdpdGhvdXRGc20gPSBmdW5jdGlvbihyYWRpdXMsIHgsIHkpIHtcbiAgICB2YXIgYXN0ZXJvaWQ7XG4gICAgYXN0ZXJvaWQgPSBuZXcgRW50aXR5KCkuYWRkKG5ldyBBc3Rlcm9pZCgpKS5hZGQobmV3IFBvc2l0aW9uKHgsIHksIDApKS5hZGQobmV3IEF1ZGlvKCkpLmFkZChuZXcgTW90aW9uKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQgKiAoNTAgLSByYWRpdXMpLCAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0ICogKDUwIC0gcmFkaXVzKSwgTWF0aC5yYW5kb20oKSAqIDIgLSAxLCAwKSkuYWRkKG5ldyBDb2xsaXNpb24ocmFkaXVzKSkuYWRkKG5ldyBEaXNwbGF5KG5ldyBBc3Rlcm9pZFZpZXcodGhpcy5ncmFwaGljLCByYWRpdXMpKSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KGFzdGVyb2lkKTtcbiAgICByZXR1cm4gYXN0ZXJvaWQ7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYW4gQXN0ZXJvaWQgd2l0aCBGU00gQW5pbWF0aW9uXG4gICAqL1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZUFzdGVyb2lkID0gZnVuY3Rpb24ocmFkaXVzLCB4LCB5KSB7XG4gICAgdmFyIGFzdGVyb2lkLCBkZWF0aFZpZXcsIGZzbTtcbiAgICBhc3Rlcm9pZCA9IG5ldyBFbnRpdHkoKTtcbiAgICBmc20gPSBuZXcgRW50aXR5U3RhdGVNYWNoaW5lKGFzdGVyb2lkKTtcbiAgICBmc20uY3JlYXRlU3RhdGUoJ2FsaXZlJykuYWRkKE1vdGlvbikud2l0aEluc3RhbmNlKG5ldyBNb3Rpb24oKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNCAqICg1MCAtIHJhZGl1cyksIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQgKiAoNTAgLSByYWRpdXMpLCBNYXRoLnJhbmRvbSgpICogMiAtIDEsIDApKS5hZGQoQ29sbGlzaW9uKS53aXRoSW5zdGFuY2UobmV3IENvbGxpc2lvbihyYWRpdXMpKS5hZGQoRGlzcGxheSkud2l0aEluc3RhbmNlKG5ldyBEaXNwbGF5KG5ldyBBc3Rlcm9pZFZpZXcodGhpcy5ncmFwaGljLCByYWRpdXMpKSk7XG4gICAgZGVhdGhWaWV3ID0gbmV3IEFzdGVyb2lkRGVhdGhWaWV3KHRoaXMuZ3JhcGhpYywgcmFkaXVzKTtcbiAgICBmc20uY3JlYXRlU3RhdGUoJ2Rlc3Ryb3llZCcpLmFkZChEZWF0aFRocm9lcykud2l0aEluc3RhbmNlKG5ldyBEZWF0aFRocm9lcygzKSkuYWRkKERpc3BsYXkpLndpdGhJbnN0YW5jZShuZXcgRGlzcGxheShkZWF0aFZpZXcpKS5hZGQoQW5pbWF0aW9uKS53aXRoSW5zdGFuY2UobmV3IEFuaW1hdGlvbihkZWF0aFZpZXcpKTtcbiAgICBhc3Rlcm9pZC5hZGQobmV3IEFzdGVyb2lkKGZzbSkpLmFkZChuZXcgUG9zaXRpb24oeCwgeSwgMCkpLmFkZChuZXcgQXVkaW8oKSk7XG4gICAgZnNtLmNoYW5nZVN0YXRlKCdhbGl2ZScpO1xuICAgIHRoaXMuZW5naW5lLmFkZEVudGl0eShhc3Rlcm9pZCk7XG4gICAgcmV0dXJuIGFzdGVyb2lkO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlIFBsYXllciBTcGFjZXNoaXAgd2l0aCBGU00gQW5pbWF0aW9uXG4gICAqL1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZVNwYWNlc2hpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWF0aFZpZXcsIGZzbSwgc3BhY2VzaGlwO1xuICAgIHNwYWNlc2hpcCA9IG5ldyBFbnRpdHkoKTtcbiAgICBmc20gPSBuZXcgRW50aXR5U3RhdGVNYWNoaW5lKHNwYWNlc2hpcCk7XG4gICAgZnNtLmNyZWF0ZVN0YXRlKCdwbGF5aW5nJykuYWRkKE1vdGlvbikud2l0aEluc3RhbmNlKG5ldyBNb3Rpb24oMCwgMCwgMCwgMTUpKS5hZGQoTW90aW9uQ29udHJvbHMpLndpdGhJbnN0YW5jZShuZXcgTW90aW9uQ29udHJvbHMoS0VZX0xFRlQsIEtFWV9SSUdIVCwgS0VZX1VQLCAxMDAsIDMpKS5hZGQoR3VuKS53aXRoSW5zdGFuY2UobmV3IEd1big4LCAwLCAwLjMsIDIpKS5hZGQoR3VuQ29udHJvbHMpLndpdGhJbnN0YW5jZShuZXcgR3VuQ29udHJvbHMoS0VZX1opKS5hZGQoQ29sbGlzaW9uKS53aXRoSW5zdGFuY2UobmV3IENvbGxpc2lvbig5KSkuYWRkKERpc3BsYXkpLndpdGhJbnN0YW5jZShuZXcgRGlzcGxheShuZXcgU3BhY2VzaGlwVmlldyh0aGlzLmdyYXBoaWMpKSk7XG4gICAgZGVhdGhWaWV3ID0gbmV3IFNwYWNlc2hpcERlYXRoVmlldyh0aGlzLmdyYXBoaWMpO1xuICAgIGZzbS5jcmVhdGVTdGF0ZSgnZGVzdHJveWVkJykuYWRkKERlYXRoVGhyb2VzKS53aXRoSW5zdGFuY2UobmV3IERlYXRoVGhyb2VzKDUpKS5hZGQoRGlzcGxheSkud2l0aEluc3RhbmNlKG5ldyBEaXNwbGF5KGRlYXRoVmlldykpLmFkZChBbmltYXRpb24pLndpdGhJbnN0YW5jZShuZXcgQW5pbWF0aW9uKGRlYXRoVmlldykpO1xuICAgIHNwYWNlc2hpcC5hZGQobmV3IFNwYWNlc2hpcChmc20pKS5hZGQobmV3IFBvc2l0aW9uKDMwMCwgMjI1LCAwKSkuYWRkKG5ldyBBdWRpbygpKTtcbiAgICBmc20uY2hhbmdlU3RhdGUoJ3BsYXlpbmcnKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRFbnRpdHkoc3BhY2VzaGlwKTtcbiAgICByZXR1cm4gc3BhY2VzaGlwO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlIGEgQnVsbGV0XG4gICAqL1xuXG4gIEVudGl0eUNyZWF0b3IucHJvdG90eXBlLmNyZWF0ZVVzZXJCdWxsZXQgPSBmdW5jdGlvbihndW4sIHBhcmVudFBvc2l0aW9uKSB7XG4gICAgdmFyIGJ1bGxldCwgY29zLCBzaW4sIHgsIHk7XG4gICAgY29zID0gTWF0aC5jb3MocGFyZW50UG9zaXRpb24ucm90YXRpb24pO1xuICAgIHNpbiA9IE1hdGguc2luKHBhcmVudFBvc2l0aW9uLnJvdGF0aW9uKTtcbiAgICB4ID0gY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueCAtIHNpbiAqIGd1bi5vZmZzZXRGcm9tUGFyZW50LnkgKyBwYXJlbnRQb3NpdGlvbi5wb3NpdGlvbi54O1xuICAgIHkgPSBzaW4gKiBndW4ub2Zmc2V0RnJvbVBhcmVudC54ICsgY29zICogZ3VuLm9mZnNldEZyb21QYXJlbnQueSArIHBhcmVudFBvc2l0aW9uLnBvc2l0aW9uLnk7XG4gICAgYnVsbGV0ID0gbmV3IEVudGl0eSgpLmFkZChuZXcgQnVsbGV0KGd1bi5idWxsZXRMaWZldGltZSkpLmFkZChuZXcgUG9zaXRpb24oeCwgeSwgMCkpLmFkZChuZXcgQ29sbGlzaW9uKDApKS5hZGQobmV3IE1vdGlvbihjb3MgKiAxNTAsIHNpbiAqIDE1MCwgMCwgMCkpLmFkZChuZXcgRGlzcGxheShuZXcgQnVsbGV0Vmlldyh0aGlzLmdyYXBoaWMpKSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkRW50aXR5KGJ1bGxldCk7XG4gICAgcmV0dXJuIGJ1bGxldDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5Q3JlYXRvcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X2NyZWF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5HYW1lQ29uZmlnID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHYW1lQ29uZmlnKCkge31cblxuICBHYW1lQ29uZmlnLnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgR2FtZUNvbmZpZy5wcm90b3R5cGUuaGVpZ2h0ID0gMDtcblxuICByZXR1cm4gR2FtZUNvbmZpZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9jb25maWcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRG90LCBQb2ludCwgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gYXN0ZXJvaWRzLnVpLlBvaW50O1xuXG5hc3Rlcm9pZHMuZ3JhcGhpY3MuQXN0ZXJvaWREZWF0aFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBudW1Eb3RzO1xuXG4gIG51bURvdHMgPSA4O1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS5kb3RzID0gbnVsbDtcblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUueCA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnkgPSAwO1xuXG4gIEFzdGVyb2lkRGVhdGhWaWV3LnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLmhlaWdodCA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnJvdGF0aW9uID0gMDtcblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnJhZGl1cyA9IDA7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLnBvaW50cyA9IG51bGw7XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLmNvdW50ID0gMDtcblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUuZmlyc3QgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkRGVhdGhWaWV3KGdyYXBoaWMsIHJhZGl1cykge1xuICAgIHRoaXMuZ3JhcGhpYyA9IGdyYXBoaWM7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5kb3RzID0gW107XG4gIH1cblxuICBBc3Rlcm9pZERlYXRoVmlldy5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgZG90LCBpLCBfaSwgX2osIF9sZW4sIF9yZWY7XG4gICAgaWYgKHRoaXMuZmlyc3QpIHtcbiAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcbiAgICAgIGZvciAoaSA9IF9pID0gMDsgMCA8PSBudW1Eb3RzID8gX2kgPCBudW1Eb3RzIDogX2kgPiBudW1Eb3RzOyBpID0gMCA8PSBudW1Eb3RzID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgZG90ID0gbmV3IERvdCh0aGlzLmdyYXBoaWMsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5kb3RzLnB1c2goZG90KTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3JlZiA9IHRoaXMuZG90cztcbiAgICBmb3IgKF9qID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaiA8IF9sZW47IF9qKyspIHtcbiAgICAgIGRvdCA9IF9yZWZbX2pdO1xuICAgICAgZG90LnggKz0gZG90LnZlbG9jaXR5LnggKiB0aW1lO1xuICAgICAgZG90LnkgKz0gZG90LnZlbG9jaXR5LnkgKiB0aW1lO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kcmF3KCk7XG4gIH07XG5cbiAgQXN0ZXJvaWREZWF0aFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG90LCBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgX3JlZiA9IHRoaXMuZG90cztcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgZG90ID0gX3JlZltfaV07XG4gICAgICBfcmVzdWx0cy5wdXNoKGRvdC5kcmF3KHRoaXMueCwgdGhpcy55KSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gQXN0ZXJvaWREZWF0aFZpZXc7XG5cbn0pKCk7XG5cbkRvdCA9IChmdW5jdGlvbigpIHtcbiAgRG90LnByb3RvdHlwZS52ZWxvY2l0eSA9IG51bGw7XG5cbiAgRG90LnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBEb3QucHJvdG90eXBlLngxID0gMDtcblxuICBEb3QucHJvdG90eXBlLnkxID0gMDtcblxuICBEb3QucHJvdG90eXBlLnggPSAwO1xuXG4gIERvdC5wcm90b3R5cGUueSA9IDA7XG5cbiAgZnVuY3Rpb24gRG90KGdyYXBoaWMsIG1heERpc3RhbmNlKSB7XG4gICAgdmFyIGFuZ2xlLCBkaXN0YW5jZSwgc3BlZWQ7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICBkaXN0YW5jZSA9IE1hdGgucmFuZG9tKCkgKiBtYXhEaXN0YW5jZTtcbiAgICB0aGlzLnggPSBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICB0aGlzLnkgPSBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICBzcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxMCArIDEwO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgUG9pbnQoTWF0aC5jb3MoYW5nbGUpICogc3BlZWQsIE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkKTtcbiAgfVxuXG4gIERvdC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUoeCwgeSk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLmFyYyh0aGlzLngsIHRoaXMueSwgMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gRG90O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3Rlcm9pZF9kZWF0aF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuZ3JhcGhpY3MuQXN0ZXJvaWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDA7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucm90YXRpb24gPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgQXN0ZXJvaWRWaWV3LnByb3RvdHlwZS5yYWRpdXMgPSAwO1xuXG4gIEFzdGVyb2lkVmlldy5wcm90b3R5cGUucG9pbnRzID0gbnVsbDtcblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBBc3Rlcm9pZFZpZXcoZ3JhcGhpYywgcmFkaXVzKSB7XG4gICAgdmFyIGFuZ2xlLCBsZW5ndGgsIHBvc1gsIHBvc1k7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnJhZGl1cztcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICB3aGlsZSAoYW5nbGUgPCBNYXRoLlBJICogMikge1xuICAgICAgbGVuZ3RoID0gKDAuNzUgKyBNYXRoLnJhbmRvbSgpICogMC4yNSkgKiB0aGlzLnJhZGl1cztcbiAgICAgIHBvc1ggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gICAgICBwb3NZID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvc1gsXG4gICAgICAgIHk6IHBvc1lcbiAgICAgIH0pO1xuICAgICAgYW5nbGUgKz0gTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICB9XG4gIH1cblxuICBBc3Rlcm9pZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYywgaTtcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBncmFwaGljLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICsraTtcbiAgICB9XG4gICAgZ3JhcGhpYy5saW5lVG8odGhpcy5yYWRpdXMsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBBc3Rlcm9pZFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzdGVyb2lkX3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ncmFwaGljcy5CdWxsZXRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBCdWxsZXRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBCdWxsZXRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgQnVsbGV0Vmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gQnVsbGV0VmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgfVxuXG4gIEJ1bGxldFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgZ3JhcGhpYy5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBncmFwaGljLmFyYyh0aGlzLngsIHRoaXMueSwgMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICByZXR1cm4gQnVsbGV0VmlldztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVsbGV0X3ZpZXcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ncmFwaGljcy5IdWRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBIdWRWaWV3LnByb3RvdHlwZS54ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS55ID0gMDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS53aWR0aCA9IDQ7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gNDtcblxuICBIdWRWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2NvcmUgPSAwO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmxpdmVzID0gMztcblxuICBIdWRWaWV3LnByb3RvdHlwZS5kcmF3U2NvcmUgPSBudWxsO1xuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXdMaXZlcyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gSHVkVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnNldFNjb3JlID0gX19iaW5kKHRoaXMuc2V0U2NvcmUsIHRoaXMpO1xuICAgIHRoaXMuc2V0TGl2ZXMgPSBfX2JpbmQodGhpcy5zZXRMaXZlcywgdGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gX19iaW5kKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgdGhpcy5kcmF3U2NvcmUgPSB0aGlzLmNyZWF0ZVNjb3JlO1xuICAgIHRoaXMuZHJhd0xpdmVzID0gdGhpcy5jcmVhdGVMaXZlcztcbiAgfVxuXG4gIEh1ZFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2V0TGl2ZXMgPSBmdW5jdGlvbihsaXZlcykge1xuICAgIHJldHVybiB0aGlzLmxpdmVzID0gbGl2ZXM7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuc2V0U2NvcmUgPSBmdW5jdGlvbihzY29yZSkge1xuICAgIHJldHVybiB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuY3JlYXRlTGl2ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbCwgcywgeCwgeTtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmdyYXBoaWMuZm9udCA9ICdib2xkIDE4cHggSGVsdmV0aWNhJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIHRoaXMuZ3JhcGhpYy50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBzID0gXCJMSVZFUzogXCIgKyB0aGlzLmxpdmVzO1xuICAgIGwgPSB0aGlzLmdyYXBoaWMubWVhc3VyZVRleHQocyk7XG4gICAgeCA9IGwud2lkdGg7XG4gICAgeSA9IDIwO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsVGV4dChzLCB4LCB5KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgSHVkVmlldy5wcm90b3R5cGUuY3JlYXRlU2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbCwgcywgeCwgeTtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmdyYXBoaWMuZm9udCA9ICdib2xkIDE4cHggSGVsdmV0aWNhJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIHRoaXMuZ3JhcGhpYy50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBzID0gXCJTQ09SRTogXCIgKyB0aGlzLnNjb3JlO1xuICAgIGwgPSB0aGlzLmdyYXBoaWMubWVhc3VyZVRleHQocyk7XG4gICAgeCA9ICh3aW5kb3cud2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgLSBsLndpZHRoO1xuICAgIHkgPSAyMDtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFRleHQocywgeCwgeSk7XG4gICAgdGhpcy5ncmFwaGljLmZpbGwoKTtcbiAgICB0aGlzLmdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBIdWRWaWV3O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1odWRfdmlldy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQb2ludCwgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblBvaW50ID0gYXN0ZXJvaWRzLnVpLlBvaW50O1xuXG5hc3Rlcm9pZHMuZ3JhcGhpY3MuU3BhY2VzaGlwRGVhdGhWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS53aWR0aCA9IDIwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuaGVpZ2h0ID0gMjA7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLnZlbDEgPSBudWxsO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUudmVsMiA9IG51bGw7XG5cbiAgU3BhY2VzaGlwRGVhdGhWaWV3LnByb3RvdHlwZS5yb3QxID0gbnVsbDtcblxuICBTcGFjZXNoaXBEZWF0aFZpZXcucHJvdG90eXBlLnJvdDIgPSBudWxsO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueDEgPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueTIgPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueTEgPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUueTIgPSAwO1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuZmlyc3QgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcERlYXRoVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgfVxuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBpZiAodGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5maXJzdCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZWwxID0gbmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiAxMCAtIDUsIE1hdGgucmFuZG9tKCkgKiAxMCArIDEwKTtcbiAgICAgIHRoaXMudmVsMiA9IG5ldyBQb2ludChNYXRoLnJhbmRvbSgpICogMTAgLSA1LCAtKE1hdGgucmFuZG9tKCkgKiAxMCArIDEwKSk7XG4gICAgICB0aGlzLnJvdDEgPSBNYXRoLnJhbmRvbSgpICogMzAwIC0gMTUwO1xuICAgICAgdGhpcy5yb3QyID0gTWF0aC5yYW5kb20oKSAqIDMwMCAtIDE1MDtcbiAgICAgIHRoaXMueDEgPSB0aGlzLngyID0gdGhpcy54O1xuICAgICAgdGhpcy55MSA9IHRoaXMueTIgPSB0aGlzLnk7XG4gICAgICB0aGlzLnIxID0gdGhpcy5yMiA9IHRoaXMucm90YXRpb247XG4gICAgfVxuICAgIHRoaXMueDEgKz0gdGhpcy52ZWwxLnggKiB0aW1lO1xuICAgIHRoaXMueTEgKz0gdGhpcy52ZWwxLnkgKiB0aW1lO1xuICAgIHRoaXMucjEgKz0gdGhpcy5yb3QxICogdGltZTtcbiAgICB0aGlzLngyICs9IHRoaXMudmVsMi54ICogdGltZTtcbiAgICB0aGlzLnkyICs9IHRoaXMudmVsMi55ICogdGltZTtcbiAgICB0aGlzLnIyICs9IHRoaXMucm90MiAqIHRpbWU7XG4gICAgcmV0dXJuIHRoaXMuZHJhdygpO1xuICB9O1xuXG4gIFNwYWNlc2hpcERlYXRoVmlldy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBncmFwaGljO1xuICAgIGdyYXBoaWMgPSB0aGlzLmdyYXBoaWM7XG4gICAgZ3JhcGhpYy5zYXZlKCk7XG4gICAgZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICBncmFwaGljLnRyYW5zbGF0ZSh0aGlzLnggKyB0aGlzLngxLCB0aGlzLnkgKyB0aGlzLnkxKTtcbiAgICBncmFwaGljLnJvdGF0ZSh0aGlzLnIxKTtcbiAgICBncmFwaGljLmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgIGdyYXBoaWMubW92ZVRvKDEwLCAwKTtcbiAgICBncmFwaGljLmxpbmVUbygtNywgNyk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTQsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKDEwLCAwKTtcbiAgICBncmFwaGljLmZpbGwoKTtcbiAgICBncmFwaGljLnJlc3RvcmUoKTtcbiAgICBncmFwaGljLnNhdmUoKTtcbiAgICBncmFwaGljLmJlZ2luUGF0aCgpO1xuICAgIGdyYXBoaWMudHJhbnNsYXRlKHRoaXMueCArIHRoaXMueDIsIHRoaXMueSArIHRoaXMueTIpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucjIpO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8oMTAsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKC03LCA3KTtcbiAgICBncmFwaGljLmxpbmVUbygtNCwgMCk7XG4gICAgZ3JhcGhpYy5saW5lVG8oMTAsIDApO1xuICAgIGdyYXBoaWMuZmlsbCgpO1xuICAgIGdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBTcGFjZXNoaXBEZWF0aFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9kZWF0aF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuZ3JhcGhpY3MuU3BhY2VzaGlwVmlldyA9IChmdW5jdGlvbigpIHtcbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUueCA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUueSA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUud2lkdGggPSAyMDtcblxuICBTcGFjZXNoaXBWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSAyMDtcblxuICBTcGFjZXNoaXBWaWV3LnByb3RvdHlwZS5yb3RhdGlvbiA9IDA7XG5cbiAgU3BhY2VzaGlwVmlldy5wcm90b3R5cGUuZ3JhcGhpYyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gU3BhY2VzaGlwVmlldyhncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgfVxuXG4gIFNwYWNlc2hpcFZpZXcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ3JhcGhpYztcbiAgICBncmFwaGljID0gdGhpcy5ncmFwaGljO1xuICAgIGdyYXBoaWMuc2F2ZSgpO1xuICAgIGdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgZ3JhcGhpYy50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGdyYXBoaWMucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgIGdyYXBoaWMuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgZ3JhcGhpYy5tb3ZlVG8oMTAsIDApO1xuICAgIGdyYXBoaWMubGluZVRvKC03LCA3KTtcbiAgICBncmFwaGljLmxpbmVUbygtNCwgMCk7XG4gICAgZ3JhcGhpYy5saW5lVG8oLTcsIC03KTtcbiAgICBncmFwaGljLmxpbmVUbygxMCwgMCk7XG4gICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNwYWNlc2hpcFZpZXc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF92aWV3LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDAsIGFzaCwgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwwID0gYXNoLnNpZ25hbHMuU2lnbmFsMDtcblxuYXN0ZXJvaWRzLmdyYXBoaWNzLldhaXRGb3JTdGFydFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnggPSAwO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnkgPSAwO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLndpZHRoID0gNDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5oZWlnaHQgPSA0O1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLnJvdGF0aW9uID0gMDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5ncmFwaGljID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5nYW1lT3ZlciA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY2xpY2tUb1N0YXJ0ID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5pbnN0cnVjdGlvbnMgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLmNsaWNrID0gbnVsbDtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnRWaWV3KGdyYXBoaWMpIHtcbiAgICB0aGlzLmdyYXBoaWMgPSBncmFwaGljO1xuICAgIHRoaXMuY2xpY2sgPSBuZXcgU2lnbmFsMCgpO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmNyZWF0ZUdhbWVPdmVyO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gdGhpcy5jcmVhdGVJbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5jbGlja1RvU3RhcnQgPSB0aGlzLmNyZWF0ZUNsaWNrVG9TdGFydDtcbiAgICB0aGlzLmdyYXBoaWMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsaWNrLmRpc3BhdGNoKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFdhaXRGb3JTdGFydFZpZXcucHJvdG90eXBlLmNyZWF0ZUdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGwsIHMsIHgsIHk7XG4gICAgdGhpcy5ncmFwaGljLnNhdmUoKTtcbiAgICB0aGlzLmdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5ncmFwaGljLmZvbnQgPSAnYm9sZCAzMnB4IEhlbHZldGljYSc7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICBzID0gJ0FTVEVST0lEUyc7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gTWF0aC5mbG9vcigoKHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pIC0gbC53aWR0aCkgLyAyKTtcbiAgICB5ID0gMTc1O1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsVGV4dChzLCB4LCB5KTtcbiAgICB0aGlzLmdyYXBoaWMuZmlsbCgpO1xuICAgIHRoaXMuZ3JhcGhpYy5yZXN0b3JlKCk7XG4gIH07XG5cbiAgV2FpdEZvclN0YXJ0Vmlldy5wcm90b3R5cGUuY3JlYXRlQ2xpY2tUb1N0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGwsIHMsIHgsIHk7XG4gICAgdGhpcy5ncmFwaGljLnNhdmUoKTtcbiAgICB0aGlzLmdyYXBoaWMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5ncmFwaGljLmZvbnQgPSAnYm9sZCAxOHB4IEhlbHZldGljYSc7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICBzID0gJ0NMSUNLIFRPIFNUQVJUJztcbiAgICBsID0gdGhpcy5ncmFwaGljLm1lYXN1cmVUZXh0KHMpO1xuICAgIHggPSBNYXRoLmZsb29yKCgod2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgLSBsLndpZHRoKSAvIDIpO1xuICAgIHkgPSAyMjU7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxUZXh0KHMsIHgsIHkpO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsKCk7XG4gICAgdGhpcy5ncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5jcmVhdGVJbnN0cnVjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbCwgcywgeCwgeTtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmdyYXBoaWMuZm9udCA9ICdib2xkIDE0cHggSGVsdmV0aWNhJztcbiAgICB0aGlzLmdyYXBoaWMuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgIHMgPSAnQ1RSTC1aIHRvIEZpcmUgIH4gIEFycm93IEtleXMgdG8gTW92ZSc7XG4gICAgbCA9IHRoaXMuZ3JhcGhpYy5tZWFzdXJlVGV4dChzKTtcbiAgICB4ID0gMTA7XG4gICAgeSA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIC0gMjA7XG4gICAgdGhpcy5ncmFwaGljLmZpbGxUZXh0KHMsIHgsIHkpO1xuICAgIHRoaXMuZ3JhcGhpYy5maWxsKCk7XG4gICAgdGhpcy5ncmFwaGljLnJlc3RvcmUoKTtcbiAgfTtcblxuICBXYWl0Rm9yU3RhcnRWaWV3LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIHRoaXMuY2xpY2tUb1N0YXJ0KCk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMoKTtcbiAgfTtcblxuICByZXR1cm4gV2FpdEZvclN0YXJ0VmlldztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdF9mb3Jfc3RhcnRfdmlldy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc3Rlcm9pZHMsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLmlucHV0LktleVBvbGwgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBkaXNwbGF5T2JqLCBzdGF0ZXM7XG5cbiAgc3RhdGVzID0gbnVsbDtcblxuICBkaXNwbGF5T2JqID0gbnVsbDtcblxuICBmdW5jdGlvbiBLZXlQb2xsKGRpc3BsYXlPYmopIHtcbiAgICB0aGlzLmRpc3BsYXlPYmogPSBkaXNwbGF5T2JqO1xuICAgIHRoaXMuaXNVcCA9IF9fYmluZCh0aGlzLmlzVXAsIHRoaXMpO1xuICAgIHRoaXMuaXNEb3duID0gX19iaW5kKHRoaXMuaXNEb3duLCB0aGlzKTtcbiAgICB0aGlzLmtleVVwTGlzdGVuZXIgPSBfX2JpbmQodGhpcy5rZXlVcExpc3RlbmVyLCB0aGlzKTtcbiAgICB0aGlzLmtleURvd25MaXN0ZW5lciA9IF9fYmluZCh0aGlzLmtleURvd25MaXN0ZW5lciwgdGhpcyk7XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLmRpc3BsYXlPYmouYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duTGlzdGVuZXIpO1xuICAgIHRoaXMuZGlzcGxheU9iai5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcExpc3RlbmVyKTtcbiAgfVxuXG4gIEtleVBvbGwucHJvdG90eXBlLmtleURvd25MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xuICB9O1xuXG4gIEtleVBvbGwucHJvdG90eXBlLmtleVVwTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLnN0YXRlc1tldmVudC5rZXlDb2RlXSkge1xuICAgICAgdGhpcy5zdGF0ZXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgS2V5UG9sbC5wcm90b3R5cGUuaXNEb3duID0gZnVuY3Rpb24oa2V5Q29kZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlc1trZXlDb2RlXTtcbiAgfTtcblxuICBLZXlQb2xsLnByb3RvdHlwZS5pc1VwID0gZnVuY3Rpb24oa2V5Q29kZSkge1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZXNba2V5Q29kZV07XG4gIH07XG5cbiAgcmV0dXJuIEtleVBvbGw7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtleV9wb2xsLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzdGVyb2lkcztcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMuTWFpbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTWFpbigpIHtcbiAgICB2YXIgY2FudmFzO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzKCk7XG4gICAgYXN0ZXJvaWRzID0gbmV3IGFzdGVyb2lkcy5Bc3Rlcm9pZHMoY2FudmFzLmdldENvbnRleHQoJzJkJyksIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgYXN0ZXJvaWRzLnN0YXJ0KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgTWFpbi5wcm90b3R5cGUuY2FudmFzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbnZhcztcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hdmlnYXRvci5pc0NvY29vbkpTID8gJ3NjcmVlbmNhbnZhcycgOiAnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfTtcblxuICByZXR1cm4gTWFpbjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuQW5pbWF0aW9uTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEFuaW1hdGlvbk5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQW5pbWF0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gQW5pbWF0aW9uTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEFuaW1hdGlvbk5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBhbmltYXRpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLkFuaW1hdGlvblxuICB9O1xuXG4gIEFuaW1hdGlvbk5vZGUucHJvdG90eXBlLmFuaW1hdGlvbiA9IG51bGw7XG5cbiAgcmV0dXJuIEFuaW1hdGlvbk5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEFzdGVyb2lkQ29sbGlzaW9uTm9kZSgpIHtcbiAgICByZXR1cm4gQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYXN0ZXJvaWQ6IGFzdGVyb2lkcy5jb21wb25lbnRzLkFzdGVyb2lkLFxuICAgIHBvc2l0aW9uOiBhc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBjb2xsaXNpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLkNvbGxpc2lvbixcbiAgICBhdWRpbzogYXN0ZXJvaWRzLmNvbXBvbmVudHMuQXVkaW9cbiAgfTtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmFzdGVyb2lkID0gbnVsbDtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBBc3Rlcm9pZENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmNvbGxpc2lvbiA9IG51bGw7XG5cbiAgQXN0ZXJvaWRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIEFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzdGVyb2lkX2NvbGxpc2lvbl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ub2Rlcy5BdWRpb05vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBdWRpb05vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQXVkaW9Ob2RlKCkge1xuICAgIHJldHVybiBBdWRpb05vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBBdWRpb05vZGUuY29tcG9uZW50cyA9IHtcbiAgICBhdWRpbzogYXN0ZXJvaWRzLmNvbXBvbmVudHMuQXVkaW9cbiAgfTtcblxuICBBdWRpb05vZGUucHJvdG90eXBlLmF1ZGlvID0gbnVsbDtcblxuICByZXR1cm4gQXVkaW9Ob2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW9fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuQnVsbGV0QWdlTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEJ1bGxldEFnZU5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQnVsbGV0QWdlTm9kZSgpIHtcbiAgICByZXR1cm4gQnVsbGV0QWdlTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEJ1bGxldEFnZU5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBidWxsZXQ6IGFzdGVyb2lkcy5jb21wb25lbnRzLkJ1bGxldFxuICB9O1xuXG4gIEJ1bGxldEFnZU5vZGUucHJvdG90eXBlLmJ1bGxldCA9IG51bGw7XG5cbiAgcmV0dXJuIEJ1bGxldEFnZU5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXRfYWdlX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBhc3Rlcm9pZHMsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLm5vZGVzLkJ1bGxldENvbGxpc2lvbk5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhCdWxsZXRDb2xsaXNpb25Ob2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEJ1bGxldENvbGxpc2lvbk5vZGUoKSB7XG4gICAgcmV0dXJuIEJ1bGxldENvbGxpc2lvbk5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYnVsbGV0OiBhc3Rlcm9pZHMuY29tcG9uZW50cy5CdWxsZXQsXG4gICAgcG9zaXRpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLlBvc2l0aW9uLFxuICAgIGNvbGxpc2lvbjogYXN0ZXJvaWRzLmNvbXBvbmVudHMuQ29sbGlzaW9uXG4gIH07XG5cbiAgQnVsbGV0Q29sbGlzaW9uTm9kZS5wcm90b3R5cGUuYnVsbGV0ID0gbnVsbDtcblxuICBCdWxsZXRDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG5cbiAgQnVsbGV0Q29sbGlzaW9uTm9kZS5wcm90b3R5cGUuY29sbGlzaW9uID0gbnVsbDtcblxuICByZXR1cm4gQnVsbGV0Q29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJ1bGxldF9jb2xsaXNpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuRGVhdGhUaHJvZXNOb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoRGVhdGhUaHJvZXNOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIERlYXRoVGhyb2VzTm9kZSgpIHtcbiAgICByZXR1cm4gRGVhdGhUaHJvZXNOb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgRGVhdGhUaHJvZXNOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgZGVhdGg6IGFzdGVyb2lkcy5jb21wb25lbnRzLkRlYXRoVGhyb2VzXG4gIH07XG5cbiAgRGVhdGhUaHJvZXNOb2RlLnByb3RvdHlwZS5kZWF0aCA9IG51bGw7XG5cbiAgcmV0dXJuIERlYXRoVGhyb2VzTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYXRoX3Rocm9lc19ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ub2Rlcy5HYW1lTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEdhbWVOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEdhbWVOb2RlKCkge1xuICAgIHJldHVybiBHYW1lTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEdhbWVOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgc3RhdGU6IGFzdGVyb2lkcy5jb21wb25lbnRzLkdhbWVTdGF0ZVxuICB9O1xuXG4gIEdhbWVOb2RlLnByb3RvdHlwZS5zdGF0ZSA9IG51bGw7XG5cbiAgcmV0dXJuIEdhbWVOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZV9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ub2Rlcy5HdW5Db250cm9sTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEd1bkNvbnRyb2xOb2RlLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEd1bkNvbnRyb2xOb2RlKCkge1xuICAgIHJldHVybiBHdW5Db250cm9sTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEd1bkNvbnRyb2xOb2RlLmNvbXBvbmVudHMgPSB7XG4gICAgYXVkaW86IGFzdGVyb2lkcy5jb21wb25lbnRzLkF1ZGlvLFxuICAgIGNvbnRyb2w6IGFzdGVyb2lkcy5jb21wb25lbnRzLkd1bkNvbnRyb2xzLFxuICAgIGd1bjogYXN0ZXJvaWRzLmNvbXBvbmVudHMuR3VuLFxuICAgIHBvc2l0aW9uOiBhc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvblxuICB9O1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5jb250cm9sID0gbnVsbDtcblxuICBHdW5Db250cm9sTm9kZS5wcm90b3R5cGUuZ3VuID0gbnVsbDtcblxuICBHdW5Db250cm9sTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIEd1bkNvbnRyb2xOb2RlLnByb3RvdHlwZS5hdWRpbyA9IG51bGw7XG5cbiAgcmV0dXJuIEd1bkNvbnRyb2xOb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VuX2NvbnRyb2xfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuSHVkTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEh1ZE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gSHVkTm9kZSgpIHtcbiAgICByZXR1cm4gSHVkTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEh1ZE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBzdGF0ZTogYXN0ZXJvaWRzLmNvbXBvbmVudHMuR2FtZVN0YXRlLFxuICAgIGh1ZDogYXN0ZXJvaWRzLmNvbXBvbmVudHMuSHVkXG4gIH07XG5cbiAgSHVkTm9kZS5wcm90b3R5cGUuc3RhdGUgPSBudWxsO1xuXG4gIEh1ZE5vZGUucHJvdG90eXBlLmh1ZCA9IG51bGw7XG5cbiAgcmV0dXJuIEh1ZE5vZGU7XG5cbn0pKGFzaC5jb3JlLk5vZGUpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1odWRfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuTW90aW9uQ29udHJvbE5vZGUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhNb3Rpb25Db250cm9sTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBNb3Rpb25Db250cm9sTm9kZSgpIHtcbiAgICByZXR1cm4gTW90aW9uQ29udHJvbE5vZGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBNb3Rpb25Db250cm9sTm9kZS5jb21wb25lbnRzID0ge1xuICAgIGNvbnRyb2w6IGFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvbkNvbnRyb2xzLFxuICAgIHBvc2l0aW9uOiBhc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBtb3Rpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvblxuICB9O1xuXG4gIE1vdGlvbkNvbnRyb2xOb2RlLnByb3RvdHlwZS5jb250cm9sID0gbnVsbDtcblxuICBNb3Rpb25Db250cm9sTm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIE1vdGlvbkNvbnRyb2xOb2RlLnByb3RvdHlwZS5tb3Rpb24gPSBudWxsO1xuXG4gIHJldHVybiBNb3Rpb25Db250cm9sTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbl9jb250cm9sX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLCBhc3Rlcm9pZHMsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuYXN0ZXJvaWRzLm5vZGVzLk1vdmVtZW50Tm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKE1vdmVtZW50Tm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBNb3ZlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIE1vdmVtZW50Tm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE1vdmVtZW50Tm9kZS5jb21wb25lbnRzID0ge1xuICAgIHBvc2l0aW9uOiBhc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBtb3Rpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvblxuICB9O1xuXG4gIE1vdmVtZW50Tm9kZS5wcm90b3R5cGUucG9zaXRpb24gPSBudWxsO1xuXG4gIE1vdmVtZW50Tm9kZS5wcm90b3R5cGUubW90aW9uID0gbnVsbDtcblxuICByZXR1cm4gTW92ZW1lbnROb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZW1lbnRfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuUmVuZGVyTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFJlbmRlck5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gUmVuZGVyTm9kZSgpIHtcbiAgICByZXR1cm4gUmVuZGVyTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFJlbmRlck5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBwb3NpdGlvbjogYXN0ZXJvaWRzLmNvbXBvbmVudHMuUG9zaXRpb24sXG4gICAgZGlzcGxheTogYXN0ZXJvaWRzLmNvbXBvbmVudHMuRGlzcGxheVxuICB9O1xuXG4gIFJlbmRlck5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbDtcblxuICBSZW5kZXJOb2RlLnByb3RvdHlwZS5kaXNwbGF5ID0gbnVsbDtcblxuICByZXR1cm4gUmVuZGVyTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlcl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ub2Rlcy5TcGFjZXNoaXBDb2xsaXNpb25Ob2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU3BhY2VzaGlwQ29sbGlzaW9uTm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlKCkge1xuICAgIHJldHVybiBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZS5jb21wb25lbnRzID0ge1xuICAgIHNwYWNlc2hpcDogYXN0ZXJvaWRzLmNvbXBvbmVudHMuU3BhY2VzaGlwLFxuICAgIHBvc2l0aW9uOiBhc3Rlcm9pZHMuY29tcG9uZW50cy5Qb3NpdGlvbixcbiAgICBjb2xsaXNpb246IGFzdGVyb2lkcy5jb21wb25lbnRzLkNvbGxpc2lvbixcbiAgICBhdWRpbzogYXN0ZXJvaWRzLmNvbXBvbmVudHMuQXVkaW9cbiAgfTtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5zcGFjZXNoaXAgPSAwO1xuXG4gIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gMDtcblxuICBTcGFjZXNoaXBDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5jb2xsaXNpb24gPSBudWxsO1xuXG4gIFNwYWNlc2hpcENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmF1ZGlvID0gbnVsbDtcblxuICByZXR1cm4gU3BhY2VzaGlwQ29sbGlzaW9uTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9jb2xsaXNpb25fbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsIGFzdGVyb2lkcyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5hc3Rlcm9pZHMubm9kZXMuU3BhY2VzaGlwTm9kZSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNwYWNlc2hpcE5vZGUsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU3BhY2VzaGlwTm9kZSgpIHtcbiAgICByZXR1cm4gU3BhY2VzaGlwTm9kZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNwYWNlc2hpcE5vZGUuY29tcG9uZW50cyA9IHtcbiAgICBzcGFjZXNoaXA6IGFzdGVyb2lkcy5jb21wb25lbnRzLlNwYWNlc2hpcCxcbiAgICBwb3NpdGlvbjogYXN0ZXJvaWRzLmNvbXBvbmVudHMuUG9zaXRpb25cbiAgfTtcblxuICBTcGFjZXNoaXBOb2RlLnByb3RvdHlwZS5zcGFjZXNoaXAgPSAwO1xuXG4gIFNwYWNlc2hpcE5vZGUucHJvdG90eXBlLnBvc2l0aW9uID0gMDtcblxuICByZXR1cm4gU3BhY2VzaGlwTm9kZTtcblxufSkoYXNoLmNvcmUuTm9kZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlc2hpcF9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5ub2Rlcy5XYWl0Rm9yU3RhcnROb2RlID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoV2FpdEZvclN0YXJ0Tm9kZSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBXYWl0Rm9yU3RhcnROb2RlKCkge1xuICAgIHJldHVybiBXYWl0Rm9yU3RhcnROb2RlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgV2FpdEZvclN0YXJ0Tm9kZS5jb21wb25lbnRzID0ge1xuICAgIHdhaXQ6IGFzdGVyb2lkcy5jb21wb25lbnRzLldhaXRGb3JTdGFydFxuICB9O1xuXG4gIFdhaXRGb3JTdGFydE5vZGUucHJvdG90eXBlLndhaXQgPSBudWxsO1xuXG4gIHJldHVybiBXYWl0Rm9yU3RhcnROb2RlO1xuXG59KShhc2guY29yZS5Ob2RlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdF9mb3Jfc3RhcnRfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb25Ob2RlLCBhc2gsIGFzdGVyb2lkcyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5BbmltYXRpb25Ob2RlID0gYXN0ZXJvaWRzLm5vZGVzLkFuaW1hdGlvbk5vZGU7XG5cbmFzdGVyb2lkcy5zeXN0ZW1zLkFuaW1hdGlvblN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEFuaW1hdGlvblN5c3RlbSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBBbmltYXRpb25TeXN0ZW0oKSB7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgQW5pbWF0aW9uU3lzdGVtLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIEFuaW1hdGlvbk5vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBBbmltYXRpb25TeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgbm9kZS5hbmltYXRpb24uYW5pbWF0aW9uLmFuaW1hdGUodGltZSk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvblN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEF1ZGlvTm9kZSwgYXNoLCBhc3Rlcm9pZHMsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuQXVkaW9Ob2RlID0gYXN0ZXJvaWRzLm5vZGVzLkF1ZGlvTm9kZTtcblxuYXN0ZXJvaWRzLnN5c3RlbXMuQXVkaW9TeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhBdWRpb1N5c3RlbSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBBdWRpb1N5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBBdWRpb1N5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBBdWRpb05vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBBdWRpb1N5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICB2YXIgZWFjaCwgc291bmQsIHR5cGUsIF9yZWY7XG4gICAgX3JlZiA9IG5vZGUuYXVkaW8udG9QbGF5O1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICB0eXBlID0gX3JlZltlYWNoXTtcbiAgICAgIHNvdW5kID0gbmV3IHR5cGUoKTtcbiAgICAgIHNvdW5kLnBsYXkoMCwgMSk7XG4gICAgfVxuICAgIG5vZGUuYXVkaW8udG9QbGF5Lmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIEF1ZGlvU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1ZGlvX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBCdWxsZXRBZ2VOb2RlLCBhc2gsIGFzdGVyb2lkcyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5CdWxsZXRBZ2VOb2RlID0gYXN0ZXJvaWRzLm5vZGVzLkJ1bGxldEFnZU5vZGU7XG5cbmFzdGVyb2lkcy5zeXN0ZW1zLkJ1bGxldEFnZVN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEJ1bGxldEFnZVN5c3RlbSwgX3N1cGVyKTtcblxuICBCdWxsZXRBZ2VTeXN0ZW0ucHJvdG90eXBlLmNyZWF0b3IgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEJ1bGxldEFnZVN5c3RlbShjcmVhdG9yKSB7XG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICB0aGlzLnVwZGF0ZU5vZGUgPSBfX2JpbmQodGhpcy51cGRhdGVOb2RlLCB0aGlzKTtcbiAgICBCdWxsZXRBZ2VTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgQnVsbGV0QWdlTm9kZSwgdGhpcy51cGRhdGVOb2RlKTtcbiAgfVxuXG4gIEJ1bGxldEFnZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHRpbWUpIHtcbiAgICB2YXIgYnVsbGV0O1xuICAgIGJ1bGxldCA9IG5vZGUuYnVsbGV0O1xuICAgIGJ1bGxldC5saWZlUmVtYWluaW5nIC09IHRpbWU7XG4gICAgaWYgKGJ1bGxldC5saWZlUmVtYWluaW5nIDw9IDApIHtcbiAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KG5vZGUuZW50aXR5KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEJ1bGxldEFnZVN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWxsZXRfYWdlX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBbmltYXRpb24sIEFzdGVyb2lkLCBBc3Rlcm9pZENvbGxpc2lvbk5vZGUsIEFzdGVyb2lkRGVhdGhWaWV3LCBBc3Rlcm9pZFZpZXcsIEF1ZGlvLCBCdWxsZXQsIEJ1bGxldENvbGxpc2lvbk5vZGUsIEJ1bGxldFZpZXcsIENvbGxpc2lvbiwgRGVhdGhUaHJvZXMsIERpc3BsYXksIEdhbWVOb2RlLCBHYW1lU3RhdGUsIEd1biwgR3VuQ29udHJvbHMsIEh1ZCwgSHVkVmlldywgTW90aW9uLCBNb3Rpb25Db250cm9scywgUGh5c2ljcywgUG9zaXRpb24sIFNwYWNlc2hpcCwgU3BhY2VzaGlwQ29sbGlzaW9uTm9kZSwgU3BhY2VzaGlwRGVhdGhWaWV3LCBTcGFjZXNoaXBWaWV3LCBXYWl0Rm9yU3RhcnQsIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cblNwYWNlc2hpcENvbGxpc2lvbk5vZGUgPSBhc3Rlcm9pZHMubm9kZXMuU3BhY2VzaGlwQ29sbGlzaW9uTm9kZTtcblxuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gYXN0ZXJvaWRzLm5vZGVzLkFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxuQnVsbGV0Q29sbGlzaW9uTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5CdWxsZXRDb2xsaXNpb25Ob2RlO1xuXG5HYW1lTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5HYW1lTm9kZTtcblxuQW5pbWF0aW9uID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuQW5pbWF0aW9uO1xuXG5Bc3Rlcm9pZCA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkFzdGVyb2lkO1xuXG5BdWRpbyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkF1ZGlvO1xuXG5CdWxsZXQgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5CdWxsZXQ7XG5cbkNvbGxpc2lvbiA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkNvbGxpc2lvbjtcblxuRGVhdGhUaHJvZXMgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5EZWF0aFRocm9lcztcblxuRGlzcGxheSA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkRpc3BsYXk7XG5cbkdhbWVTdGF0ZSA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkdhbWVTdGF0ZTtcblxuR3VuID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuR3VuO1xuXG5HdW5Db250cm9scyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLkd1bkNvbnRyb2xzO1xuXG5IdWQgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5IdWQ7XG5cbk1vdGlvbiA9IGFzdGVyb2lkcy5jb21wb25lbnRzLk1vdGlvbjtcblxuTW90aW9uQ29udHJvbHMgPSBhc3Rlcm9pZHMuY29tcG9uZW50cy5Nb3Rpb25Db250cm9scztcblxuUGh5c2ljcyA9IGFzdGVyb2lkcy5jb21wb25lbnRzLlBoeXNpY3M7XG5cblBvc2l0aW9uID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuUG9zaXRpb247XG5cblNwYWNlc2hpcCA9IGFzdGVyb2lkcy5jb21wb25lbnRzLlNwYWNlc2hpcDtcblxuV2FpdEZvclN0YXJ0ID0gYXN0ZXJvaWRzLmNvbXBvbmVudHMuV2FpdEZvclN0YXJ0O1xuXG5Bc3Rlcm9pZERlYXRoVmlldyA9IGFzdGVyb2lkcy5ncmFwaGljcy5Bc3Rlcm9pZERlYXRoVmlldztcblxuQXN0ZXJvaWRWaWV3ID0gYXN0ZXJvaWRzLmdyYXBoaWNzLkFzdGVyb2lkVmlldztcblxuQnVsbGV0VmlldyA9IGFzdGVyb2lkcy5ncmFwaGljcy5CdWxsZXRWaWV3O1xuXG5IdWRWaWV3ID0gYXN0ZXJvaWRzLmdyYXBoaWNzLkh1ZFZpZXc7XG5cblNwYWNlc2hpcERlYXRoVmlldyA9IGFzdGVyb2lkcy5ncmFwaGljcy5TcGFjZXNoaXBEZWF0aFZpZXc7XG5cblNwYWNlc2hpcFZpZXcgPSBhc3Rlcm9pZHMuZ3JhcGhpY3MuU3BhY2VzaGlwVmlldztcblxuYXN0ZXJvaWRzLnN5c3RlbXMuQ29sbGlzaW9uU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoQ29sbGlzaW9uU3lzdGVtLCBfc3VwZXIpO1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5nYW1lcyA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5zcGFjZXNoaXBzID0gbnVsbDtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLmFzdGVyb2lkcyA9IG51bGw7XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5idWxsZXRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBDb2xsaXNpb25TeXN0ZW0oY3JlYXRvcikge1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgQ29sbGlzaW9uU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZXMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoR2FtZU5vZGUpO1xuICAgIHRoaXMuc3BhY2VzaGlwcyA9IGVuZ2luZS5nZXROb2RlTGlzdChTcGFjZXNoaXBDb2xsaXNpb25Ob2RlKTtcbiAgICB0aGlzLmFzdGVyb2lkcyA9IGVuZ2luZS5nZXROb2RlTGlzdChBc3Rlcm9pZENvbGxpc2lvbk5vZGUpO1xuICAgIHRoaXMuYnVsbGV0cyA9IGVuZ2luZS5nZXROb2RlTGlzdChCdWxsZXRDb2xsaXNpb25Ob2RlKTtcbiAgfTtcblxuICBDb2xsaXNpb25TeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLmdhbWVzID0gbnVsbDtcbiAgICB0aGlzLnNwYWNlc2hpcHMgPSBudWxsO1xuICAgIHRoaXMuYXN0ZXJvaWRzID0gbnVsbDtcbiAgICB0aGlzLmJ1bGxldHMgPSBudWxsO1xuICB9O1xuXG4gIENvbGxpc2lvblN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBhc3Rlcm9pZCwgYnVsbGV0LCBzcGFjZXNoaXA7XG4gICAgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmhlYWQ7XG4gICAgd2hpbGUgKGJ1bGxldCkge1xuICAgICAgYXN0ZXJvaWQgPSB0aGlzLmFzdGVyb2lkcy5oZWFkO1xuICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgIGlmIChhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi5kaXN0YW5jZVRvKGJ1bGxldC5wb3NpdGlvbi5wb3NpdGlvbikgPD0gYXN0ZXJvaWQuY29sbGlzaW9uLnJhZGl1cykge1xuICAgICAgICAgIHRoaXMuY3JlYXRvci5kZXN0cm95RW50aXR5KGJ1bGxldC5lbnRpdHkpO1xuICAgICAgICAgIGlmIChhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzID4gMTApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVBc3Rlcm9pZChhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzIC0gMTAsIGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLnggKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1LCBhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi55ICsgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0b3IuY3JlYXRlQXN0ZXJvaWQoYXN0ZXJvaWQuY29sbGlzaW9uLnJhZGl1cyAtIDEwLCBhc3Rlcm9pZC5wb3NpdGlvbi5wb3NpdGlvbi54ICsgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSwgYXN0ZXJvaWQucG9zaXRpb24ucG9zaXRpb24ueSArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhc3Rlcm9pZC5hc3Rlcm9pZC5mc20uY2hhbmdlU3RhdGUoJ2Rlc3Ryb3llZCcpO1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgZW11bGF0ZSB0aGUgZnNtIHN0YXRlIGNoYW5nZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVzLmhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMuaGVhZC5zdGF0ZS5oaXRzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgIH1cbiAgICAgIGJ1bGxldCA9IGJ1bGxldC5uZXh0O1xuICAgIH1cbiAgICBzcGFjZXNoaXAgPSB0aGlzLnNwYWNlc2hpcHMuaGVhZDtcbiAgICB3aGlsZSAoc3BhY2VzaGlwKSB7XG4gICAgICBhc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzLmhlYWQ7XG4gICAgICB3aGlsZSAoYXN0ZXJvaWQpIHtcbiAgICAgICAgaWYgKGFzdGVyb2lkLnBvc2l0aW9uLnBvc2l0aW9uLmRpc3RhbmNlVG8oc3BhY2VzaGlwLnBvc2l0aW9uLnBvc2l0aW9uKSA8PSBhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzICsgc3BhY2VzaGlwLmNvbGxpc2lvbi5yYWRpdXMpIHtcbiAgICAgICAgICBzcGFjZXNoaXAuc3BhY2VzaGlwLmZzbS5jaGFuZ2VTdGF0ZSgnZGVzdHJveWVkJyk7XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICBlbXVsYXRlIHRoZSBmc20gc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZXMuaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lcy5oZWFkLnN0YXRlLmxpdmVzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgIH1cbiAgICAgIHNwYWNlc2hpcCA9IHNwYWNlc2hpcC5uZXh0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29sbGlzaW9uU3lzdGVtO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsaXNpb25fc3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERlYXRoVGhyb2VzTm9kZSwgYXNoLCBhc3Rlcm9pZHMsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuRGVhdGhUaHJvZXNOb2RlID0gYXN0ZXJvaWRzLm5vZGVzLkRlYXRoVGhyb2VzTm9kZTtcblxuYXN0ZXJvaWRzLnN5c3RlbXMuRGVhdGhUaHJvZXNTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhEZWF0aFRocm9lc1N5c3RlbSwgX3N1cGVyKTtcblxuICBEZWF0aFRocm9lc1N5c3RlbS5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRGVhdGhUaHJvZXNTeXN0ZW0oY3JlYXRvcikge1xuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgRGVhdGhUaHJvZXNTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgRGVhdGhUaHJvZXNOb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgRGVhdGhUaHJvZXNTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgbm9kZS5kZWF0aC5jb3VudGRvd24gLT0gdGltZTtcbiAgICBpZiAobm9kZS5kZWF0aC5jb3VudGRvd24gPD0gMCkge1xuICAgICAgdGhpcy5jcmVhdG9yLmRlc3Ryb3lFbnRpdHkobm9kZS5lbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRGVhdGhUaHJvZXNTeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVhdGhfdGhyb2VzX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBc3Rlcm9pZENvbGxpc2lvbk5vZGUsIEJ1bGxldENvbGxpc2lvbk5vZGUsIEdhbWVOb2RlLCBQb2ludCwgU3BhY2VzaGlwTm9kZSwgYXNoLCBhc3Rlcm9pZHMsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuR2FtZU5vZGUgPSBhc3Rlcm9pZHMubm9kZXMuR2FtZU5vZGU7XG5cblNwYWNlc2hpcE5vZGUgPSBhc3Rlcm9pZHMubm9kZXMuU3BhY2VzaGlwTm9kZTtcblxuQXN0ZXJvaWRDb2xsaXNpb25Ob2RlID0gYXN0ZXJvaWRzLm5vZGVzLkFzdGVyb2lkQ29sbGlzaW9uTm9kZTtcblxuQnVsbGV0Q29sbGlzaW9uTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5CdWxsZXRDb2xsaXNpb25Ob2RlO1xuXG5Qb2ludCA9IGFzdGVyb2lkcy51aS5Qb2ludDtcblxuYXN0ZXJvaWRzLnN5c3RlbXMuR2FtZU1hbmFnZXIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhHYW1lTWFuYWdlciwgX3N1cGVyKTtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuY29uZmlnID0gbnVsbDtcblxuICBHYW1lTWFuYWdlci5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLmdhbWVOb2RlcyA9IG51bGw7XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnNwYWNlc2hpcHMgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5hc3Rlcm9pZHMgPSBudWxsO1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5idWxsZXRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBHYW1lTWFuYWdlcihjcmVhdG9yLCBjb25maWcpIHtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMuZ2FtZU5vZGVzID0gZW5naW5lLmdldE5vZGVMaXN0KEdhbWVOb2RlKTtcbiAgICB0aGlzLnNwYWNlc2hpcHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoU3BhY2VzaGlwTm9kZSk7XG4gICAgdGhpcy5hc3Rlcm9pZHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoQXN0ZXJvaWRDb2xsaXNpb25Ob2RlKTtcbiAgICB0aGlzLmJ1bGxldHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoQnVsbGV0Q29sbGlzaW9uTm9kZSk7XG4gIH07XG5cbiAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgYXN0ZXJvaWQsIGFzdGVyb2lkQ291bnQsIGNsZWFyVG9BZGRTcGFjZXNoaXAsIGksIG5ld1NwYWNlc2hpcFBvc2l0aW9uLCBub2RlLCBwb3NpdGlvbiwgc3BhY2VzaGlwO1xuICAgIG5vZGUgPSB0aGlzLmdhbWVOb2Rlcy5oZWFkO1xuICAgIGlmIChub2RlICYmIG5vZGUuc3RhdGUucGxheWluZykge1xuICAgICAgaWYgKHRoaXMuc3BhY2VzaGlwcy5lbXB0eSkge1xuICAgICAgICBpZiAobm9kZS5zdGF0ZS5saXZlcyA+IDApIHtcbiAgICAgICAgICBuZXdTcGFjZXNoaXBQb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLmNvbmZpZy53aWR0aCAqIDAuNSwgdGhpcy5jb25maWcuaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICBjbGVhclRvQWRkU3BhY2VzaGlwID0gdHJ1ZTtcbiAgICAgICAgICBhc3Rlcm9pZCA9IHRoaXMuYXN0ZXJvaWRzLmhlYWQ7XG4gICAgICAgICAgd2hpbGUgKGFzdGVyb2lkKSB7XG4gICAgICAgICAgICBpZiAoUG9pbnQuZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24ucG9zaXRpb24sIG5ld1NwYWNlc2hpcFBvc2l0aW9uKSA8PSBhc3Rlcm9pZC5jb2xsaXNpb24ucmFkaXVzICsgNTApIHtcbiAgICAgICAgICAgICAgY2xlYXJUb0FkZFNwYWNlc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzdGVyb2lkID0gYXN0ZXJvaWQubmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNsZWFyVG9BZGRTcGFjZXNoaXApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVTcGFjZXNoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zdGF0ZS5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVdhaXRGb3JDbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3Rlcm9pZHMuZW1wdHkgJiYgdGhpcy5idWxsZXRzLmVtcHR5ICYmICF0aGlzLnNwYWNlc2hpcHMuZW1wdHkpIHtcbiAgICAgICAgc3BhY2VzaGlwID0gdGhpcy5zcGFjZXNoaXBzLmhlYWQ7XG4gICAgICAgIG5vZGUuc3RhdGUubGV2ZWwrKztcbiAgICAgICAgYXN0ZXJvaWRDb3VudCA9IDIgKyBub2RlLnN0YXRlLmxldmVsO1xuICAgICAgICBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBhc3Rlcm9pZENvdW50KSB7XG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbmZpZy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuY29uZmlnLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoIShQb2ludC5kaXN0YW5jZShwb3NpdGlvbiwgc3BhY2VzaGlwLnBvc2l0aW9uLnBvc2l0aW9uKSA8PSA4MCkpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3JlYXRvci5jcmVhdGVBc3Rlcm9pZCgzMCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICAgICAgKytpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdGhpcy5nYW1lTm9kZXMgPSBudWxsO1xuICAgIHRoaXMuc3BhY2VzaGlwcyA9IG51bGw7XG4gICAgdGhpcy5hc3Rlcm9pZHMgPSBudWxsO1xuICAgIHRoaXMuYnVsbGV0cyA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEdhbWVNYW5hZ2VyO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nYW1lX21hbmFnZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgR3VuQ29udHJvbE5vZGUsIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbkd1bkNvbnRyb2xOb2RlID0gYXN0ZXJvaWRzLm5vZGVzLkd1bkNvbnRyb2xOb2RlO1xuXG5hc3Rlcm9pZHMuc3lzdGVtcy5HdW5Db250cm9sU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoR3VuQ29udHJvbFN5c3RlbSwgX3N1cGVyKTtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5rZXlQb2xsID0gbnVsbDtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5jcmVhdG9yID0gbnVsbDtcblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS5ub2RlTGlzdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gR3VuQ29udHJvbFN5c3RlbShrZXlQb2xsLCBjcmVhdG9yKSB7XG4gICAgdGhpcy5rZXlQb2xsID0ga2V5UG9sbDtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEd1bkNvbnRyb2xTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgR3VuQ29udHJvbE5vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBHdW5Db250cm9sU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHZhciBjb250cm9sLCBndW4sIHBvc2l0aW9uO1xuICAgIGNvbnRyb2wgPSBub2RlLmNvbnRyb2w7XG4gICAgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICAgIGd1biA9IG5vZGUuZ3VuO1xuICAgIGd1bi5zaG9vdGluZyA9IHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC50cmlnZ2VyKTtcbiAgICBndW4udGltZVNpbmNlTGFzdFNob3QgKz0gdGltZTtcbiAgICBpZiAoZ3VuLnNob290aW5nICYmIGd1bi50aW1lU2luY2VMYXN0U2hvdCA+PSBndW4ubWluaW11bVNob3RJbnRlcnZhbCkge1xuICAgICAgdGhpcy5jcmVhdG9yLmNyZWF0ZVVzZXJCdWxsZXQoZ3VuLCBwb3NpdGlvbik7XG4gICAgICBndW4udGltZVNpbmNlTGFzdFNob3QgPSAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gR3VuQ29udHJvbFN5c3RlbTtcblxufSkoYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndW5fY29udHJvbF9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgSHVkTm9kZSwgYXNoLCBhc3Rlcm9pZHMsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzdGVyb2lkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2V4YW1wbGUnKTtcblxuSHVkTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5IdWROb2RlO1xuXG5hc3Rlcm9pZHMuc3lzdGVtcy5IdWRTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhIdWRTeXN0ZW0sIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gSHVkU3lzdGVtKCkge1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIEh1ZFN5c3RlbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBIdWROb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgSHVkU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIG5vZGUuaHVkLnZpZXcuc2V0TGl2ZXMobm9kZS5zdGF0ZS5saXZlcyk7XG4gICAgbm9kZS5odWQudmlldy5zZXRTY29yZShub2RlLnN0YXRlLmhpdHMpO1xuICB9O1xuXG4gIHJldHVybiBIdWRTeXN0ZW07XG5cbn0pKGFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHVkX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNb3Rpb25Db250cm9sTm9kZSwgYXNoLCBhc3Rlcm9pZHMsIGIyVmVjMixcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5Nb3Rpb25Db250cm9sTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5Nb3Rpb25Db250cm9sTm9kZTtcblxuYjJWZWMyID0gQm94MkQuQ29tbW9uLk1hdGguYjJWZWMyO1xuXG5hc3Rlcm9pZHMuc3lzdGVtcy5Nb3Rpb25Db250cm9sU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTW90aW9uQ29udHJvbFN5c3RlbSwgX3N1cGVyKTtcblxuICBNb3Rpb25Db250cm9sU3lzdGVtLnByb3RvdHlwZS5rZXlQb2xsID0gbnVsbDtcblxuICBmdW5jdGlvbiBNb3Rpb25Db250cm9sU3lzdGVtKGtleVBvbGwpIHtcbiAgICB0aGlzLmtleVBvbGwgPSBrZXlQb2xsO1xuICAgIHRoaXMudXBkYXRlTm9kZSA9IF9fYmluZCh0aGlzLnVwZGF0ZU5vZGUsIHRoaXMpO1xuICAgIE1vdGlvbkNvbnRyb2xTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgTW90aW9uQ29udHJvbE5vZGUsIHRoaXMudXBkYXRlTm9kZSk7XG4gIH1cblxuICBNb3Rpb25Db250cm9sU3lzdGVtLnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24obm9kZSwgdGltZSkge1xuICAgIHZhciBjb250cm9sLCBsZWZ0LCBtb3Rpb24sIHBvc2l0aW9uLCByaWdodDtcbiAgICBjb250cm9sID0gbm9kZS5jb250cm9sO1xuICAgIHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcbiAgICBtb3Rpb24gPSBub2RlLm1vdGlvbjtcbiAgICBsZWZ0ID0gdGhpcy5rZXlQb2xsLmlzRG93bihjb250cm9sLmxlZnQpO1xuICAgIHJpZ2h0ID0gdGhpcy5rZXlQb2xsLmlzRG93bihjb250cm9sLnJpZ2h0KTtcbiAgICBpZiAobGVmdCkge1xuICAgICAgcG9zaXRpb24ucm90YXRpb24gLT0gY29udHJvbC5yb3RhdGlvblJhdGUgKiB0aW1lO1xuICAgIH1cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIHBvc2l0aW9uLnJvdGF0aW9uICs9IGNvbnRyb2wucm90YXRpb25SYXRlICogdGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5UG9sbC5pc0Rvd24oY29udHJvbC5hY2NlbGVyYXRlKSkge1xuICAgICAgbW90aW9uLnZlbG9jaXR5LnggKz0gTWF0aC5jb3MocG9zaXRpb24ucm90YXRpb24pICogY29udHJvbC5hY2NlbGVyYXRpb25SYXRlICogdGltZTtcbiAgICAgIG1vdGlvbi52ZWxvY2l0eS55ICs9IE1hdGguc2luKHBvc2l0aW9uLnJvdGF0aW9uKSAqIGNvbnRyb2wuYWNjZWxlcmF0aW9uUmF0ZSAqIHRpbWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb3Rpb25Db250cm9sU3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdGlvbl9jb250cm9sX3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNb3ZlbWVudE5vZGUsIGFzaCwgYXN0ZXJvaWRzLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbk1vdmVtZW50Tm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5Nb3ZlbWVudE5vZGU7XG5cbmFzdGVyb2lkcy5zeXN0ZW1zLk1vdmVtZW50U3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTW92ZW1lbnRTeXN0ZW0sIF9zdXBlcik7XG5cbiAgTW92ZW1lbnRTeXN0ZW0ucHJvdG90eXBlLmNvbmZpZyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTW92ZW1lbnRTeXN0ZW0oY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy51cGRhdGVOb2RlID0gX19iaW5kKHRoaXMudXBkYXRlTm9kZSwgdGhpcyk7XG4gICAgTW92ZW1lbnRTeXN0ZW0uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgTW92ZW1lbnROb2RlLCB0aGlzLnVwZGF0ZU5vZGUpO1xuICB9XG5cbiAgTW92ZW1lbnRTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB0aW1lKSB7XG4gICAgdmFyIG1vdGlvbiwgcG9zaXRpb24sIHhEYW1wLCB5RGFtcDtcbiAgICBwb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gICAgbW90aW9uID0gbm9kZS5tb3Rpb247XG4gICAgcG9zaXRpb24ucG9zaXRpb24ueCArPSBtb3Rpb24udmVsb2NpdHkueCAqIHRpbWU7XG4gICAgcG9zaXRpb24ucG9zaXRpb24ueSArPSBtb3Rpb24udmVsb2NpdHkueSAqIHRpbWU7XG4gICAgaWYgKHBvc2l0aW9uLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbi54ICs9IHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueCA+IHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbi54IC09IHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueSA8IDApIHtcbiAgICAgIHBvc2l0aW9uLnBvc2l0aW9uLnkgKz0gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ucG9zaXRpb24ueSA+IHRoaXMuY29uZmlnLmhlaWdodCkge1xuICAgICAgcG9zaXRpb24ucG9zaXRpb24ueSAtPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgfVxuICAgIHBvc2l0aW9uLnJvdGF0aW9uICs9IG1vdGlvbi5hbmd1bGFyVmVsb2NpdHkgKiB0aW1lO1xuICAgIGlmIChtb3Rpb24uZGFtcGluZyA+IDApIHtcbiAgICAgIHhEYW1wID0gTWF0aC5hYnMoTWF0aC5jb3MocG9zaXRpb24ucm90YXRpb24pICogbW90aW9uLmRhbXBpbmcgKiB0aW1lKTtcbiAgICAgIHlEYW1wID0gTWF0aC5hYnMoTWF0aC5zaW4ocG9zaXRpb24ucm90YXRpb24pICogbW90aW9uLmRhbXBpbmcgKiB0aW1lKTtcbiAgICAgIGlmIChtb3Rpb24udmVsb2NpdHkueCA+IHhEYW1wKSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS54IC09IHhEYW1wO1xuICAgICAgfSBlbHNlIGlmIChtb3Rpb24udmVsb2NpdHkueCA8IC14RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueCArPSB4RGFtcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS54ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChtb3Rpb24udmVsb2NpdHkueSA+IHlEYW1wKSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS55IC09IHlEYW1wO1xuICAgICAgfSBlbHNlIGlmIChtb3Rpb24udmVsb2NpdHkueSA8IC15RGFtcCkge1xuICAgICAgICBtb3Rpb24udmVsb2NpdHkueSArPSB5RGFtcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdGlvbi52ZWxvY2l0eS55ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE1vdmVtZW50U3lzdGVtO1xuXG59KShhc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVtZW50X3N5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBSZW5kZXJOb2RlLCBhc2gsIGFzdGVyb2lkcyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5SZW5kZXJOb2RlID0gYXN0ZXJvaWRzLm5vZGVzLlJlbmRlck5vZGU7XG5cbmFzdGVyb2lkcy5zeXN0ZW1zLlJlbmRlclN5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFJlbmRlclN5c3RlbSwgX3N1cGVyKTtcblxuICBSZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmdyYXBoaWMgPSBudWxsO1xuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUubm9kZXMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIFJlbmRlclN5c3RlbShncmFwaGljKSB7XG4gICAgdGhpcy5ncmFwaGljID0gZ3JhcGhpYztcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBSZW5kZXJTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IGVuZ2luZS5nZXROb2RlTGlzdChSZW5kZXJOb2RlKTtcbiAgICBub2RlID0gdGhpcy5ub2Rlcy5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB0aGlzLmFkZFRvRGlzcGxheShub2RlKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICB9O1xuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUuYWRkVG9EaXNwbGF5ID0gZnVuY3Rpb24obm9kZSkge307XG5cbiAgUmVuZGVyU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRGlzcGxheSA9IGZ1bmN0aW9uKG5vZGUpIHt9O1xuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMubm9kZXMgPSBudWxsO1xuICB9O1xuXG4gIFJlbmRlclN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBkaXNwbGF5LCBncmFwaGljLCBub2RlLCBwb3NpdGlvbjtcbiAgICB0aGlzLmdyYXBoaWMuc2F2ZSgpO1xuICAgIHRoaXMuZ3JhcGhpYy50cmFuc2xhdGUoMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljLnJvdGF0ZSgwKTtcbiAgICB0aGlzLmdyYXBoaWMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ3JhcGhpYy5jYW52YXMud2lkdGgsIHRoaXMuZ3JhcGhpYy5jYW52YXMuaGVpZ2h0KTtcbiAgICBub2RlID0gdGhpcy5ub2Rlcy5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBkaXNwbGF5ID0gbm9kZS5kaXNwbGF5O1xuICAgICAgZ3JhcGhpYyA9IGRpc3BsYXkuZ3JhcGhpYztcbiAgICAgIHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcbiAgICAgIGdyYXBoaWMueCA9IHBvc2l0aW9uLnBvc2l0aW9uLng7XG4gICAgICBncmFwaGljLnkgPSBwb3NpdGlvbi5wb3NpdGlvbi55O1xuICAgICAgZ3JhcGhpYy5yb3RhdGlvbiA9IHBvc2l0aW9uLnJvdGF0aW9uO1xuICAgICAgZ3JhcGhpYy5kcmF3KCk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLmdyYXBoaWMucmVzdG9yZSgpO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJTeXN0ZW07XG5cbn0pKGFzaC5jb3JlLlN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlcl9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi8uLi9leGFtcGxlJyk7XG5cbmFzdGVyb2lkcy5zeXN0ZW1zLlN5c3RlbVByaW9yaXRpZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN5c3RlbVByaW9yaXRpZXMoKSB7fVxuXG4gIFN5c3RlbVByaW9yaXRpZXMucHJlVXBkYXRlID0gMTtcblxuICBTeXN0ZW1Qcmlvcml0aWVzLnVwZGF0ZSA9IDI7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5tb3ZlID0gMztcblxuICBTeXN0ZW1Qcmlvcml0aWVzLnJlc29sdmVDb2xsaXNpb25zID0gNDtcblxuICBTeXN0ZW1Qcmlvcml0aWVzLnN0YXRlTWFjaGluZXMgPSA1O1xuXG4gIFN5c3RlbVByaW9yaXRpZXMuYW5pbWF0ZSA9IDY7XG5cbiAgU3lzdGVtUHJpb3JpdGllcy5yZW5kZXIgPSA3O1xuXG4gIHJldHVybiBTeXN0ZW1Qcmlvcml0aWVzO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1fcHJpb3JpdGllcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBc3Rlcm9pZENvbGxpc2lvbk5vZGUsIEdhbWVOb2RlLCBXYWl0Rm9yU3RhcnROb2RlLCBhc2gsIGFzdGVyb2lkcyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXN0ZXJvaWRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXhhbXBsZScpO1xuXG5XYWl0Rm9yU3RhcnROb2RlID0gYXN0ZXJvaWRzLm5vZGVzLldhaXRGb3JTdGFydE5vZGU7XG5cbkFzdGVyb2lkQ29sbGlzaW9uTm9kZSA9IGFzdGVyb2lkcy5ub2Rlcy5Bc3Rlcm9pZENvbGxpc2lvbk5vZGU7XG5cbkdhbWVOb2RlID0gYXN0ZXJvaWRzLm5vZGVzLkdhbWVOb2RlO1xuXG5hc3Rlcm9pZHMuc3lzdGVtcy5XYWl0Rm9yU3RhcnRTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhXYWl0Rm9yU3RhcnRTeXN0ZW0sIF9zdXBlcik7XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUuY3JlYXRvciA9IG51bGw7XG5cbiAgV2FpdEZvclN0YXJ0U3lzdGVtLnByb3RvdHlwZS5nYW1lTm9kZXMgPSBudWxsO1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUud2FpdE5vZGVzID0gbnVsbDtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLmFzdGVyb2lkcyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gV2FpdEZvclN0YXJ0U3lzdGVtKGNyZWF0b3IpIHtcbiAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLndhaXROb2RlcyA9IGVuZ2luZS5nZXROb2RlTGlzdChXYWl0Rm9yU3RhcnROb2RlKTtcbiAgICB0aGlzLmdhbWVOb2RlcyA9IGVuZ2luZS5nZXROb2RlTGlzdChHYW1lTm9kZSk7XG4gICAgdGhpcy5hc3Rlcm9pZHMgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QoQXN0ZXJvaWRDb2xsaXNpb25Ob2RlKTtcbiAgfTtcblxuICBXYWl0Rm9yU3RhcnRTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB0aGlzLndhaXROb2RlcyA9IG51bGw7XG4gICAgdGhpcy5nYW1lTm9kZXMgPSBudWxsO1xuICB9O1xuXG4gIFdhaXRGb3JTdGFydFN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBhc3Rlcm9pZCwgZ2FtZSwgbm9kZTtcbiAgICBub2RlID0gdGhpcy53YWl0Tm9kZXMuaGVhZDtcbiAgICBnYW1lID0gdGhpcy5nYW1lTm9kZXMuaGVhZDtcbiAgICBpZiAobm9kZSAmJiBub2RlLndhaXQuc3RhcnRHYW1lICYmIGdhbWUpIHtcbiAgICAgIGFzdGVyb2lkID0gdGhpcy5hc3Rlcm9pZHMuaGVhZDtcbiAgICAgIHdoaWxlIChhc3Rlcm9pZCkge1xuICAgICAgICB0aGlzLmNyZWF0b3IuZGVzdHJveUVudGl0eShhc3Rlcm9pZC5lbnRpdHkpO1xuICAgICAgICBhc3Rlcm9pZCA9IGFzdGVyb2lkLm5leHQ7XG4gICAgICB9XG4gICAgICBnYW1lLnN0YXRlLnNldEZvclN0YXJ0KCk7XG4gICAgICBub2RlLndhaXQuc3RhcnRHYW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVFbnRpdHkobm9kZS5lbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gV2FpdEZvclN0YXJ0U3lzdGVtO1xuXG59KShhc2guY29yZS5TeXN0ZW0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0X2Zvcl9zdGFydF9zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXN0ZXJvaWRzO1xuXG5hc3Rlcm9pZHMgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5hc3Rlcm9pZHMudWkuUG9pbnQgPSAoZnVuY3Rpb24oKSB7XG4gIFBvaW50LnByb3RvdHlwZS54ID0gMDtcblxuICBQb2ludC5wcm90b3R5cGUueSA9IDA7XG5cbiAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHggIT0gbnVsbCA/IHggOiAwO1xuICAgIHRoaXMueSA9IHkgIT0gbnVsbCA/IHkgOiAwO1xuICB9XG5cbiAgUG9pbnQuZGlzdGFuY2UgPSBmdW5jdGlvbihwb2ludDEsIHBvaW50Mikge1xuICAgIHZhciBkeCwgZHk7XG4gICAgZHggPSBwb2ludDEueCAtIHBvaW50Mi54O1xuICAgIGR5ID0gcG9pbnQxLnkgLSBwb2ludDIueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfTtcblxuICBQb2ludC5wcm90b3R5cGUuZGlzdGFuY2VTcXVhcmVkVG8gPSBmdW5jdGlvbih0YXJnZXRQb2ludCkge1xuICAgIHZhciBkeCwgZHk7XG4gICAgZHggPSB0aGlzLnggLSB0YXJnZXRQb2ludC54O1xuICAgIGR5ID0gdGhpcy55IC0gdGFyZ2V0UG9pbnQueTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gIH07XG5cbiAgUG9pbnQucHJvdG90eXBlLmRpc3RhbmNlVG8gPSBmdW5jdGlvbih0YXJnZXRQb2ludCkge1xuICAgIHZhciBkeCwgZHk7XG4gICAgZHggPSB0aGlzLnggLSB0YXJnZXRQb2ludC54O1xuICAgIGR5ID0gdGhpcy55IC0gdGFyZ2V0UG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfTtcblxuICByZXR1cm4gUG9pbnQ7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvaW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIE5vZGVMaXN0LCBOb2RlUG9vbCwgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuTm9kZUxpc3QgPSBhc2guY29yZS5Ob2RlTGlzdDtcblxuTm9kZVBvb2wgPSBhc2guY29yZS5Ob2RlUG9vbDtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoZSBkZWZhdWx0IGNsYXNzIGZvciBtYW5hZ2luZyBhIE5vZGVMaXN0LiBUaGlzIGNsYXNzIGNyZWF0ZXMgdGhlIE5vZGVMaXN0IGFuZCBhZGRzIGFuZCByZW1vdmVzXG4gKiBub2RlcyB0by9mcm9tIHRoZSBsaXN0IGFzIHRoZSBlbnRpdGllcyBhbmQgdGhlIGNvbXBvbmVudHMgaW4gdGhlIGVuZ2luZSBjaGFuZ2UuXG4gKlxuICogSXQgdXNlcyB0aGUgYmFzaWMgZW50aXR5IG1hdGNoaW5nIHBhdHRlcm4gb2YgYW4gZW50aXR5IHN5c3RlbSAtIGVudGl0aWVzIGFyZSBhZGRlZCB0byB0aGUgbGlzdCBpZlxuICogdGhleSBjb250YWluIGNvbXBvbmVudHMgbWF0Y2hpbmcgYWxsIHRoZSBwdWJsaWMgcHJvcGVydGllcyBvZiB0aGUgbm9kZSBjbGFzcy5cbiAqL1xuXG5hc2guY29yZS5Db21wb25lbnRNYXRjaGluZ0ZhbWlseSA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5vZGVzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuZW50aXRpZXMgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5ub2RlQ2xhc3MgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubm9kZVBvb2wgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGNvbnN0cnVjdG9yLiBDcmVhdGVzIGEgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgdG8gcHJvdmlkZSBhIE5vZGVMaXN0IGZvciB0aGVcbiAgICogZ2l2ZW4gbm9kZSBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIG5vZGVDbGFzcyBUaGUgdHlwZSBvZiBub2RlIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIGEgTm9kZUxpc3QgZm9yLlxuICAgKiBAcGFyYW0gZW5naW5lIFRoZSBlbmdpbmUgdGhhdCB0aGlzIGZhbWlseSBpcyBtYW5hZ2luZyB0ZWggTm9kZUxpc3QgZm9yLlxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRNYXRjaGluZ0ZhbWlseShub2RlQ2xhc3MsIGVuZ2luZSkge1xuICAgIHRoaXMubm9kZUNsYXNzID0gbm9kZUNsYXNzO1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUgPSBfX2JpbmQodGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSwgdGhpcyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEluaXRpYWxpc2VzIHRoZSBjbGFzcy4gQ3JlYXRlcyB0aGUgbm9kZWxpc3QgYW5kIG90aGVyIHRvb2xzLiBBbmFseXNlcyB0aGUgbm9kZSB0byBkZXRlcm1pbmVcbiAgICogd2hhdCBjb21wb25lbnQgdHlwZXMgdGhlIG5vZGUgcmVxdWlyZXMuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUsIHR5cGUsIF9yZWY7XG4gICAgdGhpcy5ub2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy5ub2RlUG9vbCA9IG5ldyBOb2RlUG9vbCh0aGlzLm5vZGVDbGFzcywgdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cyk7XG4gICAgX3JlZiA9IHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHM7XG4gICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgIHR5cGUgPSBfcmVmW25hbWVdO1xuICAgICAgdGhpcy5jb21wb25lbnRzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFRoZSBub2RlbGlzdCBtYW5hZ2VkIGJ5IHRoaXMgZmFtaWx5LiBUaGlzIGlzIGEgcmVmZXJlbmNlIHRoYXQgcmVtYWlucyB2YWxpZCBhbHdheXNcbiAgICogc2luY2UgaXQgaXMgcmV0YWluZWQgYW5kIHJldXNlZCBieSBTeXN0ZW1zIHRoYXQgdXNlIHRoZSBsaXN0LiBpLmUuIHdlIG5ldmVyIHJlY3JlYXRlIHRoZSBsaXN0LFxuICAgKiB3ZSBhbHdheXMgbW9kaWZ5IGl0IGluIHBsYWNlLlxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUsIHtcbiAgICBub2RlTGlzdDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYW4gZW50aXR5IGhhcyBiZWVuIGFkZGVkIHRvIGl0LiBXZSBjaGVjayBpZiB0aGUgZW50aXR5IHNob3VsZCBiZSBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCBhZGQgaXQgaWYgYXBwcm9wcmlhdGUuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5uZXdFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aGlzLmFkZElmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYSBjb21wb25lbnQgaGFzIGJlZW4gYWRkZWQgdG8gYW4gZW50aXR5LiBXZSBjaGVjayBpZiB0aGUgZW50aXR5IGlzIG5vdCBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCBzaG91bGQgYmUsIGFuZCBhZGQgaXQgaWYgYXBwcm9wcmlhdGUuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRBZGRlZFRvRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHRoaXMuYWRkSWZNYXRjaChlbnRpdHkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhIGNvbXBvbmVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW4gZW50aXR5LiBXZSBjaGVjayBpZiB0aGUgcmVtb3ZlZCBjb21wb25lbnRcbiAgICogaXMgcmVxdWlyZWQgYnkgdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgaWYgc28sIHdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgaXMgaW4gdGhpcyB0aGlzIE5vZGVMaXN0IGFuZFxuICAgKiByZW1vdmUgaXQgaWYgc28uXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkRnJvbUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgbmFtZTtcbiAgICBuYW1lID0gY29tcG9uZW50Q2xhc3MubmFtZSAhPSBudWxsID8gY29tcG9uZW50Q2xhc3MubmFtZSA6IGNvbXBvbmVudENsYXNzO1xuICAgIGlmIChuYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgdGhpcy5yZW1vdmVJZk1hdGNoKGVudGl0eSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhbiBlbnRpdHkgaGFzIGJlZW4gcm1vdmVkIGZyb20gaXQuIFdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgaXMgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgcmVtb3ZlIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhpcy5yZW1vdmVJZk1hdGNoKGVudGl0eSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBJZiB0aGUgZW50aXR5IGlzIG5vdCBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0LCB0ZXN0cyB0aGUgY29tcG9uZW50cyBvZiB0aGUgZW50aXR5IHRvIHNlZVxuICAgKiBpZiBpdCBzaG91bGQgYmUgaW4gdGhpcyBOb2RlTGlzdCBhbmQgYWRkcyBpdCBpZiBzby5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmFkZElmTWF0Y2ggPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgY29tcG9uZW50Q2xhc3MsIG5hbWUsIG5vZGUsIF9yZWYsIF9yZWYxO1xuICAgIGlmICh0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICBfcmVmID0gdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cztcbiAgICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzID0gX3JlZltuYW1lXTtcbiAgICAgICAgaWYgKCFlbnRpdHkuaGFzKGNvbXBvbmVudENsYXNzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IHRoaXMubm9kZVBvb2wuZ2V0KCk7XG4gICAgICBub2RlLmVudGl0eSA9IGVudGl0eTtcbiAgICAgIF9yZWYxID0gdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cztcbiAgICAgIGZvciAobmFtZSBpbiBfcmVmMSkge1xuICAgICAgICBjb21wb25lbnRDbGFzcyA9IF9yZWYxW25hbWVdO1xuICAgICAgICBub2RlW25hbWVdID0gZW50aXR5LmdldChjb21wb25lbnRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXSA9IG5vZGU7XG4gICAgICB0aGlzLm5vZGVzLmFkZChub2RlKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmVzIHRoZSBlbnRpdHkgaWYgaXQgaXMgaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLnJlbW92ZUlmTWF0Y2ggPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZW50aXR5Lm5hbWUgaW4gdGhpcy5lbnRpdGllcykge1xuICAgICAgbm9kZSA9IHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdO1xuICAgICAgdGhpcy5ub2Rlcy5yZW1vdmUobm9kZSk7XG4gICAgICBpZiAodGhpcy5lbmdpbmUudXBkYXRpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5jYWNoZShub2RlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlQ29tcGxldGUuYWRkKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbGVhc2VzIHRoZSBub2RlcyB0aGF0IHdlcmUgYWRkZWQgdG8gdGhlIG5vZGUgcG9vbCBkdXJpbmcgdGhpcyBlbmdpbmUgdXBkYXRlLCBzbyB0aGV5IGNhblxuICAgKiBiZSByZXVzZWQuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5yZWxlYXNlTm9kZVBvb2xDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW5naW5lLnVwZGF0ZUNvbXBsZXRlLnJlbW92ZSh0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlKTtcbiAgICB0aGlzLm5vZGVQb29sLnJlbGVhc2VDYWNoZSgpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlcyBhbGwgbm9kZXMgZnJvbSB0aGUgTm9kZUxpc3QuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jbGVhblVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMubm9kZXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgdGhpcy5lbnRpdGllcy5yZW1vdmUobm9kZS5lbnRpdHkpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgdGhpcy5ub2Rlcy5yZW1vdmVBbGwoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHksIERpY3Rpb25hcnksIEVudGl0eUxpc3QsIFNpZ25hbDAsIFN5c3RlbUxpc3QsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkNvbXBvbmVudE1hdGNoaW5nRmFtaWx5ID0gYXNoLmNvcmUuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbkVudGl0eUxpc3QgPSBhc2guY29yZS5FbnRpdHlMaXN0O1xuXG5TaWduYWwwID0gYXNoLnNpZ25hbHMuU2lnbmFsMDtcblxuU3lzdGVtTGlzdCA9IGFzaC5jb3JlLlN5c3RlbUxpc3Q7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGUgRW5naW5lIGNsYXNzIGlzIHRoZSBjZW50cmFsIHBvaW50IGZvciBjcmVhdGluZyBhbmQgbWFuYWdpbmcgeW91ciBnYW1lIHN0YXRlLiBBZGRcbiAqIGVudGl0aWVzIGFuZCBzeXN0ZW1zIHRvIHRoZSBlbmdpbmUsIGFuZCBmZXRjaCBmYW1pbGllcyBvZiBub2RlcyBmcm9tIHRoZSBlbmdpbmUuXG4gKi9cblxuYXNoLmNvcmUuRW5naW5lID0gKGZ1bmN0aW9uKCkge1xuICBFbmdpbmUucHJvdG90eXBlLmVudGl0eU5hbWVzID0gbnVsbDtcblxuICBFbmdpbmUucHJvdG90eXBlLmVudGl0eUxpc3QgPSBudWxsO1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuc3lzdGVtTGlzdCA9IG51bGw7XG5cbiAgRW5naW5lLnByb3RvdHlwZS5mYW1pbGllcyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGVuZ2luZSBpcyBjdXJyZW50bHkgaW4gaXRzIHVwZGF0ZSBsb29wLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnVwZGF0aW5nID0gZmFsc2U7XG5cblxuICAvKlxuICAgKiBEaXNwYXRjaGVkIHdoZW4gdGhlIHVwZGF0ZSBsb29wIGVuZHMuIElmIHlvdSB3YW50IHRvIGFkZCBhbmQgcmVtb3ZlIHN5c3RlbXMgZnJvbSB0aGVcbiAgICogZW5naW5lIGl0IGlzIHVzdWFsbHkgYmVzdCBub3QgdG8gZG8gc28gZHVyaW5nIHRoZSB1cGRhdGUgbG9vcC4gVG8gYXZvaWQgdGhpcyB5b3UgY2FuXG4gICAqIGxpc3RlbiBmb3IgdGhpcyBzaWduYWwgYW5kIG1ha2UgdGhlIGNoYW5nZSB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS51cGRhdGVDb21wbGV0ZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGUgY2xhc3MgdXNlZCB0byBtYW5hZ2Ugbm9kZSBsaXN0cy4gSW4gbW9zdCBjYXNlcyB0aGUgZGVmYXVsdCBjbGFzcyBpcyBzdWZmaWNpZW50XG4gICAqIGJ1dCBpdCBpcyBleHBvc2VkIGhlcmUgc28gYWR2YW5jZWQgZGV2ZWxvcGVycyBjYW4gY2hvb3NlIHRvIGNyZWF0ZSBhbmQgdXNlIGFcbiAgICogZGlmZmVyZW50IGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGUgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIElGYW1pbHkgaW50ZXJmYWNlLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmZhbWlseUNsYXNzID0gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbiAgZnVuY3Rpb24gRW5naW5lKCkge1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlbW92ZWQgPSBfX2JpbmQodGhpcy5jb21wb25lbnRSZW1vdmVkLCB0aGlzKTtcbiAgICB0aGlzLmNvbXBvbmVudEFkZGVkID0gX19iaW5kKHRoaXMuY29tcG9uZW50QWRkZWQsIHRoaXMpO1xuICAgIHRoaXMuZW50aXR5TmFtZUNoYW5nZWQgPSBfX2JpbmQodGhpcy5lbnRpdHlOYW1lQ2hhbmdlZCwgdGhpcyk7XG4gICAgdGhpcy5lbnRpdHlMaXN0ID0gbmV3IEVudGl0eUxpc3QoKTtcbiAgICB0aGlzLmVudGl0eU5hbWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLnN5c3RlbUxpc3QgPSBuZXcgU3lzdGVtTGlzdCgpO1xuICAgIHRoaXMuZmFtaWxpZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUgPSBuZXcgU2lnbmFsMCgpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRW5naW5lLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIGEgdmVjdG9yIGNvbnRhaW5pbmcgYWxsIHRoZSBlbnRpdGllcyBpbiB0aGUgZW5naW5lLlxuICAgICAqL1xuICAgIGVudGl0aWVzOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZW50aXRpZXMsIGVudGl0eTtcbiAgICAgICAgZW50aXRpZXMgPSBbXTtcbiAgICAgICAgZW50aXR5ID0gdGhpcy5lbnRpdHlMaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChlbnRpdHkpIHtcbiAgICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICBlbnRpdHkgPSBlbnRpdHkubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogUmV0dXJucyBhIHZlY3RvciBjb250YWluaW5nIGFsbCB0aGUgc3lzdGVtcyBpbiB0aGUgZW5naW5lLlxuICAgICAqL1xuICAgIHN5c3RlbXM6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzeXN0ZW0sIHN5c3RlbXM7XG4gICAgICAgIHN5c3RlbXMgPSBbXTtcbiAgICAgICAgc3lzdGVtID0gdGhpcy5zeXN0ZW1MaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChzeXN0ZW0pIHtcbiAgICAgICAgICBzeXN0ZW1zLnB1c2goc3lzdGVtKTtcbiAgICAgICAgICBzeXN0ZW0gPSBzeXN0ZW0ubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3lzdGVtcztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLypcbiAgICogQWRkIGFuIGVudGl0eSB0byB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gYWRkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgaWYgKHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdKSB7XG4gICAgICB0aHJvdyBcIlRoZSBlbnRpdHkgbmFtZSBcIiArIGVudGl0eS5uYW1lICsgXCIgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBlbnRpdHkuXCI7XG4gICAgfVxuICAgIHRoaXMuZW50aXR5TGlzdC5hZGQoZW50aXR5KTtcbiAgICB0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXSA9IGVudGl0eTtcbiAgICBlbnRpdHkuY29tcG9uZW50QWRkZWQuYWRkKHRoaXMuY29tcG9uZW50QWRkZWQpO1xuICAgIGVudGl0eS5jb21wb25lbnRSZW1vdmVkLmFkZCh0aGlzLmNvbXBvbmVudFJlbW92ZWQpO1xuICAgIGVudGl0eS5uYW1lQ2hhbmdlZC5hZGQodGhpcy5lbnRpdHlOYW1lQ2hhbmdlZCk7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkubmV3RW50aXR5KGVudGl0eSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFuIGVudGl0eSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byByZW1vdmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdmFyIGVhY2gsIGZhbWlseSwgX3JlZjtcbiAgICBlbnRpdHkuY29tcG9uZW50QWRkZWQucmVtb3ZlKHRoaXMuY29tcG9uZW50QWRkZWQpO1xuICAgIGVudGl0eS5jb21wb25lbnRSZW1vdmVkLnJlbW92ZSh0aGlzLmNvbXBvbmVudFJlbW92ZWQpO1xuICAgIGVudGl0eS5uYW1lQ2hhbmdlZC5yZW1vdmUodGhpcy5lbnRpdHlOYW1lQ2hhbmdlZCk7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkucmVtb3ZlRW50aXR5KGVudGl0eSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXTtcbiAgICB0aGlzLmVudGl0eUxpc3QucmVtb3ZlKGVudGl0eSk7XG4gIH07XG5cbiAgRW5naW5lLnByb3RvdHlwZS5lbnRpdHlOYW1lQ2hhbmdlZCA9IGZ1bmN0aW9uKGVudGl0eSwgb2xkTmFtZSkge1xuICAgIGlmICh0aGlzLmVudGl0eU5hbWVzW29sZE5hbWVdID09PSBlbnRpdHkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVudGl0eU5hbWVzW29sZE5hbWVdO1xuICAgICAgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV0gPSBlbnRpdHk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFuIGVudGl0eSBiYXNlZCBuIGl0cyBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZW50aXR5XG4gICAqIEByZXR1cm4gVGhlIGVudGl0eSwgb3IgbnVsbCBpZiBubyBlbnRpdHkgd2l0aCB0aGF0IG5hbWUgZXhpc3RzIG9uIHRoZSBlbmdpbmVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXRFbnRpdHlCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5TmFtZXNbbmFtZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYWxsIGVudGl0aWVzIGZyb20gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVBbGxFbnRpdGllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlICh0aGlzLmVudGl0eUxpc3QuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVFbnRpdHkodGhpcy5lbnRpdHlMaXN0LmhlYWQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICBAcHJpdmF0ZVxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkuY29tcG9uZW50QWRkZWRUb0VudGl0eShlbnRpdHksIGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgQHByaXZhdGVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuZmFtaWxpZXM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIGZhbWlseSA9IF9yZWZbZWFjaF07XG4gICAgICBmYW1pbHkuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkoZW50aXR5LCBjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvbiBvZiBub2RlcyBmcm9tIHRoZSBlbmdpbmUsIGJhc2VkIG9uIHRoZSB0eXBlIG9mIHRoZSBub2RlIHJlcXVpcmVkLlxuICAgKlxuICAgKiA8cD5UaGUgZW5naW5lIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBOb2RlTGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QgYW5kXG4gICAqIHdpbGwga2VlcCBpdHMgY29udGVudHMgdXAgdG8gZGF0ZSBhcyBlbnRpdGllcyBhcmUgYWRkZWQgdG8gYW5kIHJlbW92ZWQgZnJvbSB0aGVcbiAgICogZW5naW5lLjwvcD5cbiAgICpcbiAgICogPHA+SWYgYSBOb2RlTGlzdCBpcyBubyBsb25nZXIgcmVxdWlyZWQsIHJlbGVhc2UgaXQgd2l0aCB0aGUgcmVsZWFzZU5vZGVMaXN0IG1ldGhvZC48L3A+XG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2Ygbm9kZSByZXF1aXJlZC5cbiAgICogQHJldHVybiBBIGxpbmtlZCBsaXN0IG9mIGFsbCBub2RlcyBvZiB0aGlzIHR5cGUgZnJvbSBhbGwgZW50aXRpZXMgaW4gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXROb2RlTGlzdCA9IGZ1bmN0aW9uKG5vZGVDbGFzcykge1xuICAgIHZhciBlbnRpdHksIGZhbWlseTtcbiAgICBpZiAobm9kZUNsYXNzLm5hbWUgaW4gdGhpcy5mYW1pbGllcykge1xuICAgICAgcmV0dXJuIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdLm5vZGVMaXN0O1xuICAgIH1cbiAgICBmYW1pbHkgPSBuZXcgdGhpcy5mYW1pbHlDbGFzcyhub2RlQ2xhc3MsIHRoaXMpO1xuICAgIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdID0gZmFtaWx5O1xuICAgIGVudGl0eSA9IHRoaXMuZW50aXR5TGlzdC5oZWFkO1xuICAgIHdoaWxlIChlbnRpdHkpIHtcbiAgICAgIGZhbWlseS5uZXdFbnRpdHkoZW50aXR5KTtcbiAgICAgIGVudGl0eSA9IGVudGl0eS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZmFtaWx5Lm5vZGVMaXN0O1xuICB9O1xuXG5cbiAgLypcbiAgICogSWYgYSBOb2RlTGlzdCBpcyBubyBsb25nZXIgcmVxdWlyZWQsIHRoaXMgbWV0aG9kIHdpbGwgc3RvcCB0aGUgZW5naW5lIHVwZGF0aW5nXG4gICAqIHRoZSBsaXN0IGFuZCB3aWxsIHJlbGVhc2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGxpc3Qgd2l0aGluIHRoZSBmcmFtZXdvcmtcbiAgICogY2xhc3NlcywgZW5hYmxpbmcgaXQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqXG4gICAqIDxwPkl0IGlzIG5vdCBlc3NlbnRpYWwgdG8gcmVsZWFzZSBhIGxpc3QsIGJ1dCByZWxlYXNpbmcgaXQgd2lsbCBmcmVlXG4gICAqIHVwIG1lbW9yeSBhbmQgcHJvY2Vzc29yIHJlc291cmNlcy48L3A+XG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2YgdGhlIG5vZGUgY2xhc3MgaWYgdGhlIGxpc3QgdG8gYmUgcmVsZWFzZWQuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVsZWFzZU5vZGVMaXN0ID0gZnVuY3Rpb24obm9kZUNsYXNzKSB7XG4gICAgaWYgKG5vZGVDbGFzcy5uYW1lIGluIHRoaXMuZmFtaWxpZXMpIHtcbiAgICAgIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdLmNsZWFuVXAoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGQgYSBzeXN0ZW0gdG8gdGhlIGVuZ2luZSwgYW5kIHNldCBpdHMgcHJpb3JpdHkgZm9yIHRoZSBvcmRlciBpbiB3aGljaCB0aGVcbiAgICogc3lzdGVtcyBhcmUgdXBkYXRlZCBieSB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLlxuICAgKlxuICAgKiA8cD5UaGUgcHJpb3JpdHkgZGljdGF0ZXMgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzeXN0ZW1zIGFyZSB1cGRhdGVkIGJ5IHRoZSBlbmdpbmUgdXBkYXRlXG4gICAqIGxvb3AuIExvd2VyIG51bWJlcnMgZm9yIHByaW9yaXR5IGFyZSB1cGRhdGVkIGZpcnN0LiBpLmUuIGEgcHJpb3JpdHkgb2YgMSBpc1xuICAgKiB1cGRhdGVkIGJlZm9yZSBhIHByaW9yaXR5IG9mIDIuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBzeXN0ZW0gdG8gYWRkIHRvIHRoZSBlbmdpbmUuXG4gICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgZm9yIHVwZGF0aW5nIHRoZSBzeXN0ZW1zIGR1cmluZyB0aGUgZW5naW5lIGxvb3AuIEFcbiAgICogbG93ZXIgbnVtYmVyIG1lYW5zIHRoZSBzeXN0ZW0gaXMgdXBkYXRlZCBzb29uZXIuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuYWRkU3lzdGVtID0gZnVuY3Rpb24oc3lzdGVtLCBwcmlvcml0eSkge1xuICAgIHN5c3RlbS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHN5c3RlbS5hZGRUb0VuZ2luZSh0aGlzKTtcbiAgICB0aGlzLnN5c3RlbUxpc3QuYWRkKHN5c3RlbSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgdGhlIHN5c3RlbSBpbnN0YW5jZSBvZiBhIHBhcnRpY3VsYXIgdHlwZSBmcm9tIHdpdGhpbiB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBzeXN0ZW1cbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2Ugb2YgdGhlIHN5c3RlbSB0eXBlIHRoYXQgaXMgaW4gdGhlIGVuZ2luZSwgb3JcbiAgICogbnVsbCBpZiBubyBzeXN0ZW1zIG9mIHRoaXMgdHlwZSBhcmUgaW4gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHN5c3RlbUxpc3QuZ2V0KHR5cGUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGEgc3lzdGVtIGZyb20gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgc3lzdGVtIHRvIHJlbW92ZSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlU3lzdGVtID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgdGhpcy5zeXN0ZW1MaXN0LnJlbW92ZShzeXN0ZW0pO1xuICAgIHN5c3RlbS5yZW1vdmVGcm9tRW5naW5lKHRoaXMpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFsbCBzeXN0ZW1zIGZyb20gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVBbGxTeXN0ZW1zID0gZnVuY3Rpb24oKSB7XG4gICAgd2hpbGUgKHRoaXMuc3lzdGVtTGlzdC5oZWFkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZVN5c3RlbSh0aGlzLnN5c3RlbUxpc3QuaGVhZCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogVXBkYXRlIHRoZSBlbmdpbmUuIFRoaXMgY2F1c2VzIHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AgdG8gcnVuLCBjYWxsaW5nIHVwZGF0ZSBvbiBhbGwgdGhlXG4gICAqIHN5c3RlbXMgaW4gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogPHA+VGhlIHBhY2thZ2UgYXNoLnRpY2sgY29udGFpbnMgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGVcbiAgICogYSBzdGVhZHkgb3IgdmFyaWFibGUgdGljayB0aGF0IGNhbGxzIHRoaXMgdXBkYXRlIG1ldGhvZC48L3A+XG4gICAqXG4gICAqIEB0aW1lIFRoZSBkdXJhdGlvbiwgaW4gc2Vjb25kcywgb2YgdGhpcyB1cGRhdGUgc3RlcC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICB0aGlzLnVwZGF0aW5nID0gdHJ1ZTtcbiAgICBzeXN0ZW0gPSB0aGlzLnN5c3RlbUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICBzeXN0ZW0udXBkYXRlKHRpbWUpO1xuICAgICAgc3lzdGVtID0gc3lzdGVtLm5leHQ7XG4gICAgfVxuICAgIHRoaXMudXBkYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLmRpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIFNpZ25hbDIsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDIgPSBhc2guc2lnbmFscy5TaWduYWwyO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogQW4gZW50aXR5IGlzIGNvbXBvc2VkIGZyb20gY29tcG9uZW50cy4gQXMgc3VjaCwgaXQgaXMgZXNzZW50aWFsbHkgYSBjb2xsZWN0aW9uIG9iamVjdCBmb3IgY29tcG9uZW50cy5cbiAqIFNvbWV0aW1lcywgdGhlIGVudGl0aWVzIGluIGEgZ2FtZSB3aWxsIG1pcnJvciB0aGUgYWN0dWFsIGNoYXJhY3RlcnMgYW5kIG9iamVjdHMgaW4gdGhlIGdhbWUsIGJ1dCB0aGlzXG4gKiBpcyBub3QgbmVjZXNzYXJ5LlxuICpcbiAqIDxwPkNvbXBvbmVudHMgYXJlIHNpbXBsZSB2YWx1ZSBvYmplY3RzIHRoYXQgY29udGFpbiBkYXRhIHJlbGV2YW50IHRvIHRoZSBlbnRpdHkuIEVudGl0aWVzXG4gKiB3aXRoIHNpbWlsYXIgZnVuY3Rpb25hbGl0eSB3aWxsIGhhdmUgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGNvbXBvbmVudHMuIFNvIHdlIG1pZ2h0IGhhdmVcbiAqIGEgcG9zaXRpb24gY29tcG9uZW50PC9wPlxuICpcbiAqIDxwPjxjb2RlPmNsYXNzIFBvc2l0aW9uQ29tcG9uZW50XG4gKiB7XG4gKiAgIHB1YmxpYyB2YXIgeDpGbG9hdDtcbiAqICAgcHVibGljIHZhciB5OkZsb2F0O1xuICogfTwvY29kZT48L3A+XG4gKlxuICogPHA+QWxsIGVudGl0aWVzIHRoYXQgaGF2ZSBhIHBvc2l0aW9uIGluIHRoZSBnYW1lIHdvcmxkLCB3aWxsIGhhdmUgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gKiBwb3NpdGlvbiBjb21wb25lbnQuIFN5c3RlbXMgb3BlcmF0ZSBvbiBlbnRpdGllcyBiYXNlZCBvbiB0aGUgY29tcG9uZW50cyB0aGV5IGhhdmUuPC9wPlxuICovXG5cbmFzaC5jb3JlLkVudGl0eSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWVDb3VudDtcblxuICBuYW1lQ291bnQgPSAwO1xuXG5cbiAgLypcbiAgICogT3B0aW9uYWwsIGdpdmUgdGhlIGVudGl0eSBhIG5hbWUuIFRoaXMgY2FuIGhlbHAgd2l0aCBkZWJ1Z2dpbmcgYW5kIHdpdGggc2VyaWFsaXNpbmcgdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5fbmFtZSA9ICcnO1xuXG5cbiAgLypcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aGVuIGEgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogRGlzcGF0Y2hlZCB3aGVuIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHkgY2hhbmdlcy4gVXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBlbmdpbmUgdG8gdHJhY2sgZW50aXRpZXMgYmFzZWQgb24gdGhlaXIgbmFtZXMuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUubmFtZUNoYW5nZWQgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgRW50aXR5LnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuICBmdW5jdGlvbiBFbnRpdHkobmFtZSkge1xuICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgIG5hbWUgPSAnJztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAvKlxuICAgICAgICogQWxsIGVudGl0aWVzIGhhdmUgYSBuYW1lLiBJZiBubyBuYW1lIGlzIHNldCwgYSBkZWZhdWx0IG5hbWUgaXMgdXNlZC4gTmFtZXMgYXJlIHVzZWQgdG9cbiAgICAgICAqIGZldGNoIHNwZWNpZmljIGVudGl0aWVzIGZyb20gdGhlIGVuZ2luZSwgYW5kIGNhbiBhbHNvIGhlbHAgdG8gaWRlbnRpZnkgYW4gZW50aXR5IHdoZW4gZGVidWdnaW5nLlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXM7XG4gICAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBwcmV2aW91cyA9IHRoaXMuX25hbWU7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lQ2hhbmdlZC5kaXNwYXRjaCh0aGlzLCBwcmV2aW91cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jb21wb25lbnRBZGRlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZW1vdmVkID0gbmV3IFNpZ25hbDIoKTtcbiAgICB0aGlzLm5hbWVDaGFuZ2VkID0gbmV3IFNpZ25hbDIoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIl9lbnRpdHlcIiArICgrK25hbWVDb3VudCk7XG4gICAgfVxuICB9XG5cblxuICAvKlxuICAgKiBBZGQgYSBjb21wb25lbnQgdG8gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IG9iamVjdCB0byBhZGQuXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGUgY29tcG9uZW50XG4gICAqIGV4dGVuZHMgYW5vdGhlciBjb21wb25lbnQgY2xhc3MgYW5kIHlvdSB3YW50IHRoZSBmcmFtZXdvcmsgdG8gdHJlYXQgdGhlIGNvbXBvbmVudCBhcyBvZlxuICAgKiB0aGUgYmFzZSBjbGFzcyB0eXBlLiBJZiBub3Qgc2V0LCB0aGUgY2xhc3MgdHlwZSBpcyBkZXRlcm1pbmVkIGRpcmVjdGx5IGZyb20gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHJldHVybiBBIHJlZmVyZW5jZSB0byB0aGUgZW50aXR5LiBUaGlzIGVuYWJsZXMgdGhlIGNoYWluaW5nIG9mIGNhbGxzIHRvIGFkZCwgdG8gbWFrZVxuICAgKiBjcmVhdGluZyBhbmQgY29uZmlndXJpbmcgZW50aXRpZXMgY2xlYW5lci4gZS5nLlxuICAgKlxuICAgKiA8Y29kZT52YXIgZW50aXR5OkVudGl0eSA9IG5ldyBFbnRpdHkoKVxuICAgKiAgICAgLmFkZChuZXcgUG9zaXRpb24oMTAwLCAyMDApXG4gICAqICAgICAuYWRkKG5ldyBEaXNwbGF5KG5ldyBQbGF5ZXJDbGlwKCkpOzwvY29kZT5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb21wb25lbnQsIGNvbXBvbmVudENsYXNzKSB7XG4gICAgaWYgKGNvbXBvbmVudENsYXNzID09IG51bGwpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgIH1cbiAgICBpZiAoY29tcG9uZW50Q2xhc3MubmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudENsYXNzLm5hbWVdID0gY29tcG9uZW50O1xuICAgIHRoaXMuY29tcG9uZW50QWRkZWQuZGlzcGF0Y2godGhpcywgY29tcG9uZW50Q2xhc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHJlbW92ZWQuXG4gICAqIEByZXR1cm4gdGhlIGNvbXBvbmVudCwgb3IgbnVsbCBpZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGVudGl0eVxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgbmFtZTtcbiAgICBuYW1lID0gY29tcG9uZW50Q2xhc3MubmFtZSAhPSBudWxsID8gY29tcG9uZW50Q2xhc3MubmFtZSA6IGNvbXBvbmVudENsYXNzO1xuICAgIGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tuYW1lXTtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBkZWxldGUgdGhpcy5jb21wb25lbnRzW25hbWVdO1xuICAgICAgdGhpcy5jb21wb25lbnRSZW1vdmVkLmRpc3BhdGNoKHRoaXMsIG5hbWUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYSBjb21wb25lbnQgZnJvbSB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQgcmVxdWVzdGVkLlxuICAgKiBAcmV0dXJuIFRoZSBjb21wb25lbnQsIG9yIG51bGwgaWYgbm9uZSB3YXMgZm91bmQuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudENsYXNzLm5hbWVdO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFsbCBjb21wb25lbnRzIGZyb20gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHJldHVybiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBvbiB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wb25lbnQsIGNvbXBvbmVudEFycmF5LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBjb21wb25lbnRBcnJheSA9IFtdO1xuICAgIF9yZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSBfcmVmW19pXTtcbiAgICAgIGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudEFycmF5O1xuICB9O1xuXG5cbiAgLypcbiAgICogRG9lcyB0aGUgZW50aXR5IGhhdmUgYSBjb21wb25lbnQgb2YgYSBwYXJ0aWN1bGFyIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCBzb3VnaHQuXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgZW50aXR5IGhhcyBhIGNvbXBvbmVudCBvZiB0aGUgdHlwZSwgZmFsc2UgaWYgbm90LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyBmb3IgYSBsaW5rZWQgbGlzdCBvZiBlbnRpdGllcy4gVXNlZCBpbnNpZGUgdGhlIGZyYW1ld29yayBmb3JcbiAqIG1hbmFnaW5nIHRoZSBlbnRpdGllcy5cbiAqL1xuXG5hc2guY29yZS5FbnRpdHlMaXN0ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFbnRpdHlMaXN0KCkge31cblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gZW50aXR5O1xuICAgICAgZW50aXR5Lm5leHQgPSBlbnRpdHkucHJldmlvdXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IGVudGl0eTtcbiAgICAgIGVudGl0eS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIGVudGl0eS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMudGFpbCA9IGVudGl0eTtcbiAgICB9XG4gIH07XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gZW50aXR5KSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gZW50aXR5KSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgfVxuICAgIGlmIChlbnRpdHkucHJldmlvdXMpIHtcbiAgICAgIGVudGl0eS5wcmV2aW91cy5uZXh0ID0gZW50aXR5Lm5leHQ7XG4gICAgfVxuICAgIGlmIChlbnRpdHkubmV4dCkge1xuICAgICAgZW50aXR5Lm5leHQucHJldmlvdXMgPSBlbnRpdHkucHJldmlvdXM7XG4gICAgfVxuICB9O1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbnRpdHk7XG4gICAgd2hpbGUgKHRoaXMuaGVhZCkge1xuICAgICAgZW50aXR5ID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICBlbnRpdHkucHJldmlvdXMgPSBudWxsO1xuICAgICAgZW50aXR5Lm5leHQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHlMaXN0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlfbGlzdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGUgaW50ZXJmYWNlIGZvciBjbGFzc2VzIHRoYXQgYXJlIHVzZWQgdG8gbWFuYWdlIE5vZGVMaXN0cyAoc2V0IGFzIHRoZSBmYW1pbHlDbGFzcyBwcm9wZXJ0eVxuICogaW4gdGhlIEVuZ2luZSBvYmplY3QpLiBNb3N0IGRldmVsb3BlcnMgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyBzaW5jZSB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICogaXMgdXNlZCBieSBkZWZhdWx0IGFuZCBzdWl0cyBtb3N0IG5lZWRzLlxuICovXG5cbmFzaC5jb3JlLkZhbWlseSA9IChmdW5jdGlvbigpIHtcbiAgRmFtaWx5LnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBOb2RlTGlzdCBtYW5hZ2VkIGJ5IHRoaXMgY2xhc3MuIFRoaXMgc2hvdWxkIGJlIGEgcmVmZXJlbmNlIHRoYXQgcmVtYWlucyB2YWxpZCBhbHdheXNcbiAgICogc2luY2UgaXQgaXMgcmV0YWluZWQgYW5kIHJldXNlZCBieSBTeXN0ZW1zIHRoYXQgdXNlIHRoZSBsaXN0LiBpLmUuIG5ldmVyIHJlY3JlYXRlIHRoZSBsaXN0LFxuICAgKiBhbHdheXMgbW9kaWZ5IGl0IGluIHBsYWNlLlxuICAgKi9cblxuICBmdW5jdGlvbiBGYW1pbHkoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgbm9kZUxpc3Q6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICAvKlxuICAgKiBBbiBlbnRpdHkgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGVuZ2luZS4gSXQgbWF5IGFscmVhZHkgaGF2ZSBjb21wb25lbnRzIHNvIHRlc3QgdGhlIGVudGl0eVxuICAgKiBmb3IgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUubmV3RW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFuIGVudGl0eSBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIGVuZ2luZS4gSWYgaXQncyBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGl0IHNob3VsZCBiZSByZW1vdmVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBIGNvbXBvbmVudCBoYXMgYmVlbiBhZGRlZCB0byBhbiBlbnRpdHkuIFRlc3Qgd2hldGhlciB0aGUgZW50aXR5J3MgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3NcbiAgICogTm9kZUxpc3Qgc2hvdWxkIGJlIG1vZGlmaWVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkVG9FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEEgY29tcG9uZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbiBlbnRpdHkuIFRlc3Qgd2hldGhlciB0aGUgZW50aXR5J3MgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3NcbiAgICogTm9kZUxpc3Qgc2hvdWxkIGJlIG1vZGlmaWVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWRGcm9tRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBUaGUgZmFtaWx5IGlzIGFib3V0IHRvIGJlIGRpc2NhcmRlZC4gQ2xlYW4gdXAgYWxsIHByb3BlcnRpZXMgYXMgbmVjZXNzYXJ5LiBVc3VhbGx5LCB5b3Ugd2lsbFxuICAgKiB3YW50IHRvIGVtcHR5IHRoZSBOb2RlTGlzdCBhdCB0aGlzIHRpbWUuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY2xlYW5VcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cbiAgcmV0dXJuIEZhbWlseTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFtaWx5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5jb3JlLk5vZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE5vZGUoKSB7fVxuXG4gIE5vZGUucHJvdG90eXBlLmVudGl0eSA9IG51bGw7XG5cbiAgTm9kZS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIE5vZGUucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIHJldHVybiBOb2RlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDEsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDEgPSBhc2guc2lnbmFscy5TaWduYWwxO1xuXG5cbi8qXG4gKiBBIGNvbGxlY3Rpb24gb2Ygbm9kZXMuXG4gKlxuICogPHA+U3lzdGVtcyB3aXRoaW4gdGhlIGVuZ2luZSBhY2Nlc3MgdGhlIGNvbXBvbmVudHMgb2YgZW50aXRpZXMgdmlhIE5vZGVMaXN0cy4gQSBOb2RlTGlzdCBjb250YWluc1xuICogYSBub2RlIGZvciBlYWNoIEVudGl0eSBpbiB0aGUgZW5naW5lIHRoYXQgaGFzIGFsbCB0aGUgY29tcG9uZW50cyByZXF1aXJlZCBieSB0aGUgbm9kZS4gVG8gaXRlcmF0ZVxuICogb3ZlciBhIE5vZGVMaXN0LCBzdGFydCBmcm9tIHRoZSBoZWFkIGFuZCBzdGVwIHRvIHRoZSBuZXh0IG9uIGVhY2ggbG9vcCwgdW50aWwgdGhlIHJldHVybmVkIHZhbHVlXG4gKiBpcyBudWxsLiBPciBqdXN0IHVzZSBmb3IgaW4gc3ludGF4LjwvcD5cbiAqXG4gKiA8cD5mb3IgKG5vZGUgaW4gbm9kZUxpc3QpXG4gKiB7XG4gKiAgIC8vIGRvIHN0dWZmXG4gKiB9PC9wPlxuICpcbiAqIDxwPkl0IGlzIHNhZmUgdG8gcmVtb3ZlIGl0ZW1zIGZyb20gYSBub2RlbGlzdCBkdXJpbmcgdGhlIGxvb3AuIFdoZW4gYSBOb2RlIGlzIHJlbW92ZWQgZm9ybSB0aGVcbiAqIE5vZGVMaXN0IGl0J3MgcHJldmlvdXMgYW5kIG5leHQgcHJvcGVydGllcyBzdGlsbCBwb2ludCB0byB0aGUgbm9kZXMgdGhhdCB3ZXJlIGJlZm9yZSBhbmQgYWZ0ZXJcbiAqIGl0IGluIHRoZSBOb2RlTGlzdCBqdXN0IGJlZm9yZSBpdCB3YXMgcmVtb3ZlZC48L3A+XG4gKi9cblxuYXNoLmNvcmUuTm9kZUxpc3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgLypcbiAgICogVGhlIGZpcnN0IGl0ZW0gaW4gdGhlIG5vZGUgbGlzdCwgb3IgbnVsbCBpZiB0aGUgbGlzdCBjb250YWlucyBubyBub2Rlcy5cbiAgICovXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBsYXN0IGl0ZW0gaW4gdGhlIG5vZGUgbGlzdCwgb3IgbnVsbCBpZiB0aGUgbGlzdCBjb250YWlucyBubyBub2Rlcy5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQSBzaWduYWwgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW5ldmVyIGEgbm9kZSBpcyBhZGRlZCB0byB0aGUgbm9kZSBsaXN0LlxuICAgKlxuICAgKiA8cD5UaGUgc2lnbmFsIHdpbGwgcGFzcyBhIHNpbmdsZSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVycyAtIHRoZSBub2RlIHRoYXQgd2FzIGFkZGVkLjwvcD5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLm5vZGVBZGRlZCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgYSBub2RlIGlzIHJlbW92ZWQgZnJvbSB0aGUgbm9kZSBsaXN0LlxuICAgKlxuICAgKiA8cD5UaGUgc2lnbmFsIHdpbGwgcGFzcyBhIHNpbmdsZSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVycyAtIHRoZSBub2RlIHRoYXQgd2FzIHJlbW92ZWQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubm9kZVJlbW92ZWQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIE5vZGVMaXN0KCkge1xuICAgIHRoaXMubm9kZUFkZGVkID0gbmV3IFNpZ25hbDEoKTtcbiAgICB0aGlzLm5vZGVSZW1vdmVkID0gbmV3IFNpZ25hbDEoKTtcbiAgfVxuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICBub2RlLm5leHQgPSBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cbiAgICB0aGlzLm5vZGVBZGRlZC5kaXNwYXRjaChub2RlKTtcbiAgfTtcblxuICBOb2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgfVxuICAgIGlmIChub2RlLnByZXZpb3VzKSB7XG4gICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgfVxuICAgIHRoaXMubm9kZVJlbW92ZWQuZGlzcGF0Y2gobm9kZSk7XG4gIH07XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmhlYWQpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMubm9kZVJlbW92ZWQuZGlzcGF0Y2gobm9kZSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cblxuICAvKlxuICAgKiB0cnVlIGlmIHRoZSBsaXN0IGlzIGVtcHR5LCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE5vZGVMaXN0LnByb3RvdHlwZSwge1xuICAgIGVtcHR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkID09PSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvKlxuICAgKiBTd2FwcyB0aGUgcG9zaXRpb25zIG9mIHR3byBub2RlcyBpbiB0aGUgbGlzdC4gVXNlZnVsIHdoZW4gc29ydGluZyBhIGxpc3QuXG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24obm9kZTEsIG5vZGUyKSB7XG4gICAgdmFyIHRlbXA7XG4gICAgaWYgKG5vZGUxLnByZXZpb3VzID09PSBub2RlMikge1xuICAgICAgbm9kZTEucHJldmlvdXMgPSBub2RlMi5wcmV2aW91cztcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gbm9kZTE7XG4gICAgICBub2RlMi5uZXh0ID0gbm9kZTEubmV4dDtcbiAgICAgIG5vZGUxLm5leHQgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKG5vZGUyLnByZXZpb3VzID09PSBub2RlMSkge1xuICAgICAgbm9kZTIucHJldmlvdXMgPSBub2RlMS5wcmV2aW91cztcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTI7XG4gICAgICBub2RlMS5uZXh0ID0gbm9kZTIubmV4dDtcbiAgICAgIG5vZGUyLm5leHQgPSBub2RlMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcCA9IG5vZGUxLnByZXZpb3VzO1xuICAgICAgbm9kZTEucHJldmlvdXMgPSBub2RlMi5wcmV2aW91cztcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gdGVtcDtcbiAgICAgIHRlbXAgPSBub2RlMS5uZXh0O1xuICAgICAgbm9kZTEubmV4dCA9IG5vZGUyLm5leHQ7XG4gICAgICBub2RlMi5uZXh0ID0gdGVtcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZTEpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGUyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkID09PSBub2RlMikge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUxKSB7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFpbCA9PT0gbm9kZTIpIHtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAobm9kZTEucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIG5vZGUxLnByZXZpb3VzLm5leHQgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKG5vZGUyLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBub2RlMi5wcmV2aW91cy5uZXh0ID0gbm9kZTI7XG4gICAgfVxuICAgIGlmIChub2RlMS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlMS5uZXh0LnByZXZpb3VzID0gbm9kZTE7XG4gICAgfVxuICAgIGlmIChub2RlMi5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlMi5uZXh0LnByZXZpb3VzID0gbm9kZTI7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUGVyZm9ybXMgYW4gaW5zZXJ0aW9uIHNvcnQgb24gdGhlIG5vZGUgbGlzdC4gSW4gZ2VuZXJhbCwgaW5zZXJ0aW9uIHNvcnQgaXMgdmVyeSBlZmZpY2llbnQgd2l0aCBzaG9ydCBsaXN0c1xuICAgKiBhbmQgd2l0aCBsaXN0cyB0aGF0IGFyZSBtb3N0bHkgc29ydGVkLCBidXQgaXMgaW5lZmZpY2llbnQgd2l0aCBsYXJnZSBsaXN0cyB0aGF0IGFyZSByYW5kb21seSBvcmRlcmVkLlxuICAgKlxuICAgKiA8cD5UaGUgc29ydCBmdW5jdGlvbiB0YWtlcyB0d28gbm9kZXMgYW5kIHJldHVybnMgYW4gSW50LjwvcD5cbiAgICpcbiAgICogPHA+PGNvZGU+ZnVuY3Rpb24gc29ydEZ1bmN0aW9uKCBub2RlMSA6IE1vY2tOb2RlLCBub2RlMiA6IE1vY2tOb2RlICkgOiBJbnQ8L2NvZGU+PC9wPlxuICAgKlxuICAgKiA8cD5JZiB0aGUgcmV0dXJuZWQgbnVtYmVyIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGUgZmlyc3Qgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBzZWNvbmQuIElmIGl0IGlzIGdyZWF0ZXJcbiAgICogdGhhbiB6ZXJvIHRoZSBzZWNvbmQgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBmaXJzdC4gSWYgaXQgaXMgemVybyB0aGUgb3JkZXIgb2YgdGhlIG5vZGVzIGRvZXNuJ3QgbWF0dGVyXG4gICAqIGFuZCB0aGUgb3JpZ2luYWwgb3JkZXIgd2lsbCBiZSByZXRhaW5lZC48L3A+XG4gICAqXG4gICAqIDxwPlRoaXMgaW5zZXJ0aW9uIHNvcnQgaW1wbGVtZW50YXRpb24gcnVucyBpbiBwbGFjZSBzbyBubyBvYmplY3RzIGFyZSBjcmVhdGVkIGR1cmluZyB0aGUgc29ydC48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5pbnNlcnRpb25Tb3J0ID0gZnVuY3Rpb24oc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIG5vZGUsIG90aGVyLCByZW1haW5zO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHRoaXMudGFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1haW5zID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgbm9kZSA9IHJlbWFpbnM7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlbWFpbnMgPSBub2RlLm5leHQ7XG4gICAgICBvdGhlciA9IG5vZGUucHJldmlvdXM7XG4gICAgICB3aGlsZSAob3RoZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHNvcnRGdW5jdGlvbihub2RlLCBvdGhlcikgPj0gMCkge1xuICAgICAgICAgIGlmIChub2RlICE9PSBvdGhlci5uZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLm5leHQgPSBvdGhlci5uZXh0O1xuICAgICAgICAgICAgbm9kZS5wcmV2aW91cyA9IG90aGVyO1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgICAgIG90aGVyLm5leHQgPSBub2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvdGhlciA9IG90aGVyLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG90aGVyID09PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSByZW1haW5zO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFBlcmZvcm1zIGEgbWVyZ2Ugc29ydCBvbiB0aGUgbm9kZSBsaXN0LiBJbiBnZW5lcmFsLCBtZXJnZSBzb3J0IGlzIG1vcmUgZWZmaWNpZW50IHRoYW4gaW5zZXJ0aW9uIHNvcnRcbiAgICogd2l0aCBsb25nIGxpc3RzIHRoYXQgYXJlIHZlcnkgdW5zb3J0ZWQuXG4gICAqXG4gICAqIDxwPlRoZSBzb3J0IGZ1bmN0aW9uIHRha2VzIHR3byBub2RlcyBhbmQgcmV0dXJucyBhbiBJbnQuPC9wPlxuICAgKlxuICAgKiA8cD48Y29kZT5mdW5jdGlvbiBzb3J0RnVuY3Rpb24oIG5vZGUxIDogTW9ja05vZGUsIG5vZGUyIDogTW9ja05vZGUgKSA6IEludDwvY29kZT48L3A+XG4gICAqXG4gICAqIDxwPklmIHRoZSByZXR1cm5lZCBudW1iZXIgaXMgbGVzcyB0aGFuIHplcm8sIHRoZSBmaXJzdCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIHNlY29uZC4gSWYgaXQgaXMgZ3JlYXRlclxuICAgKiB0aGFuIHplcm8gdGhlIHNlY29uZCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIGZpcnN0LiBJZiBpdCBpcyB6ZXJvIHRoZSBvcmRlciBvZiB0aGUgbm9kZXMgZG9lc24ndCBtYXR0ZXIuPC9wPlxuICAgKlxuICAgKiA8cD5UaGlzIG1lcmdlIHNvcnQgaW1wbGVtZW50YXRpb24gY3JlYXRlcyBhbmQgdXNlcyBhIHNpbmdsZSBWZWN0b3IgZHVyaW5nIHRoZSBzb3J0IG9wZXJhdGlvbi48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5tZXJnZVNvcnQgPSBmdW5jdGlvbihzb3J0RnVuY3Rpb24pIHtcbiAgICB2YXIgZW5kLCBsaXN0cywgbmV4dCwgc3RhcnQ7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gdGhpcy50YWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpc3RzID0gW107XG4gICAgc3RhcnQgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICAgIHdoaWxlIChlbmQubmV4dCAhPT0gbnVsbCAmJiBzb3J0RnVuY3Rpb24oZW5kLCBlbmQubmV4dCkgPD0gMCkge1xuICAgICAgICBlbmQgPSBlbmQubmV4dDtcbiAgICAgIH1cbiAgICAgIG5leHQgPSBlbmQubmV4dDtcbiAgICAgIHN0YXJ0LnByZXZpb3VzID0gZW5kLm5leHQgPSBudWxsO1xuICAgICAgbGlzdHMucHVzaChzdGFydCk7XG4gICAgICBzdGFydCA9IG5leHQ7XG4gICAgfVxuICAgIHdoaWxlIChsaXN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBsaXN0cy5wdXNoKHRoaXMubWVyZ2UobGlzdHMuc2hpZnQoKSwgbGlzdHMuc2hpZnQoKSwgc29ydEZ1bmN0aW9uKSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZCA9IGxpc3RzWzBdO1xuICAgIHdoaWxlICh0aGlzLnRhaWwubmV4dCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLm5leHQ7XG4gICAgfVxuICB9O1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKGhlYWQxLCBoZWFkMiwgc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIGhlYWQsIG5vZGU7XG4gICAgaWYgKHNvcnRGdW5jdGlvbihoZWFkMSwgaGVhZDIpIDw9IDApIHtcbiAgICAgIGhlYWQgPSBub2RlID0gaGVhZDE7XG4gICAgICBoZWFkMSA9IGhlYWQxLm5leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBub2RlID0gaGVhZDI7XG4gICAgICBoZWFkMiA9IGhlYWQyLm5leHQ7XG4gICAgfVxuICAgIHdoaWxlIChoZWFkMSAhPT0gbnVsbCAmJiBoZWFkMiAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNvcnRGdW5jdGlvbihoZWFkMSwgaGVhZDIpIDw9IDApIHtcbiAgICAgICAgbm9kZS5uZXh0ID0gaGVhZDE7XG4gICAgICAgIGhlYWQxLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IGhlYWQxO1xuICAgICAgICBoZWFkMSA9IGhlYWQxLm5leHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm5leHQgPSBoZWFkMjtcbiAgICAgICAgaGVhZDIucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlID0gaGVhZDI7XG4gICAgICAgIGhlYWQyID0gaGVhZDIubmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhlYWQxICE9PSBudWxsKSB7XG4gICAgICBub2RlLm5leHQgPSBoZWFkMTtcbiAgICAgIGhlYWQxLnByZXZpb3VzID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5uZXh0ID0gaGVhZDI7XG4gICAgICBoZWFkMi5wcmV2aW91cyA9IG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xuICB9O1xuXG4gIHJldHVybiBOb2RlTGlzdDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgaW50ZXJuYWwgY2xhc3MgbWFpbnRhaW5zIGEgcG9vbCBvZiBkZWxldGVkIG5vZGVzIGZvciByZXVzZSBieSB0aGUgZnJhbWV3b3JrLiBUaGlzIHJlZHVjZXMgdGhlIG92ZXJoZWFkXG4gKiBmcm9tIG9iamVjdCBjcmVhdGlvbiBhbmQgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICpcbiAqIEJlY2F1c2Ugbm9kZXMgbWF5IGJlIGRlbGV0ZWQgZnJvbSBhIE5vZGVMaXN0IHdoaWxlIGluIHVzZSwgYnkgZGVsZXRpbmcgTm9kZXMgZnJvbSBhIE5vZGVMaXN0XG4gKiB3aGlsZSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgTm9kZUxpc3QsIHRoZSBwb29sIGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2Ygbm9kZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhlIHBvb2xcbiAqIGJ1dCBzaG91bGQgbm90IGJlIHJldXNlZCB5ZXQuIFRoZXkgYXJlIHRoZW4gcmVsZWFzZWQgaW50byB0aGUgcG9vbCBieSBjYWxsaW5nIHRoZSByZWxlYXNlQ2FjaGUgbWV0aG9kLlxuICovXG5cbmFzaC5jb3JlLk5vZGVQb29sID0gKGZ1bmN0aW9uKCkge1xuICBOb2RlUG9vbC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLm5vZGVDbGFzcyA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlVGFpbCA9IG51bGw7XG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNvbXBvbmVudHMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIHBvb2wgZm9yIHRoZSBnaXZlbiBub2RlIGNsYXNzLlxuICAgKi9cblxuICBmdW5jdGlvbiBOb2RlUG9vbChub2RlQ2xhc3MsIGNvbXBvbmVudHMpIHtcbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICB9XG5cblxuICAvKlxuICAgKiBGZXRjaGVzIGEgbm9kZSBmcm9tIHRoZSBwb29sLlxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMudGFpbCkge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5ub2RlQ2xhc3MoKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGEgbm9kZSB0byB0aGUgcG9vbC5cbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWU7XG4gICAgZm9yIChjb21wb25lbnROYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgbm9kZVtjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgfVxuICAgIG5vZGUuZW50aXR5ID0gbnVsbDtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy50YWlsID0gbm9kZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZHMgYSBub2RlIHRvIHRoZSBjYWNoZVxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMuY2FjaGVUYWlsO1xuICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbGVhc2VzIGFsbCBub2RlcyBmcm9tIHRoZSBjYWNoZSBpbnRvIHRoZSBwb29sXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5yZWxlYXNlQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAodGhpcy5jYWNoZVRhaWwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgIHRoaXMuZGlzcG9zZShub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE5vZGVQb29sO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlX3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIGEgc3lzdGVtLlxuICpcbiAqIDxwPkEgc3lzdGVtIGlzIHBhcnQgb2YgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgZ2FtZS4gQWZ0ZXIgYSBzeXN0ZW0gaXMgYWRkZWQgdG8gdGhlIGVuZ2luZSwgaXRzXG4gKiB1cGRhdGUgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIG9uIGV2ZXJ5IGZyYW1lIG9mIHRoZSBlbmdpbmUuIFdoZW4gdGhlIHN5c3RlbSBpcyByZW1vdmVkIGZyb20gdGhlIGVuZ2luZSxcbiAqIHRoZSB1cGRhdGUgbWV0aG9kIGlzIG5vIGxvbmdlciBjYWxsZWQuPC9wPlxuICpcbiAqIDxwPlRoZSBhZ2dyZWdhdGUgb2YgYWxsIHN5c3RlbXMgaW4gdGhlIGVuZ2luZSBpcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgZ2FtZSwgd2l0aCB0aGUgdXBkYXRlXG4gKiBtZXRob2RzIG9mIHRob3NlIHN5c3RlbXMgY29sbGVjdGl2ZWx5IGNvbnN0aXR1dGluZyB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLiBTeXN0ZW1zIGdlbmVyYWxseSBvcGVyYXRlIG9uXG4gKiBub2RlIGxpc3RzIC0gY29sbGVjdGlvbnMgb2Ygbm9kZXMuIEVhY2ggbm9kZSBjb250YWlucyB0aGUgY29tcG9uZW50cyBmcm9tIGFuIGVudGl0eSBpbiB0aGUgZW5naW5lXG4gKiB0aGF0IG1hdGNoIHRoZSBub2RlLjwvcD5cbiAqL1xuXG5hc2guY29yZS5TeXN0ZW0gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN5c3RlbSgpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IF9fYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuXG4gIC8qXG4gICAgKiBVc2VkIGludGVybmFsbHkgdG8gbWFuYWdlIHRoZSBsaXN0IG9mIHN5c3RlbXMgd2l0aGluIHRoZSBlbmdpbmUuIFRoZSBwcmV2aW91cyBzeXN0ZW0gaW4gdGhlIGxpc3QuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5IHRvIG1hbmFnZSB0aGUgbGlzdCBvZiBzeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lLiBUaGUgbmV4dCBzeXN0ZW0gaW4gdGhlIGxpc3QuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHkgdG8gaG9sZCB0aGUgcHJpb3JpdHkgb2YgdGhpcyBzeXN0ZW0gd2l0aGluIHRoZSBzeXN0ZW0gbGlzdC4gVGhpcyBpc1xuICAgKiB1c2VkIHRvIG9yZGVyIHRoZSBzeXN0ZW1zIHNvIHRoZXkgYXJlIHVwZGF0ZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHN5c3RlbSBpcyBhZGRlZCB0byB0aGUgZW5naW5lLCBiZWZvcmUgYW55IGNhbGxzIHRvIHRoZSB1cGRhdGUgbWV0aG9kLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgeW91ciBvd24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGVuZ2luZSBUaGUgZW5naW5lIHRoZSBzeXN0ZW0gd2FzIGFkZGVkIHRvLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7fTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBzeXN0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUsIGFmdGVyIGFsbCBjYWxscyB0byB0aGUgdXBkYXRlIG1ldGhvZC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbmdpbmUgVGhlIGVuZ2luZSB0aGUgc3lzdGVtIHdhcyByZW1vdmVkIGZyb20uXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge307XG5cblxuICAvKlxuICAgKiBBZnRlciB0aGUgc3lzdGVtIGlzIGFkZGVkIHRvIHRoZSBlbmdpbmUsIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBldmVyeSBmcmFtZSB1bnRpbCB0aGUgc3lzdGVtXG4gICAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgeW91ciBvd24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogPHA+SWYgeW91IG5lZWQgdG8gcGVyZm9ybSBhbiBhY3Rpb24gb3V0c2lkZSBvZiB0aGUgdXBkYXRlIGxvb3AgKGUuZy4geW91IG5lZWQgdG8gY2hhbmdlIHRoZVxuICAgKiBzeXN0ZW1zIGluIHRoZSBlbmdpbmUgYW5kIHlvdSBkb24ndCB3YW50IHRvIGRvIGl0IHdoaWxlIHRoZXkncmUgdXBkYXRpbmcpIGFkZCBhIGxpc3RlbmVyIHRvXG4gICAqIHRoZSBlbmdpbmUncyB1cGRhdGVDb21wbGV0ZSBzaWduYWwgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXBkYXRlIGxvb3AgY29tcGxldGVzLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIHRpbWUgVGhlIGR1cmF0aW9uLCBpbiBzZWNvbmRzLCBvZiB0aGUgZnJhbWUuXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge307XG5cbiAgcmV0dXJuIFN5c3RlbTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFVzZWQgaW50ZXJuYWxseSwgdGhpcyBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgU3lzdGVtcyBmb3IgdXNlIGJ5IHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AuXG4gKi9cblxuYXNoLmNvcmUuU3lzdGVtTGlzdCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU3lzdGVtTGlzdCgpIHt9XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuaGVhZCA9IG51bGw7XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIHN5c3RlbS5uZXh0ID0gc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnByaW9yaXR5IDw9IHN5c3RlbS5wcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IHN5c3RlbTtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIH0gZWxzZSBpZiAoIW5vZGUpIHtcbiAgICAgICAgc3lzdGVtLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IHN5c3RlbTtcbiAgICAgICAgdGhpcy5oZWFkID0gc3lzdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3lzdGVtLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IHN5c3RlbTtcbiAgICAgICAgbm9kZS5uZXh0ID0gc3lzdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBzeXN0ZW0pIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBzeXN0ZW0pIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICB9XG4gICAgaWYgKHN5c3RlbS5wcmV2aW91cykge1xuICAgICAgc3lzdGVtLnByZXZpb3VzLm5leHQgPSBzeXN0ZW0ubmV4dDtcbiAgICB9XG4gICAgaWYgKHN5c3RlbS5uZXh0KSB7XG4gICAgICBzeXN0ZW0ubmV4dC5wcmV2aW91cyA9IHN5c3RlbS5wcmV2aW91cztcbiAgICB9XG4gIH07XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICB3aGlsZSAodGhpcy5oZWFkKSB7XG4gICAgICBzeXN0ZW0gPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG51bGw7XG4gICAgICBzeXN0ZW0ubmV4dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBzeXN0ZW07XG4gICAgc3lzdGVtID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChzeXN0ZW0pIHtcbiAgICAgIGlmIChzeXN0ZW0uY29uc3RydWN0b3IgPT09IHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHN5c3RlbTtcbiAgICAgIH1cbiAgICAgIHN5c3RlbSA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gU3lzdGVtTGlzdDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX2xpc3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gVGhlIGluc3RhbmNlXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSB0byByZXR1cm4gd2hlbmV2ZXIgYSBjb21wb25lbnQgaXMgcmVxdWVzdGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmZzbS5Db21wb25lbnRTaW5nbGV0b25Qcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyKHR5cGUpIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICB9XG5cbiAgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9zaW5nbGV0b25fcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmZzbS5Db21wb25lbnRUeXBlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudFR5cGVQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFR5cGVQcm92aWRlcih0eXBlKSB7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50VHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRUeXBlUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF90eXBlX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIucHJvdG90eXBlLl9jbG9zdXJlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjbG9zdXJlIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2hlbiBjYWxsZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIER5bmFtaWNDb21wb25lbnRQcm92aWRlcihjbG9zdXJlKSB7XG4gICAgdGhpcy5fY2xvc3VyZSA9IGNsb3N1cmU7XG5cbiAgICAvKlxuICAgICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAgICovXG4gIH1cblxuICBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9zdXJlO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zdXJlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIER5bmFtaWNDb21wb25lbnRQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pY19jb21wb25lbnRfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgcmV0dXJucyByZXN1bHRzIG9mIGEgbWV0aG9kIGNhbGwuIFRoZSBtZXRob2RcbiAqIGlzIHBhc3NlZCB0byB0aGUgcHJvdmlkZXIgYXQgaW5pdGlhbGlzYXRpb24uXG4gKi9cblxuYXNoLmZzbS5EeW5hbWljU3lzdGVtUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24oKSB7fTtcblxuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIFN5c3RlbSBpbnN0YW5jZTtcbiAgICovXG5cbiAgZnVuY3Rpb24gRHluYW1pY1N5c3RlbVByb3ZpZGVyKG1ldGhvZCkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBtZXRob2QgdXNlZCB0byBjYWxsIHRoZSBTeXN0ZW0gaW5zdGFuY2VzXG4gICAqL1xuXG4gIER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0aG9kKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIHByaW9yaXR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRHluYW1pY1N5c3RlbVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEeW5hbWljU3lzdGVtUHJvdmlkZXIsIFN0YXRlU3lzdGVtTWFwcGluZywgU3lzdGVtSW5zdGFuY2VQcm92aWRlciwgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblN5c3RlbUluc3RhbmNlUHJvdmlkZXIgPSBhc2guZnNtLlN5c3RlbUluc3RhbmNlUHJvdmlkZXI7XG5cblN5c3RlbVNpbmdsZXRvblByb3ZpZGVyID0gYXNoLmZzbS5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlcjtcblxuRHluYW1pY1N5c3RlbVByb3ZpZGVyID0gYXNoLmZzbS5EeW5hbWljU3lzdGVtUHJvdmlkZXI7XG5cblN0YXRlU3lzdGVtTWFwcGluZyA9IGFzaC5mc20uU3RhdGVTeXN0ZW1NYXBwaW5nO1xuXG5cbi8qXG4gKiBSZXByZXNlbnRzIGEgc3RhdGUgZm9yIGEgU3lzdGVtU3RhdGVNYWNoaW5lLiBUaGUgc3RhdGUgY29udGFpbnMgYW55IG51bWJlciBvZiBTeXN0ZW1Qcm92aWRlcnMgd2hpY2hcbiAqIGFyZSB1c2VkIHRvIGFkZCBTeXN0ZW1zIHRvIHRoZSBFbmdpbmUgd2hlbiB0aGlzIHN0YXRlIGlzIGVudGVyZWQuXG4gKi9cblxuYXNoLmZzbS5FbmdpbmVTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLnByb3ZpZGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW5naW5lU3RhdGUoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSBbXTtcbiAgfVxuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNwZWNpZmljIFN5c3RlbSBpbnN0YW5jZS4gQVxuICAgKiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBTeXN0ZW0gaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IFN5c3RlbUluc3RhbmNlUHJvdmlkZXIoc3lzdGVtKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyKHR5cGUpKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBtZXRob2QgY2FsbC5cbiAgICogVGhlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGEgU3lzdGVtIGluc3RhbmNlLiBBIER5bmFtaWNTeXN0ZW1Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIFN5c3RlbSBpbnN0YW5jZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkUHJvdmlkZXIobmV3IER5bmFtaWNTeXN0ZW1Qcm92aWRlcihtZXRob2QpKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZHMgYW55IFN5c3RlbVByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB2YXIgbWFwcGluZztcbiAgICBtYXBwaW5nID0gbmV3IFN0YXRlU3lzdGVtTWFwcGluZyh0aGlzLCBwcm92aWRlcik7XG4gICAgdGhpcy5wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZVN0YXRlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmdpbmVfc3RhdGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgRW5naW5lU3RhdGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVuZ2luZVN0YXRlID0gYXNoLmZzbS5FbmdpbmVTdGF0ZTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoaXMgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciB0aGUgRW5naW5lLiBUaGUgc3RhdGUgbWFjaGluZSBtYW5hZ2VzIGEgc2V0IG9mIHN0YXRlcyxcbiAqIGVhY2ggb2Ygd2hpY2ggaGFzIGEgc2V0IG9mIFN5c3RlbSBwcm92aWRlcnMuIFdoZW4gdGhlIHN0YXRlIG1hY2hpbmUgY2hhbmdlcyB0aGUgc3RhdGUsIGl0IHJlbW92ZXNcbiAqIFN5c3RlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmV2aW91cyBzdGF0ZSBhbmQgYWRkcyBTeXN0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICovXG5cbmFzaC5mc20uRW5naW5lU3RhdGVNYWNoaW5lID0gKGZ1bmN0aW9uKCkge1xuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5zdGF0ZXMgPSBudWxsO1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3VycmVudFN0YXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yLiBDcmVhdGVzIGFuIFN5c3RlbVN0YXRlTWFjaGluZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gRW5naW5lU3RhdGVNYWNoaW5lKGVuZ2luZSkge1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgc3RhdGUgdG8gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEBwYXJhbSBzdGF0ZSBUaGUgc3RhdGUuXG4gICAqIEByZXR1cm4gVGhpcyBzdGF0ZSBtYWNoaW5lLCBzbyBtZXRob2RzIGNhbiBiZSBjaGFpbmVkLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmFkZFN0YXRlID0gZnVuY3Rpb24obmFtZSwgc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlIGEgbmV3IHN0YXRlIGluIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIG5ldyBzdGF0ZSAtIHVzZWQgdG8gaWRlbnRpZnkgaXQgbGF0ZXIgaW4gdGhlIGNoYW5nZVN0YXRlIG1ldGhvZCBjYWxsLlxuICAgKiBAcmV0dXJuIFRoZSBuZXcgRW50aXR5U3RhdGUgb2JqZWN0IHRoYXQgaXMgdGhlIHN0YXRlLiBUaGlzIHdpbGwgbmVlZCB0byBiZSBjb25maWd1cmVkIHdpdGhcbiAgICogdGhlIGFwcHJvcHJpYXRlIGNvbXBvbmVudCBwcm92aWRlcnMuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIHN0YXRlID0gbmV3IEVuZ2luZVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXNbbmFtZV0gPSBzdGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENoYW5nZSB0byBhIG5ldyBzdGF0ZS4gVGhlIFN5c3RlbXMgZnJvbSB0aGUgb2xkIHN0YXRlIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIFN5c3RlbXNcbiAgICogZm9yIHRoZSBuZXcgc3RhdGUgd2lsbCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0YXRlIHRvIGNoYW5nZSB0by5cbiAgICovXG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgZWFjaCwgaWQsIG5ld1N0YXRlLCBvdGhlciwgcHJvdmlkZXIsIHRvQWRkLCBfcmVmLCBfcmVmMTtcbiAgICBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVzW25hbWVdO1xuICAgIGlmIChuZXdTdGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbmdpbmUgc3RhdGUgXCIgKyBuYW1lICsgXCIgZG9lc24ndCBleGlzdFwiKTtcbiAgICB9XG4gICAgaWYgKG5ld1N0YXRlID09PSB0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b0FkZCA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgX3JlZiA9IG5ld1N0YXRlLnByb3ZpZGVycztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgcHJvdmlkZXIgPSBfcmVmW2VhY2hdO1xuICAgICAgaWQgPSBwcm92aWRlci5pZGVudGlmaWVyO1xuICAgICAgdG9BZGRbaWRdID0gcHJvdmlkZXI7XG4gICAgfVxuICAgIGlmIChjdXJyZW50U3RhdGUpIHtcbiAgICAgIF9yZWYxID0gdGhpcy5jdXJyZW50U3RhdGUucHJvdmlkZXJzO1xuICAgICAgZm9yIChlYWNoIGluIF9yZWYxKSB7XG4gICAgICAgIHByb3ZpZGVyID0gX3JlZjFbZWFjaF07XG4gICAgICAgIGlkID0gcHJvdmlkZXIuaWRlbnRpZmllcjtcbiAgICAgICAgb3RoZXIgPSB0b0FkZFtpZF07XG4gICAgICAgIGlmIChvdGhlcikge1xuICAgICAgICAgIGRlbGV0ZSB0b0FkZFtpZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlU3lzdGVtKHByb3ZpZGVyLmdldFN5c3RlbSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGVhY2ggaW4gdG9BZGQpIHtcbiAgICAgIHByb3ZpZGVyID0gdG9BZGRbZWFjaF07XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTeXN0ZW0ocHJvdmlkZXIuZ2V0U3lzdGVtKCksIHByb3ZpZGVyLnByaW9yaXR5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIEVuZ2luZVN0YXRlTWFjaGluZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lX3N0YXRlX21hY2hpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgU3RhdGVDb21wb25lbnRNYXBwaW5nLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TdGF0ZUNvbXBvbmVudE1hcHBpbmcgPSBhc2guZnNtLlN0YXRlQ29tcG9uZW50TWFwcGluZztcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFJlcHJlc2VudHMgYSBzdGF0ZSBmb3IgYW4gRW50aXR5U3RhdGVNYWNoaW5lLiBUaGUgc3RhdGUgY29udGFpbnMgYW55IG51bWJlciBvZiBDb21wb25lbnRQcm92aWRlcnMgd2hpY2hcbiAqIGFyZSB1c2VkIHRvIGFkZCBjb21wb25lbnRzIHRvIHRoZSBlbnRpdHkgd2hlbiB0aGlzIHN0YXRlIGlzIGVudGVyZWQuXG4gKi9cblxuYXNoLmZzbS5FbnRpdHlTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLnByb3ZpZGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW50aXR5U3RhdGUoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cblxuICAvKlxuICAgKiBBZGQgYSBuZXcgQ29tcG9uZW50TWFwcGluZyB0byB0aGlzIHN0YXRlLiBUaGUgbWFwcGluZyBpcyBhIHV0aWxpdHkgY2xhc3MgdGhhdCBpcyB1c2VkIHRvXG4gICAqIG1hcCBhIGNvbXBvbmVudCB0eXBlIHRvIHRoZSBwcm92aWRlciB0aGF0IHByb3ZpZGVzIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBiZSBtYXBwZWRcbiAgICogQHJldHVybiBUaGUgY29tcG9uZW50IG1hcHBpbmcgdG8gdXNlIHdoZW4gc2V0dGluZyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRlQ29tcG9uZW50TWFwcGluZyh0aGlzLCB0eXBlLm5hbWUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IHRoZSBDb21wb25lbnRQcm92aWRlciBmb3IgYSBwYXJ0aWN1bGFyIGNvbXBvbmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gZ2V0IHRoZSBwcm92aWRlciBmb3JcbiAgICogQHJldHVybiBUaGUgQ29tcG9uZW50UHJvdmlkZXJcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbdHlwZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBUbyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIHN0YXRlIGhhcyBhIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gbG9vayBmb3IgYSBwcm92aWRlciBmb3JcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZXJlIGlzIGEgcHJvdmlkZXIgZm9yIHRoZSBnaXZlbiB0eXBlLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbdHlwZV0gIT09IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eVN0YXRlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlfc3RhdGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgRW50aXR5U3RhdGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVudGl0eVN0YXRlID0gYXNoLmZzbS5FbnRpdHlTdGF0ZTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoaXMgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBhbiBlbnRpdHkuIFRoZSBzdGF0ZSBtYWNoaW5lIG1hbmFnZXMgYSBzZXQgb2Ygc3RhdGVzLFxuICogZWFjaCBvZiB3aGljaCBoYXMgYSBzZXQgb2YgY29tcG9uZW50IHByb3ZpZGVycy4gV2hlbiB0aGUgc3RhdGUgbWFjaGluZSBjaGFuZ2VzIHRoZSBzdGF0ZSwgaXQgcmVtb3Zlc1xuICogY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIHByZXZpb3VzIHN0YXRlIGFuZCBhZGRzIGNvbXBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gKi9cblxuYXNoLmZzbS5FbnRpdHlTdGF0ZU1hY2hpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuc3RhdGVzID0gbnVsbDtcblxuXG4gIC8qXG4gIFx0ICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0YXRlIG1hY2hpbmUuXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3VycmVudFN0YXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBlbnRpdHkgd2hvc2Ugc3RhdGUgbWFjaGluZSB0aGlzIGlzXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuZW50aXR5ID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yLiBDcmVhdGVzIGFuIEVudGl0eVN0YXRlTWFjaGluZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gRW50aXR5U3RhdGVNYWNoaW5lKGVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgXHRcdCAqIEFkZCBhIHN0YXRlIHRvIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgXHRcdCAqXG4gIFx0XHQgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gIFx0XHQgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlLlxuICBcdFx0ICogQHJldHVybiBUaGlzIHN0YXRlIG1hY2hpbmUsIHNvIG1ldGhvZHMgY2FuIGJlIGNoYWluZWQuXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuYWRkU3RhdGUgPSBmdW5jdGlvbihuYW1lLCBzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGVzW25hbWVdID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYSBuZXcgc3RhdGUgaW4gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV3IHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEByZXR1cm4gVGhlIG5ldyBFbnRpdHlTdGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgc3RhdGUuIFRoaXMgd2lsbCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQgd2l0aFxuICAgKiB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHByb3ZpZGVycy5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBuZXcgRW50aXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENoYW5nZSB0byBhIG5ldyBzdGF0ZS4gVGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgb2xkIHN0YXRlIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIGNvbXBvbmVudHNcbiAgICogZm9yIHRoZSBuZXcgc3RhdGUgd2lsbCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0YXRlIHRvIGNoYW5nZSB0by5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbmV3U3RhdGUsIG90aGVyLCB0b0FkZCwgdHlwZTtcbiAgICBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVzW25hbWVdO1xuICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBzdGF0ZSBcIiArIG5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAobmV3U3RhdGUgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgdG9BZGQgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgICAgZm9yICh0eXBlIGluIG5ld1N0YXRlLnByb3ZpZGVycykge1xuICAgICAgICB0b0FkZFt0eXBlXSA9IG5ld1N0YXRlLnByb3ZpZGVyc1t0eXBlXTtcbiAgICAgIH1cbiAgICAgIGZvciAodHlwZSBpbiB0aGlzLmN1cnJlbnRTdGF0ZS5wcm92aWRlcnMpIHtcbiAgICAgICAgb3RoZXIgPSB0b0FkZFt0eXBlXTtcbiAgICAgICAgaWYgKG90aGVyICYmIG90aGVyLmlkZW50aWZpZXIgPT09IHRoaXMuY3VycmVudFN0YXRlLnByb3ZpZGVyc1t0eXBlXS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgZGVsZXRlIHRvQWRkW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b0FkZCA9IG5ld1N0YXRlLnByb3ZpZGVycztcbiAgICB9XG4gICAgZm9yICh0eXBlIGluIHRvQWRkKSB7XG4gICAgICB0aGlzLmVudGl0eS5hZGQodG9BZGRbdHlwZV0uZ2V0Q29tcG9uZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5U3RhdGVNYWNoaW5lO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlfc3RhdGVfbWFjaGluZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyLCBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlciwgQ29tcG9uZW50VHlwZVByb3ZpZGVyLCBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkNvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIgPSBhc2guZnNtLkNvbXBvbmVudEluc3RhbmNlUHJvdmlkZXI7XG5cbkNvbXBvbmVudFR5cGVQcm92aWRlciA9IGFzaC5mc20uQ29tcG9uZW50VHlwZVByb3ZpZGVyO1xuXG5Db21wb25lbnRTaW5nbGV0b25Qcm92aWRlciA9IGFzaC5mc20uQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXI7XG5cbkR5bmFtaWNDb21wb25lbnRQcm92aWRlciA9IGFzaC5mc20uRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyO1xuXG5cbi8qXG4gKiBVc2VkIGJ5IHRoZSBFbnRpdHlTdGF0ZSBjbGFzcyB0byBjcmVhdGUgdGhlIG1hcHBpbmdzIG9mIGNvbXBvbmVudHMgdG8gcHJvdmlkZXJzIHZpYSBhIGZsdWVudCBpbnRlcmZhY2UuXG4gKi9cblxuYXNoLmZzbS5TdGF0ZUNvbXBvbmVudE1hcHBpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5jcmVhdGluZ1N0YXRlID0gbnVsbDtcblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLnByb3ZpZGVyID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSwgdGhlIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYSBjb21wb25lbnQgbWFwcGluZy4gVGhlIGNvbnN0cnVjdG9yXG4gICAqIGNyZWF0ZXMgYSBDb21wb25lbnRUeXBlUHJvdmlkZXIgYXMgdGhlIGRlZmF1bHQgbWFwcGluZywgd2hpY2ggd2lsbCBiZSByZXBsYWNlZFxuICAgKiBieSBtb3JlIHNwZWNpZmljIG1hcHBpbmdzIGlmIG90aGVyIG1ldGhvZHMgYXJlIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtIGNyZWF0aW5nU3RhdGUgVGhlIEVudGl0eVN0YXRlIHRoYXQgdGhlIG1hcHBpbmcgd2lsbCBiZWxvbmcgdG9cbiAgICogQHBhcmFtIHR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIGZvciB0aGUgbWFwcGluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBTdGF0ZUNvbXBvbmVudE1hcHBpbmcoY3JlYXRpbmdTdGF0ZSwgdHlwZSkge1xuICAgIHRoaXMuY3JlYXRpbmdTdGF0ZSA9IGNyZWF0aW5nU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcbiAgICB0aGlzLndpdGhUeXBlKHR5cGUpO1xuICB9XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIGEgc3BlY2lmaWMgY29tcG9uZW50IGluc3RhbmNlLiBBXG4gICAqIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCBpbnN0YW5jZSB0byB1c2UgZm9yIHRoZSBtYXBwaW5nXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoSW5zdGFuY2UgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICB0aGlzLnNldFByb3ZpZGVyKG5ldyBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyKGNvbXBvbmVudCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBuZXcgaW5zdGFuY2VzIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWUgYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgQ29tcG9uZW50VHlwZVByb3ZpZGVyXG4gICAqIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQgYnkgdGhpcyBtYXBwaW5nXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB0aGlzLnNldFByb3ZpZGVyKG5ldyBDb21wb25lbnRUeXBlUHJvdmlkZXIodHlwZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIGluc3RhbmNlIGlzIG5vdCBjcmVhdGVkIHVudGlsIGl0IGlzIGZpcnN0IHJlcXVlc3RlZC4gVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lXG4gICAqIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLiBJZiBvbWl0dGVkLCB0aGUgdHlwZSBvZiB0aGVcbiAgICogbWFwcGluZyBpcyB1c2VkLlxuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aFNpbmdsZXRvbiA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wb25lbnRUeXBlO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3ZpZGVyKG5ldyBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlcih0eXBlKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIGEgbWV0aG9kIGNhbGwuIEFcbiAgICogRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gcmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICB0aGlzLnNldFByb3ZpZGVyKG5ldyBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIobWV0aG9kKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIGFueSBDb21wb25lbnRQcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHByb3ZpZGVyIFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihwcm92aWRlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBNYXBzIHRocm91Z2ggdG8gdGhlIGFkZCBtZXRob2Qgb2YgdGhlIEVudGl0eVN0YXRlIHRoYXQgdGhpcyBtYXBwaW5nIGJlbG9uZ3MgdG9cbiAgICogc28gdGhhdCBhIGZsdWVudCBpbnRlcmZhY2UgY2FuIGJlIHVzZWQgd2hlbiBjb25maWd1cmluZyBlbnRpdHkgc3RhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gYWRkIGEgbWFwcGluZyB0byB0aGUgc3RhdGUgZm9yXG4gICAqIEByZXR1cm4gVGhlIG5ldyBDb21wb25lbnRNYXBwaW5nIGZvciB0aGF0IHR5cGVcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRpbmdTdGF0ZS5hZGQodHlwZSk7XG4gIH07XG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5zZXRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIHJldHVybiB0aGlzLmNyZWF0aW5nU3RhdGUucHJvdmlkZXJzW3RoaXMuY29tcG9uZW50VHlwZV0gPSBwcm92aWRlcjtcbiAgfTtcblxuICByZXR1cm4gU3RhdGVDb21wb25lbnRNYXBwaW5nO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZV9jb21wb25lbnRfbWFwcGluZy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBVc2VkIGJ5IHRoZSBTeXN0ZW1TdGF0ZSBjbGFzcyB0byBjcmVhdGUgdGhlIG1hcHBpbmdzIG9mIFN5c3RlbXMgdG8gcHJvdmlkZXJzIHZpYSBhIGZsdWVudCBpbnRlcmZhY2UuXG4gKi9cblxuYXNoLmZzbS5TdGF0ZVN5c3RlbU1hcHBpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuY3JlYXRpbmdTdGF0ZSA9IG51bGw7XG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5wcm92aWRlciA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHksIHRoZSBjb25zdHJ1Y3RvciBjcmVhdGVzIGEgY29tcG9uZW50IG1hcHBpbmcuIFRoZSBjb25zdHJ1Y3RvclxuICAgKiBjcmVhdGVzIGEgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgYXMgdGhlIGRlZmF1bHQgbWFwcGluZywgd2hpY2ggd2lsbCBiZSByZXBsYWNlZFxuICAgKiBieSBtb3JlIHNwZWNpZmljIG1hcHBpbmdzIGlmIG90aGVyIG1ldGhvZHMgYXJlIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtIGNyZWF0aW5nU3RhdGUgVGhlIFN5c3RlbVN0YXRlIHRoYXQgdGhlIG1hcHBpbmcgd2lsbCBiZWxvbmcgdG9cbiAgICogQHBhcmFtIHR5cGUgVGhlIFN5c3RlbSB0eXBlIGZvciB0aGUgbWFwcGluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBTdGF0ZVN5c3RlbU1hcHBpbmcoY3JlYXRpbmdTdGF0ZSwgcHJvdmlkZXIpIHtcbiAgICB0aGlzLmNyZWF0aW5nU3RhdGUgPSBjcmVhdGluZ1N0YXRlO1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgfVxuXG5cbiAgLypcbiAgICogQXBwbGllcyB0aGUgcHJpb3JpdHkgdG8gdGhlIHByb3ZpZGVyIHRoYXQgdGhlIFN5c3RlbSB3aWxsIGJlLlxuICAgKlxuICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS53aXRoUHJpb3JpdHkgPSBmdW5jdGlvbihwcmlvcml0eSkge1xuICAgIHRoaXMucHJvdmlkZXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzcGVjaWZpYyBTeXN0ZW0gaW5zdGFuY2UuIEFcbiAgICogU3lzdGVtSW5zdGFuY2VQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgU3lzdGVtIGluc3RhbmNlIHRvIHVzZSBmb3IgdGhlIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICByZXR1cm4gY3JlYXRpbmdTdGF0ZS5hZGRJbnN0YW5jZShzeXN0ZW0pO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIGluc3RhbmNlIGlzIG5vdCBjcmVhdGVkIHVudGlsIGl0IGlzIGZpcnN0IHJlcXVlc3RlZC4gVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lXG4gICAqIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuIElmIG9taXR0ZWQsIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBtYXBwaW5nIGlzIHVzZWQuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gY3JlYXRpbmdTdGF0ZS5hZGRTaW5nbGV0b24odHlwZSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgbWV0aG9kIGNhbGwuXG4gICAqIFRoZSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFN5c3RlbSBpbnN0YW5jZS4gQSBEeW5hbWljU3lzdGVtUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0byBwcm92aWRlIHRoZSBTeXN0ZW0gaW5zdGFuY2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gY3JlYXRpbmdTdGF0ZS5hZGRNZXRob2QobWV0aG9kKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIE1hcHMgdGhyb3VnaCB0byB0aGUgYWRkUHJvdmlkZXIgbWV0aG9kIG9mIHRoZSBTeXN0ZW1TdGF0ZSB0aGF0IHRoaXMgbWFwcGluZyBiZWxvbmdzIHRvXG4gICAqIHNvIHRoYXQgYSBmbHVlbnQgaW50ZXJmYWNlIGNhbiBiZSB1c2VkIHdoZW4gY29uZmlndXJpbmcgZW50aXR5IHN0YXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHByb3ZpZGVyIFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkUHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqL1xuXG4gIHJldHVybiBTdGF0ZVN5c3RlbU1hcHBpbmc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlX3N5c3RlbV9tYXBwaW5nLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgU3lzdGVtIHByb3ZpZGVyIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQuIFRoZSBzeXN0ZW1cbiAqIGlzIHBhc3NlZCB0byB0aGUgcHJvdmlkZXIgYXQgaW5pdGlhbGlzYXRpb24uXG4gKi9cblxuYXNoLmZzbS5TeXN0ZW1JbnN0YW5jZVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cbiAgU3lzdGVtSW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuc3lzdGVtUHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSB0byByZXR1cm4gd2hlbmV2ZXIgYSBTeXN0ZW0gaXMgcmVxdWVzdGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlIG9mIHRoZSBTeXN0ZW1cbiAgICovXG5cbiAgU3lzdGVtSW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3lzdGVtSW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIHByaW9yaXR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gU3lzdGVtSW5zdGFuY2VQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX2luc3RhbmNlX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgU3lzdGVtIHByb3ZpZGVyIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIGluc3RhbmNlIG9mIHRoZSBTeXN0ZW0uIFRoZSBpbnN0YW5jZVxuICogaXMgY3JlYXRlZCB3aGVuIGZpcnN0IHJlcXVpcmVkIGFuZCBpcyBvZiB0aGUgdHlwZSBwYXNzZWQgaW4gdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5cbmFzaC5mc20uU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5zeXN0ZW1Qcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIFN5c3RlbSBpbnN0YW5jZVxuICAgKi9cblxuICBmdW5jdGlvbiBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlcih0eXBlKSB7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgU3lzdGVtIGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBzaW5nbGUgaW5zdGFuY2VcbiAgICovXG5cbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzLmNvbXBvbmVudFR5cGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKlxuICAgIFx0XHQgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBzaW5nbGVcbiAgICBcdFx0ICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcmV0dXJuIFRoZSBzaW5nbGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTeXN0ZW0oKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBUaGUgcHJpb3JpdHkgYXQgd2hpY2ggdGhlIFN5c3RlbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEVuZ2luZVxuICAgICAqL1xuICAgIHByaW9yaXR5OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gU3lzdGVtU2luZ2xldG9uUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9zaW5nbGV0b25fcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogQSBub2RlIGluIHRoZSBsaXN0IG9mIGxpc3RlbmVycyBpbiBhIHNpZ25hbC5cbiAqL1xuXG5hc2guc2lnbmFscy5MaXN0ZW5lck5vZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExpc3RlbmVyTm9kZSgpIHt9XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5wcmV2aW91cyA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5uZXh0ID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLmxpc3RlbmVyID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLm9uY2UgPSBmYWxzZTtcblxuICByZXR1cm4gTGlzdGVuZXJOb2RlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0ZW5lcl9ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExpc3RlbmVyTm9kZSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuTGlzdGVuZXJOb2RlID0gYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlO1xuXG5cbi8qXG4gKiBUaGlzIGludGVybmFsIGNsYXNzIG1haW50YWlucyBhIHBvb2wgb2YgZGVsZXRlZCBsaXN0ZW5lciBub2RlcyBmb3IgcmV1c2UgYnkgZnJhbWV3b3JrLiBUaGlzIHJlZHVjZXNcbiAqIHRoZSBvdmVyaGVhZCBmcm9tIG9iamVjdCBjcmVhdGlvbiBhbmQgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICovXG5cbmFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZVBvb2wgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExpc3RlbmVyTm9kZVBvb2woKSB7fVxuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlVGFpbCA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMudGFpbCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgTGlzdGVuZXJOb2RlKCk7XG4gICAgfVxuICB9O1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgbm9kZS5saXN0ZW5lciA9IG51bGw7XG4gICAgbm9kZS5vbmNlID0gZmFsc2U7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gIH07XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgbm9kZS5saXN0ZW5lciA9IG51bGw7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMuY2FjaGVUYWlsO1xuICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZTtcbiAgfTtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5yZWxlYXNlQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAodGhpcy5jYWNoZVRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICAgIHRoaXMuY2FjaGVUYWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIExpc3RlbmVyTm9kZVBvb2w7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RlbmVyX25vZGVfcG9vbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDAgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwwLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDAoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDAuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwwLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwwO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDEgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwxLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDEoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDEuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwxLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCQxKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigkMSk7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMTtcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDEuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwyID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMiwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwyKCkge1xuICAgIHJldHVybiBTaWduYWwyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMi5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigkMSwgJDIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCQxLCAkMik7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMjtcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwzID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMywgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwzKCkge1xuICAgIHJldHVybiBTaWduYWwzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMy5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigkMSwgJDIsICQzKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigkMSwgJDIsICQzKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwzO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMaXN0ZW5lck5vZGVQb29sLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5MaXN0ZW5lck5vZGVQb29sID0gYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlUG9vbDtcblxuYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSA9IChmdW5jdGlvbigpIHtcbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuaGVhZCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUubnVtTGlzdGVuZXJzID0gMDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5rZXlzID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUubGlzdGVuZXJOb2RlUG9vbCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudG9BZGRIZWFkID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS50b0FkZFRhaWwgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmRpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gU2lnbmFsQmFzZSgpIHtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gICAgdGhpcy5rZXlzID0gW107XG4gICAgdGhpcy5saXN0ZW5lck5vZGVQb29sID0gbmV3IExpc3RlbmVyTm9kZVBvb2woKTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IDA7XG4gIH1cblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5zdGFydERpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuZW5kRGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9BZGRIZWFkKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRvQWRkSGVhZDtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50b0FkZFRhaWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IHRoaXMudG9BZGRIZWFkO1xuICAgICAgICB0aGlzLnRvQWRkSGVhZC5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50b0FkZFRhaWw7XG4gICAgICB9XG4gICAgICB0aGlzLnRvQWRkSGVhZCA9IG51bGw7XG4gICAgICB0aGlzLnRvQWRkVGFpbCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5yZWxlYXNlQ2FjaGUoKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5nZXROb2RlID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMudG9BZGRIZWFkO1xuICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG5vZGUubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy5rZXlzLmluZGV4T2YobGlzdGVuZXIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gdGhpcy5saXN0ZW5lck5vZGVQb29sLmdldCgpO1xuICAgIG5vZGUubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgdGhpcy5rZXlzLnB1c2gobGlzdGVuZXIpO1xuICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGRPbmNlID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy5rZXlzLmluZGV4T2YobGlzdGVuZXIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gdGhpcy5saXN0ZW5lck5vZGVQb29sLmdldCgpO1xuICAgIG5vZGUubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICBub2RlLm9uY2UgPSB0cnVlO1xuICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICB0aGlzLmtleXMucHVzaChsaXN0ZW5lcik7XG4gICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKHRoaXMuZGlzcGF0Y2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLnRvQWRkSGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvQWRkSGVhZCA9IHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50b0FkZFRhaWw7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIGluZGV4LCBub2RlO1xuICAgIGluZGV4ID0gdGhpcy5rZXlzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVzW2luZGV4XTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9BZGRIZWFkID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMudG9BZGRIZWFkID0gdGhpcy50b0FkZEhlYWQubmV4dDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvQWRkVGFpbCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLnRvQWRkVGFpbCA9IHRoaXMudG9BZGRUYWlsLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucHJldmlvdXMpIHtcbiAgICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5rZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAodGhpcy5kaXNwYXRjaGluZykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuY2FjaGUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZGlzcG9zZShub2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgfVxuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmhlYWQpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgIH1cbiAgICB0aGlzLm5vZGVzID0gW107XG4gICAgdGhpcy5rZXlzID0gW107XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLnRvQWRkSGVhZCA9IG51bGw7XG4gICAgdGhpcy50b0FkZFRhaWwgPSBudWxsO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gMDtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsQmFzZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsX2Jhc2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgU2lnbmFsMSwgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwxID0gYXNoLnNpZ25hbHMuU2lnbmFsMTtcblxuXG4vKlxuICogVXNlcyB0aGUgZW50ZXIgZnJhbWUgZXZlbnQgdG8gcHJvdmlkZSBhIGZyYW1lIHRpY2sgd2hlcmUgdGhlIGZyYW1lIGR1cmF0aW9uIGlzIHRoZSB0aW1lIHNpbmNlIHRoZSBwcmV2aW91cyBmcmFtZS5cbiAqIFRoZXJlIGlzIGEgbWF4aW11bSBmcmFtZSB0aW1lIHBhcmFtZXRlciBpbiB0aGUgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBsaW1pdFxuICogdGhlIGxvbmdlc3QgcGVyaW9kIGEgZnJhbWUgY2FuIGJlLlxuICovXG5cbmFzaC50aWNrLkZyYW1lVGlja1Byb3ZpZGVyID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoRnJhbWVUaWNrUHJvdmlkZXIsIF9zdXBlcik7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLmRpc3BsYXlPYmplY3QgPSBudWxsO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5wcmV2aW91c1RpbWUgPSAwO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5tYXhpbXVtRnJhbWVUaW1lID0gMDtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuaXNQbGF5aW5nID0gZmFsc2U7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnJlcXVlc3QgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQXBwbGllcyBhIHRpbWUgYWRqdXN0ZW1lbnQgZmFjdG9yIHRvIHRoZSB0aWNrLCBzbyB5b3UgY2FuIHNsb3cgZG93biBvciBzcGVlZCB1cCB0aGUgZW50aXJlIGVuZ2luZS5cbiAgICogVGhlIHVwZGF0ZSB0aWNrIHRpbWUgaXMgbXVsdGlwbGllZCBieSB0aGlzIHZhbHVlLCBzbyBhIHZhbHVlIG9mIDEgd2lsbCBydW4gdGhlIGVuZ2luZSBhdCB0aGUgbm9ybWFsIHJhdGUuXG4gICAqL1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS50aW1lQWRqdXN0bWVudCA9IDE7XG5cbiAgZnVuY3Rpb24gRnJhbWVUaWNrUHJvdmlkZXIoZGlzcGxheU9iamVjdCwgbWF4aW11bUZyYW1lVGltZSkge1xuICAgIHRoaXMuZGlzcGxheU9iamVjdCA9IGRpc3BsYXlPYmplY3Q7XG4gICAgdGhpcy5tYXhpbXVtRnJhbWVUaW1lID0gbWF4aW11bUZyYW1lVGltZTtcbiAgICB0aGlzLmRpc3BhdGNoVGljayA9IF9fYmluZCh0aGlzLmRpc3BhdGNoVGljaywgdGhpcyk7XG4gICAgRnJhbWVUaWNrUHJvdmlkZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBwbGF5aW5nOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1BsYXlpbmc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kaXNwYXRjaFRpY2spO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgfTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gIH07XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLmRpc3BhdGNoVGljayA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICAgIHZhciBmcmFtZVRpbWUsIHRlbXA7XG4gICAgaWYgKHRpbWVzdGFtcCA9PSBudWxsKSB7XG4gICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLmRpc3BsYXlPYmplY3QuYmVnaW4oKTtcbiAgICB9XG4gICAgdGVtcCA9IHRoaXMucHJldmlvdXNUaW1lIHx8IHRpbWVzdGFtcDtcbiAgICB0aGlzLnByZXZpb3VzVGltZSA9IHRpbWVzdGFtcDtcbiAgICBmcmFtZVRpbWUgPSAodGltZXN0YW1wIC0gdGVtcCkgKiAwLjAwMTtcbiAgICB0aGlzLmRpc3BhdGNoKGZyYW1lVGltZSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZGlzcGF0Y2hUaWNrKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLmRpc3BsYXlPYmplY3QuZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBGcmFtZVRpY2tQcm92aWRlcjtcblxufSkoU2lnbmFsMSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyYW1lX3RpY2tfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgYXNoLFxuICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBBbiBvYmplY3QgcG9vbCBmb3IgcmUtdXNpbmcgY29tcG9uZW50cy4gVGhpcyBpcyBub3QgaW50ZWdyYXRlZCBpbiB0byBBc2ggYnV0IGlzIHVzZWQgZGllcmVjdGx5IGJ5XG4gKiB0aGUgZGV2ZWxvcGVyLiBJdCBleHBlY3RzIGNvbXBvbmVudHMgdG8gbm90IHJlcXVpcmUgYW55IHBhcmFtZXRlcnMgaW4gdGhlaXIgY29uc3RydWN0b3IuXG4gKlxuICogPHA+RmV0Y2ggYW4gb2JqZWN0IGZyb20gdGhlIHBvb2wgd2l0aDwvcD5cbiAqXG4gKiA8cD5Db21wb25lbnRQb29sLmdldCggQ29tcG9uZW50Q2xhc3MgKTs8L3A+XG4gKlxuICogPHA+SWYgdGhlIHBvb2wgY29udGFpbnMgYW4gb2JqZWN0IG9mIHRoZSByZXF1aXJlZCB0eXBlLCBpdCB3aWxsIGJlIHJldHVybmVkLiBJZiBpdCBkb2VzIG5vdCwgYSBuZXcgb2JqZWN0XG4gKiB3aWxsIGJlIGNyZWF0ZWQgYW5kIHJldHVybmVkLjwvcD5cbiAqXG4gKiA8cD5UaGUgb2JqZWN0IHJldHVybmVkIG1heSBoYXZlIHByb3BlcnRpZXMgc2V0IG9uIGl0IGZyb20gdGhlIHRpbWUgaXQgd2FzIHByZXZpb3VzbHkgdXNlZCwgc28gYWxsIHByb3BlcnRpZXNcbiAqIHNob3VsZCBiZSByZXNldCBpbiB0aGUgb2JqZWN0IG9uY2UgaXQgaXMgcmVjZWl2ZWQuPC9wPlxuICpcbiAqIDxwPkFkZCBhbiBvYmplY3QgdG8gdGhlIHBvb2wgd2l0aDwvcD5cbiAqXG4gKiA8cD5Db21wb25lbnRQb29sLmRpc3Bvc2UoIGNvbXBvbmVudCApOzwvcD5cbiAqXG4gKiA8cD5Zb3Ugd2lsbCB1c3VhbGx5IHdhbnQgdG8gZG8gdGhpcyB3aGVuIHJlbW92aW5nIGEgY29tcG9uZW50IGZyb20gYW4gZW50aXR5LiBUaGUgcmVtb3ZlIG1ldGhvZCBvbiB0aGUgZW50aXR5XG4gKiByZXR1cm5zIHRoZSBjb21wb25lbnQgdGhhdCB3YXMgcmVtb3ZlZCwgc28gdGhpcyBjYW4gYmUgZG9uZSBpbiBvbmUgbGluZSBvZiBjb2RlIGxpa2UgdGhpczwvcD5cbiAqXG4gKiA8cD5Db21wb25lbnRQb29sLmRpc3Bvc2UoIGVudGl0eS5yZW1vdmUoIGNvbXBvbmVudCApICk7PC9wPlxuICovXG5cbmFzaC50b29scy5Db21wb25lbnRQb29sID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0UG9vbCwgcG9vbHM7XG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50UG9vbCgpIHt9XG5cbiAgcG9vbHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG4gIGdldFBvb2wgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBfcmVmO1xuICAgIGlmICgoX3JlZiA9IGNvbXBvbmVudENsYXNzLm5hbWUsIF9faW5kZXhPZi5jYWxsKHBvb2xzLCBfcmVmKSA+PSAwKSkge1xuICAgICAgcmV0dXJuIHBvb2xzW2NvbXBvbmVudENsYXNzLm5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcG9vbHNbY29tcG9uZW50Q2xhc3MubmFtZV0gPSBbXTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYW4gb2JqZWN0IGZyb20gdGhlIHBvb2wuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgdHlwZSBvZiBjb21wb25lbnQgd2FudGVkLlxuICAgKiBAcmV0dXJuIFRoZSBjb21wb25lbnQuXG4gICAqL1xuXG4gIENvbXBvbmVudFBvb2wuZ2V0ID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgcG9vbDtcbiAgICBwb29sID0gZ2V0UG9vbChjb21wb25lbnRDbGFzcyk7XG4gICAgaWYgKHBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHBvb2wucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgY29tcG9uZW50Q2xhc3MoKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBSZXR1cm4gYW4gb2JqZWN0IHRvIHRoZSBwb29sIGZvciByZXVzZS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJldHVybiB0byB0aGUgcG9vbC5cbiAgICovXG5cbiAgQ29tcG9uZW50UG9vbC5kaXNwb3NlID0gZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgdmFyIHBvb2wsIHR5cGU7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgdHlwZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICAgIHBvb2wgPSBnZXRQb29sKHR5cGUpO1xuICAgICAgcG9vbC5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogRGlzcG9zZSBvZiBhbGwgcG9vbGVkIHJlc291cmNlcywgZnJlZWluZyB0aGVtIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAqL1xuXG4gIENvbXBvbmVudFBvb2wuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcG9vbHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRQb29sO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfcG9vbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBFbmdpbmUsIE5vZGUsIE5vZGVMaXN0LCBTeXN0ZW0sIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRW5naW5lID0gYXNoLmNvcmUuRW5naW5lO1xuXG5Ob2RlID0gYXNoLmNvcmUuTm9kZTtcblxuTm9kZUxpc3QgPSBhc2guY29yZS5Ob2RlTGlzdDtcblxuU3lzdGVtID0gYXNoLmNvcmUuU3lzdGVtO1xuXG5cbi8qXG4gKiBBIHVzZWZ1bCBjbGFzcyBmb3Igc3lzdGVtcyB3aGljaCBzaW1wbHkgaXRlcmF0ZSBvdmVyIGEgc2V0IG9mIG5vZGVzLCBwZXJmb3JtaW5nIHRoZSBzYW1lIGFjdGlvbiBvbiBlYWNoIG5vZGUuIFRoaXNcbiAqIGNsYXNzIHJlbW92ZXMgdGhlIG5lZWQgZm9yIGEgbG90IG9mIGJvaWxlcnBsYXRlIGNvZGUgaW4gc3VjaCBzeXN0ZW1zLiBFeHRlbmQgdGhpcyBjbGFzcyBhbmQgcGFzcyB0aGUgbm9kZSB0eXBlIGFuZFxuICogYSBub2RlIHVwZGF0ZSBtZXRob2QgaW50byB0aGUgY29uc3RydWN0b3IuIFRoZSBub2RlIHVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgb25jZSBwZXIgbm9kZSBvbiB0aGUgdXBkYXRlIGN5Y2xlXG4gKiB3aXRoIHRoZSBub2RlIGluc3RhbmNlIGFuZCB0aGUgZnJhbWUgdGltZSBhcyBwYXJhbWV0ZXJzLiBlLmcuXG4gKlxuICogPGNvZGU+cGFja2FnZTtcbiAqIGNsYXNzIE15U3lzdGVtIGV4dGVuZHMgTGlzdEl0ZXJhdGluZ1N5c3RlbTxNeU5vZGU+XG4gKiB7XG4gKiAgICAgcHVibGljIGZ1bmN0aW9uIG5ldygpXG4gKiAgICAge1xuICogICAgICAgICBzdXBlcihNeU5vZGUsIHVwZGF0ZU5vZGUpO1xuICogICAgIH1cbiAqXG4gKiAgICAgcHJpdmF0ZSBmdW5jdGlvbiB1cGRhdGVOb2RlKG5vZGU6TXlOb2RlLCB0aW1lOkZsb2F0KTpWb2lkXG4gKiAgICAge1xuICogICAgICAgICAvLyBwcm9jZXNzIHRoZSBub2RlIGhlcmVcbiAqICAgICB9XG4gKiB9XG4gKiA8L2NvZGU+XG4gKi9cblxuYXNoLnRvb2xzLkxpc3RJdGVyYXRpbmdTeXN0ZW0gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhMaXN0SXRlcmF0aW5nU3lzdGVtLCBfc3VwZXIpO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVMaXN0ID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlQ2xhc3MgPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVVcGRhdGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZUFkZGVkRnVuY3Rpb24gPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVSZW1vdmVkRnVuY3Rpb24gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIExpc3RJdGVyYXRpbmdTeXN0ZW0obm9kZUNsYXNzLCBub2RlVXBkYXRlRnVuY3Rpb24sIG5vZGVBZGRlZEZ1bmN0aW9uLCBub2RlUmVtb3ZlZEZ1bmN0aW9uKSB7XG4gICAgaWYgKG5vZGVBZGRlZEZ1bmN0aW9uID09IG51bGwpIHtcbiAgICAgIG5vZGVBZGRlZEZ1bmN0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5vZGVSZW1vdmVkRnVuY3Rpb24gPT0gbnVsbCkge1xuICAgICAgbm9kZVJlbW92ZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubm9kZUNsYXNzID0gbm9kZUNsYXNzO1xuICAgIHRoaXMubm9kZVVwZGF0ZUZ1bmN0aW9uID0gbm9kZVVwZGF0ZUZ1bmN0aW9uO1xuICAgIHRoaXMubm9kZUFkZGVkRnVuY3Rpb24gPSBub2RlQWRkZWRGdW5jdGlvbjtcbiAgICB0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24gPSBub2RlUmVtb3ZlZEZ1bmN0aW9uO1xuICB9XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLm5vZGVMaXN0ID0gZW5naW5lLmdldE5vZGVMaXN0KHRoaXMubm9kZUNsYXNzKTtcbiAgICBpZiAodGhpcy5ub2RlQWRkZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMubm9kZUxpc3QuaGVhZDtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZUFkZGVkRnVuY3Rpb24obm9kZSk7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVBZGRlZC5hZGQodGhpcy5ub2RlQWRkZWRGdW5jdGlvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZVJlbW92ZWQuYWRkKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICBpZiAodGhpcy5ub2RlQWRkZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlQWRkZWQucmVtb3ZlKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVSZW1vdmVkLnJlbW92ZSh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24pO1xuICAgIH1cbiAgICB0aGlzLm5vZGVMaXN0ID0gbnVsbDtcbiAgfTtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMubm9kZUxpc3QuaGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgdGhpcy5ub2RlVXBkYXRlRnVuY3Rpb24obm9kZSwgdGltZSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGlzdEl0ZXJhdGluZ1N5c3RlbTtcblxufSkoU3lzdGVtKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdF9pdGVyYXRpbmdfc3lzdGVtLmpzLm1hcFxuIiwiXG4vKlxuXG4gICBfICAgICAgIF9cbiAgL19cXCAgX19ffCB8X19cbiAvL19cXFxcLyBfX3wgJ18gXFxcbi8gIF8gIFxcX18gXFwgfCB8IHxcblxcXy8gXFxfL19fXy9ffCB8X3xcblxuICAgICAgICAgICAgICBfXyAgX19cbiAgICBfX18gX19fICAvIF98LyBffCBfX18gIF9fX1xuICAgLyBfXy8gXyBcXHwgfF98IHxfIC8gXyBcXC8gXyBcXFxuICB8IChffCAoXykgfCAgX3wgIF98ICBfXy8gIF9fL1xuIChfKV9fX1xcX19fL3xffCB8X3wgIFxcX19ffFxcX19ffFxuXG5cbkNvcHlyaWdodCAoYykgMjAxNSBCcnVjZSBEYXZpZHNvbiAmbHQ7ZGFya292ZXJsb3Jkb2ZkYXRhQGdtYWlsLmNvbSZndDtcblxuQXV0aG9yOiBSaWNoYXJkIExvcmRcbkNvcHlyaWdodCAoYykgUmljaGFyZCBMb3JkIDIwMTEtMjAxMlxuaHR0cDovL3d3dy5yaWNoYXJkbG9yZC5uZXRcblxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNoID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBhc2goKSB7fVxuXG4gIHJldHVybiBhc2g7XG5cbn0pKCk7XG5cbmFzaC5zaWduYWxzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaWduYWxzKCkge31cblxuICByZXR1cm4gc2lnbmFscztcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvbGlzdGVuZXJfbm9kZV9wb29sJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsX2Jhc2UnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwwJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMScpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDInKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwzJyk7XG5cbmFzaC5jb3JlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjb3JlKCkge31cblxuICByZXR1cm4gY29yZTtcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9lbnRpdHknKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9lbnRpdHlfbGlzdCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL25vZGUnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9ub2RlX2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9ub2RlX3Bvb2wnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9zeXN0ZW0nKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9zeXN0ZW1fbGlzdCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL2ZhbWlseScpO1xuXG5yZXF1aXJlKCcuL2FzaC9jb3JlL2NvbXBvbmVudF9tYXRjaGluZ19mYW1pbHknKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9lbmdpbmUnKTtcblxuYXNoLmZzbSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gZnNtKCkge31cblxuICByZXR1cm4gZnNtO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X2luc3RhbmNlX3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9jb21wb25lbnRfc2luZ2xldG9uX3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9jb21wb25lbnRfdHlwZV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZHluYW1pY19jb21wb25lbnRfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2R5bmFtaWNfc3lzdGVtX3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbmdpbmVfc3RhdGUnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbmdpbmVfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW50aXR5X3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbnRpdHlfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vc3RhdGVfc3lzdGVtX21hcHBpbmcnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N5c3RlbV9pbnN0YW5jZV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vc3lzdGVtX3NpbmdsZXRvbl9wcm92aWRlcicpO1xuXG5hc2gudGljayA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gdGljaygpIHt9XG5cbiAgcmV0dXJuIHRpY2s7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL3RpY2svZnJhbWVfdGlja19wcm92aWRlcicpO1xuXG5hc2gudG9vbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRvb2xzKCkge31cblxuICByZXR1cm4gdG9vbHM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL3Rvb2xzL2NvbXBvbmVudF9wb29sJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3Rvb2xzL2xpc3RfaXRlcmF0aW5nX3N5c3RlbScpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdfQ==
