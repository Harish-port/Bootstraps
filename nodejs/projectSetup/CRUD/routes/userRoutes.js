const express = require("express");
const User = require('../models/User');

const router = express.Router();
//add user 
router.post("/add",async (req,res)=>{
    try {
        const {username,age,email} = req.body
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({message:"User already exists!!!"})
        }
        const newUser = new User({username,age,email});
        const savedUser = await newUser.save();
        res.status(201).json({
            message:"User added successfully",
            savedUser
        });
    } catch (s) {
        res.status(400).json({
            error:error.message
        })
    }
});
//get all users list

router.get('/getUsers',async (req,res)=>{
    try{
      const userList = await User.find();
      res.status(200).json(userList)
    }
    catch(error){
res.status(500).json({error})
    }
})
// read user by id

router.get('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:"User not found"})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error})
    }
})
//update user

router.put("/:id",async (req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
         res.status(200).json({message:"User updated successfully",updatedUser})
    } catch (error) {
        res.status(500).json({error})
    }
})

// Delete User 

router.delete("/:id",async(req,res)=>{
    try {
        const findUser = await User.findByIdAndDelete(req.params.id);
        console.log(findUser);
        
        res.status(200).json({message:`User ${findUser.username} is deleted successfully!!`})
    } catch (error) {
        res.status(500).json({error})
    }
});

module.exports = router;