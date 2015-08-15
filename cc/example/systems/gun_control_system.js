goog.provide('asteroids.systems.GunControlSystem');
goog.require('ash.tools.ListIteratingSystem');
goog.require('asteroids.nodes.GunControlNode');

asteroids.systems.GunControlSystem = function(_at_keyPoll, _at_creator) {
  this.keyPoll = _at_keyPoll;
  this.creator = _at_creator;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.GunControlSystem.superClass_.constructor.call(this, asteroids.nodes.GunControlNode, this.updateNode);
}
goog.inherits(asteroids.systems.GunControlSystem, ash.tools.ListIteratingSystem);
asteroids.systems.GunControlSystem.prototype.keyPoll = null;
asteroids.systems.GunControlSystem.prototype.creator = null;
asteroids.systems.GunControlSystem.prototype.updateNode = function(node, time) {
  var control, gun, position;
  control = node.control;
  position = node.position;
  gun = node.gun;
  gun.shooting = this.keyPoll.isDown(control.trigger);
  gun.timeSinceLastShot += time;
  if (gun.shooting && gun.timeSinceLastShot >= gun.minimumShotInterval) {
    this.creator.createUserBullet(gun, position);
    gun.timeSinceLastShot = 0;
  }
};