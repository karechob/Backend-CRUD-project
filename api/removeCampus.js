const express = require('express'); //Imports the Express module
const router = express.Router();// Creates a router object 
const { Campus } = require('../db/models'); //Imports the Campus model 

router.delete('/campus/:id', async (req, res, next) => {
  try {
    // Extract the campusId from the request parameters
    const campusId = req.params.id;

// Delete the campus with the specified id from the database
    await Campus.destroy({ where: { id: campusId } });
    
// Sends a response (Campus removed successfully) task completed
    res.json({ message: 'Campus removed successfully' });
  } catch (error) {
//Handles any errors
    next(error);
  }
});
// Export the router object
module.exports = router;
