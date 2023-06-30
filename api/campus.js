const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/models');

router.get('/:id', async (req, res, next) => {
  try {
    const campusId = req.params.id;
    const campus = await Campus.findByPk(campusId, { include: Student });

    if (!campus) {
      return res.status(404).json({ error: 'Campus not found' });
    }

    res.json(campus);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
      const { name, imageUrl, address, description } = req.body;

      const newCampus = await Campus.create({ name, imageUrl, address, description });

      res.status(201).json(newCampus);
  } catch (error) {

      next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const campusId = req.params.id;

    await Campus.destroy({ where: { id: campusId } });

    res.json({ message: 'Campus removed successfully' });
  } catch (error) {

    next(error);
  }
});

module.exports = router;
