'use strict'
example = require('../../../example')

class example.components.GameState

  lives: 3
  level: 0
  points: 0
  playing: false

  constructor: () ->
    @lives = 3
    @level = 0
    @points = 0
    @playing = true
