$(document).ready(function() {
	$('nav > div').on('click', function() {
		var display = $(this).children('div').eq(0).css('display');
		if (display === 'none') {
			$('nav > div > div').css('display', 'none');
			$(this).children('div').css('display', 'block');
		}
		else {
			$(this).children('div').css('display', 'none');
		}
	});
});

// .children(): immediate child
// .find(): all child