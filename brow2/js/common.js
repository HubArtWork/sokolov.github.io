$(document).ready(function(){

  //scroll link
  $('.scroll-link').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).attr('href'),
        blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop},900);
  });

  var swiper = new Swiper('.main-slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper2 = new Swiper('.testimonials-slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //sliders
  $('.radios-wrap').on('click', function(){
    var attr = $(this).attr('data-radio'),
        text = $(this).attr('data-text');

    $(this).parents('.radios-row').find('.radios-wrap').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.main').find('.main-block').removeClass('active');
    $('#' + attr).addClass('active');
  });

  //write
  $('.write-top').on('click', function(){
    $('.write').addClass('active');
  });
  $('.write-ico').on('click', function(){
    if($('.write textarea').val().length >= 4){
      $('.modal,.modal-over').addClass('active');
      setTimeout(function() {
        $('.write,.modal,.modal-over').removeClass('active');
        $('.write textarea').val('');
      }, 2000);
    }
  });

  //accordeons
  $(".accordeon .accordeon-block").hide().prev().click(function() {

    if($(this).parents(".accordeon").hasClass('accordeon-active'))
      $(".accordeon").removeClass('accordeon-active');
    else {
      $(".accordeon").removeClass('accordeon-active');
      $(this).parents(".accordeon").addClass('accordeon-active');
    }

    $(this).parents().find(".accordeon-block").not(this).slideUp().prev();
    $(this).next().not(":visible").slideDown().prev().parents();

  });
});