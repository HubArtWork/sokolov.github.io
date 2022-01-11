var swiper = new Swiper('.testimonials-slider', {
	slidesPerView: 'auto',
  freeMode: true,
  watchOverflow: true,
  spaceBetween: 4,
});

var swiper = new Swiper('.comparison-slider', {
	slidesPerView: 'auto',
  watchOverflow: true,
  spaceBetween: 24,
  mousewheel: true,
  visibilityFullFit: true,
});

$(document).ready(function(){

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

	//disabled
	$('.disabled').on('click', function(e){
		e.preventDefault();
	});

	//lang
	$('.header-lang-top').on('click', function(e){
		if($(window).outerWidth() > 768){
			e.preventDefault();

			if($(this).parents('.header-lang').hasClass('active'))
				$('.header-lang').removeClass('active');
			else{
				$('.header-lang').removeClass('active');
				$(this).parents('.header-lang').addClass('active');
			}
		}
	});
	$(document).on('click', function (e){
		var block = $(".header-lang");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.header-lang').removeClass('active');
	});
	//lang mob
	$('.header-lang-top').on('click', function(e){
		e.preventDefault();

		if($(window).outerWidth() <= 768){
			$(this).parents('.header-lang').toggleClass('active').find('.header-lang-list').slideToggle();
		}
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	//drop
	$('.drop-top').on('click', function(e){
		if($(this).text() == 'Каталог')
			e.preventDefault();
		if(!$(this).parent().hasClass('drop-catalog')){

			if($(window).outerWidth() <= 1230){
				$(this).toggleClass('active').next('.drop-list').slideToggle().parent('.drop');
			}
		}
	});

	if($(window).outerWidth() > 1230){
		$(".drop").hover(function() {
		    $(this).addClass("drop-hover");
			}, function() {
			    $(this).removeClass("drop-hover");
		});
	}

	$('.video .post-img').on('click', function(e){
		e.preventDefault();

		var attr = $(this).attr('data-url');

		$(this).addClass('active').find('iframe').attr('src', attr);
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
	if($('*').is('.ordering-sidebar')){

		w = $( window ).width();

		var sidebar = $('.ordering-sidebar-wrap'),
				sidebarPos = $(sidebar).offset().top - 20,
				block = $('.page-top').height() + $('.ordering-row').height();

		$(window).on('scroll', function(){
			if($(window).scrollTop() >= sidebarPos){
				if($(window).scrollTop() >= block - $(sidebar).height()){
					$(sidebar).removeClass('sidebar-fixed').addClass('sidebar-absolute').css('right', '0');
				}
				else
					$(sidebar).addClass('sidebar-fixed').removeClass('sidebar-absolute').css('right', ($(window).innerWidth() - $('.ordering-row').innerWidth()) / 2 + (($('.ordering-row').innerWidth() - $('.ordering-row').width()) / 2) + 'px');
			}
			else
				$(sidebar).removeClass('sidebar-fixed').removeClass('sidebar-absolute').css('right', '0');
		});
	}

	//fancybox
	$('[data-fancybox=""]').fancybox({
    autoFocus: false,
    autoCenter: false,
    touch: false,
    afterShow: function () {
      modalSlider();
    },
	});
	//youtube
	$('.link-youtube').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {}
    }
	});
	//fancybox close
	$('.modal .sidebar-close').click(function() {
    $.fancybox.close();
	});

	//slider range
  if($( "#range-1" ).length != 0){
    $( "#range-1" ).slider({
    	range: true,
      min: 1,
      max: 7,
      step: 1,
      values: [ 3, 5 ],
      slide: function( event, ui ) {
        var x1 = ui.values[ 0 ],
        		x2 = ui.values[ 1 ];
        $(this).parents('.catalog-range').find('.catalog-range-1').text(x1);
        $(this).parents('.catalog-range').find('.catalog-range-2').text(x2);
      }
    });
  }

  //filters-btn
	$('.filters-btn, .catalog-sidebar .sidebar-close, .aboutUs-sidebar .close-ico').on('click', function(e){
		e.preventDefault();

		if($(this).hasClass('filters-btn-menu'))
			$('.aboutUs-sidebar').toggleClass('active');
		else if($(this).hasClass('close-ico'))
			$('.catalog-sidebar,.aboutUs-sidebar').removeClass('active');
		else
			$('.catalog-sidebar').toggleClass('active');
	});

  if($(".aboutUs-menu").length != 0){
  	$('.aboutUs-menu').on('click', 'a', function(e){
			e.preventDefault();
			var itemId = $(this).attr('href'),
					blockTop = $(itemId).offset().top;

			if($(window).outerWidth() <= 1230){
				$('html, body').animate({scrollTop : blockTop - $('.header').outerHeight()},600);
				$('.aboutUs-sidebar').removeClass('active');
			}
			else{
				$('html, body').animate({scrollTop : blockTop},600);
			}
		});

		var sections = $('.block')
		  , nav = $('.aboutUs-menu')
		  , nav_height = nav.outerHeight();

		$(window).on('scroll', function () {
			var b = $('.aboutUs-row').offset().top;
		  var cur_pos = $(this).scrollTop() - b;
		  
		  sections.each(function() {
		    var top = $(this).offset().top - b,
		        bottom = top + $(this).outerHeight();
		    
		    if (cur_pos >= top && cur_pos <= bottom) {
		      nav.find('a').removeClass('active');
		      sections.removeClass('active');
		      
		      $(this).addClass('active');
		      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		    }
		  });
		});
	}

	if($(window).width() > 768){
		var swiper = new Swiper(".kit-slider", {
			slidesPerView: 'auto',
		  watchOverflow: true,
		  spaceBetween: 24,
		  mousewheel: true,
		  allowTouchMove: false,
		  scrollbar: {
		    el: ".swiper-scrollbar",
		    draggable: true,
		  },
		});
	}

	var swiper = new Swiper('.filters-slider', {
		slidesPerView: 'auto',
	  watchOverflow: true,
	  mousewheel: true,
		freeMode: true,
	});

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

	if($( ".filters-btn" ).length != 0){
		$(window).on('scroll', function(){
			if($(window).scrollTop() >= ($(document).outerHeight() - ($('.footer').outerHeight() + $(window).height()))){
				$('.filters-btn').addClass('active').css('bottom', ($('.footer').outerHeight() + 40) + 'px');
			}
			else
				$('.filters-btn').removeClass('active').css('bottom', '30px');
		});
	}

	function modalSlider(){
		if($( ".modal-slider" ).length != 0){
			var swiper = new Swiper('.modal-slider', {
				slidesPerView: 1,
			  watchOverflow: true,
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },
			});
		}
	}
	modalSlider();

});