$(document).ready(function(){

	/* -- start sliders -- */

	var swiperMain = new Swiper('.main-slider', {
	  slidesPerView: 1,
	  watchOverflow: true,
	  speed: 500,
	  navigation: {
	    nextEl: '.main-actions .swiper-button-next',
	    prevEl: '.main-actions .swiper-button-prev',
	  },
	});
	swiperMain.on('slideChange', function (e) {
		$('#main-num').html('<span>0' + parseInt(swiperMain.activeIndex + 1) + '/</span>0' + e.slides.length);
  });

  var swiper = new Swiper('.products-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.products-first .swiper-button-next',
	    prevEl: '.products-first .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.products-slider2', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.products-second .swiper-button-next',
	    prevEl: '.products-second .swiper-button-prev',
	  },
	});

	var swiper = new Swiper('.facts-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.facts .swiper-button-next',
	    prevEl: '.facts .swiper-button-prev',
	  },
	  breakpoints: {
	  	10: {
	      spaceBetween: 10,
	    },
	    651: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiper = new Swiper('.novelties-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.novelties .swiper-button-next',
	    prevEl: '.novelties .swiper-button-prev',
	  },
	  breakpoints: {
	  	10: {
	      spaceBetween: 10,
	    },
	    651: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiper = new Swiper('.blogPost-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.blogPost .swiper-button-next',
	    prevEl: '.blogPost .swiper-button-prev',
	  },
	  breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    651: {
	      spaceBetween: 20,
	    },
	  }
	});

	var swiper = new Swiper('.inst-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.inst .swiper-button-next',
	    prevEl: '.inst .swiper-button-prev',
	  },
	  breakpoints: {
	  	10: {
	      spaceBetween: 15,
	    },
	    651: {
	      spaceBetween: 20,
	    },
	  }
	});

	/* -- end sliders -- */

	/* -- start products cards -- */
	//inputs
	$('.inputs-plus,.inputs-minus').on('click', function(){
		var parents = $(this).parents('.inputs'),
				cell = $(parents).find('input'),
			 	num = parseInt($(cell).val());
		if($(this).hasClass('inputs-plus')){
			$(cell).val(num + 1);
		}
		else{
			if(num != 0){
				$(cell).val(num - 1);
			}
		}
	});

	//menu mob
	$('.product-bottom .second-btn, .product-block .second-btn').on('click', function(e){
		e.preventDefault();

		$(this).parents('.product-wrap').toggleClass('active');
	});
	/* -- end products cards -- */

	/* -- start catalog -- */

	//catalog
	$('.catalog-mob .primary-btn, .catalog-filter .close-ico').on('click', function(e){
		e.preventDefault();
		$('.catalog-filter,.catalog-bg').toggleClass('active');
	});

	/* -- end catalog -- */

	//disabled
	$('.disabled').on('click', function(e){
		e.preventDefault();
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
	$(".accordeon .accordeon-block").hide().prev().click(function() {

		if($(this).parents(".accordeon").hasClass('accordeon-active'))
			$(".accordeon").removeClass('accordeon-active');
		else {
			$(".accordeon").removeClass('accordeon-active');
			$(this).parents(".accordeon").addClass('accordeon-active');
		}

		$(this).parents().find(".accordeon-block").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});

	$(document).on('click', function (e){
		var block = $(".select");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.select').removeClass('active');
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