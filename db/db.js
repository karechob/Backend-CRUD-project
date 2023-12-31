const { Sequelize } = require("sequelize");
require('dotenv').config();


//npm run start
  const db = new Sequelize(process.env.DATABASE_URL, {
    logging: true,
    dialect: "postgres",
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // required for self-signed certificates
      }
    },
  });

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


// const db = new Sequelize(`postgres://localhost:5432/${name}`, {
//     logging: false,
// });
// const db = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
//     host: 'localhost',
//     dialect: "postgres", /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//     dialectModule: require('pg'),
//   });
 


module.exports = db;