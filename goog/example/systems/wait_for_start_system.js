goog.provide('asteroids.systems.WaitForStartSystem');
goog.require('ash.core.System');
goog.require('asteroids.nodes.WaitForStartNode');
goog.require('asteroids.nodes.AsteroidCollisionNode');
goog.require('asteroids.nodes.GameNode');

asteroids.systems.WaitForStartSystem = function(_at_creator) {
  this.creator = _at_creator;
  this.update = goog.bind(this.update, this);
}
goog.inherits(asteroids.systems.WaitForStartSystem, ash.core.System);
asteroids.systems.WaitForStartSystem.prototype.engine = null;
asteroids.systems.WaitForStartSystem.prototype.creator = null;
asteroids.systems.WaitForStartSystem.prototype.gameNodes = null;
asteroids.systems.WaitForStartSystem.prototype.waitNodes = null;
asteroids.systems.WaitForStartSystem.prototype.asteroids = null;
asteroids.systems.WaitForStartSystem.prototype.addToEngine = function(engine) {
  this.engine = engine;
  this.waitNodes = engine.getNodeList(asteroids.nodes.WaitForStartNode);
  this.gameNodes = engine.getNodeList(asteroids.nodes.GameNode);
  this.asteroids = engine.getNodeList(asteroids.nodes.AsteroidCollisionNode);
};
asteroids.systems.WaitForStartSystem.prototype.removeFromEngine = function(engine) {
  this.waitNodes = null;
  this.gameNodes = null;
};
asteroids.systems.WaitForStartSystem.prototype.update = function(time) {
  var asteroid, game, node;
  node = this.waitNodes.head;
  game = this.gameNodes.head;
  if (node && node.wait.startGame && game) {
    asteroid = this.asteroids.head;
    while (asteroid) {
      this.creator.destroyEntity(asteroid.entity);
      asteroid = asteroid.next;
    }
    game.state.setForStart();
    node.wait.startGame = false;
    this.engine.removeEntity(node.entity);
  }
};