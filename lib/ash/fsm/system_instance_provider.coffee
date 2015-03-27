###
 * This System provider always returns the same instance of the component. The system
 * is passed to the provider at initialisation.
###
ash.fsm.SystemInstanceProvider = class SystemInstanceProvider

  instance: null
  systemPriority: 0

  ###
   * Constructor
   *
   * @param instance The instance to return whenever a System is requested.
  ###
  constructor: (@instance) ->

  ###
   * Used to request a component from this provider
   *
   * @return The instance of the System
  ###
  getSystem: () ->
    return @instance

  Object.defineProperties SystemInstanceProvider::,
    ###
     * Used to compare this provider with others. Any provider that returns the same component
     * instance will be regarded as equivalent.
     *
     * @return The instance
    ###
    identifier:
      get: -> return @instance
    ###
     * The priority at which the System should be added to the Engine
    ###
    priority:
      get: -> @systemPriority
      set: (value) -> @systemPriority = value

