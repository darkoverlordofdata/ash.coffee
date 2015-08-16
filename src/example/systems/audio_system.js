// Generated by CoffeeScript 1.9.0
(function() {
  'use strict';
  var AudioNode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  AudioNode = asteroids.nodes.AudioNode;

  asteroids.systems.AudioSystem = (function(_super) {
    __extends(AudioSystem, _super);

    function AudioSystem() {
      this.updateNode = __bind(this.updateNode, this);
      AudioSystem.__super__.constructor.call(this, AudioNode, this.updateNode);
    }

    AudioSystem.prototype.updateNode = function(node, time) {
      var each, sound, type, _ref;
      _ref = node.audio.toPlay;
      for (each in _ref) {
        type = _ref[each];
        sound = new type();
        sound.play(0, 1);
      }
      node.audio.toPlay.length = 0;
    };

    return AudioSystem;

  })(ash.tools.ListIteratingSystem);

}).call(this);

//# sourceMappingURL=audio_system.js.map
