const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    email:{required:true,type:String,unique:true},
    age:Number
});


const User= mongoose.model("User", userSchema);
module.exports = User;

