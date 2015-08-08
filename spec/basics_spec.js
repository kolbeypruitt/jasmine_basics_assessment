var code = require('../something.js')
describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function(){ expect(code.calculate(1)).toEqual(0.1); expect(code.calculate(10)).toEqual(1); });

  it('should tax 7% on the second $10', function(){ expect(code.calculate(15)).toEqual(1.35); });

  it('should tax 5% on the third $10', function(){ expect(code.calculate(25)).toEqual(1.95); });

  it('should tax 3% on the third $10', function(){ expect(code.calculate(35)).toEqual(2.35); });
});

describe('Leap Year', function(){
  it('Years divisible by 4 should be', function(){ expect(code.leapYear(4)).toEqual(true); });

  it('except years divisible by 100 and not 400', function(){ expect(code.leapYear(100)).toEqual(false); });

  it('except years divisible by 100 and not 400', function(){ expect(code.leapYear(1700)).toEqual(false); });
});

describe('changeToUpper', function(){
  it('for each string in the array', function(){ expect(code.changeToUpper(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']); });
});

describe('findGreatestStrength', function(){
  it('for the object list', function(){ expect(code.findGreatestStrength([{strength: 20, name: 'A'}, {strength: 10, name: 'B'}])).toEqual({strength: 20, name: 'A'}); });
});



