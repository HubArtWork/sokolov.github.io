$(document).ready(function(){

	//select2
	$('.js-example-basic-single').select2({
		minimumResultsForSearch: -1
	});
	$(".js-select2").select2({
		closeOnSelect : false,
		placeholder : "Добавить еще",
		allowHtml: true,
		allowClear: true,
		tags: true // создает новые опции на лету
	});
	$(".js-select3").select2({
		closeOnSelect : false,
		placeholder : "3-х разовое питание с лечением",
		tags: true // создает новые опции на лету
	});

	if($(window).outerWidth() > 768)
		$( "#datepicker" ).datepicker({ numberOfMonths: 2,timePicker: true, });
	else
		$( "#datepicker" ).datepicker();

	var swiper = new Swiper('.stock-slider', {
	  slidesPerView: 1,
	  watchOverflow: true,
	  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	});
	if ($(window).outerWidth() <= 768) {
		var swiper = new Swiper(".popular-slider", {
		  spaceBetween: 10,
		  slidesPerView: 2,
		  watchOverflow: true,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		  breakpoints: {
		  	10: {
		  		slidesPerView: 1,
		  		spaceBetween: 0,
		    },
		    600: {
		  		slidesPerView: 2,
		  		spaceBetween: 10,
		    },
		  }
		});
	}
	if ($('.sanatoriums-slider').length > 0) {
		/* Swiper
		**************************************************************/
		var swiper2 = Swiper;
		var init2 = false;

		/* Which media query
		**************************************************************/
		function swiperMode() {
		    var mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
		    var tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
		    var desktop = window.matchMedia('(min-width: 1025px)');

		    // Enable (for mobile)
		    if(mobile.matches) {
		        if (!init2) {
		        	init2 = true;
		        	swiper2 = new Swiper(".sanatoriums-slider", {
							  spaceBetween: 10,
							  slidesPerView: 2,
							  watchOverflow: true,
							  pagination: {
							    el: '.swiper-pagination',
							    clickable: true,
							  },
							  breakpoints: {
							  	10: {
							  		slidesPerView: 1,
							  		spaceBetween: 0,
							    },
							    600: {
							  		slidesPerView: 2,
							  		spaceBetween: 10,
							    },
							  }
							});
		        }

		    }
		}

		/* On Load
		**************************************************************/
		window.addEventListener('load', function() {
		    swiperMode();
		});

		/* On Resize
		**************************************************************/
		window.addEventListener('resize', function() {
		    swiperMode();
		});
	}
	var swiper = new Swiper('.testimonials-slider', {
	  slidesPerView: 2,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 21,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  breakpoints: {
	  	10: {
	      slidesPerView: 'auto',
	      spaceBetween: 10,
	    },
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 21,
	    },
	  }
	});
	var swiper = new Swiper('.blog-slider', {
	  slidesPerView: 3,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 30,
	  navigation: {
	    nextEl: '.blog .swiper-button-next',
	    prevEl: '.blog .swiper-button-prev',
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  breakpoints: {
	  	10: {
	      slidesPerView: 1,
	    },
	    650: {
	      slidesPerView: 2,
	    },
	    950: {
	      slidesPerView: 3,
	    },
	  }
	});

	//popular select
	$('.popular-select-top').on('click', function(){
		$('.popular-select').toggleClass('active');
	});
	$('.drop-li a').on('click', function(){
		$('.popular-select').removeClass('active');
		$('.popular-select-top').html($(this).html());
	});

	//sanatoriums select
	$('.sanatoriums-head-mob').on('click', function(){
		$('.sanatoriums-head-wrap').toggleClass('active');
	});

	//drop
	$('.drop-top').on('click', function(e){
		e.preventDefault();
		$('.drop').toggleClass('active');
	});
	$(document).on('click', function (e){
		var block = $(".drop");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.drop').removeClass('active');
	});
	$('.header-bar').on('click', function(e){
		e.preventDefault();
		$('.header').toggleClass('header-active');
	});

	//main-drop
	$('.main-drop-top').on('click', function(e){
		e.preventDefault();
		if($(this).parents('.main-drop').hasClass('active'))
			$('.main-drop').removeClass('active');
		else{
			$('.main-drop').removeClass('active');
			$(this).parents('.main-drop').addClass('active');
		}
	});
	$(document).on('click', function (e){
		var block = $(".main-drop");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.main-drop').removeClass('active');
	});

	//menu scroll
	$('.link-scroll').on('click', 'a', function(e){
		e.preventDefault();
		var itemId = $(this).attr('href'),
				blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop},900);

		//$('.header').removeClass('header-active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');

		if($(this).hasClass('sanatoriums-li')){
			$('.sanatoriums-head-wrap').removeClass('active');
			$('.sanatoriums-head-mob').html($(this).html());
		}
	});

});