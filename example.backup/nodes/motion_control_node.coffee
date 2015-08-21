'use strict'

class asteroids.nodes.MotionControlNode extends ash.core.Node

  @className: 'MotionControlNode'
  @components:
    control   : asteroids.components.MotionControls
    position  : asteroids.components.Position
    motion    : asteroids.components.Motion


  control   : null
  position  : null
  motion    : null
