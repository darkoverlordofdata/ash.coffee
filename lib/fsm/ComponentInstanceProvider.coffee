###
 * This component provider always returns the same instance of the component. The instance
 * is passed to the provider at initialisation.
###
'use strict'

class ash.fsm.ComponentInstanceProvider

  instance: null

  ###
   * Constructor
   *
   * @param instance The instance to return whenever a component is requested.
  ###
  constructor: (@instance) ->

  ###
   * Used to request a component from this provider
   *
   * @return The instance
  ###
  getComponent: () ->
    return @instance

  ###
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
  ###
  Object.defineProperties ComponentInstanceProvider::,
    identifier: get: -> return @instance
