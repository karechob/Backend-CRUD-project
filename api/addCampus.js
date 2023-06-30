const express = require('express'); // Imports the Express module
const router = express.Router(); //Creates a router object 
const { Campus, Student } = require('../db/models'); //Imports the Campus and Student models from the folders

//Defines a route handler for the POST request
router.post('/campus', async (req, res, next) => {
    try { //Destructures the below shown properties from the body
        const { name, imageUrl, address, description } = req.body;
    //creates a new campus object from the campus model
        const newCampus = await Campus.create({ name, imageUrl, address, description });

        res.status(201).json(newCampus);
    } catch (error) {
        //Handles errors that occurs
        next(error);
    }
});

//Exports the router object to make it available 

module.exports = router; 