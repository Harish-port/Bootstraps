const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bycryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = User.findOne({ username });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({
      error: "Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = User.findOne({ username });
    if (!findUser)
      return res.status(401).json({ message: "Authentication Failed" });
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
      return res.status(401).json({ message: "Authentication Failed" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
// Breaking it Down:
// jwt.sign(payload, secretKey, options)

// jwt.sign() creates a signed JWT token.
// Payload: { userId: user._id }

// The payload is the data stored inside the token.
// Here, { userId: user._id } means the token will contain the user's unique ID (_id from MongoDB).
// This helps identify the user in future requests.
// Secret Key: process.env.JWT_SECRET

// JWT_SECRET is an environment variable that stores a secret key.
// It is used to sign (encrypt) the token to prevent tampering.
// The server must use the same secret key when verifying the token.
// Options: { expiresIn: "1h" }

// expiresIn: "1h" means the token will expire in 1 hour.
// After 1 hour, the user will need to log in again to get a new token.