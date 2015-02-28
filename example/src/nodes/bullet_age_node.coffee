'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.BulletAgeNode extends ash.core.Node

  @components:
    bullet : example.components.Bullet

  bullet : null
