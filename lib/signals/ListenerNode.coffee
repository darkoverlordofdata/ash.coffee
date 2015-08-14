###
 * A node in the list of listeners in a signal.
###
'use strict'

###*
 * @constructor
###
class ash.signals.ListenerNode

  ###*
   * @param {ash.signals.ListenerNode}
  ###
  previous: null
  
  ###*
   * @param {ash.signals.ListenerNode}
  ###
  next: null
  
  ###*
   * @param {ash.signals.SignalBase}
  ###
  listener: null
  
  ###*
   * @param {boolean}
  ###
  once: false
