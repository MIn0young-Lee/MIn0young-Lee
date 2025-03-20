class Calculator { 
    add(a: number, b: number): number { 
        return a + b; 
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number | string {
        if(b === 0) {
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
