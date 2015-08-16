goog.provide('asteroids.graphics.WaitForStartView');

goog.require('ash.signals.Signal0');

asteroids.graphics.WaitForStartView = function(_at_graphic) {
  this.graphic = _at_graphic;
  this.click = new ash.signals.Signal0();
  this.gameOver = this.createGameOver;
  this.instructions = this.createInstructions;
  this.clickToStart = this.createClickToStart;
  this.graphic.canvas.addEventListener('click', (function(_this) {
    return function(event) {
      return _this.click.dispatch();
    };
  })(this));
}
asteroids.graphics.WaitForStartView.prototype.x = 0;
asteroids.graphics.WaitForStartView.prototype.y = 0;
asteroids.graphics.WaitForStartView.prototype.width = 4;
asteroids.graphics.WaitForStartView.prototype.height = 4;
asteroids.graphics.WaitForStartView.prototype.rotation = 0;
asteroids.graphics.WaitForStartView.prototype.graphic = null;
asteroids.graphics.WaitForStartView.prototype.gameOver = null;
asteroids.graphics.WaitForStartView.prototype.clickToStart = null;
asteroids.graphics.WaitForStartView.prototype.instructions = null;
asteroids.graphics.WaitForStartView.prototype.click = null;
asteroids.graphics.WaitForStartView.prototype.createGameOver = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = 'bold 32px Helvetica';
  this.graphic.fillStyle = '#FFFFFF';
  s = 'ASTEROIDS';
  l = this.graphic.measureText(s);
  x = Math.floor(((window.innerWidth * window.devicePixelRatio) - l.width) / 2);
  y = 175;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.createClickToStart = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = 'bold 18px Helvetica';
  this.graphic.fillStyle = '#FFFFFF';
  s = 'CLICK TO START';
  l = this.graphic.measureText(s);
  x = Math.floor(((window.innerWidth * window.devicePixelRatio) - l.width) / 2);
  y = 225;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.createInstructions = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = 'bold 14px Helvetica';
  this.graphic.fillStyle = '#FFFFFF';
  s = 'CTRL-Z to Fire  ~  Arrow Keys to Move';
  l = this.graphic.measureText(s);
  x = 10;
  y = window.innerHeight * window.devicePixelRatio - 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.draw = function() {
  this.gameOver();
  this.clickToStart();
  this.instructions();
};