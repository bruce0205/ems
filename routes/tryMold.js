var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

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
