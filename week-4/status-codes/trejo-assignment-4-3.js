/* Title: trejo-assignment-4.3.js
Author: Professor Krasso
Date: 01 28 2022
Modified By: Allan Trejo
Description: Express server response with JSON with status codes
The fundamentals of an Express API are pretty straightforward: take a request, parse it, and respond with a JSON object and an HTTP status code (Hahn, 2016). 
 */
const { response } = require('express');
var express = require('express');
var http = require('http');
var app = express();

app.get('/not-found', function (req, res) {
  res.status(404);
  res.json({
    error: '<img>Dinosaur game</img>',
  });
});
app.get('/ok', function (req, res) {
  res.status(200);
  res.json({
    message: 'Return Appropriate html file',
  });
});
app.get('/not-implemented', function (req, res) {
  res.status(501);
  res.json({
    error: 'Comming Soon!',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on port 3000');
});
