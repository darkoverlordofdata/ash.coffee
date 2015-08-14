// Generated by CoffeeScript 1.9.3

/*
 * This component provider always returns the same instance of the component. The instance
 * is passed to the provider at initialisation.
 */

(function() {
  'use strict';
  ash.fsm.ComponentInstanceProvider = (function() {
    ComponentInstanceProvider.prototype.instance = null;


    /*
     * Constructor
     *
     * @param instance The instance to return whenever a component is requested.
     */

    function ComponentInstanceProvider(instance) {
      this.instance = instance;
    }


    /*
     * Used to request a component from this provider
     *
     * @return The instance
     */

    ComponentInstanceProvider.prototype.getComponent = function() {
      return this.instance;
    };


    /*
     * Used to compare this provider with others. Any provider that returns the same component
     * instance will be regarded as equivalent.
     *
     * @return The instance
     */

    Object.defineProperties(ComponentInstanceProvider.prototype, {
      identifier: {
        get: function() {
          return this.instance;
        }
      }
    });

    return ComponentInstanceProvider;

  })();

}).call(this);

//# sourceMappingURL=ComponentInstanceProvider.js.map
