var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
const R = require('ramda');

module.exports = (app, db) => {
  router.get('/', async function (req, res, next) {
    const autoRefreshDuration = req.query.autoRefreshDuration > 0 ? req.query.autoRefreshDuration : 60000
    let view = 'kanban'
    let data = {
      isKanban: true,
      layout: 'layout',
      autoRefreshDuration: autoRefreshDuration
    }
    if (req.query.dataType === 'available') view = 'kanbanAvailable'
    if (req.query.dataType === 'performance') view = 'kanbanPerformance'
    if (req.query.dataType === 'quality') {
      let yieldData = await fetchYieldData(req)
      data.yieldData = JSON.stringify(yieldData)
      view = 'kanbanQuality'
    }
    if (req.query.mah_num) data.mah_num = req.query.mah_num
    console.log('return....')
    res.render(view, data);
  });

  router.get('/api/data', function (req, res, next) {
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

    db.query(`
        select mah_num,status,pn,
        (select availability from GetOEE_A_fn(mah_num)) as AVA,
        (select Performance from GetOEE_P_fn(mah_num)) as PER,
        (select Quality from GetOEE_Q_fn(mah_num)) as QUA
        from MAFRealtimeView
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let machines = data.map((val, index) => {
          val['OEE'] = val.AVA * val.PER * val.QUA / 1000000
          val['isSelected'] = false
          val.status = val.status.trim()
          let color = R.find(R.propEq('text', val.status.trim()))(statusList)
          val['backgroundColor'] = color ? color.backgroundColor : ''
          return val
        })
        res.send({
          machines,
          statusList
        });
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/api/available/data', function (req, res, next) {
    db.query(`
      select mahnum, mold, pn, status, UpToNow_Interval, Loss_Interval,Availability from GetOEE_A_fn('${req.query.mah_num}')
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/performance/data', function (req, res, next) {
    db.query(`
      select mahnum,mold,pn,status,real_cytime,output_count,loss_count,Performance from GetOEE_P_fn('${req.query.mah_num}')
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/quality/data', function (req, res, next) {
    db.query(`
      select mahnum,mold,pn,status,user_hole,user_name,Normal_count,AbNormal_count,Quality from GetOEE_Q_fn('${req.query.mah_num}')
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/quality/errorData', function (req, res, next) {
    db.query(`
      select Err_name, Err_count,Err_pert from GetOEE_Q_ErrorList_fn('${req.query.mah_num}') where Err_name!='正常'
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let label = []
        let count = []
        let percentage = []
        let maxPercentage = 0
        data.forEach(obj => {
          label.push(obj.Err_name.trim())
          count.push(obj.Err_count)
          percentage.push(obj.Err_pert)
          if (obj.Err_per > maxPercentage) maxPercentage = obj.Err_per
        });
        maxPercentage += 10
        res.send({ label, count, percentage, maxPercentage });
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/available/statusData', function (req, res, next) {
    db.query(`
      select status_oee, status_interval from GetOEE_A_Time('S1',CAST(dateadd(HOUR,-8,getdate()) AS DateTime) + CAST('08:00:00' AS DateTIME))
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let label = []
        let interval = []
        data.forEach(obj => {
          label.push(obj.status_oee)
          interval.push(obj.status_interval)
        });
        res.send({ label, interval });
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/available/ctData', function (req, res, next) {
    db.query(`
      select dataHour, CT_Target, CT_Real,dataDate from GetOEE_A_CT('${req.query.mah_num}')
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let label = []
        let targetData = []
        let realData = []
        data.forEach(obj => {
          label.push(obj.dataHour)
          realData.push(obj.CT_Real)
          targetData.push(obj.CT_Target)
        });
        res.send({ label, targetData, realData });
      }).catch(err => {
        console.error(err);
      });
  })

  async function fetchYieldData(req) {
    const data = await db.query(`
      select dataHour, Yield_Target, Yield_Real,dataDate from GetOEE_Q_Yield('${req.query.mah_num}')
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      })

    let label = []
    let targetData = []
    let realData = []
    data.forEach(obj => {
      label.push(obj.dataHour)
      realData.push(obj.Yield_Real)
      targetData.push(obj.Yield_Target)
    });
    return { label, targetData, realData }
  }

  router.get('/api/quality/yieldData', function (req, res, next) {
    db.query(`
      select dataHour, Yield_Target, Yield_Real,dataDate from GetOEE_Q_Yield('${req.query.mah_num}')
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let label = []
        let targetData = []
        let realData = []
        data.forEach(obj => {
          label.push(obj.dataHour)
          realData.push(obj.Yield_Real)
          targetData.push(obj.Yield_Target)
        });
        res.send({ label, targetData, realData });
      }).catch(err => {
        console.error(err);
      });
  })

  router.get('/api/performance/ctData', function (req, res, next) {
    db.query(`
      select dataHour, Output_Target, Output_Real, Output_Target_Acc, Output_Real_Acc, dataDate from GetOEE_P_CT('${req.query.mah_num}')
  `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        let label = []
        let targetData = []
        let targetAccData = []
        let realData = []
        let realAccData = []
        data.forEach(obj => {
          label.push(obj.dataHour)
          realData.push(obj.Output_Real)
          targetData.push(obj.Output_Target)
          realAccData.push(obj.Output_Real_Acc)
          targetAccData.push(obj.Output_Target_Acc)
        });
        res.send({ label, targetData, realData, targetAccData, realAccData });
      }).catch(err => {
        console.error(err);
      });
  })
  app.use('/kanban', router);
}
