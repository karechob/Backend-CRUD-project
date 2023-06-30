const express = require('express'); //Imports the Express module
const router = express.Router(); //Creates a router object
const { Student } = require('../db/models'); //Imports the Student model 

// Route handler for DELETE request
router.delete('/student/:id', async (req, res, next) => {
    try { // Extract the studentId from the request parameters
        const studentId = req.params.id;

        // Delete the student with the specified id from the database
        await Student.destroy({ where: { id: studentId } });

        // Send a response  saying (Student removed successfully), taske completed
        res.json({ message: 'Student removed successfully' });
    } catch (error) {
        //Error handling
        next(error);
    }
});
// Export the router object
module.exports = router;
