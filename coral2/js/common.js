AOS.init({
  startEvent: 'load'
});
$(document).ready(function(){

	window.addEventListener('load', AOS.refresh);

	setTimeout(function(){
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
			$(this).parents('.products-col').toggleClass('active').next('.products-block').slideToggle().toggleClass('active');
		else
			$(this).parents('.products-block').slideToggle().toggleClass('active').prev('.products-col').toggleClass('active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.allTabs').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active').removeClass('tab-animation');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');
		setTimeout(function(){
			$(attr).addClass('tab-animation');
		}, 200);
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