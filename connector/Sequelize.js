const Sequelize = require('sequelize');
const config = require('getconfig');

const DB = config.database;

const db = new Sequelize(DB.dbname, DB.username, DB.password, {
  host: DB.host,
  dialect: DB.dialect,
  pool: DB.pool,
  logging: process.env.NODE_ENV !== 'production',
});

db.authenticate().then(() => {
  console.log(`☃ MySQL Database Connect By Sequelize Success: ${DB.host}`);
}).catch((error) => {
  console.error(`!! MySQL Database Connect By Sequelize Failure: ${DB.host}`, String(error));
});


module.exports = db;
