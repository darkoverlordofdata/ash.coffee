'use strict'
example = require('../../../example')

class example.components.GameState

  width: 0
  height: 0
  lives: 3
  level: 0
  points: 0
  playing: false

  constructor: (@width, @height) ->
    @lives = 3
    @level = 0
    @points = 0
    @playing = true
