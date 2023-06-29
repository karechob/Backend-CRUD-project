const express = require("express");
const router = express.Router();
const { Student} = require("../db/models");

// Root here is localhost:8080/api/Student/

router.get("/", async (req, res, next) => {
  try {
    const allStudent = await Student.findAll();
    console.log("all students " + allStudent);
   if (allStudent) {
    res.status(200).json(allStudent) 
   } else {
    res.status(404).send("Student List Not Found");
   }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
