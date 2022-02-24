const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const mongoose = require('mongoose');
const Employee = require('./models/employee.js');
const helmet = require('helmet');

// Store database connection as a string
const mongoDB =
  'mongodb+srv://admin:11223344@ems.a7w7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//   Connect to Url
mongoose.connect(mongoDB);
//   Connect to Url
mongoose.connect(mongoDB);

// wait for return response
mongoose.Promise = global.Promise;

// store connection as variable
var db = mongoose.connection;

// On Error event
db.on('error', console.error.bind(console, 'MongoDB connected error: '));

// once opened / sucessful
db.once('open', function () {
  console.log('Application connected to MongoDB Atlas Cluster');
});

/* Initalize Express */
var app = express();

app.use(logger('short'));
app.use(helmet.xssFilter());

var emp = new Employee({
  firstName: 'Rick',
  lastName: 'Deckard',
});

console.log(emp);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home Page',
    emp: emp,
    message: 'XSS Prevention Example',
  });
});

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});
