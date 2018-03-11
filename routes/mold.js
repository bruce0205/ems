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
    if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
      db.query(`
        select distinct mvs_pn,mvs_mold from MOLD_MVS
      `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          console.log(data);
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    } else {
      res.send(testingFisrtData);
    }
  });

  router.get('/ajax/second', function (req, res, next) {
    console.log(req.query);
    if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
      db.query(`
      select pv1.mvs_pn,pv1.mvs_mold,pv1.mvs_hole1,pv1.mvs_hole2,
      pv1.unPivotcol as pn_type,pv1.pn,pv2.pn_date,pv3.pn_count from
      (
      select 
      mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
      mvs_die01,
      mvs_die02,
      mvs_bbk101,
      mvs_bbk102,
      mvs_bbk201,
      mvs_bbk202,
      mvs_bbk301,
      mvs_bbk302,
      mvs_cut01,
      mvs_cut02,
      mvs_pin,
      mvs_inldie01,
      mvs_inldie02,
      mvs_utk01,
      mvs_utk02,
      mvs_tpe
      from MOLD_MVS where mvs_pn = :pn and mvs_mold = :mold
      ) AS p
      UNPIVOT
      (pn for unPivotcol in (
      mvs_die01,
      mvs_die02,
      mvs_bbk101,
      mvs_bbk102,
      mvs_bbk201,
      mvs_bbk202,
      mvs_bbk301,
      mvs_bbk302,
      mvs_cut01,
      mvs_cut02,
      mvs_pin,
      mvs_inldie01,
      mvs_inldie02,
      mvs_utk01,
      mvs_utk02,
      mvs_tpe
      )) as pv1
      
      left join 
      
      (
      select 
      mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
      mvs_die01date as mvs_die01,
      mvs_die02date as mvs_die02,
      mvs_bbk101date as mvs_bbk101,
      mvs_bbk102date as mvs_bbk102,
      mvs_bbk201date as mvs_bbk201,
      mvs_bbk202date as mvs_bbk202,
      mvs_bbk301date as mvs_bbk301,
      mvs_bbk302date as mvs_bbk302,
      mvs_cut01date as mvs_cut01,
      mvs_cut02date as mvs_cut02,
      mvs_pindate as mvs_pin,
      mvs_inldie01date as mvs_inldie01,
      mvs_inldie02date as mvs_inldie02,
      mvs_utk01date as mvs_utk01,
      mvs_utk02date as mvs_utk02,
      mvs_tpedate as mvs_tpe
      from MOLD_MVS where mvs_pn = :pn and mvs_mold = :mold
      ) AS p
      UNPIVOT
      (pn_date for unPivotcol in (
      mvs_die01,
      mvs_die02,
      mvs_bbk101,
      mvs_bbk102,
      mvs_bbk201,
      mvs_bbk202,
      mvs_bbk301,
      mvs_bbk302,
      mvs_cut01,
      mvs_cut02,
      mvs_pin,
      mvs_inldie01,
      mvs_inldie02,
      mvs_utk01,
      mvs_utk02,
      mvs_tpe
      )) as pv2 on pv2.unPivotcol = pv1.unPivotcol
      
      left join
      
      (
      select 
      mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
      mvs_die01count as mvs_die01,
      mvs_die02count as mvs_die02,
      mvs_bbk101count as mvs_bbk101,
      mvs_bbk102count as mvs_bbk102,
      mvs_bbk201count as mvs_bbk201,
      mvs_bbk202count as mvs_bbk202,
      mvs_bbk301count as mvs_bbk301,
      mvs_bbk302count as mvs_bbk302,
      mvs_cut01count as mvs_cut01,
      mvs_cut02count as mvs_cut02,
      mvs_pincount as mvs_pin,
      mvs_inldie01count as mvs_inldie01,
      mvs_inldie02count as mvs_inldie02,
      mvs_utk01count as mvs_utk01,
      mvs_utk02count as mvs_utk02,
      mvs_tpecount as mvs_tpe
      from MOLD_MVS where mvs_pn = :pn and mvs_mold = :mold
      ) AS p
      UNPIVOT
      (pn_count for unPivotcol in (
      mvs_die01,
      mvs_die02,
      mvs_bbk101,
      mvs_bbk102,
      mvs_bbk201,
      mvs_bbk202,
      mvs_bbk301,
      mvs_bbk302,
      mvs_cut01,
      mvs_cut02,
      mvs_pin,
      mvs_inldie01,
      mvs_inldie02,
      mvs_utk01,
      mvs_utk02,
      mvs_tpe
      )) as pv3 on pv3.unPivotcol = pv1.unPivotcol
      
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

