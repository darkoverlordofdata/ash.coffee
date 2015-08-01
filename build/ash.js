// Generated by CoffeeScript 1.9.1

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

(function() {
  'use strict';
  var Dictionary, ash;

  ash = {
    signals: {},
    core: {},
    ext: {
      Dictionary: Dictionary = (function() {

        /*
         * Get Class Name
        
          closure compiler changes the class name, or sets it to ''
          In that case, add a static className property to all
          Nodes and Components so they can be identified.
         */
        function Dictionary() {}

        return Dictionary;

      })(),
      getClassName: function(klass) {
        var ref;
        return (ref = klass.className) != null ? ref : klass.name;
      }
    },
    fsm: {},
    tick: {},
    tools: {}
  };


  /*
   * Export ash
   */

  if ('function' === typeof define && (define.amd != null)) {
    define(function() {
      return ash;
    });
  } else {
    this['ash'] = ash;
  }

}).call(this);

//# sourceMappingURL=prolog.js.map

// Generated by CoffeeScript 1.9.1

/*
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
 *
 * This version is implemented as a Phaser Plugin. It uses the Phaser postRender cycle
 * to provide tick for the ash engine update.
 *
 * Use this version if the phaser update cycle clashes with Ash updates
 */

(function() {
  var PhaserEngine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (typeof Phaser !== "undefined" && Phaser !== null) {
    ash.ext.PhaserEngine = PhaserEngine = (function(superClass) {
      extend(PhaserEngine, superClass);

      PhaserEngine.prototype.entityNames = null;

      PhaserEngine.prototype.entityList = null;

      PhaserEngine.prototype.systemList = null;

      PhaserEngine.prototype.families = null;

      PhaserEngine.prototype.nodes = null;

      PhaserEngine.prototype.components = null;


      /*
       * Phaser.Plugin members
       */

      PhaserEngine.prototype.game = null;

      PhaserEngine.prototype.parent = null;

      PhaserEngine.prototype.active = true;

      PhaserEngine.prototype.visible = true;

      PhaserEngine.prototype.hasPostRender = true;


      /*
       * Indicates if the engine is currently in its update loop.
       */

      PhaserEngine.prototype.updating = false;


      /*
       * Dispatched when the update loop ends. If you want to add and remove systems from the
       * engine it is usually best not to do so during the update loop. To avoid this you can
       * listen for this signal and make the change when the signal is dispatched.
       */

      PhaserEngine.prototype.updateComplete = null;


      /*
       * The class used to manage node lists. In most cases the default class is sufficient
       * but it is exposed here so advanced developers can choose to create and use a
       * different implementation.
       *
       * The class must implement the IFamily interface.
       */

      PhaserEngine.prototype.familyClass = ComponentMatchingFamily;


      /*
       * @param game      the current phaser game context
       * @param parent    the current phaser state context
       */

      function PhaserEngine(game, parent) {
        this.postRender = bind(this.postRender, this);
        this.removeAllSystems = bind(this.removeAllSystems, this);
        this.removeSystem = bind(this.removeSystem, this);
        this.getSystem = bind(this.getSystem, this);
        this.addSystem = bind(this.addSystem, this);
        this.releaseNodeList = bind(this.releaseNodeList, this);
        this.getNodeList = bind(this.getNodeList, this);
        this.componentRemoved = bind(this.componentRemoved, this);
        this.componentAdded = bind(this.componentAdded, this);
        this.removeAllEntities = bind(this.removeAllEntities, this);
        this.getEntityByName = bind(this.getEntityByName, this);
        this.entityNameChanged = bind(this.entityNameChanged, this);
        this.removeEntity = bind(this.removeEntity, this);
        this.addEntity = bind(this.addEntity, this);
        this.init = bind(this.init, this);
        PhaserEngine.__super__.constructor.call(this, game, parent);
        this.nodes = {};
        this.components = {};
        this.entityList = new EntityList();
        this.entityNames = new Dictionary();
        this.systemList = new SystemList();
        this.families = new Dictionary();
        this.updateComplete = new Signal0();
      }

      PhaserEngine.prototype.addNode = function(name, def) {
        var property, ref, type;
        if (def.components == null) {
          def.components = {};
          ref = def.prototype;
          for (property in ref) {
            if (!hasProp.call(ref, property)) continue;
            type = ref[property];
            def.components[property] = type;
            def.prototype[property] = null;
          }
          def.prototype.entity = null;
          def.prototype.previous = null;
          def.prototype.next = null;
        }
        return this.nodes[name] = def;
      };

      PhaserEngine.prototype.init = function(nodes, components) {

        /*
         * register components
         */
        var klass, name, property, ref, results, type;
        if (components != null) {
          for (name in components) {
            klass = components[name];
            this.components[name] = klass;
          }
        }

        /*
         * register nodes
         */
        if (nodes != null) {
          results = [];
          for (name in nodes) {
            klass = nodes[name];

            /*
             * convert template to an actual node class
             */
            if (klass.components == null) {
              klass.components = {};
              ref = klass.prototype;
              for (property in ref) {
                if (!hasProp.call(ref, property)) continue;
                type = ref[property];
                klass.components[property] = type;
                klass.prototype[property] = null;
              }
              klass.prototype.entity = null;
              klass.prototype.previous = null;
              klass.prototype.next = null;
            }
            if (components != null) {
              results.push(this.nodes[name] = klass);
            } else {
              results.push(void 0);
            }
          }
          return results;
        }
      };

      Object.defineProperties(PhaserEngine.prototype, {

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

          /*
           * Returns a vector containing all the systems in the engine.
           */
        },
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

      PhaserEngine.prototype.addEntity = function(entity) {
        var each, family, ref;
        if (this.entityNames[entity.name]) {
          throw "The entity name " + entity.name + " is already in use by another entity.";
        }
        this.entityList.add(entity);
        this.entityNames[entity.name] = entity;
        entity.componentAdded.add(this.componentAdded);
        entity.componentRemoved.add(this.componentRemoved);
        entity.nameChanged.add(this.entityNameChanged);
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.newEntity(entity);
        }
      };


      /*
       * Remove an entity from the engine.
       *
       * @param entity The entity to remove.
       */

      PhaserEngine.prototype.removeEntity = function(entity) {
        var each, family, ref;
        entity.componentAdded.remove(this.componentAdded);
        entity.componentRemoved.remove(this.componentRemoved);
        entity.nameChanged.remove(this.entityNameChanged);
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.removeEntity(entity);
        }
        delete this.entityNames[entity.name];
        this.entityList.remove(entity);
      };

      PhaserEngine.prototype.entityNameChanged = function(entity, oldName) {
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

      PhaserEngine.prototype.getEntityByName = function(name) {
        return this.entityNames[name];
      };


      /*
       * Remove all entities from the engine.
       */

      PhaserEngine.prototype.removeAllEntities = function() {
        while (this.entityList.head !== null) {
          this.removeEntity(this.entityList.head);
        }
      };


      /*
       @private
       */

      PhaserEngine.prototype.componentAdded = function(entity, componentClass) {
        var each, family, ref;
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.componentAddedToEntity(entity, componentClass);
        }
      };


      /*
       @private
       */

      PhaserEngine.prototype.componentRemoved = function(entity, componentClass) {
        var each, family, ref;
        ref = this.families;
        for (each in ref) {
          family = ref[each];
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

      PhaserEngine.prototype.getNodeList = function(nodeClass) {
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

      PhaserEngine.prototype.releaseNodeList = function(nodeClass) {
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

      PhaserEngine.prototype.addSystem = function(system, priority) {
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

      PhaserEngine.prototype.getSystem = function(type) {
        return systemList.get(type);
      };


      /*
       * Remove a system from the engine.
       *
       * @param system The system to remove from the engine.
       */

      PhaserEngine.prototype.removeSystem = function(system) {
        this.systemList.remove(system);
        system.removeFromEngine(this);
      };


      /*
       * Remove all systems from the engine.
       */

      PhaserEngine.prototype.removeAllSystems = function() {
        while (this.systemList.head !== null) {
          this.removeSystem(this.systemList.head);
        }
      };


      /*
       * postRender
       *
       * Phaser.Plugin interface
       *
       * Update the engine. This causes the engine update loop to run, calling update on all the
       * systems in the engine.
       *
       * <p>The package ash.tick contains classes that can be used to provide
       * a steady or variable tick that calls this update method.</p>
       *
       * @time The duration, in seconds, of this update step.
       */

      PhaserEngine.prototype.postRender = function() {
        var system, time;
        time = this.game.time.elapsed * 0.001;
        this.updating = true;
        system = this.systemList.head;
        while (system) {
          system.update(time);
          system = system.next;
        }
        this.updating = false;
        this.updateComplete.dispatch();
      };

      return PhaserEngine;

    })(Phaser.Plugin);
  }

}).call(this);

//# sourceMappingURL=phaser_engine.js.map

// Generated by CoffeeScript 1.9.1

/*
  After reading http://www.paolodistefano.com/2015/01/18/ecs2/,
  I tried making entity inherit from Sprite. Turns out this can't work.
  Sprite already has a component collection named components.

  While we could re-implement ash so that there are no named collisions when merging into
  Sprite, the whole super object approach is a bad idea, and why we are using ecs in the
  first place ;)

  Sprite should be a component of an entity, just like everything else
 */


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

(function() {
  var PhaserEntity,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (typeof Phaser !== "undefined" && Phaser !== null) {
    ash.ext.PhaserEntity = PhaserEntity = (function(superClass) {
      var nameCount;

      extend(PhaserEntity, superClass);

      nameCount = 0;


      /*
       * Optional, give the entity a name. This can help with debugging and with serialising the entity.
       */

      PhaserEntity.prototype._name = '';


      /*
       * This signal is dispatched when a component is added to the entity.
       */

      PhaserEntity.prototype.componentAdded = null;


      /*
       * This signal is dispatched when a component is removed from the entity.
       */

      PhaserEntity.prototype.componentRemoved = null;


      /*
       * Dispatched when the name of the entity changes. Used internally by the engine to track entities based on their names.
       */

      PhaserEntity.prototype.nameChanged = null;

      PhaserEntity.prototype.previous = null;

      PhaserEntity.prototype.next = null;

      PhaserEntity.prototype.components = null;

      function PhaserEntity(game, key, name) {
        if (name == null) {
          name = '';
        }
        PhaserEntity.__super__.constructor.call(this, game, 0, 0, key);
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

      PhaserEntity.prototype.add = function(component, componentClass) {
        if (componentClass == null) {
          componentClass = component.constructor;
        }
        if (componentClass.className in this.components) {
          this.remove(componentClass);
        }
        this.components[componentClass.className] = component;
        this.componentAdded.dispatch(this, componentClass);
        return this;
      };


      /*
       * Remove a component from the entity.
       *
       * @param componentClass The class of the component to be removed.
       * @return the component, or null if the component doesn't exist in the entity
       */

      PhaserEntity.prototype.remove = function(componentClass) {
        var component, name;
        name = componentClass.className != null ? componentClass.className : componentClass;
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

      PhaserEntity.prototype.get = function(componentClass) {
        return this.components[componentClass.className];
      };


      /*
       * Get all components from the entity.
       *
       * @return An array containing all the components that are on the entity.
       */

      PhaserEntity.prototype.getAll = function() {
        var component, componentArray, i, len, ref;
        componentArray = [];
        ref = this.components;
        for (i = 0, len = ref.length; i < len; i++) {
          component = ref[i];
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

      PhaserEntity.prototype.has = function(componentClass) {
        return componentClass.className in this.components;
      };

      return PhaserEntity;

    })(Phaser.Sprite);
  }

}).call(this);

//# sourceMappingURL=phaser_entity.js.map

// Generated by CoffeeScript 1.9.1

/*
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
 *
 * This version is implemented as a Phaser Plugin. It uses the Phaser update cycle
 * to provide tick for the ash engine update.
 *
 * Use this version if Phaser drives the updates
 */

(function() {
  var PhaserPlugin,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (typeof Phaser !== "undefined" && Phaser !== null) {
    ash.ext.PhaserPlugin = PhaserPlugin = (function(superClass) {
      extend(PhaserPlugin, superClass);

      PhaserPlugin.prototype.entityNames = null;

      PhaserPlugin.prototype.entityList = null;

      PhaserPlugin.prototype.systemList = null;

      PhaserPlugin.prototype.families = null;

      PhaserPlugin.prototype.nodes = null;

      PhaserPlugin.prototype.components = null;


      /*
       * Phaser.Plugin members
       */

      PhaserPlugin.prototype.game = null;

      PhaserPlugin.prototype.parent = null;

      PhaserPlugin.prototype.active = true;

      PhaserPlugin.prototype.visible = true;

      PhaserPlugin.prototype.hasPostRender = true;


      /*
       * Indicates if the engine is currently in its update loop.
       */

      PhaserPlugin.prototype.updating = false;


      /*
       * Dispatched when the update loop ends. If you want to add and remove systems from the
       * engine it is usually best not to do so during the update loop. To avoid this you can
       * listen for this signal and make the change when the signal is dispatched.
       */

      PhaserPlugin.prototype.updateComplete = null;


      /*
       * The class used to manage node lists. In most cases the default class is sufficient
       * but it is exposed here so advanced developers can choose to create and use a
       * different implementation.
       *
       * The class must implement the IFamily interface.
       */

      PhaserPlugin.prototype.familyClass = ComponentMatchingFamily;


      /*
       * @param game      the current phaser game context
       * @param parent    the current phaser state context
       */

      function PhaserPlugin(game, parent) {
        this.update = bind(this.update, this);
        this.removeAllSystems = bind(this.removeAllSystems, this);
        this.removeSystem = bind(this.removeSystem, this);
        this.getSystem = bind(this.getSystem, this);
        this.addSystem = bind(this.addSystem, this);
        this.releaseNodeList = bind(this.releaseNodeList, this);
        this.getNodeList = bind(this.getNodeList, this);
        this.componentRemoved = bind(this.componentRemoved, this);
        this.componentAdded = bind(this.componentAdded, this);
        this.removeAllEntities = bind(this.removeAllEntities, this);
        this.getEntityByName = bind(this.getEntityByName, this);
        this.entityNameChanged = bind(this.entityNameChanged, this);
        this.removeEntity = bind(this.removeEntity, this);
        this.addEntity = bind(this.addEntity, this);
        this.init = bind(this.init, this);
        PhaserPlugin.__super__.constructor.call(this, game, parent);
        this.nodes = {};
        this.components = {};
        this.entityList = new EntityList();
        this.entityNames = new Dictionary();
        this.systemList = new SystemList();
        this.families = new Dictionary();
        this.updateComplete = new Signal0();
      }

      PhaserPlugin.prototype.addNode = function(name, def) {
        var property, ref, type;
        if (def.components == null) {
          def.components = {};
          ref = def.prototype;
          for (property in ref) {
            if (!hasProp.call(ref, property)) continue;
            type = ref[property];
            def.components[property] = type;
            def.prototype[property] = null;
          }
          def.prototype.entity = null;
          def.prototype.previous = null;
          def.prototype.next = null;
        }
        return this.nodes[name] = def;
      };

      PhaserPlugin.prototype.init = function(nodes, components) {

        /*
         * register components
         */
        var klass, name, property, ref, results, type;
        if (components != null) {
          for (name in components) {
            klass = components[name];
            this.components[name] = klass;
          }
        }

        /*
         * register nodes
         */
        if (nodes != null) {
          results = [];
          for (name in nodes) {
            klass = nodes[name];

            /*
             * convert template to an actual node class
             */
            if (klass.components == null) {
              klass.components = {};
              ref = klass.prototype;
              for (property in ref) {
                if (!hasProp.call(ref, property)) continue;
                type = ref[property];
                klass.components[property] = type;
                klass.prototype[property] = null;
              }
              klass.prototype.entity = null;
              klass.prototype.previous = null;
              klass.prototype.next = null;
            }
            if (components != null) {
              results.push(this.nodes[name] = klass);
            } else {
              results.push(void 0);
            }
          }
          return results;
        }
      };

      Object.defineProperties(PhaserPlugin.prototype, {

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

          /*
           * Returns a vector containing all the systems in the engine.
           */
        },
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

      PhaserPlugin.prototype.addEntity = function(entity) {
        var each, family, ref;
        if (this.entityNames[entity.name]) {
          throw "The entity name " + entity.name + " is already in use by another entity.";
        }
        this.entityList.add(entity);
        this.entityNames[entity.name] = entity;
        entity.componentAdded.add(this.componentAdded);
        entity.componentRemoved.add(this.componentRemoved);
        entity.nameChanged.add(this.entityNameChanged);
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.newEntity(entity);
        }
      };


      /*
       * Remove an entity from the engine.
       *
       * @param entity The entity to remove.
       */

      PhaserPlugin.prototype.removeEntity = function(entity) {
        var each, family, ref;
        entity.componentAdded.remove(this.componentAdded);
        entity.componentRemoved.remove(this.componentRemoved);
        entity.nameChanged.remove(this.entityNameChanged);
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.removeEntity(entity);
        }
        delete this.entityNames[entity.name];
        this.entityList.remove(entity);
      };

      PhaserPlugin.prototype.entityNameChanged = function(entity, oldName) {
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

      PhaserPlugin.prototype.getEntityByName = function(name) {
        return this.entityNames[name];
      };


      /*
       * Remove all entities from the engine.
       */

      PhaserPlugin.prototype.removeAllEntities = function() {
        while (this.entityList.head !== null) {
          this.removeEntity(this.entityList.head);
        }
      };


      /*
       @private
       */

      PhaserPlugin.prototype.componentAdded = function(entity, componentClass) {
        var each, family, ref;
        ref = this.families;
        for (each in ref) {
          family = ref[each];
          family.componentAddedToEntity(entity, componentClass);
        }
      };


      /*
       @private
       */

      PhaserPlugin.prototype.componentRemoved = function(entity, componentClass) {
        var each, family, ref;
        ref = this.families;
        for (each in ref) {
          family = ref[each];
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

      PhaserPlugin.prototype.getNodeList = function(nodeClass) {
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

      PhaserPlugin.prototype.releaseNodeList = function(nodeClass) {
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

      PhaserPlugin.prototype.addSystem = function(system, priority) {
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

      PhaserPlugin.prototype.getSystem = function(type) {
        return systemList.get(type);
      };


      /*
       * Remove a system from the engine.
       *
       * @param system The system to remove from the engine.
       */

      PhaserPlugin.prototype.removeSystem = function(system) {
        this.systemList.remove(system);
        system.removeFromEngine(this);
      };


      /*
       * Remove all systems from the engine.
       */

      PhaserPlugin.prototype.removeAllSystems = function() {
        while (this.systemList.head !== null) {
          this.removeSystem(this.systemList.head);
        }
      };


      /*
       * update
       *
       * Phaser.Plugin interface
       *
       * Update the engine. This causes the engine update loop to run, calling update on all the
       * systems in the engine.
       *
       * <p>The package ash.tick contains classes that can be used to provide
       * a steady or variable tick that calls this update method.</p>
       *
       * @time The duration, in seconds, of this update step.
       */

      PhaserPlugin.prototype.update = function() {
        var system, time;
        time = this.game.time.elapsed * 0.001;
        this.updating = true;
        system = this.systemList.head;
        while (system) {
          system.update(time);
          system = system.next;
        }
        this.updating = false;
        this.updateComplete.dispatch();
      };

      return PhaserPlugin;

    })(Phaser.Plugin);
  }

}).call(this);

//# sourceMappingURL=phaser_plugin.js.map

//# sourceMappingURL=ash.js.map