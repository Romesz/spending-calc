/* jshint esnext: true */
/* globals require, module, process */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://${process.env.DBuser}:${process.env.DBpass}@ds035735.mongolab.com:35735/${process.env.DBname}`);

let outcomeSchema = new Schema({
  userID: {type: String, required: true},
  title: {type: String, required: true},
  price: {type: Number, required: true},
  date: {type: Date, required: true}
});

module.exports = mongoose.model('Outcome', outcomeSchema);