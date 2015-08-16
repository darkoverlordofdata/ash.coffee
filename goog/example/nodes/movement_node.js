goog.provide('asteroids.nodes.MovementNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Motion');
asteroids.nodes.MovementNode = function() {
  return asteroids.nodes.MovementNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.MovementNode, ash.core.Node);
asteroids.nodes.MovementNode.className = 'MovementNode';
asteroids.nodes.MovementNode.components = {
  position: asteroids.components.Position,
  motion: asteroids.components.Motion
};
asteroids.nodes.MovementNode.prototype.position = null;
asteroids.nodes.MovementNode.prototype.motion = null;