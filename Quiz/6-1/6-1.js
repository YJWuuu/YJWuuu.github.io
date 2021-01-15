$(document).ready(function() {
	// use .on() to add an event listener to DIVs
	$('div').on('mouseenter', function() {
		var rand1 = Math.random() * $(document).width();
		if (rand1 > $(document).width() - 100) {
			rand1 = rand1 - 100;
		}
		var rand2 = Math.random() * $(document).height();
		if (rand2 > $(document).height() - 100) {
			rand2 = rand2 - 100;
		}
		$('div').animate({left: rand1, top: rand2}, 0);
	});
	// use $(document).width() to obtain viewport width
	// use $(document).height() to obtain viewport height
	// use Math.random() to get a random number between 0 and 0.99999999999...
});