###
 * Represents a state for an EntityStateMachine. The state contains any number of ComponentProviders which
 * are used to add components to the entity when this state is entered.
###
'use strict'

Dictionary = ash.ext.Dictionary
StateComponentMapping = ash.fsm.StateComponentMapping
Util = ash.ext.Util


class ash.fsm.EntityState

  ###*
   * @type {ash.ext.Dictionary}
  ###
  providers: null

  ###*
   * @constructor
  ###
  constructor: ->
    @providers = new Dictionary()

  ###*
   * Add a new ComponentMapping to this state. The mapping is a utility class that is used to
   * map a component type to the provider that provides the component.
   *
   * @param {Function} type The type of component to be mapped
   * @return {ash.fsm.StateComponentMapping} The component mapping to use when setting the provider for the component
  ###
  add: (type) ->
    return new StateComponentMapping(this, Util.getClassName(type))

  ###*
   * Get the ComponentProvider for a particular component type.
   *
   * @param {Function} type The type of component to get the provider for
   * @return {Object} The ComponentProvider
  ###
  get: (type) ->
    return @providers[type]
    # todo: 
    # return @providers[getClassName(type)]

  ###*
   * To determine whether this state has a provider for a specific component type.
   *
   * @param {Function} type The type of component to look for a provider for
   * @return {boolean} true if there is a provider for the given type, false otherwise
  ###
  has: (type) ->
    return @providers[type] isnt null
    # todo: 
    # return @providers[getClassName(type)]?
    