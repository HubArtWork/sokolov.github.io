$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.kid-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('.swatch').click(function() {
    $('.swatch').removeClass('active');
    // $(this).find('.tooltiptext ').fadeIn(500).delay(1000).fadeOut(400);
    $(this).addClass('active');
    comment = $(this).attr("data-value");
  });

});