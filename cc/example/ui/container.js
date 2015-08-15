'use strict';
asteroids.ui.Container = (function() {
  Container.prototype.graphic = null;

  Container.prototype.children = null;

  function Container(_at_graphic) {
    this.graphic = _at_graphic;
    this.children = [];
  }

  Container.prototype.addChild = function(child) {
    return this.children.push(child);
  };

  Container.prototype.draw = function() {
    var child, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = children.length; _i < _len; _i++) {
      child = children[_i];
      _results.push(child.draw());
    }
    return _results;
  };

  return Container;

})();
