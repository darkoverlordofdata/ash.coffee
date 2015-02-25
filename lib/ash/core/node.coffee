#+--------------------------------------------------------------------+
#| node.coffee
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
# Node base class
#
ash = require('../../../lib')

class ash.core.Node

  entity: null
  previous: null
  next: null