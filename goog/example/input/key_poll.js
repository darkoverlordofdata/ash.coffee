goog.provide('asteroids.input.KeyPoll');

asteroids.input.KeyPoll = function(_at_displayObj) {
  this.displayObj = _at_displayObj;
  this.isUp = goog.bind(this.isUp, this);
  this.isDown = goog.bind(this.isDown, this);
  this.keyUpListener = goog.bind(this.keyUpListener, this);
  this.keyDownListener = goog.bind(this.keyDownListener, this);
  this.states = {};
  this.displayObj.addEventListener("keydown", this.keyDownListener);
  this.displayObj.addEventListener("keyup", this.keyUpListener);
}
asteroids.input.KeyPoll.prototype.states = null;
asteroids.input.KeyPoll.prototype.displayObj = null;
asteroids.input.KeyPoll.prototype.keyDownListener = function(event) {
  this.states[event.keyCode] = true;
};
asteroids.input.KeyPoll.prototype.keyUpListener = function(event) {
  if (this.states[event.keyCode]) {
    this.states[event.keyCode] = false;
  }
};
asteroids.input.KeyPoll.prototype.isDown = function(keyCode) {
  return this.states[keyCode];
};
asteroids.input.KeyPoll.prototype.isUp = function(keyCode) {
  return !this.states[keyCode];
};