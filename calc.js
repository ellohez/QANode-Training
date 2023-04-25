// Arrow function versions
let add = (x, y) => x + y;

let subtract = (x, y) => x - y;

let multiply = (x, y) => x * y;

let divide = (x, y) => x / y;

// Export the functions to make them public
// Like a java class (encapsulation)
module.exports = {
    add,
    subtract,
    divide,
    multiply
}