const { generateKeyPair } = require("crypto");

const greeter = (name = 'user') => {
    console.log('hello '+ name); 
}



greeter('Rei');
greeter(); 