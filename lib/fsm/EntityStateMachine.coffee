###
 * This is a state machine for an entity. The state machine manages a set of states,
 * each of which has a set of component providers. When the state machine changes the state, it removes
 * components associated with the previous state and adds components associated with the new state.
###
'use strict'

Dictionary = ash.ext.Dictionary
EntityState = ash.fsm.EntityState

class ash.fsm.EntityStateMachine

  ###*
   * @type {ash.ext.Dictionary}
  ###
  states: null

  ###*
	 * The current state of the state machine.
   * @type {ash.fsm.EntityState}
  ###
  currentState: null

  ###
   * The entity whose state machine this is
   * @type {ash.core.Entity}
  ###
  entity: null

  ###*
   * Creates an EntityStateMachine.
   * @constructor 
   * @param {ash.core.Entity}
  ###
  constructor: (@entity) ->
    @states = new Dictionary()

  ###*
		 * Add a state to this state machine.
		 *
		 * @param {string} name The name of this state - used to identify it later in the changeState method call.
		 * @param {ash.core.Entity} state The state.
		 * @return {ash.fsm.EntityStateMachine} This state machine, so methods can be chained.
  ###
  addState: (name, state) ->
    @states[name] = state
    return this

  ###*
   * Create a new state in this state machine.
   *
   * @param {string} name The name of the new state - used to identify it later in the changeState method call.
   * @return {ash.fsm.EntityState} The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
  ###
  createState: (name) ->
    state = new EntityState()
    @states[name] = state
    return state

  ###*
   * Change to a new state. The components from the old state will be removed and the components
   * for the new state will be added.
   *
   * @param {string} name The name of the state to change to.
  ###
  changeState: (name) ->
    newState = @states[name]
    if (not newState)
      throw(new Error("Entity state " + name + " doesn't exist"))

    if (newState is @currentState)
      newState = null
      return

    if (@currentState)
      toAdd = new Dictionary()
      for type of newState.providers
        toAdd[type] = newState.providers[type]
      for type of @currentState.providers
        other = toAdd[type]
        if other and other.identifier is @currentState.providers[type].identifier
          delete toAdd[type]
        else
          @entity.remove(type)
    else
      toAdd = newState.providers


    for type of toAdd
      @entity.add(toAdd[type].getComponent()) #, type)

    @currentState = newState
    