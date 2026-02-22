const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  bundleId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  mpesaTransactionId: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;