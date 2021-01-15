function resetBg() {
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}

function changeBg() {
	// 被觸發的事件的元件
	// var emId = this.id;
	// var em = document.getElementById(emId);
	// resetBg();
	// em.style.backgroundColor = 'blue';
	resetBg();
	this.style.backgroundColor = 'blue';
}

window.onload = function() {
	var em = document.getElementById('item1');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item2');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item3');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item4');
	em.addEventListener('click', changeBg);
};