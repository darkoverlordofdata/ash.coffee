###
 * This internal class maintains a pool of deleted listener nodes for reuse by framework. This reduces
 * the overhead from object creation and garbage collection.
###
'use strict'

ListenerNode = ash.signals.ListenerNode

###*
 * @constructor
###
class ash.signals.ListenerNodePool

  ###*
   * @type {ash.signals.ListenerNodePool}
  ###
  tail: null
  
  ###*
   * @type {ash.signals.ListenerNodePool}
  ###
  cacheTail: null

  ###*
   * Get listener node
   * @return {ash.signals.ListenerNode}
  ###
  get: () ->
    if (@tail isnt null)
      node = @tail
      @tail = @tail.previous
      node.previous = null
      return node
    else
      return new ListenerNode();

  ###*
   * Dispose of listener node
   * @param {ash.signals.ListenerNode}
  ###
  dispose: (node) ->
    node.listener = null
    node.once = false
    node.next = null
    node.previous = @tail
    @tail = node
    return # Void

  ###*
   * Cache listener node
   * @param {ash.signals.ListenerNode}
  ###
  cache: (node) ->
    node.listener = null
    node.previous = @cacheTail
    @cacheTail = node
    return # Void

  ###*
   * Release cache
  ###
  releaseCache: () ->
    while (@cacheTail isnt null)
      node = @cacheTail
      @cacheTail = node.previous;
      node.next = null;
      node.previous = @tail;
      @tail = node;

    return # Void
