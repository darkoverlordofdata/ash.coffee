ash = require('../../../lib')


class ash.signals.Signal1 extends ash.signals.SignalBase

  dispatch: ($1) ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener($1)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()