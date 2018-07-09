/* global $ */
$(document).ready(function() {
	hidePreloader();
	mainMenu();
	watchFilm();
	randomPhrases();
	scrollUpBtn();
	spoilerContent();
	checkSearch();
});


// Прелоадер
function hidePreloader() {
	var preloader = $('.js-preloader');

	preloader.delay(1000).fadeOut(300);
}


// Главное меню
function mainMenu() {
	var menu = $('.js-menu');
	var trigger = $('.js-trigger');

	trigger.click(function () {
		$(this).toggleClass('menu-trigger--active');
		menu.slideToggle(300);
	});
}


// Popup с фильмом или трейлером, проверка для кнопок
function watchFilm() {
	var popupTrigger = $('.js-popup-trigger');
	var popupParanja = $('.js-popup-paranja');
	var popupWrapper = $('.js-popup-wrapper');
	var popupCloseBtn = $('.js-popup-close');
	// Report form
	var reportFormTrigger = $('.js-film-report-form-trigger');
	var reportForm = $('.js-report-form');
	var reportFormInput = $('.js-report-form-input');
	var reportFormClose = $('.js-report-form-close');
	var filmName = $('.js-film-name').text();

	popupTrigger.each(function () {
		if ($(this).attr('data-frame').length) {
			$(this).fadeIn(300);
		} else {
			$(this).remove();
		}
	});

	popupTrigger.click(function () {
		var popupData = $(this).attr('data-frame');

		popupParanja.fadeIn(300);
		popupWrapper.fadeIn(300).append(popupData);
		$('body').addClass('is-cropped');
	});

	popupCloseBtn.click(function () {
		popupParanja.fadeOut(300);
		popupWrapper.fadeOut(300).find('iframe').remove();
		reportForm.fadeOut(100);
		$('body').removeClass('is-cropped');
	});

	popupParanja.click(function () {
		popupParanja.fadeOut(300);
		popupWrapper.fadeOut(300).find('iframe').remove();
		reportForm.fadeOut(100);
		$('body').removeClass('is-cropped');
	});

//Report film form
	reportFormTrigger.click(function() {
		reportForm.fadeIn(300);
		reportFormInput.val(filmName);
	});

	reportFormClose.click(function() {
		$(this).parent().fadeOut(300);
	});
}

// Рандомные фразы в хедере
function randomPhrases() {
	var phrases = ['Всеж мы люди', 'Чего только не придумают', 'Это классика, это знать надо', 'Проходи, не задерживайся', 'Дешёвая провокация', 'Одиночный пикет', 'Смазка для общества', 'Что ж вы люди делаете?', 'Кетчупа не найдётся?', 'Бесплатные спецэффекты'];
	var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
	var element = $('.js-phrases');

	element.text(randomPhrase);
}


// Кнопка наверх
function scrollUpBtn() {
	var trigger = $('.js-scroll-up-btn');
	var bodyHtml = $('html, body');

	trigger.click(function () {
		bodyHtml.animate({
			scrollTop: 0
		}, 400);
	});

	$(window).scroll(function () {
		if ($(document).scrollTop() > 700) {
			trigger.fadeIn(300);
		} else {
			trigger.fadeOut(300);
		}
	});
}


// Spoiler
function spoilerContent() {
	var spoilerContainer = $('.js-spoiler');

	spoilerContainer.each(function () {
		var trigger = $(this).find('.js-spoiler-trigger');
		var spoilerContent = $(this).find('.js-spoiler-content');

		trigger.click(function () {
			spoilerContent.slideToggle();
		});
	});
}


// Проверка поля поиска
function checkSearch() {
	var searchInput = $('.js-search-input');
	var searchBtn = $('.js-search-btn');

	searchBtn.attr('disabled', 'disabled');

	searchInput.keyup(function() {

		if($(this).val().length != 0) {
			searchBtn.removeAttr('disabled');
		} else {
			searchBtn.attr('disabled', 'disabled');
		}

	});
}