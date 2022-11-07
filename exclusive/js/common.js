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
    spaceBetween: 14,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.swatchs').click(function() {
    $(this).toggleClass('active');
  });

  $('.swatch').click(function() {
    $('.swatch').removeClass('active');
    // $(this).find('.tooltiptext ').fadeIn(500).delay(1000).fadeOut(400);
    $(this).addClass('active');
    comment = $(this).attr("data-value");
    $('.swatchs-top').text($(this).text());
  });

  $(document).on('click', function (e){
    var block = $(".swatchs");
    if (!block.is(e.target) && block.has(e.target).length === 0)
      $('.swatchs').removeClass('active');
  });

});