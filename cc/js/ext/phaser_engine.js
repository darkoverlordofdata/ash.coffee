
/*
 * The Engine class is the central point for creating and managing your game state. Add
 * entities and systems to the engine, and fetch families of nodes from the engine.
 *
 * This version is implemented as a Phaser Plugin. It uses the Phaser postRender cycle
 * to provide tick for the ash engine update.
 *
 * Use this version if the phaser update cycle clashes with Ash updates
 */
var PhaserEngine,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

if (typeof Phaser !== "undefined" && Phaser !== null) {
  ash.ext.PhaserEngine = PhaserEngine = (function(_super) {
    __extends(PhaserEngine, _super);

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
      this.postRender = __bind(this.postRender, this);
      this.removeAllSystems = __bind(this.removeAllSystems, this);
      this.removeSystem = __bind(this.removeSystem, this);
      this.getSystem = __bind(this.getSystem, this);
      this.addSystem = __bind(this.addSystem, this);
      this.releaseNodeList = __bind(this.releaseNodeList, this);
      this.getNodeList = __bind(this.getNodeList, this);
      this.componentRemoved = __bind(this.componentRemoved, this);
      this.componentAdded = __bind(this.componentAdded, this);
      this.removeAllEntities = __bind(this.removeAllEntities, this);
      this.getEntityByName = __bind(this.getEntityByName, this);
      this.entityNameChanged = __bind(this.entityNameChanged, this);
      this.removeEntity = __bind(this.removeEntity, this);
      this.addEntity = __bind(this.addEntity, this);
      this.init = __bind(this.init, this);
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
      var property, type, _ref;
      if (def.components == null) {
        def.components = {};
        _ref = def.prototype;
        for (property in _ref) {
          if (!__hasProp.call(_ref, property)) continue;
          type = _ref[property];
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
      var klass, name, property, type, _ref, _results;
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
        _results = [];
        for (name in nodes) {
          klass = nodes[name];

          /*
           * convert template to an actual node class
           */
          if (klass.components == null) {
            klass.components = {};
            _ref = klass.prototype;
            for (property in _ref) {
              if (!__hasProp.call(_ref, property)) continue;
              type = _ref[property];
              klass.components[property] = type;
              klass.prototype[property] = null;
            }
            klass.prototype.entity = null;
            klass.prototype.previous = null;
            klass.prototype.next = null;
          }
          if (components != null) {
            _results.push(this.nodes[name] = klass);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
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

    PhaserEngine.prototype.addEntity = function(entity) {
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

    PhaserEngine.prototype.removeEntity = function(entity) {
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

    PhaserEngine.prototype.componentRemoved = function(entity, componentClass) {
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
