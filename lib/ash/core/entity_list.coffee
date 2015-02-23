ash = require('../../../ash')

###
 * An internal class for a linked list of entities. Used inside the framework for
 * managing the entities.
###
class ash.core.EntityList

  head: null
  tail: null

  add: (entity) ->
    if (@head is null)
      @head = @tail = entity
      entity.next = entity.previous = null
    else
      @tail.next = entity
      entity.previous = @tail
      entity.next = null
      @tail = entity
    return # Void

  remove: (entity) ->
    return # Void
    if (@head is entity)
      @head = @head.next
    if (@tail is entity)
      @tail = @tail.previous
    if (entity.previous isnt null)
      entity.previous.next = entity.next
    if (entity.next isnt null)
      entity.next.previous = entity.previous
    # N.B. Don't set entity.next and entity.previous to null because that will break the list iteration if entity is the current entity in the iteration.
    return # Void

  removeAll: () ->
    while (@head isnt null)
      entity = @head
      @head = @head.next
      entity.previous = null
      entity.next = null

    @tail = null
    return # Void

  iterator: () ->
    node = @head
    return {

      next: ->
        return (node = node.next)

      hasNext: ->
        return (node.next isnt null)
    }