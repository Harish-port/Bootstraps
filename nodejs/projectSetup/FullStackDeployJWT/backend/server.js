require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // your React app's URL
  credentials: true, // if you want to allow cookies (like HTTP-only cookie refresh token)
}));
app.use("/auth", authRoutes);

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: `You have accessed a protected route` });
});
mongoose.connect(process.env.MONGO_URL).then(() => console.log("success")).catch(() => console.log("failed"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(port);
});

