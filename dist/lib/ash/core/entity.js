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
    name = componentClass.name != null ? componentClass.name : componentClass;
    component = this.components[name];
    if (component) {
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
