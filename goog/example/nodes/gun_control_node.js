goog.provide('asteroids.nodes.GunControlNode');
goog.require('ash.core.Node');
goog.require('asteroids.components.Audio');
goog.require('asteroids.components.GunControls');
goog.require('asteroids.components.Gun');
goog.require('asteroids.components.Position');
asteroids.nodes.GunControlNode = function() {
  return asteroids.nodes.GunControlNode.superClass_.constructor.apply(this, arguments);
}
goog.inherits(asteroids.nodes.GunControlNode, ash.core.Node);
asteroids.nodes.GunControlNode.className = 'GunControlNode';
asteroids.nodes.GunControlNode.components = {
  audio: asteroids.components.Audio,
  control: asteroids.components.GunControls,
  gun: asteroids.components.Gun,
  position: asteroids.components.Position
};
asteroids.nodes.GunControlNode.prototype.control = null;
asteroids.nodes.GunControlNode.prototype.gun = null;
asteroids.nodes.GunControlNode.prototype.position = null;
asteroids.nodes.GunControlNode.prototype.audio = null;