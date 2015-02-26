example = require('../../../example')

class example.components.GameState

  width: 0
  height: 0
  lives: 3
  level: 0
  points: 0

  constructor: (@width, @height) ->
    @lives = 3
    @level = 0
    @points = 0
