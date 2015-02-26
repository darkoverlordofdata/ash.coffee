'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.BulletCollision extends ash.core.Node

  @components:
    bullet : example.components.Bullet,
    position : example.components.Position

  bullet : null
  position : null
