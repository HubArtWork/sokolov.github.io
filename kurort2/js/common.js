$(document).ready(function(){

	//select2
	$('.js-example-basic-single').select2({
		minimumResultsForSearch: -1
	});
	$(".js-select2").select2({
		closeOnSelect : false,
		placeholder : "Добавить еще",
		allowHtml: true,
		allowClear: true,
		tags: true // создает новые опции на лету
	});
	$(".js-select3").select2({
		closeOnSelect : false,
		placeholder : "3-х разовое питание с лечением",
		tags: true // создает новые опции на лету
	});

	//inputs
	$('.inputs-plus,.inputs-minus').on('click', function(){
		var parents = $(this).parents('.inputs-row'),
				cell = $(parents).find('.inputs-num'),
			 	num = parseInt($(cell).text());
		if($(this).hasClass('inputs-plus')){
			$(cell).text(num + 1);
			if($(parents).hasClass('inputs-from'))
				$(this).parents('.main-drop').find('.inputs-from-text').text($(parents).find('.inputs-num').text());
			else if($(parents).hasClass('inputs-to'))
				$(this).parents('.main-drop').find('.inputs-to-text').text($(parents).find('.inputs-num').text());
			else if($(parents).hasClass('inputs-rooms'))
				$(this).parents('.main-drop').find('.inputs-rooms-text').text($(parents).find('.inputs-num').text());
		}
		else{
			if(num != 0){
				$(cell).text(num - 1);
				if($(parents).hasClass('inputs-from'))
					$(this).parents('.main-drop').find('.inputs-from-text').text($(parents).find('.inputs-num').text());
				else if($(parents).hasClass('inputs-to'))
					$(this).parents('.main-drop').find('.inputs-to-text').text($(parents).find('.inputs-num').text());
				else if($(parents).hasClass('inputs-rooms'))
					$(this).parents('.main-drop').find('.inputs-rooms-text').text($(parents).find('.inputs-num').text());
			}
		}
	});

	var swiper = new Swiper('.stock-slider', {
	  slidesPerView: 1,
	  watchOverflow: true,
	  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	});
	if ($(window).outerWidth() <= 768) {
		var swiper = new Swiper(".popular-slider", {
		  spaceBetween: 10,
		  slidesPerView: 2,
		  watchOverflow: true,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		  breakpoints: {
		  	10: {
		  		slidesPerView: 1,
		  		spaceBetween: 0,
		    },
		    600: {
		  		slidesPerView: 2,
		  		spaceBetween: 10,
		    },
		  }
		});
	}
	if ($('.sanatoriums-slider').length > 0) {
		/* Swiper
		**************************************************************/
		var swiper2 = Swiper;
		var init2 = false;

		/* Which media query
		**************************************************************/
		function swiperMode() {
		    var mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
		    var tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
		    var desktop = window.matchMedia('(min-width: 1025px)');

		    // Enable (for mobile)
		    if(mobile.matches) {
		        if (!init2) {
		        	init2 = true;
		        	swiper2 = new Swiper(".sanatoriums-slider", {
							  spaceBetween: 10,
							  slidesPerView: 2,
							  watchOverflow: true,
							  pagination: {
							    el: '.swiper-pagination',
							    clickable: true,
							  },
							  breakpoints: {
							  	10: {
							  		slidesPerView: 1,
							  		spaceBetween: 0,
							    },
							    600: {
							  		slidesPerView: 2,
							  		spaceBetween: 10,
							    },
							  }
							});
		        }

		    }
		}

		/* On Load
		**************************************************************/
		window.addEventListener('load', function() {
		    swiperMode();
		});

		/* On Resize
		**************************************************************/
		window.addEventListener('resize', function() {
		    swiperMode();
		});
	}
	var swiper = new Swiper('.testimonials-slider', {
	  slidesPerView: 2,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 21,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  breakpoints: {
	  	10: {
	      slidesPerView: 'auto',
	      spaceBetween: 10,
	    },
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 21,
	    },
	  }
	});
	var swiper = new Swiper('.blog-slider', {
	  slidesPerView: 3,
	  watchSlidesVisibility: true,
	  watchOverflow: true,
	  spaceBetween: 30,
	  navigation: {
	    nextEl: '.blog .swiper-button-next',
	    prevEl: '.blog .swiper-button-prev',
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  breakpoints: {
	  	10: {
	      slidesPerView: 1,
	    },
	    650: {
	      slidesPerView: 2,
	    },
	    950: {
	      slidesPerView: 3,
	    },
	  }
	});

	//popular select
	$('.popular-select-top').on('click', function(){
		$('.popular-select').toggleClass('active');
	});
	$('.drop-li a').on('click', function(){
		$('.popular-select').removeClass('active');
		$('.popular-select-top').html($(this).html());
	});

	//sanatoriums select
	$('.sanatoriums-head-mob').on('click', function(){
		$('.sanatoriums-head-wrap').toggleClass('active');
	});

	//drop
	$('.drop-top').on('click', function(e){
		e.preventDefault();
		$('.drop').toggleClass('active');
	});
	$(document).on('click', function (e){
		var block = $(".drop");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.drop').removeClass('active');
	});
	$('.header-bar').on('click', function(e){
		e.preventDefault();
		$('.header').toggleClass('header-active');
	});

	//main-drop
	$('.main-drop-top').on('click', function(e){
		e.preventDefault();
		if($(this).parents('.main-drop').hasClass('active'))
			$('.main-drop').removeClass('active');
		else{
			$('.main-drop').removeClass('active');
			$(this).parents('.main-drop').addClass('active');
		}
	});
	$(document).on('click', function (e){
		var block = $(".main-drop");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.main-drop').removeClass('active');
	});

	//menu scroll
	$('.link-scroll').on('click', 'a', function(e){
		e.preventDefault();
		var itemId = $(this).attr('href'),
				blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop},900);

		//$('.header').removeClass('header-active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');

		if($(this).hasClass('sanatoriums-li')){
			$('.sanatoriums-head-wrap').removeClass('active');
			$('.sanatoriums-head-mob').html($(this).html());
		}
	});




	( function( factory ) {
		"use strict";

		if ( typeof define === "function" && define.amd ) {

			// AMD. Register as an anonymous module.
			define( [ "../widgets/datepicker" ], factory );
		} else {

			// Browser globals
			factory( jQuery.datepicker );
		}
		} )( function( datepicker ) {
		"use strict";

		datepicker.regional.ru = {
			closeText: "Закрыть",
			prevText: "&#x3C;Пред",
			nextText: "След&#x3E;",
			currentText: "Сегодня",
			monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
			"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
			monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
			"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
			dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
			dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
			dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
			weekHeader: "Нед",
			dateFormat: "dd.mm.yy",
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: "" };
		datepicker.setDefaults( datepicker.regional.ru );

		return datepicker.regional.ru;

	} );

	(function($) {
		  function compareDates(startDate, endDate, format) {
		    var temp, dateStart, dateEnd;
		    try {
		      dateStart = $.datepicker.parseDate(format, startDate);
		      dateEnd = $.datepicker.parseDate(format, endDate);
		      if (dateEnd < dateStart) {
		        temp = startDate;
		        startDate = endDate;
		        endDate = temp;
		      }
		    } catch (ex) {}
		    return { start: startDate, end: endDate };
		  }

		  $.fn.dateRangePicker = function (options) {
		    options = $.extend({
		      "changeMonth": false,
		      "changeYear": false,
		      "numberOfMonths": 2,
		      "rangeSeparator": " - ",
					"useHiddenAltFields": false
		    }, options || {});

				var myDateRangeTarget = $(this);
		    var onSelect = options.onSelect || $.noop;
		    var onClose = options.onClose || $.noop;
		    var beforeShow = options.beforeShow || $.noop;
		    var beforeShowDay = options.beforeShowDay;
		    var lastDateRange;

		    function storePreviousDateRange(dateText, dateFormat) {
		      var start, end;
		      dateText = dateText.split(options.rangeSeparator);
		      if (dateText.length > 0) {
		        start = $.datepicker.parseDate(dateFormat, dateText[0]);
		        if (dateText.length > 1) {
		          end = $.datepicker.parseDate(dateFormat, dateText[1]);
		        }
		        lastDateRange = {start: start, end: end};
		      } else {
		        lastDateRange = null;
		      }
		    }
				
		    options.beforeShow = function(input, inst) {
		      var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
		      storePreviousDateRange($(input).val(), dateFormat);
		      beforeShow.apply(myDateRangeTarget, arguments);
		    };
				
		    options.beforeShowDay = function(date) {
		      var out = [true, ""], extraOut;
		      if (lastDateRange && lastDateRange.start <= date) {
		        if (lastDateRange.end && date <= lastDateRange.end) {
		          out[1] = "ui-datepicker-range";
		        }
		      }

		      if (beforeShowDay) {
		        extraOut = beforeShowDay.apply(myDateRangeTarget, arguments);
		        out[0] = out[0] && extraOut[0];
		        out[1] = out[1] + " " + extraOut[1];
		        out[2] = extraOut[2];
		      }
		      return out;
		    };

		    options.onSelect = function(dateText, inst) {
		      var textStart;
		      if (!inst.rangeStart) {
		        inst.inline = true;
		        inst.rangeStart = dateText;
		      } else {
		        inst.inline = false;
		        textStart = inst.rangeStart;
		        if (textStart !== dateText) {
		          var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
		          var dateRange = compareDates(textStart, dateText, dateFormat);
		          myDateRangeTarget.val(dateRange.start + options.rangeSeparator + dateRange.end);
		          inst.rangeStart = null;
							if (options.useHiddenAltFields){
								var myToField = myDateRangeTarget.attr("data-to-field");
								var myFromField = myDateRangeTarget.attr("data-from-field");
								$("#"+myFromField).val(dateRange.start);
								$("#"+myToField).val(dateRange.end);
							}
		        }
		      }
		      onSelect.apply(myDateRangeTarget, arguments);
		    };

		    options.onClose = function(dateText, inst) {
		      inst.rangeStart = null;
		      inst.inline = false;
		      onClose.apply(myDateRangeTarget, arguments);
		    };

		    return this.each(function() {
		      if (myDateRangeTarget.is("input")) {
		        myDateRangeTarget.datepicker(options);
		      }
					myDateRangeTarget.wrap("<div class=\"dateRangeWrapper\"></div>");
		    });
		  };
		}(jQuery));

	if($(window).outerWidth() > 530){

			$("#txtDateRange").dateRangePicker({
				showOn: "focus",
				rangeSeparator: " - ",
				dateFormat: "yy-mm-dd",
				useHiddenAltFields: true,
				constrainInput: true
			});
	}
	else{
		$("#txtDateRange").dateRangePicker({
			showOn: "focus",
			rangeSeparator: " - ",
			dateFormat: "yy-mm-dd",
			useHiddenAltFields: true,
			constrainInput: true,
			numberOfMonths: 1
		});
	}

});