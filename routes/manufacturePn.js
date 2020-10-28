var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

const dbOptions = {
  raw: false,
  type: Sequelize.QueryTypes.SELECT
}

const dbInsertOptions = {
  raw: false,
  type: Sequelize.QueryTypes.INSERT
}

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacturePn', {
      isManufacturePn: true,
      username: req.session.username,
      isAdmin: req.session.isAdmin,
      layout: 'layout'
    });
  });

  router.get('/api/data', function (req, res, next) {
    let sql = `
      SELECT
        ROW_NUMBER() OVER( ORDER BY maf_pn asc) AS row_no,
        maf_pn,
        maf_mold,
        maf_hole1,
        maf_hole2,
        CONVERT(char(10), maf_date,126) maf_date,
        maf_cto,
        maf_pke,
        maf_cytime,
        maf_ptmd,
        maf_hev,
        maf_tryd,
        maf_price
        from MAF_PN a
      Where 1=1
    `

    if (req.query.mafPn) sql += ` and maf_pn like '%${req.query.mafPn}%'`
    if (req.query.mafMold) sql += ` and maf_mold like '%${req.query.mafMold}%'`

    sql += ` order by maf_pn`

    db.query(sql, dbOptions).then(data => {
      data = data.map((val, index) => {
        return val
      })
      res.send({
        data
      });
    }).catch(err => {
      console.error(err);
    });
  });

  router.get('/api/data/:mafPn/:mafMold', async function (req, res, next) {
    let sql = `
      select maf_pn, maf_mold, maf_hole1, maf_hole2, CONVERT(char(10), maf_date,126) maf_date, maf_cto, maf_pke, maf_cytime, maf_ptmd, maf_hev, maf_tryd, maf_price
      from maf_pn
      where 1=1 and maf_pn = '${req.params.mafPn}' and maf_mold = '${req.params.mafMold}'
    `
    const result = await db.query(sql, dbOptions)
    if (result.length === 1) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({ message: 'resource not found' })
    }
  })

  router.get('/api/reason/:mafPn/:mafMold', async function (req, res, next) {
    let sql = `
      select e.err_id, rtrim(e.err_nam) as err_nam, (case isnull(m.Sys_ID,0) when 0 then 0 else 1 end) as checked, m.Seq
      from ERR_List e
      left join  tbl_ERRPN_MAPPING m on m.PN = '${req.params.mafPn}' and m.Mold = '${req.params.mafMold}' and m.Err_id = e.err_id
    `
    const result = await db.query(sql, dbOptions)
    console.log(result)
    res.status(200).send(result)
  })

  router.post('/api/reason', async function (req, res, next) {
    try {
      console.log(req.body)
      let deleteSql = `delete tbl_errpn_mapping where pn = '${req.body.mafPn}' and mold = '${req.body.mafMold}'`
      await db.query(deleteSql, dbInsertOptions)

      let insertSql = `
        insert into tbl_errpn_mapping
        (pn, mold, err_id, seq) values
        (:pn, :mold, :errId, :seq)
      `
      for (let i = 0; i < req.body.list.length; i++) {
        let obj = req.body.list[i]
        if (obj.checked) {
          await db.query(insertSql, {
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              pn: req.body.mafPn,
              mold: req.body.mafMold,
              errId: obj.err_id,
              seq: obj.Seq ? obj.Seq : 1
            }
          })
        }
      }

      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.get('/parameters', async function (req, res, next) {
    let partType = 'mold'
    let typeName = req.query.typeName
    let sql = `select distinct ${typeName}_type as type from tbl_parts_attr_config where part_type = '${partType}'`
    const result = await db.query(sql, dbOptions)

    res.send({ result });
  })

  router.post('/api/data', async function (req, res, next) {
    try {
      let sql = `
        insert into maf_pn
        (maf_pn, maf_mold, maf_hole1, maf_hole2, maf_date, maf_cto, maf_pke, maf_cytime, maf_ptmd, maf_hev, maf_tryd, maf_price) values
        (:mafPn, :mafMold, :mafHole1, :mafHole2, :mafDate, :mafCto, :mafPke, :mafCytime, :mafPtmd, :mafHev, :mafTryd, :mafPrice)
      `
      await db.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          mafPn: req.body.mafPn,
          mafMold: req.body.mafMold,
          mafHole1: req.body.mafHole1,
          mafHole2: req.body.mafHole2,
          mafDate: req.body.mafDate ? req.body.mafDate : null,
          mafCto: req.body.mafCto,
          mafPke: req.body.mafPke,
          mafCytime: req.body.mafCytime,
          mafPtmd: req.body.mafPtmd,
          mafHev: req.body.mafHev,
          mafTryd: req.body.mafTryd,
          mafPrice: req.body.mafPrice ? req.body.mafPrice : 0
        }
      })
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.put('/api/data', async function (req, res, next) {
    try {
      let sql = `
        update maf_pn set maf_hole1 = :mafHole1, maf_hole2 = :mafHole2, maf_date = :mafDate, maf_cto = :mafCto, maf_pke = :mafPke, maf_cytime = :mafCytime, maf_ptmd = :mafPtmd, maf_hev = :mafHev, maf_tryd = :mafTryd, maf_price = :mafPrice
        where maf_pn = :mafPn and maf_mold = :mafMold
      `
      await db.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          mafPn: req.body.mafPn,
          mafMold: req.body.mafMold,
          mafHole1: req.body.mafHole1,
          mafHole2: req.body.mafHole2 ? req.body.mafHole2 : '',
          mafDate: req.body.mafDate ? req.body.mafDate : null,
          mafCto: req.body.mafCto ? req.body.mafCto : null,
          mafPke: req.body.mafPke ? req.body.mafPke : null,
          mafCytime: req.body.mafCytime ? req.body.mafCytime : null,
          mafPtmd: req.body.mafPtmd,
          mafHev: req.body.mafHev ? req.body.mafHev : null,
          mafTryd: req.body.mafTryd ? req.body.mafTryd : null,
          mafPrice: req.body.mafPrice ? req.body.mafPrice : 0
        }
      })
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.delete('/api/data/:mafPn/:mafMold', async function (req, res, next) {
    try {
      let mafPnSql = `delete from maf_pn where maf_pn = '${req.params.mafPn}' and maf_mold = '${req.params.mafMold}'`
      const mafPnResult = await db.query(mafPnSql, dbInsertOptions)

      let errorSql = `delete from tbl_errpn_mapping where pn = '${req.params.mafPn}' and mold = '${req.params.mafMold}'`
      const errorResult = await db.query(errorSql, dbInsertOptions)

      if (mafPnResult[1] === 1) {
        res.status(200).send({})
      } else if (mafPnResult[1] === 0) {
        throw '重覆刪除或不存在'
      }
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.get('/api/duplicate/mafPn/:mafPn', async function (req, res, next) {
    let sql = `
      select maf_pn from maf_pn
      where 1=1 and maf_pn = '${req.params.mafPn}'
    `
    const result = await db.query(sql, dbOptions)
    if (result.length > 0) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({ message: 'resource not found' })
    }
  })

  router.get('/api/duplicate/mafMold/:mafMold', async function (req, res, next) {
    let sql = `
      select maf_mold from maf_pn
      where 1=1 and maf_mold = '${req.params.mafMold}'
    `
    const result = await db.query(sql, dbOptions)
    if (result.length > 0) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({ message: 'resource not found' })
    }
  })

  app.use('/manufacturePn', router);
}
