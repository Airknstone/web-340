/* 
 Title: trejo-assignment 7.3.js
 Author: Professor Krasso
 Date: 02-16-2022
 Modified By: Allan Trejo
 Description: TDD using mocha and Chai
 Attributions: https://www.w3schools.com/jsref/jsref_split.asp
*/
/* imports and globals */
var fruits = require('../trejo-fruits');
var chai = require('chai');

var assert = chai.assert;

/* Tests if fruits function module returns an Array 
when passed in a comma separated string */
describe('fruits', () => {
  it('should return an array of fruits', () => {
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});
