const router = require('express').Router();
const { body } = require('express-validator');
const scanController = require('../controllers/scanController');

const scanValidation = [
  body('scan_id').isNumeric().withMessage('scan_id must be a number'),
  body('soldier_id').isNumeric().withMessage('soldier_id must be a number'),
  body('object_type').notEmpty().withMessage('object_type is required'),
  body('distance_m').isNumeric().withMessage('distance_m must be a number'),
  body('bearing').isNumeric().withMessage('bearing must be a number'),
  body('confidence').isNumeric().withMessage('confidence must be a number'),
  body('hazard_level').notEmpty().withMessage('hazard_level is required'),
];

router.get('/', scanController.getAllScans);
router.get('/:id', scanController.getScanById);
router.post('/', scanValidation, scanController.createScan);
router.put('/:id', scanValidation, scanController.updateScan);
router.delete('/:id', scanController.deleteScan);

module.exports = router;