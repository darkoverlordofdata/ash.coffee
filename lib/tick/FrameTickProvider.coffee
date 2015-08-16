###
 * Uses the enter frame event to provide a frame tick where the frame duration is the time since the previous frame.
 * There is a maximum frame time parameter in the constructor that can be used to limit
 * the longest period a frame can be.
###
'use strict'

class ash.tick.FrameTickProvider extends ash.signals.Signal1

  ###*
   * @type {Object}
  ###
  displayObject: null
  
  ###*
   * @type {number}
  ###
  previousTime: 0
  
  ###*
   * @type {number}
  ###
  maximumFrameTime: 0
  
  ###*
   * @type {boolean}
  ###
  isPlaying: false
  
  ###*
   * @type {Object}
  ###
  request: null

  ###*
   * Applies a time adjustement factor to the tick, so you can slow down or speed up the entire engine.
   * The update tick time is multiplied by this value, so a value of 1 will run the engine at the normal rate.
   * @type {number}
  ###
  timeAdjustment: 1

  ###*
   * @extends {ash.signals.Signal1}
   * @constructor
   * @param {Object} displayObject
   * @param {number} maximumFrameTime
  ###
  constructor: (@displayObject, @maximumFrameTime) ->
    super

  ###*
   * Start
  ###
  start: ->
    @request = requestAnimationFrame(@dispatchTick)
    @isPlaying = true
    return # Void

  ###*
   * Stop
  ###
  stop: ->
    cancelRequestAnimationFrame(@request)
    @isPlaying = false
    return # Void

  ###*
   * dispatchTick
   @param {number} timestamp
  ###
  dispatchTick: (timestamp = Date.now()) =>
    @displayObject?['begin']?() #  if @displayObject
    temp = @previousTime or timestamp
    @previousTime = timestamp
    frameTime = (timestamp - temp) * 0.001
    @dispatch(frameTime)
    requestAnimationFrame(@dispatchTick)
    @displayObject?['end']?() # if @displayObject
    return # Void

