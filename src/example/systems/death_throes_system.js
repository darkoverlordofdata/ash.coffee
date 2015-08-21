// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var DeathThroesNode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  DeathThroesNode = asteroids.nodes.DeathThroesNode;

  asteroids.systems.DeathThroesSystem = (function(_super) {
    __extends(DeathThroesSystem, _super);


    /** @type {asteroids.EntityCreator} */

    DeathThroesSystem.prototype.creator = null;


    /**
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     * @param {asteroids.EntityCreator}
     */

    function DeathThroesSystem(_at_creator) {
      this.creator = _at_creator;
      this.updateNode = __bind(this.updateNode, this);
      DeathThroesSystem.__super__.constructor.call(this, DeathThroesNode, this.updateNode);
    }


    /**
     * @param {ash.core.Node}
     * @param {number}
     */

    DeathThroesSystem.prototype.updateNode = function(node, time) {
      node.death.countdown -= time;
      if (node.death.countdown <= 0) {
        this.creator.destroyEntity(node.entity);
      }
    };

    return DeathThroesSystem;

  })(ash.tools.ListIteratingSystem);

}).call(this);

//# sourceMappingURL=death_throes_system.js.map
