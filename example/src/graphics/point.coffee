'use strict'
example = require('../../index')

class example.graphics.Point

  x: 0
  y: 0

  constructor: (@x = 0, @y = 0) ->

  distanceSquaredTo: (targetPoint) ->
    dx = this.x - targetPoint.x
    dy = this.y - targetPoint.y
    return dx * dx + dy * dy

  distanceTo: (targetPoint) ->
    dx = this.x - targetPoint.x
    dy = this.y - targetPoint.y
    return Math.sqrt( dx * dx + dy * dy )