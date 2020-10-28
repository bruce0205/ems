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
  /* GET users listing. */
  router.get('/', function (req, res, next) {
    res.render('usersSearch', {
      isUsers: true,
      username: req.session.username,
      authGroup: req.session.group,
      layout: 'layout'
    });
  })

  router.get('/api/data', function (req, res, next) {
    let sql = `
      SELECT
        ROW_NUMBER() OVER( ORDER BY sys_id asc) AS row_no,
        sys_id,
        account,
        name,
        password,
        email,
        mailalarmenable,
        authgroup
      FROM tbl_user a
      Where 1=1
    `

    if (req.query.account) sql += ` and account like '%${req.query.account}%'`
    if (req.query.name) sql += ` and name like '%${req.query.name}%'`

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
      select sys_id, account, name, password, email, mailalarmenable, authgroup from tbl_user
      where 1=1 and sys_id = ${req.params.sysId}
    `
    const result = await db.query(sql, dbOptions)
    if (result.length === 1) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({ message: 'resource not found' })
    }
  })

  router.get('/api/duplicate/account/:account', async function (req, res, next) {
    console.log('sysId', req.params.sysId)
    let sql = `
      select sys_id, account, name, password, email, mailalarmenable, authgroup from tbl_user
      where 1=1 and account = '${req.params.account}'
    `
    const result = await db.query(sql, dbOptions)
    if (result.length > 0) {
      res.status(200).send(result[0])
    } else {
      res.status(400).send({ message: 'resource not found' })
    }
  })

  router.post('/api/data', async function (req, res, next) {
    try {
      console.log(req.body)
      let insertSql = `insert into tbl_user values ('${req.body.account}', '${req.body.name}', '${req.body.password}', '${req.body.email}', '${req.body.mailAlarmEnable}', '${req.body.authGroup}')`
      const insertResult = await db.query(insertSql, dbInsertOptions)
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.put('/api/data', async function (req, res, next) {
    try {
      console.log(req.body)
      let sql = `update tbl_user set
        account = '${req.body.account}',
        name = '${req.body.name}',
        email = '${req.body.email}',
        mailalarmenable = '${req.body.mailAlarmEnable}',
        authgroup = '${req.body.authGroup}'
        where sys_id = ${req.body.sysId}
      `
      const result = await db.query(sql, dbInsertOptions)
      console.log(result)
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.put('/api/resetPassword', async function (req, res, next) {
    try {
      console.log(req.body)
      let sql = `update tbl_user set
        password = '${req.body.password}'
        where sys_id = ${req.body.sysId}
      `
      const result = await db.query(sql, dbInsertOptions)
      console.log(result)
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  router.delete('/api/data/:sysId', async function (req, res, next) {
    try {
      let sql = `delete from tbl_user where sys_id = ${req.params.sysId}`
      const result = await db.query(sql, dbInsertOptions)
      console.log(result)
      if (result[1] === 1) {
        res.status(200).send({})
      } else if (result[1] === 0) {
        throw '重覆刪除'
      }
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  app.use('/users', router);
}
