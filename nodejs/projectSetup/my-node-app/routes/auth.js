const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// User Registration
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // **Check if the user already exists**
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // **Hash the password**
    //     Generating a Salt:
    // js
    // Copy
    // Edit
    // const salt = await bcrypt.genSalt(10);
    // bcrypt.genSalt(10) generates a salt (a random string) with a cost factor of 10.
    // A higher cost factor makes hashing more secure but slower.
    // Hashing the Password:

    // js
    // Copy
    // Edit
    // const hashedPassword = await bcrypt.hash(password, salt);
    // bcrypt.hash(password, salt) hashes the password using the generated salt.
    // This makes it more secure, as the hash is unique and not reversible.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // **Create and save the user**
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in database
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Authentication failed" });

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Correct property name
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
