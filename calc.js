const prompt = require('prompt-sync')();
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');
var num1= prompt("Enter First Number:");
var num2= prompt("Enter Second Number:");
const number1=parseFloat(num1);
const number2=parseFloat(num2);

if (operator == '+') { // use + (addition) operator to add two numbers
    result = number1 + number2;
}
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers
    result = number1 - number2;
}
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers
    result = number1 * number2;
}
else {
    result = number1 / number2; // use / (division) operator to divide two numbers
}

// display the result of the Calculator
console.log(" Result is:" + result);