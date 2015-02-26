'use strict'
example = require('../../../example')

class example.graphics.BulletView

  x: 0
  y: 0
  width: 4
  height: 4
  rotation: 0
  graphic: null
  
  constructor: (graphic) ->
    @initialise graphic

  initialise: (graphic) ->
    @graphic = graphic
    @draw()
    this

  draw: ->
    graphic = @graphic
    graphic.save()
    graphic.rotate @rotation
    graphic.beginPath()
    graphic.fillStyle = "#FFFFFF"
    graphic.arc @x, @y, 2, 0, Math.PI * 2, false
    graphic.fill()
    graphic.restore()
    return

