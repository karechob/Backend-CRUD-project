const router = require("express").Router();

// Already mounted on /api/
router.use("/allcampuses", require("./Allcampus"));
router.use("/allstudents", require("./Allstudents"));
router.use("/campus",require("./campus"));
router.use("/student",require("./student"));
// 404 Handling
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
