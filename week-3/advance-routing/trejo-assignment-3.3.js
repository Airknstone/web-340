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
app.get('/:employeeId', function (request, response) {
  console.dir(request.params);
  //10 Decimal system 	Used by humans in the vast majority of cultures. Its ten digits are "0"–"9".
  //parseInt Radix
  var employeeId = parseInt(request.params.employeeId, 10);
  response.render('index', {
    employeeId: employeeId,
  });
});
http.createServer(app).listen(8080, function () {
  console.log('Application started on port 8080');
});
