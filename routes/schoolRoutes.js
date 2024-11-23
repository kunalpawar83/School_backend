const express = require("express");
const router = express.Router();
const SchoolController = require("../controllers/schoolControllers.js");

// Define the route with the callback function
router.post("/add-school", SchoolController.addSchool);
router.get("/get-schools", SchoolController.listSchools);

module.exports = router;
