'use strict'

class asteroids.nodes.GunControlNode extends ash.core.Node

  @className: 'GunControlNode'
  @components:
    audio     : asteroids.components.Audio
    control   : asteroids.components.GunControls
    gun       : asteroids.components.Gun
    position  : asteroids.components.Position

  control   : null
  gun       : null
  position  : null
  audio     : null
