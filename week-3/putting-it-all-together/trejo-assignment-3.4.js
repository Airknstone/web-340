/* Title: trejo-assignment-3.2.js
Author: Professor Krasso
Date: 01 21 2022
Modified By: Allan Trejo
Description: Express Server with morgan logger, serves EJS templates Advance Routing 
 */
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));

//////////////////////
//  Routes

app.get('/', function (request, response) {
  response.render('index', {
    message: 'home page',
  });
});
app.get('/about', function (request, response) {
  response.render('about', {
    message: 'about page',
  });
});
app.get('/contact', function (request, response) {
  response.render('contact', {
    message: 'contact page',
  });
});
app.get('/products', function (request, response) {
  response.render('products', {
    message: 'products page',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started on port 3000.');
});
