/* Title: trejo-assignment-2.2.js
Author: Professor Krasso
Date: 01 12 2022
Modified By: Allan Trejo
Description: Create a server that gets ejs files and renders custom variables
 */

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Rick",
    lastName: "Deckard",
    address: "Los Angeles 2049",
  });
});

http.createServer(app).listen(3000, function () {
  console.log("Server started on port 3000");
});
