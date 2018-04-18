var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var testingData = require('../data/manufacture.json');
var xl = require('excel4node');

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    res.render('manufacture', {
      isManufacture: true,
      layout: 'layout',
      fromDate: req.query.fromDate,
      endDate: req.query.endDate
    });
  });

  router.get('/ajax', function (req, res, next) {
    db.query(`
      GetMFGHistory_sp
      @err_sdate = '${req.query.fromDate}',
      @err_edate = '${req.query.endDate}',
      @Target_Alarm = 1
    `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
  });

  router.get('/excel', function (req, res) {
    var wb = new xl.Workbook();

    // Add Worksheets to the workbook
    var ws = wb.addWorksheet('Sheet 1');
    var ws2 = wb.addWorksheet('Sheet 2');

    // Create a reusable style
    var style = wb.createStyle({
      font: {
        color: '#FF0800',
        size: 12
      },
      numberFormat: '$#,##0.00; ($#,##0.00); -'
    });

    // Set value of cell A1 to 100 as a number type styled with paramaters of style
    ws.cell(1, 1).number(100).style(style);

    // Set value of cell B1 to 300 as a number type styled with paramaters of style
    ws.cell(1, 2).number(200).style(style);

    // Set value of cell C1 to a formula styled with paramaters of style
    ws.cell(1, 3).formula('A1 + B1').style(style);

    // Set value of cell A2 to 'string' styled with paramaters of style
    ws.cell(2, 1).string('string').style(style);

    // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
    ws.cell(3, 1).bool(true).style(style).style({ font: { size: 14 } });

    wb.write('ExcelFile.xlsx', res);
    // var result = nodeExcel.execute(conf);
    // res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    // res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    // res.end(result, 'binary');
  });

  app.use('/manufacture', router);
}
