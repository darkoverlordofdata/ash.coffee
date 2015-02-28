'use strict'
ash = require('../../../lib')
example = require('../../../example')

GunControlNode = example.nodes.GunControlNode

class example.systems.GunControlSystem extends ash.tools.ListIteratingSystem

  keyPoll: null
  creator: null
  nodeList: null

  constructor: (@keyPoll, @creator) ->
    super(GunControlNode, @updateNode)

  updateNode: (node, time) =>
    control = node.control
    position = node.position
    gun = node.gun
    gun.shooting = @keyPoll.isDown(control.trigger)
    gun.timeSinceLastShot += time
    if gun.shooting and gun.timeSinceLastShot >= gun.minimumShotInterval
      @creator.createUserBullet gun, position
      gun.timeSinceLastShot = 0
    return

