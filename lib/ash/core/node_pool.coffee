ash = require('../../../lib')
###
 * This internal class maintains a pool of deleted nodes for reuse by the framework. This reduces the overhead
 * from object creation and garbage collection.
 *
 * Because nodes may be deleted from a NodeList while in use, by deleting Nodes from a NodeList
 * while iterating through the NodeList, the pool also maintains a cache of nodes that are added to the pool
 * but should not be reused yet. They are then released into the pool by calling the releaseCache method.
###
class ash.core.NodePool

  tail: null
  nodeClass: null
  cacheTail: null
  components: null

  ###
   * Creates a pool for the given node class.
  ###
  constructor: (@nodeClass, @components) ->


  ###
   * Fetches a node from the pool.
  ###
  get: ->
    if (@tail isnt null)
      node = @tail
      @tail = @tail.previous
      node.previous = null
      return node
    else
      return new @nodeClass.constructor()

  ###
   * Adds a node to the pool.
  ###
  dispose: (node) ->
    for componentName of @components
      node[componentName] = null
    node.entity = null
    node.next = null
    node.previous = @tail
    @tail = node
    return # Void

  ###
   * Adds a node to the cache
  ###
  cache: (node) ->
    node.previous = @cacheTail
    @cacheTail = node
    return # Void

  ###
   * Releases all nodes from the cache into the pool
  ###
  releaseCache: () ->
    while (@cacheTail isnt null)
      node = @cacheTail
      @cacheTail = node.previous
      node.next = null
      node.previous = @tail
      @tail = node

    return # Void
