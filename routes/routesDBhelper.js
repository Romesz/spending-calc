/* jshint esnext: true */
/*globals require, module, console*/

"use strict";

const models = require('../models/outcome');

module.exports = {
  getData: (userID, callback, res) => {
    if(userID === undefined || userID === null) {
      callback(null, res);
    } else {    
      models.find({ userID: userID }, (err, outcome) => {
        if(err) {
          console.log(err);
          callback(null, res);
        }
        callback(outcome, res);
      });
    }
  },
  add: (userID, bodyVars, callback, res) => {
    if(userID === undefined || userID === null) {
      callback(res);
    } else {
      let proba = new models({userID: userID, title : bodyVars.title, price : bodyVars.price, date: new Date().toUTCString()});
      proba.save((err, saved) => {
        if(err) {
          console.log(err);
          callback(res);
        }
        callback(res);
      });
    }
  }
};