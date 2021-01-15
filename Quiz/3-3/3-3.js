// function changeBg1() {
// 	var em1 = document.getElementById('item1');
// 	var em2 = document.getElementById('item2');
// 	var temp = em1.style.backgroundColor;
// 	em1.style.backgroundColor = em2.style.backgroundColor;
// 	em2.style.backgroundColor = temp;
// }

// function changeBg2() {
// 	var em2 = document.getElementById('item2');
// 	var em3 = document.getElementById('item3');
// 	var temp = em2.style.backgroundColor;
// 	em2.style.backgroundColor = em3.style.backgroundColor;
// 	em3.style.backgroundColor = temp;
// }

// window.onload = function() {
// 	var em1 = document.getElementById('switch12');
// 	em1.addEventListener('click', changeBg1);

// 	var em2 = document.getElementById('switch23');
// 	em2.addEventListener('click', changeBg2);
// };

function changeBg1() {
	var em1 = document.querySelector('div:nth-of-type(1)');
	var em2 = document.querySelector('div:nth-of-type(2)');
	var temp = em1.style.backgroundColor;
	em1.style.backgroundColor = em2.style.backgroundColor;
	em2.style.backgroundColor = temp;
}

function changeBg2() {
	var em2 = document.querySelector('div:nth-of-type(2)');
	var em3 = document.querySelector('div:nth-of-type(3)');
	var temp = em2.style.backgroundColor;
	em2.style.backgroundColor = em3.style.backgroundColor;
	em3.style.backgroundColor = temp;
}

window.onload = function() {
	var em1 = document.getElementById('switch12');
	em1.addEventListener('click', changeBg1);

	var em2 = document.getElementById('switch23');
	em2.addEventListener('click', changeBg2);
};