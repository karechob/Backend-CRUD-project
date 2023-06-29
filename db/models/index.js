const Campus = require("./campuses");
const Student = require("./students");

// Associations Go Here

// Many to Many
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};

//belongstomany --> many to many relationships