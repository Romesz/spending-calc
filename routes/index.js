/* jshint esnext: true */
/* globals require, module, console */

const routesDBhelper = require('./routesDBhelper.js');

module.exports = {
  index: (req,res) => {
    res.render('index', {userName: req.user.displayName});
  },
  ensureAuthenticated: (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }
    res.json({auth: false});
  },
  isAuth: (req, res) => {
    res.json({auth: req.isAuthenticated()});
  },
  add: (req, res) => {
    let c = function(res) {
      //res.redirect('/');
      res.send({sucess:true})
    };
    routesDBhelper.add(req.user.id, req.body, c, res);
  },
  retriveByDate: (req, res) => {
    let c = function(res, data) {
      res.json(data);
    };
    routesDBhelper.retriveByDate(req.user.id, req.body.date, c, res);
  },
  getData: (req, res) => {
    let c = function(data, res) {
      res.json(data);
    };
    routesDBhelper.data(req.user.id, c, res);
  },
  fb: (req, res) => {
    res.redirect('/');
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};