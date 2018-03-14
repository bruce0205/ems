var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/machine.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('machine', {
      isMachine: true,
      layout: 'layout',
    });
  });

  router.get('/ajax', function (req, res, next) {
    if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
      db.query(`
        select s.mah_num,
        s.mah_sta,
        (select top (1) maf_pn from MAF_DATA d where d.maf_num = s.mah_num) maf_pn,
        s.mah_mold,
        s.mah_cou,
        s.mah_result   
        from MAH_STA s
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
      res.send(testingData);
    }
  });

  app.use('/machine', router);
}
