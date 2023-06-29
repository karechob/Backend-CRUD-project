const express = require('express');
const router = express.Router();
const { Student } = require('../db/models');


router.delete('/student/:id', async (req, res, next) => {
    try {
        const studentId = req.params.id;

        await Student.destroy({ where: { id: studentId } });

        res.json({ message: 'Student removed successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
