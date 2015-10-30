// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';

  /*
    * @constructor
   */
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  asteroids.nodes.MotionControlNode = (function(_super) {
    __extends(MotionControlNode, _super);

    function MotionControlNode() {
      return MotionControlNode.__super__.constructor.apply(this, arguments);
    }


    /** @type {string} */

    MotionControlNode.className = 'MotionControlNode';


    /** @type {Object.<string, Function} */

    MotionControlNode.components = {
      control: asteroids.components.MotionControls,
      position: asteroids.components.Position,
      motion: asteroids.components.Motion
    };


    /** @type {asteroids.components.MotionControls} */

    MotionControlNode.prototype.control = null;


    /** @type {asteroids.components.Position} */

    MotionControlNode.prototype.position = null;


    /** @type {asteroids.components.Motion} */

    MotionControlNode.prototype.motion = null;

    return MotionControlNode;

  })(ash.core.Node);

}).call(this);

//# sourceMappingURL=motion_control_node.js.map
