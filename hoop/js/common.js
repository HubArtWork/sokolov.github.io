$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  //testimonials-btn
  $('.testimonials .border-btn').on('click', function(e){
    e.preventDefault();

    $(this).parents('.testimonials-btn').addClass('active').parents('.testimonials').find('.testimonials-all').slideToggle();
  });

});