const express = require('express');// Imports the Express module
const router = express.Router(); //Creates a router object 
const { Campus, Student } = require('../db/models'); // Assuming you have the Campus and Student models defined it imports them

//Defines a route handler for the POST request
router.post('/student', async (req, res, next) => {
    try { //Destructures the below shown properties from the body
        const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        //Creates a new student object using the Student model.
        const newStudent = await Student.create({ firstName, lastName, email, imageUrl, gpa, campusId });

        res.status(201).json(newStudent);
    } catch (error) {
        next(error);//handles any errors that occur 
    }
});
//Exports the router object 
module.exports = router;