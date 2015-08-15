goog.provide('asteroids.nodes.AsteroidCollisionNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Asteroid');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Collision');
goog.require('asteroids.components.Audio');
asteroids.nodes.AsteroidCollisionNode = function() {
  return asteroids.nodes.AsteroidCollisionNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.AsteroidCollisionNode, ash.core.Node);
asteroids.nodes.AsteroidCollisionNode.className = 'AsteroidCollisionNode';
asteroids.nodes.AsteroidCollisionNode.components = {
  asteroid: asteroids.components.Asteroid,
  position: asteroids.components.Position,
  collision: asteroids.components.Collision,
  audio: asteroids.components.Audio
};
asteroids.nodes.AsteroidCollisionNode.prototype.asteroid = null;
asteroids.nodes.AsteroidCollisionNode.prototype.position = null;
asteroids.nodes.AsteroidCollisionNode.prototype.collision = null;
asteroids.nodes.AsteroidCollisionNode.prototype.audio = null;