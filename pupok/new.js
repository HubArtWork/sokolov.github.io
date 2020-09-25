$(window).on('scroll', function(){
	if($(window).scrollTop() >= $('.b-header').outerHeight() && $(window).width() >= 768){
		$('.b-page').addClass('nav-fixed');
	}
	else{
		$('.b-page').removeClass('nav-fixed');
	}
});

$('.nav-fixed #cart').css('right', ($(window).width() - $('.container').width())/2 + 'px');

$(window).on('resize', function(){
	$('.nav-fixed #cart').css('right', ($(window).width() - $('.container').width())/2 + 'px');
});

