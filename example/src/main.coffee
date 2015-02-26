example = require('../../example')

class example.Main

  constructor: ->
    {container, stage} = SWF(800, 600, 60, '#000000')
    asteroids = new example.Asteroids(container, stage.stageWidth, stage.stageHeight)
    asteroids.start()
    return



  SWF = (width, height, frameRate, backgroundColor) ->
    canvas = document.createElement(if navigator.isCocoonJS then "screencanvas" else "canvas")
    canvas.setAttribute "id", "game_stage"
    canvas.setAttribute "width", width
    canvas.setAttribute "height", height
    canvas.style.backgroundColor = backgroundColor
    document.body.appendChild canvas
    return {
      container: canvas.getContext("2d"),
      stage:
        stageWidth: canvas.width
        stageHeight: canvas.height
    }

