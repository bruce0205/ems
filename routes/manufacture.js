var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      isManufacture: true,
      layout: 'layout',
      fromDate: req.query.fromDate,
      endDate: req.query.endDate
    });
  });

  router.get('/ajax', function (req, res, next) {
    db.query(`
      GetMFGHistory_sp
      @err_sdate = '${req.query.fromDate}',
      @err_edate = '${req.query.endDate}',
      @Target_Alarm = 1
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
  });

  app.use('/manufacture', router);
}
