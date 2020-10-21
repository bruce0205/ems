const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const logger = require('./lib/logger');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./config/database.js');
const auth = require('./lib/auth');
var session = require('express-session');

const index = require('./routes/index');
const users = require('./routes/users');
const machine = require('./routes/machine');
const mold = require('./routes/mold');
const manufacture = require('./routes/manufacture');
const login = require('./routes/login');
const kanban = require('./routes/kanban');
const tryMold = require('./routes/tryMold');
const qcFile = require('./routes/qcFile');
const parts = require('./routes/parts');
const partsConfig = require('./routes/partsConfig');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' }); // this is defalut value, you can ignore this setting.

hbs.registerHelper('json', function (obj) {
  return JSON.stringify(obj);;
});


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 3 * 60 * 60 * 1000 }
}));

// app.use('/login', login);
login(app, db);
app.use(auth.checkPermission);

app.get('/', function(req, res) {
  res.redirect('/machine');
});

app.use('/home', index);
app.use('/users', users);
machine(app, db);
mold(app, db);
manufacture(app, db);
kanban(app, db);
tryMold(app, db);
qcFile(app, db);
parts(app, db);
partsConfig(app, db);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { layout: '' });
});

module.exports = app;
