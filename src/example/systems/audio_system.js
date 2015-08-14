// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  var AudioNode,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  AudioNode = asteroids.nodes.AudioNode;

  asteroids.systems.AudioSystem = (function(superClass) {
    extend(AudioSystem, superClass);

    function AudioSystem() {
      this.updateNode = bind(this.updateNode, this);
      AudioSystem.__super__.constructor.call(this, AudioNode, this.updateNode);
    }

    AudioSystem.prototype.updateNode = function(node, time) {
      var each, ref, sound, type;
      ref = node.audio.toPlay;
      for (each in ref) {
        type = ref[each];
        sound = new type();
        sound.play(0, 1);
      }
      node.audio.toPlay.length = 0;
    };

    return AudioSystem;

  })(ash.tools.ListIteratingSystem);

}).call(this);

//# sourceMappingURL=audio_system.js.map
