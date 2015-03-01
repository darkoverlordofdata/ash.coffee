!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ash=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var Dictionary, NodeList, NodePool, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');

NodeList = ash.core.NodeList;

NodePool = ash.core.NodePool;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * The default class for managing a NodeList. This class creates the NodeList and adds and removes
 * nodes to/from the list as the entities and the components in the engine change.
 *
 * It uses the basic entity matching pattern of an entity system - entities are added to the list if
 * they contain components matching all the public properties of the node class.
 */

ash.core.ComponentMatchingFamily = (function() {
  ComponentMatchingFamily.prototype.nodes = null;

  ComponentMatchingFamily.prototype.entities = null;

  ComponentMatchingFamily.prototype.nodeClass = null;

  ComponentMatchingFamily.prototype.components = null;

  ComponentMatchingFamily.prototype.nodePool = null;

  ComponentMatchingFamily.prototype.engine = null;


  /*
   * The constructor. Creates a ComponentMatchingFamily to provide a NodeList for the
   * given node class.
   *
   * @param nodeClass The type of node to create and manage a NodeList for.
   * @param engine The engine that this family is managing teh NodeList for.
   */

  function ComponentMatchingFamily(nodeClass, engine) {
    this.nodeClass = nodeClass;
    this.engine = engine;
    this.releaseNodePoolCache = __bind(this.releaseNodePoolCache, this);
    this.init();
  }


  /*
   * Initialises the class. Creates the nodelist and other tools. Analyses the node to determine
   * what component types the node requires.
   */

  ComponentMatchingFamily.prototype.init = function() {
    var name, type, _ref;
    this.nodes = new NodeList();
    this.entities = new Dictionary();
    this.components = new Dictionary();
    this.nodePool = new NodePool(this.nodeClass, this.nodeClass.components);
    _ref = this.nodeClass.components;
    for (name in _ref) {
      type = _ref[name];
      this.components[type.name] = type;
    }
  };


  /*
   * The nodelist managed by this family. This is a reference that remains valid always
   * since it is retained and reused by Systems that use the list. i.e. we never recreate the list,
   * we always modify it in place.
   */

  Object.defineProperties(ComponentMatchingFamily.prototype, {
    nodeList: {
      get: function() {
        return this.nodes;
      }
    }
  });


  /*
   * Called by the engine when an entity has been added to it. We check if the entity should be in
   * this family's NodeList and add it if appropriate.
   */

  ComponentMatchingFamily.prototype.newEntity = function(entity) {
    this.addIfMatch(entity);
  };


  /*
   * Called by the engine when a component has been added to an entity. We check if the entity is not in
   * this family's NodeList and should be, and add it if appropriate.
   */

  ComponentMatchingFamily.prototype.componentAddedToEntity = function(entity, componentClass) {
    this.addIfMatch(entity);
  };


  /*
   * Called by the engine when a component has been removed from an entity. We check if the removed component
   * is required by this family's NodeList and if so, we check if the entity is in this this NodeList and
   * remove it if so.
   */

  ComponentMatchingFamily.prototype.componentRemovedFromEntity = function(entity, componentClass) {
    if (componentClass.name in this.components) {
      this.removeIfMatch(entity);
    }
  };


  /*
   * Called by the engine when an entity has been rmoved from it. We check if the entity is in
   * this family's NodeList and remove it if so.
   */

  ComponentMatchingFamily.prototype.removeEntity = function(entity) {
    this.removeIfMatch(entity);
  };


  /*
   * If the entity is not in this family's NodeList, tests the components of the entity to see
   * if it should be in this NodeList and adds it if so.
   */

  ComponentMatchingFamily.prototype.addIfMatch = function(entity) {
    var componentClass, name, node, _ref, _ref1;
    if (this.entities[entity.name] == null) {
      _ref = this.nodeClass.components;
      for (name in _ref) {
        componentClass = _ref[name];
        if (!entity.has(componentClass)) {
          return;
        }
      }
      node = this.nodePool.get();
      node.entity = entity;
      _ref1 = this.nodeClass.components;
      for (name in _ref1) {
        componentClass = _ref1[name];
        node[name] = entity.get(componentClass);
      }
      this.entities[entity.name] = node;
      this.nodes.add(node);
    }
  };


  /*
   * Removes the entity if it is in this family's NodeList.
   */

  ComponentMatchingFamily.prototype.removeIfMatch = function(entity) {
    var node;
    if (entity.name in this.entities) {
      node = this.entities[entity.name];
      delete this.entities[entity.name];
      this.nodes.remove(node);
      if (this.engine.updating) {
        this.nodePool.cache(node);
        this.engine.updateComplete.add(this.releaseNodePoolCache);
      } else {
        this.nodePool.dispose(node);
      }
    }
  };


  /*
   * Releases the nodes that were added to the node pool during this engine update, so they can
   * be reused.
   */

  ComponentMatchingFamily.prototype.releaseNodePoolCache = function() {
    this.engine.updateComplete.remove(this.releaseNodePoolCache);
    this.nodePool.releaseCache();
  };


  /*
   * Removes all nodes from the NodeList.
   */

  ComponentMatchingFamily.prototype.cleanUp = function() {
    var node;
    node = this.nodes.head;
    while (node) {
      this.entities.remove(node.entity);
      node = node.next;
    }
    this.nodes.removeAll();
  };

  return ComponentMatchingFamily;

})();

//# sourceMappingURL=component_matching_family.js.map

},{"../../../lib":34}],2:[function(require,module,exports){
'use strict';
var ComponentMatchingFamily, Dictionary, EntityList, Signal0, SystemList, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');

ComponentMatchingFamily = ash.core.ComponentMatchingFamily;

EntityList = ash.core.EntityList;

Signal0 = ash.signals.Signal0;

SystemList = ash.core.SystemList;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
 */

ash.core.Engine = (function() {
  Engine.prototype.entityNames = null;

  Engine.prototype.entityList = null;

  Engine.prototype.systemList = null;

  Engine.prototype.families = null;


  /*
   * Indicates if the engine is currently in its update loop.
   */

  Engine.prototype.updating = false;


  /*
   * Dispatched when the update loop ends. If you want to add and remove systems from the
   * engine it is usually best not to do so during the update loop. To avoid this you can
   * listen for this signal and make the change when the signal is dispatched.
   */

  Engine.prototype.updateComplete = null;


  /*
   * The class used to manage node lists. In most cases the default class is sufficient
   * but it is exposed here so advanced developers can choose to create and use a
   * different implementation.
   *
   * The class must implement the IFamily interface.
   */

  Engine.prototype.familyClass = ComponentMatchingFamily;

  function Engine() {
    this.update = __bind(this.update, this);
    this.entityList = new EntityList();
    this.entityNames = new Dictionary();
    this.systemList = new SystemList();
    this.families = new Dictionary();
    this.updateComplete = new Signal0();
  }

  Object.defineProperties(Engine.prototype, {

    /*
     * Returns a vector containing all the entities in the engine.
     */
    entities: {
      get: function() {
        var entities, entity;
        entities = [];
        entity = this.entityList.head;
        while (entity) {
          this.entities.push(entity);
          entity = entity.next;
        }
        return entities;
      }
    },

    /*
     * Returns a vector containing all the systems in the engine.
     */
    systems: {
      get: function() {
        var system, systems;
        systems = [];
        system = this.systemList.head;
        while (system) {
          systems.push(system);
          system = system.next;
        }
        return systems;
      }
    }
  });


  /*
   * Add an entity to the engine.
   *
   * @param entity The entity to add.
   */

  Engine.prototype.addEntity = function(entity) {
    var each, family, _ref;
    if (this.entityNames[entity.name]) {
      throw "The entity name " + entity.name + " is already in use by another entity.";
    }
    this.entityList.add(entity);
    this.entityNames[entity.name] = entity;
    entity.componentAdded.add(this.componentAdded);
    entity.componentRemoved.add(this.componentRemoved);
    entity.nameChanged.add(this.entityNameChanged);
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.newEntity(entity);
    }
  };


  /*
   * Remove an entity from the engine.
   *
   * @param entity The entity to remove.
   */

  Engine.prototype.removeEntity = function(entity) {
    var each, family, _ref;
    entity.componentAdded.remove(this.componentAdded);
    entity.componentRemoved.remove(this.componentRemoved);
    entity.nameChanged.remove(this.entityNameChanged);
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.removeEntity(entity);
    }
    delete this.entityNames[entity.name];
    this.entityList.remove(entity);
  };

  Engine.prototype.entityNameChanged = function(entity, oldName) {
    if (this.entityNames[oldName] === entity) {
      delete this.entityNames[oldName];
      this.entityNames[entity.name] = entity;
    }
  };


  /*
   * Get an entity based n its name.
   *
   * @param name The name of the entity
   * @return The entity, or null if no entity with that name exists on the engine
   */

  Engine.prototype.getEntityByName = function(name) {
    return this.entityNames[name];
  };


  /*
   * Remove all entities from the engine.
   */

  Engine.prototype.removeAllEntities = function() {
    while (this.entityList.head !== null) {
      this.removeEntity(this.entityList.head);
    }
  };


  /*
   @private
   */

  Engine.prototype.componentAdded = function(entity, componentClass) {
    var each, family, _ref;
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.componentAddedToEntity(entity, componentClass);
    }
  };


  /*
   @private
   */

  Engine.prototype.componentRemoved = function(entity, componentClass) {
    var each, family, _ref;
    _ref = this.families;
    for (each in _ref) {
      family = _ref[each];
      family.componentRemovedFromEntity(entity, componentClass);
    }
  };


  /*
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
   */

  Engine.prototype.getNodeList = function(nodeClass) {
    var entity, family;
    if (nodeClass.name in this.families) {
      return this.families[nodeClass.name].nodeList;
    }
    family = new this.familyClass(nodeClass, this);
    this.families[nodeClass.name] = family;
    entity = this.entityList.head;
    while (entity) {
      family.newEntity(entity);
      entity = entity.next;
    }
    return family.nodeList;
  };


  /*
   * If a NodeList is no longer required, this method will stop the engine updating
   * the list and will release all references to the list within the framework
   * classes, enabling it to be garbage collected.
   *
   * <p>It is not essential to release a list, but releasing it will free
   * up memory and processor resources.</p>
   *
   * @param nodeClass The type of the node class if the list to be released.
   */

  Engine.prototype.releaseNodeList = function(nodeClass) {
    if (nodeClass.name in this.families) {
      this.families[nodeClass.name].cleanUp();
      delete this.families[nodeClass.name];
    }
  };


  /*
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
   */

  Engine.prototype.addSystem = function(system, priority) {
    system.priority = priority;
    system.addToEngine(this);
    this.systemList.add(system);
  };


  /*
   * Get the system instance of a particular type from within the engine.
   *
   * @param type The type of system
   * @return The instance of the system type that is in the engine, or
   * null if no systems of this type are in the engine.
   */

  Engine.prototype.getSystem = function(type) {
    return systemList.get(type);
  };


  /*
   * Remove a system from the engine.
   *
   * @param system The system to remove from the engine.
   */

  Engine.prototype.removeSystem = function(system) {
    this.systemList.remove(system);
    system.removeFromEngine(this);
  };


  /*
   * Remove all systems from the engine.
   */

  Engine.prototype.removeAllSystems = function() {
    while (this.systemList.head !== null) {
      this.removeSystem(this.systemList.head);
    }
  };


  /*
   * Update the engine. This causes the engine update loop to run, calling update on all the
   * systems in the engine.
   *
   * <p>The package ash.tick contains classes that can be used to provide
   * a steady or variable tick that calls this update method.</p>
   *
   * @time The duration, in seconds, of this update step.
   */

  Engine.prototype.update = function(time) {
    var system;
    this.updating = true;
    system = this.systemList.head;
    while (system) {
      system.update(time);
      system = system.next;
    }
    this.updating = false;
    this.updateComplete.dispatch();
  };

  return Engine;

})();

//# sourceMappingURL=engine.js.map

},{"../../../lib":34}],3:[function(require,module,exports){
'use strict';
var Dictionary, Signal2, ash;

ash = require('../../../lib');

Signal2 = ash.signals.Signal2;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * An entity is composed from components. As such, it is essentially a collection object for components.
 * Sometimes, the entities in a game will mirror the actual characters and objects in the game, but this
 * is not necessary.
 *
 * <p>Components are simple value objects that contain data relevant to the entity. Entities
 * with similar functionality will have instances of the same components. So we might have
 * a position component</p>
 *
 * <p><code>class PositionComponent
 * {
 *   public var x:Float;
 *   public var y:Float;
 * }</code></p>
 *
 * <p>All entities that have a position in the game world, will have an instance of the
 * position component. Systems operate on entities based on the components they have.</p>
 */

ash.core.Entity = (function() {
  var nameCount;

  nameCount = 0;


  /*
   * Optional, give the entity a name. This can help with debugging and with serialising the entity.
   */

  Entity.prototype._name = '';


  /*
   * This signal is dispatched when a component is added to the entity.
   */

  Entity.prototype.componentAdded = null;


  /*
   * This signal is dispatched when a component is removed from the entity.
   */

  Entity.prototype.componentRemoved = null;


  /*
   * Dispatched when the name of the entity changes. Used internally by the engine to track entities based on their names.
   */

  Entity.prototype.nameChanged = null;

  Entity.prototype.previous = null;

  Entity.prototype.next = null;

  Entity.prototype.components = null;

  function Entity(name) {
    if (name == null) {
      name = '';
    }
    Object.defineProperties(this, {

      /*
       * All entities have a name. If no name is set, a default name is used. Names are used to
       * fetch specific entities from the engine, and can also help to identify an entity when debugging.
       */
      name: {
        get: function() {
          return this._name;
        },
        set: function(value) {
          var previous;
          if (this._name !== value) {
            previous = this._name;
            this._name = value;
            return this.nameChanged.dispatch(this, previous);
          }
        }
      }
    });
    this.componentAdded = new Signal2();
    this.componentRemoved = new Signal2();
    this.nameChanged = new Signal2();
    this.components = new Dictionary();
    if (name !== '') {
      this._name = name;
    } else {
      this._name = "_entity" + (++nameCount);
    }
  }


  /*
   * Add a component to the entity.
   *
   * @param component The component object to add.
   * @param componentClass The class of the component. This is only necessary if the component
   * extends another component class and you want the framework to treat the component as of
   * the base class type. If not set, the class type is determined directly from the component.
   *
   * @return A reference to the entity. This enables the chaining of calls to add, to make
   * creating and configuring entities cleaner. e.g.
   *
   * <code>var entity:Entity = new Entity()
   *     .add(new Position(100, 200)
   *     .add(new Display(new PlayerClip());</code>
   */

  Entity.prototype.add = function(component, componentClass) {
    if (componentClass == null) {
      componentClass = component.constructor;
    }
    if (componentClass.name in this.components) {
      this.remove(componentClass);
    }
    this.components[componentClass.name] = component;
    this.componentAdded.dispatch(this, componentClass);
    return this;
  };


  /*
   * Remove a component from the entity.
   *
   * @param componentClass The class of the component to be removed.
   * @return the component, or null if the component doesn't exist in the entity
   */

  Entity.prototype.remove = function(componentClass) {
    var component, name;
    name = 'string' === typeof componentClass ? componentClass : componentClass.name;
    component = this.components[name];
    if (component !== null) {
      delete this.components[name];
      this.componentRemoved.dispatch(this, name);
      return component;
    }
    return null;
  };


  /*
   * Get a component from the entity.
   *
   * @param componentClass The class of the component requested.
   * @return The component, or null if none was found.
   */

  Entity.prototype.get = function(componentClass) {
    return this.components[componentClass.name];
  };


  /*
   * Get all components from the entity.
   *
   * @return An array containing all the components that are on the entity.
   */

  Entity.prototype.getAll = function() {
    var component, componentArray, _i, _len, _ref;
    componentArray = [];
    _ref = this.components;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      component = _ref[_i];
      componentArray.push(component);
    }
    return componentArray;
  };


  /*
   * Does the entity have a component of a particular type.
   *
   * @param componentClass The class of the component sought.
   * @return true if the entity has a component of the type, false if not.
   */

  Entity.prototype.has = function(componentClass) {
    return componentClass.name in this.components;
  };

  return Entity;

})();

//# sourceMappingURL=entity.js.map

},{"../../../lib":34}],4:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * An internal class for a linked list of entities. Used inside the framework for
 * managing the entities.
 */

ash.core.EntityList = (function() {
  function EntityList() {}

  EntityList.prototype.head = null;

  EntityList.prototype.tail = null;

  EntityList.prototype.add = function(entity) {
    if (this.head === null) {
      this.head = this.tail = entity;
      entity.next = entity.previous = null;
    } else {
      this.tail.next = entity;
      entity.previous = this.tail;
      entity.next = null;
      this.tail = entity;
    }
  };

  EntityList.prototype.remove = function(entity) {
    return;
    if (this.head === entity) {
      this.head = this.head.next;
    }
    if (this.tail === entity) {
      this.tail = this.tail.previous;
    }
    if (entity.previous !== null) {
      entity.previous.next = entity.next;
    }
    if (entity.next !== null) {
      entity.next.previous = entity.previous;
    }
  };

  EntityList.prototype.removeAll = function() {
    var entity;
    while (this.head !== null) {
      entity = this.head;
      this.head = this.head.next;
      entity.previous = null;
      entity.next = null;
    }
    this.tail = null;
  };

  return EntityList;

})();

//# sourceMappingURL=entity_list.js.map

},{"../../../lib":34}],5:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * The interface for classes that are used to manage NodeLists (set as the familyClass property
 * in the Engine object). Most developers don't need to use this since the default implementation
 * is used by default and suits most needs.
 */

ash.core.Family = (function() {
  Family.prototype.nodes = null;


  /*
   * Returns the NodeList managed by this class. This should be a reference that remains valid always
   * since it is retained and reused by Systems that use the list. i.e. never recreate the list,
   * always modify it in place.
   */

  function Family() {
    Object.defineProperties(this, {
      nodeList: {
        get: function() {
          return this.nodes;
        }
      }
    });
  }


  /*
   * An entity has been added to the engine. It may already have components so test the entity
   * for inclusion in this family's NodeList.
   */

  Family.prototype.newEntity = function(entity) {
    throw new Error('Method must be overriden');
  };


  /*
   * An entity has been removed from the engine. If it's in this family's NodeList it should be removed.
   */

  Family.prototype.removeEntity = function(entity) {
    throw new Error('Method must be overriden');
  };


  /*
   * A component has been added to an entity. Test whether the entity's inclusion in this family's
   * NodeList should be modified.
   */

  Family.prototype.componentAddedToEntity = function(entity, componentClass) {
    throw new Error('Method must be overriden');
  };


  /*
   * A component has been removed from an entity. Test whether the entity's inclusion in this family's
   * NodeList should be modified.
   */

  Family.prototype.componentRemovedFromEntity = function(entity, componentClass) {
    throw new Error('Method must be overriden');
  };


  /*
   * The family is about to be discarded. Clean up all properties as necessary. Usually, you will
   * want to empty the NodeList at this time.
   */

  Family.prototype.cleanUp = function() {
    throw new Error('Method must be overriden');
  };

  return Family;

})();

//# sourceMappingURL=family.js.map

},{"../../../lib":34}],6:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.core.Node = (function() {
  function Node() {}

  Node.prototype.entity = null;

  Node.prototype.previous = null;

  Node.prototype.next = null;

  return Node;

})();

//# sourceMappingURL=node.js.map

},{"../../../lib":34}],7:[function(require,module,exports){
'use strict';
var Signal1, ash;

ash = require('../../../lib');

Signal1 = ash.signals.Signal1;


/*
 * A collection of nodes.
 *
 * <p>Systems within the engine access the components of entities via NodeLists. A NodeList contains
 * a node for each Entity in the engine that has all the components required by the node. To iterate
 * over a NodeList, start from the head and step to the next on each loop, until the returned value
 * is null. Or just use for in syntax.</p>
 *
 * <p>for (node in nodeList)
 * {
 *   // do stuff
 * }</p>
 *
 * <p>It is safe to remove items from a nodelist during the loop. When a Node is removed form the
 * NodeList it's previous and next properties still point to the nodes that were before and after
 * it in the NodeList just before it was removed.</p>
 */

ash.core.NodeList = (function() {

  /*
   * The first item in the node list, or null if the list contains no nodes.
   */
  NodeList.prototype.head = null;


  /*
   * The last item in the node list, or null if the list contains no nodes.
   */

  NodeList.prototype.tail = null;


  /*
   * A signal that is dispatched whenever a node is added to the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was added.</p>
   */

  NodeList.prototype.nodeAdded = null;


  /*
   * A signal that is dispatched whenever a node is removed from the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was removed.</p>
   */

  NodeList.prototype.nodeRemoved = null;

  function NodeList() {
    this.nodeAdded = new Signal1();
    this.nodeRemoved = new Signal1();
  }

  NodeList.prototype.add = function(node) {
    if (this.head === null) {
      this.head = this.tail = node;
      node.next = node.previous = null;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      node.next = null;
      this.tail = node;
    }
    this.nodeAdded.dispatch(node);
  };

  NodeList.prototype.remove = function(node) {
    if (this.head === node) {
      this.head = this.head.next;
    }
    if (this.tail === node) {
      this.tail = this.tail.previous;
    }
    if (node.previous !== null) {
      node.previous.next = node.next;
    }
    if (node.next !== null) {
      node.next.previous = node.previous;
    }
    this.nodeRemoved.dispatch(node);
  };

  NodeList.prototype.removeAll = function() {
    var node;
    while (this.head !== null) {
      node = this.head;
      this.head = this.head.next;
      node.previous = null;
      node.next = null;
      this.nodeRemoved.dispatch(node);
    }
    this.tail = null;
  };


  /*
   * true if the list is empty, false otherwise.
   */

  Object.defineProperties(NodeList.prototype, {
    empty: {
      get: function() {
        return this.head === null;
      }
    }
  });


  /*
   * Swaps the positions of two nodes in the list. Useful when sorting a list.
   */

  NodeList.prototype.swap = function(node1, node2) {
    var temp;
    if (node1.previous === node2) {
      node1.previous = node2.previous;
      node2.previous = node1;
      node2.next = node1.next;
      node1.next = node2;
    } else if (node2.previous === node1) {
      node2.previous = node1.previous;
      node1.previous = node2;
      node1.next = node2.next;
      node2.next = node1;
    } else {
      temp = node1.previous;
      node1.previous = node2.previous;
      node2.previous = temp;
      temp = node1.next;
      node1.next = node2.next;
      node2.next = temp;
    }
    if (this.head === node1) {
      this.head = node2;
    } else if (this.head === node2) {
      this.head = node1;
    }
    if (this.tail === node1) {
      this.tail = node2;
    } else if (this.tail === node2) {
      this.tail = node1;
    }
    if (node1.previous !== null) {
      node1.previous.next = node1;
    }
    if (node2.previous !== null) {
      node2.previous.next = node2;
    }
    if (node1.next !== null) {
      node1.next.previous = node1;
    }
    if (node2.next !== null) {
      node2.next.previous = node2;
    }
  };


  /*
   * Performs an insertion sort on the node list. In general, insertion sort is very efficient with short lists
   * and with lists that are mostly sorted, but is inefficient with large lists that are randomly ordered.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter
   * and the original order will be retained.</p>
   *
   * <p>This insertion sort implementation runs in place so no objects are created during the sort.</p>
   */

  NodeList.prototype.insertionSort = function(sortFunction) {
    var node, other, remains;
    if (this.head === this.tail) {
      return;
    }
    remains = this.head.next;
    node = remains;
    while (node !== null) {
      remains = node.next;
      other = node.previous;
      while (other !== null) {
        if (sortFunction(node, other) >= 0) {
          if (node !== other.next) {
            if (this.tail === node) {
              this.tail = node.previous;
            }
            node.previous.next = node.next;
            if (node.next !== null) {
              node.next.previous = node.previous;
            }
            node.next = other.next;
            node.previous = other;
            node.next.previous = node;
            other.next = node;
          }
          break;
        }
        other = other.previous;
      }
      if (other === null) {
        if (this.tail === node) {
          this.tail = node.previous;
        }
        node.previous.next = node.next;
        if (node.next !== null) {
          node.next.previous = node.previous;
        }
        node.next = this.head;
        this.head.previous = node;
        node.previous = null;
        this.head = node;
      }
      node = remains;
    }
  };


  /*
   * Performs a merge sort on the node list. In general, merge sort is more efficient than insertion sort
   * with long lists that are very unsorted.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter.</p>
   *
   * <p>This merge sort implementation creates and uses a single Vector during the sort operation.</p>
   */

  NodeList.prototype.mergeSort = function(sortFunction) {
    var end, lists, next, start;
    if (this.head === this.tail) {
      return;
    }
    lists = [];
    start = this.head;
    while (start !== null) {
      end = start;
      while (end.next !== null && sortFunction(end, end.next) <= 0) {
        end = end.next;
      }
      next = end.next;
      start.previous = end.next = null;
      lists.push(start);
      start = next;
    }
    while (lists.length > 1) {
      lists.push(this.merge(lists.shift(), lists.shift(), sortFunction));
    }
    this.tail = this.head = lists[0];
    while (this.tail.next !== null) {
      this.tail = this.tail.next;
    }
  };

  NodeList.prototype.merge = function(head1, head2, sortFunction) {
    var head, node;
    if (sortFunction(head1, head2) <= 0) {
      head = node = head1;
      head1 = head1.next;
    } else {
      head = node = head2;
      head2 = head2.next;
    }
    while (head1 !== null && head2 !== null) {
      if (sortFunction(head1, head2) <= 0) {
        node.next = head1;
        head1.previous = node;
        node = head1;
        head1 = head1.next;
      } else {
        node.next = head2;
        head2.previous = node;
        node = head2;
        head2 = head2.next;
      }
    }
    if (head1 !== null) {
      node.next = head1;
      head1.previous = node;
    } else {
      node.next = head2;
      head2.previous = node;
    }
    return head;
  };

  return NodeList;

})();

//# sourceMappingURL=node_list.js.map

},{"../../../lib":34}],8:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This internal class maintains a pool of deleted nodes for reuse by the framework. This reduces the overhead
 * from object creation and garbage collection.
 *
 * Because nodes may be deleted from a NodeList while in use, by deleting Nodes from a NodeList
 * while iterating through the NodeList, the pool also maintains a cache of nodes that are added to the pool
 * but should not be reused yet. They are then released into the pool by calling the releaseCache method.
 */

