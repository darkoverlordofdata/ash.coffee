###
 * This System provider returns results of a method call. The method
 * is passed to the provider at initialisation.
###
'use strict'

class ash.fsm.DynamicSystemProvider

  ###*
   * @type {Function}
  ###
  method: ->
    
  ###*
   * @type {number}
  ###
  systemPriority: 0

  ###*
   * @constructor
   * @param {Function} method The method that returns the System instance;
  ###
  constructor: (@method) ->

  ###
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return {Function} The method used to call the System instances
  ###
  getSystem: () ->
    return @method()

  Object.defineProperties DynamicSystemProvider::,
    ###
     * The priority at which the System should be added to the Engine
     * @return {Function}
    ###
    identifier: get: -> @method
    ###
     * The priority at which the System should be added to the Engine
     * @return {number}
    ###
    priority:
      get: -> @systemPriority
      set: (value) ->
        @systemPriority = value


