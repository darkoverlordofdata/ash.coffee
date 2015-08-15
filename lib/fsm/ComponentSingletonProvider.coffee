'use strict'

class ash.fsm.ComponentSingletonProvider

  ###*
   * @type {Function}
  ###
  componentType: null
  
  ###*
   * @type {Object}
  ###
  instance: null

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
    if not @instance?
      @instance = new @componentType()
    return @instance

  ###*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return {Object} The instance
  ###
  getIdentifier: -> return @getComponent()



