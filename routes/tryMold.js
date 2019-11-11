var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
var xl = require('excel4node');
const R = require('ramda');

module.exports = (app, db) => {
	router.get('/', function (req, res, next) {
		res.render('tryMold', {
			isTryMold: true,
			username: req.session.username,
			layout: 'layout',
		});
	});

	router.get('/api/data', function (req, res, next) {
		let sql = `
			select sys_id, line_no,
			convert(varchar, startDateTime, 20) startDateTime, convert(varchar, endDateTime, 20) endDateTime,
			datediff(minute,StartDatetime,endDateTime) as varDatetime,
			pn, mold, plasticType, startCount, endCount,
			maf_hev, onOffUsage, tryUsage, owner, reason, remark
			from tbl_TryMold
			where EndDatetime is not null
		`
		if (req.query.pn) sql += ` and pn like '%${req.query.pn}%'`
		if (req.query.lineNo) sql += ` and line_no like '%${req.query.lineNo}%'`
		if (req.query.mold) sql += ` and mold like '%${req.query.mold}%'`
		if (req.query.owner) sql += ` and owner like '%${req.query.owner}%'`
		if (req.query.startDateTime) sql += ` and startDateTime >= Cast('${req.query.startDateTime} 00:00:00' as datetime)`
		if (req.query.endDatetime) sql += ` and endDatetime <= Cast('${req.query.endDatetime} 23:59:59' as datetime)`

		db.query(sql, {
				raw: false, // Set this to true if you don't have a model definition for your query.
				type: Sequelize.QueryTypes.SELECT
			}).then(data => {
				data = data.map((val, index) => {
					return val
				})
				// res.send({data});
				res.status(200).json({data})
			}).catch(err => {
				console.error(err);
			});
	});

	router.get('/excel', function (req, res, next) {
		
		let sql = `
			select sys_id, line_no,
			convert(varchar, startDateTime, 20) startDateTime, convert(varchar, endDateTime, 20) endDateTime,
			datediff(minute,StartDatetime,endDateTime) as varDatetime,
			pn, mold, plasticType, startCount, endCount,
			maf_hev, onOffUsage, tryUsage, owner, reason, remark
			from tbl_TryMold
			where EndDatetime is not null
		`
		if (req.query.pn) sql += ` and pn like '%${req.query.pn}%'`
		if (req.query.lineNo) sql += ` and line_no like '%${req.query.lineNo}%'`
		if (req.query.mold) sql += ` and mold like '%${req.query.mold}%'`
		if (req.query.owner) sql += ` and owner like '%${req.query.owner}%'`
		if (req.query.startDateTime) sql += ` and startDateTime >= Cast('${req.query.startDateTime} 00:00:00' as datetime)`
		if (req.query.endDatetime) sql += ` and endDatetime <= Cast('${req.query.endDatetime} 23:59:59' as datetime)`
		
    db.query(sql, {
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
          if (index === 0) adjustValue = '單號';
          if (index === 1) adjustValue = '線別';
          if (index === 2) adjustValue = '試模起日';
          if (index === 3) adjustValue = '試模迄日';
          if (index === 4) adjustValue = '試射耗時';
          if (index === 5) adjustValue = '機種';
		  if (index === 6) adjustValue = '模號';
		  if (index === 7) adjustValue = '塑料型號';
		  if (index === 8) adjustValue = '射出開始計數';
		  if (index === 9) adjustValue = '射出結束計數';
		  if (index === 10) adjustValue = '一模重量';
		  if (index === 11) adjustValue = '開關機用量 (KG)';
		  if (index === 12) adjustValue = '試射用量 (KG)';
		  if (index === 13) adjustValue = '試射擔當';
		  if (index === 14) adjustValue = '試模原因';
		  if (index === 15) adjustValue = '備註';
		  

          ws.cell(1, index + 1).string(adjustValue).style(headerStyle);
        })

        const numberColumnIndex = [4,8,9,10,11,12];
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
	
	router.put('/api/data', function (req, res, next) {
		console.log(req.body)

		db.query(`
			update tbl_TryMold set
			plasticType = $plasticType,
			startCount = $startCount,
			endCount = $endCount,
			maf_hev = $maf_hev,
			onOffUsage = $onOffUsage,
			tryUsage = $tryUsage,
			reason = $reason,
			remark = $remark
			where sys_id = $sysId
		  `, {
				bind: {
					sysId: req.body.sys_id,
					plasticType: req.body.plasticType,
					startCount: req.body.startCount,
					endCount: req.body.endCount,
					maf_hev: req.body.maf_hev,
					onOffUsage: req.body.onOffUsage,
					tryUsage: req.body.tryUsage,
					reason: req.body.reason,
					remark: req.body.remark
				}
			}).then(data => {
				res.send({ status: 200 });
			}).catch(err => {
				console.error(err);
				res.send({ status: 500 });
			});
	});

	app.use('/tryMold', router);
}
