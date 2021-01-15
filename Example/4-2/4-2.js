window.onload = function() {
	// 所有東西都執行好 包括圖片
};

$(document).ready(function() {
	// 網頁結構好了就開始執行
	
	// document.querySelectorAll('body > button')[0].addEventListener('click', function() {
	// 	alert('Button 1 clicked!');
	// });
	
	$('body > button').eq(0).on('click', function() {
		alert('Button 1 clicked!');
		$(this).off('click');
	});
	$('body > button').eq(1).on('click', function() {
		alert('Button 2 clicked!');
		$(this).off('click');
	});

});