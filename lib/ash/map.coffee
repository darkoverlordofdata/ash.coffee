#+--------------------------------------------------------------------+
#| map.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2015
#+--------------------------------------------------------------------+
#|
#| This file is a part of ash.coffee
#|
#| ash.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the GPLv3 License
#|
#+--------------------------------------------------------------------+
#
# Map<K, V>
#
# Map allows key to value mapping for arbitrary value types, and many key types.
#
ash = require('../../ash')

class ash.Map

  _keys: null
  _values: null


  constructor: ->
    @_keys = []
    @_values = []

  ###
   * Returns true if key has a mapping, false otherwise.
  ###
  exists: (k) ->
    return @_keys.indexOf(k) isnt -1

  ###
   * Returns the current mapping of key
  ###
  get: (k) ->
    i = @_keys.indexOf(k)
    if (i is -1)
      return null
    else
      return @_values[i]

  ###
   * Returns an Iterator over the values of this Map.
  ###
  iterator: ->
    return @_values

  ###
   * Returns an Iterator over the keys of this Map.
  ###
  keys: ->
    return @_keys

  ###
   * Removes the mapping of key and returns true if such a mapping existed, false otherwise.
  ###
  remove: (k) ->
    i = @_keys.indexOf(k)
    if (i is -1)
      return false
    else
      @_keys.splice(i,1)
      @_values.splice(i,1)
      return true

  ###
   * Maps key to value.
  ###
  set: (k, v) ->
    i = @_keys.indexOf(k)
    if (i is -1)
      @_keys.push(k)
      @_values.push(v)
    else
      @_values[i] = v
    return

