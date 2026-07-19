const Scan = require('../models/scan');
const { validationResult } = require('express-validator');

exports.getAllScans = async (req, res) => {
  try {
    const scans = await Scan.find();
    res.status(200).json(scans);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving scans.' });
  }
};

exports.getScanById = async (req, res) => {
  try {
    const scan = await Scan.findById(req.params.id);
    if (!scan) return res.status(404).json({ message: 'Scan not found.' });
    res.status(200).json(scan);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving scan.' });
  }
};

exports.createScan = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const scan = new Scan(req.body);
    const savedScan = await scan.save();
    res.status(201).json(savedScan);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error creating scan.' });
  }
};

exports.updateScan = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const updatedScan = await Scan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScan) return res.status(404).json({ message: 'Scan not found.' });
    res.status(200).json(updatedScan);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error updating scan.' });
  }
};

exports.deleteScan = async (req, res) => {
  try {
    const deletedScan = await Scan.findByIdAndDelete(req.params.id);
    if (!deletedScan) return res.status(404).json({ message: 'Scan not found.' });
    res.status(200).json({ message: 'Scan deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting scan.' });
  }
};