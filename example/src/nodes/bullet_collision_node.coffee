'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.BulletCollisionNode extends ash.core.Node

  @components:
    bullet : example.components.Bullet
    position : example.components.Position
    collision : example.components.Collision

  bullet : null
  position : null
  collision : null
