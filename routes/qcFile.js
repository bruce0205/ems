const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const multer = require('multer')
const moment = require('moment');
const upload = multer({
    dest: 'uploads/'
})

module.exports = (app, db) => {
    router.get('/', function (req, res, next) {
        res.render('qcFile', {
            isQcFile: true,
            username: req.session.username,
            layout: 'layout',
        });
    });

    router.get('/api/mainFile/data', function (req, res, next) {
        let sql = `
            select
                sys_id, owner, machineNo,
                convert(varchar, startDateTime, 20) startDateTime,
                convert(varchar, endDateTime, 20) endDateTime,
                qc_type, qc_result, remark
            from tbl_QC
            where 1=1
        `
        console.log(req.query)
        if (req.query.startDateTime) sql += ` and startDateTime >= Cast('${req.query.startDateTime} 00:00:00' as datetime)`
		if (req.query.endDatetime) sql += ` and endDatetime <= Cast('${req.query.endDatetime} 23:59:59' as datetime)`
        if (req.query.machineNo) sql += ` and machineNO like '%${req.query.machineNo}%'`
        if (req.query.qcType) sql += ` and qc_type like '%${req.query.qcType}%'`
        sql += ` order by sys_id`

        db.query(sql, {
            raw: false, // Set this to true if you don't have a model definition for your query.
            type: Sequelize.QueryTypes.SELECT
        }).then(data => {
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

    router.put('/api/mainFile/data', function (req, res, next) {
		console.log(req.body)

		db.query(`
			update tbl_QC set
			qc_result = $qc_result,
			remark = $remark
			where sys_id = $sys_id
		  `, {
				bind: {
					sys_id: req.body.sys_id,
					qc_result: req.body.qc_result,
					remark: req.body.remark
				}
			}).then(data => {
				res.send({ status: 200 });
			}).catch(err => {
				console.error(err);
				res.send({ status: 500 });
			});
	});

    router.get('/api/attachment/data/:headerId', function (req, res, next) {
        let sql = `
            select
                ROW_NUMBER() OVER(ORDER BY fileType DESC, UploadDatetime ASC) AS no,
                sys_id, header_id, fileType, oriFileName, sysFileName, enable, parseResult,
                convert(varchar, UploadDatetime, 20) UploadDatetime
            from tbl_qc_file
            where enable = 1
            and header_id = ${req.params.headerId}
        `

        db.query(sql, {
            raw: false, // Set this to true if you don't have a model definition for your query.
            type: Sequelize.QueryTypes.SELECT
        }).then(data => {
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

    router.post('/api/upload/mainFile', upload.single('mainFile'), async function (req, res, next) {
        try {
            // step1: disable origin file
            let updateSql = `
                update tbl_QC_File set enable = 0
                where header_id = ${req.body.sysId} and FileType = '${req.file.fieldname}'
            `
            await db.query(updateSql)

            // step2: insert table
            let insertSql = `
                insert into tbl_qc_file
                (header_id, FileType, OriFileName, SysFileName, Enable, UploadDatetime) values
                (${req.body.sysId}, '${req.file.fieldname}', '${req.file.originalname}', '${req.file.filename}', 1, convert(datetime, '${moment().format("YYYY-MM-DD HH:mm:ss")}',20))
            `
            console.log(await db.query(insertSql))

            // TODO: parse file
            res.send({ status: 200 });
        } catch (err) {
            console.error(err)
            res.send({ status: 500 });
        }
    });

    router.post('/api/upload/attachment', upload.single('attachment'), async function async(req, res, next) {
        try {
            console.log(req.file)
            // step1: insert table
            let insertSql = `
                insert into tbl_qc_file
                (header_id, FileType, OriFileName, SysFileName, Enable, UploadDatetime) values
                (${req.body.sysId}, '${req.file.fieldname}', '${req.file.originalname}', '${req.file.filename}', 1, convert(datetime, '${moment().format("YYYY-MM-DD HH:mm:ss")}',20))
            `
            console.log(await db.query(insertSql))

            res.send({ status: 200 });
        } catch (err) {
            console.error(err)
            res.send({ status: 500 });
        }
    });

    router.get('/api/download/:sysFileName', async function (req, res, next) {
        // step1: search table
        let sql = `
            select oriFileName from tbl_QC_file where sysFileName = '${req.params.sysFileName}' and enable = 1
        `
        const response = await db.query(sql, {
            raw: false, // Set this to true if you don't have a model definition for your query.
            type: Sequelize.QueryTypes.SELECT
        })
        if (response.length === 1) {
            console.log(response[0].oriFileName)
            res.download(`uploads/${req.params.sysFileName}`, response[0].oriFileName);
        }
    })

    router.delete('/api/file/:sysFileName', async function (req, res, next) {
        try {
            console.log(req.file)
            // step1: update table
            let updateSql = `
                update tbl_qc_file set enable = 0 where sysFileName = '${req.params.sysFileName}'
            `
            const response = await db.query(updateSql, {
                raw: false, // Set this to true if you don't have a model definition for your query.
                type: Sequelize.QueryTypes.SELECT
            })
            console.log(response)

            res.send({ status: 200 });
        } catch (err) {
            console.error(err)
            res.send({ status: 500 });
        }
    })

    app.use('/qcFile', router);
}
