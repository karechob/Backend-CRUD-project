const express = require('express'); //Imports the Express module
const router = express.Router();//Creates a router object 
const { Campus, Student } = require('../db/models'); //Imports the Campus and Student models

router.get('/:id', async (req, res, next) => {
  // Retrieving a specific campus by ID
  try {
    const campusId = req.params.id;
    const campus = await Campus.findByPk(campusId, { include: Student });

    if (!campus) {
  // If the campus is not found, send a response with status code 404 
  //And the error message (Campus not found)
      return res.status(404).json({ error: 'Campus not found' });
    }
  // Sending a response with the retrieved campus
    res.json(campus);
  } catch (error) {
// Pass any error to the error handling
    next(error);
  }
});

//Creation of a new campus
router.post('/', async (req, res, next) => {
  try {
      const { name, imageUrl, address, description } = req.body;

// Creating a new campus with the provided data
      const newCampus = await Campus.create({ name, imageUrl, address, description });

      res.status(201).json(newCampus);
// Send a response with status code 201 and the newly created campus
  } catch (error) {
//Handling any errors that occur
      next(error);
  }
});

//Deletion of a Campus
router.delete('/:id', async (req, res, next) => {
  try {
    const campusId = req.params.id;

// Delete the campus with the provided ID from the database
    await Campus.destroy({ where: { id: campusId } });

    res.json({ message: 'Campus removed successfully' });
//Send response message (Campus removed successfully)
  } catch (error) {

//Handling any errors that occur
    next(error);
  }
});

//Campus update type Tested & Worked Successfully

router.put('/:id', async (req, res, next) => {
  try {
    const campusId = req.params.id;
    const { name, address, description } = req.body;

    // Find the campus by ID
    const campus = await Campus.findByPk(campusId);

    if (!campus) {
      // If the campus is not found, send a response with status code 404 and the error message (Campus not found)
      return res.status(404).json({ error: 'Campus not found' });
    }

    // Update the campus properties with the provided data
    campus.name = name;
    campus.address = address;
    //campus.imageUrl = imageUrl;
    campus.description = description;

    // Save the updated campus to the database
    await campus.save();

    // Send a response with the updated campus
    res.json(campus);
  } catch (error) {
    // Handling any errors that occur
    next(error);
  }
});  




//Exports the router object.
module.exports = router;
