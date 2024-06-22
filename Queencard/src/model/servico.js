// models/Service.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Service = sequelize.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Service;
