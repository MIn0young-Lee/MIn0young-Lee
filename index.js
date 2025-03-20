"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        else {
            return a / b;
        }
    }
}
const calculator = new Calculator();
console.log("Add: ", calculator.add(10, 5));
console.log("Substract: ", calculator.subtract(17, 2));
console.log("Multiply: ", calculator.multiply(12, 3));
console.log("Divide: ", calculator.divide(20, 4));
console.log(calculator.divide(20, 0));
