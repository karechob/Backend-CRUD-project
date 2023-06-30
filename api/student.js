const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../db/models');

router.get('/:id', async (req, res, next) => {
    try {
        const studentId = req.params.id;

        const student = await Student.findByPk(studentId, { include: Campus });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const studentId = req.params.id;

        await Student.destroy({ where: { id: studentId } });

        res.json({ message: 'Student removed successfully' });
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        const newStudent = await Student.create({ firstName, lastName, email, imageUrl, gpa, campusId });

        res.status(201).json(newStudent);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
