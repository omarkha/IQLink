const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !password || !email) {
    res.status(400);
    throw new Error("Please add all field");
  }

  // check if user exists

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash Password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for User Email
  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    res.json({
      _id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, first_name, last_name, email } = await User.findById(
    req.params.id
  );

  res.status(200).json({
    id: _id,
    first_name,
    last_name,
    email,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
