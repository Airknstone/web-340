/* Title: trejo-assignment-1.3.js
Author: Professor Krasso
Date: 01 06 2022
Modified By: Allan Trejo
Description: This script uses node built in library to parse a url and logs available data.
 */
var url = require("url");

var parsedURL = url.parse("https://wwww.archive.org/web/*/?name=node");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
