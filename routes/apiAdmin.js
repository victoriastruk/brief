const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.delete('/api/briefs/:id', formController.deleteBrief);
router.get('/api/briefs', formController.getAllBriefs);
router.get('/api/briefs/:id/pdf', formController.downloadFormAsPDF);

module.exports = router;