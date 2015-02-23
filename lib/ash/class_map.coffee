#+--------------------------------------------------------------------+
#| class_map.coffee
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
# ClassMap<String, V>
#
# Map classes using the class name
#
ash = require('../../ash')

class ash.ClassMap extends ash.Map

  exists: (k) ->
    return super.exists(k.name)

  get: (k) ->
    return super.get(k.name)

  remove: (k) ->
    return super.remove(k.name)

  set: (k, v) ->
    super.set(k.name, v)
    return

