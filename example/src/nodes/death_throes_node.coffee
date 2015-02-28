'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.DeathThroesNode extends ash.core.Node

  @components:
    death : example.components.DeathThroes

  death : null
