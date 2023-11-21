$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    var itemId = $(this).attr('data-href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 65,
    autoHeight: true,
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.product').click(function() {
    $('.product').removeClass('active');
    $(this).addClass('active');
    comment = $(this).attr("data-value");
  });

  //fancybox
  $('[data-fancybox=""]').fancybox({
    autoFocus: false,
    autoCenter: false,
    touch: false
  });

});