ash.core.NodePool = (function() {
  NodePool.prototype.tail = null;

  NodePool.prototype.nodeClass = null;

  NodePool.prototype.cacheTail = null;

  NodePool.prototype.components = null;


  /*
   * Creates a pool for the given node class.
   */

  function NodePool(nodeClass, components) {
    this.nodeClass = nodeClass;
    this.components = components;
  }


  /*
   * Fetches a node from the pool.
   */

  NodePool.prototype.get = function() {
    var node;
    if (this.tail !== null) {
      node = this.tail;
      this.tail = this.tail.previous;
      node.previous = null;
      return node;
    } else {
      return new this.nodeClass.constructor();
    }
  };


  /*
   * Adds a node to the pool.
   */

  NodePool.prototype.dispose = function(node) {
    var componentName;
    for (componentName in this.components) {
      node[componentName] = null;
    }
    node.entity = null;
    node.next = null;
    node.previous = this.tail;
    this.tail = node;
  };


  /*
   * Adds a node to the cache
   */

  NodePool.prototype.cache = function(node) {
    node.previous = this.cacheTail;
    this.cacheTail = node;
  };


  /*
   * Releases all nodes from the cache into the pool
   */

  NodePool.prototype.releaseCache = function() {
    var node;
    while (this.cacheTail !== null) {
      node = this.cacheTail;
      this.cacheTail = node.previous;
      node.next = null;
      node.previous = this.tail;
      this.tail = node;
    }
  };

  return NodePool;

})();

//# sourceMappingURL=node_pool.js.map

},{"../../../lib":34}],9:[function(require,module,exports){
'use strict';
var ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ash = require('../../../lib');


/*
 * The base class for a system.
 *
 * <p>A system is part of the core functionality of the game. After a system is added to the engine, its
 * update method will be called on every frame of the engine. When the system is removed from the engine,
 * the update method is no longer called.</p>
 *
 * <p>The aggregate of all systems in the engine is the functionality of the game, with the update
 * methods of those systems collectively constituting the engine update loop. Systems generally operate on
 * node lists - collections of nodes. Each node contains the components from an entity in the engine
 * that match the node.</p>
 */

ash.core.System = (function() {
  function System() {
    this.update = __bind(this.update, this);
  }


  /*
    * Used internally to manage the list of systems within the engine. The previous system in the list.
   */

  System.prototype.previous = null;


  /*
   * Used internally to manage the list of systems within the engine. The next system in the list.
   */

  System.prototype.next = null;


  /*
   * Used internally to hold the priority of this system within the system list. This is
   * used to order the systems so they are updated in the correct order.
   */

  System.prototype.priority = 0;


  /*
   * Called just after the system is added to the engine, before any calls to the update method.
   * Override this method to add your own functionality.
   *
   * @param engine The engine the system was added to.
   */

  System.prototype.addToEngine = function(engine) {};


  /*
   * Called just after the system is removed from the engine, after all calls to the update method.
   * Override this method to add your own functionality.
   *
   * @param engine The engine the system was removed from.
   */

  System.prototype.removeFromEngine = function(engine) {};


  /*
   * After the system is added to the engine, this method is called every frame until the system
   * is removed from the engine. Override this method to add your own functionality.
   *
   * <p>If you need to perform an action outside of the update loop (e.g. you need to change the
   * systems in the engine and you don't want to do it while they're updating) add a listener to
   * the engine's updateComplete signal to be notified when the update loop completes.</p>
   *
   * @param time The duration, in seconds, of the frame.
   */

  System.prototype.update = function(time) {};

  return System;

})();

//# sourceMappingURL=system.js.map

},{"../../../lib":34}],10:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * Used internally, this is an ordered list of Systems for use by the engine update loop.
 */

ash.core.SystemList = (function() {
  function SystemList() {}

  SystemList.prototype.head = null;

  SystemList.prototype.tail = null;

  SystemList.prototype.add = function(system) {
    var node;
    if (this.head === null) {
      this.head = this.tail = system;
      system.next = system.previous = null;
    } else {
      node = this.tail;
      while (node !== null) {
        if (node.priority <= system.priority) {
          break;
        }
        node = node.previous;
      }
      if (node === this.tail) {
        this.tail.next = system;
        system.previous = this.tail;
        system.next = null;
        this.tail = system;
      } else if (node === null) {
        system.next = this.head;
        system.previous = null;
        this.head.previous = system;
        this.head = system;
      } else {
        system.next = node.next;
        system.previous = node;
        node.next.previous = system;
        node.next = system;
      }
    }
  };

  SystemList.prototype.remove = function(system) {
    if (this.head === system) {
      this.head = this.head.next;
    }
    if (this.tail === system) {
      this.tail = this.tail.previous;
    }
    if (system.previous !== null) {
      system.previous.next = system.next;
    }
    if (system.next !== null) {
      system.next.previous = system.previous;
    }
  };

  SystemList.prototype.removeAll = function() {
    var system;
    while (this.head !== null) {
      system = this.head;
      this.head = this.head.next;
      system.previous = null;
      system.next = null;
    }
    this.tail = null;
  };

  SystemList.prototype.get = function(type) {
    var system;
    system = this.systemList.head;
    while (system) {
      if (system.constructor === type) {
        return system;
      }
      system = system.next;
    }
    return null;
  };

  return SystemList;

})();

//# sourceMappingURL=system_list.js.map

},{"../../../lib":34}],11:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This component provider always returns the same instance of the component. The instance
 * is passed to the provider at initialisation.
 */

ash.fsm.ComponentInstanceProvider = (function() {
  ComponentInstanceProvider.prototype.instance = null;


  /*
   * Constructor
   *
   * @param instance The instance to return whenever a component is requested.
   */

  function ComponentInstanceProvider(instance) {
    this.instance = instance;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance
   */

  ComponentInstanceProvider.prototype.getComponent = function() {
    return this.instance;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentInstanceProvider.prototype, {
    identifier: {
      get: function() {
        return this.instance;
      }
    }
  });

  return ComponentInstanceProvider;

})();

//# sourceMappingURL=component_instance_provider.js.map

},{"../../../lib":34}],12:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.ComponentSingletonProvider = (function() {
  ComponentSingletonProvider.prototype.componentType = null;

  ComponentSingletonProvider.prototype.instance = null;


  /*
   * Constructor
   *
   * @param type The type of the single instance
   */

  function ComponentSingletonProvider(type) {
    this.componentType = type;

    /*
     * Used to request a component from this provider
     *
     * @return The instance
     */
  }

  ComponentSingletonProvider.prototype.getComponent = function() {
    if (this.instance == null) {
      this.instance = new this.componentType();
    }
    return this.instance;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentSingletonProvider.prototype, {
    identifier: {
      get: function() {
        return this.getComponent();
      }
    }
  });

  return ComponentSingletonProvider;

})();

//# sourceMappingURL=component_singleton_provider.js.map

},{"../../../lib":34}],13:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.ComponentTypeProvider = (function() {
  ComponentTypeProvider.prototype.componentType = null;


  /*
   * Constructor
   *
   * @param type The type of the single instance
   */

  function ComponentTypeProvider(type) {
    this.componentType = type;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance
   */

  ComponentTypeProvider.prototype.getComponent = function() {
    return new this.componentType();
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(ComponentTypeProvider.prototype, {
    identifier: {
      get: function() {
        return this.componentType;
      }
    }
  });

  return ComponentTypeProvider;

})();

//# sourceMappingURL=component_type_provider.js.map

},{"../../../lib":34}],14:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');

ash.fsm.DynamicComponentProvider = (function() {
  DynamicComponentProvider.prototype._closure = null;


  /*
   * Constructor
   *
   * @param closure The function that will return the component instance when called.
   */

  function DynamicComponentProvider(closure) {
    this._closure = closure;

    /*
     * Used to request a component from this provider
     *
     * @return The instance
     */
  }

  DynamicComponentProvider.prototype.getComponent = function() {
    return this._closure;
  };


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
   */

  Object.defineProperties(DynamicComponentProvider.prototype, {
    identifier: {
      get: function() {
        return this._closure;
      }
    }
  });

  return DynamicComponentProvider;

})();

//# sourceMappingURL=dynamic_component_provider.js.map

},{"../../../lib":34}],15:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider returns results of a method call. The method
 * is passed to the provider at initialisation.
 */

