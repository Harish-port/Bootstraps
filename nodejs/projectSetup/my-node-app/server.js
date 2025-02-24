require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have accessed a protected route" });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("success"))
  .catch(() => console.log("failed"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
