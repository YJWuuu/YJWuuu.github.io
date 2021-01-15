function add1(x, y) {
	var z = x + y;
	return 'The sum of ' + x + ' and ' + y + ' is ' + z + '.';
}
function substract1(x, y) {
	var z = x - y;
	return 'The reslut of ' + x + ' minus ' + y + ' is ' + z + '.';
}
function multiply1(x, y) {
	var z = x * y;
	return 'The product of ' + x + ' and ' + y + ' is ' + z + '.';
}
function divide1(x, y) {
	var z = x / y;
	return 'The resulf of ' + x + ' / ' + y + ' is ' + z + '.';
}

var basicMath = {
	add: add1,
	substract: substract1,
	multiply: multiply1,
	divide: divide1
};

console.log(basicMath.add(10, 21)); // The sum of 10 and 21 is 31.
console.log(basicMath.substract(10, 21)); // The result of 21 minus 10 is 11.
console.log(basicMath.multiply(5, 17)); // The product of 5 and 17 is 85.
console.log(basicMath.divide(80, 4)); // The result of 80 / 4 is 20.
