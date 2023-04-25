const cow = require("cowsay");

//  Function declaration version
// function speak(s) {
//     return cow.say({text: s, e : "*O", T : "U"});
// }

// Arrow function version 
let speak = chat => cow.say({text: chat, e : "*O", T : "U"});

module.exports = {    
    speak
}