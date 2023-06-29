const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../db/models');

router.get('/student/:id', async (req, res, next) => {
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

module.exports = router;
