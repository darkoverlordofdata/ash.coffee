'use strict'

class asteroids.components.Audio

  @className: 'Audio'

  toPlay: null

  constructor: () ->
    @toPlay = []

  play: (sound) ->
    @toPlay.push(sound)