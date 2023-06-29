const express = require("express");
const router = express.Router();
const { Student} = require("../db/models");

// Root here is localhost:8080/api/Student/

router.get("/", async (req, res, next) => {
  try {
    const allStudent = await Student.findAll();

    allStudent
      ? res.status(200).json(allStudent) // if allStudent is truthy
      : res.status(404).send("Student List Not Found"); // if allStudent is falsey
  } catch (error) {
    next(error);
  }
});

module.exports = router;
