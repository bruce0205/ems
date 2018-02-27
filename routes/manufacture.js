var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('manufacture', {
    title: 'Express',
    layout: 'layout',
  });
});

module.exports = router;
