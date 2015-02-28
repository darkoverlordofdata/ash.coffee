'use strict'
ash = require('../../../lib')
example = require('../../../example')

AnimationNode = example.nodes.AnimationNode

class example.systems.AnimationSystem extends ash.tools.ListIteratingSystem

  constructor: () ->

    super(AnimationNode, @updateNode)

  updateNode: (node, time) =>

    node.animation.animation.animate(time)