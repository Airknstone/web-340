const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home Page',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});
