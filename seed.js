const db = require("./db");
const { Campus, Student } = require("./db/models");

const seedCampus = [
  {
    name: "McCormick College",
    imageUrl: "https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg",
    address: "1234 Ave 36",
    description: "Shining with untarnished honor."
  },
  {
    name: "University of South Lake",
    imageUrl: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
    address: "5678 Street Blvd",
    description: "A renowned university for exemplary education"
  },
  {
    name: "Tech Institute",
    imageUrl: "https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg?itok=iKc35HST",
    address: "9012 Road Ave",
    description: "Leading the way in technology education"
  },
  {
    name: "Liberty University",
    imageUrl: "https://www.syracuse.edu/images/XD67YLsCQaG3m0nBpr3iW9dkkvc=/3960/width-1100/campus-in-autumn-dome-background_08-10-202115-21-02.jpg",
    address: "3456 Lane St",
    description: "Where freedom and education go hand in hand"
  },
  {
    name: "Global University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "7890 Court Rd",
    description: "Preparing students for a global future"
  },
  {
    name: "Sunshine State University",
    imageUrl: "https://www.visitflorida.com/content/dam/visitflorida/en-us/images/florida-beach-destinations-hero-desktop.jpg",
    address: "2468 Palm Beach Blvd",
    description: "Embrace the sun and beach vibes while learning"
  },
  {
    name: "Mountainview College",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "3579 Summit Avenue",
    description: "Education with a breathtaking mountain backdrop"
  },
  {
    name: "Oceanfront University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "9876 Shoreline Drive",
    description: "Learning by the waves and coastal breeze"
  },
  {
    name: "Innovation Institute",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "1357 Tech Lane",
    description: "Igniting innovation and creativity in education"
  },
  {
    name: "Starlight University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "1010 Galaxy Avenue",
    description: "Unleash your potential under the starlit sky"
  }, 
  {
    name: "Maplewood College",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "222 Maple Street",
    description: "Where education and nature harmonize"
  },
  {
    name: "Evergreen University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "456 Evergreen Lane",
    description: "Immerse yourself in the beauty of learning"
  },
  {
    name: "Seaside College",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "789 Seaside Avenue",
    description: "Education with a view of the ocean"
  },
  {
    name: "Harmony University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "543 Harmony Road",
    description: "Where knowledge and harmony come together"
  },
  {
    name: "Lovak College",
    imageUrl: "https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg",
    address: "1234 Ave 35",
    description: "Shining with untarnished honor."
  },
  {
    name: "University of North Park",
    imageUrl: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
    address: "5678 Street Blvd",
    description: "A renowned university for exemplary education"
  },
  {
    name: "Warner Institute",
    imageUrl: "https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg?itok=iKc35HST",
    address: "901 Road Ave",
    description: "Leading the way in education"
  },
  {
    name: "Portland University",
    imageUrl: "https://www.syracuse.edu/images/XD67YLsCQaG3m0nBpr3iW9dkkvc=/3960/width-1100/campus-in-autumn-dome-background_08-10-202115-21-02.jpg",
    address: "34 Lane St",
    description: "Where freedom and education go hand in hand"
  },
  {
    name: "South Harmon University",
    imageUrl: "https://www.lasalle.edu/wp-content/uploads/sites/182/2014/12/ext082090905.jpg",
    address: "9080 Court Rd",
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
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.2,
    campusId: 1,
  },
  {
    firstName: "Emma",
    lastName: "Smith",
    email: "emma.smith@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.8,
    campusId: 2,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.9,
    campusId: 2,
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.7,
    campusId: 3,
  },
  {
    firstName: "Michael",
    lastName: "Williams",
    email: "michael.williams@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.6,
    campusId: 4,
  },
  {
    firstName: "Olivia",
    lastName: "Brown",
    email: "olivia.brown@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.4,
    campusId: 4,
  },
  {
    firstName: "Ethan",
    lastName: "Taylor",
    email: "ethan.taylor@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.3,
    campusId: 5,
  },
  {
    firstName: "Sophia",
    lastName: "Clark",
    email: "sophia.clark@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.1,
    campusId: 5,
  },
  {
    firstName: "Daniel",
    lastName: "Thomas",
    email: "daniel.thomas@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.9,
    campusId: 6,
  },
  {
    firstName: "Sarah",
    lastName: "Snook",
    email: "snook@gmail.com",
    imageUrl: "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA=",
    gpa: 3.5,
    campusId: 4,
  },
  {
    firstName: "David",
    lastName: "Emmerich",
    email: "emmerich@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.2,
    campusId: 5,
  },
  {
    firstName: "Katarina",
    lastName: "Novak",
    email: "emma.smith@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.8,
    campusId: 6,
  },
  {
    firstName: "Danielle",
    lastName: "Isaac",
    email: "john.doe@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.9,
    campusId: 7,
  },
  {
    firstName: "Romulus",
    lastName: "Roy",
    email: "royco@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.7,
    campusId: 8,
  },
  {
    firstName: "Mary",
    lastName: "Olivier",
    email: "olivier@example.com",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: 3.7,
    campusId: 8,
  },
];


const seed = async () => {
  await Campus.bulkCreate(seedCampus);
  await Student.bulkCreate(seedStudent);
};

seed().then(() => process.exit());