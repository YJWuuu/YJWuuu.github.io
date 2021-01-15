$(document).ready(function() {
	$('body > button').eq(0).on('click', function() {
		$('body > div').removeClass('selected');
		$('body > div:nth-of-type(odd)').addClass('selected');
	});
	$('body > button').eq(1).on('click', function() {
		$('body > div').removeClass('selected');
		$('body > div:nth-of-type(even)').addClass('selected');
	});
	$('body > button').eq(2).on('click', function() {
		$('body > div').removeClass('selected');
	});
});

// $(document).ready(function() {
// 	$('body > button').eq(0).on('click', function() {
// 		$('body > div').css({
// 			'height': '50px',
// 			'width': '50px',
// 			'margin': '5px 0',
// 		});
// 		$('body > div:nth-of-type(odd)').css({
// 			'height': '70px',
// 			'width': '70px',
// 			'margin': '10px 0',
// 		});
// 	});
// 	$('body > button').eq(1).on('click', function() {
// 		$('body > div').css({
// 			'height': '50px',
// 			'width': '50px',
// 			'margin': '5px 0',
// 		});
// 		$('body > div:nth-of-type(even)').css({
// 			'height': '70px',
// 			'width': '70px',
// 			'margin': '10px 0',
// 		});
// 	});
// 	$('body > button').eq(2).on('click', function() {
// 		$('body > div').css({
// 			'height': '50px',
// 			'width': '50px',
// 			'margin': '5px 0',
// 		});
// 	});
// });