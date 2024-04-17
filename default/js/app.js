'use strict';

$( document ).ready(function() {
  //preloader
  const preloaderHolder = document.querySelector(".preloader-holder");

  setTimeout(() => {
    preloaderHolder.style.opacity = "0";
    setTimeout(() => {
      preloaderHolder.style.display = "none";
    }, 300);
  }, 300);
  
  new WOW().init();
});

const hasChildrenLinks = document.querySelectorAll('.has_children a');
for (let i = 0; i < hasChildrenLinks.length; i++) {
  hasChildrenLinks[i].addEventListener('click', function() {
    const hasChildren = this.parentNode;
    const subMenu = this.nextElementSibling;
    
    hasChildren.classList.toggle('active');
    subMenu.classList.toggle('active');
  });
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Show or hide the sticky footer button
$(window).on("scroll", function() {
	if ($(this).scrollTop() > 200) {
			$(".back-to-top").fadeIn(200);
	} else {
			$(".back-to-top").fadeOut(200);
	}
});

// Animate the scroll to top
$(".back-to-top").on("click", function(event) {
	event.preventDefault();
	$("html, body").animate({scrollTop: 0}, 300);
});

const portfolioLightbox = GLightbox({
  selector: '.lightbox-item'
});


$('.sp_roadmap_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="prev"><i class="las la-angle-left"></i></button>',
  nextArrow: '<button type="button" class="next"><i class="las la-angle-right"></i></button>',
  dots: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 500,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})
.on('setPosition', function (event, slick) {
	slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});


$('.sp_team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 1000,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.brand-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  speed: 1500,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});


// testimonial_slider
$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: false,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  speed: 500,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow: $(".testimonial-prev"),
  nextArrow: $(".testimonial-next"),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// sp_transaction_slider
$('.sp_transaction_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 2,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});