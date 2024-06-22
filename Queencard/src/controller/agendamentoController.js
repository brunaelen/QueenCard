// controllers/appointmentController.js

const Appointment = require('../models/Appointment');

async function createAppointment(req, res) {
    const { clientId, serviceId, data, horario, status } = req.body;
    try {
        const appointment = await Appointment.create({ clientId, serviceId, data, horario, status });
        res.json(appointment);
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        res.status(500).json({ error: 'Erro ao criar agendamento' });
    }
}

async function getAllAppointments(req, res) {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        console.error('Erro ao listar agendamentos:', error);
        res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
}

module.exports = {
    createAppointment,
    getAllAppointments
};
