window.onload = function() {
	var allGroupEm = document.getElementsByClassName('group1');
	console.log(allGroupEm[0]);
	var groupEm = allGroupEm[0];
	console.log(groupEm);
	console.log(groupEm.innerHTML);
	groupEm.innerHTML = 'Content changed!';
	console.log(groupEm.innerHTML);

	var idEm = document.getElementById('no6');
	console.log(idEm.innerHTML);
	idEm.innerHTML = 'No 6 changed!';
	idEm.style.color = 'red';
	idEm.style.backgroundColor = 'black'; // background-color in css, dash to Capital
	//font-size = fontSize, text-align = textAlign
	idEm.style.marginLeft = '5px';
};