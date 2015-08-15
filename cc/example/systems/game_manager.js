goog.provide('asteroids.systems.GameManager');
goog.require('ash.core.System');
goog.require('asteroids.nodes.GameNode');
goog.require('asteroids.nodes.SpaceshipNode');
goog.require('asteroids.nodes.AsteroidCollisionNode');
goog.require('asteroids.nodes.BulletCollisionNode');
goog.require('asteroids.ui.Point');

asteroids.systems.GameManager = function(_at_creator, _at_config) {
  this.creator = _at_creator;
  this.config = _at_config;
  this.update = goog.bind(this.update, this);
}
goog.inherits(asteroids.systems.GameManager, ash.core.System);
asteroids.systems.GameManager.prototype.config = null;
asteroids.systems.GameManager.prototype.creator = null;
asteroids.systems.GameManager.prototype.gameNodes = null;
asteroids.systems.GameManager.prototype.spaceships = null;
asteroids.systems.GameManager.prototype.asteroids = null;
asteroids.systems.GameManager.prototype.bullets = null;
asteroids.systems.GameManager.prototype.addToEngine = function(engine) {
  this.gameNodes = engine.getNodeList(asteroids.nodes.GameNode);
  this.spaceships = engine.getNodeList(asteroids.nodes.SpaceshipNode);
  this.asteroids = engine.getNodeList(asteroids.nodes.AsteroidCollisionNode);
  this.bullets = engine.getNodeList(asteroids.nodes.BulletCollisionNode);
};
asteroids.systems.GameManager.prototype.update = function(time) {
  var asteroid, asteroidCount, clearToAddSpaceship, i, newSpaceshipPosition, node, position, spaceship;
  node = this.gameNodes.head;
  if (node && node.state.playing) {
    if (this.spaceships.empty) {
      if (node.state.lives > 0) {
        newSpaceshipPosition = new asteroids.ui.Point(this.config.width * 0.5, this.config.height * 0.5);
        clearToAddSpaceship = true;
        asteroid = this.asteroids.head;
        while (asteroid) {
          if (asteroids.ui.Point.distance(asteroid.position.position, newSpaceshipPosition) <= asteroid.collision.radius + 50) {
            clearToAddSpaceship = false;
            break;
          }
          asteroid = asteroid.next;
        }
        if (clearToAddSpaceship) {
          this.creator.createSpaceship();
        }
      } else {
        node.state.playing = false;
        this.creator.createWaitForClick();
      }
    }
    if (this.asteroids.empty && this.bullets.empty && !this.spaceships.empty) {
      spaceship = this.spaceships.head;
      node.state.level++;
      asteroidCount = 2 + node.state.level;
      i = 0;
      while (i < asteroidCount) {
        while (true) {
          position = new asteroids.ui.Point(Math.random() * this.config.width, Math.random() * this.config.height);
          if (!(asteroids.ui.Point.distance(position, spaceship.position.position) <= 80)) {
            break;
          }
        }
        this.creator.createAsteroid(30, position.x, position.y);
        ++i;
      }
    }
  }
};
asteroids.systems.GameManager.prototype.removeFromEngine = function(engine) {
  this.gameNodes = null;
  this.spaceships = null;
  this.asteroids = null;
  this.bullets = null;
};