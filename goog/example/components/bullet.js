goog.provide('asteroids.components.Bullet');

asteroids.components.Bullet = function(_at_lifeRemaining) {
  this.lifeRemaining = _at_lifeRemaining;
}
asteroids.components.Bullet.className = 'Bullet';
asteroids.components.Bullet.prototype.lifeRemaining = 0;