var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('moldtwo', {
    title: 'Express',
    layout: 'layout',
  });
});

router.get('/origin', function (req, res, next) {
  res.render('mold', {
    title: 'Express',
    layout: 'layout',
  });
});

module.exports = router;
