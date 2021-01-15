// $(document).ready(function() {
// 	$('nav > div').on('click', function() {
// 		var display = $(this).children('div').eq(1).css('display');
// 		if (display === 'none') {
// 			$('nav > div > div:not(:first-of-type)').css('display', 'none');
// 			$(this).children('div').css('display', 'block');
// 		}
// 		else {
// 			$(this).children('div:not(:first-of-type)').css('display', 'none');
// 		}
// 	});
// });

// .children(): immediate child
// .find(): all child

$(document).ready(function() {
	$('nav > div > div:first-of-type').on('click', function() {
		$('nav > div > div:not(:first-of-type)').css('display', 'none');
		$(this).siblings().css('display', 'block');
	});
});