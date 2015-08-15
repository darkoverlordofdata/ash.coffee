'use strict'

class ash.fsm.ComponentTypeProvider

  ###*
   * @type {Function}
  ###
  componentType: null

  ###*
   * @constructor
   * @param {Function} type The type of the single instance
  ###
  constructor: (type) ->
    @componentType = type

  ###*
   * Used to request a component from this provider
   *
   * @return {Object} The instance
  ###
  getComponent: () ->
    return new @componentType()

  ###*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return {Object} The instance
  ###
  getIdentifier: -> return @componentType



