const express = require("express");//Imports the Express module
const router = express.Router(); //Creates a router object
const { Student} = require("../db/models");//Imports the Student model

// Root here is localhost:8080/api/Student/

router.get("/", async (req, res, next) => {
  try {
    // Retrieve all students from the database
    const allStudent = await Student.findAll();

    console.log("all students " + allStudent);

   if (allStudent) {
  // If there are students, send a response with status code 200
    // and the array of students
    res.status(200).json(allStudent) 
   } else {
// If no students are found, send a response with status code 404 
//and message (Student List Not Found)
    res.status(404).send("Student List Not Found");
   }
  } catch (error) {
    // Log any errors that occur 
    console.log(error);
  }
});

// Export the router object
module.exports = router;
