"use strict"

// using a simple hello world to check if its all working and testing out fine
//helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// say hello function
function sayHello (str)
{
    return "Hello, "+str+"!";
}


// Test driving the isFive Function! yay :D

function isFive (input){
    if (input === 5){
        return true;
    }else if (input === "5"){
        return false;
    }else{
        return 'boolean'
    }
}

// moving onto exercises 11, process of for testing and creating an isEven function.
function  isEven (number) {
    return parseInt(number) % 2 === 0;
}
console.log(isEven(true));
console.log (isEven(typeof 2));
















/// function from lecture before class ended just to practice, not using
// function addONe (input) {
//     if (typeof input !== "number"){
//         return NaN;
//     } else {
//         return input + 1;
//     }
//}

//function sayHello ==> should return a string when called

