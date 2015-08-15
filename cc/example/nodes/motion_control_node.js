goog.provide('asteroids.nodes.MotionControlNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.MotionControls');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Motion');
asteroids.nodes.MotionControlNode = function() {
  return asteroids.nodes.MotionControlNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.MotionControlNode, ash.core.Node);
asteroids.nodes.MotionControlNode.className = 'MotionControlNode';
asteroids.nodes.MotionControlNode.components = {
  control: asteroids.components.MotionControls,
  position: asteroids.components.Position,
  motion: asteroids.components.Motion
};
asteroids.nodes.MotionControlNode.prototype.control = null;
asteroids.nodes.MotionControlNode.prototype.position = null;
asteroids.nodes.MotionControlNode.prototype.motion = null;