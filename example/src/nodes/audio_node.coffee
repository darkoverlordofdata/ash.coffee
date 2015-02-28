'use strict'
ash = require('../../../lib')
example = require('../../../example')

class example.nodes.AudioNode extends ash.core.Node

  @components:
    audio : example.components.Audio

  audio : null
