'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.HudNode extends ash.core.Node

  @components:
    state : example.components.GameState
    hud   : example.components.Hud

  state : null
  hud   : null
