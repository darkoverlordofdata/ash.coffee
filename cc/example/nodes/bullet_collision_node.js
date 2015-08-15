goog.provide('asteroids.nodes.BulletCollisionNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Bullet');
goog.require('asteroids.components.Position');
goog.require('asteroids.components.Collision');
asteroids.nodes.BulletCollisionNode = function() {
  return asteroids.nodes.BulletCollisionNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.BulletCollisionNode, ash.core.Node);
asteroids.nodes.BulletCollisionNode.className = 'BulletCollisionNode';
asteroids.nodes.BulletCollisionNode.components = {
  bullet: asteroids.components.Bullet,
  position: asteroids.components.Position,
  collision: asteroids.components.Collision
};
asteroids.nodes.BulletCollisionNode.prototype.bullet = null;
asteroids.nodes.BulletCollisionNode.prototype.position = null;
asteroids.nodes.BulletCollisionNode.prototype.collision = null;