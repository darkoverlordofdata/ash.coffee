ash = require('../../../lib')
example = require('../../../example')

class example.nodes.SpaceshipCollision extends ash.core.Node

  @components:
    spaceship : example.components.Spaceship
    position : example.components.Position

  spaceship : 0
  position : 0

