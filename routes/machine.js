var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

module.exports = (app, db) => {
  router.get('/', function (req, res, next) {
    const autoRefreshDuration = req.query.autoRefreshDuration > 0 ? req.query.autoRefreshDuration : 60000
    res.render('machine', {
      isMachine: true,
      layout: 'layout',
      autoRefreshDuration: autoRefreshDuration,
      username: req.session.username
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

  app.use('/machine', router);
  app.use('/', router);
}
