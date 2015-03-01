'use strict'
example = require('../../../example')

class example.components.GameState

  lives: 3
  level: 0
  hits: 0
  playing: false

  setForStart: () ->
    @lives = 3
    @level = 0
    @hits = 0
    @playing = true
    return
