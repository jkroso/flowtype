
var style = require('computed-style')
var viewport = require('viewport')
var merge = require('merge')
var css = require('css')

/**
 * init flowtype on `el`
 *
 * @param {Element} el
 * @param {Object} [options]
 * @api public
 */

module.exports = function(el, options){
	options = merge({
		min: 14,
		max: 18,
		lineRatio: 1.45
	}, options)

	var minWidth = ('min-width' in options ? options : style(el))['min-width']
	var maxWidth = ('max-width' in options ? options : style(el))['max-width']
	minWidth = parseFloat(minWidth)
	maxWidth = parseFloat(maxWidth)
	var widthDiff = maxWidth - minWidth
	var fontDiff = options.max - options.min

	function resize(){
		var width = parseFloat(style(el).width)
		var percent = (width - minWidth) / widthDiff
		var font = options.min + (fontDiff * percent)
		css(el, {
			'line-height': font * options.lineRatio,
			'font-size': font
		})
	}

	viewport.on('resize', resize)
	resize()
}