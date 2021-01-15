// EventHandler

function mouseEventMsg() {
	alert('Mouse event!');
}
window.onload = function() {
	var em = document.querySelector('body');
	em.addEventListener('click', function() { // callback
		alert('Clicked!');
	});
	em.addEventListener('mouseenter', mouseEventMsg);
	em.addEventListener('mouseleave', mouseEventMsg);
	// em.removeEventListener('mouseleave');
};