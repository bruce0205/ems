const Sequelize = require('sequelize');

const sequelize = new Sequelize('OeeAPP', 'sa', '123456', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433, // Default port
    operatorsAliases: false,
    // similar for sync: you can define this to always force sync for models
    sync: { force: true },
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// machine
sequelize.query(`
    select s.mah_num,
    s.mah_sta,
    s.mah_pn,
    s.mah_mold,
    s.mah_cou,
    s.mah_result,
    (d.maf_oncount-d.maf_pke) / d.maf_oncount
    from MAH_STA s left join MAF_DATA d on d.maf_num = s.mah_num
    `, {
        // Set this to true if you don't have a model definition for your query.
        raw: false,
        type: Sequelize.QueryTypes.SELECT
    }).then(myTableRows => {
        console.log(myTableRows);
    });

// mold
sequelize.query(`
    

select pv1.mvs_pn,pv1.mvs_mold,pv1.mvs_hole1,pv1.mvs_hole2,
pv1.unPivotcol as pn_type,pv1.pn,pv2.pn_date,pv3.pn_count from
(
select 
mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
mvs_die01,
mvs_die02,
mvs_bbk101,
mvs_bbk102,
mvs_bbk201,
mvs_bbk202,
mvs_bbk301,
mvs_bbk302,
mvs_cut01,
mvs_cut02,
mvs_pin,
mvs_inldie01,
mvs_inldie02,
mvs_utk01,
mvs_utk02,
mvs_tpe
from MOLD_MVS where mvs_pn = 'ZAUO062A-P02-01.T1' and mvs_mold = 'M1'
) AS p
UNPIVOT
(pn for unPivotcol in (
mvs_die01,
mvs_die02,
mvs_bbk101,
mvs_bbk102,
mvs_bbk201,
mvs_bbk202,
mvs_bbk301,
mvs_bbk302,
mvs_cut01,
mvs_cut02,
mvs_pin,
mvs_inldie01,
mvs_inldie02,
mvs_utk01,
mvs_utk02,
mvs_tpe
)) as pv1

left join 

(
select 
mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
mvs_die01date as mvs_die01,
mvs_die02date as mvs_die02,
mvs_bbk101date as mvs_bbk101,
mvs_bbk102date as mvs_bbk102,
mvs_bbk201date as mvs_bbk201,
mvs_bbk202date as mvs_bbk202,
mvs_bbk301date as mvs_bbk301,
mvs_bbk302date as mvs_bbk302,
mvs_cut01date as mvs_cut01,
mvs_cut02date as mvs_cut02,
mvs_pindate as mvs_pin,
mvs_inldie01date as mvs_inldie01,
mvs_inldie02date as mvs_inldie02,
mvs_utk01date as mvs_utk01,
mvs_utk02date as mvs_utk02,
mvs_tpedate as mvs_tpe
from MOLD_MVS where mvs_pn = 'ZAUO062A-P02-01.T1' and mvs_mold = 'M1'
) AS p
UNPIVOT
(pn_date for unPivotcol in (
mvs_die01,
mvs_die02,
mvs_bbk101,
mvs_bbk102,
mvs_bbk201,
mvs_bbk202,
mvs_bbk301,
mvs_bbk302,
mvs_cut01,
mvs_cut02,
mvs_pin,
mvs_inldie01,
mvs_inldie02,
mvs_utk01,
mvs_utk02,
mvs_tpe
)) as pv2 on pv2.unPivotcol = pv1.unPivotcol

left join

(
select 
mvs_pn,mvs_mold,mvs_hole1,mvs_hole2,
mvs_die01count as mvs_die01,
mvs_die02count as mvs_die02,
mvs_bbk101count as mvs_bbk101,
mvs_bbk102count as mvs_bbk102,
mvs_bbk201count as mvs_bbk201,
mvs_bbk202count as mvs_bbk202,
mvs_bbk301count as mvs_bbk301,
mvs_bbk302count as mvs_bbk302,
mvs_cut01count as mvs_cut01,
mvs_cut02count as mvs_cut02,
mvs_pincount as mvs_pin,
mvs_inldie01count as mvs_inldie01,
mvs_inldie02count as mvs_inldie02,
mvs_utk01count as mvs_utk01,
mvs_utk02count as mvs_utk02,
mvs_tpecount as mvs_tpe
from MOLD_MVS where mvs_pn = 'ZAUO062A-P02-01.T1' and mvs_mold = 'M1'
) AS p
UNPIVOT
(pn_count for unPivotcol in (
mvs_die01,
mvs_die02,
mvs_bbk101,
mvs_bbk102,
mvs_bbk201,
mvs_bbk202,
mvs_bbk301,
mvs_bbk302,
mvs_cut01,
mvs_cut02,
mvs_pin,
mvs_inldie01,
mvs_inldie02,
mvs_utk01,
mvs_utk02,
mvs_tpe
)) as pv3 on pv3.unPivotcol = pv1.unPivotcol

    `, {
        // Set this to true if you don't have a model definition for your query.
        raw: false,
        type: Sequelize.QueryTypes.SELECT
    }).then(myTableRows => {
        console.log(myTableRows);
    });



// manufacture
sequelize.query(`
   
select d.maf_num
,d.maf_pn
,d.maf_time
,d.maf_date
,d.maf_hole1
,d.maf_hole2
,d.maf_mold
,d.maf_cytime
,d.maf_cto
,d.maf_pke
,d.maf_onresult
,d.maf_oncount
,d.maf_ondate
,d.maf_ofresult
,d.maf_ofreason
,d.maf_offcount
,d.maf_offdate
,CAST(e.OK as decimal(6,2))/(CAST(e.OK as decimal(6,2))+ cast(e.NG as decimal(6,2))) as YIeld
from MAF_DATA d
left join 
(
SELECT err_mahnum,err_mafpn,err_date,err_mold,
[OK], [NG]
FROM
(SELECT err_mahnum,err_mafpn,err_date,err_mold,err_Ct,
(case err_id when '11' then 'OK' else 'NG' end) as OK_NG
FROM ERR_COUNT) AS SourceTable
PIVOT
(
SUM(err_Ct)
FOR OK_NG IN ([OK], [NG])
) AS PivotTable
) e
on e.err_mahnum = d.maf_num and e.err_mafpn = d.maf_pn and e.err_date = d.maf_ondate and e.err_mold = d.maf_mold
    `, {
        // Set this to true if you don't have a model definition for your query.
        raw: false,
        type: Sequelize.QueryTypes.SELECT
    }).then(myTableRows => {
        console.log(myTableRows);
    });
