const express = require("express");
const router = express.Router();

const {
  getCommentlikes,
  addCommentlike,
  deleteCommentlike,
  updateCommentlike,
  getCommentlike,
} = require("../controllers/commentlikesController");

router.get("/", getCommentlikes);
router.get("/:id", getCommentlike);
router.post("/", addCommentlike);
router.delete("/:id", deleteCommentlike);
router.patch("/:id", updateCommentlike);

module.exports = router;
