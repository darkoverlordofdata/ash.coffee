// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var Point;

  Point = asteroids.ui.Point;

  asteroids.components.Gun = (function() {
    Gun.className = 'Gun';

    Gun.prototype.shooting = false;

    Gun.prototype.offsetFromParent = null;

    Gun.prototype.timeSinceLastShot = 0;

    Gun.prototype.offsetFromParent = null;

    function Gun(offsetX, offsetY, _at_minimumShotInterval, _at_bulletLifetime) {
      this.minimumShotInterval = _at_minimumShotInterval;
      this.bulletLifetime = _at_bulletLifetime;
      this.shooting = false;
      this.offsetFromParent = null;
      this.timeSinceLastShot = 0;
      this.offsetFromParent = new Point(offsetX, offsetY);
    }

    return Gun;

  })();

}).call(this);

//# sourceMappingURL=gun.js.map
