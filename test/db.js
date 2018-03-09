const Sequelize = require('sequelize');
const sequelize = new Sequelize('fontripdb', 'root', '53434976', {
    host: 'localhost',
    dialect: 'mysql',
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

sequelize
    .query('SELECT * from report_template', { raw: true })
    .then(myTableRows => {
        console.log(myTableRows);
    })