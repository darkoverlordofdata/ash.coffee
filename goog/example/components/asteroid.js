goog.provide('asteroids.components.Asteroid');

asteroids.components.Asteroid = function(_at_fsm) {
  this.fsm = _at_fsm;
}
asteroids.components.Asteroid.className = 'Asteroid';
asteroids.components.Asteroid.prototype.fsm = null;