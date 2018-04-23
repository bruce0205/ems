var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingFisrtData = require('../data/moldFirst.json');
var testingSecondData = require('../data/moldSecond.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('mold', {
      isMold: true,
      layout: 'layout',
    });
  });

  router.get('/ajax/first', function (req, res, next) {
    db.query(`
        select mvs_pn, mvs_mold, mvs_hole1, mvs_hole2 from MOLD_MVS
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/ajax/second', function (req, res, next) {
    console.log(req.query);
    db.query(`
      select pn_type, pn,replace(convert(varchar, pn_date, 111), '/','-') as pn_date, pn_count from GetMoldCount(:pn, :mold) 
      `, {
        replacements: { pn: req.query.pn, mold: req.query.mold },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        console.log(data);
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/origin', function (req, res, next) {
    res.render('moldorigin', {
      title: 'Express',
      layout: 'layout',
    });
  });

  app.use('/mold', router);
}

