"use strict"

//helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }

// // function statement syntax
// function helloWorld() {
//     return "Hello, World!";
// }

function addONe (input) {
    if (typeof input !== "number"){
        return NaN;
    } else {
        return input + 1;
    }
}
