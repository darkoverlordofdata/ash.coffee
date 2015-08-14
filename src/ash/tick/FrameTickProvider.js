// Generated by CoffeeScript 1.9.3

/*
 * Uses the enter frame event to provide a frame tick where the frame duration is the time since the previous frame.
 * There is a maximum frame time parameter in the constructor that can be used to limit
 * the longest period a frame can be.
 */

(function() {
  'use strict';
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ash.tick.FrameTickProvider = (function(superClass) {
    extend(FrameTickProvider, superClass);

    FrameTickProvider.prototype.displayObject = null;

    FrameTickProvider.prototype.previousTime = 0;

    FrameTickProvider.prototype.maximumFrameTime = 0;

    FrameTickProvider.prototype.isPlaying = false;

    FrameTickProvider.prototype.request = null;


    /*
     * Applies a time adjustement factor to the tick, so you can slow down or speed up the entire engine.
     * The update tick time is multiplied by this value, so a value of 1 will run the engine at the normal rate.
     */

    FrameTickProvider.prototype.timeAdjustment = 1;

    function FrameTickProvider(displayObject, maximumFrameTime) {
      this.displayObject = displayObject;
      this.maximumFrameTime = maximumFrameTime;
      this.dispatchTick = bind(this.dispatchTick, this);
      FrameTickProvider.__super__.constructor.apply(this, arguments);
    }

    Object.defineProperties(FrameTickProvider.prototype, {
      playing: {
        get: function() {
          return this.isPlaying;
        }
      }
    });

    FrameTickProvider.prototype.start = function() {
      this.request = requestAnimationFrame(this.dispatchTick);
      this.isPlaying = true;
    };

    FrameTickProvider.prototype.stop = function() {
      cancelRequestAnimationFrame(this.request);
      this.isPlaying = false;
    };

    FrameTickProvider.prototype.dispatchTick = function(timestamp) {
      var frameTime, temp;
      if (timestamp == null) {
        timestamp = Date.now();
      }
      if (this.displayObject) {
        this.displayObject.begin();
      }
      temp = this.previousTime || timestamp;
      this.previousTime = timestamp;
      frameTime = (timestamp - temp) * 0.001;
      this.dispatch(frameTime);
      requestAnimationFrame(this.dispatchTick);
      if (this.displayObject) {
        this.displayObject.end();
      }
    };

    return FrameTickProvider;

  })(ash.signals.Signal1);

}).call(this);

//# sourceMappingURL=FrameTickProvider.js.map
