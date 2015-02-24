ash = require('../../../lib')
example = require('../../../example')

class example.util.TickProvider
    previousTime: 0
    ticked: new ash.signals.Signal1()
    request: null
    stats: null
    constructor: (stats) ->
      @stats = stats
      return

    start: ->
      @request = requestAnimationFrame(@tick.bind(this))
      return

    stop: ->
      cancelRequestAnimationFrame @request
      return

    add: (listener, context) ->
      @ticked.add listener, context
      return

    remove: (listener, context) ->
      @ticked.remove listener, context
      return

    tick: (timestamp) ->
      @stats.begin()  if @stats
      timestamp = timestamp or Date.now()
      tmp = @previousTime or timestamp
      @previousTime = timestamp
      delta = (timestamp - tmp) * 0.001
      @ticked.dispatch delta
      requestAnimationFrame @tick.bind(this)
      @stats.end()  if @stats
      return

