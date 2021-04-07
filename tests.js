"use strict"
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello',function (){
    it ('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it ('should be return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it ('Should return a string "Hello Jane" when passed Jane', function () {
       expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it ('Should return a string of "Hello Alex!" when passed Alex', function (){
       expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('Should return the string "Hello, Pat!" when passed Pat', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it ()

});





// IT WORKS YAY!!! :DDDD
// describe ("addONe",function (){
//     it ('should be a defined function', function (){
//         expect(typeof addONe).toBe('function');
//     })
//     it ('should return a number when called', function (){
//         expect(typeof addONe).toBe('function');
//     })
//     it ('should return a number 3 when passed an argument of number 2', function (){
//         expect(typeof addONe).toBe('function');
//     })
// })

// say hello

// describe(sayHello(), function (){
//     it ('should return string when called', function (){
//         expect(typeof sayHello).toBe("string");
//     })
// })
//

