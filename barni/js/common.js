"use strict";

$('.checks-wrapper').mCustomScrollbar();
$('.winners-wrapper').mCustomScrollbar();

function OpenPopup(popupId) {
  $('body').removeClass('no-scrolling');
  $('.popup').removeClass('js-popup-show');
  popupId = '#' + popupId;
  $(popupId).addClass('js-popup-show');
  $('body').addClass('no-scrolling');
}

$('.pop-op').click(function (e) {
  e.preventDefault();
  var data = $(this).data('popup');
  OpenPopup(data);
});

function closePopup() {
  $('.js-close-popup').on('click', function (e) {
    e.preventDefault();
    $('.popup').removeClass('js-popup-show');
    $('body').removeClass('no-scrolling');
  });
}

closePopup();

function clickClosePopup(popupId) {
  popupId = '#' + popupId;
  $(popupId).removeClass('js-popup-show');
  $('body').removeClass('no-scrolling');
}

$('.burger').click(function () {
  if ($('.header').hasClass('active')) {
    $('.header').removeClass('active');
    $('body').removeClass('no-scrolling');
  } else {
    $('.header').addClass('active');
    $('body').addClass('no-scrolling');
  }
});
$('.anchor[href^="#"]').click(function () {
  if ($(window).innerWidth() <= 1000) {
    $('.menu-links').removeClass('active');
    $('.burger').removeClass('active');
  }

  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top - 150;
  $('html, body').animate({
    scrollTop: destination
  }, 500, 'swing');
  return false;
});
$('.prize-item__btn').click(function () {
  $('.prize-item-info').fadeIn();
});
$('.prize-item-info__btn, .prize-item-info__close').click(function () {
  $('.prize-item-info').fadeOut();
});
$('.anime-item.unactive').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
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

if ($('.select').length > 1) {
  $('select').each(function () {
    $(this).valid();
    var $this = $(this).not('.select-search');
    var parent = $(this).not('.select-search').parents('.select');
    $this.select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: parent
    });
  });
  $('.select-search').each(function () {
    var $this = $(this);
    var parent = $(this).parents('.select');
    $this.select2({
      dropdownParent: parent
    });
  });
} else {
  $('select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.select')
  });
}

if($('.file').length) {
  $('.file input').dropify({
      messages: {
          'default': '',
          'replace': '',
          'remove':  '',
          'error':   ''
      },
      tpl: {
          message: '<div class="align-center upload-status"></div>',
      }
  });
}

function maskInit() {
  $('.phone-mask').inputmask({
    mask: "+7(999)999-99-99",
    "clearIncomplete": true
  });
}
maskInit();

function checkValidate() {
    var form = $('form');

    $.each(form, function () {
        $(this).validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            rules: {
                Region: {
                    required: true
                },
                City: {
                    required: true
                },
                Street: {
                    required: true
                },
                House: {
                    required: true
                },
                File: {
                    required: true
                },
                Text: {
                    required: true
                },
                Checkbox: {
                    required: true
                },
                FullName: {
                    required: true
                },
                LName: {
                    required: true
                },
                FName: {
                    required: true
                },
                MName: {
                    required: true
                },
                Date: {
                    required: true
                },
                Who: {
                    required: true
                },
                Adress: {
                    required: true
                },
                Numbers: {
                    required: true
                },
                Email: {
                    required: true,
                    Email: true
                },
                PhoneNumber: {
                    required: true,
                    PhoneNumber: true
                },
                Message: {
                    required: true
                },
                Password: {
                    required: true,
                    normalizer: function normalizer(value) {
                        return $.trim(value);
                    }
                }
            },
            errorPlacement: function (error, element) {
                var placement = $(element).data('error');
                $('.popup.js-popup-show form').addClass('error-form');
                setTimeout(function() {
                   $('.popup.js-popup-show form').removeClass('error-form');
                }, 3000);
                if (placement) {
                    $(placement).append(error);
                } else {
                    error.insertBefore(element);
                }
            },
            messages: {
                PhoneNumber: 'Некорректный номер',
                Email: 'Некорректный e-mail'
            },
        });
    });
    jQuery.validator.addMethod('Email', function (value, element) {
        return this.optional(element) || /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(value);
    });
    jQuery.validator.addMethod('PhoneNumber', function (value, element) {
        return this.optional(element) || /\+7\(\d+\)\d{3}-\d{2}-\d{2}/.test(value);
    });
}
checkValidate();
  
$('form').on('submit', function(e) {
  var $select2 = $('.select-search', $(this));
  
  // Reset
  $select2.parents('.input-block').removeClass('is-invalid');
  
  if ($select2.val() === '') {
    $('.popup.js-popup-show form').addClass('error-form');
    setTimeout(function() {
       $('.popup.js-popup-show form').removeClass('error-form');
    }, 3000);
    
    // Add is-invalid class when select2 element is required
    $select2.parents('.input-block').addClass('is-invalid');

    var th = $(this);
    if ($(this).valid()) {
      $(th).parents('.faq-block').addClass('active');
      setTimeout(function() {
        $(th).parents('.faq-block').removeClass('active');
        th.trigger("reset");
      }, 3000);
    }

    return false;
  }
});
