const router = require("express").Router();

// Already mounted on /api/
router.use("/allcampuses", require("./campus"));
// Mounts the "/allcampuses" route 

router.use("/allstudents", require("./students"));
// Mounts the "/allstudents" route 

// Error 404 Handling
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
// Export the router object