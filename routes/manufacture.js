var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      isManufacture: true,
      layout: 'layout',
    });
  });

  router.get('/ajax', function (req, res, next) {
    console.log('fromDate: ' + req.query.fromDate);
    console.log('endDate: ' + req.query.endDate);
    console.log('mafPn: ' + req.query.mafPn);
    console.log('mafNum: ' + req.query.mafNum);

    db.query(`
      GetMFGHistory_sp
      @err_sdate = '2018-03-01',
      @err_edate = '2018-03-25',
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
