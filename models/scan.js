const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema(
  {
    scan_id: { type: Number, required: true },
    soldier_id: { type: Number, required: true },
    object_type: { type: String, required: true },
    distance_m: { type: Number, required: true },
    bearing: { type: Number, required: true },
    confidence: { type: Number, required: true },
    hazard_level: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Scan', scanSchema);