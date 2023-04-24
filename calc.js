function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// Export the functions to make them public
// Like a java class (encapsulation)
module.exports = {
    add,
    subtract,
    divide,
    multiply
}