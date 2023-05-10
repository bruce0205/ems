var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');
var xl = require('excel4node');
const R = require('ramda');
const moment = require('moment');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      isManufacture: true,
      username: req.session.username,
      isAdmin: req.session.isAdmin,
      layout: 'layout',
      fromDate: req.query.fromDate,
      endDate: req.query.endDate
    });
  });

  router.get('/api/data', function (req, res, next) {
    db.query(`
      GetMFGHistory_sp
      @err_sdate = '${req.query.err_sdate}',
      @err_edate = '${req.query.err_edate}',
      @Target_Alarm = 0
    `, {
      raw: false, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    }).then(data => {
      res.send({ data });
    }).catch(err => {
      console.error(err);
    });
  });

  router.get('/excel', function (req, res, next) {
    db.query(`
      GetMFGHistory_sp
      @err_sdate = '${req.query.fromDate}',
      @err_edate = '${req.query.endDate}',
      @Target_Alarm = 0
    `, {
      raw: false, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    }).then(data => {
      let wb = new xl.Workbook();
      let ws = wb.addWorksheet('Sheet 1');
      let headerStyle = wb.createStyle({
        font: {
          color: '#FF0800',
          size: 12
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -'
      });
      let cellStyle = wb.createStyle({
        font: {
          color: '#646464',
          size: 12
        },
      });

      let rowCount = data.length
      let titles = R.keys(data[0])

      titles.forEach(function (value, index) {
        let adjustValue = value
        if (index === 9) adjustValue = '料塊';
        if (index === 16) adjustValue = '標準稼動(秒)';
        if (index === 19) adjustValue = '實際稼動(秒)';
        if (index === 20) adjustValue = '嫁動差異(%)';
        if (index === 21) adjustValue = '嫁動率(%)';
        if (index === 22) adjustValue = '目標良率(%)';
        if (index === 23) adjustValue = '生產良率(%)';

        ws.cell(1, index + 1).string(adjustValue).style(headerStyle);
      })

      const numberColumnIndex = [11, 12, 13, 14, 15, 13, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43];
      data.forEach(function (row, i) {
        let cells = R.values(row)
        cells.forEach(function (cell, j) {
          if (cell === 0 || cell) {
            if (R.contains(j, numberColumnIndex)) {
              ws.cell(i + 2, j + 1).number(cell).style(cellStyle);
            } else {
              ws.cell(i + 2, j + 1).string(cell.toString()).style(cellStyle);
            }
          } else {
            ws.cell(i + 2, j + 1).string('').style(cellStyle);
          }
        })
      })

      wb.write('ExcelFile.xlsx', res);
    }).catch(err => {
      console.error(err);
    });
  });

  router.put('/api/update/hole', async function (req, res, next) {
    const now = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log(req.body)
    console.log('machineNo', req.body.machineNo)
    console.log('hole', req.body.hole)
    console.log('shift', req.body.shift)
    console.log('account', req.body.account)
    console.log('now', now)

    // 1) get table_Id
    const tableIdResp = await db.query(`
      select top 1 id, user_online from CLS_USER
      where user_id = '${req.body.machineNo}'
      and user_hole = '${req.body.hole}'
      and user_name = '${req.body.account}'
      order by id desc;
    `, {
      raw: false, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    })
    console.log(tableIdResp.length)
    if (tableIdResp.length != 1) {
      res.send({ status: 500, errorMsg: 'table_id is not existed' });
      return
    }
    console.log('table_id', tableIdResp[0]['id'])

    // 2) get current machine count
    const machineCntResp = await db.query(`
      select mah_cou from MAFRealtimeView where mah_num = '${req.body.machineNo}'
    `, {
      raw: false, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    })
    if (machineCntResp.length != 1) {
      res.send({ status: 500, errorMsg: 'machine count is not existed' });
      return
    }
    console.log('machine count', machineCntResp[0]['mah_cou'])

    // 3) call store procedure
    const resp = await db.query(`
      updateHole_sp
      @Table_ID = '${tableIdResp[0]['id']}',
      @DatetimeNow = '${now}',
      @Account = '${req.body.account}',
      @MachineNo = '${req.body.machineNo}',
      @Shift = '${req.body.shift}',
      @Hole = '${req.body.hole}',
      @isOnline='N',
      @MachineCount= ${machineCntResp[0]['mah_cou']}
    `)

    res.send({ status: 200, resp });
  });

  router.put('/counter', function (req, res, next) {
    const scount = !!req.body.scount ? `${req.body.scount}` : 'null'
    const ecount = !!req.body.ecount ? `${req.body.ecount}` : 'null'
    const etime = !!req.body.user_etime ? `'${req.body.user_etime}'` : 'null'
    const itemSegment = !!req.body.item_segment ? `'${req.body.item_segment}'` : 'null'
    const remark = !!req.body.remark ? `'${req.body.remark}'` : 'null'
    db.query(`
      updateCounter_sp
      @user_name = '${req.body.user_name}',
      @user_shift = '${req.body.user_shift}',
      @mah_num = '${req.body.mah_num}',
      @user_sdate = '${req.body.user_sdate}',
      @user_stime = '${req.body.user_stime}',
      @user_etime = ${etime},
      @scount = ${scount},
      @ecount = ${ecount},
      @item_segment = ${itemSegment},
      @remark = ${remark}
    `, {
      raw: false, // Set this to true if you don't have a model definition for your query.
      type: Sequelize.QueryTypes.SELECT
    }).then(data => {
      res.send({ status: 200 });
    }).catch(err => {
      res.send({ status: 500 });
    });
  });

  app.use('/manufacture', router);
}
