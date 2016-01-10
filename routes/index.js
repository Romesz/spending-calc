/* jshint esnext: true */
/*globals require, module, console*/

"use strict";

const routesDBhelper = require('./routesDBhelper.js');

module.exports = {
  index: (req,res) => {
    res.render('index', {userName: req.user.displayName});
  },
  ensureAuthenticated: (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }
    res.render('noauth');
  },
  add: (req, res) => {
    let c = function(res) {
      res.redirect('/');
    };
    routesDBhelper.add(req.user.id, req.body, c, res);
  },
  getData: (req, res) => {
    let c = function(data, res) {
      res.json(data);
    }
    routesDBhelper.getData(req.user.id, c, res);
  },
  fb: (req, res) => {
    res.redirect('/');
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};