example = require('../../example')

class example.Main

  CANVAS_WIDTH = 800
  CANVAS_HEIGHT = 600

  constructor: ->
    canvasElem = @createCanvas()
    gamewrapper = document.body
    gamewrapper.appendChild canvasElem
    stats = new Stats()
    stats.setMode 0
    stats.domElement.style.position = "absolute"
    stats.domElement.style.left = "0px"
    stats.domElement.style.top = "0px"
    gamewrapper.appendChild stats.domElement
    asteroids = new example.Asteroids(canvasElem, stats)
    asteroids.start()
    return

  createCanvas: ->
    canvasElem = document.createElement(if navigator.isCocoonJS then "screencanvas" else "canvas")
    canvasElem.setAttribute "id", "game_stage"
    canvasElem.setAttribute "width", CANVAS_WIDTH
    canvasElem.setAttribute "height", CANVAS_HEIGHT
    canvasElem.style.backgroundColor = "#000"
    return canvasElem

