'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.Movement extends ash.core.Node

  @components:
    position : example.components.Position
    motion : example.components.Motion


  position : null
  motion : null
