example = require('../../../example')

globalTarget = undefined
keys = {}
onKeyDown = (event) ->
  keys[event.keyCode] = true
  return

onKeyUp = (event) ->
  keys[event.keyCode] = false  if keys[event.keyCode]
  return


class example.util.KeyPoll

  @initialise: (target) ->
    globalTarget = target
    if globalTarget
      globalTarget.addEventListener "keydown", onKeyDown
      globalTarget.addEventListener "keyup", onKeyUp
    return

  @destroy: ->
    if globalTarget
      globalTarget.removeEventListener "keydown", onKeyDown
      globalTarget.removeEventListener "keyup", onKeyUp
    return

  @up: "38"
  @down: "40"
  @left: "37"
  @right: "39"
  @fire: "32"
  @isDown: (testKey) ->
    keys[testKey]



