'use strict'

###*
 * @extends {ash.signals.SignalBase}
 * @constructor
###
class ash.signals.Signal3 extends ash.signals.SignalBase

  ###*
   * dispatch the event
   * @param {any} 
   * @param {any} 
   * @param {any} 
  ###
  dispatch: ($1, $2, $3) ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener($1, $2, $3)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()
    