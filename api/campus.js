const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

// Root here is localhost:8080/api/Campuss/

router.get("/", async (req, res, next) => {
  try {
    const allCampus = await Campus.findAll();
    console.log("this is all campus: " + allCampus)
    allCampus
      ? res.status(200).json(allCampus)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
