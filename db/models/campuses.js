const { DataTypes } = require("sequelize");
const db = require("../db");//Imports the db object

//Creates a Table named Campus as a model in the DB
const Campus = db.define("campus", {
// Defines the "Campus" model using the "define" method of the "db" object
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    defaultValue: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});


module.exports = Campus;
// Exports the "Campus" model