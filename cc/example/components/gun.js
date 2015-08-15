goog.provide('asteroids.components.Gun');

goog.require('asteroids.ui.Point');

asteroids.components.Gun = function(offsetX, offsetY, _at_minimumShotInterval, _at_bulletLifetime) {
  this.minimumShotInterval = _at_minimumShotInterval;
  this.bulletLifetime = _at_bulletLifetime;
  this.shooting = false;
  this.offsetFromParent = null;
  this.timeSinceLastShot = 0;
  this.offsetFromParent = new asteroids.ui.Point(offsetX, offsetY);
}
asteroids.components.Gun.prototype.shooting = false;
asteroids.components.Gun.prototype.offsetFromParent = null;
asteroids.components.Gun.prototype.timeSinceLastShot = 0;
asteroids.components.Gun.prototype.offsetFromParent = null;