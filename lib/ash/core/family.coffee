ash = require('../../../ash')

class ash.core.Family

  nodes: undefined

  constructor: ->
    Object.defineProperties @,
      nodeList: get: -> this.nodes

  newEntity: (entity) ->
    throw new OverrideError()

  removeEntity: (entity) ->
    throw new OverrideError()

  componentAddedToEntity: (entity, componentClass) ->
    throw new OverrideError()

  componentRemovedFromEntity: (entity, componentClass) ->
    throw new OverrideError()

  cleanUp: () ->
    throw new OverrideError()

