'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.BulletAge extends ash.core.Node

  @components:
    bullet : example.components.Bullet

  bullet : null
