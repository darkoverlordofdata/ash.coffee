'use strict'

class asteroids.nodes.RenderNode extends ash.core.Node

  @className: 'RenderNode'
  @components:
    position  : asteroids.components.Position
    display   : asteroids.components.Display

  position  : null
  display   : null
