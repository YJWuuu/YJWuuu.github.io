function changeBg() {
	var buttonId = this.id;
	var target = document.getElementById(buttonId + 'Div');
	// console.log(target.style.backgroundColor);
	if (!target) {
		alert('No element found: ' + buttonId + 'Div');
	}
	else {
		// if (buttonId === 'block1') {
		// 	target.style.backgroundColor = 'yellow';
		// }
		// else if (buttonId === 'block2') {
		// 	target.style.backgroundColor = 'orange';
		// }
		// else {
		// 	target.style.backgroundColor = 'green';	
		// }
		if (buttonId === 'block1' || buttonId === 'block2') {
			target.style.backgroundColor = 'yellow';
		}
		else {
			target.style.backgroundColor = 'green';
		}
	}
}

window.onload = function() {
	// let condition = 4 > 5; // local variable
	// <, >=, <=, !=
	// let condition = '5' == 5; // true, since "== 會幫你轉data type
	// let condition = '5' === 5; // false, since "===" 不會轉換型態
	// let condition = '5' != 5; // false,
	// let condition = '5' !== 5; // true,
	// if (condition) {
	// 	console.log('true');
	// }
	// else {
	// 	console.log('false');
	// }

	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', changeBg);
	buttons[1].addEventListener('click', changeBg);
	buttons[2].addEventListener('click', changeBg);
	buttons[3].addEventListener('click', changeBg);
};