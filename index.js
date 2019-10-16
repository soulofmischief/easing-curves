var bezier = require( 'bezier-easing' )


module.exports = {
  easeInOutSine: bezier( 0.445, 0.05, 0.55, 0.95 ),
  easeOutQuint: bezier( 0.23, 1, 0.32, 1 ),
  easeOutCircle: bezier(0.075, 0.82, 0.165, 1),
  easeOutExpo: bezier(0.19, 1, 0.22, 1)
}
