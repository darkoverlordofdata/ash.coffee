// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var GunControlNode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  GunControlNode = asteroids.nodes.GunControlNode;

  asteroids.systems.GunControlSystem = (function(_super) {
    __extends(GunControlSystem, _super);


    /** @type {asteroids.input.KeyPoll} */

    GunControlSystem.prototype.keyPoll = null;


    /** @type {asteroids.EntityCreator} */

    GunControlSystem.prototype.creator = null;


    /**
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {asteroids.EntityCreator}
     * @param {asteroids.input.KeyPoll}
     */

    function GunControlSystem(_at_keyPoll, _at_creator) {
      this.keyPoll = _at_keyPoll;
      this.creator = _at_creator;
      this.updateNode = __bind(this.updateNode, this);
      GunControlSystem.__super__.constructor.call(this, GunControlNode, this.updateNode);
    }


    /**
     * @param {ash.core.Node}
     * @param {number}
     */

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

}).call(this);

//# sourceMappingURL=gun_control_system.js.map
