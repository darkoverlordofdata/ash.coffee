// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var AsteroidCollisionNode, BulletCollisionNode, GameNode, Point, SpaceshipNode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  GameNode = asteroids.nodes.GameNode;

  SpaceshipNode = asteroids.nodes.SpaceshipNode;

  AsteroidCollisionNode = asteroids.nodes.AsteroidCollisionNode;

  BulletCollisionNode = asteroids.nodes.BulletCollisionNode;

  Point = asteroids.ui.Point;

  asteroids.systems.GameManager = (function(_super) {
    __extends(GameManager, _super);


    /** @type {asteroids.GameConfig} */

    GameManager.prototype.config = null;


    /** @type {asteroids.EntityCreator} */

    GameManager.prototype.creator = null;


    /** @type {ash.core.NodeList} */

    GameManager.prototype.gameNodes = null;


    /** @type {ash.core.NodeList} */

    GameManager.prototype.spaceships = null;


    /** @type {ash.core.NodeList} */

    GameManager.prototype.asteroids = null;


    /** @type {ash.core.NodeList} */

    GameManager.prototype.bullets = null;


    /**
     * @constructor
     * @extends {ash.core.System}
     * @param {asteroids.EntityCreator}
     * @param {asteroids.GameConfig}
     */

    function GameManager(_at_creator, _at_config) {
      this.creator = _at_creator;
      this.config = _at_config;
      this.update = __bind(this.update, this);
    }


    /**
     * @param {ash.core.Engine}
     */

    GameManager.prototype.addToEngine = function(engine) {
      this.gameNodes = engine.getNodeList(GameNode);
      this.spaceships = engine.getNodeList(SpaceshipNode);
      this.asteroids = engine.getNodeList(AsteroidCollisionNode);
      this.bullets = engine.getNodeList(BulletCollisionNode);
    };


    /**
     * @param {number}
     */

    GameManager.prototype.update = function(time) {
      var asteroid, asteroidCount, clearToAddSpaceship, i, newSpaceshipPosition, node, position, spaceship;
      node = this.gameNodes.head;
      if (node && node.state.playing) {
        if (this.spaceships.isEmpty()) {
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
        if (this.asteroids.isEmpty() && this.bullets.isEmpty() && !this.spaceships.isEmpty()) {
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


    /**
     * @param {ash.core.Engine}
     */

    GameManager.prototype.removeFromEngine = function(engine) {
      this.gameNodes = null;
      this.spaceships = null;
      this.asteroids = null;
      this.bullets = null;
    };

    return GameManager;

  })(ash.core.System);

}).call(this);

//# sourceMappingURL=game_manager.js.map
