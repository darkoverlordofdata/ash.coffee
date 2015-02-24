ash = require('../../../lib')
example = require('../../../example')

BulletAge       = example.nodes.BulletAge

class example.systems.BulletAgeSystem extends ash.core.System

    creator: null
    nodeList: null

    constructor: (creator) ->
      @creator = creator
      return

    addToEngine: (engine) ->
      @nodeList = engine.getNodeList(BulletAge)
      return

    removeFromEngine: (engine) ->
      @nodeList = null
      return

    update: (time) =>
      node = @nodeList.head

      while node
        @updateNode node, time
        node = node.next
      return

    updateNode: (node, time) =>
      bullet = node.bullet
      bullet.lifeRemaining -= time
      @creator.destroyEntity node.entity  if bullet.lifeRemaining <= 0
      return

