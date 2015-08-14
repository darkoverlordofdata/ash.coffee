// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  asteroids.nodes.BulletAgeNode = (function(superClass) {
    extend(BulletAgeNode, superClass);

    function BulletAgeNode() {
      return BulletAgeNode.__super__.constructor.apply(this, arguments);
    }

    BulletAgeNode.components = {
      bullet: asteroids.components.Bullet
    };

    BulletAgeNode.prototype.bullet = null;

    return BulletAgeNode;

  })(ash.core.Node);

}).call(this);

//# sourceMappingURL=bullet_age_node.js.map
