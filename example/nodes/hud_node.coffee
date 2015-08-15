'use strict'

class asteroids.nodes.HudNode extends ash.core.Node

  @className: 'HudNode'
  @components:
    state : asteroids.components.GameState
    hud   : asteroids.components.Hud

  state : null
  hud   : null
