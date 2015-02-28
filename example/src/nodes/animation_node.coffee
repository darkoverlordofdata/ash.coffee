'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.AnimationNode extends ash.core.Node

  @components:
    animation : example.components.Animation

  animation : null
