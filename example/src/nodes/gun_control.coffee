ash = require('../../../lib')
example = require('../../../example')

class example.nodes.GunControl extends ash.core.Node

  @components:
    control : example.components.GunControls
    gun     : example.components.Gun,
    position : example.components.Position

  control : null
  gun     : null
  position : null
