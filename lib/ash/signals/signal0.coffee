ash = require('../../../ash')


class ash.signals.Signal0 extends SignalBase

  dispatch: () ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener()
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()