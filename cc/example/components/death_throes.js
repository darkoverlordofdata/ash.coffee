goog.provide('asteroids.components.DeathThroes');

asteroids.components.DeathThroes = function(duration) {
  this.countdown = duration;
}
asteroids.components.DeathThroes.prototype.countdown = 0;