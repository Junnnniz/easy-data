const mongoose = require('mongoose');

const DataBundleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    dataSize: { type: Number, required: true },
    price: { type: Number, required: true },
    validity: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const DataBundle = mongoose.model('DataBundle', DataBundleSchema);

module.exports = DataBundle;