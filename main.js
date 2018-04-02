// Модальное окно

// открыть по кнопке
$('.js-button-campaign1').click(function() {
	$('.js-overlay-campaign1').fadeIn();
	$('.js-overlay-campaign1').addClass('disabled');
});
$('.js-button-campaign2').click(function() {
	$('.js-overlay-campaign2').fadeIn();
	$('.js-overlay-campaign2').addClass('disabled');
});
$('.js-button-campaign3').click(function() {
	$('.js-overlay-campaign3').fadeIn();
	$('.js-overlay-campaign3').addClass('disabled');
});
$('.js-button-campaign4').click(function() {
	$('.js-overlay-campaign4').fadeIn();
	$('.js-overlay-campaign4').addClass('disabled');
});
$('.js-button-campaign5').click(function() {
	$('.js-overlay-campaign5').fadeIn();
	$('.js-overlay-campaign5').addClass('disabled');
});
$('.js-button-campaign6').click(function() {
	$('.js-overlay-campaign6').fadeIn();
	$('.js-overlay-campaign6').addClass('disabled');
});
$('.js-button-campaign7').click(function() {
	$('.js-overlay-campaign7').fadeIn();
	$('.js-overlay-campaign7').addClass('disabled');
});
$('.js-button-campaign8').click(function() {
	$('.js-overlay-campaign8').fadeIn();
	$('.js-overlay-campaign8').addClass('disabled');
});
$('.js-button-campaign9').click(function() {
	$('.js-overlay-campaign9').fadeIn();
	$('.js-overlay-campaign9').addClass('disabled');
});
// закрыть на крестик
$('.js-close-campaign1').click(function() {
	$('.js-overlay-campaign1').fadeOut();

});
$('.js-close-campaign2').click(function() {
	$('.js-overlay-campaign2').fadeOut();

});
$('.js-close-campaign3').click(function() {
	$('.js-overlay-campaign3').fadeOut();

});
$('.js-close-campaign4').click(function() {
	$('.js-overlay-campaign4').fadeOut();

});
$('.js-close-campaign5').click(function() {
	$('.js-overlay-campaign5').fadeOut();

});
$('.js-close-campaign6').click(function() {
	$('.js-overlay-campaign6').fadeOut();

});
$('.js-close-campaign7').click(function() {
	$('.js-overlay-campaign7').fadeOut();

});
$('.js-close-campaign8').click(function() {
	$('.js-overlay-campaign8').fadeOut();

});
$('.js-close-campaign9').click(function() {
	$('.js-overlay-campaign9').fadeOut();

});
// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign1').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign2').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign3').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign4').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign5').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign6').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign7').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign8').fadeOut();

	}
});
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign9').fadeOut();

	}
});
// открыть по таймеру
