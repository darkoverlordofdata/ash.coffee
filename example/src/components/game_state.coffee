example = require('../../../example')

class example.components.GameState

  width: 0
  height: 0
  lives: 0
  level: 0
  points: 0

  constructor: (@width, @height) ->
    @lives = 0
    @level = 0
    @points = 0
