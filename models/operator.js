const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema(
  {
    soldier_id: { type: Number, required: true },
    callsign: { type: String, required: true },
    suit_status: { type: String, required: true },
    current_location: { type: String, required: true },
    active_scan_range_m: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Operator', operatorSchema);