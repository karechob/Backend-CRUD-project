const express = require('express');//Imports the Express module
const router = express.Router();//Creates a router object
const { Campus, Student } = require('../db/models'); //Imports the Campus and Student models


// Route handler for GET request
router.get('/campus/:id', async (req, res, next) => {
  try {
     // Extract the campusId from the request parameters
    const campusId = req.params.id;

    // Find the campus with the specified id, including associated students
    const campus = await Campus.findByPk(campusId, { include: Student });

    if (!campus) { // If campus is not found, send a response with status code 404 and an error message
      return res.status(404).json({ error: 'Campus not found' });
    }
  // Send a response with the found campus, and its students
    res.json(campus);
  } catch (error) {
    //Handles any errors
    next(error);
  }
});

// Export the router object
module.exports = router;
