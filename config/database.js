const Sequelize = require('sequelize');

const sequelize = new Sequelize('OeeAPP', 'sa', '123456', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433, // Default port
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
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;