/* Title: trejo-assignment-2.2.js
Author: Professor Krasso
Date: 01 12 2022
Modified By: Allan Trejo
Description: Create a simple server using Express
 */
var express = require( "express" );
var http = require("http");

var app = express();

app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, world");
});

http.createServer(app).listen(3000);
