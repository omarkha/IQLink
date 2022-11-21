const express = require("express");
const router = express.Router();

const {
  getPostlikes,
  addPostlike,
  deletePostlike,
  updatePostlike,
  getPostlike,
} = require("../controllers/postlikesController");

router.get("/", getPostlikes);
router.get("/:id", getPostlike);
router.post("/", addPostlike);
router.delete("/:id", deletePostlike);
router.patch("/:id", updatePostlike);

module.exports = router;
