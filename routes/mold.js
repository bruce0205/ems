var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingFisrtData = require('../data/moldFirst.json');
var testingSecondData = require('../data/moldSecond.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('mold', {
      layout: 'layout',
    });
  });

  router.get('/ajax/first', function (req, res, next) {
    if (process.env.NODE_ENV == 'prod' || process.env == 'test') {
      db.query(`
        select distinct mvs_pn,mvs_mold from MOLD_MVS
      `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          console.log(data);
          res.send(data);
        }).catch(err => {
          console.error(err);
        });
    } else {
      res.send(testingFisrtData);
    }
  });

  router.get('/ajax/second', function (req, res, next) {
    if (process.env.NODE_ENV == 'prod' || process.env == 'test') {
      db.query(`
        select distinct mvs_pn,mvs_mold from MOLD_MVS
      `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          console.log(data);
          res.send(data);
        }).catch(err => {
          console.error(err);
        });
    } else {
      res.send(testingSecondData);
    }
  });

  router.get('/origin', function (req, res, next) {
    res.render('moldorigin', {
      title: 'Express',
      layout: 'layout',
    });
  });

  app.use('/mold', router);
}

