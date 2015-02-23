ash = require('../../../ash')

ListenerNodePool = ash.signals.ListenerNodePool


class ash.signals.SignalBase

  head: null
  tail: null

  numListeners: 0

  listenerNodePool: null
  toAddHead: null
  toAddTail: null
  dispatching: false

  constructor: ->
    @listenerNodePool = new ListenerNodePool()
    @numListeners = 0

  startDispatch: () ->
    @dispatching = true
    return # Void

  endDispatch: () ->
    @dispatching = false
    if (@toAddHead isnt null)

      if (@head is null)
        @head = @toAddHead
        @tail = @toAddTail

      else
        @tail.next = @toAddHead
        @toAddHead.previous = @tail
        @tail = @toAddTail

      @toAddHead = null
      @toAddTail = null

    @listenerNodePool.releaseCache()
    return # Void


  getNode: (listener) ->

    node = @head
    while (node isnt null)
      if (node.listener is listener)
        break
      node = node.next

    if (node is null)
      node = @toAddHead
      while (node isnt null)
        if (node.listener is listener)
          break
        node = node.next

    return node


  nodeExists: (listener) ->
    return @getNode(listener) isnt null

  add: (listener) ->
    if (@nodeExists(listener))
      return

    node = @listenerNodePool.get()
    node.listener = listener
    @addNode(node)
    return # Void

  addOnce: (listener) ->
    if (@nodeExists(listener))
      return

    node = @listenerNodePool.get()
    node.listener = listener
    node.once = true
    @addNode(node)
    return # Void

  addNode: (listener) ->

    if (@dispatching)
      if (@toAddHead is null)
        @toAddHead = @toAddTail = node
      else
        @toAddTail.next = node
        node.previous = @toAddTail
        @toAddTail = node

    else
      if (@head is null)
        @head = @tail = node
      else
        @tail.next = node;
        node.previous = @tail;
        @tail = node;

    @numListeners++
    return # Void

  remove: (listener) ->
    node = @getNode(listener)
    if (node isnt null)
      if (@head is node)
        @head = @head.next
      if (@tail is node)
        @tail = @tail.previous
      if (@toAddHead is node)
        @toAddHead = @toAddHead.next
      if (@toAddTail is node)
        @toAddTail = @toAddTail.previous
      if (node.previous isnt null)
        node.previous.next = node.next
      if (node.next isnt null)
        node.next.previous = node.previous
      if (@dispatching)
        @listenerNodePool.cache(node)
      else
        @listenerNodePool.dispose(node)

      @numListeners--
    return # Void

  removeAll: () ->
    while (@head isnt null)
      node = @head
      @head = @head.next
      @listenerNodePool.dispose(node)
      
    @tail = null
    @toAddHead = null
    @toAddTail = null
    @numListeners = 0
    return # Void
