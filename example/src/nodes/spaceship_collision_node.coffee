'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.SpaceshipCollisionNode extends ash.core.Node

  @components:
    spaceship   : example.components.Spaceship
    position    : example.components.Position
    collision   : example.components.Collision
    audio       : example.components.Audio

  spaceship   : 0
  position    : 0
  collision   : null
  audio       : null

