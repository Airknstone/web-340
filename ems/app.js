/*
 Title: app.js
 Author: Professor Krasso
 Date: 02/12/2022
 Modified By: Allan Trejo
 Description: CRUD employee tracking system
 Mongo and express
*/
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const mongoose = require('mongoose');
const Employee = require('./models/employee.js');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const { response } = require('express');
require('dotenv').config();

/************* 1
BEGIN DATABASE CON1NECTIONS 
***********************************/
// Store database connection as a string
const mongoDB = `mongodb+srv://${process.env.SECRET_KEY}@ems.a7w7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//   Connect to url
mongoose.connect(mongoDB);

// wait for return response
mongoose.Promise = global.Promise;

// store connection as variable
var db = mongoose.connection;

// On Error event
db.on('error', console.error.bind(console, 'MongoDB connected error: '));

// once opened / sucsessful
db.once('open', function () {
  console.log('Application connected to MongoDB Atlas Cluster');
});

/************** 
END DATABASE CONNECTIONS 
***********************************/
/* Initialize CSRF First*/
var csrfProtection = csrf({ cookie: true });

/* Initalize Express */
var app = express();

/*************************
 *   BEGIN Middleware
 *****************************/

/* Morgan logger */
app.use(logger('short'));
/* helmet, helps prevent xss */
app.use(helmet.xssFilter());
/* parse response object body */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(logger('short'));
/* Parse Cookie header and populate req.cookies with an object keyed by the cookie names. */
app.use(cookieParser());
/* CSRF cookie */
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

/*************************
 *   END  Middleware
 *****************************/
/* Mount directory and template engine */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
/*************************
 *   BEGIN Routes
 *****************************/
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home Page',
  });
});
app.get('/new', function (req, res) {
  res.render('new', {
    title: 'New Entry Page',
    message: 'New Entry',
  });
});

/* If database contains emplyee schema, Populate  */
app.get('/list', function (req, res) {
  Employee.find({}, function (err, emp) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(emp);
      res.render('list', {
        title: 'List of Employees',
        employees: emp,
      });
    }
  });
});

/* Form Submission handler */
app.post('/process', function (req, res) {
  console.log(req.body);
  if (!req.body.txtFirstName || !req.body.txtLastName) {
    res.status(400).send('Entries must have a First Name and a Last Name');
    return;
  }
  var empFirstName = req.body.txtFirstName;
  var empLastName = req.body.txtLastName;
  console.log(empFirstName, empLastName);
  var emp = new Employee({
    firstName: empFirstName,
    lastName: empLastName,
  });

  emp.save(function (error) {
    if (error) throw error;
    console.log(empFirstName, empLastName + ' Saved Successfully!');
  });
  res.redirect('/');
});

app.get('/view/:queryName', function (req, res) {
  var queryName = req.params.queryName;
  Employee.find({ firstName: queryName }, function (error, emp) {
    if (error) throw error;
    console.log(emp);
    if (emp.length > 0) {
      res.render('view', {
        title: 'Fruit Record',
        employee: emp,
      });
    } else {
      response.redirect('/list');
    }
  });
});

/*************************
 *   END  Routes
 *****************************/

/* Create server */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Application started on port ' + app.get('port'));
});
