'use strict'

class asteroids.nodes.BulletCollisionNode extends ash.core.Node

  @className: 'BulletCollisionNode'
  @components:
    bullet    : asteroids.components.Bullet
    position  : asteroids.components.Position
    collision : asteroids.components.Collision

  bullet    : null
  position  : null
  collision : null
