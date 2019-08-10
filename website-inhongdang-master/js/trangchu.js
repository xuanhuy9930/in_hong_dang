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

// menu
window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("bg-light");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

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
  if ($(document).scrollTop() > 150) {
      if (parseInt($("#IntroMenu").css("right")) < 0)
          $("#IntroMenu").animate({ "right": "25px" });
  } else {
      if (parseInt($("#IntroMenu").css("right")) > 0)
          $("#IntroMenu").animate({ "right": "-100px" });
  }
});
$('#IntroMenu a').smoothScroll();

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

//chitietdichvu


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("bg-light");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }