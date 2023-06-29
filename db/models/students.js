const { DataTypes } = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
  },
  imageUrl: {
    defaultValue: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
    type: DataTypes.STRING,
    allowNull: false,
  },
  gpa: {
    type: DataTypes.DECIMAL(2,1), 
    allowNull: false,
  },
});

module.exports = Student; 