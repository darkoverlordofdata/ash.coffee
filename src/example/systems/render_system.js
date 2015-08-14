// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  var RenderNode,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  RenderNode = asteroids.nodes.RenderNode;

  asteroids.systems.RenderSystem = (function(superClass) {
    extend(RenderSystem, superClass);

    RenderSystem.prototype.graphic = null;

    RenderSystem.prototype.nodes = null;

    function RenderSystem(graphic1) {
      this.graphic = graphic1;
      this.update = bind(this.update, this);
    }

    RenderSystem.prototype.addToEngine = function(engine) {
      var node;
      this.nodes = engine.getNodeList(RenderNode);
      node = this.nodes.head;
      while (node) {
        this.addToDisplay(node);
        node = node.next;
      }
    };

    RenderSystem.prototype.addToDisplay = function(node) {};

    RenderSystem.prototype.removeFromDisplay = function(node) {};

    RenderSystem.prototype.removeFromEngine = function(engine) {
      this.nodes = null;
    };

    RenderSystem.prototype.update = function(time) {
      var display, graphic, node, position;
      this.graphic.save();
      this.graphic.translate(0, 0);
      this.graphic.rotate(0);
      this.graphic.clearRect(0, 0, this.graphic.canvas.width, this.graphic.canvas.height);
      node = this.nodes.head;
      while (node) {
        display = node.display;
        graphic = display.graphic;
        position = node.position;
        graphic.x = position.position.x;
        graphic.y = position.position.y;
        graphic.rotation = position.rotation;
        graphic.draw();
        node = node.next;
      }
      this.graphic.restore();
    };

    return RenderSystem;

  })(ash.core.System);

}).call(this);

//# sourceMappingURL=render_system.js.map