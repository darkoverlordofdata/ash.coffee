'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.Physics extends ash.core.Node

  @components:
    physics : example.components.Physics
    position : example.components.Position
    motion : example.components.Motion


  physics : null
  position: null
  motion: null
