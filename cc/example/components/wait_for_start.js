goog.provide('asteroids.components.WaitForStart');

asteroids.components.WaitForStart = function(_at_waitForStart) {
  this.waitForStart = _at_waitForStart;
  this.setStartGame = goog.bind(this.setStartGame, this);
  this.waitForStart.click.add(this.setStartGame);
}
asteroids.components.WaitForStart.prototype.waitForStart = null;
asteroids.components.WaitForStart.prototype.startGame = false;
asteroids.components.WaitForStart.prototype.setStartGame = function() {
  this.startGame = true;
};