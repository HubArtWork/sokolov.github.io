$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.about-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
     navigation: {
      nextEl: '.about-actions .swiper-button-next',
      prevEl: '.about-actions .swiper-button-prev',
    },
    pagination: {
      el: '.about-actions .swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
  });

  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
     navigation: {
      nextEl: '.testimonials-actions .swiper-button-next',
      prevEl: '.testimonials-actions .swiper-button-prev',
    },
  });

  $('.swatch').click(function() {
    $(this).parents('.swatchs').find('.swatch').removeClass('active');
    // $(this).find('.tooltiptext ').fadeIn(500).delay(1000).fadeOut(400);
    $(this).addClass('active');

    comment = $(this).attr("data-value");
  });

});