
requirejs.config({
    paths: {
        'jquery': 'jquery.min',
	 'stickit': 'stickit'
    },
     shim:{
        deps:["jquery"], // jquery.highlight dependeps on jquery so it will load after jquery has been loaded 
        exports:"stickit"
   }
});

define('jquery-private', ['jquery'], function (jq) {
    return jq.noConflict( true );
});

require(['jquery-private','typewrite.min','stickit'],function($){
	document.title = 'Malik Moren';
			$(document).ready(function() {
				setTimeout(function() {
						$(window).scrollTop(0);
				}, 1000);
			$('#lights').click(function(event) {
				$('body').toggleClass('dark');
			});
			var colorJect;
			var $this;
			$('[data-colors]').mouseenter(function(event) {
				colorJect = $(this).data('colors');
				$this = $(this);
				for (var i in colorJect) {
						$this.css(i, colorJect[i]);
				}
			}).mouseleave(function(event) {
				for (var i in colorJect) {
						$this.css(i, 'initial'); //sorry IE :(
				}
			});
			let introtype = new typeWrite(".intro .type", {
				'texts': ['I am a junior Front-End Developer & a sophomore of the University of Lodz, currently working as a freelancer. I stand on a sweet spot where design & code intersects.'],
				'loop': false,
				'cursor': ' ',
				'reverseDelay': 1000,
				'speed': 20
			}).start();
			document.querySelector(".intro .type").addEventListener("typeDone", function() {
				new typeWrite(".intro .type2", {
						'texts': ['Do you want to grab a coffee or have a talk?'],
						'loop': false,
						'reverseDelay': 1000,
						'cursor': ' ',
						'speed': 20
				}).start();
			});
			document.querySelector(".intro .type3").addEventListener("typeDone", function() {
				$('body > header p:first-child').fadeIn().css('display', 'inline-block');
			})
			document.querySelector(".intro .type2").addEventListener("typeDone", function() {
				new typeWrite(".intro .type3", {
						'texts': ['I would love to hear from you'],
						'loop': false,
						'reverseDelay': 1000,
						'speed': 50,
						'cursor': ' :)'
				}).start();
			});
			new typeWrite(".typewrite-row h2", {
				'texts': ['Typewrite.js'],
				'loop': false,
				'reverseDelay': 1000,
				'speed': 50,
				'cursor': ' |'
			}).start();
			$('#polski-mode').click(function(event) {
				if ($('body').attr('lang') == 'en') {
						$('[data-polski]').each(function(index, el) {
								$(this).attr('data-angielski', $(this).text());
								$(this).text($(this).attr('data-polski'));
						});
						$('#polski-mode').text('Angielski');
						$('body').attr('lang', 'pl');
				} else {
						$('[data-angielski]').each(function(index, el) {
								$(this).text($(this).attr('data-angielski'));
						});
						$('body').attr('lang', 'en');
						$('#polski-mode').text('Polski');
				}
			});
			var opacify = function(){
				var header = $('body');
				var range = 200;
				var target = $('.intro');
				var targetHeight = target.outerHeight();
				var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
				if (scrollPercent >= 0) {
						target.css('opacity', scrollPercent);
				}
				$(".fix").stick_in_parent();
		}
			$(document)
			.scroll(opacify);
			console.log('thanks for checking the source');
		})
});
