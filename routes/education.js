const express = require("express");
const router = express.Router();

const {
  getEducations,
  addEducation,
  deleteEducation,
  updateEducation,
  getEducation,
} = require("../controllers/educationsController");

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", addEducation);
router.delete("/:id", deleteEducation);
router.patch("/:id", updateEducation);

module.exports = router;
