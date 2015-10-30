// Generated by CoffeeScript 1.9.0

/*
 * Used by the EntityState class to create the mappings of components to providers via a fluent interface.
 */

(function() {
  'use strict';
  var ComponentInstanceProvider, ComponentSingletonProvider, ComponentTypeProvider, DynamicComponentProvider;

  ComponentInstanceProvider = ash.fsm.ComponentInstanceProvider;

  ComponentTypeProvider = ash.fsm.ComponentTypeProvider;

  ComponentSingletonProvider = ash.fsm.ComponentSingletonProvider;

  DynamicComponentProvider = ash.fsm.DynamicComponentProvider;

  ash.fsm.StateComponentMapping = (function() {

    /**
     * @type {Function}
     */
    StateComponentMapping.prototype.componentType = null;


    /**
     * @type {ash.fsm.EntityState}
     */

    StateComponentMapping.prototype.creatingState = null;


    /**
     * @type {Object}
     */

    StateComponentMapping.prototype.provider = null;


    /**
     * Used internally, the constructor creates a component mapping. The constructor
     * creates a ComponentTypeProvider as the default mapping, which will be replaced
     * by more specific mappings if other methods are called.
     *
     * @constructor
     * @param {ash.fsm.EntityState} creatingState The EntityState that the mapping will belong to
     * @param {Function} type The component type for the mapping
     */

    function StateComponentMapping(_at_creatingState, type) {
      this.creatingState = _at_creatingState;
      this.componentType = type;
      this.withType(type);
    }


    /**
     * Creates a mapping for the component type to a specific component instance. A
     * ComponentInstanceProvider is used for the mapping.
     *
     * @param {Object} component The component instance to use for the mapping
     * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
     */

    StateComponentMapping.prototype.withInstance = function(component) {
      this.setProvider(new ComponentInstanceProvider(component));
      return this;
    };


    /**
     * Creates a mapping for the component type to new instances of the provided type.
     * The type should be the same as or extend the type for this mapping. A ComponentTypeProvider
     * is used for the mapping.
     *
     * @param {Function} type The type of components to be created by this mapping
     * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
     */

    StateComponentMapping.prototype.withType = function(type) {
      this.setProvider(new ComponentTypeProvider(type));
      return this;
    };


    /**
     * Creates a mapping for the component type to a single instance of the provided type.
     * The instance is not created until it is first requested. The type should be the same
     * as or extend the type for this mapping. A ComponentSingletonProvider is used for
     * the mapping.
     *
     * @param {Function} The type of the single instance to be created. If omitted, the type of the
     * mapping is used.
     * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
     */

    StateComponentMapping.prototype.withSingleton = function(type) {
      if (type == null) {
        type = this.componentType;
      }
      this.setProvider(new ComponentSingletonProvider(type));
      return this;
    };


    /**
     * Creates a mapping for the component type to a method call. A
     * DynamicComponentProvider is used for the mapping.
     *
     * @param {Function} method The method to return the component instance
     * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
     */

    StateComponentMapping.prototype.withMethod = function(method) {
      this.setProvider(new DynamicComponentProvider(method));
      return this;
    };


    /** 
     * Creates a mapping for the component type to any ComponentProvider.
     *
     * @param {Object} provider The component provider to use.
     * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied.
     */

    StateComponentMapping.prototype.withProvider = function(provider) {
      this.setProvider(provider);
      return this;
    };


    /**
     * Maps through to the add method of the EntityState that this mapping belongs to
     * so that a fluent interface can be used when configuring entity states.
     *
     * @param {Function} type The type of component to add a mapping to the state for
     * @return {ash.fsm.StateComponentMapping} The new ComponentMapping for that type
     */

    StateComponentMapping.prototype.add = function(type) {
      return this.creatingState.add(type);
    };


    /**
     * @param {Object} provider
     */

    StateComponentMapping.prototype.setProvider = function(provider) {
      this.provider = provider;
      return this.creatingState.providers[this.componentType] = provider;
    };

    return StateComponentMapping;

  })();

}).call(this);

//# sourceMappingURL=StateComponentMapping.js.map
