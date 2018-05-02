var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');
var xl = require('excel4node');
const R = require('ramda');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      isManufacture: true,
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
          ws.cell(1, index + 1).string(value).style(headerStyle);
        })

        data.forEach(function (row, i) {
          let cells = R.values(row)
          cells.forEach(function (cell, j) {
            if (cell) {
              ws.cell(i + 2, j + 1).string(cell.toString()).style(cellStyle);
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

  router.put('/counter', function (req, res, next) {
    db.query(`
      updateCounter_sp
      @user_name = '${req.body.user_name}',
      @user_shift = '${req.body.user_shift}',
      @mah_num = '${req.body.mah_num}',
      @user_sdate = '${req.body.user_sdate}',
      @user_stime = '${req.body.user_stime}',
      @user_etime = '${req.body.user_etime}',
      @scount = '${req.body.scount}',
      @ecount = '${req.body.ecount}'
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
