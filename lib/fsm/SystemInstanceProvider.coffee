###
 * This System provider always returns the same instance of the component. The system
 * is passed to the provider at initialisation.
###
'use strict'

class ash.fsm.SystemInstanceProvider

  ###*
   * @type {Object}
  ###
  instance: null
  
  ###*
   * The priority at which the System should be added to the Engine
   * @type {number}
  ###
  priority: 0

  ###*
   * @constructor
   *
   * @param {Object} instance The instance to return whenever a System is requested.
  ###
  constructor: (@instance) ->

  ###*
   * Used to request a component from this provider
   *
   * @return {Object} The instance of the System
  ###
  getSystem: () ->
    return @instance

  ###*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @type {Object} The instance
  ###
  getIdentifier: -> return @instance

