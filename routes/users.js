const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
} = require("../controllers/usersController");
const protect = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me/:id", getMe);
router.patch("/me/:id", updateUser);

module.exports = router;
