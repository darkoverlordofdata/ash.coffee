'use strict'
Point = asteroids.ui.Point

class asteroids.components.Gun

  @className: 'Gun'

  shooting: false
  offsetFromParent: null
  timeSinceLastShot: 0
  offsetFromParent: null

  constructor: (offsetX, offsetY, @minimumShotInterval, @bulletLifetime) ->

    @shooting = false
    @offsetFromParent = null
    @timeSinceLastShot = 0
    @offsetFromParent = new Point(offsetX, offsetY)
