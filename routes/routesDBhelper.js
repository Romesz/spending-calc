/* jshint esnext: true */
/*globals require, module, console*/

const moment = require('moment');

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
      function getDate(startVend, dateHelper) {
        let date;
        if (startVend === 'startOf') {
          date = moment(dateHelper).startOf('month').format('YYYY-MM-DD');
        } else {
          date = moment(dateHelper).endOf('month').format('YYYY-MM-DD');
        }
        return date;
      } 

      models.find({
        userID: userID,
        date: {
          $gte: getDate('startOf', date),
          $lt: getDate('endOf', date)
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