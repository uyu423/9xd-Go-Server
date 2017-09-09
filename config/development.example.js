module.exports = {
  port: 3000,
  database: {
    dbname: 'dbname',
    username: 'username',
    password: 'password',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  },
};
