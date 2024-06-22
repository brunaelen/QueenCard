const express = require('express');
const router = express.Router();
const funcionarioController = require('../controller/funcionarioController');

// Rota para lidar com o login
router.post('/login', funcionarioController.login);

module.exports = router;

