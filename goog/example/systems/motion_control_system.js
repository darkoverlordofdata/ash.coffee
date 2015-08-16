goog.provide('asteroids.systems.MotionControlSystem');
goog.require('ash.tools.ListIteratingSystem');
goog.require('asteroids.nodes.MotionControlNode');

asteroids.systems.MotionControlSystem = function(_at_keyPoll) {
  this.keyPoll = _at_keyPoll;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.MotionControlSystem.superClass_.constructor.call(this, asteroids.nodes.MotionControlNode, this.updateNode);
}
goog.inherits(asteroids.systems.MotionControlSystem, ash.tools.ListIteratingSystem);
asteroids.systems.MotionControlSystem.prototype.keyPoll = null;
asteroids.systems.MotionControlSystem.prototype.updateNode = function(node, time) {
  var control, left, motion, position, right;
  control = node.control;
  position = node.position;
  motion = node.motion;
  left = this.keyPoll.isDown(control.left);
  right = this.keyPoll.isDown(control.right);
  if (left) {
    position.rotation -= control.rotationRate * time;
  }
  if (right) {
    position.rotation += control.rotationRate * time;
  }
  if (this.keyPoll.isDown(control.accelerate)) {
    motion.velocity.x += Math.cos(position.rotation) * control.accelerationRate * time;
    motion.velocity.y += Math.sin(position.rotation) * control.accelerationRate * time;
  }
};