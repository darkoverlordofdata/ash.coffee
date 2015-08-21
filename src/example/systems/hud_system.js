// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var HudNode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  HudNode = asteroids.nodes.HudNode;

  asteroids.systems.HudSystem = (function(_super) {
    __extends(HudSystem, _super);


    /**
     * @constructor
     * @extends {ash.tools.ListIteratingSystem}
     */

    function HudSystem() {
      this.updateNode = __bind(this.updateNode, this);
      HudSystem.__super__.constructor.call(this, HudNode, this.updateNode);
    }


    /**
     * @param {ash.core.Node}
     * @param {number}
     */

    HudSystem.prototype.updateNode = function(node, time) {
      node.hud.view.setLives(node.state.lives);
      node.hud.view.setScore(node.state.hits);
    };

    return HudSystem;

  })(ash.tools.ListIteratingSystem);

}).call(this);

//# sourceMappingURL=hud_system.js.map
