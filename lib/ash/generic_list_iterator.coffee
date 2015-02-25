#+--------------------------------------------------------------------+
#| generic_list_iterator.coffee
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
# Generic List Iterator
#
ash = require('../../lib')

class ash.GenericListIterator

  previous: null

  constructor: (head) ->
    @previous = next: head

  hasNext: () ->
    return @previous.next isnt null

  next: () ->
    node = @previous.next
    @previous = node
    return node


