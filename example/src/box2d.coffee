#+--------------------------------------------------------------------+
#| box2d.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2015
#+--------------------------------------------------------------------+
#|
#| This file is a part of ash.coffee
#|
#| ash.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# box2d map
#
'use strict'
###
 Remap the Box2DWeb interface so that it matches the cocoonjs plugin
###
if not navigator.isCocoonJS

  window.Box2D =

    Collision:
      Shapes:
        b2CircleShape       : Box2DWeb.Collision.Shapes.b2CircleShape
        b2PolygonShape      : Box2DWeb.Collision.Shapes.b2PolygonShape

    Common:
      Math:
        b2Mat22             : Box2DWeb.Common.Math.b2Mat22
        b2Math              : Box2DWeb.Common.Math.b2Math
        b2Transform         : Box2DWeb.Common.Math.b2Transform
        b2Vec2              : Box2DWeb.Common.Math.b2Vec2

    Dynamics:
      b2Body                : Box2DWeb.Dynamics.b2Body
      b2BodyDef             : Box2DWeb.Dynamics.b2BodyDef
      b2Contact             : Box2DWeb.Dynamics.Contacts.b2Contact
      b2ContactFilter       : Box2DWeb.Dynamics.b2ContactFilter
      b2ContactListener     : Box2DWeb.Dynamics.b2ContactListener
      b2DebugDraw           : Box2DWeb.Dynamics.b2DebugDraw
      b2Fixture             : Box2DWeb.Dynamics.b2Fixture
      b2FixtureDef          : Box2DWeb.Dynamics.b2FixtureDef
      b2World               : Box2DWeb.Dynamics.b2World
      Joints:
        b2DistanceJointDef  : Box2DWeb.Dynamics.Joints.b2DistanceJointDef
        b2Joint             : Box2DWeb.Dynamics.Joints.b2Joint
        b2RevoluteJointDef  : Box2DWeb.Dynamics.Joints.b2RevoluteJointDef
