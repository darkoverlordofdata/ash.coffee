goog.provide('asteroids.systems.AnimationSystem');
goog.require('ash.tools.ListIteratingSystem');
goog.require('asteroids.nodes.AnimationNode');

asteroids.systems.AnimationSystem = function() {
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.AnimationSystem.superClass_.constructor.call(this, asteroids.nodes.AnimationNode, this.updateNode);
}
goog.inherits(asteroids.systems.AnimationSystem, ash.tools.ListIteratingSystem);
asteroids.systems.AnimationSystem.prototype.updateNode = function(node, time) {
  node.animation.animation.animate(time);
};