var viewport = require('viewport')
var merge = require('merge')

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
    lineRatio: 1.45,
    minWidth: getComputedStyle(el).minWidth,
    maxWidth: getComputedStyle(el).maxWidth
  }, options)

  var minWidth = parseFloat(options.minWidth)
  var maxWidth = parseFloat(options.maxWidth)
  var widthDiff = maxWidth - minWidth
  var fontMin = options.min
  var fontDiff = options.max - fontMin
  var lineRatio = options.lineRatio

  function resize(){
    var width = parseFloat(getComputedStyle(el).width)
    var percent = (width - minWidth) / widthDiff
    var font = fontMin + (fontDiff * percent)
    el.style.lineHeight = font * lineRatio + 'px'
    el.style.fontSize = font + 'px'
  }

  viewport.addListener(resize)
  resize()
}
