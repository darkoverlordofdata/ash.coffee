###
 * This is a state machine for the Engine. The state machine manages a set of states,
 * each of which has a set of System providers. When the state machine changes the state, it removes
 * Systems associated with the previous state and adds Systems associated with the new state.
###
'use strict'

Dictionary = ash.ext.Dictionary
EngineState = ash.fsm.EngineState

class ash.fsm.EngineStateMachine

  ###*
   * @type {ash.core.Engine}
  ###
  engine: null
  
  ###*
   * @type {ash.ext.Dictionary}
  ###
  states: null
  
  ###*
   * @type {ash.fsm.EngineState}
  ###
  currentState: null

  ###*
   * Creates an SystemStateMachine.
   * @constructor 
   * @param {ash.core.Engine} engine
  ###
  constructor: (@engine) ->
    @states = new Dictionary()

  ###*
   * Add a state to this state machine.
   *
   * @param {string} name The name of this state - used to identify it later in the changeState method call.
   * @param {ash.fsm.EngineState} state The state.
   * @return {ash.fsm.EngineStateMachine} This state machine, so methods can be chained.
  ###
  addState: (name, state) ->
    @states[name] = state
    return this

  ###*
   * Create a new state in this state machine.
   *
   * @param {string} name The name of the new state - used to identify it later in the changeState method call.
   * @return {ash.fsm.EngineState} The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
  ###
  createState: (name) ->
    state = new EngineState()
    @states[name] = state
    return this

  ###*
   * Change to a new state. The Systems from the old state will be removed and the Systems
   * for the new state will be added.
   *
   * @param {string} name The name of the state to change to.
  ###
  changeState: (name) ->
    newState = @states[name]
    if (not newState?)
      throw(new Error("Engine state " + name + " doesn't exist"))

    if (newState is @currentState)
      newState = null
      return

    toAdd = new Dictionary()
    for each, provider of newState.providers
      id = provider.getIdentifier()
      toAdd[id] = provider

    if (currentState)

      for each, provider of @currentState.providers
        id = provider.getIdentifier()
        other = toAdd[id]

        if (other)
          delete toAdd[id]
        else
          @engine.removeSystem(provider.getSystem())

    for each, provider of toAdd
      @engine.addSystem(provider.getSystem(), provider.priority)

    @currentState = newState
    