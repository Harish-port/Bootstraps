const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
  quantity: { type: Number},
  totalPrice: { type: Number},
  customerName: { type: String},
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default: "Processing" }
});

module.exports = mongoose.model("Order", orderSchema);
