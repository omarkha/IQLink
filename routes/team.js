const express = require("express");
const router = express.Router();

const {
  getTeams,
  addTeam,
  deleteTeam,
  updateTeam,
  getTeam,
} = require("../controllers/teamsController");

router.get("/", getTeams);
router.get("/:id", getTeam);
router.post("/", addTeam);
router.delete("/:id", deleteTeam);
router.patch("/:id", updateTeam);

module.exports = router;
