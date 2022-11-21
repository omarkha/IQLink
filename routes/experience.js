const express = require("express");
const router = express.Router();

const {
  getExperiences,
  addExperience,
  deleteExperience,
  updateExperience,
  getExperience,
} = require("../controllers/experiencesController");

router.get("/", getExperiences);
router.get("/:id", getExperience);
router.post("/", addExperience);
router.delete("/:id", deleteExperience);
router.patch("/:id", updateExperience);

module.exports = router;
