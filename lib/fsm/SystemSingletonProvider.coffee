###
 * This System provider always returns the same instance of the System. The instance
 * is created when first required and is of the type passed in to the constructor.
###
'use strict'

class ash.fsm.SystemSingletonProvider

  ###*
   * @type {Object}
  ###
  componentType: null
  
  ###*
   * @type {Object}
  ###
  instance: null
  
  ###*
   * @type {number}
  ###
  systemPriority: 0

  ###*
   * @constructor
   *
   * @param {Function} type The type of the single System instance
  ###
  constructor: (type) ->
    @componentType = type

  ###*
   * Used to request a System from this provider
   *
   * @return {Object} The single instance
  ###
  getSystem: () ->
    if (not @instance)
      @instance = new @componentType()
    @instance

  Object.defineProperties SystemSingletonProvider::,
    ###*
		 * Used to compare this provider with others. Any provider that returns the same single
		 * instance will be regarded as equivalent.
		 *
		 * @type {Object} The single instance
    ###
    identifier:
      get: -> return @getSystem()
    ###*
     * The priority at which the System should be added to the Engine
     * @type {Object} 
    ###
    priority:
      get: -> @systemPriority
      set: (value) -> @systemPriority = value

