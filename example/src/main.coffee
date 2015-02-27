'use strict'
example = require('../../example')


class example.Main

  constructor: ->
    canvas = @canvas()
    asteroids = new example.Asteroids(canvas.getContext('2d'), canvas.width, canvas.height)
    asteroids.start()
    return

  canvas: ->
    canvas = document.createElement(if navigator.isCocoonJS then 'screencanvas' else 'canvas')
    canvas.width  = window.innerWidth*window.devicePixelRatio
    canvas.height = window.innerHeight*window.devicePixelRatio
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.backgroundColor = '#000000'
    document.body.appendChild canvas
    return canvas

