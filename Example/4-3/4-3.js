$(document).ready(function() {
	$('body > button').on('click', function() {
		// em.style.backgroundColor = 'green';
		// $('body > div').css('background-color', 'green');

		$('body > div').css(
			{
				'background-color': 'green',
				'height': '70px',
				'width': '70px'
			}
		);
	});
});