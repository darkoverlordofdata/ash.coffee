// Generated by CoffeeScript 1.9.0

/*
 * A Helper for Components & Nodes
 *
 * Creates a common registry object
 * Fix-up up Node templates
 */

(function() {
  'use strict';
  ash.ext.Helper = (function() {

    /**
     * @type {Object}
     */
    Helper.prototype.components = null;


    /**
     * @type {Object}
     */

    Helper.prototype.nodes = null;


    /**
     * @constructor
     * @param {Object} components
     * @param {Object} nodes
     */

    function Helper(components, nodes) {
      var klass, name, property, type, _ref;
      this.components = {};
      this.nodes = {};

      /*
       * register components
       */
      if (components != null) {
        for (name in components) {
          klass = components[name];
          this.components[name] = klass;
        }
      }

      /*
       * register nodes
       */
      if (nodes != null) {
        for (name in nodes) {
          klass = nodes[name];

          /*
           * convert template to an actual node class
           */
          if (klass.components == null) {
            klass.components = {};
            _ref = klass.prototype;
            for (property in _ref) {
              type = _ref[property];
              klass.components[property] = type;
              klass.prototype[property] = null;
            }
            klass.prototype.entity = null;
            klass.prototype.previous = null;
            klass.prototype.next = null;
          }
          if (components != null) {
            this.nodes[name] = klass;
          }
        }
      }
    }

    return Helper;

  })();

}).call(this);

//# sourceMappingURL=Helper.js.map
