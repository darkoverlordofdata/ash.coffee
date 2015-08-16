goog.provide('asteroids.nodes.RenderNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Display');
asteroids.nodes.RenderNode = function() {
  return asteroids.nodes.RenderNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.RenderNode, ash.core.Node);
asteroids.nodes.RenderNode.className = 'RenderNode';
asteroids.nodes.RenderNode.components = {
  position: asteroids.components.Position,
  display: asteroids.components.Display
};
asteroids.nodes.RenderNode.prototype.position = null;
asteroids.nodes.RenderNode.prototype.display = null;