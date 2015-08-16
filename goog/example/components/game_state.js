goog.provide('asteroids.components.GameState');

asteroids.components.GameState = function() {}
asteroids.components.GameState.className = 'GameState';
asteroids.components.GameState.prototype.lives = 3;
asteroids.components.GameState.prototype.level = 0;
asteroids.components.GameState.prototype.hits = 0;
asteroids.components.GameState.prototype.playing = false;
asteroids.components.GameState.prototype.setForStart = function() {
  this.lives = 3;
  this.level = 0;
  this.hits = 0;
  this.playing = true;
};