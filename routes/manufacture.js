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
    if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'test') {
      let sql = `
      select aa.*
      ,replace(convert(varchar, aa.maf_ondate, 111), '/','-') as maf_ondate_str
      ,replace(convert(varchar, aa.maf_offdate, 111), '/','-') as maf_offdate_str
      from (
      select 
      ROW_NUMBER() Over(Order By d.maf_num Desc) num
      ,d.maf_num
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
      ,d.maf_ondate
      ,d.maf_ofresult
      ,d.maf_ofreason
      ,d.maf_offcount
      ,d.maf_offdate
      ,e.OK,e.NG
  ,case (e.OK + e.NG) when 0 then NULL else 
  CAST(e.OK as decimal(10,2))/(CAST(e.OK as decimal(10,2))+ cast(e.NG as decimal(10,2)))
   end as yield
  from MAF_DATA d
 left join 
 (
SELECT err_mahnum,err_mafpn,err_date,err_mold,
[OK], [NG]
FROM
(SELECT err_mahnum,err_mafpn,err_date,err_mold,err_Ct,
  (case err_id when '12' then 'OK' else 'NG' end) as OK_NG
    FROM ERR_COUNT) AS SourceTable
PIVOT
(
SUM(err_Ct)
FOR OK_NG IN ([OK], [NG])
) AS PivotTable
) e
 on e.err_mahnum = d.maf_num and e.err_mafpn = d.maf_pn and e.err_date = d.maf_ondate and e.err_mold = d.maf_mold
      ) aa where 1=1  
      `

      if (req.query.mafNum) sql += ` and aa.maf_num like '%${req.query.mafNum}%' `;
      if (req.query.mafPn) sql += ` and aa.maf_pn like '%${req.query.mafPn}%' `;
      if (req.query.fromDate) sql += ` and (aa.maf_ondate >= CONVERT(DATETIME, '${req.query.fromDate}', 102)) `;
      if (req.query.endDate) sql += ` and (aa.maf_offdate <= CONVERT(DATETIME, '${req.query.endDate}', 102)) `;

      db.query(sql, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
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
