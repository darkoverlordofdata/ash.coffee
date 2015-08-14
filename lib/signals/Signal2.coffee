'use strict'

###*
 * @extends {ash.signals.SignalBase}
 * @constructor
###
class ash.signals.Signal2 extends ash.signals.SignalBase

  ###*
   * dispatch the event
   * @param {any} 
   * @param {any} 
  ###
  dispatch: ($1, $2) ->
    @startDispatch()
    node = @head
    while (node)
      node.listener($1, $2)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()
    