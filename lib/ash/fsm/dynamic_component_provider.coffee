class DynamicComponentProvider


  _closure: null

  ###
   * Constructor
   *
   * @param closure The function that will return the component instance when called.
  ###
  constructor: (closure) ->
    @_closure = closure
    ###
     * Used to request a component from this provider
     *
     * @return The instance
    ###
  getComponent: () ->
    return @_closure

  ###
   * Used to compare this provider with others. Any provider that returns the same component
   * instance will be regarded as equivalent.
   *
   * @return The instance
  ###
  Object.defineProperties DynamicComponentProvider::,
    identifier: get: -> return @_closure

