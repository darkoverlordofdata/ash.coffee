goog.provide('asteroids.components.Audio');

asteroids.components.Audio = function() {
  this.toPlay = [];
}
asteroids.components.Audio.prototype.toPlay = null;
asteroids.components.Audio.prototype.play = function(sound) {
  return this.toPlay.push(sound);
};