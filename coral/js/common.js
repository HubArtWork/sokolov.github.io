$(document).ready(function(){

	setTimeout(function(){
		if($(".bg").length != 0)
			$('.bg').addClass('active');
		if($(".map").length != 0)
			$('.map').addClass('active');
	}, 200);

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	//drop
	$('.drop-text').on('click', function(e){
		e.preventDefault();

		if($(window).outerWidth())
			$(this).parents('.drop').toggleClass('active').find('.drop-list').slideToggle();
	});

	//products
	$('.products .learn-more, .products-arrow').on('click', function(e){
		e.preventDefault();

		if($(this).hasClass('learn-more'))
			$(this).parents('.products-col').toggleClass('active').next('.products-block').toggleClass('active');
		else
			$(this).parents('.products-block').toggleClass('active').prev('.products-col').toggleClass('active');
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


	/*
	var body = $('body'),
      bg = $('.bg');
	$(document).on('scroll', function () {
    var position = $body.scrollTop(),
        block_position = $('.bg').offset().top;
        if (position > block_position)
            header.addClass('active');
  });*/

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