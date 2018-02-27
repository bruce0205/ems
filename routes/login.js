var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Express',
    layout: '',
  });
});

module.exports = router;
