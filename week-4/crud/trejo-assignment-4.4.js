/* Title: trejo-assignment-4.2.js
Author: Professor Krasso
Date: 01 28 2022
Modified By: Allan Trejo
Description:  API testing  through cURL

*/
const express = require('express');
const http = require('http');

let app = express();
app.set('port', process.env.PORT || 3000);
//  curl http://localhost:3000
app.get('/', function (req, res) {
  res.send('API invoked as an HTTP GET request.');
});
// curl -X PUT http://localhost:3000
app.put('/', function (req, res) {
  res.send('API invoked as an HTTP PUT request.');
});
// curl -X POST  http://localhost:3000
app.post('/', function (req, res) {
  res.send('API invoked as an HTTP POST request');
});

// curl -X DELETE http://localhost:3000
app.delete('/', function (req, res) {
  res.send('API invoked as an HTTP DELETE request');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log(`Application started and listening on port ${app.get('port')}`);
});
