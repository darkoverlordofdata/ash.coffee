ash = require('../../../lib')
example = require('../../../example')

SpaceshipCollisionNode = example.nodes.SpaceshipCollisionNode
AsteroidCollisionNode = example.nodes.AsteroidCollisionNode
BulletCollisionNode = example.nodes.BulletCollisionNode
Point = example.util.Point

class GameManager extends ash.core.System
    gameState: null
    creator: null
    spaceships: null
    asteroids: null
    bullets: null
    constructor: (gameState, creator) ->
      @gameState = gameState
      @creator = creator
      return

    addToEngine: (game) ->
      @spaceships = game.getNodeList(SpaceshipCollisionNode)
      @asteroids = game.getNodeList(AsteroidCollisionNode)
      @bullets = game.getNodeList(BulletCollisionNode)
      return

    update: (time) ->
      if @spaceships.empty()
        if @gameState.lives > 0
          newSpaceshipPosition = new Point(@gameState.width * 0.5, @gameState.height * 0.5)
          clearToAddSpaceship = true
          asteroid = @asteroids.head

          while asteroid
            if asteroid.position.position.distanceTo(newSpaceshipPosition) <= asteroid.position.collisionRadius + 50
              clearToAddSpaceship = false
              break
            asteroid = asteroid.next
          if clearToAddSpaceship
            @creator.createSpaceship()
            @gameState.lives--
        else
      
      # game over
      if @asteroids.empty() and @bullets.empty() and not @spaceships.empty()
        position = undefined
        
        # next level
        spaceship = @spaceships.head
        @gameState.level++
        asteroidCount = 2 + @gameState.level
        i = 0

        while i < asteroidCount
          
          # check not on top of spaceship
          loop
            position = new Point(Math.random() * @gameState.width, Math.random() * @gameState.height)
            break unless position.distanceTo(spaceship.position.position) <= 80
          @creator.createAsteroid 30, position.x, position.y
          ++i
      return

    removeFromEngine: (game) ->
      @spaceships = null
      @asteroids = null
      @bullets = null
      return

