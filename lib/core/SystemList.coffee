###
 * Used internally, this is an ordered list of Systems for use by the engine update loop.
###
'use strict'

###
 * @constructor
###
class ash.core.SystemList

  ###*
   * @type {ash.core.System}
  ###
  head: null
  
  ###*
   * @type {ash.core.System}
  ###
  tail: null

  ###*
   * Add system
   * @param {ash.core.System}
  ###
  add: (system) ->
    if (not @head)
      @head = @tail = system
      system.next = system.previous = null
    else
      node = @tail
      while (node)
        if (node.priority <= system.priority)
          break
        node = node.previous

      if (node is @tail)
        @tail.next = system
        system.previous = @tail
        system.next = null
        @tail = system
      else if (not node)
        system.next = @head
        system.previous = null
        @head.previous = system
        @head = system
      else
        system.next = node.next
        system.previous = node
        node.next.previous = system
        node.next = system
    return # Void

  ###*
   * remove system
   * @param {ash.core.System}
  ###
  remove: (system) ->
    if (@head is system)
      @head = @head.next
    if (@tail == system)
      @tail = @tail.previous

    if (system.previous)
      system.previous.next = system.next
    if (system.next)
      system.next.previous = system.previous
    # N.B. Don't set system.next and system.previous to null because that will break the list iteration if system is the current system in the iteration.
    return # Void

  ###*
   * Remove all systems
  ###
  removeAll: () ->
    while (@head)
      system = @head
      @head = @head.next
      system.previous = null
      system.next = null
    @tail = null
    return # Void

  ###*
   * Get system for class
   * @param {Function}
   * @return {ash.core.System}
  ###
  get: (type) ->
    system = @head
    while system
      return system if (system.constructor is type)
      system = system.next

    return null
