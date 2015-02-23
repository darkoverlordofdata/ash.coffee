ash = require('../../../ash')

###
 * A node in the list of listeners in a signal.
###
class ash.signals.ListenerNode

  previous: null
  next: null
  listener: null
  once: false
