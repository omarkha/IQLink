const express = require("express");
const router = express.Router();

const {
  getMessages,
  addMessage,
  deleteMessage,
  updateMessage,
  getMessage,
} = require("../controllers/messagesController");

router.get("/", getMessages);
router.get("/:id", getMessage);
router.post("/", addMessage);
router.delete("/:id", deleteMessage);
router.patch("/:id", updateMessage);

module.exports = router;
