$(document).ready(function() {
	$('#animateDiv').on('click', function() {
		$('div').animate({left: '100px', opacity: 1}, 1000);
	});
});

// doesn't work, since it is not a number
// animate({display: 'none', 1000})
// animate({font: '16px 16px sans-serif', 1000})

// jquery UI for background color animation