var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var data = require('../data/machine.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    db.query(`
        select 
        s.mah_num,
        s.mah_sta,
        s.mah_pn,
        s.mah_mold,
        s.mah_cou,
        s.mah_result,
        (d.maf_oncount-d.maf_pke) / d.maf_oncount
        from MAH_STA s left join MAF_DATA d on d.maf_num = s.mah_num
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        console.log(data);
      }).catch(err => {

      });
    res.render('machine', {
      title: 'Express',
      data: data,
      layout: 'layout',
    });
  });

  app.use('/machine', router);
}
