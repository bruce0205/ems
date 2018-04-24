var express = require('express');
var jwt = require('jsonwebtoken');
var CONFIG = require('../lib/config')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.clearCookie("jwt");
  res.render('login', {
    title: 'Express',
    layout: '',
  });
});

router.get('/logout', function (req, res, next) {
  res.clearCookie("jwt");
  res.redirect('/login');
});

router.post('/', function (req, res, next) {
  // get username & password
  // gen jwt


  if (req.body.uu === 'admin' && req.body.pp === 'admin') {
    let payload = {
      account: req.body.uu
    }
    let tokenOptions = {
      // expiresIn: 60 * 60, // 1h
      expiresIn: '3h'
    }
    const token = jwt.sign(payload, CONFIG.secret, tokenOptions);

    let cookieOptions = {
      maxAge: 1000 * 60 * 240, // would expire after 120 minutes
      httpOnly: true, // The cookie only accessible by the web server
      // signed: true // Indicates if the cookie should be signed
    }

    res.cookie('jwt', token, cookieOptions);
    res.redirect('/');
  } else {
    res.render('login', {
      title: 'Express',
      layout: '',
      message: '帳號或密碼錯誤'
    });
  }
});

module.exports = router;
