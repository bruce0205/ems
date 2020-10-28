var express = require('express');
var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var md5 = require('js-md5')
var CONFIG = require('../lib/config')
var router = express.Router();
var session = require('express-session');


module.exports = (app, db) => {

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

  router.post('/', async function (req, res, next) {
    // get username & password

    if (req.body.uu && req.body.pp) {
      let password = md5(req.body.pp)
      let sql = `select name, account, authGroup, adminenable from tbl_User where account ='${req.body.uu}' and password ='${password}'`
      const response = await db.query(sql, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      })

      if (response.length === 1 ) {
        let payload = {
          account: response[0].account,
          group: response[0].authGroup,
          name: response[0].name
        }
        let tokenOptions = {
          // expiresIn: 60 * 60, // 1h
          expiresIn: '3h'
        }
        const token = jwt.sign(payload, CONFIG.secret, tokenOptions);

        let cookieOptions = {
          maxAge: 1000 * 60 * 240, // would expire after 240 minutes
          httpOnly: true, // The cookie only accessible by the web server
          // signed: true // Indicates if the cookie should be signed
        }

        req.session.username = response[0].name
        req.session.account = response[0].account
        req.session.group = response[0].authGroup
        req.session.isAdmin = response[0].adminenable
        res.cookie('jwt', token, cookieOptions);
        res.redirect('/');
      }
    }
    res.render('login', {
      title: 'Express',
      layout: '',
      message: '帳號或密碼錯誤'
    });
  });

  app.use('/login', router);
}

