const express = require("express"); //Imports the Express module
const router = express.Router(); //Creates a router object
const { Campus } = require("../db/models"); // Imports the Campus model

// Root here is localhost:8080/api/Campuss/

// Route handler for GET request
router.get("/", async (req, res, next) => {
  try { // Retrieve all campuses from the database
    const allCampus = await Campus.findAll();
    console.log("this is all campus: " + allCampus)
    
// If campuses are found, send a response with status code 200 and the campuses serialized as JSON
// If no campuses are found, send a response with status code 404 and a plain text message
  
    allCampus
      ? res.status(200).json(allCampus)
      : res.status(404).send("Campus List Not Found");

  } catch (error) {
    console.log(error);  // Log any errors that occur during the execution
  }
});

// Export the router object
module.exports = router;
