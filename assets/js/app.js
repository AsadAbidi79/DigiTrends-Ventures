window.scrollTo(0, 0)

//////////// Navbar Background Change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

///////// Navbar disappear while scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "500ms all";
  } else {
    document.getElementById("navbar").style.top = "-1500px";
    document.getElementById("navbar").style.transition = "500ms all";
  }
  prevScrollpos = currentScrollPos;
}

////////// Loader
// const myTimeout = setTimeout(() => {
//   $('#loader').hide();
//   $('#main').show();
// }, 1200);
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

$(".button_su_inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$(".button_su_inner").mouseleave(function (e) {

  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");

});
// swiper element
const swiperEl2 = document.querySelector('.swiper-mobile-1');
// swiper parameters
const swiperParams2 = {
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    }
  },
  on: {
    init() {
      // ...
    },
  },
};
// now we need to assign all parameters to Swiper element
Object.assign(swiperEl2, swiperParams2);
// and now initialize it
swiperEl2.initialize();

(function ($) {

  "use strict";

  // Testimonial Carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'zoomIn',
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 300,
      autoplay: 7000,
      navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }

})(window.jQuery);

