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

describe("sayHello", function() {
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return \"Hello, Jane!\"", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return \"Hello, Alex!\"", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return \"Hello, Pat!\"", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return \"Hello, World!\"", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\"", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\"", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\"", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\"", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a function", function(){
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean", function(){
        expect(typeof (isFive())).toBe("boolean");
    });
    it("should return true if input is five", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return false if input = 4", function(){
        expect(isFive(4)).toBe(false);
    });
    it("should return false if input = \"5\"", function(){
        expect(isFive("5")).toBe(false);
    });
});

describe("isEven", function(){
    it("should be a function", function(){
        expect(typeof isEven).toBe("function");
    });
    it("should always return a boolean", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true with input = 2", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return true with input = -4", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return false with input = 3", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return false with input = \"banana\"", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("should return true with input = 8", function(){
        expect(isEven(8)).toBe(true);
    });
    it("should return false with infinity", function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it("should be false with a boolean", function(){
        expect(isEven(true)).toBe(false);
    });
    it("should return false when called without an argument", function(){
        expect(isEven()).toBe(false);
    })
})

describe("isVowel", function(){
    it("should be a function", function(){
        expect(typeof isVowel).toBe('function');
    });
    it("should always return a boolean", function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true with input = a", function(){
        expect(isVowel("a")).toBe(true);
    });
    it("should return true with input = A", function(){
        expect(isVowel("A")).toBe(true);
    });
    it("should return true with input = y", function(){
        expect(isVowel("y")).toBe(false);
    });
    it("should return false with input = 4", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("should return false with input = true", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return false with input = false", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("should return false with input = banana", function(){
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false with input = ", function(){
        expect(isVowel()).toBe(false);
    });
});

describe("add", function(){
    it("should be a function", function(){
        expect(typeof add).toBe("function");
    });
    it("should 2 + 3 = 5", function(){
        expect(add(2, 3)).toBe(5);
    });
    it("should -3 -9 = -12", function(){
        expect(add(-3, -9)).toBe(-12);
    });
    it("should -4 +10 = 6", function(){
        expect(add(-4, 10)).toBe(6);
    });
    it("should banana + split = NaN", function(){
        expect(isNaN(add("banana", "split"))).toBe(true);
    });
    it("should 2 + apples = NaN", function(){
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it("should return NaN with no arguments", function(){
        expect(isNaN(add())).toBe(true);
    });
});