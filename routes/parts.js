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
      SELECT
        ROW_NUMBER() OVER( ORDER BY sys_id asc) AS row_no,
        sys_id,
        part_no,
        part_type,
        status,
        (select distinct Field_Key from tbl_PARTS_ATTR_CONFIG b where Part_Type = 'mold' and Field_Type = 'Status' and b.field_value = a.status) status_display,
        convert(varchar, create_datetime, 20) create_datetime,
        create_user,
        description
      FROM tbl_PARTS a
      Where 1=1
    `

    if (req.query.sysId) sql += ` and sys_id = ${req.query.sysId}`
    if (req.query.vendor) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='Vendor' and field_value='${req.query.vendor}')`
    if (req.query.type) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='Type' and field_value='${req.query.type}')`
    if (req.query.position) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='Position' and field_value='${req.query.position}')`
    if (req.query.partName) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='PartName' and field_value='${req.query.partName}')`
    if (req.query.product) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='Product' and field_value='${req.query.product}')`
    if (req.query.version) sql += ` and sys_id in (select part_id from tbl_PARTS_ATTR where field_type='Version' and field_value='${req.query.version}')`
    if (req.query.status) sql += ` and status='${req.query.status}'`

    console.log(req.query)
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

  router.get('/parameters', async function (req, res, next) {
    let partType = 'mold'
    let fieldType = req.query.fieldType

	let sql = ``
	
	if(fieldType === 'StatusALL')
	{
		sql = `select distinct field_key, field_value from tbl_PARTS_ATTR_CONFIG where Part_Type = '${partType}' and Field_Type = 'Status' `
		
		
	}
	else if (fieldType === 'Status')
	{
		sql = `select distinct field_key, field_value from tbl_PARTS_ATTR_CONFIG where Part_Type = '${partType}' and Field_Type = 'Status' `
		sql += ` and Field_Dynamic_Index_2 = (select AuthGroup from tbl_User where Account = '${req.session.account}')`
		if (req.query.SysID)
		{
				
				let oldStatus
      
				// step1: query old status
				let querySql = `select sys_id, status, part_no from tbl_parts where sys_id='${req.query.SysID}'`
				const queryResult = await db.query(querySql, dbOptions)
				if (queryResult.length === 1) {
					oldStatus = queryResult[0].status
				} else {
				throw `cannot find data from sys_id: ${req.query.SysID}`
				}
				
				sql += ` and Field_Dynamic_Index = '${oldStatus}'`
				
		}
	}
	
	else
	{
		sql = `select field_key, field_value from tbl_PARTS_ATTR_CONFIG where Part_Type = '${partType}' and Field_Type = '${fieldType}' `
		if (req.query.fieldDynamicIndex) {
			sql += ` and Field_Dynamic_Index = '${req.query.fieldDynamicIndex}' `
			}
	}
    
    
    const result = await db.query(sql, dbOptions)

    res.send({result});
  })

  router.put('/api/status', async (req, res, next) => {
    let status = 500
    let rowNo = req.body.row
    try {
      let oldStatus
      let partNo
      // step1: query old status
      let querySql = `select sys_id, status, part_no from tbl_parts where sys_id='${req.body.sysId}'`
      const queryResult = await db.query(querySql, dbOptions)
      if (queryResult.length === 1) {
        oldStatus = queryResult[0].status
        partNo = queryResult[0].part_no
      } else {
        throw `cannot find data from sys_id: ${req.body.sysId}`
      }

      // step2: update status
      let updateSql = `update tbl_parts set status ='${req.body.newStatus}' where sys_id = ${req.body.sysId}`
      const updateResult = await db.query(updateSql, dbInsertOptions)

      // step3: insert history table
      let insertSql = `insert into tbl_parts_status_history values ('${partNo}', 'mold', '${oldStatus}', getdate(), '${req.session.account}')`
      const insertResult = await db.query(insertSql, dbInsertOptions)
      if (insertResult.length === 2 && insertResult[1] === 1) {
        status = 200
      } else {
        throw 'insert tbl_parts_status_history fail'
      }
    } catch (err) {
      console.error(err)
    }
    res.send({status})
  })

  router.post('/', async (req, res, next) => {
    console.log(req.body)
    let seqNo
    let partNo
    let partNoSysId

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

      let insertPartNoSql = `insert into tbl_PARTS values ('${partNo}', 'mold', 'Initial', getdate(), '${req.session.account}', '${req.body.description}')`
      const partNoResult = await db.query(insertPartNoSql, dbInsertOptions)
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
        const partsAttrResult = await db.query(insertPartsAttrSql, dbInsertOptions)
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
