'use strict'

ListenerNodePool = ash.signals.ListenerNodePool

class ash.signals.SignalBase

  ###*
   * @type {ash.signals.ListenerNode}
  ###
  head: null
  
  ###*
   * @type {ash.signals.ListenerNode}
  ###
  tail: null

  ###*
   * @type {number}
  ###
  numListeners: 0

  ###*
   * @type {Array<Object>}
  ###
  keys: null
  
  ###*
   * @type {ash.signals.ListenerNode}
  ###
  nodes: null
  
  ###*
   * @type {ash.signals.ListenerNodePool}
  ###
  listenerNodePool: null
  
  ###*
   * @type {ash.signals.ListenerNode}
  ###
  toAddHead: null
  
  ###*
   * @type {ash.signals.ListenerNode}
  ###
  toAddTail: null
  
  ###*
   * @type {boolean}
  ###
  dispatching: false

  ###*
   * @constructor
  ###
  constructor: ->
    @nodes = []
    @keys = []
    @listenerNodePool = new ListenerNodePool()
    @numListeners = 0

  ###*
  ###
  startDispatch: () ->
    @dispatching = true
    return # Void

  ###*
  ###
  endDispatch: () ->
    @dispatching = false
    if (@toAddHead)

      if (not @head)
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


  ###*
   * @param {Object} listener
  ###
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


  ###*
   * @param {Object} listener
  ###
  add: (listener) ->
    if (@keys.indexOf(listener) isnt -1)
      return

    node = @listenerNodePool.get()
    node.listener = listener
    @nodes.push(node)
    @keys.push(listener)
    @addNode(node)
    return # Void

  ###*
   * @param {Object} listener
  ###
  addOnce: (listener) ->
    if (@keys.indexOf(listener) isnt -1)
      return

    node = @listenerNodePool.get()
    node.listener = listener
    node.once = true
    @nodes.push(node)
    @keys.push(listener)
    @addNode(node)
    return # Void

  ###*
   * @param {ash.signals.ListenerNode} node
  ###
  addNode: (node) ->

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

  ###*
   * @param {Object} listener
  ###
  remove: (listener) ->
    index = @keys.indexOf(listener)
    node = @nodes[index]
    if (node)
      if (@head is node)
        @head = @head.next
      if (@tail is node)
        @tail = @tail.previous
      if (@toAddHead is node)
        @toAddHead = @toAddHead.next
      if (@toAddTail is node)
        @toAddTail = @toAddTail.previous
      if (node.previous)
        node.previous.next = node.next
      if (node.next)
        node.next.previous = node.previous

      @nodes.splice(index, 1)
      @keys.splice(index, 1)

      if (@dispatching)
        @listenerNodePool.cache(node)
      else
        @listenerNodePool.dispose(node)

      @numListeners--
    return # Void

  ###*
  ###
  removeAll: () ->
    while (@head)
      node = @head
      @head = @head.next
      index = @keys.indexOf(node.listener)
      @nodes.splice(index, 1)
      @listenerNodePool.dispose(node)

    @nodes = []
    @keys = []
    @tail = null
    @toAddHead = null
    @toAddTail = null
    @numListeners = 0
    return # Void
