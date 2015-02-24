#+--------------------------------------------------------------------+
#| engine.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2015
#+--------------------------------------------------------------------+
#|
#| This file is a part of ash.coffee
#|
#| ash.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the GPLv3 License
#|
#+--------------------------------------------------------------------+
#
# Engine
#
ash = require('../../../lib')

ClassMap = ash.ClassMap
ComponentMatchingFamily = ash.core.ComponentMatchingFamily
Map = ash.Map
Signal0 = ash.signals.Signal0
Signal1 = ash.signals.Signal1

###
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
###
class ash.core.Engine

  entityNames: null
  entityList: null
  systemList: null
  families: null

  ###
   * Indicates if the engine is currently in its update loop.
  ###
  updating: false

  entityAdded: null
  entityRemoved: null

  ###
   * Dispatched when the update loop ends. If you want to add and remove systems from the
   * engine it is usually best not to do so during the update loop. To avoid this you can
   * listen for this signal and make the change when the signal is dispatched.
  ###
  updateComplete: null

  ###
   * The class used to manage node lists. In most cases the default class is sufficient
   * but it is exposed here so advanced developers can choose to create and use a
   * different implementation.
   *
   * The class must implement the IFamily interface.
  ###
  familyClass: ComponentMatchingFamily


  constructor: ->
    Object.defineProperties @,
      entities: get: get_entities
      systems: get: get_systems

    @entityList = new EntityList()
    @entityNames = new Map()
    @systemList = new SystemList()
    @families = new ClassMap()
    @entityAdded = new Signal1()
    @entityRemoved = new Signal1()
    @updateComplete = new Signal0()
    @updating = false


  ###
   * Add an entity to the engine.
   *
   * @param entity The entity to add.
  ###
  addEntity: (entity) ->
    if (@entityNames.exists(entity.name))
      throw "The entity name " + entity.name + " is already in use by another entity."

    @entityList.add(entity)
    @entityNames.set(entity.name, entity)
    entity.componentAdded.add(@componentAdded)
    entity.componentRemoved.add(@componentRemoved)
    entity.nameChanged.add(@entityNameChanged)
    for family in @families.iterator()
      family.newEntity(entity)
    @entityAdded.dispatch(entity)
    return # Void

  ###
   * Remove an entity from the engine.
   *
   * @param entity The entity to remove.
  ###
  removeEntity: (entity) ->
    entity.componentAdded.remove(@componentAdded);
    entity.componentRemoved.remove(@componentRemoved);
    entity.nameChanged.remove(@entityNameChanged);
    for family in @families.iterator()
      family.removeEntity(entity)
    @entityNames.remove(entity.name);
    @entityList.remove(entity);
    @entityRemoved.dispatch(entity);
    return # Void


  entityNameChanged: (entity, oldName) ->
    if (@entityNames.get(oldName) is entity)
      @entityNames.remove(oldName)
      @entityNames.set(entity.name, entity)
    return # Void

  ###
   * Get an entity based n its name.
   *
   * @param name The name of the entity
   * @return The entity, or null if no entity with that name exists on the engine
  ###
  getEntityByName: (name) ->
    return @entityNames.get(name)


  ###
   * Remove all entities from the engine.
  ###
  removeAllEntities: () ->
    while (@entityList.head != null)
      @removeEntity(entityList.head)
    return # Void

  ###
   * Returns an iterator() of all entities in the engine.
  ###
  get_entities: () ->
    return @entityList

  ###
   @private
  ###
  componentAdded: (entity, componentClass) ->
    for family in @families.iterator()
      family.componentAddedToEntity(entity, componentClass)
    return # Void

  ###
   @private
  ###
  componentRemoved: (entity, componentClass) ->
    for family in @families.iterator()
      family.componentRemovedFromEntity(entity, componentClass)
    return # Void

  ###
   * Get a collection of nodes from the engine, based on the type of the node required.
   *
   * <p>The engine will create the appropriate NodeList if it doesn't already exist and
   * will keep its contents up to date as entities are added to and removed from the
   * engine.</p>
   *
   * <p>If a NodeList is no longer required, release it with the releaseNodeList method.</p>
   *
   * @param nodeClass The type of node required.
   * @return A linked list of all nodes of this type from all entities in the engine.
  ###
  getNodeList: (nodeClass) ->
    if (@families.exists(nodeClass))
      return @families.get(nodeClass.name).nodeList

    family = new @familyClass(nodeClass, this)
    @families.set(nodeClass.name, family)

    `for( var entity = this.entityList.head; entity !== null; entity = entity.next ) {
        family.newEntity(entity)
    }`

    return family.nodeList

  ###
   * If a NodeList is no longer required, this method will stop the engine updating
   * the list and will release all references to the list within the framework
   * classes, enabling it to be garbage collected.
   *
   * <p>It is not essential to release a list, but releasing it will free
   * up memory and processor resources.</p>
   *
   * @param nodeClass The type of the node class if the list to be released.
  ###
  releaseNodeList: (nodeClass) ->
    if (@families.exists(nodeClass))
      @families.get(nodeClass).cleanUp()
      @families.remove(nodeClass)
    return # Void


  ###
   * Add a system to the engine, and set its priority for the order in which the
   * systems are updated by the engine update loop.
   *
   * <p>The priority dictates the order in which the systems are updated by the engine update
   * loop. Lower numbers for priority are updated first. i.e. a priority of 1 is
   * updated before a priority of 2.</p>
   *
   * @param system The system to add to the engine.
   * @param priority The priority for updating the systems during the engine loop. A
   * lower number means the system is updated sooner.
  ###
  addSystem: (system, priority) ->
    system.priority = priority
    system.addToEngine(this)
    @systemList.add(system)
    return # Void

  ###
   * Get the system instance of a particular type from within the engine.
   *
   * @param type The type of system
   * @return The instance of the system type that is in the engine, or
   * null if no systems of this type are in the engine.
  ###
  getSystem: (type) ->
    return systemList.get(type)

  ###
   * Returns an iterator() of all systems in the engine.
  ###
  get_systems: ->
    return @systemList

  ###
   * Remove a system from the engine.
   *
   * @param system The system to remove from the engine.
  ###
  removeSystem: (system) ->
    @systemList.remove(system)
    system.removeFromEngine(this)
    return # Void


  ###
   * Remove all systems from the engine.
  ###
  removeAllSystems: () ->
    while (@systemList.head isnt null)
      @removeSystem(@systemList.head)
    return # Void


  ###
   * Update the engine. This causes the engine update loop to run, calling update on all the
   * systems in the engine.
   *
   * <p>The package ash.tick contains classes that can be used to provide
   * a steady or variable tick that calls this update method.</p>
   *
   * @time The duration, in seconds, of this update step.
  ###
  update: (time) ->
    @updating = true
    # for (system in systemList)
    `for( var system = this.systemList.head; system !== null; system = system.next ) {
        system.update(time);
    }`
    @updating = false
    @updateComplete.dispatch()
    return # Void
