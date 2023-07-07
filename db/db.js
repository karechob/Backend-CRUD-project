const { Sequelize } = require("sequelize");
require('dotenv').config();

// const db = new Sequelize(`postgres://localhost:5432/${name}`, {
//     logging: false,
// });
// const db = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
//     host: 'localhost',
//     dialect: "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

  const db = new Sequelize('postgres://admin:admin@localhost:5432/mydb', {
  dialectModule: pg
});

module.exports = db;