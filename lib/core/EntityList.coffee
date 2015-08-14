###
 * An internal class for a linked list of entities. Used inside the framework for
 * managing the entities.
###
'use strict'

###*
 * @constructor
###
class ash.core.EntityList

  ###*
   * @type {ash.core.Entity}
  ###
  head: null  # Entity
  
  ###*
   * @type {ash.core.Entity}
  ###
  tail: null  # Entity

  ###*
   * Add an entity to the list
   *
   * @param {ash.core.Entity}
  ###
  add: (entity) ->
    if (not @head)
      @head = @tail = entity
      entity.next = entity.previous = null
    else
      @tail.next = entity
      entity.previous = @tail
      entity.next = null
      @tail = entity
    return # Void

  ###*
   * Remove an entity from the list
   *
   * @param {ash.core.Entity}
  ###
  remove: (entity) ->
    if (@head is entity)
      @head = @head.next
    if (@tail is entity)
      @tail = @tail.previous
    if (entity.previous)
      entity.previous.next = entity.next
    if (entity.next)
      entity.next.previous = entity.previous
    # N.B. Don't set entity.next and entity.previous to null because that will break the list iteration if entity is the current entity in the iteration.
    return # Void

  ###*
   * Remove all entities
  ###
  removeAll: () ->
    while (@head)
      entity = @head
      @head = @head.next
      entity.previous = null
      entity.next = null

    @tail = null
    return # Void

