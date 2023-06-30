const db = require("./db");
const {Campus, Student } = require("./db/models");

const seedCampus = [
  { 
      name: "Fake College", 
      imageUrl: "https://media.istockphoto.com/id/1142918319/photo/college-students-on-university-campus.jpg?s=612x612&w=0&k=20&c=FaT9h0xJXSF3AzofWb9ozJtSqaxS4m91uH6C1lmL6xc=", 
      address: "1234 ave 36", 
      description: "first college added" 
    }
];

const seedStudent = [
  { 
      firstName: "Alice", 
      lastName: "Guevara", 
      email: "guevara@gmail.com",
      imageUrl: "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA=",
      gpa: 3.5,
      campusId: 1,
     }
];

const seed = async () => {
  await Campus.bulkCreate(seedCampus);
  await Student.bulkCreate(seedStudent);
};

seed().then(() => process.exit());

//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isEmail: true,
//       },
//   },
//   imageUrl: {
//     defaultValue: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   gpa: {
//     type: DataTypes.DECIMAL(1,1),
//     allowNull: false,
//   },
// });