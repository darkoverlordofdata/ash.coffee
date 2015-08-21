// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';

  /*
    * @constructor
   */
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  asteroids.nodes.BulletCollisionNode = (function(_super) {
    __extends(BulletCollisionNode, _super);

    function BulletCollisionNode() {
      return BulletCollisionNode.__super__.constructor.apply(this, arguments);
    }


    /** @type {string} */

    BulletCollisionNode.className = 'BulletCollisionNode';


    /** @type {Object.<string, Function} */

    BulletCollisionNode.components = {
      bullet: asteroids.components.Bullet,
      position: asteroids.components.Position,
      collision: asteroids.components.Collision
    };


    /** @type {asteroids.components.Bullet} */

    BulletCollisionNode.prototype.bullet = null;


    /** @type {asteroids.components.Position} */

    BulletCollisionNode.prototype.position = null;


    /** @type {asteroids.components.Collision} */

    BulletCollisionNode.prototype.collision = null;

    return BulletCollisionNode;

  })(ash.core.Node);

}).call(this);

//# sourceMappingURL=bullet_collision_node.js.map