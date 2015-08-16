'use strict';
var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

asteroids.ui.Shape = (function(_super) {
  __extends(Shape, _super);

  function Shape() {
    return Shape.__super__.constructor.apply(this, arguments);
  }

  return Shape;

})(asteroids.ui.Container);
