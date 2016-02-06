import {expect} from 'chai';
import founders from '../src';

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

    it("should return an array of random items if passed a number", function() {
      var rand = founders.random(3);
      expect(rand).to.be.a('array');
      expect(rand).to.have.length(3);
      rand.map(function (item) {
        expect(founders.all).to.include(item);
      });
    });
    
  });
  
});