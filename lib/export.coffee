###
 *
 * export ash
 *
###
do (root=@, factory=(-> ash)) ->
  'use strict'
  ###
   * Export ash - umd header
  ###
  if 'function' is typeof define and define.amd
    define factory
  else if 'object' is typeof exports
    module.exports = factory()
  else
    root['ash'] = factory()
  return