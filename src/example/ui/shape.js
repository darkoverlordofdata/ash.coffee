// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  asteroids.ui.Shape = (function(superClass) {
    extend(Shape, superClass);

    function Shape() {
      return Shape.__super__.constructor.apply(this, arguments);
    }

    return Shape;

  })(asteroids.ui.Container);

}).call(this);

//# sourceMappingURL=shape.js.map