const Campuses = require("./campuses");
const Students = require("./students");

// Associations Go Here

// Many to Many
Campuses.belongsToMany(Students, { through: "id" });
Students.hasOne(Campuses, { foreignKey: "id" });

module.exports = {
  Campuses,
  Students,
};