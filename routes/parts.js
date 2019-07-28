var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

module.exports = (app, db) => {
  router.get('/form', function (req, res, next) {
    res.render('partsForm', {
      isParts: true,
      username: req.session.username,
      layout: 'layout'
    });
  });

  router.get('/search', function (req, res, next) {
    res.render('partsSearch', {
      isParts: true,
      username: req.session.username,
      layout: 'layout'
    });
  });

  router.get('/api/data', function (req, res, next) {
    let sql = `
      SELECT sys_id
        ,part_no
        ,part_type
        ,status
        ,convert(varchar, create_datetime, 20) create_datetime
        ,create_user
        ,description
      FROM tbl_PARTS
      Where 1=1
    `
    console.log(req.query)
    sql += ` order by sys_id`

    db.query(sql, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
    }).then(data => {
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

  router.get('/parameters', async function (req, res, next) {
    let partType = 'mold'
    let fieldType = req.query.fieldType

    let sql = `select field_key, field_value from tbl_PARTS_ATTR_CONFIG where Part_Type = '${partType}' and Field_Type = '${fieldType}' `
    if (req.query.fieldDynamicIndex) {
      sql += ` and Field_Dynamic_Index = '${req.query.fieldDynamicIndex}' `
    }
    console.log(sql)
    const result = await db.query(sql, {
      raw: false,
      type: Sequelize.QueryTypes.SELECT
    })

    res.send({result});
  })

  router.post('/', async (req, res, next) => {
    console.log(req.body)
    let seqNo
    let partNo
    let partNoSysId
    let dbOptions = {
      raw: false,
      type: Sequelize.QueryTypes.SELECT
    }

    try {
      // step1: get seq no
      let seqNoSql = `Select top 1 part_no, SUBSTRING(part_no,CHARINDEX('-',part_no)+1, 3) seq_no from tbl_PARTS where Part_No like '${req.body.partNo}' order by Part_No desc`
      const seqNoResult = await db.query(seqNoSql, dbOptions)
      if (seqNoResult.length) {
        let currentSeqNo = parseInt(seqNoResult[0].seq_no)
        console.log('currentSeqNo: ' + currentSeqNo)
        let newSeqNo = ++currentSeqNo
        seqNo = newSeqNo.toString().padStart(3, '0')
      } else {
        seqNo = '001'
      }
      console.log('seqNo: ' + seqNo)

      // step2: insert into tbl_parts
      partNo = req.body.partNo.replace('%%%', seqNo)
      console.log('partNo: ' + partNo)

      let insertPartNoSql = `insert into tbl_PARTS values ('${partNo}', 'mold', 'Initial', getdate(), 'bruce', '${req.body.description}')`
      const partNoResult = await db.query(insertPartNoSql, {
        raw: false,
        type: Sequelize.QueryTypes.INSERT
      })
      if (partNoResult[1] !== 1)  throw 'insert tbl_parts fail'


      // step3: query part_no record
      let queryPartNoSql = `select sys_id from tbl_parts where part_no ='${partNo}'`
      const queryPartNoResult = await db.query(queryPartNoSql, dbOptions)
      if (queryPartNoResult.length) {
        partNoSysId = queryPartNoResult[0].sys_id
      } else {
        throw 'insert tbl_parts fail'
      }
      console.log('partNo.sys_id: ' + partNoSysId)

      // step4: insert into tbl_parts_attr
      for (i = 0; i < req.body.attributes.length; i++) {
        let item = req.body.attributes[i]
        console.log(item)
        let insertPartsAttrSql = `insert into tbl_parts_attr values ('${partNoSysId}', '${item.fieldType}', '${item.fieldKey}', '${item.fieldValue}')`
        const partsAttrResult = await db.query(insertPartsAttrSql, {
          raw: false,
          type: Sequelize.QueryTypes.INSERT
        })
      }

      console.log('process finish..')
      res.send({'result': 'ok', partNo})
    } catch(err) {
      console.error(err)
      res.send({'result': 'fail'})
    }
  })

  app.use('/parts', router);
}
