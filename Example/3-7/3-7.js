// actionCompleted(); // work

function actionCompleted() { // is constructed first
	alert('Completed!');
}

// actionCompleted(); // work



// actionCompletedAgain(); // wrong

var actionCompletedAgain = function () { // 照順序建立
	alert('Completed again!');
};

// actionCompletedAgain(); // work



function popupMsg(msg) {
	var finalMsg = 'Site message: ' + msg;
	alert(finalMsg);
}

// popupMsg('Test!');
// popupMsg('Warning!');



function userMsg(name, msg = 'nothing') { // default
	var finalMsg = name + ' says ' + msg;
	alert(finalMsg);
}

// userMsg('Victor', 'Surprise!');
// userMsg('Victor');



function complexCalc(x, y) {
	var result = 0;
	result = x * y;
	result = result / (x - y);
	result = result * y - x;
	return result;
}

// var finalResult = complexCalc(5, 10);
// alert(finalResult);



var demoFuncs = {
	popupMsgFunc: popupMsg,
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc,
	directFunc: function() {
		
	}
};

demoFuncs.userMsgFunc('Victor', 'I am calling a function in an object.');