module.exports =
class example
require './src/asteroids'
require './src/entity_creator'
require './src/asteroids_app'

class example.util
require './src/util/fixes'
require './src/util/point'
require './src/util/point3'
require './src/util/keyboard'
require './src/util/keypoll'
require './src/util/tickprovider'

class example.components
require './src/components/asteroid'
require './src/components/bullet'
require './src/components/display'
require './src/components/game_state'
require './src/components/gun'
require './src/components/gun_controls'
require './src/components/motion'
require './src/components/motion_controls'
require './src/components/position'
require './src/components/spaceship'

class example.graphics
require './src/graphics/asteroid_view'
require './src/graphics/bullet_view'
require './src/graphics/spaceship_view'

class example.nodes
require './src/nodes/asteroid_collision'
require './src/nodes/bullet_age'
require './src/nodes/bullet_collision'
require './src/nodes/gun_control'
require './src/nodes/motion_control'
require './src/nodes/movement'
require './src/nodes/render'
require './src/nodes/spaceship_collision'

class example.systems
require './src/systems/bullet_age_system'
require './src/systems/collision_system'
require './src/systems/game_manager'
require './src/systems/gun_control_system'
require './src/systems/motion_control_system'
require './src/systems/movement_system'
require './src/systems/render_system'
require './src/systems/system_priorities'