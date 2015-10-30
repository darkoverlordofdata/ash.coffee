// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';

  /*
    * @constructor
   */
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  asteroids.nodes.MovementNode = (function(_super) {
    __extends(MovementNode, _super);

    function MovementNode() {
      return MovementNode.__super__.constructor.apply(this, arguments);
    }


    /** @type {string} */

    MovementNode.className = 'MovementNode';


    /** @type {Object.<string, Function} */

    MovementNode.components = {
      position: asteroids.components.Position,
      motion: asteroids.components.Motion
    };


    /** @type {asteroids.components.Position} */

    MovementNode.prototype.position = null;


    /** @type {asteroids.components.Motion} */

    MovementNode.prototype.motion = null;

    return MovementNode;

  })(ash.core.Node);

}).call(this);

//# sourceMappingURL=movement_node.js.map
