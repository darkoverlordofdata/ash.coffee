example = require('../../../example')
Point = example.graphics.Point

class example.components.Position

  position: null
  rotation: 0
  collisionRadius: 0

  constructor: (x, y, @rotation, @collisionRadius) ->

    @position = new Point(x, y)
