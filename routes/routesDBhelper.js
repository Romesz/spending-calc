/* jshint esnext: true */
/*globals require, module, console*/

const models = require('../models/outcome');

module.exports = {
  data: (userID, callback, res) => {
    if(userID === null || userID === undefined) {
      callback(null, res);
    } else {
      models.find({ userID: userID }, (err, outcome) => {
        if(err) {
          console.log(err);
          return callback(null, res);
        }
        console.log('Date retirved');
        callback(outcome, res);
      });
    }
  },
  add: (userID, bodyVars, callback, res) => {
    if(userID === null || userID === undefined) {
      callback(res);
    } else {
      let addSpending = new models({userID: userID,
                              title : bodyVars.title,
                              price : bodyVars.price,
                              date: new Date()
                             });
      addSpending.save((err, saved) => {
        if(err) {
          console.log(err);
          callback(res);
        }
        console.log('Spending saved');
        callback(res);
      });
    }
  },
  retriveByDate: (userID, date, callback, res) => {
     if(userID === null || userID === undefined) {
      callback(res, null);
    } else {
      let dateSplited = date.split('-');
      let year = parseInt(dateSplited[0]);
      let month = parseInt(dateSplited[1]);
      console.log(month);
      // http://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery
      // http://momentjs.com/timezone/docs/
      console.log(new Date(2016, 9, 1).toUTCString());
      console.log(new Date(2016, 10 + 1, 0).toUTCString());
      models.find({
        userID: userID,
        date: {
          $gte: new Date(year, month, 1).toUTCString(),
          $lt: new Date(year, month + 1, 0).toUTCString()
        }
      }, (err, data) => {
        if (err) {
          console.log(err);
          return callback(res, null);
        }
        console.log('Date retirved by Date');
        callback(res, data);
      });
    }   
  }
};