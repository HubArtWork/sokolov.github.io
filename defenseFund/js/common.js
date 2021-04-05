var swiper = new Swiper('.actions-slider', {
  slidesPerView: 3,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  	10: {
      slidesPerView: 1,
    },
    641: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 2,
    },
    970: {
      slidesPerView: 3,
    },
  }
});

$(document).ready(function(){

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
  });

	//fancybox
	$('[data-fancybox=""]').fancybox({
    autoFocus: false,
    autoCenter: false,
    touch: false,
    beforeShow: function(){
      $("html").css({'overflow-y':'hidden'});
    },
    afterClose: function(){
      $("html").css({'overflow-y':'visible'});
    }
	});

});