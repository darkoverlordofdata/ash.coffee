goog.provide('asteroids.components.Spaceship');

asteroids.components.Spaceship = function(_at_fsm) {
  this.fsm = _at_fsm;
}
asteroids.components.Spaceship.className = 'Spaceship';
asteroids.components.Spaceship.prototype.fsm = null;