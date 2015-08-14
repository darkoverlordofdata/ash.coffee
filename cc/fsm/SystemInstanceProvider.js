goog.provide('ash.fsm.SystemInstanceProvider');
/*
 * This System provider always returns the same instance of the component. The system
 * is passed to the provider at initialisation.
 */

/**
 * @constructor
 *
 * @param {Object} instance The instance to return whenever a System is requested.
 */
ash.fsm.SystemInstanceProvider = function(_at_instance) {
  this.instance = _at_instance;
}

/**
 * @type {Object}
 */
ash.fsm.SystemInstanceProvider.prototype.instance = null;

/**
 * @type {number}
 */
ash.fsm.SystemInstanceProvider.prototype.systemPriority = 0;

/**
 * Used to request a component from this provider
 *
 * @return {Object} The instance of the System
 */
ash.fsm.SystemInstanceProvider.prototype.getSystem = function() {
  return this.instance;
};
Object.defineProperties(ash.fsm.SystemInstanceProvider.prototype, {
  
/**
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @type {Object} The instance
   */
  identifier: {
    get: function() {
      return this.instance;
    }
  },
  
/**
   * The priority at which the System should be added to the Engine
   * @type {number}
   */
  priority: {
    get: function() {
      return this.systemPriority;
    },
    set: function(value) {
      return this.systemPriority = value;
    }
  }
});