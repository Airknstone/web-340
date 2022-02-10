// Title: trejo-assignment 6.3.js
// Author: Professor Krasso
// Date: 02-09-2022
// Modified By: Allan Trejo
// Description: Persistent data, connecting to MongoDB cluster using mongoose
//

// Imports
var mongoose = require('mongoose');

// Store database connection as a string
var mongoDB =
  'mongodb+srv://admin:<password></password>@ems.a7w7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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
