const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get('db.database'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: 'mssql',
  port: config.get('db.port'), // Default port
  operatorsAliases: false,
  // similar for sync: you can define this to always force sync for models
  sync: { force: false },
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
    console.log('Database Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;