goog.provide('asteroids.nodes.DeathThroesNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.DeathThroes');
asteroids.nodes.DeathThroesNode = function() {
  return asteroids.nodes.DeathThroesNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.DeathThroesNode, ash.core.Node);
asteroids.nodes.DeathThroesNode.className = 'DeathThroesNode';
asteroids.nodes.DeathThroesNode.components = {
  death: asteroids.components.DeathThroes
};
asteroids.nodes.DeathThroesNode.prototype.death = null;