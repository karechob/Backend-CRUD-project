const { DataTypes } = require("sequelize");
const db = require("../db");

const Campuses = db.define("campuses", {
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

module.exports = Campuses;