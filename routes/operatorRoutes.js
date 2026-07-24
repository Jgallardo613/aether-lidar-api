const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const requireLogin = require('../requireLogin');
const {
  getAllOperators,
  getOperatorById,
  createOperator,
  updateOperator,
  deleteOperator,
} = require('../controllers/operatorController');

const operatorValidation = [
  body('soldier_id').notEmpty().withMessage('soldier_id is required'),
  body('callsign').notEmpty().withMessage('callsign is required'),
  body('suit_status').notEmpty().withMessage('suit_status is required'),
  body('current_location').notEmpty().withMessage('current_location is required'),
  body('active_scan_range_m').notEmpty().withMessage('active_scan_range_m is required'),
];

router.get('/', getAllOperators);
router.get('/:id', getOperatorById);
router.post('/', requireLogin, operatorValidation, createOperator);
router.put('/:id', requireLogin, operatorValidation, updateOperator);
router.delete('/:id', requireLogin, deleteOperator);

module.exports = router;