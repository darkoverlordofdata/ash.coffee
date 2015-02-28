'use strict'
ash = require('../../../lib')
example = require('../../../example')

AudioNode       = example.nodes.AudioNode

class example.systems.AudioSystem extends ash.core.ListIteratingSystem

  constructor: () ->

    super(AudioNode, @updateNode)

  updateNode: (node, time) =>

    for each, type of node.audio.toPlay
      sound = new type()
      sound.play(0, 1)

    node.audio.toPlay.length = 0