const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/models'); // Assuming you have the Campus and Student models defined

router.post('/student', async (req, res, next) => {
    try {
        const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        const newStudent = await Student.create({ firstName, lastName, email, imageUrl, gpa, campusId });

        res.status(201).json(newStudent);
    } catch (error) {
        next(error);
    }
});

module.exports = router;