// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  asteroids.nodes.GunControlNode = (function(superClass) {
    extend(GunControlNode, superClass);

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

}).call(this);

//# sourceMappingURL=gun_control_node.js.map