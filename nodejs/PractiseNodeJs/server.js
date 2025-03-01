require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/protected", authMiddleware, async (req, res) => {
  res.json({ message: "You have accessed protected route" });
});
const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("success"))
  .catch(() => console.log("failed connection to mongodb"));
app.listen(port, () => {
  console.log(`the server is runing at ${port}`);
});
