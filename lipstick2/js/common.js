$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.assortment-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.assortment-list li').on('click', function(){
    $('.assortment-list li').removeClass('active');
    $(this).addClass('active');

    var attr = +($(this).attr('data-cc')) - 1;
    swiper.slideTo(attr);
  });

  var swiper2 = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
     navigation: {
      nextEl: '.testimonials-actions .swiper-button-next',
      prevEl: '.testimonials-actions .swiper-button-prev',
    },
    pagination: {
      el: '.testimonials-actions .swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
  });

  var swiper3 = new Swiper('.form-slider', {
    slidesPerView: 1,
    spaceBetween: 14,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.swatch').click(function() {
    $(this).toggleClass('active');
    comment = $(this).attr("data-value");
  });

});