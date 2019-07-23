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
      username: req.session.username,
      account: req.session.account,
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
        select pn_type, pn_type_name, pn,convert(varchar, pn_date, 120) as pn_date, pn_count from ${functionName}(:pn, :mold)
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

  router.get('/api/history/:historyType', function (req, res, next) {

    let triggerType = req.query.triggerType;
    let tableName = `mold_${triggerType}_history`;

    let replacements = {}
    let sql = `
      select
      ${triggerType}_pn trigger_pn,
      ${triggerType}_mold trigger_mold,
      ${triggerType}_component trigger_component,
      tn.pn_type_name,
      convert(varchar, ${triggerType}_update_datetime, 120) as update_datetime,
      ${triggerType}_update_count as update_count,
      ${triggerType}_update_user as update_user
      from ${tableName} his left join MOLD_PN_TYPE_NAME tn on tn.pn_type = his.${triggerType}_type
      where 1=1
    `

    if (req.params.historyType === 'assembly') {
      sql += `
        and ${triggerType}_pn = :trigger_pn
        and ${triggerType}_mold = :trigger_mold
        and ${triggerType}_type = :trigger_type
      `
      replacements = {
        trigger_pn: req.query.trigger_pn,
        trigger_mold: req.query.trigger_mold,
        trigger_type: req.query.trigger_type
      }
    } else if (req.params.historyType === 'component') {
      sql += `
        and ${triggerType}_component = :trigger_component
      `
      replacements = {
        trigger_pn: req.query.trigger_pn,
        trigger_mold: req.query.trigger_mold,
        trigger_component: req.query.trigger_component
      }
    }
    sql += `order by ${triggerType}_update_datetime desc`

    db.query(sql, {
      replacements: replacements,
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
    console.log(req.query)

    let triggerType = req.query.triggerType;
    let tableName = `mold_${triggerType}_history`;
    console.log(`tableName: ${tableName}`);

    db.query(`
        select top(1) ${triggerType}_update_count from ${tableName}
        where ${triggerType}_component = :mvs_component
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
        select threshold, alarm_pect from mold_conf
        where component = :component
      `, {
        replacements: {
          component: req.query.component
        },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/api/component/check', function (req, res, next) {
    let triggerType = req.query.triggerType;
    db.query(`
        select
        mc.${triggerType}_pn as trigger_pn,
        mc.${triggerType}_mold trigger_mold,
        mc.${triggerType}_hole1 trigger_hole1,
        mc.${triggerType}_hole2 trigger_hole2,
        pn_type
        from MOLD_${triggerType} m
        CROSS APPLY GetMoldCount_${triggerType}(m.${triggerType}_pn,m.${triggerType}_mold) mc
        where 1=1
        and mc.pn = :component
      `, {
        replacements: {
          component: req.query.component
        },
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  });

  router.post('/api/insertMold', function (req, res, next) {
    console.log(req.body)
    db.query(`
      InsertMoldMain_sp
      @pn = :pn,
      @mold = :mold,
      @hole1 = :hole1,
      @hole2 = :hole2
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        replacements: {
          pn: req.body.pn,
          mold: req.body.mold,
          hole1: req.body.hole1,
          hole2: req.body.hole2
        },
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ status: 200 });
      }).catch(err => {
        res.send({ status: 500 });
      });
  })

  router.post('/api/record', function (req, res, next) {
    let spName = `InsertMold_${req.body.triggerType}_sp`;

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

  router.post('/api/config', function (req, res, next) {
    console.log(req.body)
    let spName = `UpdateMoldConf_sp`;

    db.query(`
      ${spName}
      @component = :component,
      @threshold = :threshold,
      @alarm_pect = :alarm
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        replacements: {
          component: req.body.component,
          threshold: req.body.threshold,
          alarm: req.body.alarm,
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
