const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase",{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>console.log("MongoDB connection success")
).catch((err)=>console.log("Connection error",err));

//Define Schema
// A schema defines the structure of documents in a MongoDB collection

// User Schema Example
    
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{type:String,required:true,unique:true}
});

// Create A Model
// A model is a javascript representation of MongoDB Collection based on Schema

const User = mongoose.model("User",userSchema);

// Insert Data 
const newUser = new User({
    name:"Harish",
    age:28,
    email:"harish@gmail.com"
});

newUser.save().then(()=>console.log("User Saved")).catch(err=>console.error("Error",err));

// Fetch Data

User.find().then(users => console.log(users)).catch(err => console.error(err));

// Update Data

User.updateOne({name:"Harish"},{age:25}).then(()=>console.log("User Updated")).catch(err => console.log(err));

// Delete Data 

User.deleteOne({name:"Harish"}).then(()=>console.log("User Deleted")).catch(err => console.log(err));

