const Campuses = require("./campuses");
const Students = require("./students");

// Associations Go Here

// Many to Many
Campuses.belongsToMany(Students, { through: "Campus_id" });
Students.hasOne(Campuses, { foreignKey: "Campus_id" });

module.exports = {
  Campuses,
  Students,
};