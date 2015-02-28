'use strict'
ash = require('../../../lib')
example = require('../../../example')

DeathThroesNode       = example.nodes.DeathThroesNode

class example.systems.AnimationSystem extends ash.core.ListIteratingSystem

  creator: null

  constructor: (@creator) ->

    super(DeathThroesNode, @updateNode)

  updateNode: (node, time) =>

    node.death.countdown -= time
    if ( node.death.countdown <= 0 )
      @creator.destroyEntity(node.entity)