const db = require("./db");
const { Campus, Student } = require("./db/models");

const seedCampus = [
  {
    name: "Fake College",
    imageUrl: "https://media.istockphoto.com/id/1142918319/photo/college-students-on-university-campus.jpg?s=612x612&w=0&k=20&c=FaT9h0xJXSF3AzofWb9ozJtSqaxS4m91uH6C1lmL6xc=",
    address: "1234 Ave 36",
    description: "First college added"
  },
  {
    name: "University of Example",
    imageUrl: "https://media.istockphoto.com/photos/university-campus-picture-id1303262839?b=1&k=20&m=1303262839&s=170667a&w=0&h=ZCtP-_Kxv04ioVJ1OQVYPb00vT3tcZDCsjr6lz3oAtM=",
    address: "5678 Street Blvd",
    description: "A renowned university for exemplary education"
  },
  {
    name: "Tech Institute",
    imageUrl: "https://media.istockphoto.com/photos/university-students-on-campus-picture-id1296095776?b=1&k=20&m=1296095776&s=170667a&w=0&h=ajvYjQjN92bcnW7uLHaxFJrcOn9wz6YJblvswqQG2us=",
    address: "9012 Road Ave",
    description: "Leading the way in technology education"
  },
  {
    name: "Liberty University",
    imageUrl: "https://media.istockphoto.com/photos/college-campus-with-students-in-spring-picture-id1174222709?b=1&k=20&m=1174222709&s=170667a&w=0&h=PeEB9PYWOTvL0vW5bk_Gj61RQbgt1uQsfGKJ8xyynLE=",
    address: "3456 Lane St",
    description: "Where freedom and education go hand in hand"
  },
  {
    name: "Global University",
    imageUrl: "https://media.istockphoto.com/photos/diverse-college-students-discussing-projects-in-campus-quad-picture-id1271755642?b=1&k=20&m=1271755642&s=170667a&w=0&h=KH2GmxYgIJHh04Ho1Tn9qjgj8yD2YQIqJlQqJKzg-zI=",
    address: "7890 Court Rd",
    description: "Preparing students for a global future"
  },
];


const seedStudent = [
  {
    firstName: "Alice",
    lastName: "Guevara",
    email: "guevara@gmail.com",
    imageUrl: "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA=",
    gpa: 3.5,
    campusId: 1,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    imageUrl: "https://media.istockphoto.com/photos/portrait-of-smiling-young-man-picture-id1308607685?b=1&k=20&m=1308607685&s=170667a&w=0&h=ln6wuhX5iOibXhsH-KV8rqfUixXeL6r84UNYPScnV4Y=",
    gpa: 3.2,
    campusId: 1,
  },
  {
    firstName: "Emma",
    lastName: "Smith",
    email: "emma.smith@example.com",
    imageUrl: "https://media.istockphoto.com/photos/portrait-of-a-smiling-young-woman-outdoors-picture-id1306401879?b=1&k=20&m=1306401879&s=170667a&w=0&h=trzt-ijeh5rXxKKR5IugM8azpVJYLYrRd0cqZTLX4L0=",
    gpa: 3.8,
    campusId: 2,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    imageUrl: "https://media.istockphoto.com/photos/portrait-of-happy-african-american-student-picture-id1241564424?b=1&k=20&m=1241564424&s=170667a&w=0&h=ue9Xa5nW00eIvKzW6EbPChc7t-Wha4CY6x56glJfNfQ=",
    gpa: 3.9,
    campusId: 2,
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    imageUrl: "https://media.istockphoto.com/photos/portrait-of-a-smiling-woman-in-a-library-picture-id1295282381?b=1&k=20&m=1295282381&s=170667a&w=0&h=QF0VB7WhQ9YdeENs57gs6VXDETH7Tq9kOfF4GZ0sw9k=",
    gpa: 3.7,
    campusId: 3,
  },
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