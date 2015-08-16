'use strict'

class asteroids.components.WaitForStart

  @className: 'WaitForStart'

  waitForStart: null
  startGame: false

  constructor: (@waitForStart) ->
    @waitForStart.click.add(@setStartGame)

  setStartGame: () =>
    @startGame = true
    return