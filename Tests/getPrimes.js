(function() {
  'use strict';
 var getPrimes = require('../Apps/getPrimes.js').getPrimes;
  describe('Prime Numbers in a List: ', function () {

    describe('Return the prime numbers from 0 to n in a list as follows', function () {


      it('should return [] for 0', function () {
        expect(getPrimes(0)).toEqual([]);
      });

      it('should return [2, 3, 5] for 5', function () {
        expect(getPrimes(5)).toEqual([2, 3, 5]);
      });

      it('should return [2, 3, 5, 7] for 10', function () {
        expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
      });

      it('should return [2, 3, 5, 7, 11, 13] for 15', function () {
        expect(getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
        expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 25', function () {
        expect(getPrimes(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30', function () {
        expect(getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31] for 35', function () {
        expect(getPrimes(35)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39] for 40', function () {
        expect(getPrimes(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39, 41, 43] for 45', function () {
        expect(getPrimes(45)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
      });
});

});
})();