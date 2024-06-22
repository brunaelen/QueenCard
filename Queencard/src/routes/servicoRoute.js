// routes/services.js

const express = require('express');
const router = express.Router();
const serviceController = require('../controller/servicoController');

router.post('/create', serviceController.createService);
router.get('/', serviceController.getAllServices);

module.exports = router;
