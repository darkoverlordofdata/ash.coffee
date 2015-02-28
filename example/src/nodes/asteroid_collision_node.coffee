'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.AsteroidCollisionNode extends ash.core.Node

  @components:
    asteroid  : example.components.Asteroid
    position  : example.components.Position
    collision : example.components.Collision
    audio     : example.components.Audio

  asteroid  : null
  position  : null
  collision : null
  audio     : null
