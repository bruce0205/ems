var express = require('express');
var router = express.Router();

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {

    // machine
    sequelize.query(`
select s.mah_num,
s.mah_sta,
s.mah_pn,
s.mah_mold,
s.mah_cou,
s.mah_result,
(d.maf_oncount-d.maf_pke) / d.maf_oncount
from MAH_STA s left join MAF_DATA d on d.maf_num = s.mah_num
`, {
        // Set this to true if you don't have a model definition for your query.
        raw: false,
        type: Sequelize.QueryTypes.SELECT
      }).then(myTableRows => {
        console.log(myTableRows);
      });

    res.render('machine', {
      title: 'Express',
      layout: 'layout',
    });
  });

  app.use('/machine', router);
}
