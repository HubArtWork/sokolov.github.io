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
	var swiper = new Swiper('.products-slider3', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.cards-products .swiper-button-next',
	    prevEl: '.cards-products .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.catalog-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.catalog-products .swiper-button-next',
	    prevEl: '.catalog-products .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.team-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.team .swiper-button-next',
	    prevEl: '.team .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.readMore-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 22,
	  navigation: {
	    nextEl: '.readMore .swiper-button-next',
	    prevEl: '.readMore .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.repair-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.repair .swiper-button-next',
	    prevEl: '.repair .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.beforeAfter-slider', {
	  slidesPerView: 1,
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.beforeAfter .swiper-button-next',
	    prevEl: '.beforeAfter .swiper-button-prev',
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

	var swiper = new Swiper('.aboutUs-slider', {
	  slidesPerView: 2,
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.aboutUs .swiper-button-next',
	    prevEl: '.aboutUs .swiper-button-prev',
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
	var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
	    nextEl: '.mySwiper2 .swiper-button-next',
	    prevEl: '.mySwiper2 .swiper-button-prev',
	  },
  });
  var swiper = new Swiper('.cards-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.cards-main-middle .swiper-button-next',
	    prevEl: '.cards-main-middle .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.cards-slider2', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.cards-main-middle2 .swiper-button-next',
	    prevEl: '.cards-main-middle2 .swiper-button-prev',
	  },
	});
	var swiper = new Swiper('.ways-slider', {
	  slidesPerView: 'auto',
	  freeMode: true,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.ways .swiper-button-next',
	    prevEl: '.ways .swiper-button-prev',
	  },
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
	$('.product-bottom .second-btn, .product-block .second-btn, .product-block .close-ico').on('click', function(e){
		e.preventDefault();

		$(this).parents('.product-wrap').toggleClass('active');
	});
	/* -- end products cards -- */

	/* -- start catalog -- */

	//catalog
	$('.catalog-mob .primary-btn, .catalog-filter .close-ico,.catalog-bg').on('click', function(e){
		e.preventDefault();
		$('.catalog-filter,.catalog-bg').toggleClass('active');
	});
	//catalog-filter-subtitle
	$('.catalog-filter-subtitle').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active').next('.catalog-filter-block').slideToggle();
	});

	/* -- end catalog -- */
	/* -- start cards -- */

	//catalog-filter-subtitle
	$('.specifications-accordeon-top').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active').next('.specifications-accordeon-block').slideToggle();
	});

	/* -- end cards -- */

	//disabled
	$('.disabled').on('click', function(e){
		e.preventDefault();
	});

	//local
	$('.header-local-top').on('click', function(){
		$('.header-local').toggleClass('active');
	});
	//dropBasket
	$('.dropBasket-top').on('click', function(e){
		e.preventDefault();
		$('.dropBasket-block').toggleClass('active');
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
		$('.menu,.menu-bg').toggleClass('active');
	});
	//drop
	$('.drop-text').on('click', function(e){
		e.preventDefault();
		if($(window).outerWidth() <= 1200){
			$(this).next('.drop-list').slideToggle();
		}
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

	//sidebar fixed
	if($('*').is('.sidebar')){

		w = $( window ).width();

		var sidebar = $('.sidebar'),
				sidebarPos = $(sidebar).offset().top - 20,
				block = $('.sidebarPos').height();

		$(window).on('scroll', function(){
			if($(window).scrollTop() >= sidebarPos){
				if($(window).scrollTop() >= block - $('.sidebar-wrap').height()){
					$(sidebar).removeClass('sidebar-fixed').addClass('sidebar-absolute').css('right', '0');
				}
				else
					$(sidebar).addClass('sidebar-fixed').removeClass('sidebar-absolute').css('right', ($(window).innerWidth() - $('.sidebarPos').innerWidth()) / 2 + 'px');
			}
			else
				$(sidebar).removeClass('sidebar-fixed').removeClass('sidebar-absolute').css('right', '0');
		});
	}

	if($( "select" ).length != 0){
		$('select').select2();
		if($( "#select-1" ).length != 0)
			$("#select-1 select").select2({dropdownParent: $("#select-1")});
		if($( "#select-2" ).length != 0)
			$("#select-2 select").select2({dropdownParent: $("#select-2")});
		if($( "#select-3" ).length != 0)
			$("#select-3 select").select2({dropdownParent: $("#select-3")});
		if($( "#select-4" ).length != 0)
			$("#select-4 select").select2({dropdownParent: $("#select-4")});
		if($( "#select-5" ).length != 0)
			$("#select-5 select").select2({dropdownParent: $("#select-5")});
		if($( "#select-6" ).length != 0)
			$("#select-6 select").select2({dropdownParent: $("#select-6")});
		if($( "#select-7" ).length != 0)
			$("#select-7 select").select2({dropdownParent: $("#select-7")});
		if($( "#select-8" ).length != 0)
			$("#select-8 select").select2({dropdownParent: $("#select-8")});
		if($( "#select-9" ).length != 0)
			$("#select-9 select").select2({dropdownParent: $("#select-9")});
		if($( "#select-10" ).length != 0)
			$("#select-10 select").select2({dropdownParent: $("#select-10")});
	}

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