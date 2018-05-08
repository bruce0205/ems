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
    let functionName = `GetMoldCount_${req.query.triggerType}`;
    console.log(`functionName: ${functionName}`)

    db.query(`
        select pn_type, pn,convert(varchar, pn_date, 120) as pn_date, pn_count from ${functionName}(:pn, :mold) 
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
    let triggerType = req.query.triggerType;
    let tableName = `mold_${triggerType}_history`;


    db.query(`
      select convert(varchar, ${triggerType}_update_datetime, 120) as mvs_update_datetime,
      ${triggerType}_update_count as mvs_update_count,
      ${triggerType}_update_user as mvs_update_user 
      from ${tableName}
      where ${triggerType}_pn = :mvs_pn
      and ${triggerType}_mold = :mvs_mold
      and ${triggerType}_hole1 ${hole1Operator} :mvs_hole1
      and ${triggerType}_hole2 ${hole2Operator} :mvs_hole2
      and ${triggerType}_type = :mvs_type
      order by ${triggerType}_update_datetime desc
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

  router.get('/api/counter', function (req, res, next) {
    logger.info('mold.api.counter() api invoke')

    let triggerType = req.query.triggerType;
    let tableName = `mold_${triggerType}_history`;
    console.log(`tableName: ${tableName}`);

    db.query(`
        select top(1) ${triggerType}_update_count from ${tableName}
        where ${triggerType}_component = @mvs_component
        order by ${triggerType}_update_datetime desc
      `, {
        replacements: {
          mvs_component: req.query.mvs_component
        },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/api/config', function (req, res, next) {
    logger.info('mold.api.config() api invoke')

    db.query(`
        select mvs_threshold,mvs_alarm_pect from mold_conf
        where mvs_pn = @mvs_pn
        and mvs_mold = @mvs_mold
        and mvs_hole1 = @mvs_hole1
        and mvs_hole2 = @mvs_hole2
        and mvs_type = @mvs_type
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
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.post('/api/record', function (req, res, next) {
    console.log(req.body)
    let spName = `InsertMold_${req.body.triggerType}_sp`;
    console.log(`spName: ${spName}`);

    db.query(`
      ${spName}
      @${req.body.triggerType}_pn = :mvs_pn,
      @${req.body.triggerType}_mold = :mvs_mold,
      @${req.body.triggerType}_hole1 = :mvs_hole1,
      @${req.body.triggerType}_hole2 = :mvs_hole2, 
      @${req.body.triggerType}_type = :mvs_type,
      @${req.body.triggerType}_component = :mvs_component,
      @${req.body.triggerType}_update_datetime = :mvs_update_datetime,
      @${req.body.triggerType}_update_count = :mvs_update_count,
      @${req.body.triggerType}_update_user = :mvs_update_user
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

