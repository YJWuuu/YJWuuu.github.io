function changeBg() {
	var buttonId = this.id;
	var imgs = document.getElementsByTagName('img');

	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		if (img.id === buttonId) {
			img.style.opacity = '1';
			img.style.marginBottom = '20px';
		}
		else {
			img.style.opacity = '0.5';
			img.style.marginBottom = '0px';
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