ash = require('../../../ash')


class ash.signals.Signal2 extends SignalBase

  dispatch: ($1, $2) ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener($1, $2)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()