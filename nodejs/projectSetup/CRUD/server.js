require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const userRoutes = require("./routes/userRoutes")
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true}).then(()=>{
    console.log("Connection to MongoDB successfull")
}).catch((err)=>{
console.log(err,"Error in Server connection");
})
app.use('/user',userRoutes)

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
});

