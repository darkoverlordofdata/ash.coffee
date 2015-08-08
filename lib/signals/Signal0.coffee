'use strict'

class ash.signals.Signal0 extends ash.signals.SignalBase

  dispatch: () ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener()
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()
    