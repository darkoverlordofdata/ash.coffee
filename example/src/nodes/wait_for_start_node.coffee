'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.WaitForStartNode extends ash.core.Node

  @components:
    wait : example.components.WaitForStart

  wait : null
