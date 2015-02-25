#+--------------------------------------------------------------------+
#| signal2.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2015
#+--------------------------------------------------------------------+
#|
#| This file is a part of ash.coffee
#|
#| ash.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the GPLv3 License
#|
#+--------------------------------------------------------------------+
#
# Signal 2
#
ash = require('../../../lib')


class ash.signals.Signal2 extends ash.signals.SignalBase

  dispatch: ($1, $2) ->
    @startDispatch()
    node = @head
    while (node isnt null)
      node.listener($1, $2)
      if (node.once)
        @remove(node.listener)
      node = node.next
    @endDispatch()