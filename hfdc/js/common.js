$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    var itemId = $(this).attr('data-href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);

    if($(this).hasClass('product-scroll')){
      $('.product').removeClass('active');
      $('.product-2').addClass('active');
    }
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

  $('.modal-buttons .primary-btn, .modal-btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.close();
  });

});