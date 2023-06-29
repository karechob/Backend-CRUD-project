const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/models');

router.get('/campus/:id', async (req, res, next) => {
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

module.exports = router;
