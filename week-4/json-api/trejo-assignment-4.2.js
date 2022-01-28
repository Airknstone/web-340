/* Title: trejo-assignment-4.2.js
Author: Professor Krasso
Date: 01 28 2022
Modified By: Allan Trejo
Description: Express server response with JSON
The fundamentals of an Express API are pretty straightforward: take a request, parse it, and respond with a JSON object and an HTTP status code (Hahn, 2016). 
 */
const { response } = require('express');
var express = require('express');
var http = require('http');
var app = express();

app.get('/user/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);

  res.json({
    id: id,
    uriParam: req.params,
    grabParams: 'And return as an interger',
    notAs: 'a string',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on port 3000');
});
