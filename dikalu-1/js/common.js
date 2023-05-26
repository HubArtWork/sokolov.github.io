$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 65,
     navigation: {
      nextEl: '.testimonials-actions .swiper-button-next',
      prevEl: '.testimonials-actions .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.swatch').click(function() {
    $('.swatch').removeClass('active');
    // $(this).find('.tooltiptext ').fadeIn(500).delay(1000).fadeOut(400);
    $(this).addClass('active');
    comment = $(this).attr("data-value");
  });

  $('.swatch').click(function() {
    if(!$(this).hasClass('active')){
      $('.swatch').removeClass('active');
      $('.swatch-bottom span').text('Select an option');
      $(this).addClass('active').find('.swatch-bottom span').text('Option selected');
    }
    comment = $(this).attr("data-value");
  });

});