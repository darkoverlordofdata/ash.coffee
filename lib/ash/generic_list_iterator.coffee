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


