/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
	
	//-------------------------- Declrations -----------------------------------

	var scrollButton =  $("#scroll-top"),
		myHeader = $(".header");

	//-------------------------- Navbar -----------------------------------
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
      // Prevent default anchor click behavior
			event.preventDefault();

      // Store hash
			var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$(".side-menu").fadeOut(700);
			$('html, body').animate({
				scrollTop: ($(hash).offset().top)  - 30
			}, 1000, function () {
				
        // Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}  // End if
	});
	
	$('.nav a').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
	
	
	//-------------------------- About -----------------------------------
	$('.tab-buttons li').on('click', function () {
		$('.' + $(this).data('class')).fadeIn().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');

	});
	
	//-------------------------- Scroll Top -----------------------------------
	$(window).on("scroll", function () {
		if ($(this).scrollTop() >= 700) {
			scrollButton.show(500);
		} else {
			scrollButton.hide(500);
		}
	});
	scrollButton.on('click', function () {
		$("html, body").animate({scrollTop: 0}, 800);
		$('.links li').removeClass('active');
		$('.links li:first-child').addClass('active');
	});
		//-------------------------- Loding Screen  -----------------------------------
	$(window).on('load', function () {
		$(".site-loading .sk-cube-grid").fadeOut(400, function () {
			$("body").css("overflow", "auto");
			$(this).parent().fadeOut(400, function () {
				$(this).remove();
			});
		});
	});

		//-------------------------- Nice Scroll  -----------------------------------

	$("html").niceScroll({
        cursorcolor : '#0097A7',
        cursorwidth : '9px',
        cursorborder : 'none',
        cursorborderradius : '0',
		zindex: '2999'
    });
	
	/* Start Change Navbar when Scrolling */
	/*
	var navbar = $('.navbar');
	$(window).on('scroll',function(){
		if($(window).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	});
	*/
	/* End Change Navbar when Scrolling */
});