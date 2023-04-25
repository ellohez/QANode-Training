//  Import functions from calc.js
// const calc = require("./calc.js");
const{add, subtract, divide, multiply} = require("./calc.js");
const axios = require("axios");
const {speak} = require('./cow.js');

// const address = "https://icanhazdadjoke.com/";
const address = "https://pokeapi.co/api/v2/"

async function getPoke() {
    const poke = await axios.get(`${address}/rotom-wash/`).
    then(({data}) => console.log("Poke: ", poke.data));
}


console.log("Hello, World!");
// Commented out to avoid the reams of JSON
// getPoke(); 
console.log(speak("Mooooooooooooooooooooooooooooo!!"));
console.log(add(2, 2));
console.log(subtract(9, 5));
console.log(divide(8, 2));
console.log(multiply(1, 4));


