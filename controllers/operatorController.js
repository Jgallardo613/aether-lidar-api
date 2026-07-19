const Operator = require('../models/operator');
const { validationResult } = require('express-validator');

exports.getAllOperators = async (req, res) => {
  try {
    const operators = await Operator.find();
    res.status(200).json(operators);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving operators.' });
  }
};

exports.getOperatorById = async (req, res) => {
  try {
    const operator = await Operator.findById(req.params.id);
    if (!operator) return res.status(404).json({ message: 'Operator not found.' });
    res.status(200).json(operator);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving operator.' });
  }
};

exports.createOperator = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const operator = new Operator(req.body);
    const savedOperator = await operator.save();
    res.status(201).json(savedOperator);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error creating operator.' });
  }
};

exports.updateOperator = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const updatedOperator = await Operator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOperator) return res.status(404).json({ message: 'Operator not found.' });
    res.status(200).json(updatedOperator);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error updating operator.' });
  }
};

exports.deleteOperator = async (req, res) => {
  try {
    const deletedOperator = await Operator.findByIdAndDelete(req.params.id);
    if (!deletedOperator) return res.status(404).json({ message: 'Operator not found.' });
    res.status(200).json({ message: 'Operator deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting operator.' });
  }
};