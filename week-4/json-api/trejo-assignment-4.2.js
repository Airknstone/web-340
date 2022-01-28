/* Title: trejo-assignment-4.2.js
Author: Professor Krasso
Date: 01 28 2022
Modified By: Allan Trejo
Description: Express server response with JSON
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
