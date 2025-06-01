require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(() => console.log("success")).catch(() => console.log("failed"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(port);
});

