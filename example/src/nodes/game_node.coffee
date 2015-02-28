'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.GameNode extends ash.core.Node

  @components:
    state : example.components.GameState

  state : null
