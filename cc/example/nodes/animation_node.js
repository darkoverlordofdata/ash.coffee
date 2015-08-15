goog.provide('asteroids.nodes.AnimationNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Animation');
asteroids.nodes.AnimationNode = function() {
  return asteroids.nodes.AnimationNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.AnimationNode, ash.core.Node);
asteroids.nodes.AnimationNode.className = 'AnimationNode';
asteroids.nodes.AnimationNode.components = {
  animation: asteroids.components.Animation
};
asteroids.nodes.AnimationNode.prototype.animation = null;