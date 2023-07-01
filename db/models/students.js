const { DataTypes } = require("sequelize");
const db = require("../db");//Imports the db object

//Creates a Table named Student as a model in the DB
const Student = db.define("student", {
//Defines the "Student" model using the define method of the db object  
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

// Export the "Student" model
module.exports = Student; 
