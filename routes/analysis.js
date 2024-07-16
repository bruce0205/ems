const express = require('express');
var Sequelize = require('sequelize');
const router = express.Router();

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
      db.query(`
        select distinct [料號] from GetMFGHistory('${req.query.fromDate}','${req.query.endDate}') where [機台] = '${req.query.machineNo}'
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
    })

    router.get('/api/moldNo', function (req, res, next) {
      db.query(`
        select distinct [模號] from GetMFGHistory('${req.query.fromDate}','${req.query.endDate}') where [機台] = '${req.query.machineNo}' and [料號] = '${req.query.partNo}'
      `, {
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

    app.use('/analysis', router);
}
