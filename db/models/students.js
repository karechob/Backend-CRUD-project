const { DataTypes } = require("sequelize");// Destructures the DataTypes object 
const db = require("../db");//imports the db object


//Creates a Table model named Student 
//with columns named below and their datatypes
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

//Exports the model object student 
module.exports = Student; 