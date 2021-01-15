$(document).ready(function() {
	$('#hideDiv').on('click', function() {
		$('div').hide('fast'); // or X ms
	});
	$('#showDiv').on('click', function() {
		$('div').show('slow');
	});
});