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
    res.render('partsConfigSearch', {
      isPartsConfig: true,
      username: req.session.username,
      layout: 'layout'
    });
  });

  router.get('/api/data', function (req, res, next) {
    let sql = `
      SELECT
        ROW_NUMBER() OVER( ORDER BY sys_id asc) AS row_no,
        sys_id,
        part_type,
        field_type,
        field_key,
        field_value,
        field_dynamic_index,
        field_dynamic_index_2
      FROM tbl_parts_attr_config a
      Where 1=1 and part_type = 'mold'
    `

    if (req.query.partType) sql += ` and part_type='${req.query.partType}'`
    if (req.query.fieldType) sql += ` and field_type='${req.query.fieldType}'`

    sql += ` order by sys_id`

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

  router.get('/api/data/:sysId', async function (req, res, next) {
    console.log('sysId', req.params.sysId)
    let sql = `
      select sys_id, part_type, field_type, field_key, field_value, field_dynamic_index, field_dynamic_index_2 from tbl_parts_attr_config
      where 1=1 and sys_id = ${req.params.sysId}
    `
    const result = await db.query(sql, dbOptions)
    if (result.length === 1) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({message: 'resource not found'})
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
      let insertSql = `insert into tbl_parts_attr_config values ('${req.body.partType}', '${req.body.fieldType}', '${req.body.fieldKey}', '${req.body.fieldValue}', '${req.body.fieldDynamicIndex}', '${req.body.fieldDynamicIndex2}')`
      const insertResult = await db.query(insertSql, dbInsertOptions)
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({errorMessage: ex})
    }
  })

  router.put('/api/data', async function (req, res, next) {
    try {
      console.log(req.body)
      let sql = `update tbl_parts_attr_config set
        part_type = '${req.body.partType}',
        field_type = '${req.body.fieldType}',
        field_key = '${req.body.fieldKey}',
        field_value = '${req.body.fieldValue}',
        field_dynamic_index = '${req.body.fieldDynamicIndex}',
        field_dynamic_index_2 = '${req.body.fieldDynamicIndex2}'
        where sys_id = ${req.body.sysId}
      `
      const result = await db.query(sql, dbInsertOptions)
      console.log(result)
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({errorMessage: ex})
    }
  })

  router.delete('/api/data/:sysId', async function (req, res, next) {
    try {
      let sql = `delete from tbl_parts_attr_config where sys_id = ${req.params.sysId}`
      const result = await db.query(sql, dbInsertOptions)
      console.log(result)
      if (result[1] === 1) {
        res.status(200).send({})
      } else if (result[1] === 0) {
        throw '重覆刪除'
      }
    } catch (ex) {
      console.error(ex)
      res.status(500).send({errorMessage: ex})
    }
  })

  app.use('/partsConfig', router);
}
