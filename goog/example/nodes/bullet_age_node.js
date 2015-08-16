goog.provide('asteroids.nodes.BulletAgeNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Bullet');
asteroids.nodes.BulletAgeNode = function() {
  return asteroids.nodes.BulletAgeNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.BulletAgeNode, ash.core.Node);
asteroids.nodes.BulletAgeNode.classnName = 'BulletAgeNode';
asteroids.nodes.BulletAgeNode.components = {
  bullet: asteroids.components.Bullet
};
asteroids.nodes.BulletAgeNode.prototype.bullet = null;