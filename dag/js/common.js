var swiper = new Swiper(".main-slider", {
  effect: "fade",
  watchSlidesVisibility: true,
  watchOverflow: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper('.post-slider', {
  slidesPerView: 2,
  watchOverflow: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    10: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper(".calendar-slider", {
  slidesPerView: 1, // or 'auto'
  slidesPerColumn: 2,
  watchSlidesVisibility: true,
  watchOverflow: true,
  slideToClickedSlide: true,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".pressCenter-slider", {
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".pressCenter-photos", {
  effect: "fade",
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchOverflow: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper('.links-slider', {
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    580: {
      slidesPerView: 1,
    },
    890: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    }
  }
});

$(document).ready(function(){

	//menu mob
	$('.header-bar').on('click', function(){
		$('body').toggleClass('header-active');
	});

  //search
  $('.header-row .search-ico, .search .close-ico, .header-mob').on('click', function(){
    $('.search').toggleClass('active');
  });

  //page-sidebar
  $('.page-mob').on('click', function(){
    $(this).parents('.page-wrap').toggleClass('active');
  });

  //drop
  $('.drop').on('click', function(){
    $(this).toggleClass('active');
  });
  $(document).on('click', function (e){
    var block = $(".drop");
    if (!block.is(e.target) && block.has(e.target).length === 0)
      $('.drop').removeClass('active');
  });

	//menu link
	$('.headerMob-title').on('click', function(){
		$(this).parents('.headerMob-block').toggleClass('active').find('ul').slideToggle();
	});
	$('.footer-title').on('click', function(){
		$(this).parents('.footer-block').toggleClass('active').find('ul').slideToggle();
	});

});