// Generated by CoffeeScript 1.9.0

/*
 *
 * export ash
 *
 */
(function(root, factory) {
  'use strict';

  /*
   * Export ash - umd header
   */
  if ('function' === typeof define && define.amd) {
    define(factory);
  } else if ('object' === typeof exports) {
    module.exports = factory();
  } else {
    root['ash'] = factory();
  }
})(this, (function() {
  return ash;
}));

//# sourceMappingURL=export.js.map
