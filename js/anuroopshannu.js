/*global $*/
/*global TimelineMax*/
/*global TweenMax*/
/*global Back*/
/*global ScrollMagic*/
/*global Clipboard*/

$.gl.scramble('.heading');
var tl1 = new TimelineMax({
	paused: true
});
tl1.add(TweenMax.fromTo('.heading', 3, {
	scale: 0.2,
	autoAlpha: 0
}, {
	scale: 1,
	autoAlpha: 1
}));
var s1d1 = document.getElementById("s1d1");
var s1d2 = document.getElementById("s1d2");
var s1d3 = document.getElementById("s1d3");
var cb1 = document.getElementById("cb1");
var tb1 = document.getElementById("tb1");
var s2d1 = document.getElementById("s2d1");
var s2d2 = document.getElementById("s2d2");
var s2d3 = document.getElementById("s2d3");
var cb2 = document.getElementById("cb2");
var tb2 = document.getElementById("tb2");
var s3d1 = document.getElementById("s3d1");
var s3d2 = document.getElementById("s3d2");
var s3d3 = document.getElementById("s3d3");
var cb3 = document.getElementById("cb3");
var tb3 = document.getElementById("tb3");
var s4d1 = document.getElementById("s4d1");
var s4d2 = document.getElementById("s4d2");
var s4d3 = document.getElementById("s4d3");
var tl = new TimelineMax({
	paused: true
});
tl.add(TweenMax.staggerFromTo([s1d1, s1d2, s1d3], 1.0, {
	autoAlpha: 0
}, {
	autoAlpha: 1,
	ease: Back.easeInOut,
	repeat: 2
}, 0.1));
tl.add(TweenMax.to([s1d1, s1d2, s1d3], 0.3, {
	autoAlpha: 0
}));
tl.add(TweenMax.to([cb1, tb1], 0.5, {
	autoAlpha: 1
}));
tl.add(TweenMax.staggerFromTo([s2d1, s2d2, s2d3], 1.0, {
	autoAlpha: 0
}, {
	autoAlpha: 1,
	ease: Back.easeInOut,
	repeat: 1
}, 0.1));
tl.add(TweenMax.to([s2d1, s2d2, s2d3], 0.3, {
	autoAlpha: 0
}));
tl.add(TweenMax.to([cb2, tb2], 0.5, {
	autoAlpha: 1
}));
tl.add(TweenMax.staggerFromTo([s3d1, s3d2, s3d3], 1.0, {
	autoAlpha: 0
}, {
	autoAlpha: 1,
	ease: Back.easeInOut,
	repeat: 1
}, 0.1));
tl.add(TweenMax.to([s3d1, s3d2, s3d3], 0.3, {
	autoAlpha: 0
}));
tl.add(TweenMax.to([cb3, tb3], 0.5, {
	autoAlpha: 1
}));
tl.add(TweenMax.staggerFromTo([s4d1, s4d2, s4d3], 1.5, {
	autoAlpha: 0
}, {
	autoAlpha: 1,
	ease: Back.easeInOut,
	repeat: -1
}, 0.1));
var ctrl = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	offset: 3300,
	reverse: false
}).on('start', function () {
	tl.play();
}).addTo(ctrl);
$(document).ready(function () {
	window.onload = function () {
			$('body').css('background-color', 'white');
			$('#content').css('visibility', 'visible');
			$('#content').css('opacity', '1');
		// });
		tl1.play();
		$.gl.unscramble('.heading', function () {});
	}
	new Clipboard('.btn-large');
});
$('.port').typeIt({
	lifeLike: true,
	autoStart: false,
	speed: 65,
	deleteSpeed: 100
}).tiType('PORTFOLIO') ;
$('#tr2').typeIt({
	lifeLike: true,
	autoStart: false,
	speed: 65,
	deleteSpeed: 100
}).tiType('About Me') ;
$("#plank1,#plank2,#plank3,#plank4,#plank5,#plank6,#plank7,#plank8,#plank9,#plank10,#plank11,#plank12,#plank13,#plank14").flip({
	axis: 'y',
	trigger: 'hover',
});