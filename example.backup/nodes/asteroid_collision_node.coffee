'use strict'

class asteroids.nodes.AsteroidCollisionNode extends ash.core.Node

  @className: 'AsteroidCollisionNode'
  @components:
    asteroid  : asteroids.components.Asteroid
    position  : asteroids.components.Position
    collision : asteroids.components.Collision
    audio     : asteroids.components.Audio

  asteroid  : null
  position  : null
  collision : null
  audio     : null
