var ash;
ash = ash || {};
ash.core = ash.core || {};
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
'use strict';
var Dictionary, Signal2, Util;

Signal2 = ash.signals.Signal2;

Dictionary = ash.ext.Dictionary;

Util = ash.ext.Util;

ash.core.Entity = (function() {
  var nameCount;

  Entity.nameCount = {};

  nameCount = 0;


  /**
   * Optional, give the entity a name. This can help with debugging and with serialising the entity.
   *
   * @type {string}
   */

  Entity.prototype._name = '';


  /**
   * This signal is dispatched when a component is added to the entity.
   * 
   * @type {ash.signals.Signal2}
   */

  Entity.prototype.componentAdded = null;


  /**
   * This signal is dispatched when a component is removed from the entity.
   * 
   * @type {ash.signals.Signal2}
   */

  Entity.prototype.componentRemoved = null;


  /**
   * Dispatched when the name of the entity changes. Used internally by the engine to track entities based on their names.
   * 
   * @type {ash.signals.Signal2}
   */

  Entity.prototype.nameChanged = null;

  Entity.prototype.previous = null;

  Entity.prototype.next = null;

  Entity.prototype.components = null;


  /**
   * @constructor
   * @param {string} name Entity name
   */

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
      if (Entity.nameCount[name] == null) {
        Entity.nameCount[name] = 0;
      }
      this._name = name + (++Entity.nameCount[name]);
    } else {
      this._name = "_entity" + (++nameCount);
    }
  }


  /**
   * Add a component to the entity.
   *
   * @param {Object} component The component object to add.
   * @param {Object} componentClass The class of the component. This is only necessary if the component
   * extends another component class and you want the framework to treat the component as of
   * the base class type. If not set, the class type is determined directly from the component.
   *
   * @return {ash.core.Entity} A reference to the entity. This enables the chaining of calls to add, to make
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
    if (Util.getClassName(componentClass) in this.components) {
      this.remove(componentClass);
    }
    this.components[Util.getClassName(componentClass)] = component;
    this.componentAdded.dispatch(this, componentClass);
    return this;
  };


  /**
   * Remove a component from the entity.
   *
   * @param {Object} componentClass The class of the component to be removed.
   * @return {Object} the component, or null if the component doesn't exist in the entity
   */

  Entity.prototype.remove = function(componentClass) {
    var component, name;
    name = Util.getClassName(componentClass) != null ? Util.getClassName(componentClass) : componentClass;
    component = this.components[name];
    if (component) {
      delete this.components[name];
      this.componentRemoved.dispatch(this, name);
      return component;
    }
    return null;
  };


  /**
   * Get a component from the entity.
   *
   * @param {Object} componentClass The class of the component requested.
   * @return {Object} The component, or null if none was found.
   */

  Entity.prototype.get = function(componentClass) {
    return this.components[Util.getClassName(componentClass)];
  };


  /**
   * Get all components from the entity.
   *
   * @return {Array<Object>} An array containing all the components that are on the entity.
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


  /**
   * Does the entity have a component of a particular type.
   *
   * @param {Object} componentClass The class of the component sought.
   * @return {boolean} true if the entity has a component of the type, false if not.
   */

  Entity.prototype.has = function(componentClass) {
    return Util.getClassName(componentClass) in this.components;
  };

  return Entity;

})();
