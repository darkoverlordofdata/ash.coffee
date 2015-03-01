'use strict'
example = require('../../../example')

class example.graphics.HudView

  x: 0
  y: 0
  width: 4
  height: 4
  rotation: 0
  graphic: null
  
  constructor: (@graphic) ->
    @draw()

  draw: ->
    graphic = @graphic
    graphic.save()
    graphic.beginPath()
    graphic.fillStyle = "#FFFFFF"
    graphic.fill()
    graphic.restore()
    return


  setLives: (lives) ->

  setScore: (score) ->
