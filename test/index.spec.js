var expect = require('chai').expect;
var founders = require('../src');

describe("founders names", function() {
  
  describe("all", function() {
      
    it("should be an array of strings", function() {
      expect(founders.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it("should contain `Cameron Roe`", function() {
      expect(founders.all).to.include('Cameron Roe');
    });
  });

  describe("random", function() {
    
    it("should return a random item from the founders.all", function() {
      var rand = founders.random();
      expect(founders.all).to.include(rand);
    });
  });
  
});