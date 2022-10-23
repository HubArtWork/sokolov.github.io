$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.about-slider', {
    slidesPerView: 'auto',
    spaceBetween: 14,
    centeredSlides: true,
    initialSlide: 1,
  });

});