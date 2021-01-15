// window

var winWidth = window.innerWidth; // not include 網址列、卷軸寬度
var winHeight = window.innerHeight;

console.log(winWidth + '/' + winHeight);

window.onload = function() { // function execution after 網頁內容讀取完畢
	// alert('Website is ready!');

	// window.document
	var websiteTitle = window.document.title;
	console.log(websiteTitle);
	var anotherTitle = document.title; // 可以省略window.
	console.log(anotherTitle);
};