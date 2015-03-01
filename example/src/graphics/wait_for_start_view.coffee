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
  click: null
  
  constructor: (@graphic) ->
    console.log 'Initialize Class WaitForStartView'
    @click = new Signal0()
    @gameOver = @createGameOver
    @clickToStart = @createClickToStart
    @graphic.canvas.addEventListener 'click', (event) =>
      @click.dispatch()

    @draw()

  createGameOver: () ->
    @graphic.save()
    @graphic.beginPath()
    @graphic.font = 'bold 32px Helvetica'
    @graphic.fillStyle = '#FFFFFF'
    @graphic.textAlign = 'center'
    @graphic.fillText('ASTEROIDS', 200, 175)
    @graphic.fill()
    @graphic.restore()
    return

  createClickToStart: () ->
    @graphic.save()
    @graphic.beginPath()
    @graphic.font = 'bold 18px Helvetica'
    @graphic.fillStyle = '#FFFFFF'
    @graphic.textAlign = 'center'
    @graphic.fillText('CLICK TO START', 200, 225)
    @graphic.fill()
    @graphic.restore()
    return

  draw: ->
    @gameOver()
    @clickToStart()
    return

