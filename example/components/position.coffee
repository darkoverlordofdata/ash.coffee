'use strict'
Point = asteroids.ui.Point

class asteroids.components.Position

  @className: 'Position'

  position: null
  rotation: 0

  constructor: (x, y, @rotation) ->

    @position = new Point(x, y)
