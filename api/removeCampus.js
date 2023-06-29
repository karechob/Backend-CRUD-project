const express = require('express');
const router = express.Router();
const { Campus } = require('../db/models'); 

router.delete('/campus/:id', async (req, res, next) => {
  try {
    const campusId = req.params.id;

    await Campus.destroy({ where: { id: campusId } });

    res.json({ message: 'Campus removed successfully' });
  } catch (error) {

    next(error);
  }
});

module.exports = router;
