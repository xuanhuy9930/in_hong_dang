//slider
$(function() {	
	var Page = (function() {
        var $navArrows = $( '#nav-arrows' ).hide(),
			$shadow = $( '#shadow' ).hide(),
			slicebox = $( '#sb-slider' ).slicebox( {
				onReady : function() {
                    $navArrows.show();
                    $shadow.show();
                },
				orientation : 'h',
                cuboidsRandom : false,
                speed : 600,
                interval: 4000,
                autoplay : true,
                colorHiddenSides : '#0aa4ab',	
                fallbackFadeSpeed : 300

            } ),
            init = function() {
                initEvents();
            },
            initEvents = function() {
                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {
                    slicebox.next();
                    return false;
                } );
                $navArrows.children( ':last' ).on( 'click', function() {
                    slicebox.previous();
                    return false;
                } );
            };
            return { init : init };
        })();
        Page.init();
    });


// hover icon rontate
$("#hover-show").hover(function () {
    $('.list-service').slideDown("slow");
});
$(".list-service").mouseleave(function () {
    $('.list-service').hide("slow");
});

//e-about
$("#e-about .e-column").first().removeClass('col-sm-2').addClass("col-sm-4");
$('#e-about .e-column').hover(function () {
    $('#e-about .e-column').removeClass('col-sm-2 col-sm-4').addClass('col-sm-2');
    $(this).removeClass('col-sm-2').addClass('col-sm-4');

});

$("#hover-show").hover(function () {
    $('.list-service').slideDown("slow");
});
$(".list-service").mouseleave(function () {
    $('.list-service').hide("slow");
});
//click thu ngo
// $(document).ready(function () {
    
//     "use strict";
//     $('.fancybox').fancybox({
//         padding: 0,
//         helpers: {
//             overlay: {
//                 locked: false
//             }
//         }
//     });
// });

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

// info
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        if (parseInt($("#IntroMenu").css("right")) < 0)
            $("#IntroMenu").animate({ "right": "35px" });
    } else {
        if (parseInt($("#IntroMenu").css("right")) > 0)
            $("#IntroMenu").animate({ "right": "-35px" });
    }
});

//back to top

var $backToTop = $(".back-to-top");
$backToTop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});
$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});


