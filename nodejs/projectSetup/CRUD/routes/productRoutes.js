const express = require("express");
const Product = require("../models/Product");
const Order = require("../models/Orders");
const router = express.Router();

router.post("/addProducts", async (req, res) => {
    try {
      const newProduct = await Product(req.body);
      res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
      console.error("Error saving product:", error); // Log the actual error
      res.status(500).json({ message: "Error adding product", error: error.message });
    }
  });

router.get("/getProducts", async (req, res) => {
    try {
      // Question: Find the total stock available for each category.
      const stockAvailability = await Product.aggregate([{$group:{_id:"$category",totalStock:{$sum:"$stock"}}}]);
      // sort thg price in descending order and then limit the number of documents to 3
      const top3ExpensiveProducts = await Product.aggregate([{$sort:{price:-1}},{$limit:3}]) 
      //Calculate the average price of products per category.
      const avgProductPrice = await Product.aggregate([{$group:{_id:"$category",averagePrice:{$avg:"$price"}}}]);
      // Find Products Priced Above ₹1000 and Sort by Name
      const productPriceAbove1000 = await Product.aggregate([
        {$match:{price:{$gt:1000}}},{$sort:{name:1}}
      ]);
      // Retrieve the most expensive product per category.
      const expensiveProduct = await Product.aggregate([{$group:{_id:"$category",maxPrice:{$max:"$price"}}}]);
      // Perform a Left Join to Get Product Details with Orders 
      // Retrieve order details along with the corresponding product name and price.
      const productWithOrders = await Product.aggregate([
        {
          $lookup: {
            from: "orders",             // Name of the collection to join
            localField: "_id",          // Field in the Product collection
            foreignField: "productId",  // Field in the Order collection
            as: "orderDetails"          // Name of the new field
          }
        }
      ]);
      res.status(200).json({productWithOrders,top3ExpensiveProducts,stockAvailability,avgProductPrice,productPriceAbove1000,expensiveProduct});
    } catch (error) {
      res.status(500).json({ message: "Error adding product", error: error.message });
    }
  });
  
  router.post("/getOrders", async (req, res) => {
    try {
      const { productId, quantity, totalPrice, customerName, orderDate, status } = req.body;
      // if (!productId || !quantity || !totalPrice || !customerName) {
      //   return res.status(400).json({ message: "Missing required fields" });
      // }
      const newOrder = new Order({ productId, quantity, totalPrice, customerName, orderDate, status });
      const savedOrder = await newOrder.save();
  
      res.status(201).json({ message: "Order added successfully!", order: savedOrder });
    } catch (error) {
      res.status(500).json({ message: "Error adding order", error: error.message });
    }
  });
  
module.exports = router;