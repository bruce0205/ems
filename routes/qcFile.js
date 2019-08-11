const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const multer = require('multer')
const moment = require('moment');
const appRoot = require('app-root-path')
const XLSX = require('xlsx')
const path = require('path')
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
        let parseFlag = 1
        let errorMsg
        let fileSysId
        try {
            // step1: disable origin file
            let updateSql = `
                update tbl_QC_File set enable = 0
                where header_id = ${req.body.sysId} and FileType = '${req.file.fieldname}'
            `
            await db.query(updateSql)

            let workbook = XLSX.readFile(path.join(appRoot.toString(), req.file.path))
            let worksheet = workbook.Sheets[workbook.SheetNames[1]]     
            if (req.file.mimetype.indexOf('excel') < 0) {
                // step2-1: parse file
                errorMsg = '[parse] wrong format'
                parseFlag = 0
            } else if (!worksheet) {
                // step2-2: check sheet
                errorMsg = '[parse] wrong sheet'
                parseFlag = 0
            }
 
            // step2-3: insert into tbl_qc_file
            let insertSql = `
                insert into tbl_qc_file
                (header_id, FileType, OriFileName, SysFileName, Enable, ParseResult, UploadDatetime) values
                (${req.body.sysId}, '${req.file.fieldname}', '${req.file.originalname}', '${req.file.filename}', 1, ${parseFlag}, convert(datetime, '${moment().format("YYYY-MM-DD HH:mm:ss")}',20))
            `
            console.log(await db.query(insertSql,{
                raw: true,
                type: Sequelize.QueryTypes.INSERT
            }))

            // step2-4: get inserted file_id
            let querySql = `
                select sys_id from tbl_QC_file where sysFileName = '${req.file.filename}' and enable = 1
            `
            let queryResponse = await db.query(querySql,{
                raw: true,
                type: Sequelize.QueryTypes.SELECT
            })
            fileSysId = queryResponse[0].sys_id
            console.log('fileSysId: ' +　fileSysId)

            // step3: insert into tbl_qc_detail
            let valueColumns = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K']
            let rowPosition = '5'

            while(parseFlag > 0) {
                console.log('rowPosition: ' + rowPosition)

                let addressOfCell = `A${rowPosition}`
                let values = {}
                if (worksheet[addressOfCell]){
                    for (column of valueColumns) {
                        let cell = worksheet[`${column}${rowPosition}`]
                        let cellValue = (cell ? cell.w : undefined);
                        values[column] = cellValue
                        console.log(`${column}${rowPosition}: ` + cellValue)
                    }
                    // TODO: insert into tbl_QC_Detail
                    let detailInsertSql = `
                        insert into tbl_qc_detail
                        (header_id, file_id, Value_1, Value_2, Value_3, Value_4, Value_5, Value_6, Value_7, Value_8, Value_9) values
                        (${req.body.sysId}, '${fileSysId}', '${values.B}', '${values.C}', '${values.D}', '${values.F}', '${values.G}', '${values.H}', '${values.I}', '${values.J}', '${values.K}')
                    `
                    console.log(await db.query(detailInsertSql,{
                        raw: true,
                        type: Sequelize.QueryTypes.INSERT
                    }))
                } else {
                    break
                }
                rowPosition++
            }
            if (errorMsg) throw errorMsg
            res.send({ status: 200 });
        } catch (err) {
            console.error(err)
            res.send({ status: 500,　errorMsg:　err });
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
