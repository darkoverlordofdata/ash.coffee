'use strict'
ash = require('../../../lib')
example = require('../../../example')

BulletAgeNode = example.nodes.BulletAgeNode

class example.systems.BulletAgeSystem extends ash.tools.ListIteratingSystem

  creator: null

  constructor: (@creator) ->

    super(BulletAgeNode, @updateNode)

  updateNode: (node, time) =>

    bullet = node.bullet
    bullet.lifeRemaining -= time
    if bullet.lifeRemaining <= 0
      @creator.destroyEntity node.entity
    return # Void

