'use strict'
example = require('../../../example')

class example.components.Audio

  toPlay: null

  constructor: () ->
    @toPlay = []

  play: (sound) ->
    @toPlay.push(sound)