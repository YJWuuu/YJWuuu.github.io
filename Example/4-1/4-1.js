window.onload = function() {
	// $ = jquery

	document.querySelectorAll('body > p:last-of-type');
	$('body > p:last-of-type'); // the same as above

	var ems = $('body > p');
	console.log(ems[0].innerHTML);

	console.log($('body > p').eq(0).html());
	console.log($('body > p').eq(-1).html());

	$('body > p').eq(1).html('Changed!');

	console.log($('body > p.special').eq(1).html());
};