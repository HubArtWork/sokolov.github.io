var swiper = new Swiper('.links-slider', {
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  	10: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
    },
    890: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 4,
    }
  }
});

var swiper = new Swiper('.main-story__wrapper', {
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  mousewheel: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  	10: {
      slidesPerView: 'auto',
    },
  	600: {
      slidesPerView: 5,
    },
    650: {
      slidesPerView: 6,
    },
    769: {
      slidesPerView: 5,
    },
    970: {
      slidesPerView: 6,
    },
    1100: {
      slidesPerView: 8,
    }
  }
});

var swiper = new Swiper('.categories-wrapper', {
	slidesPerView: 'auto',
  freeMode: true,
  mousewheel: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.news-slider', {
  slidesPerView: 1,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function(){

	//menu mob
	$('.header-bar').on('click', function(){
		$('body').toggleClass('header-active');
	});

	//menu link
	$('.headerMob-title').on('click', function(){
		$(this).parents('.headerMob-block').toggleClass('active').find('ul').slideToggle();
	});
	$('.footer-title').on('click', function(){
		$(this).parents('.footer-block').toggleClass('active').find('ul').slideToggle();
	});

});