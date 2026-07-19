const router = require('express').Router();
const { body } = require('express-validator');
const operatorController = require('../controllers/operatorController');

const operatorValidation = [
  body('soldier_id').isNumeric().withMessage('soldier_id must be a number'),
  body('callsign').notEmpty().withMessage('callsign is required'),
  body('suit_status').notEmpty().withMessage('suit_status is required'),
  body('current_location').notEmpty().withMessage('current_location is required'),
  body('active_scan_range_m').isNumeric().withMessage('active_scan_range_m must be a number'),
];

router.get('/', operatorController.getAllOperators);
router.get('/:id', operatorController.getOperatorById);
router.post('/', operatorValidation, operatorController.createOperator);
router.put('/:id', operatorValidation, operatorController.updateOperator);
router.delete('/:id', operatorController.deleteOperator);

module.exports = router;