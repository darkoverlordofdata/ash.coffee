'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.MotionControl extends ash.core.Node

  @components:
    control : example.components.MotionControls
    position : example.components.Position
    motion : example.components.Motion


  control : null
  position : null
  motion : null
