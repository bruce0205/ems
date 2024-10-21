const express = require('express');
var Sequelize = require('sequelize');
const router = express.Router();
var xl = require('excel4node');
const R = require('ramda');

module.exports = (app, db) => {
    router.get('/', function (req, res, next) {
        res.render('analysis', {
          isAnalysis: true,
          username: req.session.username,
          isAdmin: req.session.isAdmin,
          layout: 'layout',
        });
    });

    router.get('/api/machineNo', function (req, res, next) {
      console.log('req.query.fromDate', req.query.fromDate)
      console.log('req.query.endDate', req.query.endDate)
      db.query(`
        select distinct [機台] from GetMFGHistory('${req.query.fromDate}','${req.query.endDate}')
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
    })

    router.get('/api/partNo', function (req, res, next) {
      var sql = `select distinct [料號] from GetMFGHistory('${req.query.fromDate}','${req.query.endDate}')`
      if (req.query.machineNo) sql = sql + ` where [機台] = '${req.query.machineNo}'`

      db.query(sql, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
    })

    router.get('/api/moldNo', function (req, res, next) {
      var sql = `select distinct [模號] from GetMFGHistory('${req.query.fromDate}','${req.query.endDate}') where [料號] = '${req.query.partNo}'`
      if (req.query.machineNo) sql = sql + ` and [機台] = '${req.query.machineNo}'`

      db.query(sql, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
    })

    router.post('/api/data', function (req, res, next) {
      let productSql = ''
      req.body.productInfoList.forEach((productInfo) => {
        productSql += ` insert into @typeSTA values ('${productInfo.manufactureNo}','${productInfo.partNo}','${productInfo.moldNo}') `
      })
      db.query(`
          declare @typeSTA as Type_STA
          ${productSql}
          exec [dbo].[GetMFGReport_sp] '${req.body.fromDate}','${req.body.endDate}','${req.body.timeUnit}', @typeSTA, '${req.body.groupType}'
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    });

    router.post('/api/error', function (req, res, next) {
      console.log('req.body', req.body.productInfoList)

      let productSql = ''
      req.body.productInfoList.forEach((productInfo) => {
        productSql += ` insert into @typeSTA values ('${productInfo.manufactureNo}','${productInfo.partNo}','${productInfo.moldNo}') `
      })
      db.query(`
          declare @typeSTA as Type_STA
          ${productSql}
          exec [dbo].[GetMFGReport_ErrorList_sp] '${req.body.fromDate}','${req.body.endDate}','${req.body.timeUnit}', @typeSTA
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    })

    router.get('/api/calculate/day', function (req, res, next) {
      db.query(`
DECLARE @StartDate DATE = '${req.query.fromDate}';
DECLARE @EndDate DATE = '${req.query.endDate}';

WITH DateRange AS (
    SELECT @StartDate AS Date
    UNION ALL
    SELECT DATEADD(DAY, 1, Date)
    FROM DateRange
    WHERE DATEADD(DAY, 1, Date) <= @EndDate
)
SELECT CONVERT(char(10), Date,126) as date
FROM DateRange
OPTION (MAXRECURSION 0);
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    });

    router.get('/api/calculate/week', function (req, res, next) {
      db.query(`
DECLARE @StartDate DATE = '${req.query.fromDate}';
DECLARE @EndDate DATE = '${req.query.endDate}';

WITH DateRange AS (
    SELECT @StartDate AS Date
    UNION ALL
    SELECT DATEADD(DAY, 1, Date)
    FROM DateRange
    WHERE DATEADD(DAY, 1, Date) <= @EndDate
),
Weeks AS (
    SELECT Date,
           DATEPART(WEEK, Date) AS WeekNumber,
           DATEPART(YEAR, Date) AS YearNumber
    FROM DateRange
)

SELECT DISTINCT YearNumber, WeekNumber
FROM Weeks
ORDER BY YearNumber, WeekNumber
OPTION (MAXRECURSION 0)
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    });

    router.get('/api/calculate/month', function (req, res, next) {
      db.query(`
DECLARE @StartDate DATE = '${req.query.fromDate}';
DECLARE @EndDate DATE = '${req.query.endDate}';

WITH DateRange AS (
    SELECT @StartDate AS Date
    UNION ALL
    SELECT DATEADD(DAY, 1, Date)
    FROM DateRange
    WHERE DATEADD(DAY, 1, Date) <= @EndDate
),
Months AS (
    SELECT Date,
           DATEPART(MONTH, Date) AS MonthNumber,
           DATEPART(YEAR, Date) AS YearNumber
    FROM DateRange
)
SELECT DISTINCT YearNumber, MonthNumber
FROM Months
ORDER BY YearNumber, MonthNumber
OPTION (MAXRECURSION 0);
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        }).then(data => {
          res.send({ data });
        }).catch(err => {
          console.error(err);
        });
    });

    router.post('/excel', function (req, res, next) {
      console.log('isShowAbnormal', req.body.isShowAbnormal)
      const executions = []
      let productSql = ''
      req.body.productInfoList.forEach((productInfo) => {
        productSql += ` insert into @typeSTA values ('${productInfo.manufactureNo}','${productInfo.partNo}','${productInfo.moldNo}') `
      })

      const execOne = db.query(`
        declare @typeSTA as Type_STA
        ${productSql}
        exec [dbo].[GetMFGReport_sp] '${req.body.fromDate}','${req.body.endDate}','${req.body.timeUnit}', @typeSTA, '${req.body.groupType}'
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      })
      executions.push(execOne)

      if (req.body.isShowAbnormal) {
        const execTwo = db.query(`
          declare @typeSTA as Type_STA
          ${productSql}
          exec [dbo].[GetMFGReport_ErrorList_sp] '${req.body.fromDate}','${req.body.endDate}','${req.body.timeUnit}', @typeSTA
        `, {
          raw: false, // Set this to true if you don't have a model definition for your query.
          type: Sequelize.QueryTypes.SELECT
        })
        executions.push(execTwo)
      }

      Promise.all(executions)
      .then((results) => {
        const wb = new xl.Workbook();
        const headerStyle = wb.createStyle({
          font: {
            color: '#FF0800',
            size: 12
          },
          numberFormat: '$#,##0.00; ($#,##0.00); -'
        });
        const cellStyle = wb.createStyle({
          font: {
            color: '#646464',
            size: 12
          },
          numberFormat: '#,##0;',
          alignment: {
            wrapText: true,
          },
        });

        // 1) add "data" sheet
        let ws = wb.addWorksheet('data');
        let titles = R.keys(results[0][0])

        titles.forEach(function (value, index) {
          // 起始點：index == 0
          let adjustValue = value
          if (index === 0) adjustValue = 'series';
          if (index === 1) adjustValue = '日期';
          if (index === 2) adjustValue = '機台';
          if (index === 3) adjustValue = '料號';
          if (index === 4) adjustValue = '班別';
          if (index === 5) adjustValue = '員工帳號';
          if (index === 6) adjustValue = '員工姓名';
          if (index === 7) adjustValue = '良品數量(ea)';
          if (index === 8) adjustValue = '稼動率(%)';
          if (index === 9) adjustValue = '良率(%)';
          if (index === 10) adjustValue = '實際稼動秒數(sec)';

          ws.cell(1, index + 1).string(adjustValue).style(headerStyle);
        })

        const numberColumnIndex = [
          7, // Normal_count
          8, // rateCT
          9, // Quality
          10, // ttlCT
        ];
        results[0].forEach(function (row, i) {
          let cells = R.values(row)
          cells.forEach(function (cell, j) {
            if (cell === 0 || cell) {
              if (R.contains(j, numberColumnIndex)) {
                ws.cell(i + 2, j + 1).number(cell).style(cellStyle);
              } else {
                ws.cell(i + 2, j + 1).string(cell.toString().replace(/\r?\n/g, "\r\n")).style(cellStyle);
              }
            } else {
              ws.cell(i + 2, j + 1).string('').style(cellStyle);
            }
          })
        })

        // 2) add "error" sheet
        if (req.body.isShowAbnormal) {
          let errorWs = wb.addWorksheet('error');
          let titles = R.keys(results[1][0])

          titles.forEach(function (value, index) {
            // 起始點：index == 0
            let adjustValue = value
            if (index === 0) adjustValue = '日期';
            if (index === 1) adjustValue = '不良原因id';
            if (index === 2) adjustValue = '不良原因名稱';
            if (index === 3) adjustValue = '不良數(ea)';
            if (index === 4) adjustValue = '不良百分比(%)';

            errorWs.cell(1, index + 1).string(adjustValue).style(headerStyle);
          })

          const numberColumnIndex = [
            3, // Normal_count
            4, // rateCT
          ];
          results[1].forEach(function (row, i) {
            let cells = R.values(row)
            cells.forEach(function (cell, j) {
              if (cell === 0 || cell) {
                if (R.contains(j, numberColumnIndex)) {
                  errorWs.cell(i + 2, j + 1).number(cell).style(cellStyle);
                } else {
                  errorWs.cell(i + 2, j + 1).string(cell.toString().replace(/\r?\n/g, "\r\n")).style(cellStyle);
                }
              } else {
                errorWs.cell(i + 2, j + 1).string('').style(cellStyle);
              }
            })
          })
        }

        wb.write('ExcelFile.xlsx', res);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    });

    app.use('/analysis', router);
}
