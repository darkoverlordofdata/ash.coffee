goog.provide('asteroids.components.Motion');

goog.require('asteroids.ui.Point');

asteroids.components.Motion = function(velocityX, velocityY, _at_angularVelocity, _at_damping) {
  this.angularVelocity = _at_angularVelocity;
  this.damping = _at_damping;
  this.velocity = new asteroids.ui.Point(velocityX, velocityY);
}
asteroids.components.Motion.prototype.velocity = null;
asteroids.components.Motion.prototype.angularVelocity = 0;
asteroids.components.Motion.prototype.damping = 0;