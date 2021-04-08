
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
    //
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


});

describe('isFive',function (){
   it('Should be a defined function', function (){
       expect(typeof isFive).toBe('function');
   });
   it('Should be returning a boolean no matter the input', function (){
      expect(isFive()).toBe("boolean");
   });
   it('If passed the string "5", should return false.',function (){
      expect(isFive("5")).toBe(false);
   });
   it ('if passed the number 5, should return true',function (){
      expect(isFive(5)).toBe(true);
   });

});

describe("isEven", function (){
   it('Should return a boolean no matter the input',function (){
      expect(isEven(2)).toBe(); // check this
        });
   it ('Should return true when executed with "isEven(2)"',function (){
      expect(isEven(2)).toBe(true);
        });
   it ('Should return true when executed with "isEven(-4)"',function (){
        expect(isEven(-4)).toBe(true);
        });
   it ('Should return false when executed with "isEven(3)"',function (){
        expect(isEven(3)).toBe(false);
        });
    it ('Should return false when executed with "isEven("banana")"',function (){
        expect(isEven("banana")).toBe(false);
    });
    it ('Should return true when executed with "isEven(8)"',function (){
        expect(isEven(8)).toBe(true);
    });
    it ('Should return false when executed with "isEven(Infinity)"',function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it ('Should return false when executed with "isEven(true)"',function (){
        expect(isEven(true)).toBe(false);
    });
    it ('Should return false when executed with "isEven(false)"',function (){
        expect(isEven(false)).toBe(false);
    });
    it ('Should return false when executed with "isEven()"<-- nothing entered',function (){
        expect(isEven()).toBe(false);
    });
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

