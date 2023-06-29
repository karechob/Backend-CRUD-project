const { Sequelize } = require("sequelize");
const { name } = require("../package.json");

// const db = new Sequelize(`postgres://localhost:5432/${name}`, {
//     logging: false,
// });

const db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

module.exports = db;