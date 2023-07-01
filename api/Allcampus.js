const express = require("express"); //Imports the Express module
const router = express.Router(); //Creates a router object
const { Campus } = require("../db/models"); //Imports the Campus model 

// Root here is localhost:8080/api/Campuss/

//Route handler for the GET request
router.get("/", async (req, res, next) => {
  try { // Retrieve all campuses from the database
    const allCampus = await Campus.findAll();

    console.log("this is all campus: " + allCampus)

 // If there are campuses, send a response with status code 200 
 //and the Array of campuses

    allCampus
      ? res.status(200).json(allCampus)
      //If there are no campuses, send a response with status code 404
//And error message (Campus List Not found) 
      : res.status(404).send("Campus List Not Found");
  } catch (error) {

    console.log(error);
// Log any errors that occur
  }
});

module.exports = router;
// Export the router object