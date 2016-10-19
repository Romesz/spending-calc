/* jshint esnext: true */
/*globals require, process, console*/

require('dotenv').load();
const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const express_session = require('express-session');
const routes = require('./routes');
const passport = require('passport');
const fbInit = require('./fbAuth.js').fbInit;

fbInit();

const app = express();
//app.use(morgan('combined'));
app.use(express.static('view2/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express_session({ secret: 'my_precious' }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/', routes.ensureAuthenticated, routes.index);
app.get('/auth', passport.authenticate('facebook', { failureRedirect: '/autherror' }), routes.fb);
app.post('/add', routes.ensureAuthenticated, routes.add);
app.get('/data', routes.ensureAuthenticated, routes.getData);
app.post('/retriveByDate', routes.ensureAuthenticated, routes.retriveByDate);
app.get('/logout', routes.logout);

app.get('/isAuth', routes.isAuth);

app.listen(3000);
console.log('server is listening on port 3000');