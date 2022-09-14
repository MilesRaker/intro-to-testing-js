
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

function isEven(input){
    if(input % 2 == 0){
        return true;
    }
    return false;
}

function isVowel(input){
    if(typeof input != "string" || input.length != 1){
        return false;
    }
    let inputToLower = input.toLowerCase();
    let vowels = ["a", "e", "i", "o","u"];

    return vowels.includes(inputToLower);
}

function add(a, b){
    if(isNaN(a) || isNaN(b)){
        return NaN;
    }
    return a + b;
}