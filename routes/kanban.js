var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    console.log(req.query)
    let view = 'kanban'
    if (req.query.dataType === 'available') view = 'kanbanAvailable'
    if (req.query.dataType === 'performance') view = 'kanbanPerformance'
    if (req.query.dataType === 'quality') view = 'kanbanQuality'
    res.render(view, {
      isKanban: true,
      layout: 'layout',
    });
  });

  router.get('/api/data', function (req, res, next) {
    db.query(`
        GetMFGRealtime_sp
      `, {
        raw: false, // Set this to true if you don't have a model definition for your query.
        type: Sequelize.QueryTypes.SELECT
      }).then(data => {
        res.send({ data });
      }).catch(err => {
        console.error(err);
      });
  });

  app.use('/kanban', router);
}
