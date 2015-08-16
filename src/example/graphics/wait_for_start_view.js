// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var Signal0;

  Signal0 = ash.signals.Signal0;

  asteroids.graphics.WaitForStartView = (function() {
    WaitForStartView.prototype.x = 0;

    WaitForStartView.prototype.y = 0;

    WaitForStartView.prototype.width = 4;

    WaitForStartView.prototype.height = 4;

    WaitForStartView.prototype.rotation = 0;

    WaitForStartView.prototype.graphic = null;

    WaitForStartView.prototype.gameOver = null;

    WaitForStartView.prototype.clickToStart = null;

    WaitForStartView.prototype.instructions = null;

    WaitForStartView.prototype.click = null;

    function WaitForStartView(_at_graphic) {
      this.graphic = _at_graphic;
      this.click = new Signal0();
      this.gameOver = this.createGameOver;
      this.instructions = this.createInstructions;
      this.clickToStart = this.createClickToStart;
      this.graphic.canvas.addEventListener('click', (function(_this) {
        return function(event) {
          return _this.click.dispatch();
        };
      })(this));
    }

    WaitForStartView.prototype.createGameOver = function() {
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

    WaitForStartView.prototype.createClickToStart = function() {
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

    WaitForStartView.prototype.createInstructions = function() {
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

    WaitForStartView.prototype.draw = function() {
      this.gameOver();
      this.clickToStart();
      this.instructions();
    };

    return WaitForStartView;

  })();

}).call(this);

//# sourceMappingURL=wait_for_start_view.js.map
