###
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
###
'use strict'
EntityList = ash.core.EntityList
Dictionary = ash.ext.Dictionary
SystemList = ash.core.SystemList
Signal0 = ash.signals.Signal0
Util = ash.ext.Util
ComponentMatchingFamily = ash.core.ComponentMatchingFamily

class ash.core.Engine

  ###*
   * @type {ash.ext.Dictionary}
  ### 
  entityNames: null
  
  ###*
   * @type {ash.core.EntityList}
  ### 
  entityList: null
  
  ###*
   * @type {ash.core.SystemList}
  ### 
  systemList: null
  
  ###*
   * @type {ash.ext.Dictionary}
  ### 
  families: null

  ###*
   * Indicates if the engine is currently in its update loop.
   *
   * @type {boolean}
  ###
  updating: false

  ###*
   * Dispatched when the update loop ends. If you want to add and remove systems from the
   * engine it is usually best not to do so during the update loop. To avoid this you can
   * listen for this signal and make the change when the signal is dispatched.
   *
   * @type {ash.signals.Signal0}
  ###
  updateComplete: null

  ###*
   * The class used to manage node lists. In most cases the default class is sufficient
   * but it is exposed here so advanced developers can choose to create and use a
   * different implementation.
   *
   * The class must implement the IFamily interface.
   * @type {Function}
  ###
  familyClass: ash.core.ComponentMatchingFamily


  ###*
   * @constructor
  ###
  constructor: ->
    @entityList = new EntityList()
    @entityNames = new Dictionary()
    @systemList = new SystemList()
    @families = new Dictionary()
    @updateComplete = new Signal0()


   ###
    * Returns a vector containing all the entities in the engine.
   ###
   getEntities: ->
     entities = []
     entity = @entityList.head
     while entity
       @entities.push(entity)
       entity = entity.next
     return entities
     
   ###
    * Returns a vector containing all the systems in the engine.
   ###
   getSystems: ->
     systems = []
     system = @systemList.head
     while system
       systems.push(system)
       system = system.next
     return systems

  ###*
   * Add an entity to the engine.
   *
   * @param {ash.core.Entity} entity The entity to add.
  ###
  addEntity: (entity) ->
    if (@entityNames[entity.name])
      throw "The entity name " + entity.name + " is already in use by another entity."

    @entityList.add(entity)
    @entityNames[entity.name] = entity
    entity.componentAdded.add(@componentAdded)
    entity.componentRemoved.add(@componentRemoved)
    entity.nameChanged.add(@entityNameChanged)
    for each, family of @families
      family.newEntity(entity)
    return # Void

  ###*
   * Remove an entity from the engine.
   *
   * @param {ash.core.Entity} entity The entity to remove.
  ###
  removeEntity: (entity) ->
    entity.componentAdded.remove(@componentAdded);
    entity.componentRemoved.remove(@componentRemoved);
    entity.nameChanged.remove(@entityNameChanged);
    for each, family of @families
      family.removeEntity(entity)
    delete @entityNames[entity.name]
    @entityList.remove(entity);
    return # Void


  ###*
   * Entity Name Changed
   *
   * @param {ash.core.Entity} entity The entity that Changed
   * @param {string} name the old name
  ###
  entityNameChanged: (entity, oldName) =>
    if (@entityNames[oldName] is entity)
      delete @entityNames[oldName]
      @entityNames[entity.name] = entity
    return # Void

  ###*
   * Get an entity based n its name.
   *
   * @param {string} name The name of the entity
   * @return {ash.core.Entity} The entity, or null if no entity with that name exists on the engine
  ###
  getEntityByName: (name) ->
    return @entityNames[name]


  ###*
   * Remove all entities from the engine.
  ###
  removeAllEntities: () ->
    while (@entityList.head != null)
      @removeEntity(@entityList.head)
    return # Void

  ###*
   * @private
   * @param {ash.core.Entity} entity The entity that Changed
   * @param {Object} componentClass the class object
  ###
  componentAdded: (entity, componentClass) =>
    for each, family of @families
      family.componentAddedToEntity(entity, componentClass)
    return # Void

  ###*
   * @private
   * @param {ash.core.Entity} entity The entity that Changed
   * @param {Object} componentClass the class object
  ###
  componentRemoved: (entity, componentClass) =>
    for each, family of @families
      family.componentRemovedFromEntity(entity, componentClass)
    return # Void

  ###*
   * Get a collection of nodes from the engine, based on the type of the node required.
   *
   * <p>The engine will create the appropriate NodeList if it doesn't already exist and
   * will keep its contents up to date as entities are added to and removed from the
   * engine.</p>
   *
   * <p>If a NodeList is no longer required, release it with the releaseNodeList method.</p>
   *
   * @param {Object} nodeClass The type of node required.
   * @return {ash.core.NodeList} A linked list of all nodes of this type from all entities in the engine.
  ###
  getNodeList: (nodeClass) ->
    if (Util.getClassName(nodeClass) of @families)
      return @families[Util.getClassName(nodeClass)].nodes

    family = new @familyClass(nodeClass, this)
    @families[Util.getClassName(nodeClass)] = family
    entity = @entityList.head
    while entity
      family.newEntity(entity)
      entity = entity.next

    return family.nodes

  ###*
   * If a NodeList is no longer required, this method will stop the engine updating
   * the list and will release all references to the list within the framework
   * classes, enabling it to be garbage collected.
   *
   * <p>It is not essential to release a list, but releasing it will free
   * up memory and processor resources.</p>
   *
   * @param {Object} nodeClass The type of the node class if the list to be released.
  ###
  releaseNodeList: (nodeClass) ->
    if (Util.getClassName(nodeClass) of @families)
      @families[Util.getClassName(nodeClass)].cleanUp()
      delete @families[Util.getClassName(nodeClass)]
    return # Void

  ###*
   * Add a system to the engine, and set its priority for the order in which the
   * systems are updated by the engine update loop.
   *
   * <p>The priority dictates the order in which the systems are updated by the engine update
   * loop. Lower numbers for priority are updated first. i.e. a priority of 1 is
   * updated before a priority of 2.</p>
   *
   * @param {ash.core.System} system The system to add to the engine.
   * @param {number} priority The priority for updating the systems during the engine loop. A
   * lower number means the system is updated sooner.
  ###
  addSystem: (system, priority) ->
    system.priority = priority
    system.addToEngine(this)
    @systemList.add(system)
    return # Void

  ###*
   * Get the system instance of a particular type from within the engine.
   *
   * @param {Object} type The type of system
   * @return {ash.core.System} The instance of the system type that is in the engine, or
   * null if no systems of this type are in the engine.
  ###
  getSystem: (type) ->
    return @systemList.get(type)

  ###*
   * Remove a system from the engine.
   *
   * @param {ash.core.System} system The system to remove from the engine.
  ###
  removeSystem: (system) ->
    @systemList.remove(system)
    system.removeFromEngine(this)
    return # Void


  ###*
   * Remove all systems from the engine.
  ###
  removeAllSystems: () ->
    while (@systemList.head isnt null)
      @removeSystem(@systemList.head)
    return # Void


  ###*
   * Update the engine. This causes the engine update loop to run, calling update on all the
   * systems in the engine.
   *
   * <p>The package ash.tick contains classes that can be used to provide
   * a steady or variable tick that calls this update method.</p>
   *
   * @time {number} The duration, in seconds, of this update step.
  ###
  update: (time) =>
    @updating = true
    system = @systemList.head
    while system
      system.update(time)
      system = system.next


    @updating = false
    @updateComplete.dispatch()
    return # Void
