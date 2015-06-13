###
 * A Helper for Components & Nodes
 *
 * Creates a common registry object
 * Fix-up up Node templates
###
ash.ext.Helper = class Helper

  components      : null
  nodes           : null

  constructor: (components, nodes) ->

    @components = {}
    @nodes = {}

    ###
     * register components
    ###
    if components?
      for name, klass of components
        @components[name] = klass

    ###
     * register nodes
    ###
    if nodes?
      for name, klass of nodes
        ###
         * convert template to an actual node class
        ###
        if not klass.components?
          klass.components = {}
          for own property, type of klass::
            klass.components[property] = type
            klass::[property] = null
          klass::entity = null
          klass::previous = null
          klass::next = null
        @nodes[name] = klass if components?

    