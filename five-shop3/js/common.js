$(document).ready(function(){

	var swiperMain = new Swiper('.main-slider', {
	  slidesPerView: 1,
	  watchOverflow: true,
	  speed: 500,
	  utoplayDisableOnInteraction: false,
	  autoplay: {
      delay: 7000,
      disableOnInteraction: false
  	},
  	effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  on: {
	    init: function() {
	    	$('#main-num').html('<span>1<b>/</b> </span>' + 3);
	    },
	    slideChange: function() {
	    	$('.main-bar').removeClass('run-animation');
	      $('#main-num').html('<span>' + parseInt(this.realIndex + 1) + ' <b>/</b> </span>' + this.slides.length);
	      setTimeout(function(){
	      	$('.main-bar').addClass('run-animation');
	      }, 1)
	    },
	  }
	});

	var swiperMain = new Swiper('.products-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  utoplayDisableOnInteraction: false,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiperMain = new Swiper('.popular-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 19,
	  utoplayDisableOnInteraction: false,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 19,
	    },
	  }
	});

	var swiperMain = new Swiper('.cloth-main', {
	  slidesPerView: 1,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  noSwiping: true,
	  noSwipingClass: 'swiper-slide',
	  effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	  navigation: {
	    nextEl: '.cloth-actions .swiper-button-next',
	    prevEl: '.cloth-actions .swiper-button-prev',
	  },
    on: {
	    init: function() {
	    	$('.cloth-num').html('<span>01<b>/</b> </span>' + '02');
	    },
	    slideChange: function() {
	      $('.cloth-num').html('<span>0' + parseInt(this.realIndex + 1) + '<b>/</b> </span>0' + this.slides.length);
	    },
	  },
	});
	var swiperMain = new Swiper('.cloth-main2', {
	  slidesPerView: 1,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  noSwiping: true,
	  noSwipingClass: 'swiper-slide',
	  effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	  navigation: {
	    nextEl: '.cloth-actions .swiper-button-next',
	    prevEl: '.cloth-actions .swiper-button-prev',
	  },
    on: {
	    init: function() {
	    	$('.cloth-num').html('<span>01<b>/</b> </span>' + '02');
	    },
	    slideChange: function() {
	      $('.cloth-num').html('<span>0' + parseInt(this.realIndex + 1) + '<b>/</b> </span>0' + this.slides.length);
	    },
	  },
	});

	var swiperMain = new Swiper('.cloth-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 23,
	  utoplayDisableOnInteraction: false,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
	  breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 23,
	    },
	  }
	});

	var swiperMain = new Swiper('.universal-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiperMain = new Swiper('.cloth-slider2', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  utoplayDisableOnInteraction: false,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
	  breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiperMain = new Swiper('.cards-slider', {
	  slidesPerView: 1,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  noSwiping: true,
	  noSwipingClass: 'swiper-slide',
	  effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	  navigation: {
	    nextEl: '.cloth-actions .swiper-button-next',
	    prevEl: '.cloth-actions .swiper-button-prev',
	  },
    on: {
	    init: function() {
	    	$('.cloth-num').html('<span>01<b>/</b> </span>' + '02');
	    },
	    slideChange: function() {
	      $('.cloth-num').html('<span>0' + parseInt(this.realIndex + 1) + '<b>/</b> </span>0' + this.slides.length);
	    },
	  },
	});

	var swiperMain = new Swiper('.catalog-slider', {
	  slidesPerView: 1,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  noSwiping: true,
	  noSwipingClass: 'swiper-slide',
	  effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	  navigation: {
	    nextEl: '.cloth-actions .swiper-button-next',
	    prevEl: '.cloth-actions .swiper-button-prev',
	  },
    on: {
	    init: function() {
	    	$('.cloth-num').html('<span>01<b>/</b> </span>' + '02');
	    },
	    slideChange: function() {
	      $('.cloth-num').html('<span>0' + parseInt(this.realIndex + 1) + '<b>/</b> </span>0' + this.slides.length);
	    },
	  },
	});

	var swiperMain = new Swiper('.cloth-slider3', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 65,
	  utoplayDisableOnInteraction: false,
	  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
	  breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    769: {
	      spaceBetween: 65,
	    },
	  }
	});

	/*$("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
	});*/

	//basket
	$('.header-actions .basket-btn').on('click', function(e){
		e.preventDefault();
		$('.header-basket').toggleClass('active');
	});
	$(document).on('click', function (e){
		var block = $(".header-actions .basket-btn,.header-basket");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.header-basket').removeClass('active');
	});

	//ordering
	$('.ordering-top').on('click', function(){
		$(this).parents('.ordering').toggleClass('active').find('.ordering-content').slideToggle();
	});

	//brands
	if($('.brands').length){
		var filit = 6;

		if($(window).outerWidth() <= 1450)
			var filit = 4;
		else
			var filit = 6;

		$(".brands-col:nth-child(n + " + (filit + 1) + ")").hide();

		$(window).on('resize', function(){
			if($(window).outerWidth() <= 1450){
				var filit = 4;
				$(".brands-col:nth-child(n + " + (filit + 1) + ")").hide();
			}
			else{
				var filit = 6;
				$(".brands-col:nth-child(n + " + (filit + 1) + ")").hide();
				$(".brands-col:nth-child(-n + " + filit + ")").show();
			}
		});


		$(".section-block .section-btn").click(function(e) {
		  e.preventDefault();
		  
		  if ($(this).parents('.brands-block').find('.brands-b').siblings(".brands-col:eq(" + filit + ")").is(":hidden")) {
		    $(this).parents('.brands-block').find('.brands-b').siblings(".brands-col:hidden").show(400);
		  } else {
		    $(this).parents('.brands-block').find('.brands-b').siblings(".brands-col:nth-child(n + " + (filit + 1) + ")").hide(400);
		  }
		});
	}

	//arrow toTop
	$('.footer-up').on('click', function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//modal-education
	$('.modal-education .modal-next').on('click', function(e){
		e.preventDefault();
		$(this).parents('.modal-education-step').removeClass('active').next().addClass('active');
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');

		//if($(window).width() < 840 && $(this).parents('.steps'))
		//	$('html, body').animate({scrollTop : $('#steps').offset().top + ($('#steps').outerHeight() - $(window).height())},300);
		//setTimeout(function(){ $('.portfolio-slider').slick('refresh'); }, 100);
	});

	//accordeons
	$(".faq-accordeon-btn").on('click', function(){

		$(this).toggleClass('active').parents('.faq-accordeon').find('.faq-accordeon-content').slideToggle();

	});

	//cards
	$(".cards-num").on('click', function(){
		$(this).toggleClass('active');
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
	$('.modal-close').click(function(e){
		e.preventDefault();

	  $.fancybox.close();
	});

});