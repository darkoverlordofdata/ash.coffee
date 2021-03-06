'use strict'

###*
 * @extends {ash.signals.SignalBase}
 * @constructor
###
class ash.signals.Signal1 extends ash.signals.SignalBase

  ###*
   * dispatch the event
   * @param {any} 
  ###
  dispatch: ($1) ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener($1)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()
    