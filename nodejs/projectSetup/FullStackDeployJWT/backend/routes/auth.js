const express = require("express");
const brcypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const salt = await brcypt.genSalt(10);
        const hashedPassword = await brcypt.hash(password, salt);     
    } catch (error) {
        console.log(error);

    }

});

