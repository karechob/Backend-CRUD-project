const express = require('express'); // Imports the Express module
const router = express.Router(); //Creates a router object
const { Student, Campus } = require('../db/models'); // Imports the Student and Campus models

// Route handler for GET request
router.get('/student/:id', async (req, res, next) => {
    try {// Extract the studentId from the request parameters
        const studentId = req.params.id;

        // Find the student with the specified id, including associated campus
        const student = await Student.findByPk(studentId, { include: Campus });

        if (!student) {
     // If student is not found, send a response with status code 404 and message (Student not found)
            return res.status(404).json({ error: 'Student not found' });
        }
// Send a response with the found student, including associated campus
        res.json(student);
    } catch (error) {
    //Handles any errors that occur
        next(error);
    }
});

// Export the router object
module.exports = router;
