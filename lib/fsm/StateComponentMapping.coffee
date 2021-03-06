###
 * Used by the EntityState class to create the mappings of components to providers via a fluent interface.
###
'use strict'

ComponentInstanceProvider = ash.fsm.ComponentInstanceProvider
ComponentTypeProvider = ash.fsm.ComponentTypeProvider
ComponentSingletonProvider = ash.fsm.ComponentSingletonProvider
DynamicComponentProvider = ash.fsm.DynamicComponentProvider

class ash.fsm.StateComponentMapping

  ###*
   * @type {Function}
  ###
  componentType: null
  
  ###*
   * @type {ash.fsm.EntityState}
  ###
  creatingState: null
  
  ###*
   * @type {Object}
  ###
  provider: null


  ###*
   * Used internally, the constructor creates a component mapping. The constructor
   * creates a ComponentTypeProvider as the default mapping, which will be replaced
   * by more specific mappings if other methods are called.
   *
   * @constructor
   * @param {ash.fsm.EntityState} creatingState The EntityState that the mapping will belong to
   * @param {Function} type The component type for the mapping
  ###
  constructor: (@creatingState, type) ->
    @componentType = type
    @withType(type)

  ###*
   * Creates a mapping for the component type to a specific component instance. A
   * ComponentInstanceProvider is used for the mapping.
   *
   * @param {Object} component The component instance to use for the mapping
   * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
  ###
  withInstance: (component) ->
    @setProvider(new ComponentInstanceProvider(component))
    return this

  ###*
   * Creates a mapping for the component type to new instances of the provided type.
   * The type should be the same as or extend the type for this mapping. A ComponentTypeProvider
   * is used for the mapping.
   *
   * @param {Function} type The type of components to be created by this mapping
   * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
  ###
  withType: (type) ->
    @setProvider(new ComponentTypeProvider(type))
    return this

  ###*
   * Creates a mapping for the component type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A ComponentSingletonProvider is used for
   * the mapping.
   *
   * @param {Function} The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
  ###
  withSingleton: (type = @componentType) ->
    @setProvider(new ComponentSingletonProvider(type))
    return this

  ###*
   * Creates a mapping for the component type to a method call. A
   * DynamicComponentProvider is used for the mapping.
   *
   * @param {Function} method The method to return the component instance
   * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied
  ###
  withMethod: (method) ->
    @setProvider(new DynamicComponentProvider(method))
    return this

  ###* 
   * Creates a mapping for the component type to any ComponentProvider.
   *
   * @param {Object} provider The component provider to use.
   * @return {ash.fsm.StateComponentMapping} This ComponentMapping, so more modifications can be applied.
  ###
  withProvider: (provider) ->
    @setProvider(provider)
    return this

  ###*
   * Maps through to the add method of the EntityState that this mapping belongs to
   * so that a fluent interface can be used when configuring entity states.
   *
   * @param {Function} type The type of component to add a mapping to the state for
   * @return {ash.fsm.StateComponentMapping} The new ComponentMapping for that type
  ###
  add: (type) ->
    return @creatingState.add(type)

  ###*
   * @param {Object} provider
  ###
  setProvider: (provider) ->
    @provider = provider
    @creatingState.providers[@componentType] = provider
