goog.provide('asteroids.components.MotionControls');

asteroids.components.MotionControls = function(_at_left, _at_right, _at_accelerate, _at_accelerationRate, _at_rotationRate) {
  this.left = _at_left;
  this.right = _at_right;
  this.accelerate = _at_accelerate;
  this.accelerationRate = _at_accelerationRate;
  this.rotationRate = _at_rotationRate;
}
asteroids.components.MotionControls.prototype.left = 0;
asteroids.components.MotionControls.prototype.right = 0;
asteroids.components.MotionControls.prototype.accelerate = 0;
asteroids.components.MotionControls.prototype.accelerationRate = 0;
asteroids.components.MotionControls.prototype.rotationRate = 0;