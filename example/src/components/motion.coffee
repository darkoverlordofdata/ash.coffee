example = require('../../../example')
Point = example.graphics.Point

class example.components.Motion

  velocity: null
  angularVelocity: 0
  damping: 0

  constructor: (velocityX, velocityY, @angularVelocity, @damping) ->

    @velocity = new Point(velocityX, velocityY)
