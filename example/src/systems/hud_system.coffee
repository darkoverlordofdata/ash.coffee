'use strict'
ash = require('../../../lib')
example = require('../../../example')

HudNode = example.nodes.HudNode

class example.systems.HudSystem extends ash.tools.ListIteratingSystem

  constructor: () ->

    super(HudNode, @updateNode)

  updateNode: (node, time) =>

    node.hud.view.setLives(node.state.lives)
    node.hud.view.setScore(node.state.hits)
    return # Void
