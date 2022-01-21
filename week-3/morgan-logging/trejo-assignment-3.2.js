/* Title: trejo-assignment-3.2.js
Author: Professor Krasso
Date: 01 21 2022
Modified By: Allan Trejo
Description: Express Server with morgan logger, serves EJS templates
 */
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function (request, response) {
  response.render('index', {
    header: `<h1 style='color: white; font-size: 4rem; font-style: italic'>Cars</h1>`,
    message: `<table class="pure-table" style="background-color: white; position: absolute; transform: translate(20%,100%)">
    <thead>
        <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Honda</td>
            <td>Accord</td>
            <td>2009</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2012</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Hyundai</td>
            <td>Elantra</td>
            <td>2010</td>
        </tr>
    </tbody>
</table>`,
  });
});

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});
