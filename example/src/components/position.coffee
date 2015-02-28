'use strict'
example = require('../../../example')
Point = example.graphics.Point

class example.components.Position

  position: null
  rotation: 0

  constructor: (x, y, @rotation) ->

    @position = new Point(x, y)
