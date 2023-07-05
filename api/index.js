const router = require("express").Router();//Creates a router object

// Already mounted on /api/
router.use("/campuses", require("./Allcampus"));
//Gets and Mounts the "/allcampuses" route

router.use("/students", require("./Allstudents"));
//Gets and Mounts the "/allstudents" route

router.use("/campus",require("./campus"));
//Gets and Mounts the "/campus" route

router.use("/student",require("./student"));
// Gets and Mounts the "/student" route

//Error Handling for error 404 Handling
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

// Export the router object
module.exports = router;
