/* 
 Title: trejo-assignment 7.2.js
 Author: Professor Krasso
 Date: 02-16-2022
 Modified By: Allan Trejo
 Description: TDD using mocha and Chai
 Attributions: https://www.w3schools.com/jsref/jsref_split.asp
*/

/* Imports */
var assert = require('assert');

/* Describe test */
describe('String#split', () => {
  it('should return an array of fruits', () => {
    /* Verify Array is array
    The split() method splits a string into an array of substrings.
    The split() method returns the new array.
    The split() method does not change the original string.*/
    assert(Array.isArray('Apple, Orange, Mango'.split(',')));
  });
});

function getFruits(str) {
  return str.split(',');
}
module.exports = getFruits;
