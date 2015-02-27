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
   * Create a new state in this state machine.
   *
   * @param name The name of the new state - used to identify it later in the changeState method call.
   * @return The new EntityState object that is the state. This will need to be configured with
   * the appropriate component providers.
   */

  EntityStateMachine.prototype.createState = function(name) {
    var state;
    state = new EntityState();
    this.states.push(state);
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
      this.entity.add(toAdd[type].getComponent(), type);
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
    this.nodeList = engine.getNodeList(this.nodeClass);
    if (this.nodeAddedFunction !== null) {
      for (var node = this.nodeList.head; node; node = node.next){
        this.nodeAddedFunction(node);
        };
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
    for (var node = this.nodeList.head; node; node = node.next){
        this.nodeUpdateFunction(node, time)
      };
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

require('./ash/fsm/engine_state_machine');

require('./ash/fsm/entity_state');

require('./ash/fsm/entity_state_machine');

require('./ash/fsm/state_component_mapping');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2NvbXBvbmVudF9tYXRjaGluZ19mYW1pbHkuanMiLCJ0bXAvbGliL2FzaC9jb3JlL2VuZ2luZS5qcyIsInRtcC9saWIvYXNoL2NvcmUvZW50aXR5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9lbnRpdHlfbGlzdC5qcyIsInRtcC9saWIvYXNoL2NvcmUvZmFtaWx5LmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlLmpzIiwidG1wL2xpYi9hc2gvY29yZS9ub2RlX2xpc3QuanMiLCJ0bXAvbGliL2FzaC9jb3JlL25vZGVfcG9vbC5qcyIsInRtcC9saWIvYXNoL2NvcmUvc3lzdGVtLmpzIiwidG1wL2xpYi9hc2gvY29yZS9zeXN0ZW1fbGlzdC5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfaW5zdGFuY2VfcHJvdmlkZXIuanMiLCJ0bXAvbGliL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX2NvbXBvbmVudF9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9lbmdpbmVfc3RhdGUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW5naW5lX3N0YXRlX21hY2hpbmUuanMiLCJ0bXAvbGliL2FzaC9mc20vZW50aXR5X3N0YXRlLmpzIiwidG1wL2xpYi9hc2gvZnNtL2VudGl0eV9zdGF0ZV9tYWNoaW5lLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nLmpzIiwidG1wL2xpYi9hc2gvZnNtL3N5c3RlbV9pbnN0YW5jZV9wcm92aWRlci5qcyIsInRtcC9saWIvYXNoL2ZzbS9zeXN0ZW1fc2luZ2xldG9uX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlLmpzIiwidG1wL2xpYi9hc2gvc2lnbmFscy9saXN0ZW5lcl9ub2RlX3Bvb2wuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDAuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDEuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDIuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbDMuanMiLCJ0bXAvbGliL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlLmpzIiwidG1wL2xpYi9hc2gvdGljay9mcmFtZV90aWNrX3Byb3ZpZGVyLmpzIiwidG1wL2xpYi9hc2gvdG9vbHMvY29tcG9uZW50X3Bvb2wuanMiLCJ0bXAvbGliL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0uanMiLCJ0bXAvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBOb2RlTGlzdCwgTm9kZVBvb2wsIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbk5vZGVMaXN0ID0gYXNoLmNvcmUuTm9kZUxpc3Q7XG5cbk5vZGVQb29sID0gYXNoLmNvcmUuTm9kZVBvb2w7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGUgZGVmYXVsdCBjbGFzcyBmb3IgbWFuYWdpbmcgYSBOb2RlTGlzdC4gVGhpcyBjbGFzcyBjcmVhdGVzIHRoZSBOb2RlTGlzdCBhbmQgYWRkcyBhbmQgcmVtb3Zlc1xuICogbm9kZXMgdG8vZnJvbSB0aGUgbGlzdCBhcyB0aGUgZW50aXRpZXMgYW5kIHRoZSBjb21wb25lbnRzIGluIHRoZSBlbmdpbmUgY2hhbmdlLlxuICpcbiAqIEl0IHVzZXMgdGhlIGJhc2ljIGVudGl0eSBtYXRjaGluZyBwYXR0ZXJuIG9mIGFuIGVudGl0eSBzeXN0ZW0gLSBlbnRpdGllcyBhcmUgYWRkZWQgdG8gdGhlIGxpc3QgaWZcbiAqIHRoZXkgY29udGFpbiBjb21wb25lbnRzIG1hdGNoaW5nIGFsbCB0aGUgcHVibGljIHByb3BlcnRpZXMgb2YgdGhlIG5vZGUgY2xhc3MuXG4gKi9cblxuYXNoLmNvcmUuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5ub2RlcyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmVudGl0aWVzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubm9kZUNsYXNzID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50cyA9IG51bGw7XG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLm5vZGVQb29sID0gbnVsbDtcblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuZW5naW5lID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBjb25zdHJ1Y3Rvci4gQ3JlYXRlcyBhIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5IHRvIHByb3ZpZGUgYSBOb2RlTGlzdCBmb3IgdGhlXG4gICAqIGdpdmVuIG5vZGUgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlQ2xhc3MgVGhlIHR5cGUgb2Ygbm9kZSB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIE5vZGVMaXN0IGZvci5cbiAgICogQHBhcmFtIGVuZ2luZSBUaGUgZW5naW5lIHRoYXQgdGhpcyBmYW1pbHkgaXMgbWFuYWdpbmcgdGVoIE5vZGVMaXN0IGZvci5cbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkobm9kZUNsYXNzLCBlbmdpbmUpIHtcbiAgICB0aGlzLm5vZGVDbGFzcyA9IG5vZGVDbGFzcztcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLnJlbGVhc2VOb2RlUG9vbENhY2hlID0gX19iaW5kKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUsIHRoaXMpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cblxuICAvKlxuICAgKiBJbml0aWFsaXNlcyB0aGUgY2xhc3MuIENyZWF0ZXMgdGhlIG5vZGVsaXN0IGFuZCBvdGhlciB0b29scy4gQW5hbHlzZXMgdGhlIG5vZGUgdG8gZGV0ZXJtaW5lXG4gICAqIHdoYXQgY29tcG9uZW50IHR5cGVzIHRoZSBub2RlIHJlcXVpcmVzLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuYW1lLCB0eXBlLCBfcmVmO1xuICAgIHRoaXMubm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICB0aGlzLmVudGl0aWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIHRoaXMubm9kZVBvb2wgPSBuZXcgTm9kZVBvb2wodGhpcy5ub2RlQ2xhc3MsIHRoaXMubm9kZUNsYXNzLmNvbXBvbmVudHMpO1xuICAgIF9yZWYgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICB0eXBlID0gX3JlZltuYW1lXTtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBUaGUgbm9kZWxpc3QgbWFuYWdlZCBieSB0aGlzIGZhbWlseS4gVGhpcyBpcyBhIHJlZmVyZW5jZSB0aGF0IHJlbWFpbnMgdmFsaWQgYWx3YXlzXG4gICAqIHNpbmNlIGl0IGlzIHJldGFpbmVkIGFuZCByZXVzZWQgYnkgU3lzdGVtcyB0aGF0IHVzZSB0aGUgbGlzdC4gaS5lLiB3ZSBuZXZlciByZWNyZWF0ZSB0aGUgbGlzdCxcbiAgICogd2UgYWx3YXlzIG1vZGlmeSBpdCBpbiBwbGFjZS5cbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLCB7XG4gICAgbm9kZUxpc3Q6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGFuIGVudGl0eSBoYXMgYmVlbiBhZGRlZCB0byBpdC4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBzaG91bGQgYmUgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgYWRkIGl0IGlmIGFwcHJvcHJpYXRlLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUubmV3RW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhpcy5hZGRJZk1hdGNoKGVudGl0eSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGEgY29tcG9uZW50IGhhcyBiZWVuIGFkZGVkIHRvIGFuIGVudGl0eS4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBpcyBub3QgaW5cbiAgICogdGhpcyBmYW1pbHkncyBOb2RlTGlzdCBhbmQgc2hvdWxkIGJlLCBhbmQgYWRkIGl0IGlmIGFwcHJvcHJpYXRlLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWRUb0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aGlzLmFkZElmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gYSBjb21wb25lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFuIGVudGl0eS4gV2UgY2hlY2sgaWYgdGhlIHJlbW92ZWQgY29tcG9uZW50XG4gICAqIGlzIHJlcXVpcmVkIGJ5IHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgYW5kIGlmIHNvLCB3ZSBjaGVjayBpZiB0aGUgZW50aXR5IGlzIGluIHRoaXMgdGhpcyBOb2RlTGlzdCBhbmRcbiAgICogcmVtb3ZlIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgaWYgKGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUlmTWF0Y2goZW50aXR5KTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGFuIGVudGl0eSBoYXMgYmVlbiBybW92ZWQgZnJvbSBpdC4gV2UgY2hlY2sgaWYgdGhlIGVudGl0eSBpcyBpblxuICAgKiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0IGFuZCByZW1vdmUgaXQgaWYgc28uXG4gICAqL1xuXG4gIENvbXBvbmVudE1hdGNoaW5nRmFtaWx5LnByb3RvdHlwZS5yZW1vdmVFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aGlzLnJlbW92ZUlmTWF0Y2goZW50aXR5KTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIElmIHRoZSBlbnRpdHkgaXMgbm90IGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QsIHRlc3RzIHRoZSBjb21wb25lbnRzIG9mIHRoZSBlbnRpdHkgdG8gc2VlXG4gICAqIGlmIGl0IHNob3VsZCBiZSBpbiB0aGlzIE5vZGVMaXN0IGFuZCBhZGRzIGl0IGlmIHNvLlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUuYWRkSWZNYXRjaCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBjb21wb25lbnRDbGFzcywgbmFtZSwgbm9kZSwgX3JlZiwgX3JlZjE7XG4gICAgaWYgKHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdID09IG51bGwpIHtcbiAgICAgIF9yZWYgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3MgPSBfcmVmW25hbWVdO1xuICAgICAgICBpZiAoIWVudGl0eS5oYXMoY29tcG9uZW50Q2xhc3MpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlID0gdGhpcy5ub2RlUG9vbC5nZXQoKTtcbiAgICAgIG5vZGUuZW50aXR5ID0gZW50aXR5O1xuICAgICAgX3JlZjEgPSB0aGlzLm5vZGVDbGFzcy5jb21wb25lbnRzO1xuICAgICAgZm9yIChuYW1lIGluIF9yZWYxKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzID0gX3JlZjFbbmFtZV07XG4gICAgICAgIG5vZGVbbmFtZV0gPSBlbnRpdHkuZ2V0KGNvbXBvbmVudENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW50aXRpZXNbZW50aXR5Lm5hbWVdID0gbm9kZTtcbiAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZXMgdGhlIGVudGl0eSBpZiBpdCBpcyBpbiB0aGlzIGZhbWlseSdzIE5vZGVMaXN0LlxuICAgKi9cblxuICBDb21wb25lbnRNYXRjaGluZ0ZhbWlseS5wcm90b3R5cGUucmVtb3ZlSWZNYXRjaCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChlbnRpdHkubmFtZSBpbiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICBub2RlID0gdGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5lbnRpdGllc1tlbnRpdHkubmFtZV07XG4gICAgICB0aGlzLm5vZGVzLnJlbW92ZShub2RlKTtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS51cGRhdGluZykge1xuICAgICAgICB0aGlzLm5vZGVQb29sLmNhY2hlKG5vZGUpO1xuICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVDb21wbGV0ZS5hZGQodGhpcy5yZWxlYXNlTm9kZVBvb2xDYWNoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vZGVQb29sLmRpc3Bvc2Uobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogUmVsZWFzZXMgdGhlIG5vZGVzIHRoYXQgd2VyZSBhZGRlZCB0byB0aGUgbm9kZSBwb29sIGR1cmluZyB0aGlzIGVuZ2luZSB1cGRhdGUsIHNvIHRoZXkgY2FuXG4gICAqIGJlIHJldXNlZC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLnJlbGVhc2VOb2RlUG9vbENhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbmdpbmUudXBkYXRlQ29tcGxldGUucmVtb3ZlKHRoaXMucmVsZWFzZU5vZGVQb29sQ2FjaGUpO1xuICAgIHRoaXMubm9kZVBvb2wucmVsZWFzZUNhY2hlKCk7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZW1vdmVzIGFsbCBub2RlcyBmcm9tIHRoZSBOb2RlTGlzdC5cbiAgICovXG5cbiAgQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkucHJvdG90eXBlLmNsZWFuVXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBub2RlID0gdGhpcy5ub2Rlcy5oZWFkO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB0aGlzLmVudGl0aWVzLnJlbW92ZShub2RlLmVudGl0eSk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLm5vZGVzLnJlbW92ZUFsbCgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X21hdGNoaW5nX2ZhbWlseS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBDb21wb25lbnRNYXRjaGluZ0ZhbWlseSwgRGljdGlvbmFyeSwgRW50aXR5TGlzdCwgU2lnbmFsMCwgU3lzdGVtTGlzdCwgYXNoLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuQ29tcG9uZW50TWF0Y2hpbmdGYW1pbHkgPSBhc2guY29yZS5Db21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxuRW50aXR5TGlzdCA9IGFzaC5jb3JlLkVudGl0eUxpc3Q7XG5cblNpZ25hbDAgPSBhc2guc2lnbmFscy5TaWduYWwwO1xuXG5TeXN0ZW1MaXN0ID0gYXNoLmNvcmUuU3lzdGVtTGlzdDtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIFRoZSBFbmdpbmUgY2xhc3MgaXMgdGhlIGNlbnRyYWwgcG9pbnQgZm9yIGNyZWF0aW5nIGFuZCBtYW5hZ2luZyB5b3VyIGdhbWUgc3RhdGUuIEFkZFxuICogZW50aXRpZXMgYW5kIHN5c3RlbXMgdG8gdGhlIGVuZ2luZSwgYW5kIGZldGNoIGZhbWlsaWVzIG9mIG5vZGVzIGZyb20gdGhlIGVuZ2luZS5cbiAqL1xuXG5hc2guY29yZS5FbmdpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TmFtZXMgPSBudWxsO1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TGlzdCA9IG51bGw7XG5cbiAgRW5naW5lLnByb3RvdHlwZS5zeXN0ZW1MaXN0ID0gbnVsbDtcblxuICBFbmdpbmUucHJvdG90eXBlLmZhbWlsaWVzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZW5naW5lIGlzIGN1cnJlbnRseSBpbiBpdHMgdXBkYXRlIGxvb3AuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUudXBkYXRpbmcgPSBmYWxzZTtcblxuXG4gIC8qXG4gICAqIERpc3BhdGNoZWQgd2hlbiB0aGUgdXBkYXRlIGxvb3AgZW5kcy4gSWYgeW91IHdhbnQgdG8gYWRkIGFuZCByZW1vdmUgc3lzdGVtcyBmcm9tIHRoZVxuICAgKiBlbmdpbmUgaXQgaXMgdXN1YWxseSBiZXN0IG5vdCB0byBkbyBzbyBkdXJpbmcgdGhlIHVwZGF0ZSBsb29wLiBUbyBhdm9pZCB0aGlzIHlvdSBjYW5cbiAgICogbGlzdGVuIGZvciB0aGlzIHNpZ25hbCBhbmQgbWFrZSB0aGUgY2hhbmdlIHdoZW4gdGhlIHNpZ25hbCBpcyBkaXNwYXRjaGVkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnVwZGF0ZUNvbXBsZXRlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoZSBjbGFzcyB1c2VkIHRvIG1hbmFnZSBub2RlIGxpc3RzLiBJbiBtb3N0IGNhc2VzIHRoZSBkZWZhdWx0IGNsYXNzIGlzIHN1ZmZpY2llbnRcbiAgICogYnV0IGl0IGlzIGV4cG9zZWQgaGVyZSBzbyBhZHZhbmNlZCBkZXZlbG9wZXJzIGNhbiBjaG9vc2UgdG8gY3JlYXRlIGFuZCB1c2UgYVxuICAgKiBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoZSBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgSUZhbWlseSBpbnRlcmZhY2UuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZmFtaWx5Q2xhc3MgPSBDb21wb25lbnRNYXRjaGluZ0ZhbWlseTtcblxuICBmdW5jdGlvbiBFbmdpbmUoKSB7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuZW50aXR5TGlzdCA9IG5ldyBFbnRpdHlMaXN0KCk7XG4gICAgdGhpcy5lbnRpdHlOYW1lcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgdGhpcy5zeXN0ZW1MaXN0ID0gbmV3IFN5c3RlbUxpc3QoKTtcbiAgICB0aGlzLmZhbWlsaWVzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlID0gbmV3IFNpZ25hbDAoKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEVuZ2luZS5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgICogUmV0dXJucyBhIHZlY3RvciBjb250YWluaW5nIGFsbCB0aGUgZW50aXRpZXMgaW4gdGhlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBlbnRpdGllczoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudGl0aWVzLCBlbnRpdHk7XG4gICAgICAgIGVudGl0aWVzID0gW107XG4gICAgICAgIGVudGl0eSA9IHRoaXMuZW50aXR5TGlzdC5oZWFkO1xuICAgICAgICB3aGlsZSAoZW50aXR5KSB7XG4gICAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgZW50aXR5ID0gZW50aXR5Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFJldHVybnMgYSB2ZWN0b3IgY29udGFpbmluZyBhbGwgdGhlIHN5c3RlbXMgaW4gdGhlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBzeXN0ZW1zOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3lzdGVtLCBzeXN0ZW1zO1xuICAgICAgICBzeXN0ZW1zID0gW107XG4gICAgICAgIHN5c3RlbSA9IHRoaXMuc3lzdGVtTGlzdC5oZWFkO1xuICAgICAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICAgICAgc3lzdGVtcy5wdXNoKHN5c3RlbSk7XG4gICAgICAgICAgc3lzdGVtID0gc3lzdGVtLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5c3RlbXM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8qXG4gICAqIEFkZCBhbiBlbnRpdHkgdG8gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IHRvIGFkZC5cbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5hZGRFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIGlmICh0aGlzLmVudGl0eU5hbWVzW2VudGl0eS5uYW1lXSkge1xuICAgICAgdGhyb3cgXCJUaGUgZW50aXR5IG5hbWUgXCIgKyBlbnRpdHkubmFtZSArIFwiIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgZW50aXR5LlwiO1xuICAgIH1cbiAgICB0aGlzLmVudGl0eUxpc3QuYWRkKGVudGl0eSk7XG4gICAgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV0gPSBlbnRpdHk7XG4gICAgZW50aXR5LmNvbXBvbmVudEFkZGVkLmFkZCh0aGlzLmNvbXBvbmVudEFkZGVkKTtcbiAgICBlbnRpdHkuY29tcG9uZW50UmVtb3ZlZC5hZGQodGhpcy5jb21wb25lbnRSZW1vdmVkKTtcbiAgICBlbnRpdHkubmFtZUNoYW5nZWQuYWRkKHRoaXMuZW50aXR5TmFtZUNoYW5nZWQpO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5Lm5ld0VudGl0eShlbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhbiBlbnRpdHkgZnJvbSB0aGUgZW5naW5lLlxuICAgKlxuICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gcmVtb3ZlLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHZhciBlYWNoLCBmYW1pbHksIF9yZWY7XG4gICAgZW50aXR5LmNvbXBvbmVudEFkZGVkLnJlbW92ZSh0aGlzLmNvbXBvbmVudEFkZGVkKTtcbiAgICBlbnRpdHkuY29tcG9uZW50UmVtb3ZlZC5yZW1vdmUodGhpcy5jb21wb25lbnRSZW1vdmVkKTtcbiAgICBlbnRpdHkubmFtZUNoYW5nZWQucmVtb3ZlKHRoaXMuZW50aXR5TmFtZUNoYW5nZWQpO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LnJlbW92ZUVudGl0eShlbnRpdHkpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5lbnRpdHlOYW1lc1tlbnRpdHkubmFtZV07XG4gICAgdGhpcy5lbnRpdHlMaXN0LnJlbW92ZShlbnRpdHkpO1xuICB9O1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZW50aXR5TmFtZUNoYW5nZWQgPSBmdW5jdGlvbihlbnRpdHksIG9sZE5hbWUpIHtcbiAgICBpZiAodGhpcy5lbnRpdHlOYW1lc1tvbGROYW1lXSA9PT0gZW50aXR5KSB7XG4gICAgICBkZWxldGUgdGhpcy5lbnRpdHlOYW1lc1tvbGROYW1lXTtcbiAgICAgIHRoaXMuZW50aXR5TmFtZXNbZW50aXR5Lm5hbWVdID0gZW50aXR5O1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhbiBlbnRpdHkgYmFzZWQgbiBpdHMgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGVudGl0eVxuICAgKiBAcmV0dXJuIFRoZSBlbnRpdHksIG9yIG51bGwgaWYgbm8gZW50aXR5IHdpdGggdGhhdCBuYW1lIGV4aXN0cyBvbiB0aGUgZW5naW5lXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0RW50aXR5QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eU5hbWVzW25hbWVdO1xuICB9O1xuXG5cbiAgLypcbiAgICogUmVtb3ZlIGFsbCBlbnRpdGllcyBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlQWxsRW50aXRpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB3aGlsZSAodGhpcy5lbnRpdHlMaXN0LmhlYWQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlRW50aXR5KHRoaXMuZW50aXR5TGlzdC5oZWFkKTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgQHByaXZhdGVcbiAgICovXG5cbiAgRW5naW5lLnByb3RvdHlwZS5jb21wb25lbnRBZGRlZCA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LmNvbXBvbmVudEFkZGVkVG9FbnRpdHkoZW50aXR5LCBjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgIEBwcml2YXRlXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZCA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgZWFjaCwgZmFtaWx5LCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmZhbWlsaWVzO1xuICAgIGZvciAoZWFjaCBpbiBfcmVmKSB7XG4gICAgICBmYW1pbHkgPSBfcmVmW2VhY2hdO1xuICAgICAgZmFtaWx5LmNvbXBvbmVudFJlbW92ZWRGcm9tRW50aXR5KGVudGl0eSwgY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhIGNvbGxlY3Rpb24gb2Ygbm9kZXMgZnJvbSB0aGUgZW5naW5lLCBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUgbm9kZSByZXF1aXJlZC5cbiAgICpcbiAgICogPHA+VGhlIGVuZ2luZSB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgTm9kZUxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0IGFuZFxuICAgKiB3aWxsIGtlZXAgaXRzIGNvbnRlbnRzIHVwIHRvIGRhdGUgYXMgZW50aXRpZXMgYXJlIGFkZGVkIHRvIGFuZCByZW1vdmVkIGZyb20gdGhlXG4gICAqIGVuZ2luZS48L3A+XG4gICAqXG4gICAqIDxwPklmIGEgTm9kZUxpc3QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkLCByZWxlYXNlIGl0IHdpdGggdGhlIHJlbGVhc2VOb2RlTGlzdCBtZXRob2QuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUNsYXNzIFRoZSB0eXBlIG9mIG5vZGUgcmVxdWlyZWQuXG4gICAqIEByZXR1cm4gQSBsaW5rZWQgbGlzdCBvZiBhbGwgbm9kZXMgb2YgdGhpcyB0eXBlIGZyb20gYWxsIGVudGl0aWVzIGluIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0Tm9kZUxpc3QgPSBmdW5jdGlvbihub2RlQ2xhc3MpIHtcbiAgICB2YXIgZW50aXR5LCBmYW1pbHk7XG4gICAgaWYgKG5vZGVDbGFzcy5uYW1lIGluIHRoaXMuZmFtaWxpZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXS5ub2RlTGlzdDtcbiAgICB9XG4gICAgZmFtaWx5ID0gbmV3IHRoaXMuZmFtaWx5Q2xhc3Mobm9kZUNsYXNzLCB0aGlzKTtcbiAgICB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXSA9IGZhbWlseTtcbiAgICBlbnRpdHkgPSB0aGlzLmVudGl0eUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoZW50aXR5KSB7XG4gICAgICBmYW1pbHkubmV3RW50aXR5KGVudGl0eSk7XG4gICAgICBlbnRpdHkgPSBlbnRpdHkubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbWlseS5ub2RlTGlzdDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIElmIGEgTm9kZUxpc3QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkLCB0aGlzIG1ldGhvZCB3aWxsIHN0b3AgdGhlIGVuZ2luZSB1cGRhdGluZ1xuICAgKiB0aGUgbGlzdCBhbmQgd2lsbCByZWxlYXNlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBsaXN0IHdpdGhpbiB0aGUgZnJhbWV3b3JrXG4gICAqIGNsYXNzZXMsIGVuYWJsaW5nIGl0IHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKlxuICAgKiA8cD5JdCBpcyBub3QgZXNzZW50aWFsIHRvIHJlbGVhc2UgYSBsaXN0LCBidXQgcmVsZWFzaW5nIGl0IHdpbGwgZnJlZVxuICAgKiB1cCBtZW1vcnkgYW5kIHByb2Nlc3NvciByZXNvdXJjZXMuPC9wPlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUNsYXNzIFRoZSB0eXBlIG9mIHRoZSBub2RlIGNsYXNzIGlmIHRoZSBsaXN0IHRvIGJlIHJlbGVhc2VkLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbGVhc2VOb2RlTGlzdCA9IGZ1bmN0aW9uKG5vZGVDbGFzcykge1xuICAgIGlmIChub2RlQ2xhc3MubmFtZSBpbiB0aGlzLmZhbWlsaWVzKSB7XG4gICAgICB0aGlzLmZhbWlsaWVzW25vZGVDbGFzcy5uYW1lXS5jbGVhblVwKCk7XG4gICAgICBkZWxldGUgdGhpcy5mYW1pbGllc1tub2RlQ2xhc3MubmFtZV07XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQWRkIGEgc3lzdGVtIHRvIHRoZSBlbmdpbmUsIGFuZCBzZXQgaXRzIHByaW9yaXR5IGZvciB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlXG4gICAqIHN5c3RlbXMgYXJlIHVwZGF0ZWQgYnkgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcC5cbiAgICpcbiAgICogPHA+VGhlIHByaW9yaXR5IGRpY3RhdGVzIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3lzdGVtcyBhcmUgdXBkYXRlZCBieSB0aGUgZW5naW5lIHVwZGF0ZVxuICAgKiBsb29wLiBMb3dlciBudW1iZXJzIGZvciBwcmlvcml0eSBhcmUgdXBkYXRlZCBmaXJzdC4gaS5lLiBhIHByaW9yaXR5IG9mIDEgaXNcbiAgICogdXBkYXRlZCBiZWZvcmUgYSBwcmlvcml0eSBvZiAyLjwvcD5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgc3lzdGVtIHRvIGFkZCB0byB0aGUgZW5naW5lLlxuICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIHByaW9yaXR5IGZvciB1cGRhdGluZyB0aGUgc3lzdGVtcyBkdXJpbmcgdGhlIGVuZ2luZSBsb29wLiBBXG4gICAqIGxvd2VyIG51bWJlciBtZWFucyB0aGUgc3lzdGVtIGlzIHVwZGF0ZWQgc29vbmVyLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLmFkZFN5c3RlbSA9IGZ1bmN0aW9uKHN5c3RlbSwgcHJpb3JpdHkpIHtcbiAgICBzeXN0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzeXN0ZW0uYWRkVG9FbmdpbmUodGhpcyk7XG4gICAgdGhpcy5zeXN0ZW1MaXN0LmFkZChzeXN0ZW0pO1xuICB9O1xuXG5cbiAgLypcbiAgICogR2V0IHRoZSBzeXN0ZW0gaW5zdGFuY2Ugb2YgYSBwYXJ0aWN1bGFyIHR5cGUgZnJvbSB3aXRoaW4gdGhlIGVuZ2luZS5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2Ygc3lzdGVtXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlIG9mIHRoZSBzeXN0ZW0gdHlwZSB0aGF0IGlzIGluIHRoZSBlbmdpbmUsIG9yXG4gICAqIG51bGwgaWYgbm8gc3lzdGVtcyBvZiB0aGlzIHR5cGUgYXJlIGluIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBzeXN0ZW1MaXN0LmdldCh0eXBlKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhIHN5c3RlbSBmcm9tIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBzeXN0ZW0gVGhlIHN5c3RlbSB0byByZW1vdmUgZnJvbSB0aGUgZW5naW5lLlxuICAgKi9cblxuICBFbmdpbmUucHJvdG90eXBlLnJlbW92ZVN5c3RlbSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHRoaXMuc3lzdGVtTGlzdC5yZW1vdmUoc3lzdGVtKTtcbiAgICBzeXN0ZW0ucmVtb3ZlRnJvbUVuZ2luZSh0aGlzKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhbGwgc3lzdGVtcyBmcm9tIHRoZSBlbmdpbmUuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUucmVtb3ZlQWxsU3lzdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlICh0aGlzLnN5c3RlbUxpc3QuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVTeXN0ZW0odGhpcy5zeXN0ZW1MaXN0LmhlYWQpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFVwZGF0ZSB0aGUgZW5naW5lLiBUaGlzIGNhdXNlcyB0aGUgZW5naW5lIHVwZGF0ZSBsb29wIHRvIHJ1biwgY2FsbGluZyB1cGRhdGUgb24gYWxsIHRoZVxuICAgKiBzeXN0ZW1zIGluIHRoZSBlbmdpbmUuXG4gICAqXG4gICAqIDxwPlRoZSBwYWNrYWdlIGFzaC50aWNrIGNvbnRhaW5zIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBwcm92aWRlXG4gICAqIGEgc3RlYWR5IG9yIHZhcmlhYmxlIHRpY2sgdGhhdCBjYWxscyB0aGlzIHVwZGF0ZSBtZXRob2QuPC9wPlxuICAgKlxuICAgKiBAdGltZSBUaGUgZHVyYXRpb24sIGluIHNlY29uZHMsIG9mIHRoaXMgdXBkYXRlIHN0ZXAuXG4gICAqL1xuXG4gIEVuZ2luZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odGltZSkge1xuICAgIHZhciBzeXN0ZW07XG4gICAgdGhpcy51cGRhdGluZyA9IHRydWU7XG4gICAgc3lzdGVtID0gdGhpcy5zeXN0ZW1MaXN0LmhlYWQ7XG4gICAgd2hpbGUgKHN5c3RlbSkge1xuICAgICAgc3lzdGVtLnVwZGF0ZSh0aW1lKTtcbiAgICAgIHN5c3RlbSA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLnVwZGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBTaWduYWwyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TaWduYWwyID0gYXNoLnNpZ25hbHMuU2lnbmFsMjtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIEFuIGVudGl0eSBpcyBjb21wb3NlZCBmcm9tIGNvbXBvbmVudHMuIEFzIHN1Y2gsIGl0IGlzIGVzc2VudGlhbGx5IGEgY29sbGVjdGlvbiBvYmplY3QgZm9yIGNvbXBvbmVudHMuXG4gKiBTb21ldGltZXMsIHRoZSBlbnRpdGllcyBpbiBhIGdhbWUgd2lsbCBtaXJyb3IgdGhlIGFjdHVhbCBjaGFyYWN0ZXJzIGFuZCBvYmplY3RzIGluIHRoZSBnYW1lLCBidXQgdGhpc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiA8cD5Db21wb25lbnRzIGFyZSBzaW1wbGUgdmFsdWUgb2JqZWN0cyB0aGF0IGNvbnRhaW4gZGF0YSByZWxldmFudCB0byB0aGUgZW50aXR5LiBFbnRpdGllc1xuICogd2l0aCBzaW1pbGFyIGZ1bmN0aW9uYWxpdHkgd2lsbCBoYXZlIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBjb21wb25lbnRzLiBTbyB3ZSBtaWdodCBoYXZlXG4gKiBhIHBvc2l0aW9uIGNvbXBvbmVudDwvcD5cbiAqXG4gKiA8cD48Y29kZT5jbGFzcyBQb3NpdGlvbkNvbXBvbmVudFxuICoge1xuICogICBwdWJsaWMgdmFyIHg6RmxvYXQ7XG4gKiAgIHB1YmxpYyB2YXIgeTpGbG9hdDtcbiAqIH08L2NvZGU+PC9wPlxuICpcbiAqIDxwPkFsbCBlbnRpdGllcyB0aGF0IGhhdmUgYSBwb3NpdGlvbiBpbiB0aGUgZ2FtZSB3b3JsZCwgd2lsbCBoYXZlIGFuIGluc3RhbmNlIG9mIHRoZVxuICogcG9zaXRpb24gY29tcG9uZW50LiBTeXN0ZW1zIG9wZXJhdGUgb24gZW50aXRpZXMgYmFzZWQgb24gdGhlIGNvbXBvbmVudHMgdGhleSBoYXZlLjwvcD5cbiAqL1xuXG5hc2guY29yZS5FbnRpdHkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lQ291bnQ7XG5cbiAgbmFtZUNvdW50ID0gMDtcblxuXG4gIC8qXG4gICAqIE9wdGlvbmFsLCBnaXZlIHRoZSBlbnRpdHkgYSBuYW1lLiBUaGlzIGNhbiBoZWxwIHdpdGggZGVidWdnaW5nIGFuZCB3aXRoIHNlcmlhbGlzaW5nIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuX25hbWUgPSAnJztcblxuXG4gIC8qXG4gICAqIFRoaXMgc2lnbmFsIGlzIGRpc3BhdGNoZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgZW50aXR5LlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLmNvbXBvbmVudEFkZGVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFRoaXMgc2lnbmFsIGlzIGRpc3BhdGNoZWQgd2hlbiBhIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGVudGl0eS5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5jb21wb25lbnRSZW1vdmVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIERpc3BhdGNoZWQgd2hlbiB0aGUgbmFtZSBvZiB0aGUgZW50aXR5IGNoYW5nZXMuIFVzZWQgaW50ZXJuYWxseSBieSB0aGUgZW5naW5lIHRvIHRyYWNrIGVudGl0aWVzIGJhc2VkIG9uIHRoZWlyIG5hbWVzLlxuICAgKi9cblxuICBFbnRpdHkucHJvdG90eXBlLm5hbWVDaGFuZ2VkID0gbnVsbDtcblxuICBFbnRpdHkucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuICBFbnRpdHkucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIEVudGl0eS5wcm90b3R5cGUuY29tcG9uZW50cyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRW50aXR5KG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICBuYW1lID0gJyc7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgLypcbiAgICAgICAqIEFsbCBlbnRpdGllcyBoYXZlIGEgbmFtZS4gSWYgbm8gbmFtZSBpcyBzZXQsIGEgZGVmYXVsdCBuYW1lIGlzIHVzZWQuIE5hbWVzIGFyZSB1c2VkIHRvXG4gICAgICAgKiBmZXRjaCBzcGVjaWZpYyBlbnRpdGllcyBmcm9tIHRoZSBlbmdpbmUsIGFuZCBjYW4gYWxzbyBoZWxwIHRvIGlkZW50aWZ5IGFuIGVudGl0eSB3aGVuIGRlYnVnZ2luZy5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzO1xuICAgICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcHJldmlvdXMgPSB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZUNoYW5nZWQuZGlzcGF0Y2godGhpcywgcHJldmlvdXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50QWRkZWQgPSBuZXcgU2lnbmFsMigpO1xuICAgIHRoaXMuY29tcG9uZW50UmVtb3ZlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5uYW1lQ2hhbmdlZCA9IG5ldyBTaWduYWwyKCk7XG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uYW1lID0gXCJfZW50aXR5XCIgKyAoKytuYW1lQ291bnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgY29tcG9uZW50IHRvIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCBvYmplY3QgdG8gYWRkLlxuICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3MgVGhlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuIFRoaXMgaXMgb25seSBuZWNlc3NhcnkgaWYgdGhlIGNvbXBvbmVudFxuICAgKiBleHRlbmRzIGFub3RoZXIgY29tcG9uZW50IGNsYXNzIGFuZCB5b3Ugd2FudCB0aGUgZnJhbWV3b3JrIHRvIHRyZWF0IHRoZSBjb21wb25lbnQgYXMgb2ZcbiAgICogdGhlIGJhc2UgY2xhc3MgdHlwZS4gSWYgbm90IHNldCwgdGhlIGNsYXNzIHR5cGUgaXMgZGV0ZXJtaW5lZCBkaXJlY3RseSBmcm9tIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4gQSByZWZlcmVuY2UgdG8gdGhlIGVudGl0eS4gVGhpcyBlbmFibGVzIHRoZSBjaGFpbmluZyBvZiBjYWxscyB0byBhZGQsIHRvIG1ha2VcbiAgICogY3JlYXRpbmcgYW5kIGNvbmZpZ3VyaW5nIGVudGl0aWVzIGNsZWFuZXIuIGUuZy5cbiAgICpcbiAgICogPGNvZGU+dmFyIGVudGl0eTpFbnRpdHkgPSBuZXcgRW50aXR5KClcbiAgICogICAgIC5hZGQobmV3IFBvc2l0aW9uKDEwMCwgMjAwKVxuICAgKiAgICAgLmFkZChuZXcgRGlzcGxheShuZXcgUGxheWVyQ2xpcCgpKTs8L2NvZGU+XG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY29tcG9uZW50LCBjb21wb25lbnRDbGFzcykge1xuICAgIGlmIChjb21wb25lbnRDbGFzcyA9PSBudWxsKSB7XG4gICAgICBjb21wb25lbnRDbGFzcyA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudENsYXNzLm5hbWUgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLnJlbW92ZShjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRDbGFzcy5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmNvbXBvbmVudEFkZGVkLmRpc3BhdGNoKHRoaXMsIGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIFJlbW92ZSBhIGNvbXBvbmVudCBmcm9tIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCB0byBiZSByZW1vdmVkLlxuICAgKiBAcmV0dXJuIHRoZSBjb21wb25lbnQsIG9yIG51bGwgaWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGV4aXN0IGluIHRoZSBlbnRpdHlcbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBjb21wb25lbnQsIG5hbWU7XG4gICAgbmFtZSA9ICdzdHJpbmcnID09PSB0eXBlb2YgY29tcG9uZW50Q2xhc3MgPyBjb21wb25lbnRDbGFzcyA6IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gICAgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW25hbWVdO1xuICAgIGlmIChjb21wb25lbnQgIT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudHNbbmFtZV07XG4gICAgICB0aGlzLmNvbXBvbmVudFJlbW92ZWQuZGlzcGF0Y2godGhpcywgbmFtZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhIGNvbXBvbmVudCBmcm9tIHRoZSBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzcyBUaGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudCByZXF1ZXN0ZWQuXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudCwgb3IgbnVsbCBpZiBub25lIHdhcyBmb3VuZC5cbiAgICovXG5cbiAgRW50aXR5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Q2xhc3MubmFtZV07XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgYWxsIGNvbXBvbmVudHMgZnJvbSB0aGUgZW50aXR5LlxuICAgKlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIG9uIHRoZSBlbnRpdHkuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgY29tcG9uZW50QXJyYXksIF9pLCBfbGVuLCBfcmVmO1xuICAgIGNvbXBvbmVudEFycmF5ID0gW107XG4gICAgX3JlZiA9IHRoaXMuY29tcG9uZW50cztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGNvbXBvbmVudCA9IF9yZWZbX2ldO1xuICAgICAgY29tcG9uZW50QXJyYXkucHVzaChjb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50QXJyYXk7XG4gIH07XG5cblxuICAvKlxuICAgKiBEb2VzIHRoZSBlbnRpdHkgaGF2ZSBhIGNvbXBvbmVudCBvZiBhIHBhcnRpY3VsYXIgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50IHNvdWdodC5cbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBlbnRpdHkgaGFzIGEgY29tcG9uZW50IG9mIHRoZSB0eXBlLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuXG4gIEVudGl0eS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY29tcG9uZW50Q2xhc3MpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3MubmFtZSBpbiB0aGlzLmNvbXBvbmVudHM7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW50aXR5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIEFuIGludGVybmFsIGNsYXNzIGZvciBhIGxpbmtlZCBsaXN0IG9mIGVudGl0aWVzLiBVc2VkIGluc2lkZSB0aGUgZnJhbWV3b3JrIGZvclxuICogbWFuYWdpbmcgdGhlIGVudGl0aWVzLlxuICovXG5cbmFzaC5jb3JlLkVudGl0eUxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVudGl0eUxpc3QoKSB7fVxuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IGVudGl0eTtcbiAgICAgIGVudGl0eS5uZXh0ID0gZW50aXR5LnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWlsLm5leHQgPSBlbnRpdHk7XG4gICAgICBlbnRpdHkucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICBlbnRpdHkubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLnRhaWwgPSBlbnRpdHk7XG4gICAgfVxuICB9O1xuXG4gIEVudGl0eUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5oZWFkID09PSBlbnRpdHkpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBlbnRpdHkpIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICB9XG4gICAgaWYgKGVudGl0eS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5LnByZXZpb3VzLm5leHQgPSBlbnRpdHkubmV4dDtcbiAgICB9XG4gICAgaWYgKGVudGl0eS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHkubmV4dC5wcmV2aW91cyA9IGVudGl0eS5wcmV2aW91cztcbiAgICB9XG4gIH07XG5cbiAgRW50aXR5TGlzdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVudGl0eTtcbiAgICB3aGlsZSAodGhpcy5oZWFkICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHkgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIGVudGl0eS5wcmV2aW91cyA9IG51bGw7XG4gICAgICBlbnRpdHkubmV4dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEVudGl0eUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIGNsYXNzZXMgdGhhdCBhcmUgdXNlZCB0byBtYW5hZ2UgTm9kZUxpc3RzIChzZXQgYXMgdGhlIGZhbWlseUNsYXNzIHByb3BlcnR5XG4gKiBpbiB0aGUgRW5naW5lIG9iamVjdCkuIE1vc3QgZGV2ZWxvcGVycyBkb24ndCBuZWVkIHRvIHVzZSB0aGlzIHNpbmNlIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiBpcyB1c2VkIGJ5IGRlZmF1bHQgYW5kIHN1aXRzIG1vc3QgbmVlZHMuXG4gKi9cblxuYXNoLmNvcmUuRmFtaWx5ID0gKGZ1bmN0aW9uKCkge1xuICBGYW1pbHkucHJvdG90eXBlLm5vZGVzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIE5vZGVMaXN0IG1hbmFnZWQgYnkgdGhpcyBjbGFzcy4gVGhpcyBzaG91bGQgYmUgYSByZWZlcmVuY2UgdGhhdCByZW1haW5zIHZhbGlkIGFsd2F5c1xuICAgKiBzaW5jZSBpdCBpcyByZXRhaW5lZCBhbmQgcmV1c2VkIGJ5IFN5c3RlbXMgdGhhdCB1c2UgdGhlIGxpc3QuIGkuZS4gbmV2ZXIgcmVjcmVhdGUgdGhlIGxpc3QsXG4gICAqIGFsd2F5cyBtb2RpZnkgaXQgaW4gcGxhY2UuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEZhbWlseSgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBub2RlTGlzdDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFuIGVudGl0eSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgZW5naW5lLiBJdCBtYXkgYWxyZWFkeSBoYXZlIGNvbXBvbmVudHMgc28gdGVzdCB0aGUgZW50aXR5XG4gICAqIGZvciBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHkncyBOb2RlTGlzdC5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5uZXdFbnRpdHkgPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQW4gZW50aXR5IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLiBJZiBpdCdzIGluIHRoaXMgZmFtaWx5J3MgTm9kZUxpc3QgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUucmVtb3ZlRW50aXR5ID0gZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIEEgY29tcG9uZW50IGhhcyBiZWVuIGFkZGVkIHRvIGFuIGVudGl0eS4gVGVzdCB3aGV0aGVyIHRoZSBlbnRpdHkncyBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHknc1xuICAgKiBOb2RlTGlzdCBzaG91bGQgYmUgbW9kaWZpZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50QWRkZWRUb0VudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbicpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQSBjb21wb25lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFuIGVudGl0eS4gVGVzdCB3aGV0aGVyIHRoZSBlbnRpdHkncyBpbmNsdXNpb24gaW4gdGhpcyBmYW1pbHknc1xuICAgKiBOb2RlTGlzdCBzaG91bGQgYmUgbW9kaWZpZWQuXG4gICAqL1xuXG4gIEZhbWlseS5wcm90b3R5cGUuY29tcG9uZW50UmVtb3ZlZEZyb21FbnRpdHkgPSBmdW5jdGlvbihlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFRoZSBmYW1pbHkgaXMgYWJvdXQgdG8gYmUgZGlzY2FyZGVkLiBDbGVhbiB1cCBhbGwgcHJvcGVydGllcyBhcyBuZWNlc3NhcnkuIFVzdWFsbHksIHlvdSB3aWxsXG4gICAqIHdhbnQgdG8gZW1wdHkgdGhlIE5vZGVMaXN0IGF0IHRoaXMgdGltZS5cbiAgICovXG5cbiAgRmFtaWx5LnByb3RvdHlwZS5jbGVhblVwID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvdmVycmlkZW4nKTtcbiAgfTtcblxuICByZXR1cm4gRmFtaWx5O1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYW1pbHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLmNvcmUuTm9kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTm9kZSgpIHt9XG5cbiAgTm9kZS5wcm90b3R5cGUuZW50aXR5ID0gbnVsbDtcblxuICBOb2RlLnByb3RvdHlwZS5wcmV2aW91cyA9IG51bGw7XG5cbiAgTm9kZS5wcm90b3R5cGUubmV4dCA9IG51bGw7XG5cbiAgcmV0dXJuIE5vZGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgU2lnbmFsMSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU2lnbmFsMSA9IGFzaC5zaWduYWxzLlNpZ25hbDE7XG5cblxuLypcbiAqIEEgY29sbGVjdGlvbiBvZiBub2Rlcy5cbiAqXG4gKiA8cD5TeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lIGFjY2VzcyB0aGUgY29tcG9uZW50cyBvZiBlbnRpdGllcyB2aWEgTm9kZUxpc3RzLiBBIE5vZGVMaXN0IGNvbnRhaW5zXG4gKiBhIG5vZGUgZm9yIGVhY2ggRW50aXR5IGluIHRoZSBlbmdpbmUgdGhhdCBoYXMgYWxsIHRoZSBjb21wb25lbnRzIHJlcXVpcmVkIGJ5IHRoZSBub2RlLiBUbyBpdGVyYXRlXG4gKiBvdmVyIGEgTm9kZUxpc3QsIHN0YXJ0IGZyb20gdGhlIGhlYWQgYW5kIHN0ZXAgdG8gdGhlIG5leHQgb24gZWFjaCBsb29wLCB1bnRpbCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqIGlzIG51bGwuIE9yIGp1c3QgdXNlIGZvciBpbiBzeW50YXguPC9wPlxuICpcbiAqIDxwPmZvciAobm9kZSBpbiBub2RlTGlzdClcbiAqIHtcbiAqICAgLy8gZG8gc3R1ZmZcbiAqIH08L3A+XG4gKlxuICogPHA+SXQgaXMgc2FmZSB0byByZW1vdmUgaXRlbXMgZnJvbSBhIG5vZGVsaXN0IGR1cmluZyB0aGUgbG9vcC4gV2hlbiBhIE5vZGUgaXMgcmVtb3ZlZCBmb3JtIHRoZVxuICogTm9kZUxpc3QgaXQncyBwcmV2aW91cyBhbmQgbmV4dCBwcm9wZXJ0aWVzIHN0aWxsIHBvaW50IHRvIHRoZSBub2RlcyB0aGF0IHdlcmUgYmVmb3JlIGFuZCBhZnRlclxuICogaXQgaW4gdGhlIE5vZGVMaXN0IGp1c3QgYmVmb3JlIGl0IHdhcyByZW1vdmVkLjwvcD5cbiAqL1xuXG5hc2guY29yZS5Ob2RlTGlzdCA9IChmdW5jdGlvbigpIHtcblxuICAvKlxuICAgKiBUaGUgZmlyc3QgaXRlbSBpbiB0aGUgbm9kZSBsaXN0LCBvciBudWxsIGlmIHRoZSBsaXN0IGNvbnRhaW5zIG5vIG5vZGVzLlxuICAgKi9cbiAgTm9kZUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGxhc3QgaXRlbSBpbiB0aGUgbm9kZSBsaXN0LCBvciBudWxsIGlmIHRoZSBsaXN0IGNvbnRhaW5zIG5vIG5vZGVzLlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbmV2ZXIgYSBub2RlIGlzIGFkZGVkIHRvIHRoZSBub2RlIGxpc3QuXG4gICAqXG4gICAqIDxwPlRoZSBzaWduYWwgd2lsbCBwYXNzIGEgc2luZ2xlIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXJzIC0gdGhlIG5vZGUgdGhhdCB3YXMgYWRkZWQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubm9kZUFkZGVkID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIEEgc2lnbmFsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuZXZlciBhIG5vZGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBub2RlIGxpc3QuXG4gICAqXG4gICAqIDxwPlRoZSBzaWduYWwgd2lsbCBwYXNzIGEgc2luZ2xlIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXJzIC0gdGhlIG5vZGUgdGhhdCB3YXMgcmVtb3ZlZC48L3A+XG4gICAqL1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5ub2RlUmVtb3ZlZCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG4gICAgdGhpcy5ub2RlQWRkZWQgPSBuZXcgU2lnbmFsMSgpO1xuICAgIHRoaXMubm9kZVJlbW92ZWQgPSBuZXcgU2lnbmFsMSgpO1xuICB9XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgbm9kZS5uZXh0ID0gbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG4gICAgdGhpcy5ub2RlQWRkZWQuZGlzcGF0Y2gobm9kZSk7XG4gIH07XG5cbiAgTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBub2RlKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgIH1cbiAgICBpZiAobm9kZS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgIH1cbiAgICB0aGlzLm5vZGVSZW1vdmVkLmRpc3BhdGNoKG5vZGUpO1xuICB9O1xuXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAodGhpcy5oZWFkICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLm5vZGVSZW1vdmVkLmRpc3BhdGNoKG5vZGUpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9O1xuXG5cbiAgLypcbiAgICogdHJ1ZSBpZiB0aGUgbGlzdCBpcyBlbXB0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhOb2RlTGlzdC5wcm90b3R5cGUsIHtcbiAgICBlbXB0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZCA9PT0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLypcbiAgICogU3dhcHMgdGhlIHBvc2l0aW9ucyBvZiB0d28gbm9kZXMgaW4gdGhlIGxpc3QuIFVzZWZ1bCB3aGVuIHNvcnRpbmcgYSBsaXN0LlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKG5vZGUxLCBub2RlMikge1xuICAgIHZhciB0ZW1wO1xuICAgIGlmIChub2RlMS5wcmV2aW91cyA9PT0gbm9kZTIpIHtcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTIucHJldmlvdXM7XG4gICAgICBub2RlMi5wcmV2aW91cyA9IG5vZGUxO1xuICAgICAgbm9kZTIubmV4dCA9IG5vZGUxLm5leHQ7XG4gICAgICBub2RlMS5uZXh0ID0gbm9kZTI7XG4gICAgfSBlbHNlIGlmIChub2RlMi5wcmV2aW91cyA9PT0gbm9kZTEpIHtcbiAgICAgIG5vZGUyLnByZXZpb3VzID0gbm9kZTEucHJldmlvdXM7XG4gICAgICBub2RlMS5wcmV2aW91cyA9IG5vZGUyO1xuICAgICAgbm9kZTEubmV4dCA9IG5vZGUyLm5leHQ7XG4gICAgICBub2RlMi5uZXh0ID0gbm9kZTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXAgPSBub2RlMS5wcmV2aW91cztcbiAgICAgIG5vZGUxLnByZXZpb3VzID0gbm9kZTIucHJldmlvdXM7XG4gICAgICBub2RlMi5wcmV2aW91cyA9IHRlbXA7XG4gICAgICB0ZW1wID0gbm9kZTEubmV4dDtcbiAgICAgIG5vZGUxLm5leHQgPSBub2RlMi5uZXh0O1xuICAgICAgbm9kZTIubmV4dCA9IHRlbXA7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlYWQgPT09IG5vZGUxKSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZCA9PT0gbm9kZTIpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWlsID09PSBub2RlMSkge1xuICAgICAgdGhpcy50YWlsID0gbm9kZTI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhaWwgPT09IG5vZGUyKSB7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlMTtcbiAgICB9XG4gICAgaWYgKG5vZGUxLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBub2RlMS5wcmV2aW91cy5uZXh0ID0gbm9kZTE7XG4gICAgfVxuICAgIGlmIChub2RlMi5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgbm9kZTIucHJldmlvdXMubmV4dCA9IG5vZGUyO1xuICAgIH1cbiAgICBpZiAobm9kZTEubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZTEubmV4dC5wcmV2aW91cyA9IG5vZGUxO1xuICAgIH1cbiAgICBpZiAobm9kZTIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZTIubmV4dC5wcmV2aW91cyA9IG5vZGUyO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFBlcmZvcm1zIGFuIGluc2VydGlvbiBzb3J0IG9uIHRoZSBub2RlIGxpc3QuIEluIGdlbmVyYWwsIGluc2VydGlvbiBzb3J0IGlzIHZlcnkgZWZmaWNpZW50IHdpdGggc2hvcnQgbGlzdHNcbiAgICogYW5kIHdpdGggbGlzdHMgdGhhdCBhcmUgbW9zdGx5IHNvcnRlZCwgYnV0IGlzIGluZWZmaWNpZW50IHdpdGggbGFyZ2UgbGlzdHMgdGhhdCBhcmUgcmFuZG9tbHkgb3JkZXJlZC5cbiAgICpcbiAgICogPHA+VGhlIHNvcnQgZnVuY3Rpb24gdGFrZXMgdHdvIG5vZGVzIGFuZCByZXR1cm5zIGFuIEludC48L3A+XG4gICAqXG4gICAqIDxwPjxjb2RlPmZ1bmN0aW9uIHNvcnRGdW5jdGlvbiggbm9kZTEgOiBNb2NrTm9kZSwgbm9kZTIgOiBNb2NrTm9kZSApIDogSW50PC9jb2RlPjwvcD5cbiAgICpcbiAgICogPHA+SWYgdGhlIHJldHVybmVkIG51bWJlciBpcyBsZXNzIHRoYW4gemVybywgdGhlIGZpcnN0IG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgc2Vjb25kLiBJZiBpdCBpcyBncmVhdGVyXG4gICAqIHRoYW4gemVybyB0aGUgc2Vjb25kIG5vZGUgc2hvdWxkIGJlIGJlZm9yZSB0aGUgZmlyc3QuIElmIGl0IGlzIHplcm8gdGhlIG9yZGVyIG9mIHRoZSBub2RlcyBkb2Vzbid0IG1hdHRlclxuICAgKiBhbmQgdGhlIG9yaWdpbmFsIG9yZGVyIHdpbGwgYmUgcmV0YWluZWQuPC9wPlxuICAgKlxuICAgKiA8cD5UaGlzIGluc2VydGlvbiBzb3J0IGltcGxlbWVudGF0aW9uIHJ1bnMgaW4gcGxhY2Ugc28gbm8gb2JqZWN0cyBhcmUgY3JlYXRlZCBkdXJpbmcgdGhlIHNvcnQuPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUuaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uKHNvcnRGdW5jdGlvbikge1xuICAgIHZhciBub2RlLCBvdGhlciwgcmVtYWlucztcbiAgICBpZiAodGhpcy5oZWFkID09PSB0aGlzLnRhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtYWlucyA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIG5vZGUgPSByZW1haW5zO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZW1haW5zID0gbm9kZS5uZXh0O1xuICAgICAgb3RoZXIgPSBub2RlLnByZXZpb3VzO1xuICAgICAgd2hpbGUgKG90aGVyICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChzb3J0RnVuY3Rpb24obm9kZSwgb3RoZXIpID49IDApIHtcbiAgICAgICAgICBpZiAobm9kZSAhPT0gb3RoZXIubmV4dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5wcmV2aW91cy5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5uZXh0ID0gb3RoZXIubmV4dDtcbiAgICAgICAgICAgIG5vZGUucHJldmlvdXMgPSBvdGhlcjtcbiAgICAgICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgICAgICBvdGhlci5uZXh0ID0gbm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb3RoZXIgPSBvdGhlci5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIGlmIChvdGhlciA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy50YWlsID09PSBub2RlKSB7XG4gICAgICAgICAgdGhpcy50YWlsID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICBub2RlLm5leHQucHJldmlvdXMgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9XG4gICAgICBub2RlID0gcmVtYWlucztcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBQZXJmb3JtcyBhIG1lcmdlIHNvcnQgb24gdGhlIG5vZGUgbGlzdC4gSW4gZ2VuZXJhbCwgbWVyZ2Ugc29ydCBpcyBtb3JlIGVmZmljaWVudCB0aGFuIGluc2VydGlvbiBzb3J0XG4gICAqIHdpdGggbG9uZyBsaXN0cyB0aGF0IGFyZSB2ZXJ5IHVuc29ydGVkLlxuICAgKlxuICAgKiA8cD5UaGUgc29ydCBmdW5jdGlvbiB0YWtlcyB0d28gbm9kZXMgYW5kIHJldHVybnMgYW4gSW50LjwvcD5cbiAgICpcbiAgICogPHA+PGNvZGU+ZnVuY3Rpb24gc29ydEZ1bmN0aW9uKCBub2RlMSA6IE1vY2tOb2RlLCBub2RlMiA6IE1vY2tOb2RlICkgOiBJbnQ8L2NvZGU+PC9wPlxuICAgKlxuICAgKiA8cD5JZiB0aGUgcmV0dXJuZWQgbnVtYmVyIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGUgZmlyc3Qgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBzZWNvbmQuIElmIGl0IGlzIGdyZWF0ZXJcbiAgICogdGhhbiB6ZXJvIHRoZSBzZWNvbmQgbm9kZSBzaG91bGQgYmUgYmVmb3JlIHRoZSBmaXJzdC4gSWYgaXQgaXMgemVybyB0aGUgb3JkZXIgb2YgdGhlIG5vZGVzIGRvZXNuJ3QgbWF0dGVyLjwvcD5cbiAgICpcbiAgICogPHA+VGhpcyBtZXJnZSBzb3J0IGltcGxlbWVudGF0aW9uIGNyZWF0ZXMgYW5kIHVzZXMgYSBzaW5nbGUgVmVjdG9yIGR1cmluZyB0aGUgc29ydCBvcGVyYXRpb24uPC9wPlxuICAgKi9cblxuICBOb2RlTGlzdC5wcm90b3R5cGUubWVyZ2VTb3J0ID0gZnVuY3Rpb24oc29ydEZ1bmN0aW9uKSB7XG4gICAgdmFyIGVuZCwgbGlzdHMsIG5leHQsIHN0YXJ0O1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHRoaXMudGFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaXN0cyA9IFtdO1xuICAgIHN0YXJ0ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChzdGFydCAhPT0gbnVsbCkge1xuICAgICAgZW5kID0gc3RhcnQ7XG4gICAgICB3aGlsZSAoZW5kLm5leHQgIT09IG51bGwgJiYgc29ydEZ1bmN0aW9uKGVuZCwgZW5kLm5leHQpIDw9IDApIHtcbiAgICAgICAgZW5kID0gZW5kLm5leHQ7XG4gICAgICB9XG4gICAgICBuZXh0ID0gZW5kLm5leHQ7XG4gICAgICBzdGFydC5wcmV2aW91cyA9IGVuZC5uZXh0ID0gbnVsbDtcbiAgICAgIGxpc3RzLnB1c2goc3RhcnQpO1xuICAgICAgc3RhcnQgPSBuZXh0O1xuICAgIH1cbiAgICB3aGlsZSAobGlzdHMubGVuZ3RoID4gMSkge1xuICAgICAgbGlzdHMucHVzaCh0aGlzLm1lcmdlKGxpc3RzLnNoaWZ0KCksIGxpc3RzLnNoaWZ0KCksIHNvcnRGdW5jdGlvbikpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSB0aGlzLmhlYWQgPSBsaXN0c1swXTtcbiAgICB3aGlsZSAodGhpcy50YWlsLm5leHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0O1xuICAgIH1cbiAgfTtcblxuICBOb2RlTGlzdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbihoZWFkMSwgaGVhZDIsIHNvcnRGdW5jdGlvbikge1xuICAgIHZhciBoZWFkLCBub2RlO1xuICAgIGlmIChzb3J0RnVuY3Rpb24oaGVhZDEsIGhlYWQyKSA8PSAwKSB7XG4gICAgICBoZWFkID0gbm9kZSA9IGhlYWQxO1xuICAgICAgaGVhZDEgPSBoZWFkMS5uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkID0gbm9kZSA9IGhlYWQyO1xuICAgICAgaGVhZDIgPSBoZWFkMi5uZXh0O1xuICAgIH1cbiAgICB3aGlsZSAoaGVhZDEgIT09IG51bGwgJiYgaGVhZDIgIT09IG51bGwpIHtcbiAgICAgIGlmIChzb3J0RnVuY3Rpb24oaGVhZDEsIGhlYWQyKSA8PSAwKSB7XG4gICAgICAgIG5vZGUubmV4dCA9IGhlYWQxO1xuICAgICAgICBoZWFkMS5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIG5vZGUgPSBoZWFkMTtcbiAgICAgICAgaGVhZDEgPSBoZWFkMS5uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5uZXh0ID0gaGVhZDI7XG4gICAgICAgIGhlYWQyLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IGhlYWQyO1xuICAgICAgICBoZWFkMiA9IGhlYWQyLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkMSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5uZXh0ID0gaGVhZDE7XG4gICAgICBoZWFkMS5wcmV2aW91cyA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubmV4dCA9IGhlYWQyO1xuICAgICAgaGVhZDIucHJldmlvdXMgPSBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbiAgfTtcblxuICByZXR1cm4gTm9kZUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVfbGlzdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBUaGlzIGludGVybmFsIGNsYXNzIG1haW50YWlucyBhIHBvb2wgb2YgZGVsZXRlZCBub2RlcyBmb3IgcmV1c2UgYnkgdGhlIGZyYW1ld29yay4gVGhpcyByZWR1Y2VzIHRoZSBvdmVyaGVhZFxuICogZnJvbSBvYmplY3QgY3JlYXRpb24gYW5kIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqXG4gKiBCZWNhdXNlIG5vZGVzIG1heSBiZSBkZWxldGVkIGZyb20gYSBOb2RlTGlzdCB3aGlsZSBpbiB1c2UsIGJ5IGRlbGV0aW5nIE5vZGVzIGZyb20gYSBOb2RlTGlzdFxuICogd2hpbGUgaXRlcmF0aW5nIHRocm91Z2ggdGhlIE5vZGVMaXN0LCB0aGUgcG9vbCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIG5vZGVzIHRoYXQgYXJlIGFkZGVkIHRvIHRoZSBwb29sXG4gKiBidXQgc2hvdWxkIG5vdCBiZSByZXVzZWQgeWV0LiBUaGV5IGFyZSB0aGVuIHJlbGVhc2VkIGludG8gdGhlIHBvb2wgYnkgY2FsbGluZyB0aGUgcmVsZWFzZUNhY2hlIG1ldGhvZC5cbiAqL1xuXG5hc2guY29yZS5Ob2RlUG9vbCA9IChmdW5jdGlvbigpIHtcbiAgTm9kZVBvb2wucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5ub2RlQ2xhc3MgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5jYWNoZVRhaWwgPSBudWxsO1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5jb21wb25lbnRzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBwb29sIGZvciB0aGUgZ2l2ZW4gbm9kZSBjbGFzcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gTm9kZVBvb2wobm9kZUNsYXNzLCBjb21wb25lbnRzKSB7XG4gICAgdGhpcy5ub2RlQ2xhc3MgPSBub2RlQ2xhc3M7XG4gICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgfVxuXG5cbiAgLypcbiAgICogRmV0Y2hlcyBhIG5vZGUgZnJvbSB0aGUgcG9vbC5cbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICBub2RlLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMubm9kZUNsYXNzLmNvbnN0cnVjdG9yKCk7XG4gICAgfVxuICB9O1xuXG5cbiAgLypcbiAgICogQWRkcyBhIG5vZGUgdG8gdGhlIHBvb2wuXG4gICAqL1xuXG4gIE5vZGVQb29sLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lO1xuICAgIGZvciAoY29tcG9uZW50TmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIG5vZGVbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgIH1cbiAgICBub2RlLmVudGl0eSA9IG51bGw7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGEgbm9kZSB0byB0aGUgY2FjaGVcbiAgICovXG5cbiAgTm9kZVBvb2wucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLmNhY2hlVGFpbDtcbiAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBSZWxlYXNlcyBhbGwgbm9kZXMgZnJvbSB0aGUgY2FjaGUgaW50byB0aGUgcG9vbFxuICAgKi9cblxuICBOb2RlUG9vbC5wcm90b3R5cGUucmVsZWFzZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKHRoaXMuY2FjaGVUYWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgICB0aGlzLmNhY2hlVGFpbCA9IG5vZGUucHJldmlvdXM7XG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBOb2RlUG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZV9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhIHN5c3RlbS5cbiAqXG4gKiA8cD5BIHN5c3RlbSBpcyBwYXJ0IG9mIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGdhbWUuIEFmdGVyIGEgc3lzdGVtIGlzIGFkZGVkIHRvIHRoZSBlbmdpbmUsIGl0c1xuICogdXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBmcmFtZSBvZiB0aGUgZW5naW5lLiBXaGVuIHRoZSBzeXN0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbmdpbmUsXG4gKiB0aGUgdXBkYXRlIG1ldGhvZCBpcyBubyBsb25nZXIgY2FsbGVkLjwvcD5cbiAqXG4gKiA8cD5UaGUgYWdncmVnYXRlIG9mIGFsbCBzeXN0ZW1zIGluIHRoZSBlbmdpbmUgaXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGdhbWUsIHdpdGggdGhlIHVwZGF0ZVxuICogbWV0aG9kcyBvZiB0aG9zZSBzeXN0ZW1zIGNvbGxlY3RpdmVseSBjb25zdGl0dXRpbmcgdGhlIGVuZ2luZSB1cGRhdGUgbG9vcC4gU3lzdGVtcyBnZW5lcmFsbHkgb3BlcmF0ZSBvblxuICogbm9kZSBsaXN0cyAtIGNvbGxlY3Rpb25zIG9mIG5vZGVzLiBFYWNoIG5vZGUgY29udGFpbnMgdGhlIGNvbXBvbmVudHMgZnJvbSBhbiBlbnRpdHkgaW4gdGhlIGVuZ2luZVxuICogdGhhdCBtYXRjaCB0aGUgbm9kZS48L3A+XG4gKi9cblxuYXNoLmNvcmUuU3lzdGVtID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTeXN0ZW0oKSB7XG4gICAgdGhpcy51cGRhdGUgPSBfX2JpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICB9XG5cblxuICAvKlxuICAgICogVXNlZCBpbnRlcm5hbGx5IHRvIG1hbmFnZSB0aGUgbGlzdCBvZiBzeXN0ZW1zIHdpdGhpbiB0aGUgZW5naW5lLiBUaGUgcHJldmlvdXMgc3lzdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSB0byBtYW5hZ2UgdGhlIGxpc3Qgb2Ygc3lzdGVtcyB3aXRoaW4gdGhlIGVuZ2luZS4gVGhlIG5leHQgc3lzdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5IHRvIGhvbGQgdGhlIHByaW9yaXR5IG9mIHRoaXMgc3lzdGVtIHdpdGhpbiB0aGUgc3lzdGVtIGxpc3QuIFRoaXMgaXNcbiAgICogdXNlZCB0byBvcmRlciB0aGUgc3lzdGVtcyBzbyB0aGV5IGFyZSB1cGRhdGVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBzeXN0ZW0gaXMgYWRkZWQgdG8gdGhlIGVuZ2luZSwgYmVmb3JlIGFueSBjYWxscyB0byB0aGUgdXBkYXRlIG1ldGhvZC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbmdpbmUgVGhlIGVuZ2luZSB0aGUgc3lzdGVtIHdhcyBhZGRlZCB0by5cbiAgICovXG5cbiAgU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge307XG5cblxuICAvKlxuICAgKiBDYWxsZWQganVzdCBhZnRlciB0aGUgc3lzdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgZW5naW5lLCBhZnRlciBhbGwgY2FsbHMgdG8gdGhlIHVwZGF0ZSBtZXRob2QuXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCB5b3VyIG93biBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAcGFyYW0gZW5naW5lIFRoZSBlbmdpbmUgdGhlIHN5c3RlbSB3YXMgcmVtb3ZlZCBmcm9tLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnJlbW92ZUZyb21FbmdpbmUgPSBmdW5jdGlvbihlbmdpbmUpIHt9O1xuXG5cbiAgLypcbiAgICogQWZ0ZXIgdGhlIHN5c3RlbSBpcyBhZGRlZCB0byB0aGUgZW5naW5lLCB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgZXZlcnkgZnJhbWUgdW50aWwgdGhlIHN5c3RlbVxuICAgKiBpcyByZW1vdmVkIGZyb20gdGhlIGVuZ2luZS4gT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHlvdXIgb3duIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIDxwPklmIHlvdSBuZWVkIHRvIHBlcmZvcm0gYW4gYWN0aW9uIG91dHNpZGUgb2YgdGhlIHVwZGF0ZSBsb29wIChlLmcuIHlvdSBuZWVkIHRvIGNoYW5nZSB0aGVcbiAgICogc3lzdGVtcyBpbiB0aGUgZW5naW5lIGFuZCB5b3UgZG9uJ3Qgd2FudCB0byBkbyBpdCB3aGlsZSB0aGV5J3JlIHVwZGF0aW5nKSBhZGQgYSBsaXN0ZW5lciB0b1xuICAgKiB0aGUgZW5naW5lJ3MgdXBkYXRlQ29tcGxldGUgc2lnbmFsIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVwZGF0ZSBsb29wIGNvbXBsZXRlcy48L3A+XG4gICAqXG4gICAqIEBwYXJhbSB0aW1lIFRoZSBkdXJhdGlvbiwgaW4gc2Vjb25kcywgb2YgdGhlIGZyYW1lLlxuICAgKi9cblxuICBTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHt9O1xuXG4gIHJldHVybiBTeXN0ZW07XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBVc2VkIGludGVybmFsbHksIHRoaXMgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIFN5c3RlbXMgZm9yIHVzZSBieSB0aGUgZW5naW5lIHVwZGF0ZSBsb29wLlxuICovXG5cbmFzaC5jb3JlLlN5c3RlbUxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN5c3RlbUxpc3QoKSB7fVxuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLmhlYWQgPSBudWxsO1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLnRhaWwgPSBudWxsO1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIHN5c3RlbS5uZXh0ID0gc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRoaXMudGFpbDtcbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlLnByaW9yaXR5IDw9IHN5c3RlbS5wcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IHN5c3RlbTtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IHN5c3RlbTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gc3lzdGVtO1xuICAgICAgICB0aGlzLmhlYWQgPSBzeXN0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzeXN0ZW0ubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgc3lzdGVtLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgbm9kZS5uZXh0LnByZXZpb3VzID0gc3lzdGVtO1xuICAgICAgICBub2RlLm5leHQgPSBzeXN0ZW07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFN5c3RlbUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IHN5c3RlbSkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhaWwgPT09IHN5c3RlbSkge1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgIH1cbiAgICBpZiAoc3lzdGVtLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICBzeXN0ZW0ucHJldmlvdXMubmV4dCA9IHN5c3RlbS5uZXh0O1xuICAgIH1cbiAgICBpZiAoc3lzdGVtLm5leHQgIT09IG51bGwpIHtcbiAgICAgIHN5c3RlbS5uZXh0LnByZXZpb3VzID0gc3lzdGVtLnByZXZpb3VzO1xuICAgIH1cbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3lzdGVtO1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIHN5c3RlbSA9IHRoaXMuaGVhZDtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgc3lzdGVtLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHN5c3RlbS5uZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgfTtcblxuICBTeXN0ZW1MaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIHN5c3RlbTtcbiAgICBzeXN0ZW0gPSB0aGlzLnN5c3RlbUxpc3QuaGVhZDtcbiAgICB3aGlsZSAoc3lzdGVtKSB7XG4gICAgICBpZiAoc3lzdGVtLmNvbnN0cnVjdG9yID09PSB0eXBlKSB7XG4gICAgICAgIHJldHVybiBzeXN0ZW07XG4gICAgICB9XG4gICAgICBzeXN0ZW0gPSBzeXN0ZW0ubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFN5c3RlbUxpc3Q7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbV9saXN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVyIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQuIFRoZSBpbnN0YW5jZVxuICogaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlciBhdCBpbml0aWFsaXNhdGlvbi5cbiAqL1xuXG5hc2guZnNtLkNvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gcmV0dXJuIHdoZW5ldmVyIGEgY29tcG9uZW50IGlzIHJlcXVlc3RlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcihpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgKi9cblxuICBDb21wb25lbnRJbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgaWRlbnRpZmllcjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50X2luc3RhbmNlX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuICBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuaW5zdGFuY2UgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRTaW5nbGV0b25Qcm92aWRlcih0eXBlKSB7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gdHlwZTtcblxuICAgIC8qXG4gICAgICogVXNlZCB0byByZXF1ZXN0IGEgY29tcG9uZW50IGZyb20gdGhpcyBwcm92aWRlclxuICAgICAqXG4gICAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgfVxuXG4gIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfc2luZ2xldG9uX3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5mc20uQ29tcG9uZW50VHlwZVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBDb21wb25lbnRUeXBlUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBmdW5jdGlvbiBDb21wb25lbnRUeXBlUHJvdmlkZXIodHlwZSkge1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IHR5cGU7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgQ29tcG9uZW50VHlwZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICB9O1xuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2VcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29tcG9uZW50VHlwZVByb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQ29tcG9uZW50VHlwZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnRfdHlwZV9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5hc2guZnNtLkR5bmFtaWNDb21wb25lbnRQcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZS5fY2xvc3VyZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gY2xvc3VyZSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdoZW4gY2FsbGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIoY2xvc3VyZSkge1xuICAgIHRoaXMuX2Nsb3N1cmUgPSBjbG9zdXJlO1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBjb21wb25lbnQgZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICB9XG5cbiAgRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc3VyZTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIGluc3RhbmNlXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKER5bmFtaWNDb21wb25lbnRQcm92aWRlci5wcm90b3R5cGUsIHtcbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc3VyZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXI7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFRoaXMgU3lzdGVtIHByb3ZpZGVyIHJldHVybnMgcmVzdWx0cyBvZiBhIG1ldGhvZCBjYWxsLiBUaGUgbWV0aG9kXG4gKiBpcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVyIGF0IGluaXRpYWxpc2F0aW9uLlxuICovXG5cbmFzaC5mc20uRHluYW1pY1N5c3RlbVByb3ZpZGVyID0gKGZ1bmN0aW9uKCkge1xuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uKCkge307XG5cbiAgRHluYW1pY1N5c3RlbVByb3ZpZGVyLnByb3RvdHlwZS5zeXN0ZW1Qcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdGhhdCByZXR1cm5zIHRoZSBTeXN0ZW0gaW5zdGFuY2U7XG4gICAqL1xuXG4gIGZ1bmN0aW9uIER5bmFtaWNTeXN0ZW1Qcm92aWRlcihtZXRob2QpIHtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxuXG5cbiAgLypcbiAgICogVXNlZCB0byBjb21wYXJlIHRoaXMgcHJvdmlkZXIgd2l0aCBvdGhlcnMuIEFueSBwcm92aWRlciB0aGF0IHJldHVybnMgdGhlIHNhbWUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlIHdpbGwgYmUgcmVnYXJkZWQgYXMgZXF1aXZhbGVudC5cbiAgICpcbiAgICogQHJldHVybiBUaGUgbWV0aG9kIHVzZWQgdG8gY2FsbCB0aGUgU3lzdGVtIGluc3RhbmNlc1xuICAgKi9cblxuICBEeW5hbWljU3lzdGVtUHJvdmlkZXIucHJvdG90eXBlLmdldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZCgpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKER5bmFtaWNTeXN0ZW1Qcm92aWRlci5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBpZGVudGlmaWVyOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRob2Q7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogVGhlIHByaW9yaXR5IGF0IHdoaWNoIHRoZSBTeXN0ZW0gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBFbmdpbmVcbiAgICAgKi9cbiAgICBwcmlvcml0eToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Qcmlvcml0eSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIER5bmFtaWNTeXN0ZW1Qcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pY19zeXN0ZW1fcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgRHluYW1pY1N5c3RlbVByb3ZpZGVyLCBTdGF0ZVN5c3RlbU1hcHBpbmcsIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIsIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5TeXN0ZW1JbnN0YW5jZVByb3ZpZGVyID0gYXNoLmZzbS5TeXN0ZW1JbnN0YW5jZVByb3ZpZGVyO1xuXG5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlciA9IGFzaC5mc20uU3lzdGVtU2luZ2xldG9uUHJvdmlkZXI7XG5cbkR5bmFtaWNTeXN0ZW1Qcm92aWRlciA9IGFzaC5mc20uRHluYW1pY1N5c3RlbVByb3ZpZGVyO1xuXG5TdGF0ZVN5c3RlbU1hcHBpbmcgPSBhc2guZnNtLlN0YXRlU3lzdGVtTWFwcGluZztcblxuXG4vKlxuICogUmVwcmVzZW50cyBhIHN0YXRlIGZvciBhIFN5c3RlbVN0YXRlTWFjaGluZS4gVGhlIHN0YXRlIGNvbnRhaW5zIGFueSBudW1iZXIgb2YgU3lzdGVtUHJvdmlkZXJzIHdoaWNoXG4gKiBhcmUgdXNlZCB0byBhZGQgU3lzdGVtcyB0byB0aGUgRW5naW5lIHdoZW4gdGhpcyBzdGF0ZSBpcyBlbnRlcmVkLlxuICovXG5cbmFzaC5mc20uRW5naW5lU3RhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5wcm92aWRlcnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVuZ2luZVN0YXRlKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0gW107XG4gIH1cblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBzcGVjaWZpYyBTeXN0ZW0gaW5zdGFuY2UuIEFcbiAgICogU3lzdGVtSW5zdGFuY2VQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHN5c3RlbSBUaGUgU3lzdGVtIGluc3RhbmNlIHRvIHVzZSBmb3IgdGhlIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyKHN5c3RlbSkpO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAgICogVGhlIGluc3RhbmNlIGlzIG5vdCBjcmVhdGVkIHVudGlsIGl0IGlzIGZpcnN0IHJlcXVlc3RlZC4gVGhlIHR5cGUgc2hvdWxkIGJlIHRoZSBzYW1lXG4gICAqIGFzIG9yIGV4dGVuZCB0aGUgdHlwZSBmb3IgdGhpcyBtYXBwaW5nLiBBIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyIGlzIHVzZWQgZm9yXG4gICAqIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuIElmIG9taXR0ZWQsIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBtYXBwaW5nIGlzIHVzZWQuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBFbmdpbmVTdGF0ZS5wcm90b3R5cGUuYWRkU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlcih0eXBlKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgbWV0aG9kIGNhbGwuXG4gICAqIFRoZSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFN5c3RlbSBpbnN0YW5jZS4gQSBEeW5hbWljU3lzdGVtUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0byBwcm92aWRlIHRoZSBTeXN0ZW0gaW5zdGFuY2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGUucHJvdG90eXBlLmFkZE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiB0aGlzLmFkZFByb3ZpZGVyKG5ldyBEeW5hbWljU3lzdGVtUHJvdmlkZXIobWV0aG9kKSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGRzIGFueSBTeXN0ZW1Qcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHByb3ZpZGVyIFRoZSBjb21wb25lbnQgcHJvdmlkZXIgdG8gdXNlLlxuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlLnByb3RvdHlwZS5hZGRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgdmFyIG1hcHBpbmc7XG4gICAgbWFwcGluZyA9IG5ldyBTdGF0ZVN5c3RlbU1hcHBpbmcodGhpcywgcHJvdmlkZXIpO1xuICAgIHRoaXMucHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuICAgIHJldHVybiBtYXBwaW5nO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmVTdGF0ZTtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lX3N0YXRlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIEVuZ2luZVN0YXRlLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5FbmdpbmVTdGF0ZSA9IGFzaC5mc20uRW5naW5lU3RhdGU7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBUaGlzIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgdGhlIEVuZ2luZS4gVGhlIHN0YXRlIG1hY2hpbmUgbWFuYWdlcyBhIHNldCBvZiBzdGF0ZXMsXG4gKiBlYWNoIG9mIHdoaWNoIGhhcyBhIHNldCBvZiBTeXN0ZW0gcHJvdmlkZXJzLiBXaGVuIHRoZSBzdGF0ZSBtYWNoaW5lIGNoYW5nZXMgdGhlIHN0YXRlLCBpdCByZW1vdmVzXG4gKiBTeXN0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJldmlvdXMgc3RhdGUgYW5kIGFkZHMgU3lzdGVtcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAqL1xuXG5hc2guZnNtLkVuZ2luZVN0YXRlTWFjaGluZSA9IChmdW5jdGlvbigpIHtcbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5lbmdpbmUgPSBudWxsO1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuc3RhdGVzID0gbnVsbDtcblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3Rvci4gQ3JlYXRlcyBhbiBTeXN0ZW1TdGF0ZU1hY2hpbmUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEVuZ2luZVN0YXRlTWFjaGluZShlbmdpbmUpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLnN0YXRlcyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIEFkZCBhIHN0YXRlIHRvIHRoaXMgc3RhdGUgbWFjaGluZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhpcyBzdGF0ZSAtIHVzZWQgdG8gaWRlbnRpZnkgaXQgbGF0ZXIgaW4gdGhlIGNoYW5nZVN0YXRlIG1ldGhvZCBjYWxsLlxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlLlxuICAgKiBAcmV0dXJuIFRoaXMgc3RhdGUgbWFjaGluZSwgc28gbWV0aG9kcyBjYW4gYmUgY2hhaW5lZC5cbiAgICovXG5cbiAgRW5naW5lU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5hZGRTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUsIHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZXNbbmFtZV0gPSBzdGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZSBhIG5ldyBzdGF0ZSBpbiB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBuZXcgc3RhdGUgLSB1c2VkIHRvIGlkZW50aWZ5IGl0IGxhdGVyIGluIHRoZSBjaGFuZ2VTdGF0ZSBtZXRob2QgY2FsbC5cbiAgICogQHJldHVybiBUaGUgbmV3IEVudGl0eVN0YXRlIG9iamVjdCB0aGF0IGlzIHRoZSBzdGF0ZS4gVGhpcyB3aWxsIG5lZWQgdG8gYmUgY29uZmlndXJlZCB3aXRoXG4gICAqIHRoZSBhcHByb3ByaWF0ZSBjb21wb25lbnQgcHJvdmlkZXJzLlxuICAgKi9cblxuICBFbmdpbmVTdGF0ZU1hY2hpbmUucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBzdGF0ZSA9IG5ldyBFbmdpbmVTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzW25hbWVdID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDaGFuZ2UgdG8gYSBuZXcgc3RhdGUuIFRoZSBTeXN0ZW1zIGZyb20gdGhlIG9sZCBzdGF0ZSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSBTeXN0ZW1zXG4gICAqIGZvciB0aGUgbmV3IHN0YXRlIHdpbGwgYmUgYWRkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSB0byBjaGFuZ2UgdG8uXG4gICAqL1xuXG4gIEVuZ2luZVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGVhY2gsIGlkLCBuZXdTdGF0ZSwgb3RoZXIsIHByb3ZpZGVyLCB0b0FkZCwgX3JlZiwgX3JlZjE7XG4gICAgbmV3U3RhdGUgPSB0aGlzLnN0YXRlc1tuYW1lXTtcbiAgICBpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW5naW5lIHN0YXRlIFwiICsgbmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChuZXdTdGF0ZSA9PT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9BZGQgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIF9yZWYgPSBuZXdTdGF0ZS5wcm92aWRlcnM7XG4gICAgZm9yIChlYWNoIGluIF9yZWYpIHtcbiAgICAgIHByb3ZpZGVyID0gX3JlZltlYWNoXTtcbiAgICAgIGlkID0gcHJvdmlkZXIuaWRlbnRpZmllcjtcbiAgICAgIHRvQWRkW2lkXSA9IHByb3ZpZGVyO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0YXRlKSB7XG4gICAgICBfcmVmMSA9IHRoaXMuY3VycmVudFN0YXRlLnByb3ZpZGVycztcbiAgICAgIGZvciAoZWFjaCBpbiBfcmVmMSkge1xuICAgICAgICBwcm92aWRlciA9IF9yZWYxW2VhY2hdO1xuICAgICAgICBpZCA9IHByb3ZpZGVyLmlkZW50aWZpZXI7XG4gICAgICAgIG90aGVyID0gdG9BZGRbaWRdO1xuICAgICAgICBpZiAob3RoZXIpIHtcbiAgICAgICAgICBkZWxldGUgdG9BZGRbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZVN5c3RlbShwcm92aWRlci5nZXRTeXN0ZW0oKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChlYWNoIGluIHRvQWRkKSB7XG4gICAgICBwcm92aWRlciA9IHRvQWRkW2VhY2hdO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3lzdGVtKHByb3ZpZGVyLmdldFN5c3RlbSgpLCBwcm92aWRlci5wcmlvcml0eSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICB9O1xuXG4gIHJldHVybiBFbmdpbmVTdGF0ZU1hY2hpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZV9zdGF0ZV9tYWNoaW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERpY3Rpb25hcnksIFN0YXRlQ29tcG9uZW50TWFwcGluZywgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuU3RhdGVDb21wb25lbnRNYXBwaW5nID0gYXNoLmZzbS5TdGF0ZUNvbXBvbmVudE1hcHBpbmc7XG5cbkRpY3Rpb25hcnkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERpY3Rpb25hcnkoKSB7fVxuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuXG5cbi8qXG4gKiBSZXByZXNlbnRzIGEgc3RhdGUgZm9yIGFuIEVudGl0eVN0YXRlTWFjaGluZS4gVGhlIHN0YXRlIGNvbnRhaW5zIGFueSBudW1iZXIgb2YgQ29tcG9uZW50UHJvdmlkZXJzIHdoaWNoXG4gKiBhcmUgdXNlZCB0byBhZGQgY29tcG9uZW50cyB0byB0aGUgZW50aXR5IHdoZW4gdGhpcyBzdGF0ZSBpcyBlbnRlcmVkLlxuICovXG5cbmFzaC5mc20uRW50aXR5U3RhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5wcm92aWRlcnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIEVudGl0eVN0YXRlKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG5cbiAgLypcbiAgICogQWRkIGEgbmV3IENvbXBvbmVudE1hcHBpbmcgdG8gdGhpcyBzdGF0ZS4gVGhlIG1hcHBpbmcgaXMgYSB1dGlsaXR5IGNsYXNzIHRoYXQgaXMgdXNlZCB0b1xuICAgKiBtYXAgYSBjb21wb25lbnQgdHlwZSB0byB0aGUgcHJvdmlkZXIgdGhhdCBwcm92aWRlcyB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBjb21wb25lbnQgdG8gYmUgbWFwcGVkXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudCBtYXBwaW5nIHRvIHVzZSB3aGVuIHNldHRpbmcgdGhlIHByb3ZpZGVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqL1xuXG4gIEVudGl0eVN0YXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZUNvbXBvbmVudE1hcHBpbmcodGhpcywgdHlwZSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBHZXQgdGhlIENvbXBvbmVudFByb3ZpZGVyIGZvciBhIHBhcnRpY3VsYXIgY29tcG9uZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBnZXQgdGhlIHByb3ZpZGVyIGZvclxuICAgKiBAcmV0dXJuIFRoZSBDb21wb25lbnRQcm92aWRlclxuICAgKi9cblxuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0eXBlXTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIFRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgc3RhdGUgaGFzIGEgcHJvdmlkZXIgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBsb29rIGZvciBhIHByb3ZpZGVyIGZvclxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlcmUgaXMgYSBwcm92aWRlciBmb3IgdGhlIGdpdmVuIHR5cGUsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cblxuICBFbnRpdHlTdGF0ZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0eXBlXSAhPT0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRW50aXR5U3RhdGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9zdGF0ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBFbnRpdHlTdGF0ZSwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRW50aXR5U3RhdGUgPSBhc2guZnNtLkVudGl0eVN0YXRlO1xuXG5EaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge31cblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcblxuXG4vKlxuICogVGhpcyBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIGFuIGVudGl0eS4gVGhlIHN0YXRlIG1hY2hpbmUgbWFuYWdlcyBhIHNldCBvZiBzdGF0ZXMsXG4gKiBlYWNoIG9mIHdoaWNoIGhhcyBhIHNldCBvZiBjb21wb25lbnQgcHJvdmlkZXJzLiBXaGVuIHRoZSBzdGF0ZSBtYWNoaW5lIGNoYW5nZXMgdGhlIHN0YXRlLCBpdCByZW1vdmVzXG4gKiBjb21wb25lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJldmlvdXMgc3RhdGUgYW5kIGFkZHMgY29tcG9uZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAqL1xuXG5hc2guZnNtLkVudGl0eVN0YXRlTWFjaGluZSA9IChmdW5jdGlvbigpIHtcbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5zdGF0ZXMgPSBudWxsO1xuXG5cbiAgLypcbiAgXHQgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3RhdGUgbWFjaGluZS5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jdXJyZW50U3RhdGUgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVGhlIGVudGl0eSB3aG9zZSBzdGF0ZSBtYWNoaW5lIHRoaXMgaXNcbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5lbnRpdHkgPSBudWxsO1xuXG5cbiAgLypcbiAgICogQ29uc3RydWN0b3IuIENyZWF0ZXMgYW4gRW50aXR5U3RhdGVNYWNoaW5lLlxuICAgKi9cblxuICBmdW5jdGlvbiBFbnRpdHlTdGF0ZU1hY2hpbmUoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cblxuICAvKlxuICAgKiBDcmVhdGUgYSBuZXcgc3RhdGUgaW4gdGhpcyBzdGF0ZSBtYWNoaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV3IHN0YXRlIC0gdXNlZCB0byBpZGVudGlmeSBpdCBsYXRlciBpbiB0aGUgY2hhbmdlU3RhdGUgbWV0aG9kIGNhbGwuXG4gICAqIEByZXR1cm4gVGhlIG5ldyBFbnRpdHlTdGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgc3RhdGUuIFRoaXMgd2lsbCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQgd2l0aFxuICAgKiB0aGUgYXBwcm9wcmlhdGUgY29tcG9uZW50IHByb3ZpZGVycy5cbiAgICovXG5cbiAgRW50aXR5U3RhdGVNYWNoaW5lLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBuZXcgRW50aXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cblxuICAvKlxuICAgKiBDaGFuZ2UgdG8gYSBuZXcgc3RhdGUuIFRoZSBjb21wb25lbnRzIGZyb20gdGhlIG9sZCBzdGF0ZSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSBjb21wb25lbnRzXG4gICAqIGZvciB0aGUgbmV3IHN0YXRlIHdpbGwgYmUgYWRkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSB0byBjaGFuZ2UgdG8uXG4gICAqL1xuXG4gIEVudGl0eVN0YXRlTWFjaGluZS5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSwgbmV3U3RhdGUsIG90aGVyLCB0b0FkZCwgdHlwZTtcbiAgICBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVzW25hbWVdO1xuICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBzdGF0ZSBcIiArIG5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAobmV3U3RhdGUgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgdG9BZGQgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgICAgZm9yICh0eXBlIGluIG5ld1N0YXRlLnByb3ZpZGVycykge1xuICAgICAgICB0b0FkZFt0eXBlXSA9IG5ld1N0YXRlLnByb3ZpZGVyc1t0eXBlXTtcbiAgICAgIH1cbiAgICAgIGZvciAodHlwZSBpbiB0aGlzLmN1cnJlbnRTdGF0ZS5wcm92aWRlcnMpIHtcbiAgICAgICAgb3RoZXIgPSB0b0FkZFt0eXBlXTtcbiAgICAgICAgaWYgKG90aGVyICYmIG90aGVyLmlkZW50aWZpZXIgPT09IGN1cnJlbnRTdGF0ZS5wcm92aWRlcnNbdHlwZV0uaWRlbnRpZmllcikge1xuICAgICAgICAgIGRlbGV0ZSB0b0FkZFt0eXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVudGl0eS5yZW1vdmUodHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9BZGQgPSBuZXdTdGF0ZS5wcm92aWRlcnM7XG4gICAgfVxuICAgIGZvciAodHlwZSBpbiB0b0FkZCkge1xuICAgICAgdGhpcy5lbnRpdHkuYWRkKHRvQWRkW3R5cGVdLmdldENvbXBvbmVudCgpLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICB9O1xuXG4gIHJldHVybiBFbnRpdHlTdGF0ZU1hY2hpbmU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudGl0eV9zdGF0ZV9tYWNoaW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIsIENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyLCBDb21wb25lbnRUeXBlUHJvdmlkZXIsIER5bmFtaWNDb21wb25lbnRQcm92aWRlciwgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciA9IGFzaC5mc20uQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlcjtcblxuQ29tcG9uZW50VHlwZVByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRUeXBlUHJvdmlkZXI7XG5cbkNvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyID0gYXNoLmZzbS5Db21wb25lbnRTaW5nbGV0b25Qcm92aWRlcjtcblxuRHluYW1pY0NvbXBvbmVudFByb3ZpZGVyID0gYXNoLmZzbS5EeW5hbWljQ29tcG9uZW50UHJvdmlkZXI7XG5cblxuLypcbiAqIFVzZWQgYnkgdGhlIEVudGl0eVN0YXRlIGNsYXNzIHRvIGNyZWF0ZSB0aGUgbWFwcGluZ3Mgb2YgY29tcG9uZW50cyB0byBwcm92aWRlcnMgdmlhIGEgZmx1ZW50IGludGVyZmFjZS5cbiAqL1xuXG5hc2guZnNtLlN0YXRlQ29tcG9uZW50TWFwcGluZyA9IChmdW5jdGlvbigpIHtcbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS5jb21wb25lbnRUeXBlID0gbnVsbDtcblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmNyZWF0aW5nU3RhdGUgPSBudWxsO1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUucHJvdmlkZXIgPSBudWxsO1xuXG5cbiAgLypcbiAgICogVXNlZCBpbnRlcm5hbGx5LCB0aGUgY29uc3RydWN0b3IgY3JlYXRlcyBhIGNvbXBvbmVudCBtYXBwaW5nLiBUaGUgY29uc3RydWN0b3JcbiAgICogY3JlYXRlcyBhIENvbXBvbmVudFR5cGVQcm92aWRlciBhcyB0aGUgZGVmYXVsdCBtYXBwaW5nLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkXG4gICAqIGJ5IG1vcmUgc3BlY2lmaWMgbWFwcGluZ3MgaWYgb3RoZXIgbWV0aG9kcyBhcmUgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0gY3JlYXRpbmdTdGF0ZSBUaGUgRW50aXR5U3RhdGUgdGhhdCB0aGUgbWFwcGluZyB3aWxsIGJlbG9uZyB0b1xuICAgKiBAcGFyYW0gdHlwZSBUaGUgY29tcG9uZW50IHR5cGUgZm9yIHRoZSBtYXBwaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN0YXRlQ29tcG9uZW50TWFwcGluZyhjcmVhdGluZ1N0YXRlLCB0eXBlKSB7XG4gICAgdGhpcy5jcmVhdGluZ1N0YXRlID0gY3JlYXRpbmdTdGF0ZTtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuICAgIHRoaXMud2l0aFR5cGUodHlwZSk7XG4gIH1cblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBzcGVjaWZpYyBjb21wb25lbnQgaW5zdGFuY2UuIEFcbiAgICogQ29tcG9uZW50SW5zdGFuY2VQcm92aWRlciBpcyB1c2VkIGZvciB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IGluc3RhbmNlIHRvIHVzZSBmb3IgdGhlIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhJbnN0YW5jZSA9IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudEluc3RhbmNlUHJvdmlkZXIoY29tcG9uZW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIG5ldyBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIHR5cGUuXG4gICAqIFRoZSB0eXBlIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBvciBleHRlbmQgdGhlIHR5cGUgZm9yIHRoaXMgbWFwcGluZy4gQSBDb21wb25lbnRUeXBlUHJvdmlkZXJcbiAgICogaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCBieSB0aGlzIG1hcHBpbmdcbiAgICogQHJldHVybiBUaGlzIENvbXBvbmVudE1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZFxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLndpdGhUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudFR5cGVQcm92aWRlcih0eXBlKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIGNvbXBvbmVudCB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgQ29tcG9uZW50U2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBUaGUgdHlwZSBvZiB0aGUgc2luZ2xlIGluc3RhbmNlIHRvIGJlIGNyZWF0ZWQuIElmIG9taXR0ZWQsIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBtYXBwaW5nIGlzIHVzZWQuXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVDb21wb25lbnRNYXBwaW5nLnByb3RvdHlwZS53aXRoU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBvbmVudFR5cGU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IENvbXBvbmVudFNpbmdsZXRvblByb3ZpZGVyKHR5cGUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYSBtZXRob2QgY2FsbC4gQVxuICAgKiBEeW5hbWljQ29tcG9uZW50UHJvdmlkZXIgaXMgdXNlZCBmb3IgdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgVGhlIG1ldGhvZCB0byByZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIFRoaXMgQ29tcG9uZW50TWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHRoaXMuc2V0UHJvdmlkZXIobmV3IER5bmFtaWNDb21wb25lbnRQcm92aWRlcihtZXRob2QpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgY29tcG9uZW50IHR5cGUgdG8gYW55IENvbXBvbmVudFByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBDb21wb25lbnRNYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuXG4gIFN0YXRlQ29tcG9uZW50TWFwcGluZy5wcm90b3R5cGUud2l0aFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB0aGlzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qXG4gICAqIE1hcHMgdGhyb3VnaCB0byB0aGUgYWRkIG1ldGhvZCBvZiB0aGUgRW50aXR5U3RhdGUgdGhhdCB0aGlzIG1hcHBpbmcgYmVsb25ncyB0b1xuICAgKiBzbyB0aGF0IGEgZmx1ZW50IGludGVyZmFjZSBjYW4gYmUgdXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGVudGl0eSBzdGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB0byBhZGQgYSBtYXBwaW5nIHRvIHRoZSBzdGF0ZSBmb3JcbiAgICogQHJldHVybiBUaGUgbmV3IENvbXBvbmVudE1hcHBpbmcgZm9yIHRoYXQgdHlwZVxuICAgKi9cblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGluZ1N0YXRlLmFkZCh0eXBlKTtcbiAgfTtcblxuICBTdGF0ZUNvbXBvbmVudE1hcHBpbmcucHJvdG90eXBlLnNldFByb3ZpZGVyID0gZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRpbmdTdGF0ZS5wcm92aWRlcnNbdGhpcy5jb21wb25lbnRUeXBlXSA9IHByb3ZpZGVyO1xuICB9O1xuXG4gIHJldHVybiBTdGF0ZUNvbXBvbmVudE1hcHBpbmc7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlX2NvbXBvbmVudF9tYXBwaW5nLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblxuLypcbiAqIFVzZWQgYnkgdGhlIFN5c3RlbVN0YXRlIGNsYXNzIHRvIGNyZWF0ZSB0aGUgbWFwcGluZ3Mgb2YgU3lzdGVtcyB0byBwcm92aWRlcnMgdmlhIGEgZmx1ZW50IGludGVyZmFjZS5cbiAqL1xuXG5hc2guZnNtLlN0YXRlU3lzdGVtTWFwcGluZyA9IChmdW5jdGlvbigpIHtcbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5jcmVhdGluZ1N0YXRlID0gbnVsbDtcblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLnByb3ZpZGVyID0gbnVsbDtcblxuXG4gIC8qXG4gICAqIFVzZWQgaW50ZXJuYWxseSwgdGhlIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYSBjb21wb25lbnQgbWFwcGluZy4gVGhlIGNvbnN0cnVjdG9yXG4gICAqIGNyZWF0ZXMgYSBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlciBhcyB0aGUgZGVmYXVsdCBtYXBwaW5nLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkXG4gICAqIGJ5IG1vcmUgc3BlY2lmaWMgbWFwcGluZ3MgaWYgb3RoZXIgbWV0aG9kcyBhcmUgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0gY3JlYXRpbmdTdGF0ZSBUaGUgU3lzdGVtU3RhdGUgdGhhdCB0aGUgbWFwcGluZyB3aWxsIGJlbG9uZyB0b1xuICAgKiBAcGFyYW0gdHlwZSBUaGUgU3lzdGVtIHR5cGUgZm9yIHRoZSBtYXBwaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN0YXRlU3lzdGVtTWFwcGluZyhjcmVhdGluZ1N0YXRlLCBwcm92aWRlcikge1xuICAgIHRoaXMuY3JlYXRpbmdTdGF0ZSA9IGNyZWF0aW5nU3RhdGU7XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICB9XG5cblxuICAvKlxuICAgKiBBcHBsaWVzIHRoZSBwcmlvcml0eSB0byB0aGUgcHJvdmlkZXIgdGhhdCB0aGUgU3lzdGVtIHdpbGwgYmUuXG4gICAqXG4gICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgY29tcG9uZW50IHByb3ZpZGVyIHRvIHVzZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLndpdGhQcmlvcml0eSA9IGZ1bmN0aW9uKHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm92aWRlci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgLypcbiAgICogQ3JlYXRlcyBhIG1hcHBpbmcgZm9yIHRoZSBTeXN0ZW0gdHlwZSB0byBhIHNwZWNpZmljIFN5c3RlbSBpbnN0YW5jZS4gQVxuICAgKiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyIGlzIHVzZWQgZm9yIHRoZSBtYXBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc3lzdGVtIFRoZSBTeXN0ZW0gaW5zdGFuY2UgdG8gdXNlIGZvciB0aGUgbWFwcGluZ1xuICAgKiBAcmV0dXJuIFRoaXMgU3RhdGVTeXN0ZW1NYXBwaW5nLCBzbyBtb3JlIG1vZGlmaWNhdGlvbnMgY2FuIGJlIGFwcGxpZWRcbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKHN5c3RlbSkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZEluc3RhbmNlKHN5c3RlbSk7XG4gIH07XG5cblxuICAvKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmb3IgdGhlIFN5c3RlbSB0eXBlIHRvIGEgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0eXBlLlxuICAgKiBUaGUgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgdW50aWwgaXQgaXMgZmlyc3QgcmVxdWVzdGVkLiBUaGUgdHlwZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgICogYXMgb3IgZXh0ZW5kIHRoZSB0eXBlIGZvciB0aGlzIG1hcHBpbmcuIEEgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIgaXMgdXNlZCBmb3JcbiAgICogdGhlIG1hcHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgaW5zdGFuY2UgdG8gYmUgY3JlYXRlZC4gSWYgb21pdHRlZCwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIG1hcHBpbmcgaXMgdXNlZC5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkXG4gICAqL1xuXG4gIFN0YXRlU3lzdGVtTWFwcGluZy5wcm90b3R5cGUuYWRkU2luZ2xldG9uID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZFNpbmdsZXRvbih0eXBlKTtcbiAgfTtcblxuXG4gIC8qXG4gICAqIENyZWF0ZXMgYSBtYXBwaW5nIGZvciB0aGUgU3lzdGVtIHR5cGUgdG8gYSBtZXRob2QgY2FsbC5cbiAgICogVGhlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGEgU3lzdGVtIGluc3RhbmNlLiBBIER5bmFtaWNTeXN0ZW1Qcm92aWRlciBpcyB1c2VkIGZvclxuICAgKiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBUaGUgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIFN5c3RlbSBpbnN0YW5jZS5cbiAgICogQHJldHVybiBUaGlzIFN0YXRlU3lzdGVtTWFwcGluZywgc28gbW9yZSBtb2RpZmljYXRpb25zIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cblxuICBTdGF0ZVN5c3RlbU1hcHBpbmcucHJvdG90eXBlLmFkZE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBjcmVhdGluZ1N0YXRlLmFkZE1ldGhvZChtZXRob2QpO1xuICB9O1xuXG5cbiAgLypcbiAgICogTWFwcyB0aHJvdWdoIHRvIHRoZSBhZGRQcm92aWRlciBtZXRob2Qgb2YgdGhlIFN5c3RlbVN0YXRlIHRoYXQgdGhpcyBtYXBwaW5nIGJlbG9uZ3MgdG9cbiAgICogc28gdGhhdCBhIGZsdWVudCBpbnRlcmZhY2UgY2FuIGJlIHVzZWQgd2hlbiBjb25maWd1cmluZyBlbnRpdHkgc3RhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgVGhlIGNvbXBvbmVudCBwcm92aWRlciB0byB1c2UuXG4gICAqIEByZXR1cm4gVGhpcyBTdGF0ZVN5c3RlbU1hcHBpbmcsIHNvIG1vcmUgbW9kaWZpY2F0aW9ucyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG5cbiAgU3RhdGVTeXN0ZW1NYXBwaW5nLnByb3RvdHlwZS5hZGRQcm92aWRlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIGNyZWF0aW5nU3RhdGUuYWRkUHJvdmlkZXIocHJvdmlkZXIpO1xuICB9O1xuXG5cbiAgLypcbiAgICovXG5cbiAgcmV0dXJuIFN0YXRlU3lzdGVtTWFwcGluZztcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGVfc3lzdGVtX21hcHBpbmcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gVGhlIHN5c3RlbVxuICogaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlciBhdCBpbml0aWFsaXNhdGlvbi5cbiAqL1xuXG5hc2guZnNtLlN5c3RlbUluc3RhbmNlUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIucHJvdG90eXBlLmluc3RhbmNlID0gbnVsbDtcblxuICBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5zeXN0ZW1Qcmlvcml0eSA9IDA7XG5cblxuICAvKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIHRvIHJldHVybiB3aGVuZXZlciBhIFN5c3RlbSBpcyByZXF1ZXN0ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN5c3RlbUluc3RhbmNlUHJvdmlkZXIoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuXG4gIC8qXG4gICAqIFVzZWQgdG8gcmVxdWVzdCBhIGNvbXBvbmVudCBmcm9tIHRoaXMgcHJvdmlkZXJcbiAgICpcbiAgICogQHJldHVybiBUaGUgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbVxuICAgKi9cblxuICBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyLnByb3RvdHlwZSwge1xuXG4gICAgLypcbiAgICAgKiBVc2VkIHRvIGNvbXBhcmUgdGhpcyBwcm92aWRlciB3aXRoIG90aGVycy4gQW55IHByb3ZpZGVyIHRoYXQgcmV0dXJucyB0aGUgc2FtZSBjb21wb25lbnRcbiAgICAgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTeXN0ZW1JbnN0YW5jZVByb3ZpZGVyO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeXN0ZW1faW5zdGFuY2VfcHJvdmlkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuXG4vKlxuICogVGhpcyBTeXN0ZW0gcHJvdmlkZXIgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbS4gVGhlIGluc3RhbmNlXG4gKiBpcyBjcmVhdGVkIHdoZW4gZmlyc3QgcmVxdWlyZWQgYW5kIGlzIG9mIHRoZSB0eXBlIHBhc3NlZCBpbiB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cblxuYXNoLmZzbS5TeXN0ZW1TaW5nbGV0b25Qcm92aWRlciA9IChmdW5jdGlvbigpIHtcbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuXG4gIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyLnByb3RvdHlwZS5pbnN0YW5jZSA9IG51bGw7XG5cbiAgU3lzdGVtU2luZ2xldG9uUHJvdmlkZXIucHJvdG90eXBlLnN5c3RlbVByaW9yaXR5ID0gMDtcblxuXG4gIC8qXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzaW5nbGUgU3lzdGVtIGluc3RhbmNlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFN5c3RlbVNpbmdsZXRvblByb3ZpZGVyKHR5cGUpIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSB0eXBlO1xuICB9XG5cblxuICAvKlxuICAgKiBVc2VkIHRvIHJlcXVlc3QgYSBTeXN0ZW0gZnJvbSB0aGlzIHByb3ZpZGVyXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgKi9cblxuICBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUuZ2V0U3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IHRoaXMuY29tcG9uZW50VHlwZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTeXN0ZW1TaW5nbGV0b25Qcm92aWRlci5wcm90b3R5cGUsIHtcblxuICAgIC8qXG4gICAgXHRcdCAqIFVzZWQgdG8gY29tcGFyZSB0aGlzIHByb3ZpZGVyIHdpdGggb3RoZXJzLiBBbnkgcHJvdmlkZXIgdGhhdCByZXR1cm5zIHRoZSBzYW1lIHNpbmdsZVxuICAgIFx0XHQgKiBpbnN0YW5jZSB3aWxsIGJlIHJlZ2FyZGVkIGFzIGVxdWl2YWxlbnQuXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEByZXR1cm4gVGhlIHNpbmdsZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlkZW50aWZpZXI6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN5c3RlbSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIFRoZSBwcmlvcml0eSBhdCB3aGljaCB0aGUgU3lzdGVtIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgRW5naW5lXG4gICAgICovXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbVByaW9yaXR5O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtUHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTeXN0ZW1TaW5nbGV0b25Qcm92aWRlcjtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3lzdGVtX3NpbmdsZXRvbl9wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5cbi8qXG4gKiBBIG5vZGUgaW4gdGhlIGxpc3Qgb2YgbGlzdGVuZXJzIGluIGEgc2lnbmFsLlxuICovXG5cbmFzaC5zaWduYWxzLkxpc3RlbmVyTm9kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGlzdGVuZXJOb2RlKCkge31cblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLnByZXZpb3VzID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGUucHJvdG90eXBlLm5leHQgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUubGlzdGVuZXIgPSBudWxsO1xuXG4gIExpc3RlbmVyTm9kZS5wcm90b3R5cGUub25jZSA9IGZhbHNlO1xuXG4gIHJldHVybiBMaXN0ZW5lck5vZGU7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RlbmVyX25vZGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG52YXIgTGlzdGVuZXJOb2RlLCBhc2g7XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5MaXN0ZW5lck5vZGUgPSBhc2guc2lnbmFscy5MaXN0ZW5lck5vZGU7XG5cblxuLypcbiAqIFRoaXMgaW50ZXJuYWwgY2xhc3MgbWFpbnRhaW5zIGEgcG9vbCBvZiBkZWxldGVkIGxpc3RlbmVyIG5vZGVzIGZvciByZXVzZSBieSBmcmFtZXdvcmsuIFRoaXMgcmVkdWNlc1xuICogdGhlIG92ZXJoZWFkIGZyb20gb2JqZWN0IGNyZWF0aW9uIGFuZCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gKi9cblxuYXNoLnNpZ25hbHMuTGlzdGVuZXJOb2RlUG9vbCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGlzdGVuZXJOb2RlUG9vbCgpIHt9XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUudGFpbCA9IG51bGw7XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuY2FjaGVUYWlsID0gbnVsbDtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgbm9kZS5wcmV2aW91cyA9IG51bGw7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBMaXN0ZW5lck5vZGUoKTtcbiAgICB9XG4gIH07XG5cbiAgTGlzdGVuZXJOb2RlUG9vbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBub2RlLmxpc3RlbmVyID0gbnVsbDtcbiAgICBub2RlLm9uY2UgPSBmYWxzZTtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy50YWlsID0gbm9kZTtcbiAgfTtcblxuICBMaXN0ZW5lck5vZGVQb29sLnByb3RvdHlwZS5jYWNoZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBub2RlLmxpc3RlbmVyID0gbnVsbDtcbiAgICBub2RlLnByZXZpb3VzID0gdGhpcy5jYWNoZVRhaWw7XG4gICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlO1xuICB9O1xuXG4gIExpc3RlbmVyTm9kZVBvb2wucHJvdG90eXBlLnJlbGVhc2VDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmNhY2hlVGFpbCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHRoaXMuY2FjaGVUYWlsO1xuICAgICAgdGhpcy5jYWNoZVRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGlzdGVuZXJOb2RlUG9vbDtcblxufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdGVuZXJfbm9kZV9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDAsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMCgpIHtcbiAgICByZXR1cm4gU2lnbmFsMC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDAucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5zdGFydERpc3BhdGNoKCk7XG4gICAgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5saXN0ZW5lcigpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDA7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFzaCxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuYXNoLnNpZ25hbHMuU2lnbmFsMSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKFNpZ25hbDEsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gU2lnbmFsMSgpIHtcbiAgICByZXR1cm4gU2lnbmFsMS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFNpZ25hbDEucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24oJDEpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCQxKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwxO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwyLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDIoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCQxLCAkMikge1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMuc3RhcnREaXNwYXRjaCgpO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGUubGlzdGVuZXIoJDEsICQyKTtcbiAgICAgIGlmIChub2RlLm9uY2UpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUobm9kZS5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmREaXNwYXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWwyO1xuXG59KShhc2guc2lnbmFscy5TaWduYWxCYXNlKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFsMi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhc2gsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbmFzaC5zaWduYWxzLlNpZ25hbDMgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhTaWduYWwzLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbDMoKSB7XG4gICAgcmV0dXJuIFNpZ25hbDMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBTaWduYWwzLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKCQxLCAkMiwgJDMpIHtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnN0YXJ0RGlzcGF0Y2goKTtcbiAgICBub2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLmxpc3RlbmVyKCQxLCAkMiwgJDMpO1xuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShub2RlLmxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuZERpc3BhdGNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpZ25hbDM7XG5cbn0pKGFzaC5zaWduYWxzLlNpZ25hbEJhc2UpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWwzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExpc3RlbmVyTm9kZVBvb2wsIGFzaDtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cbkxpc3RlbmVyTm9kZVBvb2wgPSBhc2guc2lnbmFscy5MaXN0ZW5lck5vZGVQb29sO1xuXG5hc2guc2lnbmFscy5TaWduYWxCYXNlID0gKGZ1bmN0aW9uKCkge1xuICBTaWduYWxCYXNlLnByb3RvdHlwZS5oZWFkID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS50YWlsID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5udW1MaXN0ZW5lcnMgPSAwO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmxpc3RlbmVyTm9kZVBvb2wgPSBudWxsO1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnRvQWRkSGVhZCA9IG51bGw7XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUudG9BZGRUYWlsID0gbnVsbDtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5kaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIFNpZ25hbEJhc2UoKSB7XG4gICAgdGhpcy5saXN0ZW5lck5vZGVQb29sID0gbmV3IExpc3RlbmVyTm9kZVBvb2woKTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IDA7XG4gIH1cblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5zdGFydERpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgU2lnbmFsQmFzZS5wcm90b3R5cGUuZW5kRGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9BZGRIZWFkICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudG9BZGRIZWFkO1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRvQWRkVGFpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICAgIHRoaXMudG9BZGRIZWFkLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRvQWRkVGFpbDtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9BZGRIZWFkID0gbnVsbDtcbiAgICAgIHRoaXMudG9BZGRUYWlsID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW5lck5vZGVQb29sLnJlbGVhc2VDYWNoZSgpO1xuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfVxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gdGhpcy50b0FkZEhlYWQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5ub2RlRXhpc3RzID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlKGxpc3RlbmVyKSAhPT0gbnVsbDtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLm5vZGVFeGlzdHMobGlzdGVuZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUgPSB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZ2V0KCk7XG4gICAgbm9kZS5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGRPbmNlID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAodGhpcy5ub2RlRXhpc3RzKGxpc3RlbmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gdGhpcy5saXN0ZW5lck5vZGVQb29sLmdldCgpO1xuICAgIG5vZGUubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICBub2RlLm9uY2UgPSB0cnVlO1xuICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICBpZiAodGhpcy50b0FkZEhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQgPSB0aGlzLnRvQWRkVGFpbCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvQWRkVGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudG9BZGRUYWlsO1xuICAgICAgICB0aGlzLnRvQWRkVGFpbCA9IG5vZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgfTtcblxuICBTaWduYWxCYXNlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIHZhciBub2RlO1xuICAgIG5vZGUgPSB0aGlzLmdldE5vZGUobGlzdGVuZXIpO1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oZWFkID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFpbCA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b0FkZEhlYWQgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy50b0FkZEhlYWQgPSB0aGlzLnRvQWRkSGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9BZGRUYWlsID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMudG9BZGRUYWlsID0gdGhpcy50b0FkZFRhaWwucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlLnByZXZpb3VzLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2aW91cyA9IG5vZGUucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNwYXRjaGluZykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuY2FjaGUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RlbmVyTm9kZVBvb2wuZGlzcG9zZShub2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgfVxuICB9O1xuXG4gIFNpZ25hbEJhc2UucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICh0aGlzLmhlYWQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHRoaXMubGlzdGVuZXJOb2RlUG9vbC5kaXNwb3NlKG5vZGUpO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMudG9BZGRIZWFkID0gbnVsbDtcbiAgICB0aGlzLnRvQWRkVGFpbCA9IG51bGw7XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTaWduYWxCYXNlO1xuXG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduYWxfYmFzZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBTaWduYWwxLCBhc2gsXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuYXNoID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliJyk7XG5cblNpZ25hbDEgPSBhc2guc2lnbmFscy5TaWduYWwxO1xuXG5cbi8qXG4gKiBVc2VzIHRoZSBlbnRlciBmcmFtZSBldmVudCB0byBwcm92aWRlIGEgZnJhbWUgdGljayB3aGVyZSB0aGUgZnJhbWUgZHVyYXRpb24gaXMgdGhlIHRpbWUgc2luY2UgdGhlIHByZXZpb3VzIGZyYW1lLlxuICogVGhlcmUgaXMgYSBtYXhpbXVtIGZyYW1lIHRpbWUgcGFyYW1ldGVyIGluIHRoZSBjb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIGxpbWl0XG4gKiB0aGUgbG9uZ2VzdCBwZXJpb2QgYSBmcmFtZSBjYW4gYmUuXG4gKi9cblxuYXNoLnRpY2suRnJhbWVUaWNrUHJvdmlkZXIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhGcmFtZVRpY2tQcm92aWRlciwgX3N1cGVyKTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuZGlzcGxheU9iamVjdCA9IG51bGw7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnByZXZpb3VzVGltZSA9IDA7XG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLm1heGltdW1GcmFtZVRpbWUgPSAwO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5pc1BsYXlpbmcgPSBmYWxzZTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUucmVxdWVzdCA9IG51bGw7XG5cblxuICAvKlxuICAgKiBBcHBsaWVzIGEgdGltZSBhZGp1c3RlbWVudCBmYWN0b3IgdG8gdGhlIHRpY2ssIHNvIHlvdSBjYW4gc2xvdyBkb3duIG9yIHNwZWVkIHVwIHRoZSBlbnRpcmUgZW5naW5lLlxuICAgKiBUaGUgdXBkYXRlIHRpY2sgdGltZSBpcyBtdWx0aXBsaWVkIGJ5IHRoaXMgdmFsdWUsIHNvIGEgdmFsdWUgb2YgMSB3aWxsIHJ1biB0aGUgZW5naW5lIGF0IHRoZSBub3JtYWwgcmF0ZS5cbiAgICovXG5cbiAgRnJhbWVUaWNrUHJvdmlkZXIucHJvdG90eXBlLnRpbWVBZGp1c3RtZW50ID0gMTtcblxuICBmdW5jdGlvbiBGcmFtZVRpY2tQcm92aWRlcihkaXNwbGF5T2JqZWN0LCBtYXhpbXVtRnJhbWVUaW1lKSB7XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0ID0gZGlzcGxheU9iamVjdDtcbiAgICB0aGlzLm1heGltdW1GcmFtZVRpbWUgPSBtYXhpbXVtRnJhbWVUaW1lO1xuICAgIHRoaXMuZGlzcGF0Y2hUaWNrID0gX19iaW5kKHRoaXMuZGlzcGF0Y2hUaWNrLCB0aGlzKTtcbiAgICBGcmFtZVRpY2tQcm92aWRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgIHBsYXlpbmc6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUGxheWluZztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRpc3BhdGNoVGljayk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICB9O1xuXG4gIEZyYW1lVGlja1Byb3ZpZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdCk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgfTtcblxuICBGcmFtZVRpY2tQcm92aWRlci5wcm90b3R5cGUuZGlzcGF0Y2hUaWNrID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgdmFyIGZyYW1lVGltZSwgdGVtcDtcbiAgICBpZiAodGltZXN0YW1wID09IG51bGwpIHtcbiAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMuZGlzcGxheU9iamVjdC5iZWdpbigpO1xuICAgIH1cbiAgICB0ZW1wID0gdGhpcy5wcmV2aW91c1RpbWUgfHwgdGltZXN0YW1wO1xuICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGltZXN0YW1wO1xuICAgIGZyYW1lVGltZSA9ICh0aW1lc3RhbXAgLSB0ZW1wKSAqIDAuMDAxO1xuICAgIHRoaXMuZGlzcGF0Y2goZnJhbWVUaW1lKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kaXNwYXRjaFRpY2spO1xuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMuZGlzcGxheU9iamVjdC5lbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZyYW1lVGlja1Byb3ZpZGVyO1xuXG59KShTaWduYWwxKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJhbWVfdGlja19wcm92aWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEaWN0aW9uYXJ5LCBhc2gsXG4gIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG5hc2ggPSByZXF1aXJlKCcuLi8uLi8uLi9saWInKTtcblxuRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHt9XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG5cblxuLypcbiAqIEFuIG9iamVjdCBwb29sIGZvciByZS11c2luZyBjb21wb25lbnRzLiBUaGlzIGlzIG5vdCBpbnRlZ3JhdGVkIGluIHRvIEFzaCBidXQgaXMgdXNlZCBkaWVyZWN0bHkgYnlcbiAqIHRoZSBkZXZlbG9wZXIuIEl0IGV4cGVjdHMgY29tcG9uZW50cyB0byBub3QgcmVxdWlyZSBhbnkgcGFyYW1ldGVycyBpbiB0aGVpciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiA8cD5GZXRjaCBhbiBvYmplY3QgZnJvbSB0aGUgcG9vbCB3aXRoPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZ2V0KCBDb21wb25lbnRDbGFzcyApOzwvcD5cbiAqXG4gKiA8cD5JZiB0aGUgcG9vbCBjb250YWlucyBhbiBvYmplY3Qgb2YgdGhlIHJlcXVpcmVkIHR5cGUsIGl0IHdpbGwgYmUgcmV0dXJuZWQuIElmIGl0IGRvZXMgbm90LCBhIG5ldyBvYmplY3RcbiAqIHdpbGwgYmUgY3JlYXRlZCBhbmQgcmV0dXJuZWQuPC9wPlxuICpcbiAqIDxwPlRoZSBvYmplY3QgcmV0dXJuZWQgbWF5IGhhdmUgcHJvcGVydGllcyBzZXQgb24gaXQgZnJvbSB0aGUgdGltZSBpdCB3YXMgcHJldmlvdXNseSB1c2VkLCBzbyBhbGwgcHJvcGVydGllc1xuICogc2hvdWxkIGJlIHJlc2V0IGluIHRoZSBvYmplY3Qgb25jZSBpdCBpcyByZWNlaXZlZC48L3A+XG4gKlxuICogPHA+QWRkIGFuIG9iamVjdCB0byB0aGUgcG9vbCB3aXRoPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZGlzcG9zZSggY29tcG9uZW50ICk7PC9wPlxuICpcbiAqIDxwPllvdSB3aWxsIHVzdWFsbHkgd2FudCB0byBkbyB0aGlzIHdoZW4gcmVtb3ZpbmcgYSBjb21wb25lbnQgZnJvbSBhbiBlbnRpdHkuIFRoZSByZW1vdmUgbWV0aG9kIG9uIHRoZSBlbnRpdHlcbiAqIHJldHVybnMgdGhlIGNvbXBvbmVudCB0aGF0IHdhcyByZW1vdmVkLCBzbyB0aGlzIGNhbiBiZSBkb25lIGluIG9uZSBsaW5lIG9mIGNvZGUgbGlrZSB0aGlzPC9wPlxuICpcbiAqIDxwPkNvbXBvbmVudFBvb2wuZGlzcG9zZSggZW50aXR5LnJlbW92ZSggY29tcG9uZW50ICkgKTs8L3A+XG4gKi9cblxuYXNoLnRvb2xzLkNvbXBvbmVudFBvb2wgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBnZXRQb29sLCBwb29scztcblxuICBmdW5jdGlvbiBDb21wb25lbnRQb29sKCkge31cblxuICBwb29scyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG5cbiAgZ2V0UG9vbCA9IGZ1bmN0aW9uKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKChfcmVmID0gY29tcG9uZW50Q2xhc3MubmFtZSwgX19pbmRleE9mLmNhbGwocG9vbHMsIF9yZWYpID49IDApKSB7XG4gICAgICByZXR1cm4gcG9vbHNbY29tcG9uZW50Q2xhc3MubmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwb29sc1tjb21wb25lbnRDbGFzcy5uYW1lXSA9IFtdO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIEdldCBhbiBvYmplY3QgZnJvbSB0aGUgcG9vbC5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzIFRoZSB0eXBlIG9mIGNvbXBvbmVudCB3YW50ZWQuXG4gICAqIEByZXR1cm4gVGhlIGNvbXBvbmVudC5cbiAgICovXG5cbiAgQ29tcG9uZW50UG9vbC5nZXQgPSBmdW5jdGlvbihjb21wb25lbnRDbGFzcykge1xuICAgIHZhciBwb29sO1xuICAgIHBvb2wgPSBnZXRQb29sKGNvbXBvbmVudENsYXNzKTtcbiAgICBpZiAocG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcG9vbC5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBjb21wb25lbnRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qXG4gICAqIFJldHVybiBhbiBvYmplY3QgdG8gdGhlIHBvb2wgZm9yIHJldXNlLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmV0dXJuIHRvIHRoZSBwb29sLlxuICAgKi9cblxuICBDb21wb25lbnRQb29sLmRpc3Bvc2UgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICB2YXIgcG9vbCwgdHlwZTtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICB0eXBlID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgICAgcG9vbCA9IGdldFBvb2wodHlwZSk7XG4gICAgICBwb29sLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG4gIH07XG5cblxuICAvKlxuICAgKiBEaXNwb3NlIG9mIGFsbCBwb29sZWQgcmVzb3VyY2VzLCBmcmVlaW5nIHRoZW0gZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICovXG5cbiAgQ29tcG9uZW50UG9vbC5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb29scyA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvbmVudFBvb2w7XG5cbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudF9wb29sLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEVuZ2luZSwgTm9kZSwgTm9kZUxpc3QsIFN5c3RlbSwgYXNoLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbmFzaCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYicpO1xuXG5FbmdpbmUgPSBhc2guY29yZS5FbmdpbmU7XG5cbk5vZGUgPSBhc2guY29yZS5Ob2RlO1xuXG5Ob2RlTGlzdCA9IGFzaC5jb3JlLk5vZGVMaXN0O1xuXG5TeXN0ZW0gPSBhc2guY29yZS5TeXN0ZW07XG5cblxuLypcbiAqIEEgdXNlZnVsIGNsYXNzIGZvciBzeXN0ZW1zIHdoaWNoIHNpbXBseSBpdGVyYXRlIG92ZXIgYSBzZXQgb2Ygbm9kZXMsIHBlcmZvcm1pbmcgdGhlIHNhbWUgYWN0aW9uIG9uIGVhY2ggbm9kZS4gVGhpc1xuICogY2xhc3MgcmVtb3ZlcyB0aGUgbmVlZCBmb3IgYSBsb3Qgb2YgYm9pbGVycGxhdGUgY29kZSBpbiBzdWNoIHN5c3RlbXMuIEV4dGVuZCB0aGlzIGNsYXNzIGFuZCBwYXNzIHRoZSBub2RlIHR5cGUgYW5kXG4gKiBhIG5vZGUgdXBkYXRlIG1ldGhvZCBpbnRvIHRoZSBjb25zdHJ1Y3Rvci4gVGhlIG5vZGUgdXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvbmNlIHBlciBub2RlIG9uIHRoZSB1cGRhdGUgY3ljbGVcbiAqIHdpdGggdGhlIG5vZGUgaW5zdGFuY2UgYW5kIHRoZSBmcmFtZSB0aW1lIGFzIHBhcmFtZXRlcnMuIGUuZy5cbiAqXG4gKiA8Y29kZT5wYWNrYWdlO1xuICogY2xhc3MgTXlTeXN0ZW0gZXh0ZW5kcyBMaXN0SXRlcmF0aW5nU3lzdGVtPE15Tm9kZT5cbiAqIHtcbiAqICAgICBwdWJsaWMgZnVuY3Rpb24gbmV3KClcbiAqICAgICB7XG4gKiAgICAgICAgIHN1cGVyKE15Tm9kZSwgdXBkYXRlTm9kZSk7XG4gKiAgICAgfVxuICpcbiAqICAgICBwcml2YXRlIGZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZTpNeU5vZGUsIHRpbWU6RmxvYXQpOlZvaWRcbiAqICAgICB7XG4gKiAgICAgICAgIC8vIHByb2Nlc3MgdGhlIG5vZGUgaGVyZVxuICogICAgIH1cbiAqIH1cbiAqIDwvY29kZT5cbiAqL1xuXG5hc2gudG9vbHMuTGlzdEl0ZXJhdGluZ1N5c3RlbSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgX19leHRlbmRzKExpc3RJdGVyYXRpbmdTeXN0ZW0sIF9zdXBlcik7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZUxpc3QgPSBudWxsO1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLm5vZGVDbGFzcyA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZVVwZGF0ZUZ1bmN0aW9uID0gbnVsbDtcblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5ub2RlQWRkZWRGdW5jdGlvbiA9IG51bGw7XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUubm9kZVJlbW92ZWRGdW5jdGlvbiA9IG51bGw7XG5cbiAgZnVuY3Rpb24gTGlzdEl0ZXJhdGluZ1N5c3RlbShub2RlQ2xhc3MsIG5vZGVVcGRhdGVGdW5jdGlvbiwgbm9kZUFkZGVkRnVuY3Rpb24sIG5vZGVSZW1vdmVkRnVuY3Rpb24pIHtcbiAgICBpZiAobm9kZUFkZGVkRnVuY3Rpb24gPT0gbnVsbCkge1xuICAgICAgbm9kZUFkZGVkRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAobm9kZVJlbW92ZWRGdW5jdGlvbiA9PSBudWxsKSB7XG4gICAgICBub2RlUmVtb3ZlZEZ1bmN0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5ub2RlQ2xhc3MgPSBub2RlQ2xhc3M7XG4gICAgdGhpcy5ub2RlVXBkYXRlRnVuY3Rpb24gPSBub2RlVXBkYXRlRnVuY3Rpb247XG4gICAgdGhpcy5ub2RlQWRkZWRGdW5jdGlvbiA9IG5vZGVBZGRlZEZ1bmN0aW9uO1xuICAgIHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiA9IG5vZGVSZW1vdmVkRnVuY3Rpb247XG4gIH1cblxuICBMaXN0SXRlcmF0aW5nU3lzdGVtLnByb3RvdHlwZS5hZGRUb0VuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIHRoaXMubm9kZUxpc3QgPSBlbmdpbmUuZ2V0Tm9kZUxpc3QodGhpcy5ub2RlQ2xhc3MpO1xuICAgIGlmICh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBub2RlID0gdGhpcy5ub2RlTGlzdC5oZWFkOyBub2RlOyBub2RlID0gbm9kZS5uZXh0KXtcbiAgICAgICAgdGhpcy5ub2RlQWRkZWRGdW5jdGlvbihub2RlKTtcbiAgICAgICAgfTtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZUFkZGVkLmFkZCh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlTGlzdC5ub2RlUmVtb3ZlZC5hZGQodGhpcy5ub2RlUmVtb3ZlZEZ1bmN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgTGlzdEl0ZXJhdGluZ1N5c3RlbS5wcm90b3R5cGUucmVtb3ZlRnJvbUVuZ2luZSA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIGlmICh0aGlzLm5vZGVBZGRlZEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGVMaXN0Lm5vZGVBZGRlZC5yZW1vdmUodGhpcy5ub2RlQWRkZWRGdW5jdGlvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vZGVSZW1vdmVkRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZUxpc3Qubm9kZVJlbW92ZWQucmVtb3ZlKHRoaXMubm9kZVJlbW92ZWRGdW5jdGlvbik7XG4gICAgfVxuICAgIHRoaXMubm9kZUxpc3QgPSBudWxsO1xuICB9O1xuXG4gIExpc3RJdGVyYXRpbmdTeXN0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBmb3IgKHZhciBub2RlID0gdGhpcy5ub2RlTGlzdC5oZWFkOyBub2RlOyBub2RlID0gbm9kZS5uZXh0KXtcbiAgICAgICAgdGhpcy5ub2RlVXBkYXRlRnVuY3Rpb24obm9kZSwgdGltZSlcbiAgICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIExpc3RJdGVyYXRpbmdTeXN0ZW07XG5cbn0pKFN5c3RlbSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RfaXRlcmF0aW5nX3N5c3RlbS5qcy5tYXBcbiIsIlxuLypcblxuICAgXyAgICAgICBfXG4gIC9fXFwgIF9fX3wgfF9fXG4gLy9fXFxcXC8gX198ICdfIFxcXG4vICBfICBcXF9fIFxcIHwgfCB8XG5cXF8vIFxcXy9fX18vX3wgfF98XG5cbiAgICAgICAgICAgICAgX18gIF9fXG4gICAgX19fIF9fXyAgLyBffC8gX3wgX19fICBfX19cbiAgIC8gX18vIF8gXFx8IHxffCB8XyAvIF8gXFwvIF8gXFxcbiAgfCAoX3wgKF8pIHwgIF98ICBffCAgX18vICBfXy9cbiAoXylfX19cXF9fXy98X3wgfF98ICBcXF9fX3xcXF9fX3xcblxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ1Y2UgRGF2aWRzb24gJmx0O2RhcmtvdmVybG9yZG9mZGF0YUBnbWFpbC5jb20mZ3Q7XG5cbkF1dGhvcjogUmljaGFyZCBMb3JkXG5Db3B5cmlnaHQgKGMpIFJpY2hhcmQgTG9yZCAyMDExLTIwMTJcbmh0dHA6Ly93d3cucmljaGFyZGxvcmQubmV0XG5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbidTb2Z0d2FyZScpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgYXNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzaCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYXNoKCkge31cblxuICByZXR1cm4gYXNoO1xuXG59KSgpO1xuXG5hc2guc2lnbmFscyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2lnbmFscygpIHt9XG5cbiAgcmV0dXJuIHNpZ25hbHM7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvbGlzdGVuZXJfbm9kZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL2xpc3RlbmVyX25vZGVfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbF9iYXNlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMCcpO1xuXG5yZXF1aXJlKCcuL2FzaC9zaWduYWxzL3NpZ25hbDEnKTtcblxucmVxdWlyZSgnLi9hc2gvc2lnbmFscy9zaWduYWwyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL3NpZ25hbHMvc2lnbmFsMycpO1xuXG5hc2guY29yZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY29yZSgpIHt9XG5cbiAgcmV0dXJuIGNvcmU7XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW50aXR5X2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9ub2RlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9saXN0Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvbm9kZV9wb29sJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvc3lzdGVtX2xpc3QnKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9mYW1pbHknKTtcblxucmVxdWlyZSgnLi9hc2gvY29yZS9jb21wb25lbnRfbWF0Y2hpbmdfZmFtaWx5Jyk7XG5cbnJlcXVpcmUoJy4vYXNoL2NvcmUvZW5naW5lJyk7XG5cbmFzaC5mc20gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGZzbSgpIHt9XG5cbiAgcmV0dXJuIGZzbTtcblxufSkoKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2NvbXBvbmVudF9pbnN0YW5jZV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3NpbmdsZXRvbl9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vY29tcG9uZW50X3R5cGVfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL2R5bmFtaWNfY29tcG9uZW50X3Byb3ZpZGVyJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9keW5hbWljX3N5c3RlbV9wcm92aWRlcicpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW5naW5lX3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbmdpbmVfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vZW50aXR5X3N0YXRlJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9lbnRpdHlfc3RhdGVfbWFjaGluZScpO1xuXG5yZXF1aXJlKCcuL2FzaC9mc20vc3RhdGVfY29tcG9uZW50X21hcHBpbmcnKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N0YXRlX3N5c3RlbV9tYXBwaW5nJyk7XG5cbnJlcXVpcmUoJy4vYXNoL2ZzbS9zeXN0ZW1faW5zdGFuY2VfcHJvdmlkZXInKTtcblxucmVxdWlyZSgnLi9hc2gvZnNtL3N5c3RlbV9zaW5nbGV0b25fcHJvdmlkZXInKTtcblxuYXNoLnRpY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRpY2soKSB7fVxuXG4gIHJldHVybiB0aWNrO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90aWNrL2ZyYW1lX3RpY2tfcHJvdmlkZXInKTtcblxuYXNoLnRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB0b29scygpIHt9XG5cbiAgcmV0dXJuIHRvb2xzO1xuXG59KSgpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9jb21wb25lbnRfcG9vbCcpO1xuXG5yZXF1aXJlKCcuL2FzaC90b29scy9saXN0X2l0ZXJhdGluZ19zeXN0ZW0nKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXX0=
