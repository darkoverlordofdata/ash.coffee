'use strict'
example = require('../../../example')

class example.components.WaitForStart

  waitForStart: null
  startGame: false

  constructor: (@waitForStart) ->
    @waitForStart.click.add(@setStartGame)

  setStartGame: () =>
    @startGame = true
    return