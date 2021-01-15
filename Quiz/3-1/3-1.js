var longArray = [78, 12, 5, 6, 19, 67, 1, -56, 10];

// Replace the third and seventh value with 100 and 1000 respectively
longArray[2] = 100;
longArray[6] = 1000;

// Calculate the product of the first, second, and seventh values;
var product = longArray[0] * longArray[1] * longArray[6];
console.log(product);

// Divide the last value by the first three values
var quotient = longArray[longArray.length - 1] / longArray[0] / longArray[1] / longArray[2];
console.log(quotient);