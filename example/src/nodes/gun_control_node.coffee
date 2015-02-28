'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.GunControlNode extends ash.core.Node

  @components:
    audio     : example.components.Audio
    control   : example.components.GunControls
    gun       : example.components.Gun
    position  : example.components.Position

  control   : null
  gun       : null
  position  : null
  audio     : null
