var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');
var xl = require('excel4node');
const R = require('ramda');
const moment = require('moment');

const statusList = [
  {
    text: '準備中',
    backgroundColor: '#019623' // green
  },
  {
    text: '檢驗中',
    backgroundColor: '#cd41f4' // purple
  },
  {
    text: '生產中',
    backgroundColor: '#2849ed' // blue
  },
  {
    text: '處理中',
    backgroundColor: '#965301' // brown
  },
  {
    text: '待機中',
    backgroundColor: '#f0ad4e' // orange
  },
  {
    text: '停機中',
    backgroundColor: '#ff1a1a' // red
  },
  {
    text: '其他',
    backgroundColor: '#2f9caf'
  }, {
    text: '試模中',
    backgroundColor: '#9cc631'
  }
]

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('dashboard', {
      isManufacture: true,
      username: req.session.username,
      isAdmin: req.session.isAdmin,
      layout: 'layout',
      fromDate: req.query.fromDate,
      endDate: req.query.endDate
    });
  });

  router.get('/api/data', async function (req, res, next) {
    // const sql = `
    //   select m.mah_num,m.mah_pn,m.mah_mold, mah_sta,s.status_oee as status,m.mah_remark ,a.Availability,p.Performance,q.Quality,pn.maf_tryd
    //   from MAH_STA m
    //   left join MAF_PN pn on pn.maf_pn = m.mah_pn and pn.maf_mold = m.mah_mold
    //   left join CLS_STATUS_MAPPING s on s.status_app = m.mah_result
    //   cross apply GetOEE_A_fn(m.mah_num) a
    //   cross apply GetOEE_P_fn(m.mah_num) p
    //   cross apply GetOEE_Q_fn(m.mah_num) q
    // `
    const sql = `select * from Get_Dashboard_fn()`
    const data = await db.query(sql, {
      raw: true, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    })

    const machines = []
    for (let val of data) {
      if (!!val.status) {
        let color = R.find(R.propEq('text', val.status.trim()))(statusList)
        val['backgroundColor'] = color ? color.backgroundColor : ''
      }
      val['ErrorList'] = await getErrorList(val.mah_num);
      machines.push(val)
    }

    res.send({
      machines,
      statusList
    });

  });

  router.get('/api/data/snapshot', async function (req, res, next) {
    const data = await db.query(`
      select m.sys_id, m.mah_num,m.mah_pn,m.mah_mold, mah_sta,m.mah_result as status,m.remark as mah_remark ,m.Availability,m.Performance,m.Quality,pn.maf_tryd, m.ErrorList, m.Normal_count, m.AbNormal_count
      from tbl_dashboard_snapshot m
      left join MAF_PN pn on pn.maf_pn = m.mah_pn and pn.maf_mold = m.mah_mold
      left join CLS_STATUS_MAPPING s on s.status_app = m.mah_result
      where CAST(Record_DateTime as date) = '${req.query.date}'
      and Record_Class = '${req.query.class}'
      `, {
      raw: true, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    })

    const machines = []
    for (let val of data) {
      if (!!val.status) {
        let color = R.find(R.propEq('text', val.status.trim()))(statusList)
        val['backgroundColor'] = color ? color.backgroundColor : ''
      }
      machines.push(val)
    }

    res.send({
      machines,
      statusList
    });
  })

  router.put('/api/data/remark', async function (req, res, next) {
    try {
      console.log(req.body)
      let sql
      if (!!req.body.sysId) {
        sql = `
          update tbl_dashboard_snapshot set remark = :remark where sys_id = :sysId
        `
        await db.query(sql, {
          type: Sequelize.QueryTypes.SELECT,
          replacements: {
            sysId: req.body.sysId,
            remark: req.body.remark,
          }
        })
      } else {
        sql = `
          update mah_sta set mah_remark = :remark where mah_num = :machine
        `
        await db.query(sql, {
          type: Sequelize.QueryTypes.SELECT,
          replacements: {
            machine: req.body.machine,
            remark: req.body.remark,
          }
        })
      }
      res.status(200).send({})
    } catch (ex) {
      console.error(ex)
      res.status(500).send({ errorMessage: ex })
    }
  })

  async function getErrorList(machine) {
    console.log('machine', machine)
    const list = await db.query(`
        select top(3) ltrim(rtrim(Err_name)) as Err_name,Err_pert
        from GetOEE_Q_ErrorList_Class_fn('${machine}')
        where Err_id not in (12,100)
        and Err_pert > 0
        order by Err_Pert desc
      `, {
      raw: true, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    })
    return list
  }

  app.use('/dashboard', router);
}
