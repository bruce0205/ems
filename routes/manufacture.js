var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      title: 'Express',
      layout: 'layout',
    });
  });

  router.get('/ajax', function (req, res, next) {
    console.log(`env: ${process.env.NODE_ENV}`);
    if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
      db.query(`

      select d.maf_num
      ,d.maf_pn
      ,d.maf_time
      ,d.maf_date
      ,d.maf_hole1
      ,d.maf_hole2
      ,d.maf_mold
      ,d.maf_cytime
      ,d.maf_cto
      ,d.maf_pke
      ,d.maf_onresult
      ,d.maf_oncount
      ,replace(convert(varchar, d.maf_ondate, 111), '/','-') as maf_ondate
      ,d.maf_ofresult
      ,d.maf_ofreason
      ,d.maf_offcount
      ,replace(convert(varchar, d.maf_offdate, 111), '/','-') as maf_offdate
  ,CAST(e.OK as decimal(6,2))/(CAST(e.OK as decimal(6,2))+ cast(e.NG as decimal(6,2))) as YIeld
  from MAF_DATA d
 left join 
 (
SELECT err_mahnum,err_mafpn,err_date,err_mold,
[OK], [NG]
FROM
(SELECT err_mahnum,err_mafpn,err_date,err_mold,err_Ct,
  (case err_id when '11' then 'OK' else 'NG' end) as OK_NG
    FROM ERR_COUNT) AS SourceTable
PIVOT
(
SUM(err_Ct)
FOR OK_NG IN ([OK], [NG])
) AS PivotTable
) e
 on e.err_mahnum = d.maf_num and e.err_mafpn = d.maf_pn and e.err_date = d.maf_ondate and e.err_mold = d.maf_mold


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
      res.send(testingData);
    }
  });

  app.use('/manufacture', router);
}
