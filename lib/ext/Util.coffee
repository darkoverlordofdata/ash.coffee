###*
 * @constructor
###
class ash.ext.Util

	###*
	 * Get Class Name
	 *
	 * closure compiler changes the class name, or sets it to ''
	 * In that case, add a static className property to all
	 * Nodes and Components so they can be identified.
	 *
	 * @param {Function} klass
	 * @return {string}
	###
	@getClassName: (klass) ->
		return klass.className ? klass.name
