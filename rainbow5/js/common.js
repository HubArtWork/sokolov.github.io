var swiper = new Swiper('.main-slider', {
	slidesPerView: 1,
  watchOverflow: true,
  loop: true,
  paginationClickable: true,
  navigation: {
    nextEl: '.main-wrap .swiper-button-next',
    prevEl: '.main-wrap .swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.about-slider', {
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesVisibility: true,
  watchOverflow: true,
  paginationClickable: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  	10: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 3,
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".card-swiper .swiper-button-next",
    prevEl: ".card-swiper .swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

$(document).ready(function(){

  $(document).on('click', function (e){
    var block1 = $(".header-bar,.header-bottom,.search, .search-ico, .search-close,.header-phone,.header-wrap");
    if (!block1.is(e.target) && block1.has(e.target).length === 0)
      close();
  });

  //header fixed
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300)
			$('.header').addClass('header-fixed');
		else
			$('.header').removeClass('header-fixed');
	});

  //header catalog
  $('.header-btn').on('click', function(e){
    e.preventDefault();

    $('.header-catalog').toggleClass('active');
    if($(window).outerWidth() < 980)
      $('.header-catalog__drop').slideToggle();
  });

  $('.header-catalog .drop-text').on('click', function(e){
    e.preventDefault();

    if($(window).outerWidth() < 980){
      $(this).toggleClass('active').next().slideToggle();
    }
  });

  //header phone
  $('.header-phone').on('click', function(){
    $('.header-phone,.header-wrap').toggleClass('active');
    $('html,body').removeClass('scroll-hidden');
    $('.header').removeClass('header-active');
    $('.search').removeClass('active');
  });

	//menu mob
	$('.header-bar').on('click', function(){
    $('html,body').toggleClass('scroll-hidden');
		$('.header').toggleClass('header-active');
    $('.search,.header-phone,.header-wrap').removeClass('active');
	});

  //search
  $('.search-ico, .search-close').on('click', function(e){
    e.preventDefault();

    $('.search').toggleClass('active');
    $('.header-phone,.header-wrap').removeClass('active');
    $('html,body').removeClass('scroll-hidden');
    $('.header').removeClass('header-active');
  });

  function close(){
    $('html,body').removeClass('scroll-hidden');
    $('.header').removeClass('header-active');
    $('.search,.header-phone,.header-wrap').removeClass('active');
  }

  //arrow toTop
  var topArrow = $('.arrow-top');
  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height())
      $(topArrow).addClass('arrow-active');
    else
      $(topArrow).removeClass('arrow-active');
  });
  $(topArrow).on('click', function(){
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });

  //about more
  $('.about-descr .primary-btn').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('active'))
      $(this).removeClass('active').html('<span><i>Подробнее</i></span>').parents('.about-descr').find('.about-text').slideUp();
    else
      $(this).addClass('active').html('<span><i>Скрыть</i></span>').parents('.about-descr').find('.about-text').slideDown();
  });

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');
	});

	//menu mob
	$('.catalog-sidebar .drop-text').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('active').next('.drop-list').slideToggle();
	});

	//fancybox
	$('[data-fancybox=""]').fancybox({
    autoFocus: false,
    autoCenter: false,
    touch: false
	});
	//youtube
	$('.link-youtube').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {}
    }
	});

});