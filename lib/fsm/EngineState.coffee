###
 * Represents a state for a SystemStateMachine. The state contains any number of SystemProviders which
 * are used to add Systems to the Engine when this state is entered.
###
'use strict'
SystemInstanceProvider = ash.fsm.SystemInstanceProvider
SystemSingletonProvider = ash.fsm.SystemSingletonProvider
DynamicSystemProvider = ash.fsm.DynamicSystemProvider
StateSystemMapping = ash.fsm.StateSystemMapping

class ash.fsm.EngineState

  ###*
   * @type {Array<Object>}
  ###
  providers: null

  ###*
   * @constructor
  ###
  constructor: ->
    @providers = []

  ###*
   * Creates a mapping for the System type to a specific System instance. A
   * SystemInstanceProvider is used for the mapping.
   *
   * @param {ash.core.System} system The System instance to use for the mapping
   * @return {ash.fsm.StateSystemMapping} This StateSystemMapping, so more modifications can be applied
  ###
  addInstance: (system) ->
    return @addProvider(new SystemInstanceProvider(system))

  ###*
   * Creates a mapping for the System type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A SystemSingletonProvider is used for
   * the mapping.
   *
   * @param {Function} type The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return {ash.fsm.StateSystemMapping} This StateSystemMapping, so more modifications can be applied
  ###
  addSingleton: (type) ->
    return @addProvider(new SystemSingletonProvider(type))

  ###*
   * Creates a mapping for the System type to a method call.
   * The method should return a System instance. A DynamicSystemProvider is used for
   * the mapping.
   *
   * @param {Function} method The method to provide the System instance.
   * @return {ash.fsm.StateSystemMapping} This StateSystemMapping, so more modifications can be applied.
  ###
  addMethod: (method) ->
    return @addProvider(new DynamicSystemProvider(method))

  ###*
   * Adds any SystemProvider.
   *
   * @param provider The component provider to use.
   * @return {ash.fsm.StateSystemMapping} This StateSystemMapping, so more modifications can be applied.
  ###
  addProvider: (provider) ->
    mapping = new StateSystemMapping(this, provider)
    @providers.push(provider)
    return mapping
    