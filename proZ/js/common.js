$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    initialSlide: 1,
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