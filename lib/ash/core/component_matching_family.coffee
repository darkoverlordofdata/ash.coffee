ash = require('../../../ash')

NodePool = ash.core.NodePool
Family = ash.core.Family

###
 * The default class for managing a NodeList. This class creates the NodeList and adds and removes
 * nodes to/from the list as the entities and the components in the engine change.
 *
 * It uses the basic entity matching pattern of an entity system - entities are added to the list if
 * they contain components matching all the public properties of the node class.
###
class OverrideError extends Error

  constructor: ->
    super('Method must be overriden')

class ash.core.ComponentMatchingFamily extends Family

  entities: null
  nodeClass: null
  components: null
  nodePool: NodePool
  engine: ash.code.Engine

  ###
   * The constructor. Creates a ComponentMatchingFamily to provide a NodeList for the
   * given node class.
   *
   * @param nodeClass The type of node to create and manage a NodeList for.
   * @param engine The engine that this family is managing teh NodeList for.
  ###
  constructor:(@nodeClass, @engine) ->
    @init()


  ###
   * Initialises the class. Creates the nodelist and other tools. Analyses the node to determine
   * what component types the node requires.
  ###
  init: ->
    @nodeList = new ash.core.NodeList()
    @entities = {}
    @components = @nodeClass.getComponents()
    @nodePool = new NodePool(@nodeClass, @components)
    return # Void

  ###
   * Called by the engine when an entity has been added to it. We check if the entity should be in
   * this family's NodeList and add it if appropriate.
  ###
  newEntity: (entity) ->
    @addIfMatch(entity)
    return # Void

  ###
   * Called by the engine when an entity has been rmoved from it. We check if the entity is in
   * this family's NodeList and remove it if so.
  ###
  removeEntity: (entity) ->
    @removeIfMatch(entity)
    return # Void


  ###
   * Called by the engine when a component has been added to an entity. We check if the entity is not in
   * this family's NodeList and should be, and add it if appropriate.
  ###
  componentAddedToEntity: (entity, componentClass) ->
    @addIfMatch(entity)
    return # Void



  ###
   * Called by the engine when a component has been removed from an entity. We check if the removed component
   * is required by this family's NodeList and if so, we check if the entity is in this this NodeList and
   * remove it if so.
  ###
  componentRemovedFromEntity: (entity, componentClass) ->
    if (@components[componentClass.name]?)
      @removeIfMatch(entity)
    return # Void

  ###
   * Removes all nodes from the NodeList.
  ###
  cleanUp: () ->
    for node in @nodeList
      @entities.remove(node.entity)
    @nodeList.removeAll()
    return # Void


  ###
   * If the entity is not in this family's NodeList, tests the components of the entity to see
   * if it should be in this NodeList and adds it if so.
  ###
  addIfMatch:(entity) ->

    if (not @entities.exists(entity))
      for componentClass of @components
        if (not entity[componentClass]?)
          return

      node = @nodePool.get()
      node.entity = entity

      for componentClass of @components
        node[@components[componentClass.name] = entity.get(componentClass)
      @entities.set(entity, node)
      @nodeList.add(node)
      return # Void

  ###
   * Removes the entity if it is in this family's NodeList.
  ###
  removeIfMatch: (entity) ->

    if (@entities.exists(entity))
      node = @entities.get(entity)
      @entities.remove(entity)
      @nodeList.remove(node)
      if (@engine.updating)
        @nodePool.cache(node)
        @engine.updateComplete.add(@releaseNodePoolCache)
      else
        @nodePool.dispose(node)

    return # Void

  ###
   * Releases the nodes that were added to the node pool during this engine update, so they can
   * be reused.
  ###
  releaseNodePoolCache: () =>
    @engine.updateComplete.remove(@releaseNodePoolCache)
    @nodePool.releaseCache()
    return # Void
