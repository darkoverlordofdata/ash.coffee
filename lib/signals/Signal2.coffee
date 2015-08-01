'use strict'

class ash.signals.Signal2 extends ash.signals.SignalBase

  dispatch: ($1, $2) ->
    @startDispatch()
    node = @head
    while (node)
      node.listener($1, $2)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()