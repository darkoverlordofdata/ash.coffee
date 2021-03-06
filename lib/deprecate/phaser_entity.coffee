###
  After reading http://www.paolodistefano.com/2015/01/18/ecs2/,
  I tried making entity inherit from Sprite. Turns out this can't work.
  Sprite already has a component collection named components.

  While we could re-implement ash so that there are no named collisions when merging into
  Sprite, the whole super object approach is a bad idea, and why we are using ecs in the
  first place ;)

  Sprite should be a component of an entity, just like everything else
###
###
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
###
if Phaser?
  ash.ext.PhaserEntity = class PhaserEntity extends Phaser.Sprite

    nameCount = 0

    ###
     * Optional, give the entity a name. This can help with debugging and with serialising the entity.
    ###
    _name: ''
    ###
     * This signal is dispatched when a component is added to the entity.
    ###
    componentAdded: null
    ###
     * This signal is dispatched when a component is removed from the entity.
    ###
    componentRemoved: null
    ###
     * Dispatched when the name of the entity changes. Used internally by the engine to track entities based on their names.
    ###
    nameChanged: null

    previous: null
    next: null
    components: null

    constructor: (game, key, name = '' ) ->
      super game, 0, 0, key
      Object.defineProperties @,
        ###
         * All entities have a name. If no name is set, a default name is used. Names are used to
         * fetch specific entities from the engine, and can also help to identify an entity when debugging.
        ###
        name:
          get: -> @_name
          set: (value) ->
            if (@_name isnt value)
              previous = @_name
              @_name = value
              @nameChanged.dispatch(this, previous)

      @componentAdded = new Signal2()
      @componentRemoved = new Signal2()
      @nameChanged = new Signal2()
      @components = new Dictionary()

      if (name isnt '')
        @_name = name
      else
        @_name = "_entity" + (++nameCount)

    ###
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
    ###
    add: (component, componentClass) ->
      if (not componentClass?)
        componentClass = component.constructor

      if componentClass.className of @components
        @remove(componentClass)

      @components[componentClass.className] = component
      @componentAdded.dispatch(this, componentClass)
      return this


    ###
     * Remove a component from the entity.
     *
     * @param componentClass The class of the component to be removed.
     * @return the component, or null if the component doesn't exist in the entity
    ###
    remove: (componentClass) ->
      name = if componentClass.className? then componentClass.className else componentClass
  #    name = if 'string' is typeof componentClass then componentClass else componentClass.className
      component = @components[name]
      if (component)
        delete @components[name]
        @componentRemoved.dispatch(this, name)
        return component

      return null

    ###
     * Get a component from the entity.
     *
     * @param componentClass The class of the component requested.
     * @return The component, or null if none was found.
    ###
    get: (componentClass) ->
      return @components[componentClass.className]

    ###
     * Get all components from the entity.
     *
     * @return An array containing all the components that are on the entity.
    ###
    getAll: () ->
      componentArray = []
      for component in @components
        componentArray.push(component)
      return componentArray


    ###
     * Does the entity have a component of a particular type.
     *
     * @param componentClass The class of the component sought.
     * @return true if the entity has a component of the type, false if not.
    ###
    has: (componentClass) ->
      return componentClass.className of @components
      