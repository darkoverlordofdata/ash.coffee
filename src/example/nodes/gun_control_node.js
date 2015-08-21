// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';

  /*
    * @constructor
   */
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  asteroids.nodes.GunControlNode = (function(_super) {
    __extends(GunControlNode, _super);

    function GunControlNode() {
      return GunControlNode.__super__.constructor.apply(this, arguments);
    }


    /** @type {string} */

    GunControlNode.className = 'GunControlNode';


    /** @type {Object.<string, Function} */

    GunControlNode.components = {
      audio: asteroids.components.Audio,
      control: asteroids.components.GunControls,
      gun: asteroids.components.Gun,
      position: asteroids.components.Position
    };


    /** @type {asteroids.components.Audio} */

    GunControlNode.prototype.control = null;


    /** @type {asteroids.components.GunControls} */

    GunControlNode.prototype.gun = null;


    /** @type {asteroids.components.Gun} */

    GunControlNode.prototype.position = null;


    /** @type {asteroids.components.Position} */

    GunControlNode.prototype.audio = null;

    return GunControlNode;

  })(ash.core.Node);

}).call(this);

//# sourceMappingURL=gun_control_node.js.map
