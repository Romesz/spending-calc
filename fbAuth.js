/* jshint esnext: true */
/*globals require, process, console, module*/

module.exports.fbInit = function() {
  const passport = require('passport');
  const FacebookStrategy = require('passport-facebook').Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new FacebookStrategy({
      clientID: process.env.FBclientID,
      clientSecret: process.env.FBclientSecret,
      callbackURL: "http://localhost:3000/auth"
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  ));
};