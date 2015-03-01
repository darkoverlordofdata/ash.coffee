'use strict'
example = require('../../../example')
ash = require('../../../lib')

Signal0 = ash.signals.Signal0

class example.graphics.WaitForStartView

  x: 0
  y: 0
  width: 4
  height: 4
  rotation: 0
  graphic: null

  gameOver: null
  clickToStart: null
  instructions: null
  click: null
  
  constructor: (@graphic) ->
    @click = new Signal0()
    @gameOver = @createGameOver
    @instructions = @createInstructions
    @clickToStart = @createClickToStart
    @graphic.canvas.addEventListener 'click', (event) =>
      @click.dispatch()

    @draw()

  createGameOver: () ->
    @graphic.save()
    @graphic.beginPath()
    @graphic.font = 'bold 32px Helvetica'
    @graphic.fillStyle = '#FFFFFF'
#    @graphic.textAlign = 'center'

    s = 'ASTEROIDS'
    l = @graphic.measureText(s)
    x = Math.floor(((window.innerWidth*window.devicePixelRatio)-l.width)/2)
    y = 175
    @graphic.fillText(s, x, y)
    @graphic.fill()
    @graphic.restore()
    return

  createClickToStart: () ->
    @graphic.save()
    @graphic.beginPath()
    @graphic.font = 'bold 18px Helvetica'
    @graphic.fillStyle = '#FFFFFF'
#    @graphic.textAlign = 'center'

    s = 'CLICK TO START'
    l = @graphic.measureText(s)
    x = Math.floor(((window.innerWidth*window.devicePixelRatio)-l.width)/2)
    y = 225
    @graphic.fillText(s, x, y)
    @graphic.fill()
    @graphic.restore()
    return

  createInstructions: () ->
    @graphic.save()
    @graphic.beginPath()
    @graphic.font = 'bold 14px Helvetica'
    @graphic.fillStyle = '#FFFFFF'
    #    @graphic.textAlign = 'center'

    s = 'CTRL-Z to Fire  ~  Arrow Keys to Move'
    l = @graphic.measureText(s)
    x = 10
    y = window.innerHeight*window.devicePixelRatio-20
    @graphic.fillText(s, x, y)
    @graphic.fill()
    @graphic.restore()
    return

  draw: ->
    @gameOver()
    @clickToStart()
    @instructions()
    return

