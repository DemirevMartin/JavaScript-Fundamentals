function calc(a, b, t) {
    let operators = {
        'add' : (a, b) => a + b,
        'subtract' : (a, b) => a - b,
        'multiply' : (a, b) => a * b,
        'divide' : (a, b) => a / b
    };
    let result = operators[t](a, b);
    console.log(result);
}
calc(5, 3, "multiply");