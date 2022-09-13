
"use strict";

// helloWorld function
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input == 'string' && input.length>0){
        return "Hello, " + input + "!";
    }
    return "Hello, World!"
}

function isFive(input){
    if(input === 5){
        return true
    }
        return false;
}