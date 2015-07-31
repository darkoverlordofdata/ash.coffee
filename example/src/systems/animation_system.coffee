'use strict'

AnimationNode = asteroids.nodes.AnimationNode

class asteroids.systems.AnimationSystem extends ash.tools.ListIteratingSystem

  constructor: () ->

    super(AnimationNode, @updateNode)

  updateNode: (node, time) =>

    node.animation.animation.animate(time)
    return # Void