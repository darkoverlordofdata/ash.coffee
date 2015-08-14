// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  asteroids.components.Audio = (function() {
    Audio.prototype.toPlay = null;

    function Audio() {
      this.toPlay = [];
    }

    Audio.prototype.play = function(sound) {
      return this.toPlay.push(sound);
    };

    return Audio;

  })();

}).call(this);

//# sourceMappingURL=audio.js.map