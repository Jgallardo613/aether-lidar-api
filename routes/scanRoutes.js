const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const requireLogin = require('../requireLogin');
const {
  getAllScans,
  getScanById,
  createScan,
  updateScan,
  deleteScan,
} = require('../controllers/scanController');

const scanValidation = [
  body('scan_id').notEmpty().withMessage('scan_id is required'),
  body('soldier_id').notEmpty().withMessage('soldier_id is required'),
  body('object_type').notEmpty().withMessage('object_type is required'),
  body('distance_m').notEmpty().withMessage('distance_m is required'),
  body('bearing').notEmpty().withMessage('bearing is required'),
  body('confidence').notEmpty().withMessage('confidence is required'),
  body('hazard_level').notEmpty().withMessage('hazard_level is required'),
];

router.get('/', getAllScans);
router.get('/:id', getScanById);
router.post('/', requireLogin, scanValidation, createScan);
router.put('/:id', requireLogin, scanValidation, updateScan);
router.delete('/:id', requireLogin, deleteScan);

module.exports = router;