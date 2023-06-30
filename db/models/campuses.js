const { DataTypes } = require("sequelize");// Destructures the DataTypes object 
const db = require("../db");//Imports the db object 


//Creates a Table model named Campus 
//with columns named below and their datatypes

const Campus = db.define("campus", {
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

// Export the Campus model
module.exports = Campus;