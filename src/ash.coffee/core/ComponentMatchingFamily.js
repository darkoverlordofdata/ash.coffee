// Generated by CoffeeScript 1.9.0

/*
 * The default class for managing a NodeList. This class creates the NodeList and adds and removes
 * nodes to/from the list as the entities and the components in the engine change.
 *
 * It uses the basic entity matching pattern of an entity system - entities are added to the list if
 * they contain components matching all the public properties of the node class.
 */

(function() {
  'use strict';
  var Dictionary, EntityList, NodeList, NodePool, Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  EntityList = ash.core.EntityList;

  Dictionary = ash.ext.Dictionary;

  NodeList = ash.core.NodeList;

  NodePool = ash.core.NodePool;

  Util = ash.ext.Util;

  ash.core.ComponentMatchingFamily = (function() {

    /**
     * The nodelist managed by this family. This is a reference that remains valid always
     * since it is retained and reused by Systems that use the list. i.e. we never recreate the list,
     * we always modify it in place.
     * @type {ash.core.NodeList}
     */
    ComponentMatchingFamily.prototype.nodes = null;


    /**
     * @type {ash.ext.Dictionary}
     */

    ComponentMatchingFamily.prototype.entities = null;


    /**
     * @type {Function}
     */

    ComponentMatchingFamily.prototype.nodeClass = null;


    /**
     * @type {ash.ext.Dictionary}
     */

    ComponentMatchingFamily.prototype.components = null;


    /**
     * @type {ash.core.NodePool}
     */

    ComponentMatchingFamily.prototype.nodePool = null;


    /**
     * @type {ash.core.Engine}
     */

    ComponentMatchingFamily.prototype.engine = null;


    /**
     * The constructor. Creates a ComponentMatchingFamily to provide a NodeList for the
     * given node class.
     *
     * @constructor
     * @implements {ash.core.Family}
     *
     * @param {Object} nodeClass The type of node to create and manage a NodeList for.
     * @param {ash.core.Engine} engine The engine that this family is managing teh NodeList for.
     */

    function ComponentMatchingFamily(_at_nodeClass, _at_engine) {
      this.nodeClass = _at_nodeClass;
      this.engine = _at_engine;
      this.releaseNodePoolCache = __bind(this.releaseNodePoolCache, this);
      this.init();
    }


    /**
     * Initialises the class. Creates the nodelist and other tools. Analyses the node to determine
     * what component types the node requires.
     * @private
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
        this.components[Util.getClassName(type)] = type;
      }
    };


    /**
     * Called by the engine when an entity has been added to it. We check if the entity should be in
     * this family's NodeList and add it if appropriate.
     *
     * @param {ash.core.Entity} entity that was added
     */

    ComponentMatchingFamily.prototype.newEntity = function(entity) {
      this.addIfMatch(entity);
    };


    /**
     * Called by the engine when a component has been added to an entity. We check if the entity is not in
     * this family's NodeList and should be, and add it if appropriate.
     *
     * @param {ash.core.Entity} entity with component that was added
     * @param {Object} componentClass that was added
     */

    ComponentMatchingFamily.prototype.componentAddedToEntity = function(entity, componentClass) {
      this.addIfMatch(entity);
    };


    /**
     * Called by the engine when a component has been removed from an entity. We check if the removed component
     * is required by this family's NodeList and if so, we check if the entity is in this this NodeList and
     * remove it if so.
     *
     * @param {ash.core.Entity} entity with component that was removed
     * @param {Object} componentClass that was removed
     */

    ComponentMatchingFamily.prototype.componentRemovedFromEntity = function(entity, componentClass) {
      var name;
      name = Util.getClassName(componentClass) != null ? Util.getClassName(componentClass) : componentClass;
      if (name in this.components) {
        this.removeIfMatch(entity);
      }
    };


    /**
     * Called by the engine when an entity has been rmoved from it. We check if the entity is in
     * this family's NodeList and remove it if so.
     *
     * @param {ash.core.Entity} entity to remove
     */

    ComponentMatchingFamily.prototype.removeEntity = function(entity) {
      this.removeIfMatch(entity);
    };


    /**
     * If the entity is not in this family's NodeList, tests the components of the entity to see
     * if it should be in this NodeList and adds it if so.
     *
     * @param {ash.core.Entity} entity to check
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


    /**
     * Removes the entity if it is in this family's NodeList.
     *
     * @param {ash.core.Entity} entity to check
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


    /**
     * Releases the nodes that were added to the node pool during this engine update, so they can
     * be reused.
     */

    ComponentMatchingFamily.prototype.releaseNodePoolCache = function() {
      this.engine.updateComplete.remove(this.releaseNodePoolCache);
      this.nodePool.releaseCache();
    };


    /**
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

}).call(this);

//# sourceMappingURL=ComponentMatchingFamily.js.map