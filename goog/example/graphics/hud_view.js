goog.provide('asteroids.graphics.HudView');

asteroids.graphics.HudView = function(_at_graphic) {
  this.graphic = _at_graphic;
  this.setScore = goog.bind(this.setScore, this);
  this.setLives = goog.bind(this.setLives, this);
  this.draw = goog.bind(this.draw, this);
  this.drawScore = this.createScore;
  this.drawLives = this.createLives;
}
asteroids.graphics.HudView.prototype.x = 0;
asteroids.graphics.HudView.prototype.y = 0;
asteroids.graphics.HudView.prototype.width = 4;
asteroids.graphics.HudView.prototype.height = 4;
asteroids.graphics.HudView.prototype.rotation = 0;
asteroids.graphics.HudView.prototype.graphic = null;
asteroids.graphics.HudView.prototype.score = 0;
asteroids.graphics.HudView.prototype.lives = 3;
asteroids.graphics.HudView.prototype.drawScore = null;
asteroids.graphics.HudView.prototype.drawLives = null;
asteroids.graphics.HudView.prototype.draw = function() {
  this.drawScore();
  this.drawLives();
};
asteroids.graphics.HudView.prototype.setLives = function(lives) {
  return this.lives = lives;
};
asteroids.graphics.HudView.prototype.setScore = function(score) {
  return this.score = score;
};
asteroids.graphics.HudView.prototype.createLives = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = 'bold 18px Helvetica';
  this.graphic.fillStyle = '#FFFFFF';
  this.graphic.textAlign = 'center';
  s = "LIVES: " + this.lives;
  l = this.graphic.measureText(s);
  x = l.width;
  y = 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.HudView.prototype.createScore = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = 'bold 18px Helvetica';
  this.graphic.fillStyle = '#FFFFFF';
  this.graphic.textAlign = 'center';
  s = "SCORE: " + this.score;
  l = this.graphic.measureText(s);
  x = (window.window.innerWidth * window.devicePixelRatio) - l.width;
  y = 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};