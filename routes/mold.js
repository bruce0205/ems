var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingFisrtData = require('../data/moldFirst.json');
var testingSecondData = require('../data/moldSecond.json');
var logger = require('../lib/logger.js');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('mold', {
      isMold: true,
      layout: 'layout',
    });
  });

  router.get('/api/header', function (req, res, next) {
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

  router.get('/api/detail', function (req, res, next) {
    logger.info('mold.api.detail() api invoke')
    db.query(`
        select pn_type, pn,convert(varchar, pn_date, 120) as pn_date, pn_count from GetMoldCount(:pn, :mold) 
      `, {
        replacements: {
          pn: req.query.pn,
          mold: req.query.mold
        },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/api/history', function (req, res, next) {
    console.log(req.query)
    let hole1Operator = (req.query.mvs_hole1) ? '=' : 'is';
    let hole2Operator = (req.query.mvs_hole2) ? '=' : 'is';
    db.query(`
      select convert(varchar, mvs_update_datetime, 120) as mvs_update_datetime,mvs_update_count,mvs_update_user from MOLD_HISTORY
      where mvs_pn = :mvs_pn
      and mvs_mold = :mvs_mold
      and mvs_hole1 ${hole1Operator} :mvs_hole1
      and mvs_hole2 ${hole2Operator} :mvs_hole2
      and mvs_type = :mvs_type
      order by mvs_update_datetime desc
      `, {
        replacements: {
          mvs_pn: req.query.mvs_pn,
          mvs_mold: req.query.mvs_mold,
          mvs_hole1: (req.query.mvs_hole1 ? req.query.mvs_hole1 : null),
          mvs_hole2: (req.query.mvs_hole2 ? req.query.mvs_hole2 : null),
          mvs_type: req.query.mvs_type
        },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
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

  router.post('/record', function (req, res, next) {
    console.log(req.body)
    db.query(`
      InsertMold_sp
      @mvs_pn = :mvs_pn,
      @mvs_mold = :mvs_mold,
      @mvs_hole1 = :mvs_hole1,
      @mvs_hole2 = :mvs_hole2, 
      @mvs_type = :mvs_type,
      @mvs_component = :mvs_component,
      @mvs_update_datetime = :mvs_update_datetime,
      @mvs_update_count = :mvs_update_count,
      @mvs_update_user = :mvs_update_user
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        replacements: {
          mvs_pn: req.body.mvs_pn,
          mvs_mold: req.body.mvs_mold,
          mvs_hole1: req.body.mvs_hole1,
          mvs_hole2: req.body.mvs_hole2,
          mvs_type: req.body.mvs_type,
          mvs_component: req.body.mvs_component,
          mvs_update_datetime: req.body.mvs_update_datetime,
          mvs_update_count: req.body.mvs_update_count,
          mvs_update_user: req.body.mvs_update_user
        },
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ status: 200 });
      }).catch(err => {
        res.send({ status: 500 });
      });
  });

  app.use('/mold', router);
}

