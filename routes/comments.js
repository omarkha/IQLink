const express = require("express");
const router = express.Router();

const {
  getComments,
  addComment,
  deleteComment,
  updateComment,
  getComment,
} = require("../controllers/commentsController");

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", addComment);
router.delete("/:id", deleteComment);
router.patch("/:id", updateComment);

module.exports = router;
