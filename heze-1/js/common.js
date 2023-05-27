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

  $('.swatchs-top').click(function() {
    $(this).parents('.swatchs').toggleClass('active').find('.swatchs-list').slideToggle();
  });
  $('.swatch').click(function() {
    if($('.swatchs').hasClass('active')){
      $('.swatchs').removeClass('active').find('.swatchs-list').slideUp();
      $('.swatchs-top').html($(this).html());
      comment = $(this).attr("data-value");
    }
  });

});