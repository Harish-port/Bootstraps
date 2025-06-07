const express = require("express");
const brcypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { User, RefreshToken } = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // try {
    //     const existingUser = await User.findOne({ username });
    //     if (existingUser) {
    //         return res.status(400).json({ error: "User already exits" })
    //     }

    //     const salt = brcypt.genSalt(10);
    //     const hashedPassword = brcypt.hash(password, salt);

    //     const newUser = new User({ username, password: hashedPassword });
    //     await newUser.save();
    //     res.status(201).json({ message: "User registered successfully" })
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ error: "Server error" });
    // }
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exits" });
        }
        const salt = await brcypt.genSalt(10);
        const hashedPassword = await brcypt.hash(password, salt);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ error: "Authentication failed" });
        const passwordMatch = await brcypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ error: "Authentication failed" });
        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_SECRET, {
            expiresIn: '7d'
        });
        await RefreshToken.create({ token: refreshToken, userId: user._id });
        res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false, // true in production (HTTPS)
                sameSite: "Strict",
                path: "/",
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            })
            .status(200)
            .json({ accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Login failed" });
    }
});

router.post("/refresh-token", async (req, res) => {
  const refreshToken = req.cookies?.refreshToken; // <- FIXED: Read from cookie
  if (!refreshToken) {
    return res.status(403).json({ error: "Refresh token missing" });
  }
  try {
    // Check if refresh token exists in the database
    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    console.error("Refresh Token Error:", error);
    res.status(500).json({ error: "Invalid refresh token" });
  }
});

router.post("/logout", async (req, res) => {
    const refreshToken = req?.cookies?.refreshToken;
    if (!refreshToken) {
        return res.status(400).json({ error: "Refresh token required" });
    }
    try {
        await RefreshToken.deleteOne({ token: refreshToken });
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ error: "Logout failed" });
    }
});
 
module.exports = router;
