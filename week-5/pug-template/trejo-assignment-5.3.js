/* Title: trejo-assignment-5.3.js
Author: Professor Krasso
Date: 02-03-2022
Modified By: Allan Trejo
Description:  PugJS Templating with Express
*/

var express = require('express');
var http = require('http');
const pug = require('pug');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, resp) {
  resp.render('index', {
    message: 'Welcome to my Pug based HomePage!',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on Port 3000');
});
