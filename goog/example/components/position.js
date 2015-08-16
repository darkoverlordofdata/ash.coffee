goog.provide('asteroids.components.Position');

goog.require('asteroids.ui.Point');

asteroids.components.Position = function(x, y, _at_rotation) {
  this.rotation = _at_rotation;
  this.position = new asteroids.ui.Point(x, y);
}
asteroids.components.Position.className = 'Position';
asteroids.components.Position.prototype.position = null;
asteroids.components.Position.prototype.rotation = 0;