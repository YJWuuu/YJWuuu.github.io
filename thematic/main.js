$(document).ready(function() {
	$('section').on('mouseleave', function() { // mouse leaving a section, show the navi
		$('nav').css('opacity', '0.7');
	});
	$('html').on('click', function() { // click on anywhere, hide the navi
		$('nav').css('opacity', '0');
	});
});