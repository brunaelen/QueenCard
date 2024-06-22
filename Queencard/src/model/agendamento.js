// models/Appointment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Client = require('./Client');
const Service = require('./Service');

const Appointment = sequelize.define('Agendamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horario: {
        type: DataTypes.TIME,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Appointment.belongsTo(Client, { foreignKey: 'clientId' });
Appointment.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = Agendamento;
