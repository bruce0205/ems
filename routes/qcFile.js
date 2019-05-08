const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const multer  = require('multer')
const moment = require('moment');
const upload = multer({
    dest: 'uploads/'
})

module.exports = (app, db) => {
	router.get('/', function (req, res, next) {
		res.render('qcFile', {
			isQcFile: true,
			layout: 'layout',
		});
    });

	router.get('/api/mainFile/data', function (req, res, next) {
        let sql = `
            select
                sys_id, owner, machineNo,
                convert(varchar, startDateTime, 20) startDateTime,
                convert(varchar, endDateTime, 20) endDateTime
            from tbl_QC
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

    router.get('/api/attachment/data', function (req, res, next) {
        let sql = `
            select
                ROW_NUMBER() OVER(ORDER BY fileType DESC, UploadDatetime ASC) AS no,
                sys_id, header_id, fileType, oriFileName, sysFileName, enable, parseResult,
                convert(varchar, UploadDatetime, 20) UploadDatetime
            from tbl_qc_file
            where enable = 1
            and header_id = 3
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

    router.post('/api/upload/attachment', upload.single('attachment'), async function async (req, res, next) {
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
        if (response.length === 1 ) {
            console.log(response[0].oriFileName)
            res.download(`uploads/${req.params.sysFileName}`, response[0].oriFileName);
        }
    })

	app.use('/qcFile', router);
}
