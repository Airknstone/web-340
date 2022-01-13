/* Title: trejo-assignment-2.2.js
Author: Professor Krasso
Date: 01 12 2022
Modified By: Allan Trejo
Description: Create Routes and request handlers using express
 */
var express = require( "express" );
var http = require( "http" );

var app = express();

// Routes
app.get( '/', function ( request, response ) {
    response.end('Welcome to the Home page!')
} )

app.get( '/about', function ( request, response ) {
    response.end('Welcome to the About Page!')
} )

app.get( '/contact', function ( request, response ) {
    response.end('Welcome to the Contact!')
} )

//Handles routes that do not have a match
app.use( function ( request, response ) {
    response.statusCode = 404;
    response.end('404!')
} )

// Creates a http server and listens on 3000
http.createServer( app ).listen( 3000, function () {
    console.log('Started on port 3000')
} );