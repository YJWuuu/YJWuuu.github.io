$(document).ready(function() {
	// $('body > button:first-of-type').on('click', function() {
	$('body > button').eq(0).on('click', function() {
		$('body > div').addClass('selected');
	});
	$('body > button').eq(1).on('click', function() {
		$('body > div').removeClass('selected');
	});
});