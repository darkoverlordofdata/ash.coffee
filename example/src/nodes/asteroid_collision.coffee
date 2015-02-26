'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.AsteroidCollision extends ash.core.Node

  @components:
    asteroid : example.components.Asteroid
    position : example.components.Position

  asteroid : null
  position : null
