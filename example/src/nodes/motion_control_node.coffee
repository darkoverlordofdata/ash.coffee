'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.MotionControlNode extends ash.core.Node

  @components:
    control   : example.components.MotionControls
    position  : example.components.Position
    motion    : example.components.Motion
    physics   : example.components.Physics


  control   : null
  position  : null
  motion    : null
  physics   : null