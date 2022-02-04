/* Title: trejo-assignment-5.2.js
Author: Professor Krasso
Date: 02-03-2022
Modified By: Allan Trejo
Description:  Conditional Rendering using EJS
*/

var express = require('express');
var http = require('http');
var path = require('path');

app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

var names = ['Jonathon', 'Gwen', 'Dana ', 'Owen ', 'Jason ', 'Rhonda '];

app.get('/', function (req, res) {
  res.render('index', {
    names: names,
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on port 3000');
});
