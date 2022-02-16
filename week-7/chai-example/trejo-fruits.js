/* 
 Title: trejo-assignment 7.3.js
 Author: Professor Krasso
 Date: 02-16-2022
 Modified By: Allan Trejo
 Description: TDD using mocha and Chai
 Attributions: https://www.w3schools.com/jsref/jsref_split.asp
*/

/* fruits function takes in a string and returns an array
delimited by comma */
function fruits(str) {
  return str.split(',');
}
module.exports = fruits;
