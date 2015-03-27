###
 * This System provider returns results of a method call. The method
 * is passed to the provider at initialisation.
###
ash.fsm.DynamicSystemProvider = class DynamicSystemProvider

  method: ->
  systemPriority: 0

  ###
   * Constructor
   *
   * @param method The method that returns the System instance;
  ###
  constructor: (@method) ->

  ###
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The method used to call the System instances
  ###
  getSystem: () ->
    return @method()

  Object.defineProperties DynamicSystemProvider::,
    ###
     * The priority at which the System should be added to the Engine
    ###
    identifier: get: -> @method
    ###
     * The priority at which the System should be added to the Engine
    ###
    priority:
      get: -> @systemPriority
      set: (value) ->
        @systemPriority = value


