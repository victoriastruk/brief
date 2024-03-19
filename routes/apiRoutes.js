const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/submit-form', formController.submitForm);
router.get('/api/briefs', formController.getAllBriefs);
router.get('/api/briefs/:id/pdf', formController.downloadFormAsPDF);
router.delete('/api/briefs/:id', formController.deleteBrief);
module.exports = router;
