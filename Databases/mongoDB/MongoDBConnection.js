// install the packages express,cors,body-parser,dotenv,mongoose
// express: Web framework for Node.js
// mongoose: ODM (Object-Document Mapping) library for MongoDB
// dotenv: Manages environment variables
// cors: Allows cross-origin requests
// body-parser: Parses incoming JSON requests (optional, Express has built-in support)

// Env file

// PORT = 5000
// MONGO_URI =mongodb://localhost:27017/mydatabase

//server.js
require("dotenv").config();
const express = require("express");
const mongoos = require("mongoose");
const cors = require("cors")
const app = express();

app.use(express.json()) // for parsing the JSON requests
app.use(cors());

mongoos.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err));

app.use('/',(req,res)=>{
    res.send("Welcome to nodejs");
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
