function changeBg() {
	var buttonId = this.id;
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		var div = divs[i];
		if (div.id === buttonId + 'Div') {
			div.style.backgroundColor = 'green';
			break;
		}
	}
};

window.onload = function() {
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		button.addEventListener('click', changeBg);
	}
};