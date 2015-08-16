goog.provide('asteroids.nodes.SpaceshipNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Spaceship');
goog.require('asteroids.components.Position');
asteroids.nodes.SpaceshipNode = function() {
  return asteroids.nodes.SpaceshipNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.SpaceshipNode, ash.core.Node);
asteroids.nodes.SpaceshipNode.className = 'SpaceshipNode';
asteroids.nodes.SpaceshipNode.components = {
  spaceship: asteroids.components.Spaceship,
  position: asteroids.components.Position
};
asteroids.nodes.SpaceshipNode.prototype.spaceship = 0;
asteroids.nodes.SpaceshipNode.prototype.position = 0;