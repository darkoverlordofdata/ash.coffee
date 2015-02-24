ash = require('../../../lib')
example = require('../../../example')

GunControlNode = examples.nodes.GunControlNode

class GunControlSystem extends ash.core.System
    keyPoll: null
    creator: null
    nodeList: null
    constructor: (keyPoll, creator) ->
      @keyPoll = keyPoll
      @creator = creator
      return

    addToEngine: (engine) ->
      @nodeList = engine.getNodeList(GunControlNode)
      return

    removeFromEngine: (engine) ->
      @nodeList = null
      return

    update: (time) ->
      node = @nodeList.head

      while node
        @updateNode node, time
        node = node.next
      return

    updateNode: (node, time) ->
      control = node.control
      position = node.position
      gun = node.gun
      gun.shooting = @keyPoll.isDown(control.trigger)
      gun.timeSinceLastShot += time
      if gun.shooting and gun.timeSinceLastShot >= gun.minimumShotInterval
        @creator.createUserBullet gun, position
        gun.timeSinceLastShot = 0
      return