ash.fsm.DynamicSystemProvider = (function() {
  DynamicSystemProvider.prototype.method = function() {};

  DynamicSystemProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param method The method that returns the System instance;
   */

  function DynamicSystemProvider(method) {
    this.method = method;
  }


  /*
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The method used to call the System instances
   */

  DynamicSystemProvider.prototype.getSystem = function() {
    return this.method();
  };

  Object.defineProperties(DynamicSystemProvider.prototype, {

    /*
     * The priority at which the System should be added to the Engine
     */
    identifier: {
      get: function() {
        return this.method;
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return DynamicSystemProvider;

})();

//# sourceMappingURL=dynamic_system_provider.js.map

},{"../../../lib":34}],16:[function(require,module,exports){
'use strict';
var DynamicSystemProvider, StateSystemMapping, SystemInstanceProvider, SystemSingletonProvider, ash;

ash = require('../../../lib');

SystemInstanceProvider = ash.fsm.SystemInstanceProvider;

SystemSingletonProvider = ash.fsm.SystemSingletonProvider;

DynamicSystemProvider = ash.fsm.DynamicSystemProvider;

StateSystemMapping = ash.fsm.StateSystemMapping;


/*
 * Represents a state for a SystemStateMachine. The state contains any number of SystemProviders which
 * are used to add Systems to the Engine when this state is entered.
 */

ash.fsm.EngineState = (function() {
  EngineState.prototype.providers = null;

  function EngineState() {
    this.providers = [];
  }


  /*
   * Creates a mapping for the System type to a specific System instance. A
   * SystemInstanceProvider is used for the mapping.
   *
   * @param system The System instance to use for the mapping
   * @return This StateSystemMapping, so more modifications can be applied
   */

  EngineState.prototype.addInstance = function(system) {
    return this.addProvider(new SystemInstanceProvider(system));
  };


  /*
   * Creates a mapping for the System type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A SystemSingletonProvider is used for
   * the mapping.
   *
   * @param type The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This StateSystemMapping, so more modifications can be applied
   */

  EngineState.prototype.addSingleton = function(type) {
    return this.addProvider(new SystemSingletonProvider(type));
  };


  /*
   * Creates a mapping for the System type to a method call.
   * The method should return a System instance. A DynamicSystemProvider is used for
   * the mapping.
   *
   * @param method The method to provide the System instance.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  EngineState.prototype.addMethod = function(method) {
    return this.addProvider(new DynamicSystemProvider(method));
  };


  /*
   * Adds any SystemProvider.
   *
   * @param provider The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  EngineState.prototype.addProvider = function(provider) {
    var mapping;
    mapping = new StateSystemMapping(this, provider);
    this.providers.push(provider);
    return mapping;
  };

  return EngineState;

})();

//# sourceMappingURL=engine_state.js.map

},{"../../../lib":34}],17:[function(require,module,exports){
'use strict';
var Dictionary, EngineState, ash;

ash = require('../../../lib');

EngineState = ash.fsm.EngineState;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * This is a state machine for the Engine. The state machine manages a set of states,
 * each of which has a set of System providers. When the state machine changes the state, it removes
 * Systems associated with the previous state and adds Systems associated with the new state.
 */

ash.fsm.EngineStateMachine = (function() {
  EngineStateMachine.prototype.engine = null;

  EngineStateMachine.prototype.states = null;

  EngineStateMachine.prototype.currentState = null;


  /*
   * Constructor. Creates an SystemStateMachine.
   */

  function EngineStateMachine(engine) {
    this.engine = engine;
    this.states = new Dictionary();
  }


  /*
   * Add a state to this state machine.
   *
   * @param name The name of this state - used to identify it later in the changeState method call.
   * @param state The state.
   * @return This state machine, so methods can be chained.
   */

  EngineStateMachine.prototype.addState = function(name, state) {
    this.states[name] = state;
    return this;
  };


  /*
   * Create a new state in this state machine.
   *
   * @param name The name of the new state - used to identify it later in the changeState method call.
   * @return The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
   */

  EngineStateMachine.prototype.createState = function(name) {
    var state;
    state = new EngineState();
    this.states[name] = state;
    return this;
  };


  /*
   * Change to a new state. The Systems from the old state will be removed and the Systems
   * for the new state will be added.
   *
   * @param name The name of the state to change to.
   */

  EngineStateMachine.prototype.changeState = function(name) {
    var each, id, newState, other, provider, toAdd, _ref, _ref1;
    newState = this.states[name];
    if (newState == null) {
      throw new Error("Engine state " + name + " doesn't exist");
    }
    if (newState === this.currentState) {
      newState = null;
      return;
    }
    toAdd = new Dictionary();
    _ref = newState.providers;
    for (each in _ref) {
      provider = _ref[each];
      id = provider.identifier;
      toAdd[id] = provider;
    }
    if (currentState) {
      _ref1 = this.currentState.providers;
      for (each in _ref1) {
        provider = _ref1[each];
        id = provider.identifier;
        other = toAdd[id];
        if (other) {
          delete toAdd[id];
        } else {
          this.engine.removeSystem(provider.getSystem());
        }
      }
    }
    for (each in toAdd) {
      provider = toAdd[each];
      this.engine.addSystem(provider.getSystem(), provider.priority);
    }
    return this.currentState = newState;
  };

  return EngineStateMachine;

})();

//# sourceMappingURL=engine_state_machine.js.map

},{"../../../lib":34}],18:[function(require,module,exports){
'use strict';
var Dictionary, StateComponentMapping, ash;

ash = require('../../../lib');

StateComponentMapping = ash.fsm.StateComponentMapping;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * Represents a state for an EntityStateMachine. The state contains any number of ComponentProviders which
 * are used to add components to the entity when this state is entered.
 */

ash.fsm.EntityState = (function() {
  EntityState.prototype.providers = null;

  function EntityState() {
    this.providers = new Dictionary();
  }


  /*
   * Add a new ComponentMapping to this state. The mapping is a utility class that is used to
   * map a component type to the provider that provides the component.
   *
   * @param type The type of component to be mapped
   * @return The component mapping to use when setting the provider for the component
   */

  EntityState.prototype.add = function(type) {
    return new StateComponentMapping(this, type);
  };


  /*
   * Get the ComponentProvider for a particular component type.
   *
   * @param type The type of component to get the provider for
   * @return The ComponentProvider
   */

  EntityState.prototype.get = function(type) {
    return this.providers[type];
  };


  /*
   * To determine whether this state has a provider for a specific component type.
   *
   * @param type The type of component to look for a provider for
   * @return true if there is a provider for the given type, false otherwise
   */

  EntityState.prototype.has = function(type) {
    return this.providers[type] !== null;
  };

  return EntityState;

})();

//# sourceMappingURL=entity_state.js.map

},{"../../../lib":34}],19:[function(require,module,exports){
'use strict';
var Dictionary, EntityState, ash;

ash = require('../../../lib');

EntityState = ash.fsm.EntityState;

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * This is a state machine for an entity. The state machine manages a set of states,
 * each of which has a set of component providers. When the state machine changes the state, it removes
 * components associated with the previous state and adds components associated with the new state.
 */

ash.fsm.EntityStateMachine = (function() {
  EntityStateMachine.prototype.states = null;


  /*
  	 * The current state of the state machine.
   */

  EntityStateMachine.prototype.currentState = null;


  /*
   * The entity whose state machine this is
   */

  EntityStateMachine.prototype.entity = null;


  /*
   * Constructor. Creates an EntityStateMachine.
   */

  function EntityStateMachine(entity) {
    this.entity = entity;
    this.states = new Dictionary();
  }


  /*
  		 * Add a state to this state machine.
  		 *
  		 * @param name The name of this state - used to identify it later in the changeState method call.
  		 * @param state The state.
  		 * @return This state machine, so methods can be chained.
   */

  EntityStateMachine.prototype.addState = function(name, state) {
    this.states[name] = state;
    return this;
  };


  /*
   * Create a new state in this state machine.
   *
   * @param name The name of the new state - used to identify it later in the changeState method call.
   * @return The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
   */

  EntityStateMachine.prototype.createState = function(name) {
    var state;
    state = new EntityState();
    this.states[name] = state;
    return state;
  };


  /*
   * Change to a new state. The components from the old state will be removed and the components
   * for the new state will be added.
   *
   * @param name The name of the state to change to.
   */

  EntityStateMachine.prototype.changeState = function(name) {
    var currentState, newState, other, toAdd, type;
    newState = this.states[name];
    if (!newState) {
      throw new Error("Entity state " + name + " doesn't exist");
    }
    if (newState === this.currentState) {
      newState = null;
      return;
    }
    if (this.currentState) {
      toAdd = new Dictionary();
      for (type in newState.providers) {
        toAdd[type] = newState.providers[type];
      }
      for (type in this.currentState.providers) {
        other = toAdd[type];
        if (other && other.identifier === currentState.providers[type].identifier) {
          delete toAdd[type];
        } else {
          this.entity.remove(type);
        }
      }
    } else {
      toAdd = newState.providers;
    }
    for (type in toAdd) {
      this.entity.add(toAdd[type].getComponent());
    }
    return currentState = newState;
  };

  return EntityStateMachine;

})();

//# sourceMappingURL=entity_state_machine.js.map

},{"../../../lib":34}],20:[function(require,module,exports){
'use strict';
var ComponentInstanceProvider, ComponentSingletonProvider, ComponentTypeProvider, DynamicComponentProvider, ash;

ash = require('../../../lib');

ComponentInstanceProvider = ash.fsm.ComponentInstanceProvider;

ComponentTypeProvider = ash.fsm.ComponentTypeProvider;

ComponentSingletonProvider = ash.fsm.ComponentSingletonProvider;

DynamicComponentProvider = ash.fsm.DynamicComponentProvider;


/*
 * Used by the EntityState class to create the mappings of components to providers via a fluent interface.
 */

ash.fsm.StateComponentMapping = (function() {
  StateComponentMapping.prototype.componentType = null;

  StateComponentMapping.prototype.creatingState = null;

  StateComponentMapping.prototype.provider = null;


  /*
   * Used internally, the constructor creates a component mapping. The constructor
   * creates a ComponentTypeProvider as the default mapping, which will be replaced
   * by more specific mappings if other methods are called.
   *
   * @param creatingState The EntityState that the mapping will belong to
   * @param type The component type for the mapping
   */

  function StateComponentMapping(creatingState, type) {
    this.creatingState = creatingState;
    this.componentType = type;
    this.withType(type);
  }


  /*
   * Creates a mapping for the component type to a specific component instance. A
   * ComponentInstanceProvider is used for the mapping.
   *
   * @param component The component instance to use for the mapping
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withInstance = function(component) {
    this.setProvider(new ComponentInstanceProvider(component));
    return this;
  };


  /*
   * Creates a mapping for the component type to new instances of the provided type.
   * The type should be the same as or extend the type for this mapping. A ComponentTypeProvider
   * is used for the mapping.
   *
   * @param type The type of components to be created by this mapping
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withType = function(type) {
    this.setProvider(new ComponentTypeProvider(type));
    return this;
  };


  /*
   * Creates a mapping for the component type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A ComponentSingletonProvider is used for
   * the mapping.
   *
   * @param The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withSingleton = function(type) {
    if (type == null) {
      type = this.componentType;
    }
    this.setProvider(new ComponentSingletonProvider(type));
    return this;
  };


  /*
   * Creates a mapping for the component type to a method call. A
   * DynamicComponentProvider is used for the mapping.
   *
   * @param method The method to return the component instance
   * @return This ComponentMapping, so more modifications can be applied
   */

  StateComponentMapping.prototype.withMethod = function(method) {
    this.setProvider(new DynamicComponentProvider(method));
    return this;
  };


  /*
   * Creates a mapping for the component type to any ComponentProvider.
   *
   * @param provider The component provider to use.
   * @return This ComponentMapping, so more modifications can be applied.
   */

  StateComponentMapping.prototype.withProvider = function(provider) {
    this.setProvider(provider);
    return this;
  };


  /*
   * Maps through to the add method of the EntityState that this mapping belongs to
   * so that a fluent interface can be used when configuring entity states.
   *
   * @param type The type of component to add a mapping to the state for
   * @return The new ComponentMapping for that type
   */

  StateComponentMapping.prototype.add = function(type) {
    return this.creatingState.add(type);
  };

  StateComponentMapping.prototype.setProvider = function(provider) {
    this.provider = provider;
    return this.creatingState.providers[this.componentType] = provider;
  };

  return StateComponentMapping;

})();

//# sourceMappingURL=state_component_mapping.js.map

},{"../../../lib":34}],21:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * Used by the SystemState class to create the mappings of Systems to providers via a fluent interface.
 */

ash.fsm.StateSystemMapping = (function() {
  StateSystemMapping.prototype.creatingState = null;

  StateSystemMapping.prototype.provider = null;


  /*
   * Used internally, the constructor creates a component mapping. The constructor
   * creates a SystemSingletonProvider as the default mapping, which will be replaced
   * by more specific mappings if other methods are called.
   *
   * @param creatingState The SystemState that the mapping will belong to
   * @param type The System type for the mapping
   */

  function StateSystemMapping(creatingState, provider) {
    this.creatingState = creatingState;
    this.provider = provider;
  }


  /*
   * Applies the priority to the provider that the System will be.
   *
   * @param priority The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.withPriority = function(priority) {
    this.provider.priority = priority;
    return this;
  };


  /*
   * Creates a mapping for the System type to a specific System instance. A
   * SystemInstanceProvider is used for the mapping.
   *
   * @param system The System instance to use for the mapping
   * @return This StateSystemMapping, so more modifications can be applied
   */

  StateSystemMapping.prototype.addInstance = function(system) {
    return creatingState.addInstance(system);
  };


  /*
   * Creates a mapping for the System type to a single instance of the provided type.
   * The instance is not created until it is first requested. The type should be the same
   * as or extend the type for this mapping. A SystemSingletonProvider is used for
   * the mapping.
   *
   * @param type The type of the single instance to be created. If omitted, the type of the
   * mapping is used.
   * @return This StateSystemMapping, so more modifications can be applied
   */

  StateSystemMapping.prototype.addSingleton = function(type) {
    return creatingState.addSingleton(type);
  };


  /*
   * Creates a mapping for the System type to a method call.
   * The method should return a System instance. A DynamicSystemProvider is used for
   * the mapping.
   *
   * @param method The method to provide the System instance.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.addMethod = function(method) {
    return creatingState.addMethod(method);
  };


  /*
   * Maps through to the addProvider method of the SystemState that this mapping belongs to
   * so that a fluent interface can be used when configuring entity states.
   *
   * @param provider The component provider to use.
   * @return This StateSystemMapping, so more modifications can be applied.
   */

  StateSystemMapping.prototype.addProvider = function(provider) {
    return creatingState.addProvider(provider);
  };


  /*
   */

  return StateSystemMapping;

})();

//# sourceMappingURL=state_system_mapping.js.map

},{"../../../lib":34}],22:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider always returns the same instance of the component. The system
 * is passed to the provider at initialisation.
 */

ash.fsm.SystemInstanceProvider = (function() {
  SystemInstanceProvider.prototype.instance = null;

  SystemInstanceProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param instance The instance to return whenever a System is requested.
   */

  function SystemInstanceProvider(instance) {
    this.instance = instance;
  }


  /*
   * Used to request a component from this provider
   *
   * @return The instance of the System
   */

  SystemInstanceProvider.prototype.getSystem = function() {
    return this.instance;
  };

  Object.defineProperties(SystemInstanceProvider.prototype, {

    /*
     * Used to compare this provider with others. Any provider that returns the same component
     * instance will be regarded as equivalent.
     *
     * @return The instance
     */
    identifier: {
      get: function() {
        return this.instance;
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return SystemInstanceProvider;

})();

//# sourceMappingURL=system_instance_provider.js.map

},{"../../../lib":34}],23:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * This System provider always returns the same instance of the System. The instance
 * is created when first required and is of the type passed in to the constructor.
 */

ash.fsm.SystemSingletonProvider = (function() {
  SystemSingletonProvider.prototype.componentType = null;

  SystemSingletonProvider.prototype.instance = null;

  SystemSingletonProvider.prototype.systemPriority = 0;


  /*
   * Constructor
   *
   * @param type The type of the single System instance
   */

  function SystemSingletonProvider(type) {
    this.componentType = type;
  }


  /*
   * Used to request a System from this provider
   *
   * @return The single instance
   */

  SystemSingletonProvider.prototype.getSystem = function() {
    if (!this.instance) {
      this.instance = new this.componentType();
    }
    return this.instance;
  };

  Object.defineProperties(SystemSingletonProvider.prototype, {

    /*
    		 * Used to compare this provider with others. Any provider that returns the same single
    		 * instance will be regarded as equivalent.
    		 *
    		 * @return The single instance
     */
    identifier: {
      get: function() {
        return this.getSystem();
      }
    },

    /*
     * The priority at which the System should be added to the Engine
     */
    priority: {
      get: function() {
        return this.systemPriority;
      },
      set: function(value) {
        return this.systemPriority = value;
      }
    }
  });

  return SystemSingletonProvider;

})();

//# sourceMappingURL=system_singleton_provider.js.map

},{"../../../lib":34}],24:[function(require,module,exports){
'use strict';
var ash;

ash = require('../../../lib');


/*
 * A node in the list of listeners in a signal.
 */

ash.signals.ListenerNode = (function() {
  function ListenerNode() {}

  ListenerNode.prototype.previous = null;

  ListenerNode.prototype.next = null;

  ListenerNode.prototype.listener = null;

  ListenerNode.prototype.once = false;

  return ListenerNode;

})();

//# sourceMappingURL=listener_node.js.map

},{"../../../lib":34}],25:[function(require,module,exports){
'use strict';
var ListenerNode, ash;

ash = require('../../../lib');

ListenerNode = ash.signals.ListenerNode;


/*
 * This internal class maintains a pool of deleted listener nodes for reuse by framework. This reduces
 * the overhead from object creation and garbage collection.
 */

ash.signals.ListenerNodePool = (function() {
  function ListenerNodePool() {}

  ListenerNodePool.prototype.tail = null;

  ListenerNodePool.prototype.cacheTail = null;

  ListenerNodePool.prototype.get = function() {
    var node;
    if (this.tail !== null) {
      node = this.tail;
      this.tail = this.tail.previous;
      node.previous = null;
      return node;
    } else {
      return new ListenerNode();
    }
  };

  ListenerNodePool.prototype.dispose = function(node) {
    node.listener = null;
    node.once = false;
    node.next = null;
    node.previous = this.tail;
    this.tail = node;
  };

  ListenerNodePool.prototype.cache = function(node) {
    node.listener = null;
    node.previous = this.cacheTail;
    this.cacheTail = node;
  };

  ListenerNodePool.prototype.releaseCache = function() {
    var node;
    while (this.cacheTail !== null) {
      node = this.cacheTail;
      this.cacheTail = node.previous;
      node.next = null;
      node.previous = this.tail;
      this.tail = node;
    }
  };

  return ListenerNodePool;

})();

//# sourceMappingURL=listener_node_pool.js.map

},{"../../../lib":34}],26:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal0 = (function(_super) {
  __extends(Signal0, _super);

  function Signal0() {
    return Signal0.__super__.constructor.apply(this, arguments);
  }

  Signal0.prototype.dispatch = function() {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener();
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal0;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal0.js.map

},{"../../../lib":34}],27:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal1 = (function(_super) {
  __extends(Signal1, _super);

  function Signal1() {
    return Signal1.__super__.constructor.apply(this, arguments);
  }

  Signal1.prototype.dispatch = function($1) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal1;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal1.js.map

},{"../../../lib":34}],28:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal2 = (function(_super) {
  __extends(Signal2, _super);

  function Signal2() {
    return Signal2.__super__.constructor.apply(this, arguments);
  }

  Signal2.prototype.dispatch = function($1, $2) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1, $2);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal2;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal2.js.map

},{"../../../lib":34}],29:[function(require,module,exports){
'use strict';
var ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

ash.signals.Signal3 = (function(_super) {
  __extends(Signal3, _super);

  function Signal3() {
    return Signal3.__super__.constructor.apply(this, arguments);
  }

  Signal3.prototype.dispatch = function($1, $2, $3) {
    var node;
    this.startDispatch();
    node = this.head;
    while (node !== null) {
      node.listener($1, $2, $3);
      if (node.once) {
        this.remove(node.listener);
      }
      node = node.next;
    }
    return this.endDispatch();
  };

  return Signal3;

})(ash.signals.SignalBase);

//# sourceMappingURL=signal3.js.map

},{"../../../lib":34}],30:[function(require,module,exports){
'use strict';
var ListenerNodePool, ash;

ash = require('../../../lib');

ListenerNodePool = ash.signals.ListenerNodePool;

ash.signals.SignalBase = (function() {
  SignalBase.prototype.head = null;

  SignalBase.prototype.tail = null;

  SignalBase.prototype.numListeners = 0;

  SignalBase.prototype.listenerNodePool = null;

  SignalBase.prototype.toAddHead = null;

  SignalBase.prototype.toAddTail = null;

  SignalBase.prototype.dispatching = false;

  function SignalBase() {
    this.listenerNodePool = new ListenerNodePool();
    this.numListeners = 0;
  }

  SignalBase.prototype.startDispatch = function() {
    this.dispatching = true;
  };

  SignalBase.prototype.endDispatch = function() {
    this.dispatching = false;
    if (this.toAddHead !== null) {
      if (this.head === null) {
        this.head = this.toAddHead;
        this.tail = this.toAddTail;
      } else {
        this.tail.next = this.toAddHead;
        this.toAddHead.previous = this.tail;
        this.tail = this.toAddTail;
      }
      this.toAddHead = null;
      this.toAddTail = null;
    }
    this.listenerNodePool.releaseCache();
  };

  SignalBase.prototype.getNode = function(listener) {
    var node;
    node = this.head;
    while (node !== null) {
      if (node.listener === listener) {
        break;
      }
      node = node.next;
    }
    if (node === null) {
      node = this.toAddHead;
      while (node !== null) {
        if (node.listener === listener) {
          break;
        }
        node = node.next;
      }
    }
    return node;
  };

  SignalBase.prototype.nodeExists = function(listener) {
    return this.getNode(listener) !== null;
  };

  SignalBase.prototype.add = function(listener) {
    var node;
    if (this.nodeExists(listener)) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    this.addNode(node);
  };

  SignalBase.prototype.addOnce = function(listener) {
    var node;
    if (this.nodeExists(listener)) {
      return;
    }
    node = this.listenerNodePool.get();
    node.listener = listener;
    node.once = true;
    this.addNode(node);
  };

  SignalBase.prototype.addNode = function(node) {
    if (this.dispatching) {
      if (this.toAddHead === null) {
        this.toAddHead = this.toAddTail = node;
      } else {
        this.toAddTail.next = node;
        node.previous = this.toAddTail;
        this.toAddTail = node;
      }
    } else {
      if (this.head === null) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }
    }
    this.numListeners++;
  };

  SignalBase.prototype.remove = function(listener) {
    var node;
    node = this.getNode(listener);
    if (node !== null) {
      if (this.head === node) {
        this.head = this.head.next;
      }
      if (this.tail === node) {
        this.tail = this.tail.previous;
      }
      if (this.toAddHead === node) {
        this.toAddHead = this.toAddHead.next;
      }
      if (this.toAddTail === node) {
        this.toAddTail = this.toAddTail.previous;
      }
      if (node.previous !== null) {
        node.previous.next = node.next;
      }
      if (node.next !== null) {
        node.next.previous = node.previous;
      }
      if (this.dispatching) {
        this.listenerNodePool.cache(node);
      } else {
        this.listenerNodePool.dispose(node);
      }
      this.numListeners--;
    }
  };

  SignalBase.prototype.removeAll = function() {
    var node;
    while (this.head !== null) {
      node = this.head;
      this.head = this.head.next;
      this.listenerNodePool.dispose(node);
    }
    this.tail = null;
    this.toAddHead = null;
    this.toAddTail = null;
    this.numListeners = 0;
  };

  return SignalBase;

})();

//# sourceMappingURL=signal_base.js.map

},{"../../../lib":34}],31:[function(require,module,exports){
'use strict';
var Signal1, ash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

Signal1 = ash.signals.Signal1;


/*
 * Uses the enter frame event to provide a frame tick where the frame duration is the time since the previous frame.
 * There is a maximum frame time parameter in the constructor that can be used to limit
 * the longest period a frame can be.
 */

ash.tick.FrameTickProvider = (function(_super) {
  __extends(FrameTickProvider, _super);

  FrameTickProvider.prototype.displayObject = null;

  FrameTickProvider.prototype.previousTime = 0;

  FrameTickProvider.prototype.maximumFrameTime = 0;

  FrameTickProvider.prototype.isPlaying = false;

  FrameTickProvider.prototype.request = null;


  /*
   * Applies a time adjustement factor to the tick, so you can slow down or speed up the entire engine.
   * The update tick time is multiplied by this value, so a value of 1 will run the engine at the normal rate.
   */

  FrameTickProvider.prototype.timeAdjustment = 1;

  function FrameTickProvider(displayObject, maximumFrameTime) {
    this.displayObject = displayObject;
    this.maximumFrameTime = maximumFrameTime;
    this.dispatchTick = __bind(this.dispatchTick, this);
    FrameTickProvider.__super__.constructor.apply(this, arguments);
  }

  Object.defineProperties(FrameTickProvider.prototype, {
    playing: {
      get: function() {
        return this.isPlaying;
      }
    }
  });

  FrameTickProvider.prototype.start = function() {
    this.request = requestAnimationFrame(this.dispatchTick);
    this.isPlaying = true;
  };

  FrameTickProvider.prototype.stop = function() {
    cancelRequestAnimationFrame(this.request);
    this.isPlaying = false;
  };

  FrameTickProvider.prototype.dispatchTick = function(timestamp) {
    var frameTime, temp;
    if (timestamp == null) {
      timestamp = Date.now();
    }
    if (this.displayObject) {
      this.displayObject.begin();
    }
    temp = this.previousTime || timestamp;
    this.previousTime = timestamp;
    frameTime = (timestamp - temp) * 0.001;
    this.dispatch(frameTime);
    requestAnimationFrame(this.dispatchTick);
    if (this.displayObject) {
      this.displayObject.end();
    }
  };

  return FrameTickProvider;

})(Signal1);

//# sourceMappingURL=frame_tick_provider.js.map

},{"../../../lib":34}],32:[function(require,module,exports){
'use strict';
var Dictionary, ash,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ash = require('../../../lib');

Dictionary = (function() {
  function Dictionary() {}

  return Dictionary;

})();


/*
 * An object pool for re-using components. This is not integrated in to Ash but is used dierectly by
 * the developer. It expects components to not require any parameters in their constructor.
 *
 * <p>Fetch an object from the pool with</p>
 *
 * <p>ComponentPool.get( ComponentClass );</p>
 *
 * <p>If the pool contains an object of the required type, it will be returned. If it does not, a new object
 * will be created and returned.</p>
 *
 * <p>The object returned may have properties set on it from the time it was previously used, so all properties
 * should be reset in the object once it is received.</p>
 *
 * <p>Add an object to the pool with</p>
 *
 * <p>ComponentPool.dispose( component );</p>
 *
 * <p>You will usually want to do this when removing a component from an entity. The remove method on the entity
 * returns the component that was removed, so this can be done in one line of code like this</p>
 *
 * <p>ComponentPool.dispose( entity.remove( component ) );</p>
 */

ash.tools.ComponentPool = (function() {
  var getPool, pools;

  function ComponentPool() {}

  pools = new Dictionary();

  getPool = function(componentClass) {
    var _ref;
    if ((_ref = componentClass.name, __indexOf.call(pools, _ref) >= 0)) {
      return pools[componentClass.name];
    } else {
      return pools[componentClass.name] = [];
    }
  };


  /*
   * Get an object from the pool.
   *
   * @param componentClass The type of component wanted.
   * @return The component.
   */

  ComponentPool.get = function(componentClass) {
    var pool;
    pool = getPool(componentClass);
    if (pool.length > 0) {
      return pool.pop();
    } else {
      return new componentClass();
    }
  };


  /*
   * Return an object to the pool for reuse.
   *
   * @param component The component to return to the pool.
   */

  ComponentPool.dispose = function(component) {
    var pool, type;
    if (component) {
      type = component.constructor;
      pool = getPool(type);
      pool.push(component);
    }
  };


  /*
   * Dispose of all pooled resources, freeing them for garbage collection.
   */

  ComponentPool.empty = function() {
    return pools = new Dictionary();
  };

  return ComponentPool;

})();

//# sourceMappingURL=component_pool.js.map

},{"../../../lib":34}],33:[function(require,module,exports){
'use strict';
var Engine, Node, NodeList, System, ash,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ash = require('../../../lib');

Engine = ash.core.Engine;

Node = ash.core.Node;

NodeList = ash.core.NodeList;

System = ash.core.System;


/*
 * A useful class for systems which simply iterate over a set of nodes, performing the same action on each node. This
 * class removes the need for a lot of boilerplate code in such systems. Extend this class and pass the node type and
 * a node update method into the constructor. The node update method will be called once per node on the update cycle
 * with the node instance and the frame time as parameters. e.g.
 *
 * <code>package;
 * class MySystem extends ListIteratingSystem<MyNode>
 * {
 *     public function new()
 *     {
 *         super(MyNode, updateNode);
 *     }
 *
 *     private function updateNode(node:MyNode, time:Float):Void
 *     {
 *         // process the node here
 *     }
 * }
 * </code>
 */

ash.tools.ListIteratingSystem = (function(_super) {
  __extends(ListIteratingSystem, _super);

  ListIteratingSystem.prototype.nodeList = null;

  ListIteratingSystem.prototype.nodeClass = null;

  ListIteratingSystem.prototype.nodeUpdateFunction = null;

  ListIteratingSystem.prototype.nodeAddedFunction = null;

  ListIteratingSystem.prototype.nodeRemovedFunction = null;

  function ListIteratingSystem(nodeClass, nodeUpdateFunction, nodeAddedFunction, nodeRemovedFunction) {
    if (nodeAddedFunction == null) {
      nodeAddedFunction = null;
    }
    if (nodeRemovedFunction == null) {
      nodeRemovedFunction = null;
    }
    this.nodeClass = nodeClass;
    this.nodeUpdateFunction = nodeUpdateFunction;
    this.nodeAddedFunction = nodeAddedFunction;
    this.nodeRemovedFunction = nodeRemovedFunction;
  }

  ListIteratingSystem.prototype.addToEngine = function(engine) {
    var node;
    this.nodeList = engine.getNodeList(this.nodeClass);
    if (this.nodeAddedFunction !== null) {
      node = this.nodeList.head;
      while (node) {
        this.nodeAddedFunction(node);
        node = node.next;
      }
      this.nodeList.nodeAdded.add(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.add(this.nodeRemovedFunction);
    }
  };

  ListIteratingSystem.prototype.removeFromEngine = function(engine) {
    if (this.nodeAddedFunction !== null) {
      this.nodeList.nodeAdded.remove(this.nodeAddedFunction);
    }
    if (this.nodeRemovedFunction !== null) {
      this.nodeList.nodeRemoved.remove(this.nodeRemovedFunction);
    }
    this.nodeList = null;
  };

  ListIteratingSystem.prototype.update = function(time) {
    var node;
    node = this.nodeList.head;
    while (node) {
      this.nodeUpdateFunction(node, time);
      node = node.next;
    }
  };

  return ListIteratingSystem;

})(System);

//# sourceMappingURL=list_iterating_system.js.map

},{"../../../lib":34}],34:[function(require,module,exports){

/*

   _       _
  /_\  ___| |__
 //_\\/ __| '_ \
/  _  \__ \ | | |
\_/ \_/___/_| |_|

              __  __
    ___ ___  / _|/ _| ___  ___
   / __/ _ \| |_| |_ / _ \/ _ \
  | (_| (_) |  _|  _|  __/  __/
 (_)___\___/|_| |_|  \___|\___|


Copyright (c) 2015 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Author: Richard Lord
Copyright (c) Richard Lord 2011-2012
http://www.richardlord.net


Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
'use strict';
var ash;

module.exports = ash = (function() {
  function ash() {}

  return ash;

})();

ash.signals = (function() {
  function signals() {}

  return signals;

})();

require('./ash/signals/listener_node');

require('./ash/signals/listener_node_pool');

require('./ash/signals/signal_base');

require('./ash/signals/signal0');

require('./ash/signals/signal1');

require('./ash/signals/signal2');

require('./ash/signals/signal3');

ash.core = (function() {
  function core() {}

  return core;

})();

require('./ash/core/entity');

require('./ash/core/entity_list');

require('./ash/core/node');

require('./ash/core/node_list');

require('./ash/core/node_pool');

require('./ash/core/system');

require('./ash/core/system_list');

require('./ash/core/family');

require('./ash/core/component_matching_family');

require('./ash/core/engine');

ash.fsm = (function() {
  function fsm() {}

  return fsm;

})();

require('./ash/fsm/component_instance_provider');

require('./ash/fsm/component_singleton_provider');

require('./ash/fsm/component_type_provider');

require('./ash/fsm/dynamic_component_provider');

require('./ash/fsm/dynamic_system_provider');

require('./ash/fsm/engine_state');

require('./ash/fsm/state_component_mapping');

require('./ash/fsm/engine_state_machine');

require('./ash/fsm/entity_state');

require('./ash/fsm/entity_state_machine');

require('./ash/fsm/state_system_mapping');

require('./ash/fsm/system_instance_provider');

require('./ash/fsm/system_singleton_provider');

ash.tick = (function() {
  function tick() {}

  return tick;

})();

require('./ash/tick/frame_tick_provider');

ash.tools = (function() {
  function tools() {}

  return tools;

})();

require('./ash/tools/component_pool');

require('./ash/tools/list_iterating_system');

//# sourceMappingURL=index.js.map

},{"./ash/core/component_matching_family":1,"./ash/core/engine":2,"./ash/core/entity":3,"./ash/core/entity_list":4,"./ash/core/family":5,"./ash/core/node":6,"./ash/core/node_list":7,"./ash/core/node_pool":8,"./ash/core/system":9,"./ash/core/system_list":10,"./ash/fsm/component_instance_provider":11,"./ash/fsm/component_singleton_provider":12,"./ash/fsm/component_type_provider":13,"./ash/fsm/dynamic_component_provider":14,"./ash/fsm/dynamic_system_provider":15,"./ash/fsm/engine_state":16,"./ash/fsm/engine_state_machine":17,"./ash/fsm/entity_state":18,"./ash/fsm/entity_state_machine":19,"./ash/fsm/state_component_mapping":20,"./ash/fsm/state_system_mapping":21,"./ash/fsm/system_instance_provider":22,"./ash/fsm/system_singleton_provider":23,"./ash/signals/listener_node":24,"./ash/signals/listener_node_pool":25,"./ash/signals/signal0":26,"./ash/signals/signal1":27,"./ash/signals/signal2":28,"./ash/signals/signal3":29,"./ash/signals/signal_base":30,"./ash/tick/frame_tick_provider":31,"./ash/tools/component_pool":32,"./ash/tools/list_iterating_system":33}]},{},[34])(34)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2NvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2VuZ2luZS5qcyIsInRtcC9saWIvYXNoL2NvcmUvZW50aXR5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9lbnRpdHlfbGlzdC5qcyIsInRtcC9saWIvYXNoL2NvcmUvZmFtaWx5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlLmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlX2xpc3QuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGVfcG9vbC5qcyIsInRtcC9saWIvYXNoL2NvcmUvc3lzdGVtLmpzIiwidG1wL2xpYi9hc2gvY29yZS9zeXN0ZW1fbGlzdC5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX2NvbXBvbmVudF9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbmdpbmVfc3RhdGUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW50aXR5X3N0YXRlLmpzIiwidG1wL2xpYi9hc2gvZnNtL2VudGl0eV9zdGF0ZV9tYWNoaW5lLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlX3Bvb2wuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDAuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDEuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDIuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDMuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlLmpzIiwidG1wL2xpYi9hc2gvdGljay9mcmFtZV90aWNrX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvdG9vbHMvY29tcG9uZW50X3Bvb2wuanMiLCJ0bXAvbGliL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0uanMiLCJ0bXAvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgTm9kZUxpc3QsIE5vZGVQb29sLCBhc2gsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5Ob2RlTGlzdCA9IGFzaC5jb3JlLk5vZGVMaXN0O1xuXG5Ob2RlUG9vbCA9IGFzaC5jb3JlLk5vZGVQb29sO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogVGhlIGRlZmF1bHQgY2xhc3MgZm9yIG1hbmFnaW5nIGEgTm9kZUxpc3QuIFRoaXMgY2xhc3MgY3JlYXRlcyB0aGUgTm9kZUxpc3QgYW5kIGFkZHMgYW5kIHJlbW92ZXNcbiAqIG5vZGVzIHRvL2Zyb20gdGhlIGxpc3QgYXMgdGhlIGVudGl0aWVzIGFuZCB0aGUgY29tcG9uZW50cyBpbiB0aGUgZW5naW5lIGNoYW5nZS5cbiAqXG4gKiBJdCB1c2VzIHRoZSBiYXNpYyBlbnRpdHkgbWF0Y2hpbmcgcGF0dGVybiBvZiBhbiBlbnRpdHkgc3lzdGVtIC0gZW50aXRpZXMgYXJlIGFkZGVkIHRvIHRoZSBsaXN0IGlmXG4gKiB0aGV5IGNvbnRhaW4gY29tcG9uZW50cyBtYXRjaGluZyBhbGwgdGhlIHB1YmxpYyBwcm9wZXJ0aWVzIG9mIHRoZSBub2RlIGNsYXNzLlxuICovXG5cbmFzaC5jb3JlLkNvbXBvbmVudE1hdGNoaW5nRmFtaWx5ID0gKGZ1bmN0aW9uKCkge1xuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubm9kZXMgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5lbnRpdGllcyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5vZGVDbGFzcyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudHMgPSBudWxsO1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5ub2RlUG9vbCA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmVuZ2luZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGUgY29uc3RydWN0b3IuIENyZWF0ZXMgYSBDb21wb25lbnRNYXRjaGluZ0ZhbWlseSB0byBwcm92aWRlIGEgTm9kZUxpc3QgZm9yIHRoZVxuICAgKiBnaXZlbiBub2RlIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUNsYXNzIFRoZSB0eXBlIG9mIG5vZGUgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgYSBOb2RlTGlzdCBmb3IuXG4gICAqIEBwYXJhbSBlbmdpbmUgVGhlIGVuZ2luZSB0aGF0IHRoaXMgZmFtaWx5IGlzIG1hbmFnaW5nIHRlaCBOb2RlTGlzdCBmb3IuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5KG5vZGVDbGFzcywgZW5naW5lKSB7XG4gICAgdGhpcy5ub2RlQ2xhc3MgPSBub2RlQ2xhc3M7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSA9IF9fYmluZCh0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlLCB0aGlzKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG5cbiAgLypcbiAgICogSW5pdGlhbGlzZXMgdGhlIGNsYXNzLiBDcmVhdGVzIHRoZSBub2RlbGlzdCBhbmQgb3RoZXIgdG9vbHMuIEFuYWx5c2VzIHRoZSBub2RlIHRvIGRldGVybWluZVxuICAgKiB3aGF0IGNvbXBvbmVudCB0eXBlcyB0aGUgbm9kZSByZXF1aXJlcy5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSwgdHlwZSwgX3JlZjtcbiAgICB0aGlzLm5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gICAgdGhpcy5lbnRpdGllcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLm5vZGVQb29sID0gbmV3IE5vZGVQb29sKHRoaXMubm9kZUNsYXNzLCB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzKTtcbiAgICBfcmVmID0gdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cztcbiAgICBmb3IgKG5hbWUgaW4gX3JlZikge1xuICAgICAgdHlwZSA9IF9yZWZbbmFtZV07XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdHlwZS5uYW1lXSA9IHR5cGU7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogVGhlIG5vZGVsaXN0IG1hbmFnZWQgYnkgdGhpcyBmYW1pbHkuIFRoaXMgaXMgYSByZWZlcmVuY2UgdGhhdCByZW1haW5zIHZhbGlkIGFsd2F5c1xuICAgKiBzaW5jZSBpdCBpcyByZXRhaW5lZCBhbmQgcmV1c2VkIGJ5IFN5c3RlbXMgdGhhdCB1c2UgdGhlIGxpc3QuIGkuZS4gd2UgbmV2ZXIgcmVjcmVhdGUgdGhlIGxpc3QsXG4gICAqIHdlIGFsd2F5cyBtb2RpZnkgaXQgaW4gcGxhY2UuXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZSwge1xuICAgIG5vZGVMaXN0OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhbiBlbnRpdHkgaGFzIGJlZW4gYWRkZWQgdG8gaXQuIFdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgc2hvdWxkIGJlIGluXG4gICAqIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgYW5kIGFkZCBpdCBpZiBhcHByb3ByaWF0ZS5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5ld0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRoaXMuYWRkSWZNYXRjaChlbnRpdHkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhIGNvbXBvbmVudCBoYXMgYmVlbiBhZGRlZCB0byBhbiBlbnRpdHkuIFdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgaXMgbm90IGluXG4gICAqIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgYW5kIHNob3VsZCBiZSwgYW5kIGFkZCBpdCBpZiBhcHByb3ByaWF0ZS5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkVG9FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhpcy5hZGRJZk1hdGNoKGVudGl0eSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGEgY29tcG9uZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbiBlbnRpdHkuIFdlIGNoZWNrIGlmIHRoZSByZW1vdmVkIGNvbXBvbmVudFxuICAgKiBpcyByZXF1aXJlZCBieSB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCBpZiBzbywgd2UgY2hlY2sgaWYgdGhlIGVudGl0eSBpcyBpbiB0aGlzIHRoaXMgTm9kZUxpc3QgYW5kXG4gICAqIHJlbW92ZSBpdCBpZiBzby5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWRGcm9tRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIGlmIChjb21wb25lbnRDbGFzcy5uYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgdGhpcy5yZW1vdmVJZk1hdGNoKGVudGl0eSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBhbiBlbnRpdHkgaGFzIGJlZW4gcm1vdmVkIGZyb20gaXQuIFdlIGNoZWNrIGlmIHRoZSBlbnRpdHkgaXMgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgcmVtb3ZlIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhpcy5yZW1vdmVJZk1hdGNoKGVudGl0eSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBJZiB0aGUgZW50aXR5IGlzIG5vdCBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0LCB0ZXN0cyB0aGUgY29tcG9uZW50cyBvZiB0aGUgZW50aXR5IHRvIHNlZVxuICAgKiBpZiBpdCBzaG91bGQgYmUgaW4gdGhpcyBOb2RlTGlzdCBhbmQgYWRkcyBpdCBpZiBzby5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmFkZElmTWF0Y2ggPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgY29tcG9uZW50Q2xhc3MsIG5hbWUsIG5vZGUsIF9yZWYsIF9yZWYxO1xuICAgIGlmICh0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICBfcmVmID0gdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cztcbiAgICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzID0gX3JlZltuYW1lXTtcbiAgICAgICAgaWYgKCFlbnRpdHkuaGFzKGNvbXBvbmVudENsYXNzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IHRoaXMubm9kZVBvb2wuZ2V0KCk7XG4gICAgICBub2RlLmVudGl0eSA9IGVudGl0eTtcbiAgICAgIF9yZWYxID0gdGhpcy5ub2RlQ2xhc3MuY29tcG9uZW50cztcbiAgICAgIGZvciAobmFtZSBpbiBfcmVmMSkge1xuICAgICAgICBjb21wb25lbnRDbGFzcyA9IF9yZWYxW25hbWVdO1xuICAgICAgICBub2RlW25hbWVdID0gZW50aXR5LmdldChjb21wb25lbnRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVudGl0aWVzW2VudGl0eS5uYW1lXSA9IG5vZGU7XG4gICAgICB0aGlzLm5vZGVzLmFkZChub2RlKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmVzIHRoZSBlbnRpdHkgaWYgaXQgaXMgaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLnJlbW92ZUlmTWF0Y2ggPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZW50aXR5Lm5hbWUgaW4gdGhpcy5lbnRpdGllcykge1xuICAgICAgbm9kZSA9IHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdO1xuICAgICAgdGhpcy5ub2Rlcy5yZW1vdmUobm9kZSk7XG4gICAgICBpZiAodGhpcy5lbmdpbmUudXBkYXRpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5jYWNoZShub2RlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlQ29tcGxldGUuYWRkKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbGVhc2VzIHRoZSBub2RlcyB0aGF0IHdlcmUgYWRkZWQgdG8gdGhlIG5vZGUgcG9vbCBkdXJpbmcgdGhpcyBlbmdpbmUgdXBkYXRlLCBzbyB0aGV5IGNhblxuICAgKiBiZSByZXVzZWQuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5yZWxlYXNlTm9kZVBvb2xDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW5naW5lLnVwZGF0ZUNvbXBsZXRlLnJlbW92ZSh0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlKTtcbiAgICB0aGlzLm5vZGVQb29sLnJlbGVhc2VDYWNoZSgpO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlcyBhbGwgbm9kZXMgZnJvbSB0aGUgTm9kZUxpc3QuXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5jbGVhblVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMubm9kZXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgdGhpcy5lbnRpdGllcy5yZW1vdmUobm9kZS5lbnRpdHkpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgdGhpcy5ub2Rlcy5yZW1vdmVBbGwoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHksIERpY3Rpb25hcnksIEVudGl0eUxpc3QsIFNpZ25hbDAsIFN5c3RlbUxpc3QsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkNvbXBvbmVudE1hdGNoaW5nRmFtaWx5ID0gYXNoLmNvcmUuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbkVudGl0eUxpc3QgPSBhc2guY29yZS5FbnRpdHlMaXN0O1xuXG5TaWduYWwwID0gYXNoLnNpZ25hbHMuU2lnbmFsMDtcblxuU3lzdGVtTGlzdCA9IGFzaC5jb3JlLlN5c3RlbUxpc3Q7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGUgRW5naW5lIGNsYXNzIGlzIHRoZSBjZW50cmFsIHBvaW50IGZvciBjcmVhdGluZyBhbmQgbWFuYWdpbmcgeW91ciBnYW1lIHN0YXRlLiBBZGRcbiAqIGVudGl0aWVzIGFuZCBzeXN0ZW1zIHRvIHRoZSBlbmdpbmUsIGFuZCBmZXRjaCBmYW1pbGllcyBvZiBub2RlcyBmcm9tIHRoZSBlbmdpbmUuXG4gKi9cblxuYXNoLmNvcmUuRW5naW5lID0gKGZ1bmN0aW9uKCkge1xuICBFbmdpbmUucHJvdG90eXBlLmVudGl0eU5hbWVzID0gbnVsbDtcblxuICBFbmdpbmUucHJvdG90eXBlLmVudGl0eUxpc3QgPSBudWxsO1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuc3lzdGVtTGlzdCA9IG51bGw7XG5cbiAgRW5naW5lLnByb3RvdHlwZS5mYW1pbGllcyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGVuZ2luZSBpcyBjdXJyZW50bHkgaW4gaXRzIHVwZGF0ZSBsb29wLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnVwZGF0aW5nID0gZmFsc2U7XG5cblxuICAvKlxuICAgKiBEaXNwYXRjaGVkIHdoZW4gdGhlIHVwZGF0ZSBsb29wIGVuZHMuIElmIHlvdSB3YW50IHRvIGFkZCBhbmQgcmVtb3ZlIHN5c3RlbXMgZnJvbSB0aGVcbiAgICogZW5naW5lIGl0IGlzIHVzdWFsbHkgYmVzdCBub3QgdG8gZG8gc28gZHVyaW5nIHRoZSB1cGRhdGUgbG9vcC4gVG8gYXZvaWQgdGhpcyB5b3UgY2FuXG4gICAqIGxpc3RlbiBmb3IgdGhpcyBzaWduYWwgYW5kIG1ha2UgdGhlIGNoYW5nZSB3aGVuIHRoZSBzaWduYWwgaXMgZGlzcGF0Y2hlZC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS51cGRhdGVDb21wbGV0ZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGUgY2xhc3MgdXNlZCB0byBtYW5hZ2Ugbm9kZSBsaXN0cy4gSW4gbW9zdCBjYXNlcyB0aGUgZGVmYXVsdCBjbGFzcyBpcyBzdWZmaWNpZW50XG4gICAqIGJ1dCBpdCBpcyBleHBvc2VkIGhlcmUgc28gYWR2YW5jZWQgZGV2ZWxvcGVycyBjYW4gY2hvb3NlIHRvIGNyZWF0ZSBhbmQgdXNlIGFcbiAgICogZGlmZmVyZW50IGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGUgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIElGYW1pbHkgaW50ZXJmYWNlLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmZhbWlseUNsYXNzID0gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHk7XG5cbiAgZnVuY3Rpb24gRW5naW5lKCkge1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmVudGl0eUxpc3QgPSBuZXcgRW50aXR5TGlzdCgpO1xuICAgIHRoaXMuZW50aXR5TmFtZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMuc3lzdGVtTGlzdCA9IG5ldyBTeXN0ZW1MaXN0KCk7XG4gICAgdGhpcy5mYW1pbGllcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZSA9IG5ldyBTaWduYWwwKCk7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhFbmdpbmUucHJvdG90eXBlLCB7XG5cbiAgICAvKlxuICAgICAqIFJldHVybnMgYSB2ZWN0b3IgY29udGFpbmluZyBhbGwgdGhlIGVudGl0aWVzIGluIHRoZSBlbmdpbmUuXG4gICAgICovXG4gICAgZW50aXRpZXM6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbnRpdGllcywgZW50aXR5O1xuICAgICAgICBlbnRpdGllcyA9IFtdO1xuICAgICAgICBlbnRpdHkgPSB0aGlzLmVudGl0eUxpc3QuaGVhZDtcbiAgICAgICAgd2hpbGUgKGVudGl0eSkge1xuICAgICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgIGVudGl0eSA9IGVudGl0eS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIGEgdmVjdG9yIGNvbnRhaW5pbmcgYWxsIHRoZSBzeXN0ZW1zIGluIHRoZSBlbmdpbmUuXG4gICAgICovXG4gICAgc3lzdGVtczoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN5c3RlbSwgc3lzdGVtcztcbiAgICAgICAgc3lzdGVtcyA9IFtdO1xuICAgICAgICBzeXN0ZW0gPSB0aGlzLnN5c3RlbUxpc3QuaGVhZDtcbiAgICAgICAgd2hpbGUgKHN5c3RlbSkge1xuICAgICAgICAgIHN5c3RlbXMucHVzaChzeXN0ZW0pO1xuICAgICAgICAgIHN5c3RlbSA9IHN5c3RlbS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzeXN0ZW1zO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvKlxuICAgKiBBZGQgYW4gZW50aXR5IHRvIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byBhZGQuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuYWRkRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdmFyIGVhY2gsIGZhbWlseSwgX3JlZjtcbiAgICBpZiAodGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV0pIHtcbiAgICAgIHRocm93IFwiVGhlIGVudGl0eSBuYW1lIFwiICsgZW50aXR5Lm5hbWUgKyBcIiBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGVudGl0eS5cIjtcbiAgICB9XG4gICAgdGhpcy5lbnRpdHlMaXN0LmFkZChlbnRpdHkpO1xuICAgIHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdID0gZW50aXR5O1xuICAgIGVudGl0eS5jb21wb25lbnRBZGRlZC5hZGQodGhpcy5jb21wb25lbnRBZGRlZCk7XG4gICAgZW50aXR5LmNvbXBvbmVudFJlbW92ZWQuYWRkKHRoaXMuY29tcG9uZW50UmVtb3ZlZCk7XG4gICAgZW50aXR5Lm5hbWVDaGFuZ2VkLmFkZCh0aGlzLmVudGl0eU5hbWVDaGFuZ2VkKTtcbiAgICBfcmVmID0gdGhpcy5mYW1pbGllcztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgZmFtaWx5ID0gX3JlZltlYWNoXTtcbiAgICAgIGZhbWlseS5uZXdFbnRpdHkoZW50aXR5KTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYW4gZW50aXR5IGZyb20gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IHRvIHJlbW92ZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIGVudGl0eS5jb21wb25lbnRBZGRlZC5yZW1vdmUodGhpcy5jb21wb25lbnRBZGRlZCk7XG4gICAgZW50aXR5LmNvbXBvbmVudFJlbW92ZWQucmVtb3ZlKHRoaXMuY29tcG9uZW50UmVtb3ZlZCk7XG4gICAgZW50aXR5Lm5hbWVDaGFuZ2VkLnJlbW92ZSh0aGlzLmVudGl0eU5hbWVDaGFuZ2VkKTtcbiAgICBfcmVmID0gdGhpcy5mYW1pbGllcztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgZmFtaWx5ID0gX3JlZltlYWNoXTtcbiAgICAgIGZhbWlseS5yZW1vdmVFbnRpdHkoZW50aXR5KTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdO1xuICAgIHRoaXMuZW50aXR5TGlzdC5yZW1vdmUoZW50aXR5KTtcbiAgfTtcblxuICBFbmdpbmUucHJvdG90eXBlLmVudGl0eU5hbWVDaGFuZ2VkID0gZnVuY3Rpb24oZW50aXR5LCBvbGROYW1lKSB7XG4gICAgaWYgKHRoaXMuZW50aXR5TmFtZXNbb2xkTmFtZV0gPT09IGVudGl0eSkge1xuICAgICAgZGVsZXRlIHRoaXMuZW50aXR5TmFtZXNbb2xkTmFtZV07XG4gICAgICB0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXSA9IGVudGl0eTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYW4gZW50aXR5IGJhc2VkIG4gaXRzIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBlbnRpdHlcbiAgICogQHJldHVybiBUaGUgZW50aXR5LCBvciBudWxsIGlmIG5vIGVudGl0eSB3aXRoIHRoYXQgbmFtZSBleGlzdHMgb24gdGhlIGVuZ2luZVxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmdldEVudGl0eUJ5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlOYW1lc1tuYW1lXTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhbGwgZW50aXRpZXMgZnJvbSB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZUFsbEVudGl0aWVzID0gZnVuY3Rpb24oKSB7XG4gICAgd2hpbGUgKHRoaXMuZW50aXR5TGlzdC5oZWFkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZUVudGl0eSh0aGlzLmVudGl0eUxpc3QuaGVhZCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgIEBwcml2YXRlXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWQgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIGVhY2gsIGZhbWlseSwgX3JlZjtcbiAgICBfcmVmID0gdGhpcy5mYW1pbGllcztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgZmFtaWx5ID0gX3JlZltlYWNoXTtcbiAgICAgIGZhbWlseS5jb21wb25lbnRBZGRlZFRvRW50aXR5KGVudGl0eSwgY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICBAcHJpdmF0ZVxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWQgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIGVhY2gsIGZhbWlseSwgX3JlZjtcbiAgICBfcmVmID0gdGhpcy5mYW1pbGllcztcbiAgICBmb3IgKGVhY2ggaW4gX3JlZikge1xuICAgICAgZmFtaWx5ID0gX3JlZltlYWNoXTtcbiAgICAgIGZhbWlseS5jb21wb25lbnRSZW1vdmVkRnJvbUVudGl0eShlbnRpdHksIGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uIG9mIG5vZGVzIGZyb20gdGhlIGVuZ2luZSwgYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIG5vZGUgcmVxdWlyZWQuXG4gICAqXG4gICAqIDxwPlRoZSBlbmdpbmUgd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIE5vZGVMaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBhbmRcbiAgICogd2lsbCBrZWVwIGl0cyBjb250ZW50cyB1cCB0byBkYXRlIGFzIGVudGl0aWVzIGFyZSBhZGRlZCB0byBhbmQgcmVtb3ZlZCBmcm9tIHRoZVxuICAgKiBlbmdpbmUuPC9wPlxuICAgKlxuICAgKiA8cD5JZiBhIE5vZGVMaXN0IGlzIG5vIGxvbmdlciByZXF1aXJlZCwgcmVsZWFzZSBpdCB3aXRoIHRoZSByZWxlYXNlTm9kZUxpc3QgbWV0aG9kLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIG5vZGVDbGFzcyBUaGUgdHlwZSBvZiBub2RlIHJlcXVpcmVkLlxuICAgKiBAcmV0dXJuIEEgbGlua2VkIGxpc3Qgb2YgYWxsIG5vZGVzIG9mIHRoaXMgdHlwZSBmcm9tIGFsbCBlbnRpdGllcyBpbiB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmdldE5vZGVMaXN0ID0gZnVuY3Rpb24obm9kZUNsYXNzKSB7XG4gICAgdmFyIGVudGl0eSwgZmFtaWx5O1xuICAgIGlmIChub2RlQ2xhc3MubmFtZSBpbiB0aGlzLmZhbWlsaWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5mYW1pbGllc1tub2RlQ2xhc3MubmFtZV0ubm9kZUxpc3Q7XG4gICAgfVxuICAgIGZhbWlseSA9IG5ldyB0aGlzLmZhbWlseUNsYXNzKG5vZGVDbGFzcywgdGhpcyk7XG4gICAgdGhpcy5mYW1pbGllc1tub2RlQ2xhc3MubmFtZV0gPSBmYW1pbHk7XG4gICAgZW50aXR5ID0gdGhpcy5lbnRpdHlMaXN0LmhlYWQ7XG4gICAgd2hpbGUgKGVudGl0eSkge1xuICAgICAgZmFtaWx5Lm5ld0VudGl0eShlbnRpdHkpO1xuICAgICAgZW50aXR5ID0gZW50aXR5Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBmYW1pbHkubm9kZUxpc3Q7XG4gIH07XG5cblxuICAvKlxuICAgKiBJZiBhIE5vZGVMaXN0IGlzIG5vIGxvbmdlciByZXF1aXJlZCwgdGhpcyBtZXRob2Qgd2lsbCBzdG9wIHRoZSBlbmdpbmUgdXBkYXRpbmdcbiAgICogdGhlIGxpc3QgYW5kIHdpbGwgcmVsZWFzZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgbGlzdCB3aXRoaW4gdGhlIGZyYW1ld29ya1xuICAgKiBjbGFzc2VzLCBlbmFibGluZyBpdCB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICpcbiAgICogPHA+SXQgaXMgbm90IGVzc2VudGlhbCB0byByZWxlYXNlIGEgbGlzdCwgYnV0IHJlbGVhc2luZyBpdCB3aWxsIGZyZWVcbiAgICogdXAgbWVtb3J5IGFuZCBwcm9jZXNzb3IgcmVzb3VyY2VzLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIG5vZGVDbGFzcyBUaGUgdHlwZSBvZiB0aGUgbm9kZSBjbGFzcyBpZiB0aGUgbGlzdCB0byBiZSByZWxlYXNlZC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZWxlYXNlTm9kZUxpc3QgPSBmdW5jdGlvbihub2RlQ2xhc3MpIHtcbiAgICBpZiAobm9kZUNsYXNzLm5hbWUgaW4gdGhpcy5mYW1pbGllcykge1xuICAgICAgdGhpcy5mYW1pbGllc1tub2RlQ2xhc3MubmFtZV0uY2xlYW5VcCgpO1xuICAgICAgZGVsZXRlIHRoaXMuZmFtaWxpZXNbbm9kZUNsYXNzLm5hbWVdO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZCBhIHN5c3RlbSB0byB0aGUgZW5naW5lLCBhbmQgc2V0IGl0cyBwcmlvcml0eSBmb3IgdGhlIG9yZGVyIGluIHdoaWNoIHRoZVxuICAgKiBzeXN0ZW1zIGFyZSB1cGRhdGVkIGJ5IHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AuXG4gICAqXG4gICAqIDxwPlRoZSBwcmlvcml0eSBkaWN0YXRlcyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN5c3RlbXMgYXJlIHVwZGF0ZWQgYnkgdGhlIGVuZ2luZSB1cGRhdGVcbiAgICogbG9vcC4gTG93ZXIgbnVtYmVycyBmb3IgcHJpb3JpdHkgYXJlIHVwZGF0ZWQgZmlyc3QuIGkuZS4gYSBwcmlvcml0eSBvZiAxIGlzXG4gICAqIHVwZGF0ZWQgYmVmb3JlIGEgcHJpb3JpdHkgb2YgMi48L3A+XG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIHN5c3RlbSB0byBhZGQgdG8gdGhlIGVuZ2luZS5cbiAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBwcmlvcml0eSBmb3IgdXBkYXRpbmcgdGhlIHN5c3RlbXMgZHVyaW5nIHRoZSBlbmdpbmUgbG9vcC4gQVxuICAgKiBsb3dlciBudW1iZXIgbWVhbnMgdGhlIHN5c3RlbSBpcyB1cGRhdGVkIHNvb25lci5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5hZGRTeXN0ZW0gPSBmdW5jdGlvbihzeXN0ZW0sIHByaW9yaXR5KSB7XG4gICAgc3lzdGVtLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgc3lzdGVtLmFkZFRvRW5naW5lKHRoaXMpO1xuICAgIHRoaXMuc3lzdGVtTGlzdC5hZGQoc3lzdGVtKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCB0aGUgc3lzdGVtIGluc3RhbmNlIG9mIGEgcGFydGljdWxhciB0eXBlIGZyb20gd2l0aGluIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHN5c3RlbVxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZSBvZiB0aGUgc3lzdGVtIHR5cGUgdGhhdCBpcyBpbiB0aGUgZW5naW5lLCBvclxuICAgKiBudWxsIGlmIG5vIHN5c3RlbXMgb2YgdGhpcyB0eXBlIGFyZSBpbiB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gc3lzdGVtTGlzdC5nZXQodHlwZSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYSBzeXN0ZW0gZnJvbSB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBzeXN0ZW0gdG8gcmVtb3ZlIGZyb20gdGhlIGVuZ2luZS5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5yZW1vdmVTeXN0ZW0gPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICB0aGlzLnN5c3RlbUxpc3QucmVtb3ZlKHN5c3RlbSk7XG4gICAgc3lzdGVtLnJlbW92ZUZyb21FbmdpbmUodGhpcyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYWxsIHN5c3RlbXMgZnJvbSB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZUFsbFN5c3RlbXMgPSBmdW5jdGlvbigpIHtcbiAgICB3aGlsZSAodGhpcy5zeXN0ZW1MaXN0LmhlYWQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlU3lzdGVtKHRoaXMuc3lzdGVtTGlzdC5oZWFkKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBVcGRhdGUgdGhlIGVuZ2luZS4gVGhpcyBjYXVzZXMgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcCB0byBydW4sIGNhbGxpbmcgdXBkYXRlIG9uIGFsbCB0aGVcbiAgICogc3lzdGVtcyBpbiB0aGUgZW5naW5lLlxuICAgKlxuICAgKiA8cD5UaGUgcGFja2FnZSBhc2gudGljayBjb250YWlucyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZVxuICAgKiBhIHN0ZWFkeSBvciB2YXJpYWJsZSB0aWNrIHRoYXQgY2FsbHMgdGhpcyB1cGRhdGUgbWV0aG9kLjwvcD5cbiAgICpcbiAgICogQHRpbWUgVGhlIGR1cmF0aW9uLCBpbiBzZWNvbmRzLCBvZiB0aGlzIHVwZGF0ZSBzdGVwLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICB2YXIgc3lzdGVtO1xuICAgIHRoaXMudXBkYXRpbmcgPSB0cnVlO1xuICAgIHN5c3RlbSA9IHRoaXMuc3lzdGVtTGlzdC5oZWFkO1xuICAgIHdoaWxlIChzeXN0ZW0pIHtcbiAgICAgIHN5c3RlbS51cGRhdGUodGltZSk7XG4gICAgICBzeXN0ZW0gPSBzeXN0ZW0ubmV4dDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGluZyA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gRW5naW5lO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmdpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgU2lnbmFsMiwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU2lnbmFsMiA9IGFzaC5zaWduYWxzLlNpZ25hbDI7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBBbiBlbnRpdHkgaXMgY29tcG9zZWQgZnJvbSBjb21wb25lbnRzLiBBcyBzdWNoLCBpdCBpcyBlc3NlbnRpYWxseSBhIGNvbGxlY3Rpb24gb2JqZWN0IGZvciBjb21wb25lbnRzLlxuICogU29tZXRpbWVzLCB0aGUgZW50aXRpZXMgaW4gYSBnYW1lIHdpbGwgbWlycm9yIHRoZSBhY3R1YWwgY2hhcmFjdGVycyBhbmQgb2JqZWN0cyBpbiB0aGUgZ2FtZSwgYnV0IHRoaXNcbiAqIGlzIG5vdCBuZWNlc3NhcnkuXG4gKlxuICogPHA+Q29tcG9uZW50cyBhcmUgc2ltcGxlIHZhbHVlIG9iamVjdHMgdGhhdCBjb250YWluIGRhdGEgcmVsZXZhbnQgdG8gdGhlIGVudGl0eS4gRW50aXRpZXNcbiAqIHdpdGggc2ltaWxhciBmdW5jdGlvbmFsaXR5IHdpbGwgaGF2ZSBpbnN0YW5jZXMgb2YgdGhlIHNhbWUgY29tcG9uZW50cy4gU28gd2UgbWlnaHQgaGF2ZVxuICogYSBwb3NpdGlvbiBjb21wb25lbnQ8L3A+XG4gKlxuICogPHA+PGNvZGU+Y2xhc3MgUG9zaXRpb25Db21wb25lbnRcbiAqIHtcbiAqICAgcHVibGljIHZhciB4OkZsb2F0O1xuICogICBwdWJsaWMgdmFyIHk6RmxvYXQ7XG4gKiB9PC9jb2RlPjwvcD5cbiAqXG4gKiA8cD5BbGwgZW50aXRpZXMgdGhhdCBoYXZlIGEgcG9zaXRpb24gaW4gdGhlIGdhbWUgd29ybGQsIHdpbGwgaGF2ZSBhbiBpbnN0YW5jZSBvZiB0aGVcbiAqIHBvc2l0aW9uIGNvbXBvbmVudC4gU3lzdGVtcyBvcGVyYXRlIG9uIGVudGl0aWVzIGJhc2VkIG9uIHRoZSBjb21wb25lbnRzIHRoZXkgaGF2ZS48L3A+XG4gKi9cblxuYXNoLmNvcmUuRW50aXR5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZUNvdW50O1xuXG4gIG5hbWVDb3VudCA9IDA7XG5cblxuICAvKlxuICAgKiBPcHRpb25hbCwgZ2l2ZSB0aGUgZW50aXR5IGEgbmFtZS4gVGhpcyBjYW4gaGVscCB3aXRoIGRlYnVnZ2luZyBhbmQgd2l0aCBzZXJpYWxpc2luZyB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLl9uYW1lID0gJyc7XG5cblxuICAvKlxuICAgKiBUaGlzIHNpZ25hbCBpcyBkaXNwYXRjaGVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5jb21wb25lbnRBZGRlZCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBUaGlzIHNpZ25hbCBpcyBkaXNwYXRjaGVkIHdoZW4gYSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBEaXNwYXRjaGVkIHdoZW4gdGhlIG5hbWUgb2YgdGhlIGVudGl0eSBjaGFuZ2VzLiBVc2VkIGludGVybmFsbHkgYnkgdGhlIGVuZ2luZSB0byB0cmFjayBlbnRpdGllcyBiYXNlZCBvbiB0aGVpciBuYW1lcy5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5uYW1lQ2hhbmdlZCA9IG51bGw7XG5cbiAgRW50aXR5LnByb3RvdHlwZS5wcmV2aW91cyA9IG51bGw7XG5cbiAgRW50aXR5LnByb3RvdHlwZS5uZXh0ID0gbnVsbDtcblxuICBFbnRpdHkucHJvdG90eXBlLmNvbXBvbmVudHMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVudGl0eShuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgbmFtZSA9ICcnO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgIC8qXG4gICAgICAgKiBBbGwgZW50aXRpZXMgaGF2ZSBhIG5hbWUuIElmIG5vIG5hbWUgaXMgc2V0LCBhIGRlZmF1bHQgbmFtZSBpcyB1c2VkLiBOYW1lcyBhcmUgdXNlZCB0b1xuICAgICAgICogZmV0Y2ggc3BlY2lmaWMgZW50aXRpZXMgZnJvbSB0aGUgZW5naW5lLCBhbmQgY2FuIGFsc28gaGVscCB0byBpZGVudGlmeSBhbiBlbnRpdHkgd2hlbiBkZWJ1Z2dpbmcuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHZhciBwcmV2aW91cztcbiAgICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHByZXZpb3VzID0gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWVDaGFuZ2VkLmRpc3BhdGNoKHRoaXMsIHByZXZpb3VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbXBvbmVudEFkZGVkID0gbmV3IFNpZ25hbDIoKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlbW92ZWQgPSBuZXcgU2lnbmFsMigpO1xuICAgIHRoaXMubmFtZUNoYW5nZWQgPSBuZXcgU2lnbmFsMigpO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmFtZSA9IFwiX2VudGl0eVwiICsgKCsrbmFtZUNvdW50KTtcbiAgICB9XG4gIH1cblxuXG4gIC8qXG4gICAqIEFkZCBhIGNvbXBvbmVudCB0byB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgb2JqZWN0IHRvIGFkZC5cbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LiBUaGlzIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHRoZSBjb21wb25lbnRcbiAgICogZXh0ZW5kcyBhbm90aGVyIGNvbXBvbmVudCBjbGFzcyBhbmQgeW91IHdhbnQgdGhlIGZyYW1ld29yayB0byB0cmVhdCB0aGUgY29tcG9uZW50IGFzIG9mXG4gICAqIHRoZSBiYXNlIGNsYXNzIHR5cGUuIElmIG5vdCBzZXQsIHRoZSBjbGFzcyB0eXBlIGlzIGRldGVybWluZWQgZGlyZWN0bHkgZnJvbSB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIEEgcmVmZXJlbmNlIHRvIHRoZSBlbnRpdHkuIFRoaXMgZW5hYmxlcyB0aGUgY2hhaW5pbmcgb2YgY2FsbHMgdG8gYWRkLCB0byBtYWtlXG4gICAqIGNyZWF0aW5nIGFuZCBjb25maWd1cmluZyBlbnRpdGllcyBjbGVhbmVyLiBlLmcuXG4gICAqXG4gICAqIDxjb2RlPnZhciBlbnRpdHk6RW50aXR5ID0gbmV3IEVudGl0eSgpXG4gICAqICAgICAuYWRkKG5ldyBQb3NpdGlvbigxMDAsIDIwMClcbiAgICogICAgIC5hZGQobmV3IERpc3BsYXkobmV3IFBsYXllckNsaXAoKSk7PC9jb2RlPlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbXBvbmVudCwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICBpZiAoY29tcG9uZW50Q2xhc3MgPT0gbnVsbCkge1xuICAgICAgY29tcG9uZW50Q2xhc3MgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnRDbGFzcy5uYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Q2xhc3MubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgdGhpcy5jb21wb25lbnRBZGRlZC5kaXNwYXRjaCh0aGlzLCBjb21wb25lbnRDbGFzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcmVtb3ZlZC5cbiAgICogQHJldHVybiB0aGUgY29tcG9uZW50LCBvciBudWxsIGlmIHRoZSBjb21wb25lbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgZW50aXR5XG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgY29tcG9uZW50LCBuYW1lO1xuICAgIG5hbWUgPSAnc3RyaW5nJyA9PT0gdHlwZW9mIGNvbXBvbmVudENsYXNzID8gY29tcG9uZW50Q2xhc3MgOiBjb21wb25lbnRDbGFzcy5uYW1lO1xuICAgIGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tuYW1lXTtcbiAgICBpZiAoY29tcG9uZW50ICE9PSBudWxsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb21wb25lbnRzW25hbWVdO1xuICAgICAgdGhpcy5jb21wb25lbnRSZW1vdmVkLmRpc3BhdGNoKHRoaXMsIG5hbWUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYSBjb21wb25lbnQgZnJvbSB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQgcmVxdWVzdGVkLlxuICAgKiBAcmV0dXJuIFRoZSBjb21wb25lbnQsIG9yIG51bGwgaWYgbm9uZSB3YXMgZm91bmQuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudENsYXNzLm5hbWVdO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFsbCBjb21wb25lbnRzIGZyb20gdGhlIGVudGl0eS5cbiAgICpcbiAgICogQHJldHVybiBBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBvbiB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wb25lbnQsIGNvbXBvbmVudEFycmF5LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBjb21wb25lbnRBcnJheSA9IFtdO1xuICAgIF9yZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSBfcmVmW19pXTtcbiAgICAgIGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudEFycmF5O1xuICB9O1xuXG5cbiAgLypcbiAgICogRG9lcyB0aGUgZW50aXR5IGhhdmUgYSBjb21wb25lbnQgb2YgYSBwYXJ0aWN1bGFyIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCBzb3VnaHQuXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgZW50aXR5IGhhcyBhIGNvbXBvbmVudCBvZiB0aGUgdHlwZSwgZmFsc2UgaWYgbm90LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHk7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyBmb3IgYSBsaW5rZWQgbGlzdCBvZiBlbnRpdGllcy4gVXNlZCBpbnNpZGUgdGhlIGZyYW1ld29yayBmb3JcbiAqIG1hbmFnaW5nIHRoZSBlbnRpdGllcy5cbiAqL1xuXG5hc2guY29yZS5FbnRpdHlMaXN0ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFbnRpdHlMaXN0KCkge31cblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBlbnRpdHk7XG4gICAgICBlbnRpdHkubmV4dCA9IGVudGl0eS5wcmV2aW91cyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gZW50aXR5O1xuICAgICAgZW50aXR5LnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgZW50aXR5Lm5leHQgPSBudWxsO1xuICAgICAgdGhpcy50YWlsID0gZW50aXR5O1xuICAgIH1cbiAgfTtcblxuICBFbnRpdHlMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gZW50aXR5KSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gZW50aXR5KSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgfVxuICAgIGlmIChlbnRpdHkucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIGVudGl0eS5wcmV2aW91cy5uZXh0ID0gZW50aXR5Lm5leHQ7XG4gICAgfVxuICAgIGlmIChlbnRpdHkubmV4dCAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5Lm5leHQucHJldmlvdXMgPSBlbnRpdHkucHJldmlvdXM7XG4gICAgfVxuICB9O1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbnRpdHk7XG4gICAgd2hpbGUgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5ID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICBlbnRpdHkucHJldmlvdXMgPSBudWxsO1xuICAgICAgZW50aXR5Lm5leHQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHlMaXN0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlfbGlzdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGUgaW50ZXJmYWNlIGZvciBjbGFzc2VzIHRoYXQgYXJlIHVzZWQgdG8gbWFuYWdlIE5vZGVMaXN0cyAoc2V0IGFzIHRoZSBmYW1pbHlDbGFzcyBwcm9wZXJ0eVxuICogaW4gdGhlIEVuZ2luZSBvYmplY3QpLiBNb3N0IGRldmVsb3BlcnMgZG9uJ3QgbmVlZCB0byB1c2UgdGhpcyBzaW5jZSB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICogaXMgdXNlZCBieSBkZWZhdWx0IGFuZCBzdWl0cyBtb3N0IG5lZWRzLlxuICovXG5cbmFzaC5jb3JlLkZhbWlseSA9IChmdW5jdGlvbigpIHtcbiAgRmFtaWx5LnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBOb2RlTGlzdCBtYW5hZ2VkIGJ5IHRoaXMgY2xhc3MuIFRoaXMgc2hvdWxkIGJlIGEgcmVmZXJlbmNlIHRoYXQgcmVtYWlucyB2YWxpZCBhbHdheXNcbiAgICogc2luY2UgaXQgaXMgcmV0YWluZWQgYW5kIHJldXNlZCBieSBTeXN0ZW1zIHRoYXQgdXNlIHRoZSBsaXN0LiBpLmUuIG5ldmVyIHJlY3JlYXRlIHRoZSBsaXN0LFxuICAgKiBhbHdheXMgbW9kaWZ5IGl0IGluIHBsYWNlLlxuICAgKi9cblxuICBmdW5jdGlvbiBGYW1pbHkoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgbm9kZUxpc3Q6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICAvKlxuICAgKiBBbiBlbnRpdHkgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGVuZ2luZS4gSXQgbWF5IGFscmVhZHkgaGF2ZSBjb21wb25lbnRzIHNvIHRlc3QgdGhlIGVudGl0eVxuICAgKiBmb3IgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUubmV3RW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEFuIGVudGl0eSBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIGVuZ2luZS4gSWYgaXQncyBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGl0IHNob3VsZCBiZSByZW1vdmVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBIGNvbXBvbmVudCBoYXMgYmVlbiBhZGRlZCB0byBhbiBlbnRpdHkuIFRlc3Qgd2hldGhlciB0aGUgZW50aXR5J3MgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3NcbiAgICogTm9kZUxpc3Qgc2hvdWxkIGJlIG1vZGlmaWVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkVG9FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEEgY29tcG9uZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbiBlbnRpdHkuIFRlc3Qgd2hldGhlciB0aGUgZW50aXR5J3MgaW5jbHVzaW9uIGluIHRoaXMgZmFtaWx5J3NcbiAgICogTm9kZUxpc3Qgc2hvdWxkIGJlIG1vZGlmaWVkLlxuICAgKi9cblxuICBGYW1pbHkucHJvdG90eXBlLmNvbXBvbmVudFJlbW92ZWRGcm9tRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cblxuICAvKlxuICAgKiBUaGUgZmFtaWx5IGlzIGFib3V0IHRvIGJlIGRpc2NhcmRlZC4gQ2xlYW4gdXAgYWxsIHByb3BlcnRpZXMgYXMgbmVjZXNzYXJ5LiBVc3VhbGx5LCB5b3Ugd2lsbFxuICAgKiB3YW50IHRvIGVtcHR5IHRoZSBOb2RlTGlzdCBhdCB0aGlzIHRpbWUuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY2xlYW5VcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuJyk7XG4gIH07XG5cbiAgcmV0dXJuIEZhbWlseTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFtaWx5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5jb3JlLk5vZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE5vZGUoKSB7fVxuXG4gIE5vZGUucHJvdG90eXBlLmVudGl0eSA9IG51bGw7XG5cbiAgTm9kZS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIE5vZGUucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIHJldHVybiBOb2RlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDEsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDEgPSBhc2guc2lnbmFscy5TaWduYWwxO1xuXG5cbi8qXG4gKiBBIGNvbGxlY3Rpb24gb2Ygbm9kZXMuXG4gKlxuICogPHA+U3lzdGVtcyB3aXRoaW4gdGhlIGVuZ2luZSBhY2Nlc3MgdGhlIGNvbXBvbmVudHMgb2YgZW50aXRpZXMgdmlhIE5vZGVMaXN0cy4gQSBOb2RlTGlzdCBjb250YWluc1xuICogYSBub2RlIGZvciBlYWNoIEVudGl0eSBpbiB0aGUgZW5naW5lIHRoYXQgaGFzIGFsbCB0aGUgY29tcG9uZW50cyByZXF1aXJlZCBieSB0aGUgbm9kZS4gVG8gaXRlcmF0ZVxuICogb3ZlciBhIE5vZGVMaXN0LCBzdGFydCBmcm9tIHRoZSBoZWFkIGFuZCBzdGVwIHRvIHRoZSBuZXh0IG9uIGVhY2ggbG9vcCwgdW50aWwgdGhlIHJldHVybmVkIHZhbHVlXG4gKiBpcyBudWxsLiBPciBqdXN0IHVzZSBmb3IgaW4gc3ludGF4LjwvcD5cbiAqXG4gKiA8cD5mb3IgKG5vZGUgaW4gbm9kZUxpc3QpXG4gKiB7XG4gKiAgIC8vIGRvIHN0dWZmXG4gKiB9PC9wPlxuICpcbiAqIDxwPkl0IGlzIHNhZmUgdG8gcmVtb3ZlIGl0ZW1zIGZyb20gYSBub2RlbGlzdCBkdXJpbmcgdGhlIGxvb3AuIFdoZW4gYSBOb2RlIGlzIHJlbW92ZWQgZm9ybSB0aGVcbiAqIE5vZGVMaXN0IGl0J3MgcHJldmlvdXMgYW5kIG5leHQgcHJvcGVydGllcyBzdGlsbCBwb2ludCB0byB0aGUgbm9kZXMgdGhhdCB3ZXJlIGJlZm9yZSBhbmQgYWZ0ZXJcbiAqIGl0IGluIHRoZSBOb2RlTGlzdCBqdXN0IGJlZm9yZSBpdCB3YXMgcmVtb3ZlZC48L3A+XG4gKi9cblxuYXNoLmNvcmUuTm9kZUxpc3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgLypcbiAgICogVGhlIGZpcnN0IGl0ZW0gaW4gdGhlIG5vZGUgbGlzdCwgb3IgbnVsbCBpZiB0aGUgbGlzdCBjb250YWlucyBubyBub2Rlcy5cbiAgICovXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBsYXN0IGl0ZW0gaW4gdGhlIG5vZGUgbGlzdCwgb3IgbnVsbCBpZiB0aGUgbGlzdCBjb250YWlucyBubyBub2Rlcy5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQSBzaWduYWwgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW5ldmVyIGEgbm9kZSBpcyBhZGRlZCB0byB0aGUgbm9kZSBsaXN0LlxuICAgKlxuICAgKiA8cD5UaGUgc2lnbmFsIHdpbGwgcGFzcyBhIHNpbmdsZSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVycyAtIHRoZSBub2RlIHRoYXQgd2FzIGFkZGVkLjwvcD5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLm5vZGVBZGRlZCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgYSBub2RlIGlzIHJlbW92ZWQgZnJvbSB0aGUgbm9kZSBsaXN0LlxuICAgKlxuICAgKiA8cD5UaGUgc2lnbmFsIHdpbGwgcGFzcyBhIHNpbmdsZSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVycyAtIHRoZSBub2RlIHRoYXQgd2FzIHJlbW92ZWQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubm9kZVJlbW92ZWQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIE5vZGVMaXN0KCkge1xuICAgIHRoaXMubm9kZUFkZGVkID0gbmV3IFNpZ25hbDEoKTtcbiAgICB0aGlzLm5vZGVSZW1vdmVkID0gbmV3IFNpZ25hbDEoKTtcbiAgfVxuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIG5vZGUubmV4dCA9IG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICAgIHRoaXMubm9kZUFkZGVkLmRpc3BhdGNoKG5vZGUpO1xuICB9O1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZSkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUpIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICB9XG4gICAgaWYgKG5vZGUucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICB9XG4gICAgdGhpcy5ub2RlUmVtb3ZlZC5kaXNwYXRjaChub2RlKTtcbiAgfTtcblxuICBOb2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgdGhpcy5ub2RlUmVtb3ZlZC5kaXNwYXRjaChub2RlKTtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIHRydWUgaWYgdGhlIGxpc3QgaXMgZW1wdHksIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTm9kZUxpc3QucHJvdG90eXBlLCB7XG4gICAgZW1wdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQgPT09IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8qXG4gICAqIFN3YXBzIHRoZSBwb3NpdGlvbnMgb2YgdHdvIG5vZGVzIGluIHRoZSBsaXN0LiBVc2VmdWwgd2hlbiBzb3J0aW5nIGEgbGlzdC5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnN3YXAgPSBmdW5jdGlvbihub2RlMSwgbm9kZTIpIHtcbiAgICB2YXIgdGVtcDtcbiAgICBpZiAobm9kZTEucHJldmlvdXMgPT09IG5vZGUyKSB7XG4gICAgICBub2RlMS5wcmV2aW91cyA9IG5vZGUyLnByZXZpb3VzO1xuICAgICAgbm9kZTIucHJldmlvdXMgPSBub2RlMTtcbiAgICAgIG5vZGUyLm5leHQgPSBub2RlMS5uZXh0O1xuICAgICAgbm9kZTEubmV4dCA9IG5vZGUyO1xuICAgIH0gZWxzZSBpZiAobm9kZTIucHJldmlvdXMgPT09IG5vZGUxKSB7XG4gICAgICBub2RlMi5wcmV2aW91cyA9IG5vZGUxLnByZXZpb3VzO1xuICAgICAgbm9kZTEucHJldmlvdXMgPSBub2RlMjtcbiAgICAgIG5vZGUxLm5leHQgPSBub2RlMi5uZXh0O1xuICAgICAgbm9kZTIubmV4dCA9IG5vZGUxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wID0gbm9kZTEucHJldmlvdXM7XG4gICAgICBub2RlMS5wcmV2aW91cyA9IG5vZGUyLnByZXZpb3VzO1xuICAgICAgbm9kZTIucHJldmlvdXMgPSB0ZW1wO1xuICAgICAgdGVtcCA9IG5vZGUxLm5leHQ7XG4gICAgICBub2RlMS5uZXh0ID0gbm9kZTIubmV4dDtcbiAgICAgIG5vZGUyLm5leHQgPSB0ZW1wO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWFkID09PSBub2RlMSkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlYWQgPT09IG5vZGUyKSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZTEpIHtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGUyO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWlsID09PSBub2RlMikge1xuICAgICAgdGhpcy50YWlsID0gbm9kZTE7XG4gICAgfVxuICAgIGlmIChub2RlMS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgbm9kZTEucHJldmlvdXMubmV4dCA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAobm9kZTIucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgIG5vZGUyLnByZXZpb3VzLm5leHQgPSBub2RlMjtcbiAgICB9XG4gICAgaWYgKG5vZGUxLm5leHQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUxLm5leHQucHJldmlvdXMgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKG5vZGUyLm5leHQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUyLm5leHQucHJldmlvdXMgPSBub2RlMjtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBQZXJmb3JtcyBhbiBpbnNlcnRpb24gc29ydCBvbiB0aGUgbm9kZSBsaXN0LiBJbiBnZW5lcmFsLCBpbnNlcnRpb24gc29ydCBpcyB2ZXJ5IGVmZmljaWVudCB3aXRoIHNob3J0IGxpc3RzXG4gICAqIGFuZCB3aXRoIGxpc3RzIHRoYXQgYXJlIG1vc3RseSBzb3J0ZWQsIGJ1dCBpcyBpbmVmZmljaWVudCB3aXRoIGxhcmdlIGxpc3RzIHRoYXQgYXJlIHJhbmRvbWx5IG9yZGVyZWQuXG4gICAqXG4gICAqIDxwPlRoZSBzb3J0IGZ1bmN0aW9uIHRha2VzIHR3byBub2RlcyBhbmQgcmV0dXJucyBhbiBJbnQuPC9wPlxuICAgKlxuICAgKiA8cD48Y29kZT5mdW5jdGlvbiBzb3J0RnVuY3Rpb24oIG5vZGUxIDogTW9ja05vZGUsIG5vZGUyIDogTW9ja05vZGUgKSA6IEludDwvY29kZT48L3A+XG4gICAqXG4gICAqIDxwPklmIHRoZSByZXR1cm5lZCBudW1iZXIgaXMgbGVzcyB0aGFuIHplcm8sIHRoZSBmaXJzdCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIHNlY29uZC4gSWYgaXQgaXMgZ3JlYXRlclxuICAgKiB0aGFuIHplcm8gdGhlIHNlY29uZCBub2RlIHNob3VsZCBiZSBiZWZvcmUgdGhlIGZpcnN0LiBJZiBpdCBpcyB6ZXJvIHRoZSBvcmRlciBvZiB0aGUgbm9kZXMgZG9lc24ndCBtYXR0ZXJcbiAgICogYW5kIHRoZSBvcmlnaW5hbCBvcmRlciB3aWxsIGJlIHJldGFpbmVkLjwvcD5cbiAgICpcbiAgICogPHA+VGhpcyBpbnNlcnRpb24gc29ydCBpbXBsZW1lbnRhdGlvbiBydW5zIGluIHBsYWNlIHNvIG5vIG9iamVjdHMgYXJlIGNyZWF0ZWQgZHVyaW5nIHRoZSBzb3J0LjwvcD5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLmluc2VydGlvblNvcnQgPSBmdW5jdGlvbihzb3J0RnVuY3Rpb24pIHtcbiAgICB2YXIgbm9kZSwgb3RoZXIsIHJlbWFpbnM7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gdGhpcy50YWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbWFpbnMgPSB0aGlzLmhlYWQubmV4dDtcbiAgICBub2RlID0gcmVtYWlucztcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtYWlucyA9IG5vZGUubmV4dDtcbiAgICAgIG90aGVyID0gbm9kZS5wcmV2aW91cztcbiAgICAgIHdoaWxlIChvdGhlciAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoc29ydEZ1bmN0aW9uKG5vZGUsIG90aGVyKSA+PSAwKSB7XG4gICAgICAgICAgaWYgKG5vZGUgIT09IG90aGVyLm5leHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgdGhpcy50YWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUubmV4dCA9IG90aGVyLm5leHQ7XG4gICAgICAgICAgICBub2RlLnByZXZpb3VzID0gb3RoZXI7XG4gICAgICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICAgICAgb3RoZXIubmV4dCA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG90aGVyID0gb3RoZXIucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAob3RoZXIgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBub2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IHJlbWFpbnM7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUGVyZm9ybXMgYSBtZXJnZSBzb3J0IG9uIHRoZSBub2RlIGxpc3QuIEluIGdlbmVyYWwsIG1lcmdlIHNvcnQgaXMgbW9yZSBlZmZpY2llbnQgdGhhbiBpbnNlcnRpb24gc29ydFxuICAgKiB3aXRoIGxvbmcgbGlzdHMgdGhhdCBhcmUgdmVyeSB1bnNvcnRlZC5cbiAgICpcbiAgICogPHA+VGhlIHNvcnQgZnVuY3Rpb24gdGFrZXMgdHdvIG5vZGVzIGFuZCByZXR1cm5zIGFuIEludC48L3A+XG4gICAqXG4gICAqIDxwPjxjb2RlPmZ1bmN0aW9uIHNvcnRGdW5jdGlvbiggbm9kZTEgOiBNb2NrTm9kZSwgbm9kZTIgOiBNb2NrTm9kZSApIDogSW50PC9jb2RlPjwvcD5cbiAgICpcbiAgICogPHA+SWYgdGhlIHJldHVybmVkIG51bWJlciBpcyBsZXNzIHRoYW4gemVybywgdGhlIGZpcnN0IG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgc2Vjb25kLiBJZiBpdCBpcyBncmVhdGVyXG4gICAqIHRoYW4gemVybyB0aGUgc2Vjb25kIG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgZmlyc3QuIElmIGl0IGlzIHplcm8gdGhlIG9yZGVyIG9mIHRoZSBub2RlcyBkb2Vzbid0IG1hdHRlci48L3A+XG4gICAqXG4gICAqIDxwPlRoaXMgbWVyZ2Ugc29ydCBpbXBsZW1lbnRhdGlvbiBjcmVhdGVzIGFuZCB1c2VzIGEgc2luZ2xlIFZlY3RvciBkdXJpbmcgdGhlIHNvcnQgb3BlcmF0aW9uLjwvcD5cbiAgICovXG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLm1lcmdlU29ydCA9IGZ1bmN0aW9uKHNvcnRGdW5jdGlvbikge1xuICAgIHZhciBlbmQsIGxpc3RzLCBuZXh0LCBzdGFydDtcbiAgICBpZiAodGhpcy5oZWFkID09PSB0aGlzLnRhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGlzdHMgPSBbXTtcbiAgICBzdGFydCA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoc3RhcnQgIT09IG51bGwpIHtcbiAgICAgIGVuZCA9IHN0YXJ0O1xuICAgICAgd2hpbGUgKGVuZC5uZXh0ICE9PSBudWxsICYmIHNvcnRGdW5jdGlvbihlbmQsIGVuZC5uZXh0KSA8PSAwKSB7XG4gICAgICAgIGVuZCA9IGVuZC5uZXh0O1xuICAgICAgfVxuICAgICAgbmV4dCA9IGVuZC5uZXh0O1xuICAgICAgc3RhcnQucHJldmlvdXMgPSBlbmQubmV4dCA9IG51bGw7XG4gICAgICBsaXN0cy5wdXNoKHN0YXJ0KTtcbiAgICAgIHN0YXJ0ID0gbmV4dDtcbiAgICB9XG4gICAgd2hpbGUgKGxpc3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxpc3RzLnB1c2godGhpcy5tZXJnZShsaXN0cy5zaGlmdCgpLCBsaXN0cy5zaGlmdCgpLCBzb3J0RnVuY3Rpb24pKTtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gdGhpcy5oZWFkID0gbGlzdHNbMF07XG4gICAgd2hpbGUgKHRoaXMudGFpbC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dDtcbiAgICB9XG4gIH07XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24oaGVhZDEsIGhlYWQyLCBzb3J0RnVuY3Rpb24pIHtcbiAgICB2YXIgaGVhZCwgbm9kZTtcbiAgICBpZiAoc29ydEZ1bmN0aW9uKGhlYWQxLCBoZWFkMikgPD0gMCkge1xuICAgICAgaGVhZCA9IG5vZGUgPSBoZWFkMTtcbiAgICAgIGhlYWQxID0gaGVhZDEubmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZCA9IG5vZGUgPSBoZWFkMjtcbiAgICAgIGhlYWQyID0gaGVhZDIubmV4dDtcbiAgICB9XG4gICAgd2hpbGUgKGhlYWQxICE9PSBudWxsICYmIGhlYWQyICE9PSBudWxsKSB7XG4gICAgICBpZiAoc29ydEZ1bmN0aW9uKGhlYWQxLCBoZWFkMikgPD0gMCkge1xuICAgICAgICBub2RlLm5leHQgPSBoZWFkMTtcbiAgICAgICAgaGVhZDEucHJldmlvdXMgPSBub2RlO1xuICAgICAgICBub2RlID0gaGVhZDE7XG4gICAgICAgIGhlYWQxID0gaGVhZDEubmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUubmV4dCA9IGhlYWQyO1xuICAgICAgICBoZWFkMi5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUgPSBoZWFkMjtcbiAgICAgICAgaGVhZDIgPSBoZWFkMi5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZDEgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubmV4dCA9IGhlYWQxO1xuICAgICAgaGVhZDEucHJldmlvdXMgPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLm5leHQgPSBoZWFkMjtcbiAgICAgIGhlYWQyLnByZXZpb3VzID0gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWQ7XG4gIH07XG5cbiAgcmV0dXJuIE5vZGVMaXN0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlX2xpc3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBpbnRlcm5hbCBjbGFzcyBtYWludGFpbnMgYSBwb29sIG9mIGRlbGV0ZWQgbm9kZXMgZm9yIHJldXNlIGJ5IHRoZSBmcmFtZXdvcmsuIFRoaXMgcmVkdWNlcyB0aGUgb3ZlcmhlYWRcbiAqIGZyb20gb2JqZWN0IGNyZWF0aW9uIGFuZCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gKlxuICogQmVjYXVzZSBub2RlcyBtYXkgYmUgZGVsZXRlZCBmcm9tIGEgTm9kZUxpc3Qgd2hpbGUgaW4gdXNlLCBieSBkZWxldGluZyBOb2RlcyBmcm9tIGEgTm9kZUxpc3RcbiAqIHdoaWxlIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBOb2RlTGlzdCwgdGhlIHBvb2wgYWxzbyBtYWludGFpbnMgYSBjYWNoZSBvZiBub2RlcyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgcG9vbFxuICogYnV0IHNob3VsZCBub3QgYmUgcmV1c2VkIHlldC4gVGhleSBhcmUgdGhlbiByZWxlYXNlZCBpbnRvIHRoZSBwb29sIGJ5IGNhbGxpbmcgdGhlIHJlbGVhc2VDYWNoZSBtZXRob2QuXG4gKi9cblxuYXNoLmNvcmUuTm9kZVBvb2wgPSAoZnVuY3Rpb24oKSB7XG4gIE5vZGVQb29sLnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBOb2RlUG9vbC5wcm90b3R5cGUubm9kZUNsYXNzID0gbnVsbDtcblxuICBOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGVUYWlsID0gbnVsbDtcblxuICBOb2RlUG9vbC5wcm90b3R5cGUuY29tcG9uZW50cyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgcG9vbCBmb3IgdGhlIGdpdmVuIG5vZGUgY2xhc3MuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIE5vZGVQb29sKG5vZGVDbGFzcywgY29tcG9uZW50cykge1xuICAgIHRoaXMubm9kZUNsYXNzID0gbm9kZUNsYXNzO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gIH1cblxuXG4gIC8qXG4gICAqIEZldGNoZXMgYSBub2RlIGZyb20gdGhlIHBvb2wuXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyB0aGlzLm5vZGVDbGFzcy5jb25zdHJ1Y3RvcigpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEFkZHMgYSBub2RlIHRvIHRoZSBwb29sLlxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZTtcbiAgICBmb3IgKGNvbXBvbmVudE5hbWUgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICBub2RlW2NvbXBvbmVudE5hbWVdID0gbnVsbDtcbiAgICB9XG4gICAgbm9kZS5lbnRpdHkgPSBudWxsO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICB0aGlzLnRhaWwgPSBub2RlO1xuICB9O1xuXG5cbiAgLypcbiAgICogQWRkcyBhIG5vZGUgdG8gdGhlIGNhY2hlXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5jYWNoZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVsZWFzZXMgYWxsIG5vZGVzIGZyb20gdGhlIGNhY2hlIGludG8gdGhlIHBvb2xcbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLnJlbGVhc2VDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmNhY2hlVGFpbCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuY2FjaGVUYWlsO1xuICAgICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTm9kZVBvb2w7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVfcG9vbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYSBzeXN0ZW0uXG4gKlxuICogPHA+QSBzeXN0ZW0gaXMgcGFydCBvZiB0aGUgY29yZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBnYW1lLiBBZnRlciBhIHN5c3RlbSBpcyBhZGRlZCB0byB0aGUgZW5naW5lLCBpdHNcbiAqIHVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgb24gZXZlcnkgZnJhbWUgb2YgdGhlIGVuZ2luZS4gV2hlbiB0aGUgc3lzdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLFxuICogdGhlIHVwZGF0ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIGNhbGxlZC48L3A+XG4gKlxuICogPHA+VGhlIGFnZ3JlZ2F0ZSBvZiBhbGwgc3lzdGVtcyBpbiB0aGUgZW5naW5lIGlzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBnYW1lLCB3aXRoIHRoZSB1cGRhdGVcbiAqIG1ldGhvZHMgb2YgdGhvc2Ugc3lzdGVtcyBjb2xsZWN0aXZlbHkgY29uc3RpdHV0aW5nIHRoZSBlbmdpbmUgdXBkYXRlIGxvb3AuIFN5c3RlbXMgZ2VuZXJhbGx5IG9wZXJhdGUgb25cbiAqIG5vZGUgbGlzdHMgLSBjb2xsZWN0aW9ucyBvZiBub2Rlcy4gRWFjaCBub2RlIGNvbnRhaW5zIHRoZSBjb21wb25lbnRzIGZyb20gYW4gZW50aXR5IGluIHRoZSBlbmdpbmVcbiAqIHRoYXQgbWF0Y2ggdGhlIG5vZGUuPC9wPlxuICovXG5cbmFzaC5jb3JlLlN5c3RlbSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU3lzdGVtKCkge1xuICAgIHRoaXMudXBkYXRlID0gX19iaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgfVxuXG5cbiAgLypcbiAgICAqIFVzZWQgaW50ZXJuYWxseSB0byBtYW5hZ2UgdGhlIGxpc3Qgb2Ygc3lzdGVtcyB3aXRoaW4gdGhlIGVuZ2luZS4gVGhlIHByZXZpb3VzIHN5c3RlbSBpbiB0aGUgbGlzdC5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5wcmV2aW91cyA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHkgdG8gbWFuYWdlIHRoZSBsaXN0IG9mIHN5c3RlbXMgd2l0aGluIHRoZSBlbmdpbmUuIFRoZSBuZXh0IHN5c3RlbSBpbiB0aGUgbGlzdC5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5uZXh0ID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSB0byBob2xkIHRoZSBwcmlvcml0eSBvZiB0aGlzIHN5c3RlbSB3aXRoaW4gdGhlIHN5c3RlbSBsaXN0LiBUaGlzIGlzXG4gICAqIHVzZWQgdG8gb3JkZXIgdGhlIHN5c3RlbXMgc28gdGhleSBhcmUgdXBkYXRlZCBpbiB0aGUgY29ycmVjdCBvcmRlci5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5wcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDYWxsZWQganVzdCBhZnRlciB0aGUgc3lzdGVtIGlzIGFkZGVkIHRvIHRoZSBlbmdpbmUsIGJlZm9yZSBhbnkgY2FsbHMgdG8gdGhlIHVwZGF0ZSBtZXRob2QuXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCB5b3VyIG93biBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAcGFyYW0gZW5naW5lIFRoZSBlbmdpbmUgdGhlIHN5c3RlbSB3YXMgYWRkZWQgdG8uXG4gICAqL1xuXG4gIFN5c3RlbS5wcm90b3R5cGUuYWRkVG9FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHt9O1xuXG5cbiAgLypcbiAgICogQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHN5c3RlbSBpcyByZW1vdmVkIGZyb20gdGhlIGVuZ2luZSwgYWZ0ZXIgYWxsIGNhbGxzIHRvIHRoZSB1cGRhdGUgbWV0aG9kLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgeW91ciBvd24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGVuZ2luZSBUaGUgZW5naW5lIHRoZSBzeXN0ZW0gd2FzIHJlbW92ZWQgZnJvbS5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7fTtcblxuXG4gIC8qXG4gICAqIEFmdGVyIHRoZSBzeXN0ZW0gaXMgYWRkZWQgdG8gdGhlIGVuZ2luZSwgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGV2ZXJ5IGZyYW1lIHVudGlsIHRoZSBzeXN0ZW1cbiAgICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUuIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCB5b3VyIG93biBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiA8cD5JZiB5b3UgbmVlZCB0byBwZXJmb3JtIGFuIGFjdGlvbiBvdXRzaWRlIG9mIHRoZSB1cGRhdGUgbG9vcCAoZS5nLiB5b3UgbmVlZCB0byBjaGFuZ2UgdGhlXG4gICAqIHN5c3RlbXMgaW4gdGhlIGVuZ2luZSBhbmQgeW91IGRvbid0IHdhbnQgdG8gZG8gaXQgd2hpbGUgdGhleSdyZSB1cGRhdGluZykgYWRkIGEgbGlzdGVuZXIgdG9cbiAgICogdGhlIGVuZ2luZSdzIHVwZGF0ZUNvbXBsZXRlIHNpZ25hbCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1cGRhdGUgbG9vcCBjb21wbGV0ZXMuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gdGltZSBUaGUgZHVyYXRpb24sIGluIHNlY29uZHMsIG9mIHRoZSBmcmFtZS5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih0aW1lKSB7fTtcblxuICByZXR1cm4gU3lzdGVtO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW0uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVXNlZCBpbnRlcm5hbGx5LCB0aGlzIGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBTeXN0ZW1zIGZvciB1c2UgYnkgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcC5cbiAqL1xuXG5hc2guY29yZS5TeXN0ZW1MaXN0ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTeXN0ZW1MaXN0KCkge31cblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBzeXN0ZW07XG4gICAgICBzeXN0ZW0ubmV4dCA9IHN5c3RlbS5wcmV2aW91cyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5wcmlvcml0eSA8PSBzeXN0ZW0ucHJpb3JpdHkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmIChub2RlID09PSB0aGlzLnRhaWwpIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBzeXN0ZW07XG4gICAgICAgIHN5c3RlbS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgc3lzdGVtLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhaWwgPSBzeXN0ZW07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgc3lzdGVtLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IHN5c3RlbTtcbiAgICAgICAgdGhpcy5oZWFkID0gc3lzdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3lzdGVtLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IHN5c3RlbTtcbiAgICAgICAgbm9kZS5uZXh0ID0gc3lzdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBzeXN0ZW0pIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBzeXN0ZW0pIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICB9XG4gICAgaWYgKHN5c3RlbS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgc3lzdGVtLnByZXZpb3VzLm5leHQgPSBzeXN0ZW0ubmV4dDtcbiAgICB9XG4gICAgaWYgKHN5c3RlbS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBzeXN0ZW0ubmV4dC5wcmV2aW91cyA9IHN5c3RlbS5wcmV2aW91cztcbiAgICB9XG4gIH07XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICB3aGlsZSAodGhpcy5oZWFkICE9PSBudWxsKSB7XG4gICAgICBzeXN0ZW0gPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHN5c3RlbS5wcmV2aW91cyA9IG51bGw7XG4gICAgICBzeXN0ZW0ubmV4dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cbiAgU3lzdGVtTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBzeXN0ZW07XG4gICAgc3lzdGVtID0gdGhpcy5zeXN0ZW1MaXN0LmhlYWQ7XG4gICAgd2hpbGUgKHN5c3RlbSkge1xuICAgICAgaWYgKHN5c3RlbS5jb25zdHJ1Y3RvciA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4gc3lzdGVtO1xuICAgICAgfVxuICAgICAgc3lzdGVtID0gc3lzdGVtLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTeXN0ZW1MaXN0O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1fbGlzdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIGNvbXBvbmVudCBwcm92aWRlciBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LiBUaGUgaW5zdGFuY2VcbiAqIGlzIHBhc3NlZCB0byB0aGUgcHJvdmlkZXIgYXQgaW5pdGlhbGlzYXRpb24uXG4gKi9cblxuYXNoLmZzbS5Db21wb25lbnRJbnN0YW5jZVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIHRvIHJldHVybiB3aGVuZXZlciBhIGNvbXBvbmVudCBpcyByZXF1ZXN0ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH07XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9pbnN0YW5jZV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guZnNtLkNvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cbiAgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2VcbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIodHlwZSkge1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG5cbiAgICAvKlxuICAgICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAgICovXG4gIH1cblxuICBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzLmNvbXBvbmVudFR5cGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH07XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guZnNtLkNvbXBvbmVudFR5cGVQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgQ29tcG9uZW50VHlwZVByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2VcbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50VHlwZVByb3ZpZGVyKHR5cGUpIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIENvbXBvbmVudFR5cGVQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbXBvbmVudFR5cGUoKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudFR5cGVQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRUeXBlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFR5cGVQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X3R5cGVfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmZzbS5EeW5hbWljQ29tcG9uZW50UHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIER5bmFtaWNDb21wb25lbnRQcm92aWRlci5wcm90b3R5cGUuX2Nsb3N1cmUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGNsb3N1cmUgVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuIGNhbGxlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyKGNsb3N1cmUpIHtcbiAgICB0aGlzLl9jbG9zdXJlID0gY2xvc3VyZTtcblxuICAgIC8qXG4gICAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgICAqXG4gICAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgfVxuXG4gIER5bmFtaWNDb21wb25lbnRQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3N1cmU7XG4gIH07XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSByZWdhcmRlZCBhcyBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3N1cmU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljX2NvbXBvbmVudF9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIFN5c3RlbSBwcm92aWRlciByZXR1cm5zIHJlc3VsdHMgb2YgYSBtZXRob2QgY2FsbC4gVGhlIG1ldGhvZFxuICogaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlciBhdCBpbml0aWFsaXNhdGlvbi5cbiAqL1xuXG5hc2guZnNtLkR5bmFtaWNTeXN0ZW1Qcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbigpIHt9O1xuXG4gIER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUuc3lzdGVtUHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUgU3lzdGVtIGluc3RhbmNlO1xuICAgKi9cblxuICBmdW5jdGlvbiBEeW5hbWljU3lzdGVtUHJvdmlkZXIobWV0aG9kKSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIG1ldGhvZCB1c2VkIHRvIGNhbGwgdGhlIFN5c3RlbSBpbnN0YW5jZXNcbiAgICovXG5cbiAgRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRob2QoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0aG9kO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEeW5hbWljU3lzdGVtUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWNfc3lzdGVtX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIER5bmFtaWNTeXN0ZW1Qcm92aWRlciwgU3RhdGVTeXN0ZW1NYXBwaW5nLCBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLCBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU3lzdGVtSW5zdGFuY2VQcm92aWRlciA9IGFzaC5mc20uU3lzdGVtSW5zdGFuY2VQcm92aWRlcjtcblxuU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgPSBhc2guZnNtLlN5c3RlbVNpbmdsZXRvblByb3ZpZGVyO1xuXG5EeW5hbWljU3lzdGVtUHJvdmlkZXIgPSBhc2guZnNtLkR5bmFtaWNTeXN0ZW1Qcm92aWRlcjtcblxuU3RhdGVTeXN0ZW1NYXBwaW5nID0gYXNoLmZzbS5TdGF0ZVN5c3RlbU1hcHBpbmc7XG5cblxuLypcbiAqIFJlcHJlc2VudHMgYSBzdGF0ZSBmb3IgYSBTeXN0ZW1TdGF0ZU1hY2hpbmUuIFRoZSBzdGF0ZSBjb250YWlucyBhbnkgbnVtYmVyIG9mIFN5c3RlbVByb3ZpZGVycyB3aGljaFxuICogYXJlIHVzZWQgdG8gYWRkIFN5c3RlbXMgdG8gdGhlIEVuZ2luZSB3aGVuIHRoaXMgc3RhdGUgaXMgZW50ZXJlZC5cbiAqL1xuXG5hc2guZnNtLkVuZ2luZVN0YXRlID0gKGZ1bmN0aW9uKCkge1xuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUucHJvdmlkZXJzID0gbnVsbDtcblxuICBmdW5jdGlvbiBFbmdpbmVTdGF0ZSgpIHtcbiAgICB0aGlzLnByb3ZpZGVycyA9IFtdO1xuICB9XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc3BlY2lmaWMgU3lzdGVtIGluc3RhbmNlLiBBXG4gICAqIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIFN5c3RlbSBpbnN0YW5jZSB0byB1c2UgZm9yIHRoZSBtYXBwaW5nXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihzeXN0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5hZGRQcm92aWRlcihuZXcgU3lzdGVtSW5zdGFuY2VQcm92aWRlcihzeXN0ZW0pKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSBpbnN0YW5jZSBpcyBub3QgY3JlYXRlZCB1bnRpbCBpdCBpcyBmaXJzdCByZXF1ZXN0ZWQuIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZVxuICAgKiBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLiBJZiBvbWl0dGVkLCB0aGUgdHlwZSBvZiB0aGVcbiAgICogbWFwcGluZyBpcyB1c2VkLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRQcm92aWRlcihuZXcgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIodHlwZSkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIG1ldGhvZCBjYWxsLlxuICAgKiBUaGUgbWV0aG9kIHNob3VsZCByZXR1cm4gYSBTeXN0ZW0gaW5zdGFuY2UuIEEgRHluYW1pY1N5c3RlbVByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gcHJvdmlkZSB0aGUgU3lzdGVtIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRQcm92aWRlcihuZXcgRHluYW1pY1N5c3RlbVByb3ZpZGVyKG1ldGhvZCkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQWRkcyBhbnkgU3lzdGVtUHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwcm92aWRlciBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkUHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHZhciBtYXBwaW5nO1xuICAgIG1hcHBpbmcgPSBuZXcgU3RhdGVTeXN0ZW1NYXBwaW5nKHRoaXMsIHByb3ZpZGVyKTtcbiAgICB0aGlzLnByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICByZXR1cm4gbWFwcGluZztcbiAgfTtcblxuICByZXR1cm4gRW5naW5lU3RhdGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBFbmdpbmVTdGF0ZSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRW5naW5lU3RhdGUgPSBhc2guZnNtLkVuZ2luZVN0YXRlO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogVGhpcyBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIHRoZSBFbmdpbmUuIFRoZSBzdGF0ZSBtYWNoaW5lIG1hbmFnZXMgYSBzZXQgb2Ygc3RhdGVzLFxuICogZWFjaCBvZiB3aGljaCBoYXMgYSBzZXQgb2YgU3lzdGVtIHByb3ZpZGVycy4gV2hlbiB0aGUgc3RhdGUgbWFjaGluZSBjaGFuZ2VzIHRoZSBzdGF0ZSwgaXQgcmVtb3Zlc1xuICogU3lzdGVtcyBhc3NvY2lhdGVkIHdpdGggdGhlIHByZXZpb3VzIHN0YXRlIGFuZCBhZGRzIFN5c3RlbXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gKi9cblxuYXNoLmZzbS5FbmdpbmVTdGF0ZU1hY2hpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuZW5naW5lID0gbnVsbDtcblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLnN0YXRlcyA9IG51bGw7XG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jdXJyZW50U3RhdGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3IuIENyZWF0ZXMgYW4gU3lzdGVtU3RhdGVNYWNoaW5lLlxuICAgKi9cblxuICBmdW5jdGlvbiBFbmdpbmVTdGF0ZU1hY2hpbmUoZW5naW5lKSB7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cblxuICAvKlxuICAgKiBBZGQgYSBzdGF0ZSB0byB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoaXMgc3RhdGUgLSB1c2VkIHRvIGlkZW50aWZ5IGl0IGxhdGVyIGluIHRoZSBjaGFuZ2VTdGF0ZSBtZXRob2QgY2FsbC5cbiAgICogQHBhcmFtIHN0YXRlIFRoZSBzdGF0ZS5cbiAgICogQHJldHVybiBUaGlzIHN0YXRlIG1hY2hpbmUsIHNvIG1ldGhvZHMgY2FuIGJlIGNoYWluZWQuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuYWRkU3RhdGUgPSBmdW5jdGlvbihuYW1lLCBzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGVzW25hbWVdID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYSBuZXcgc3RhdGUgaW4gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV3IHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEByZXR1cm4gVGhlIG5ldyBFbnRpdHlTdGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgc3RhdGUuIFRoaXMgd2lsbCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQgd2l0aFxuICAgKiB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHByb3ZpZGVycy5cbiAgICovXG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBuZXcgRW5naW5lU3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ2hhbmdlIHRvIGEgbmV3IHN0YXRlLiBUaGUgU3lzdGVtcyBmcm9tIHRoZSBvbGQgc3RhdGUgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgU3lzdGVtc1xuICAgKiBmb3IgdGhlIG5ldyBzdGF0ZSB3aWxsIGJlIGFkZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RhdGUgdG8gY2hhbmdlIHRvLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBlYWNoLCBpZCwgbmV3U3RhdGUsIG90aGVyLCBwcm92aWRlciwgdG9BZGQsIF9yZWYsIF9yZWYxO1xuICAgIG5ld1N0YXRlID0gdGhpcy5zdGF0ZXNbbmFtZV07XG4gICAgaWYgKG5ld1N0YXRlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVuZ2luZSBzdGF0ZSBcIiArIG5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAobmV3U3RhdGUgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRvQWRkID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICBfcmVmID0gbmV3U3RhdGUucHJvdmlkZXJzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBwcm92aWRlciA9IF9yZWZbZWFjaF07XG4gICAgICBpZCA9IHByb3ZpZGVyLmlkZW50aWZpZXI7XG4gICAgICB0b0FkZFtpZF0gPSBwcm92aWRlcjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgX3JlZjEgPSB0aGlzLmN1cnJlbnRTdGF0ZS5wcm92aWRlcnM7XG4gICAgICBmb3IgKGVhY2ggaW4gX3JlZjEpIHtcbiAgICAgICAgcHJvdmlkZXIgPSBfcmVmMVtlYWNoXTtcbiAgICAgICAgaWQgPSBwcm92aWRlci5pZGVudGlmaWVyO1xuICAgICAgICBvdGhlciA9IHRvQWRkW2lkXTtcbiAgICAgICAgaWYgKG90aGVyKSB7XG4gICAgICAgICAgZGVsZXRlIHRvQWRkW2lkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVTeXN0ZW0ocHJvdmlkZXIuZ2V0U3lzdGVtKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoZWFjaCBpbiB0b0FkZCkge1xuICAgICAgcHJvdmlkZXIgPSB0b0FkZFtlYWNoXTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFN5c3RlbShwcm92aWRlci5nZXRTeXN0ZW0oKSwgcHJvdmlkZXIucHJpb3JpdHkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcbiAgfTtcblxuICByZXR1cm4gRW5naW5lU3RhdGVNYWNoaW5lO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmdpbmVfc3RhdGVfbWFjaGluZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBTdGF0ZUNvbXBvbmVudE1hcHBpbmcsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblN0YXRlQ29tcG9uZW50TWFwcGluZyA9IGFzaC5mc20uU3RhdGVDb21wb25lbnRNYXBwaW5nO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogUmVwcmVzZW50cyBhIHN0YXRlIGZvciBhbiBFbnRpdHlTdGF0ZU1hY2hpbmUuIFRoZSBzdGF0ZSBjb250YWlucyBhbnkgbnVtYmVyIG9mIENvbXBvbmVudFByb3ZpZGVycyB3aGljaFxuICogYXJlIHVzZWQgdG8gYWRkIGNvbXBvbmVudHMgdG8gdGhlIGVudGl0eSB3aGVuIHRoaXMgc3RhdGUgaXMgZW50ZXJlZC5cbiAqL1xuXG5hc2guZnNtLkVudGl0eVN0YXRlID0gKGZ1bmN0aW9uKCkge1xuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUucHJvdmlkZXJzID0gbnVsbDtcblxuICBmdW5jdGlvbiBFbnRpdHlTdGF0ZSgpIHtcbiAgICB0aGlzLnByb3ZpZGVycyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFkZCBhIG5ldyBDb21wb25lbnRNYXBwaW5nIHRvIHRoaXMgc3RhdGUuIFRoZSBtYXBwaW5nIGlzIGEgdXRpbGl0eSBjbGFzcyB0aGF0IGlzIHVzZWQgdG9cbiAgICogbWFwIGEgY29tcG9uZW50IHR5cGUgdG8gdGhlIHByb3ZpZGVyIHRoYXQgcHJvdmlkZXMgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50IHRvIGJlIG1hcHBlZFxuICAgKiBAcmV0dXJuIFRoZSBjb21wb25lbnQgbWFwcGluZyB0byB1c2Ugd2hlbiBzZXR0aW5nIHRoZSBwcm92aWRlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKi9cblxuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBuZXcgU3RhdGVDb21wb25lbnRNYXBwaW5nKHRoaXMsIHR5cGUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IHRoZSBDb21wb25lbnRQcm92aWRlciBmb3IgYSBwYXJ0aWN1bGFyIGNvbXBvbmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gZ2V0IHRoZSBwcm92aWRlciBmb3JcbiAgICogQHJldHVybiBUaGUgQ29tcG9uZW50UHJvdmlkZXJcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbdHlwZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBUbyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIHN0YXRlIGhhcyBhIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gbG9vayBmb3IgYSBwcm92aWRlciBmb3JcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZXJlIGlzIGEgcHJvdmlkZXIgZm9yIHRoZSBnaXZlbiB0eXBlLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG5cbiAgRW50aXR5U3RhdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbdHlwZV0gIT09IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eVN0YXRlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlfc3RhdGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRGljdGlvbmFyeSwgRW50aXR5U3RhdGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVudGl0eVN0YXRlID0gYXNoLmZzbS5FbnRpdHlTdGF0ZTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoaXMgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBhbiBlbnRpdHkuIFRoZSBzdGF0ZSBtYWNoaW5lIG1hbmFnZXMgYSBzZXQgb2Ygc3RhdGVzLFxuICogZWFjaCBvZiB3aGljaCBoYXMgYSBzZXQgb2YgY29tcG9uZW50IHByb3ZpZGVycy4gV2hlbiB0aGUgc3RhdGUgbWFjaGluZSBjaGFuZ2VzIHRoZSBzdGF0ZSwgaXQgcmVtb3Zlc1xuICogY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIHByZXZpb3VzIHN0YXRlIGFuZCBhZGRzIGNvbXBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gKi9cblxuYXNoLmZzbS5FbnRpdHlTdGF0ZU1hY2hpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuc3RhdGVzID0gbnVsbDtcblxuXG4gIC8qXG4gIFx0ICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0YXRlIG1hY2hpbmUuXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY3VycmVudFN0YXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBlbnRpdHkgd2hvc2Ugc3RhdGUgbWFjaGluZSB0aGlzIGlzXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuZW50aXR5ID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yLiBDcmVhdGVzIGFuIEVudGl0eVN0YXRlTWFjaGluZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gRW50aXR5U3RhdGVNYWNoaW5lKGVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgXHRcdCAqIEFkZCBhIHN0YXRlIHRvIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgXHRcdCAqXG4gIFx0XHQgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gIFx0XHQgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlLlxuICBcdFx0ICogQHJldHVybiBUaGlzIHN0YXRlIG1hY2hpbmUsIHNvIG1ldGhvZHMgY2FuIGJlIGNoYWluZWQuXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuYWRkU3RhdGUgPSBmdW5jdGlvbihuYW1lLCBzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGVzW25hbWVdID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYSBuZXcgc3RhdGUgaW4gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV3IHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEByZXR1cm4gVGhlIG5ldyBFbnRpdHlTdGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgc3RhdGUuIFRoaXMgd2lsbCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQgd2l0aFxuICAgKiB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHByb3ZpZGVycy5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBuZXcgRW50aXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlc1tuYW1lXSA9IHN0YXRlO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENoYW5nZSB0byBhIG5ldyBzdGF0ZS4gVGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgb2xkIHN0YXRlIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIGNvbXBvbmVudHNcbiAgICogZm9yIHRoZSBuZXcgc3RhdGUgd2lsbCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0YXRlIHRvIGNoYW5nZSB0by5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgY3VycmVudFN0YXRlLCBuZXdTdGF0ZSwgb3RoZXIsIHRvQWRkLCB0eXBlO1xuICAgIG5ld1N0YXRlID0gdGhpcy5zdGF0ZXNbbmFtZV07XG4gICAgaWYgKCFuZXdTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXR5IHN0YXRlIFwiICsgbmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChuZXdTdGF0ZSA9PT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICB0b0FkZCA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgICBmb3IgKHR5cGUgaW4gbmV3U3RhdGUucHJvdmlkZXJzKSB7XG4gICAgICAgIHRvQWRkW3R5cGVdID0gbmV3U3RhdGUucHJvdmlkZXJzW3R5cGVdO1xuICAgICAgfVxuICAgICAgZm9yICh0eXBlIGluIHRoaXMuY3VycmVudFN0YXRlLnByb3ZpZGVycykge1xuICAgICAgICBvdGhlciA9IHRvQWRkW3R5cGVdO1xuICAgICAgICBpZiAob3RoZXIgJiYgb3RoZXIuaWRlbnRpZmllciA9PT0gY3VycmVudFN0YXRlLnByb3ZpZGVyc1t0eXBlXS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgZGVsZXRlIHRvQWRkW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b0FkZCA9IG5ld1N0YXRlLnByb3ZpZGVycztcbiAgICB9XG4gICAgZm9yICh0eXBlIGluIHRvQWRkKSB7XG4gICAgICB0aGlzLmVudGl0eS5hZGQodG9BZGRbdHlwZV0uZ2V0Q29tcG9uZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eVN0YXRlTWFjaGluZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5X3N0YXRlX21hY2hpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciwgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIsIENvbXBvbmVudFR5cGVQcm92aWRlciwgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5Db21wb25lbnRJbnN0YW5jZVByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRJbnN0YW5jZVByb3ZpZGVyO1xuXG5Db21wb25lbnRUeXBlUHJvdmlkZXIgPSBhc2guZnNtLkNvbXBvbmVudFR5cGVQcm92aWRlcjtcblxuQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgPSBhc2guZnNtLkNvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyO1xuXG5EeW5hbWljQ29tcG9uZW50UHJvdmlkZXIgPSBhc2guZnNtLkR5bmFtaWNDb21wb25lbnRQcm92aWRlcjtcblxuXG4vKlxuICogVXNlZCBieSB0aGUgRW50aXR5U3RhdGUgY2xhc3MgdG8gY3JlYXRlIHRoZSBtYXBwaW5ncyBvZiBjb21wb25lbnRzIHRvIHByb3ZpZGVycyB2aWEgYSBmbHVlbnQgaW50ZXJmYWNlLlxuICovXG5cbmFzaC5mc20uU3RhdGVDb21wb25lbnRNYXBwaW5nID0gKGZ1bmN0aW9uKCkge1xuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuY3JlYXRpbmdTdGF0ZSA9IG51bGw7XG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5wcm92aWRlciA9IG51bGw7XG5cblxuICAvKlxuICAgKiBVc2VkIGludGVybmFsbHksIHRoZSBjb25zdHJ1Y3RvciBjcmVhdGVzIGEgY29tcG9uZW50IG1hcHBpbmcuIFRoZSBjb25zdHJ1Y3RvclxuICAgKiBjcmVhdGVzIGEgQ29tcG9uZW50VHlwZVByb3ZpZGVyIGFzIHRoZSBkZWZhdWx0IG1hcHBpbmcsIHdoaWNoIHdpbGwgYmUgcmVwbGFjZWRcbiAgICogYnkgbW9yZSBzcGVjaWZpYyBtYXBwaW5ncyBpZiBvdGhlciBtZXRob2RzIGFyZSBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjcmVhdGluZ1N0YXRlIFRoZSBFbnRpdHlTdGF0ZSB0aGF0IHRoZSBtYXBwaW5nIHdpbGwgYmVsb25nIHRvXG4gICAqIEBwYXJhbSB0eXBlIFRoZSBjb21wb25lbnQgdHlwZSBmb3IgdGhlIG1hcHBpbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gU3RhdGVDb21wb25lbnRNYXBwaW5nKGNyZWF0aW5nU3RhdGUsIHR5cGUpIHtcbiAgICB0aGlzLmNyZWF0aW5nU3RhdGUgPSBjcmVhdGluZ1N0YXRlO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gICAgdGhpcy53aXRoVHlwZSh0eXBlKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhIHNwZWNpZmljIGNvbXBvbmVudCBpbnN0YW5jZS4gQVxuICAgKiBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aEluc3RhbmNlID0gZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcihjb21wb25lbnQpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gbmV3IGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIENvbXBvbmVudFR5cGVQcm92aWRlclxuICAgKiBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkIGJ5IHRoaXMgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50VHlwZVByb3ZpZGVyKHR5cGUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSBpbnN0YW5jZSBpcyBub3QgY3JlYXRlZCB1bnRpbCBpdCBpcyBmaXJzdCByZXF1ZXN0ZWQuIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZVxuICAgKiBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcG9uZW50VHlwZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIodHlwZSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhIG1ldGhvZCBjYWxsLiBBXG4gICAqIER5bmFtaWNDb21wb25lbnRQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdGhpcy5zZXRQcm92aWRlcihuZXcgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyKG1ldGhvZCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBjb21wb25lbnQgdHlwZSB0byBhbnkgQ29tcG9uZW50UHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwcm92aWRlciBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoUHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogTWFwcyB0aHJvdWdoIHRvIHRoZSBhZGQgbWV0aG9kIG9mIHRoZSBFbnRpdHlTdGF0ZSB0aGF0IHRoaXMgbWFwcGluZyBiZWxvbmdzIHRvXG4gICAqIHNvIHRoYXQgYSBmbHVlbnQgaW50ZXJmYWNlIGNhbiBiZSB1c2VkIHdoZW4gY29uZmlndXJpbmcgZW50aXR5IHN0YXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgY29tcG9uZW50IHRvIGFkZCBhIG1hcHBpbmcgdG8gdGhlIHN0YXRlIGZvclxuICAgKiBAcmV0dXJuIFRoZSBuZXcgQ29tcG9uZW50TWFwcGluZyBmb3IgdGhhdCB0eXBlXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0aW5nU3RhdGUuYWRkKHR5cGUpO1xuICB9O1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUuc2V0UHJvdmlkZXIgPSBmdW5jdGlvbihwcm92aWRlcikge1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGluZ1N0YXRlLnByb3ZpZGVyc1t0aGlzLmNvbXBvbmVudFR5cGVdID0gcHJvdmlkZXI7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRlQ29tcG9uZW50TWFwcGluZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGVfY29tcG9uZW50X21hcHBpbmcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVXNlZCBieSB0aGUgU3lzdGVtU3RhdGUgY2xhc3MgdG8gY3JlYXRlIHRoZSBtYXBwaW5ncyBvZiBTeXN0ZW1zIHRvIHByb3ZpZGVycyB2aWEgYSBmbHVlbnQgaW50ZXJmYWNlLlxuICovXG5cbmFzaC5mc20uU3RhdGVTeXN0ZW1NYXBwaW5nID0gKGZ1bmN0aW9uKCkge1xuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmNyZWF0aW5nU3RhdGUgPSBudWxsO1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUucHJvdmlkZXIgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5LCB0aGUgY29uc3RydWN0b3IgY3JlYXRlcyBhIGNvbXBvbmVudCBtYXBwaW5nLiBUaGUgY29uc3RydWN0b3JcbiAgICogY3JlYXRlcyBhIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyIGFzIHRoZSBkZWZhdWx0IG1hcHBpbmcsIHdoaWNoIHdpbGwgYmUgcmVwbGFjZWRcbiAgICogYnkgbW9yZSBzcGVjaWZpYyBtYXBwaW5ncyBpZiBvdGhlciBtZXRob2RzIGFyZSBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjcmVhdGluZ1N0YXRlIFRoZSBTeXN0ZW1TdGF0ZSB0aGF0IHRoZSBtYXBwaW5nIHdpbGwgYmVsb25nIHRvXG4gICAqIEBwYXJhbSB0eXBlIFRoZSBTeXN0ZW0gdHlwZSBmb3IgdGhlIG1hcHBpbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gU3RhdGVTeXN0ZW1NYXBwaW5nKGNyZWF0aW5nU3RhdGUsIHByb3ZpZGVyKSB7XG4gICAgdGhpcy5jcmVhdGluZ1N0YXRlID0gY3JlYXRpbmdTdGF0ZTtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFwcGxpZXMgdGhlIHByaW9yaXR5IHRvIHRoZSBwcm92aWRlciB0aGF0IHRoZSBTeXN0ZW0gd2lsbCBiZS5cbiAgICpcbiAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUud2l0aFByaW9yaXR5ID0gZnVuY3Rpb24ocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByb3ZpZGVyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc3BlY2lmaWMgU3lzdGVtIGluc3RhbmNlLiBBXG4gICAqIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIFN5c3RlbSBpbnN0YW5jZSB0byB1c2UgZm9yIHRoZSBtYXBwaW5nXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24oc3lzdGVtKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkSW5zdGFuY2Uoc3lzdGVtKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSBpbnN0YW5jZSBpcyBub3QgY3JlYXRlZCB1bnRpbCBpdCBpcyBmaXJzdCByZXF1ZXN0ZWQuIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZVxuICAgKiBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZSB0byBiZSBjcmVhdGVkLiBJZiBvbWl0dGVkLCB0aGUgdHlwZSBvZiB0aGVcbiAgICogbWFwcGluZyBpcyB1c2VkLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRTaW5nbGV0b24gPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkU2luZ2xldG9uKHR5cGUpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIG1ldGhvZCBjYWxsLlxuICAgKiBUaGUgbWV0aG9kIHNob3VsZCByZXR1cm4gYSBTeXN0ZW0gaW5zdGFuY2UuIEEgRHluYW1pY1N5c3RlbVByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gcHJvdmlkZSB0aGUgU3lzdGVtIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkTWV0aG9kKG1ldGhvZCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBNYXBzIHRocm91Z2ggdG8gdGhlIGFkZFByb3ZpZGVyIG1ldGhvZCBvZiB0aGUgU3lzdGVtU3RhdGUgdGhhdCB0aGlzIG1hcHBpbmcgYmVsb25ncyB0b1xuICAgKiBzbyB0aGF0IGEgZmx1ZW50IGludGVyZmFjZSBjYW4gYmUgdXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGVudGl0eSBzdGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBwcm92aWRlciBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gY3JlYXRpbmdTdGF0ZS5hZGRQcm92aWRlcihwcm92aWRlcik7XG4gIH07XG5cblxuICAvKlxuICAgKi9cblxuICByZXR1cm4gU3RhdGVTeXN0ZW1NYXBwaW5nO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZV9zeXN0ZW1fbWFwcGluZy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIFN5c3RlbSBwcm92aWRlciBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LiBUaGUgc3lzdGVtXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uU3lzdGVtSW5zdGFuY2VQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgU3lzdGVtSW5zdGFuY2VQcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gcmV0dXJuIHdoZW5ldmVyIGEgU3lzdGVtIGlzIHJlcXVlc3RlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gU3lzdGVtSW5zdGFuY2VQcm92aWRlcihpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtXG4gICAqL1xuXG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKlxuICAgICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN5c3RlbUluc3RhbmNlUHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIFN5c3RlbSBwcm92aWRlciBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtLiBUaGUgaW5zdGFuY2VcbiAqIGlzIGNyZWF0ZWQgd2hlbiBmaXJzdCByZXF1aXJlZCBhbmQgaXMgb2YgdGhlIHR5cGUgcGFzc2VkIGluIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuXG5hc2guZnNtLlN5c3RlbVNpbmdsZXRvblByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50VHlwZSA9IG51bGw7XG5cbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuc3lzdGVtUHJpb3JpdHkgPSAwO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBTeXN0ZW0gaW5zdGFuY2VcbiAgICovXG5cbiAgZnVuY3Rpb24gU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIodHlwZSkge1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIFN5c3RlbSBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgc2luZ2xlIGluc3RhbmNlXG4gICAqL1xuXG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy5jb21wb25lbnRUeXBlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICBcdFx0ICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgc2luZ2xlXG4gICAgXHRcdCAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHJldHVybiBUaGUgc2luZ2xlIGluc3RhbmNlXG4gICAgICovXG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3lzdGVtKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIEEgbm9kZSBpbiB0aGUgbGlzdCBvZiBsaXN0ZW5lcnMgaW4gYSBzaWduYWwuXG4gKi9cblxuYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMaXN0ZW5lck5vZGUoKSB7fVxuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUucHJldmlvdXMgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5saXN0ZW5lciA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlLnByb3RvdHlwZS5vbmNlID0gZmFsc2U7XG5cbiAgcmV0dXJuIExpc3RlbmVyTm9kZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdGVuZXJfbm9kZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMaXN0ZW5lck5vZGUsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkxpc3RlbmVyTm9kZSA9IGFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZTtcblxuXG4vKlxuICogVGhpcyBpbnRlcm5hbCBjbGFzcyBtYWludGFpbnMgYSBwb29sIG9mIGRlbGV0ZWQgbGlzdGVuZXIgbm9kZXMgZm9yIHJldXNlIGJ5IGZyYW1ld29yay4gVGhpcyByZWR1Y2VzXG4gKiB0aGUgb3ZlcmhlYWQgZnJvbSBvYmplY3QgY3JlYXRpb24gYW5kIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqL1xuXG5hc2guc2lnbmFscy5MaXN0ZW5lck5vZGVQb29sID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMaXN0ZW5lck5vZGVQb29sKCkge31cblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5jYWNoZVRhaWwgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IExpc3RlbmVyTm9kZSgpO1xuICAgIH1cbiAgfTtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUubGlzdGVuZXIgPSBudWxsO1xuICAgIG5vZGUub25jZSA9IGZhbHNlO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICB0aGlzLnRhaWwgPSBub2RlO1xuICB9O1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUubGlzdGVuZXIgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGU7XG4gIH07XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUucmVsZWFzZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuY2FjaGVUYWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMaXN0ZW5lck5vZGVQb29sO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0ZW5lcl9ub2RlX3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwwID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMCwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwwKCkge1xuICAgIHJldHVybiBTaWduYWwwLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCk7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMDtcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guc2lnbmFscy5TaWduYWwxID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoU2lnbmFsMSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBTaWduYWwxKCkge1xuICAgIHJldHVybiBTaWduYWwxLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgU2lnbmFsMS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbigkMSkge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDE7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwxLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMiA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDIsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMigpIHtcbiAgICByZXR1cm4gU2lnbmFsMi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEsICQyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigkMSwgJDIpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDI7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMyA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDMsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMygpIHtcbiAgICByZXR1cm4gU2lnbmFsMy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDMucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEsICQyLCAkMykge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEsICQyLCAkMyk7XG4gICAgICBpZiAobm9kZS5vbmNlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG5vZGUubGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5kRGlzcGF0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gU2lnbmFsMztcblxufSkoYXNoLnNpZ25hbHMuU2lnbmFsQmFzZSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbDMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgTGlzdGVuZXJOb2RlUG9vbCwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuTGlzdGVuZXJOb2RlUG9vbCA9IGFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZVBvb2w7XG5cbmFzaC5zaWduYWxzLlNpZ25hbEJhc2UgPSAoZnVuY3Rpb24oKSB7XG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLm51bUxpc3RlbmVycyA9IDA7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUubGlzdGVuZXJOb2RlUG9vbCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudG9BZGRIZWFkID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS50b0FkZFRhaWwgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmRpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gU2lnbmFsQmFzZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wgPSBuZXcgTGlzdGVuZXJOb2RlUG9vbCgpO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gMDtcbiAgfVxuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnN0YXJ0RGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5lbmREaXNwYXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy50b0FkZEhlYWQgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSB0aGlzLnRvQWRkSGVhZDtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgfVxuICAgICAgdGhpcy50b0FkZEhlYWQgPSBudWxsO1xuICAgICAgdGhpcy50b0FkZFRhaWwgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wucmVsZWFzZUNhY2hlKCk7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRvQWRkSGVhZDtcbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLm5vZGVFeGlzdHMgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0aGlzLmdldE5vZGUobGlzdGVuZXIpICE9PSBudWxsO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMubm9kZUV4aXN0cyhsaXN0ZW5lcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZSA9IHRoaXMubGlzdGVuZXJOb2RlUG9vbC5nZXQoKTtcbiAgICBub2RlLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZE9uY2UgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLm5vZGVFeGlzdHMobGlzdGVuZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUgPSB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZ2V0KCk7XG4gICAgbm9kZS5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIG5vZGUub25jZSA9IHRydWU7XG4gICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmFkZE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKHRoaXMuZGlzcGF0Y2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLnRvQWRkSGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvQWRkSGVhZCA9IHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50b0FkZFRhaWw7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsID0gbm9kZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgbm9kZSA9IHRoaXMuZ2V0Tm9kZShsaXN0ZW5lcik7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvQWRkSGVhZCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLnRvQWRkSGVhZCA9IHRoaXMudG9BZGRIZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b0FkZFRhaWwgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy50b0FkZFRhaWwgPSB0aGlzLnRvQWRkVGFpbC5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUucHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5jYWNoZShub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICB9XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgdGhpcy5saXN0ZW5lck5vZGVQb29sLmRpc3Bvc2Uobm9kZSk7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgdGhpcy50b0FkZEhlYWQgPSBudWxsO1xuICAgIHRoaXMudG9BZGRUYWlsID0gbnVsbDtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbEJhc2U7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbF9iYXNlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFNpZ25hbDEsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU2lnbmFsMSA9IGFzaC5zaWduYWxzLlNpZ25hbDE7XG5cblxuLypcbiAqIFVzZXMgdGhlIGVudGVyIGZyYW1lIGV2ZW50IHRvIHByb3ZpZGUgYSBmcmFtZSB0aWNrIHdoZXJlIHRoZSBmcmFtZSBkdXJhdGlvbiBpcyB0aGUgdGltZSBzaW5jZSB0aGUgcHJldmlvdXMgZnJhbWUuXG4gKiBUaGVyZSBpcyBhIG1heGltdW0gZnJhbWUgdGltZSBwYXJhbWV0ZXIgaW4gdGhlIGNvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gbGltaXRcbiAqIHRoZSBsb25nZXN0IHBlcmlvZCBhIGZyYW1lIGNhbiBiZS5cbiAqL1xuXG5hc2gudGljay5GcmFtZVRpY2tQcm92aWRlciA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKEZyYW1lVGlja1Byb3ZpZGVyLCBfc3VwZXIpO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5kaXNwbGF5T2JqZWN0ID0gbnVsbDtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUucHJldmlvdXNUaW1lID0gMDtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUubWF4aW11bUZyYW1lVGltZSA9IDA7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLmlzUGxheWluZyA9IGZhbHNlO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5yZXF1ZXN0ID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEFwcGxpZXMgYSB0aW1lIGFkanVzdGVtZW50IGZhY3RvciB0byB0aGUgdGljaywgc28geW91IGNhbiBzbG93IGRvd24gb3Igc3BlZWQgdXAgdGhlIGVudGlyZSBlbmdpbmUuXG4gICAqIFRoZSB1cGRhdGUgdGljayB0aW1lIGlzIG11bHRpcGxpZWQgYnkgdGhpcyB2YWx1ZSwgc28gYSB2YWx1ZSBvZiAxIHdpbGwgcnVuIHRoZSBlbmdpbmUgYXQgdGhlIG5vcm1hbCByYXRlLlxuICAgKi9cblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUudGltZUFkanVzdG1lbnQgPSAxO1xuXG4gIGZ1bmN0aW9uIEZyYW1lVGlja1Byb3ZpZGVyKGRpc3BsYXlPYmplY3QsIG1heGltdW1GcmFtZVRpbWUpIHtcbiAgICB0aGlzLmRpc3BsYXlPYmplY3QgPSBkaXNwbGF5T2JqZWN0O1xuICAgIHRoaXMubWF4aW11bUZyYW1lVGltZSA9IG1heGltdW1GcmFtZVRpbWU7XG4gICAgdGhpcy5kaXNwYXRjaFRpY2sgPSBfX2JpbmQodGhpcy5kaXNwYXRjaFRpY2ssIHRoaXMpO1xuICAgIEZyYW1lVGlja1Byb3ZpZGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgcGxheWluZzoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQbGF5aW5nO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZGlzcGF0Y2hUaWNrKTtcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gIH07XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0KTtcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICB9O1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5kaXNwYXRjaFRpY2sgPSBmdW5jdGlvbih0aW1lc3RhbXApIHtcbiAgICB2YXIgZnJhbWVUaW1lLCB0ZW1wO1xuICAgIGlmICh0aW1lc3RhbXAgPT0gbnVsbCkge1xuICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy5kaXNwbGF5T2JqZWN0LmJlZ2luKCk7XG4gICAgfVxuICAgIHRlbXAgPSB0aGlzLnByZXZpb3VzVGltZSB8fCB0aW1lc3RhbXA7XG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aW1lc3RhbXA7XG4gICAgZnJhbWVUaW1lID0gKHRpbWVzdGFtcCAtIHRlbXApICogMC4wMDE7XG4gICAgdGhpcy5kaXNwYXRjaChmcmFtZVRpbWUpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRpc3BhdGNoVGljayk7XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy5kaXNwbGF5T2JqZWN0LmVuZCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRnJhbWVUaWNrUHJvdmlkZXI7XG5cbn0pKFNpZ25hbDEpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFtZV90aWNrX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIGFzaCxcbiAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogQW4gb2JqZWN0IHBvb2wgZm9yIHJlLXVzaW5nIGNvbXBvbmVudHMuIFRoaXMgaXMgbm90IGludGVncmF0ZWQgaW4gdG8gQXNoIGJ1dCBpcyB1c2VkIGRpZXJlY3RseSBieVxuICogdGhlIGRldmVsb3Blci4gSXQgZXhwZWN0cyBjb21wb25lbnRzIHRvIG5vdCByZXF1aXJlIGFueSBwYXJhbWV0ZXJzIGluIHRoZWlyIGNvbnN0cnVjdG9yLlxuICpcbiAqIDxwPkZldGNoIGFuIG9iamVjdCBmcm9tIHRoZSBwb29sIHdpdGg8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5nZXQoIENvbXBvbmVudENsYXNzICk7PC9wPlxuICpcbiAqIDxwPklmIHRoZSBwb29sIGNvbnRhaW5zIGFuIG9iamVjdCBvZiB0aGUgcmVxdWlyZWQgdHlwZSwgaXQgd2lsbCBiZSByZXR1cm5lZC4gSWYgaXQgZG9lcyBub3QsIGEgbmV3IG9iamVjdFxuICogd2lsbCBiZSBjcmVhdGVkIGFuZCByZXR1cm5lZC48L3A+XG4gKlxuICogPHA+VGhlIG9iamVjdCByZXR1cm5lZCBtYXkgaGF2ZSBwcm9wZXJ0aWVzIHNldCBvbiBpdCBmcm9tIHRoZSB0aW1lIGl0IHdhcyBwcmV2aW91c2x5IHVzZWQsIHNvIGFsbCBwcm9wZXJ0aWVzXG4gKiBzaG91bGQgYmUgcmVzZXQgaW4gdGhlIG9iamVjdCBvbmNlIGl0IGlzIHJlY2VpdmVkLjwvcD5cbiAqXG4gKiA8cD5BZGQgYW4gb2JqZWN0IHRvIHRoZSBwb29sIHdpdGg8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5kaXNwb3NlKCBjb21wb25lbnQgKTs8L3A+XG4gKlxuICogPHA+WW91IHdpbGwgdXN1YWxseSB3YW50IHRvIGRvIHRoaXMgd2hlbiByZW1vdmluZyBhIGNvbXBvbmVudCBmcm9tIGFuIGVudGl0eS4gVGhlIHJlbW92ZSBtZXRob2Qgb24gdGhlIGVudGl0eVxuICogcmV0dXJucyB0aGUgY29tcG9uZW50IHRoYXQgd2FzIHJlbW92ZWQsIHNvIHRoaXMgY2FuIGJlIGRvbmUgaW4gb25lIGxpbmUgb2YgY29kZSBsaWtlIHRoaXM8L3A+XG4gKlxuICogPHA+Q29tcG9uZW50UG9vbC5kaXNwb3NlKCBlbnRpdHkucmVtb3ZlKCBjb21wb25lbnQgKSApOzwvcD5cbiAqL1xuXG5hc2gudG9vbHMuQ29tcG9uZW50UG9vbCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGdldFBvb2wsIHBvb2xzO1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFBvb2woKSB7fVxuXG4gIHBvb2xzID0gbmV3IERpY3Rpb25hcnkoKTtcblxuICBnZXRQb29sID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAoKF9yZWYgPSBjb21wb25lbnRDbGFzcy5uYW1lLCBfX2luZGV4T2YuY2FsbChwb29scywgX3JlZikgPj0gMCkpIHtcbiAgICAgIHJldHVybiBwb29sc1tjb21wb25lbnRDbGFzcy5uYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBvb2xzW2NvbXBvbmVudENsYXNzLm5hbWVdID0gW107XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IGFuIG9iamVjdCBmcm9tIHRoZSBwb29sLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIHR5cGUgb2YgY29tcG9uZW50IHdhbnRlZC5cbiAgICogQHJldHVybiBUaGUgY29tcG9uZW50LlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmdldCA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHBvb2w7XG4gICAgcG9vbCA9IGdldFBvb2woY29tcG9uZW50Q2xhc3MpO1xuICAgIGlmIChwb29sLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwb29sLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IGNvbXBvbmVudENsYXNzKCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmV0dXJuIGFuIG9iamVjdCB0byB0aGUgcG9vbCBmb3IgcmV1c2UuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXR1cm4gdG8gdGhlIHBvb2wuXG4gICAqL1xuXG4gIENvbXBvbmVudFBvb2wuZGlzcG9zZSA9IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIHZhciBwb29sLCB0eXBlO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHR5cGUgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgICBwb29sID0gZ2V0UG9vbCh0eXBlKTtcbiAgICAgIHBvb2wucHVzaChjb21wb25lbnQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIERpc3Bvc2Ugb2YgYWxsIHBvb2xlZCByZXNvdXJjZXMsIGZyZWVpbmcgdGhlbSBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBvb2xzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50UG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X3Bvb2wuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRW5naW5lLCBOb2RlLCBOb2RlTGlzdCwgU3lzdGVtLCBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkVuZ2luZSA9IGFzaC5jb3JlLkVuZ2luZTtcblxuTm9kZSA9IGFzaC5jb3JlLk5vZGU7XG5cbk5vZGVMaXN0ID0gYXNoLmNvcmUuTm9kZUxpc3Q7XG5cblN5c3RlbSA9IGFzaC5jb3JlLlN5c3RlbTtcblxuXG4vKlxuICogQSB1c2VmdWwgY2xhc3MgZm9yIHN5c3RlbXMgd2hpY2ggc2ltcGx5IGl0ZXJhdGUgb3ZlciBhIHNldCBvZiBub2RlcywgcGVyZm9ybWluZyB0aGUgc2FtZSBhY3Rpb24gb24gZWFjaCBub2RlLiBUaGlzXG4gKiBjbGFzcyByZW1vdmVzIHRoZSBuZWVkIGZvciBhIGxvdCBvZiBib2lsZXJwbGF0ZSBjb2RlIGluIHN1Y2ggc3lzdGVtcy4gRXh0ZW5kIHRoaXMgY2xhc3MgYW5kIHBhc3MgdGhlIG5vZGUgdHlwZSBhbmRcbiAqIGEgbm9kZSB1cGRhdGUgbWV0aG9kIGludG8gdGhlIGNvbnN0cnVjdG9yLiBUaGUgbm9kZSB1cGRhdGUgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIG9uY2UgcGVyIG5vZGUgb24gdGhlIHVwZGF0ZSBjeWNsZVxuICogd2l0aCB0aGUgbm9kZSBpbnN0YW5jZSBhbmQgdGhlIGZyYW1lIHRpbWUgYXMgcGFyYW1ldGVycy4gZS5nLlxuICpcbiAqIDxjb2RlPnBhY2thZ2U7XG4gKiBjbGFzcyBNeVN5c3RlbSBleHRlbmRzIExpc3RJdGVyYXRpbmdTeXN0ZW08TXlOb2RlPlxuICoge1xuICogICAgIHB1YmxpYyBmdW5jdGlvbiBuZXcoKVxuICogICAgIHtcbiAqICAgICAgICAgc3VwZXIoTXlOb2RlLCB1cGRhdGVOb2RlKTtcbiAqICAgICB9XG4gKlxuICogICAgIHByaXZhdGUgZnVuY3Rpb24gdXBkYXRlTm9kZShub2RlOk15Tm9kZSwgdGltZTpGbG9hdCk6Vm9pZFxuICogICAgIHtcbiAqICAgICAgICAgLy8gcHJvY2VzcyB0aGUgbm9kZSBoZXJlXG4gKiAgICAgfVxuICogfVxuICogPC9jb2RlPlxuICovXG5cbmFzaC50b29scy5MaXN0SXRlcmF0aW5nU3lzdGVtID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICBfX2V4dGVuZHMoTGlzdEl0ZXJhdGluZ1N5c3RlbSwgX3N1cGVyKTtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlTGlzdCA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZUNsYXNzID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlVXBkYXRlRnVuY3Rpb24gPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVBZGRlZEZ1bmN0aW9uID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBMaXN0SXRlcmF0aW5nU3lzdGVtKG5vZGVDbGFzcywgbm9kZVVwZGF0ZUZ1bmN0aW9uLCBub2RlQWRkZWRGdW5jdGlvbiwgbm9kZVJlbW92ZWRGdW5jdGlvbikge1xuICAgIGlmIChub2RlQWRkZWRGdW5jdGlvbiA9PSBudWxsKSB7XG4gICAgICBub2RlQWRkZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChub2RlUmVtb3ZlZEZ1bmN0aW9uID09IG51bGwpIHtcbiAgICAgIG5vZGVSZW1vdmVkRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLm5vZGVVcGRhdGVGdW5jdGlvbiA9IG5vZGVVcGRhdGVGdW5jdGlvbjtcbiAgICB0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uID0gbm9kZUFkZGVkRnVuY3Rpb247XG4gICAgdGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbm9kZVJlbW92ZWRGdW5jdGlvbjtcbiAgfVxuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLmFkZFRvRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5ub2RlTGlzdCA9IGVuZ2luZS5nZXROb2RlTGlzdCh0aGlzLm5vZGVDbGFzcyk7XG4gICAgaWYgKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLm5vZGVMaXN0LmhlYWQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlQWRkZWQuYWRkKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVSZW1vdmVkLmFkZCh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5yZW1vdmVGcm9tRW5naW5lID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgaWYgKHRoaXMubm9kZUFkZGVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZUFkZGVkLnJlbW92ZSh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlUmVtb3ZlZC5yZW1vdmUodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlTGlzdCA9IG51bGw7XG4gIH07XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLm5vZGVMaXN0LmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIHRoaXMubm9kZVVwZGF0ZUZ1bmN0aW9uKG5vZGUsIHRpbWUpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIExpc3RJdGVyYXRpbmdTeXN0ZW07XG5cbn0pKFN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RfaXRlcmF0aW5nX3N5c3RlbS5qcy5tYXBcbiIsIlxuLypcblxuICAgXyAgICAgICBfXG4gIC9fXFwgIF9fX3wgfF9fXG4gLy9fXFxcXC8gX198ICdfIFxcXG4vICBfICBcXF9fIFxcIHwgfCB8XG5cXF8vIFxcXy9fX18vX3wgfF98XG5cbiAgICAgICAgICAgICAgX18gIF9fXG4gICAgX19fIF9fXyAgLyBffC8gX3wgX19fICBfX19cbiAgIC8gX18vIF8gXFx8IHxffCB8XyAvIF8gXFwvIF8gXFxcbiAgfCAoX3wgKF8pIHwgIF98ICBffCAgX18vICBfXy9cbiAoXylfX19cXF9fXy98X3wgfF98ICBcXF9fX3xcXF9fX3xcblxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ1Y2UgRGF2aWRzb24gJmx0O2RhcmtvdmVybG9yZG9mZGF0YUBnbWFpbC5jb20mZ3Q7XG5cbkF1dGhvcjogUmljaGFyZCBMb3JkXG5Db3B5cmlnaHQgKGMpIFJpY2hhcmQgTG9yZCAyMDExLTIwMTJcbmh0dHA6Ly93d3cucmljaGFyZGxvcmQubmV0XG5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbidTb2Z0d2FyZScpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzaCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYXNoKCkge31cblxuICByZXR1cm4gYXNoO1xuXG59KSgpO1xuXG5hc2guc2lnbmFscyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2lnbmFscygpIHt9XG5cbiAgcmV0dXJuIHNpZ25hbHM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvbGlzdGVuZXJfbm9kZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGVfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDEnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMycpO1xuXG5hc2guY29yZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY29yZSgpIHt9XG5cbiAgcmV0dXJuIGNvcmU7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5X2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9saXN0Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9wb29sJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtX2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9mYW1pbHknKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9jb21wb25lbnRfbWF0Y2hpbmdfZmFtaWx5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW5naW5lJyk7XG5cbmFzaC5mc20gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGZzbSgpIHt9XG5cbiAgcmV0dXJuIGZzbTtcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2NvbXBvbmVudF9pbnN0YW5jZV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3R5cGVfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2R5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW5naW5lX3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zdGF0ZV9jb21wb25lbnRfbWFwcGluZycpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2VudGl0eV9zdGF0ZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW50aXR5X3N0YXRlX21hY2hpbmUnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zeXN0ZW1faW5zdGFuY2VfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N5c3RlbV9zaW5nbGV0b25fcHJvdmlkZXInKTtcblxuYXNoLnRpY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRpY2soKSB7fVxuXG4gIHJldHVybiB0aWNrO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90aWNrL2ZyYW1lX3RpY2tfcHJvdmlkZXInKTtcblxuYXNoLnRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB0b29scygpIHt9XG5cbiAgcmV0dXJuIHRvb2xzO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9jb21wb25lbnRfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0nKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXX0=
