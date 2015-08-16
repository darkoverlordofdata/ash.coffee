goog.provide('asteroids.nodes.SpaceshipCollisionNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Spaceship');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Collision');
goog.require('asteroids.components.Audio');
asteroids.nodes.SpaceshipCollisionNode = function() {
  return asteroids.nodes.SpaceshipCollisionNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.SpaceshipCollisionNode, ash.core.Node);
asteroids.nodes.SpaceshipCollisionNode.className = 'SpaceshipCollisionNode';
asteroids.nodes.SpaceshipCollisionNode.components = {
  spaceship: asteroids.components.Spaceship,
  position: asteroids.components.Position,
  collision: asteroids.components.Collision,
  audio: asteroids.components.Audio
};
asteroids.nodes.SpaceshipCollisionNode.prototype.spaceship = 0;
asteroids.nodes.SpaceshipCollisionNode.prototype.position = 0;
asteroids.nodes.SpaceshipCollisionNode.prototype.collision = null;
asteroids.nodes.SpaceshipCollisionNode.prototype.audio = null;