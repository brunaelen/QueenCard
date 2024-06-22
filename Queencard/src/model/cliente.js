// cliente.js

const Sequelize = require('sequelize');
const database = require('../db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY, // Apenas a data, sem horário
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    rgCpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Método para inicializar clientes pré-definidos (não é necessário neste caso)

module.exports = Cliente;
