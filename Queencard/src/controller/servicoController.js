// controllers/serviceController.js

const Service = require('../models/servico');

async function createService(req, res) {
    const { nome } = req.body;
    try {
        const service = await Service.create({ nome });
        res.json(service);
    } catch (error) {
        console.error('Erro ao criar serviço:', error);
        res.status(500).json({ error: 'Erro ao criar serviço' });
    }
}

async function getAllServices(req, res) {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        console.error('Erro ao listar serviços:', error);
        res.status(500).json({ error: 'Erro ao listar serviços' });
    }
}

module.exports = {
    createService,
    getAllServices
};
