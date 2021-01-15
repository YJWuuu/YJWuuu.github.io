$(document).ready(function() {
	$('section').on('mouseleave', function() {
		$('nav').css('opacity', '0.7');
	});
	$('html').on('click', function() {
		$('nav').css('opacity', '0');
	});
});