ash = require('../../../ash')

Signal1 = ash.signals.Signal1

###
 * A collection of nodes.
 *
 * <p>Systems within the engine access the components of entities via NodeLists. A NodeList contains
 * a node for each Entity in the engine that has all the components required by the node. To iterate
 * over a NodeList, start from the head and step to the next on each loop, until the returned value
 * is null. Or just use for in syntax.</p>
 *
 * <p>for (node in nodeList)
 * {
 *   // do stuff
 * }</p>
 *
 * <p>It is safe to remove items from a nodelist during the loop. When a Node is removed form the
 * NodeList it's previous and next properties still point to the nodes that were before and after
 * it in the NodeList just before it was removed.</p>
###
class ash.core.NodeList

  ###
   * The first item in the node list, or null if the list contains no nodes.
  ###
  head: null
  ###
   * The last item in the node list, or null if the list contains no nodes.
  ###
  tail: null

  ###
   * A signal that is dispatched whenever a node is added to the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was added.</p>
  ###
  nodeAdded: null

  ###
   * A signal that is dispatched whenever a node is removed from the node list.
   *
   * <p>The signal will pass a single parameter to the listeners - the node that was removed.</p>
  ###
  nodeRemoved: null

  constructor: ->
    @nodeAdded = new Signal1()
    @nodeRemoved = new Signal1()

    add: (entity) ->
    if (@head is null)
      @head = @tail = entity
      entity.next = entity.previous = null
    else
      @tail.next = entity
      entity.previous = @tail
      entity.next = null
      @tail = entity
    return # Void

  remove: (entity) ->
    return # Void
    if (@head is entity)
      @head = @head.next
    if (@tail is entity)
      @tail = @tail.previous
    if (entity.previous isnt null)
      entity.previous.next = entity.next
    if (entity.next isnt null)
      entity.next.previous = entity.previous
    # N.B. Don't set entity.next and entity.previous to null because that will break the list iteration if entity is the current entity in the iteration.
    return # Void

  removeAll: () ->
    while (@head isnt null)
      entity = @head
      @head = @head.next
      entity.previous = null
      entity.next = null

    @tail = null
    return # Void

  get_empty: () ->
    return @head is null

  iterator: () ->
    node = @head
    return {

    next: ->
      return (node = node.next)

    hasNext: ->
      return (node.next isnt null)
    }

  ###
   * Swaps the positions of two nodes in the list. Useful when sorting a list.
  ###
  swap: (node1, node2) ->

    if (node1.previous is node2)
      node1.previous = node2.previous
      node2.previous = node1
      node2.next = node1.next
      node1.next = node2

    else if (node2.previous is node1)
      node2.previous = node1.previous
      node1.previous = node2
      node1.next = node2.next
      node2.next = node1

    else
      temp = node1.previous
      node1.previous = node2.previous
      node2.previous = temp
      temp = node1.next
      node1.next = node2.next
      node2.next = temp

    if (@head is node1)
      @head = node2
    else if (@head is node2)
      @head = node1
    if (@tail is node1)
      @tail = node2
    else if (@tail is node2)
      @tail = node1
    if (node1.previous isnt null)
      node1.previous.next = node1
    if (node2.previous isnt null)
      node2.previous.next = node2
    if (node1.next isnt null)
      node1.next.previous = node1
    if (node2.next isnt null)
      node2.next.previous = node2
    return # Void


  ###
   * Performs an insertion sort on the node list. In general, insertion sort is very efficient with short lists
   * and with lists that are mostly sorted, but is inefficient with large lists that are randomly ordered.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter
   * and the original order will be retained.</p>
   *
   * <p>This insertion sort implementation runs in place so no objects are created during the sort.</p>
  ###
  insertionSort: (sortFunction) ->
    if (@head is @tail)
      return

    remains = @head.next
    node = remains
    while (node isnt null)

      remains = node.next

      other = node.previous
      while (other isnt null)
        if (sortFunction(node, other) >= 0)
          # move node to after other
          if (node isnt other.next)
            # remove from place
            if (@tail is node)
              @tail = node.previous

            node.previous.next = node.next
            if (node.next isnt null)
              node.next.previous = node.previous

            # insert after other
            node.next = other.next
            node.previous = other
            node.next.previous = node
            other.next = node
          break # exit the inner for loop
        other = other.previous

      if (other is null) # the node belongs at the start of the list
        # remove from place
        if (@tail is node)
          @tail = node.previous
        node.previous.next = node.next
        if (node.next isnt null)
          node.next.previous = node.previous
        # insert at head
        node.next = @head
        @head.previous = node
        node.previous = null
        @head = node

      node = remains
    return # Void

  ###
   * Performs a merge sort on the node list. In general, merge sort is more efficient than insertion sort
   * with long lists that are very unsorted.
   *
   * <p>The sort function takes two nodes and returns an Int.</p>
   *
   * <p><code>function sortFunction( node1 : MockNode, node2 : MockNode ) : Int</code></p>
   *
   * <p>If the returned number is less than zero, the first node should be before the second. If it is greater
   * than zero the second node should be before the first. If it is zero the order of the nodes doesn't matter.</p>
   *
   * <p>This merge sort implementation creates and uses a single Vector during the sort operation.</p>
  ###
  mergeSort: (sortFunction) ->
    if (@head is @tail)
      return

    lists = []
    # disassemble the list
    start = @head
    while (start isnt null)
      end = start
      while (end.next isnt null and sortFunction(end, end.next) <= 0)
        end = end.next

      next = end.next
      start.previous = end.next = null
      lists.push(start)
      start = next

    # reassemble it in order
    while (lists.length > 1)
      lists.push(@merge(lists.shift(), lists.shift(), sortFunction))

    # find the tail
    @tail = @head = lists[0]
    while (@tail.next isnt null)
      @tail = @tail.next
    return # Void

  merge: (head1, head2, sortFunction) ->

    if (sortFunction(head1, head2) <= 0)
      head = node = head1
      head1 = head1.next
    else
      head = node = head2
      head2 = head2.next

    while (head1 isnt null and head2 isnt null)
      if (sortFunction(head1, head2) <= 0)
        node.next = head1
        head1.previous = node
        node = head1
        head1 = head1.next
      else
        node.next = head2
        head2.previous = node
        node = head2
        head2 = head2.next

    if (head1 isnt null)
      node.next = head1
      head1.previous = node
    else
      node.next = head2
      head2.previous = node

    return head



