const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/models');

router.post('/campus', async (req, res, next) => {
    try {
        const { name, imageUrl, address, description } = req.body;

        const newCampus = await Campus.create({ name, imageUrl, address, description });

        res.status(201).json(newCampus);
    } catch (error) {

        next(error);
    }
});

module.exports = router;