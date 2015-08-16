goog.provide('asteroids.graphics.BulletView');

asteroids.graphics.BulletView = function(_at_graphic) {
  this.graphic = _at_graphic;
}
asteroids.graphics.BulletView.prototype.x = 0;
asteroids.graphics.BulletView.prototype.y = 0;
asteroids.graphics.BulletView.prototype.width = 4;
asteroids.graphics.BulletView.prototype.height = 4;
asteroids.graphics.BulletView.prototype.rotation = 0;
asteroids.graphics.BulletView.prototype.graphic = null;
asteroids.graphics.BulletView.prototype.draw = function() {
  var graphic;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.rotate(this.rotation);
  graphic.fillStyle = "#FFFFFF";
  graphic.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
  graphic.fill();
  graphic.restore();
};