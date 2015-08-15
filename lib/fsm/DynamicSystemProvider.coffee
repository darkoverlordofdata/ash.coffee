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
   * The priority at which the System should be added to the Engine
   * @type {number}
  ###
  priority: 0

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

  ###
   * The priority at which the System should be added to the Engine
   * @return {Function}
  ###
  getIdentifier: -> return @method
