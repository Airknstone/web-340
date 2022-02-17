/* Title: employee.js
Author: Professor Krasso
Date: 02 16 2022
Modified By: Allan Trejo
Description: Small application using EJS
Connects to MongoDB 
 */

const mongoose = require('mongoose');
/* Globals */
var Schema = mongoose.Schema;
/* Schema model */
const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
