'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.Render extends ash.core.Node

  @components:
    position : example.components.Position
    display : example.components.Display

  position : null
  display : null
