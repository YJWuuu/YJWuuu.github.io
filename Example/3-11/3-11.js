window.onload = function() {
	var em = document.querySelector('article > p'); // 回傳第一個
	// em.style.color = 'red';
	var ems = document.querySelectorAll('body p');
	ems[1].style.color = 'orange';
};