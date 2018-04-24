var logger = require('./logger.js');
var CONFIG = require('./config.js');
var jwt = require('jsonwebtoken');

var auth = {
  checkPermission: function (req, res, next) {
    const token = req.cookies.jwt;
    if (token) {
      try {
        var decoded = jwt.verify(token, CONFIG.secret);
      } catch(err) {
        logger.error('invalid token: ' + token);
        res.redirect('/login');
      }
    } else {
      res.redirect('/login');
    }
    next()
  }
}

module.exports = auth;
