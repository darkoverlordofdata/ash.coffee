###
 * This internal class maintains a pool of deleted listener nodes for reuse by framework. This reduces
 * the overhead from object creation and garbage collection.
###
ash.signals.ListenerNodePool = class ListenerNodePool

  tail: null
  cacheTail: null

  get: () ->
    if (@tail isnt null)
      node = @tail
      @tail = @tail.previous
      node.previous = null
      return node
    else
      return new ListenerNode();

  dispose: (node) ->
    node.listener = null
    node.once = false
    node.next = null
    node.previous = @tail
    @tail = node
    return # Void

  cache: (node) ->
    node.listener = null
    node.previous = @cacheTail
    @cacheTail = node
    return # Void

  releaseCache: () ->
    while (@cacheTail isnt null)
      node = @cacheTail
      @cacheTail = node.previous;
      node.next = null;
      node.previous = @tail;
      @tail = node;

    return # Void
