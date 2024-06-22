// routes/appointments.js

const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/agendamentoController');

router.post('/create', agendamentoController.createAgendamento);
router.get('/', agendamentoController.getAllAgendamentos);

module.exports = router;
