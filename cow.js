const cow = require("cowsay");

function speak(s) {
    return cow.say({text: s, e : "oO", T : "U "});
}

module.exports = {    
    speak
}