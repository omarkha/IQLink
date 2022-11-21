const express = require("express");
const router = express.Router();

const { getPosts, addPost } = require("../controllers/postsController");

router.get("/:uid", getPosts);
router.post("/", addPost);

module.exports = router;
