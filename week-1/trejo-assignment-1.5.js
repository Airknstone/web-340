/* Title: trejo-assignment-1.5.js
Author: Professor Krasso
Date: 01 06 2022
Modified By: Allan Trejo
Description: a nodeJS server 
 */

//commonJS imports
var http = require("http");

function processRequest(request, response) {
  var body = `<h1>Inserting a header tag test by changing content type fromt text/plain to text/html</h1>`;
  var contentLength = body.length;

  response.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/html",
  });
  response.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);
