goog.provide('ash.export');

/*
 *
 * export ash
 *
 */
(function(root, factory) {
  

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
