const Sequelize = require('sequelize');
const database = require('../db');

const Funcionario = database.define('funcionario', {
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
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Garante que o usuário seja único
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Método para inicializar alguns funcionários pré-definidos
Funcionario.inicializarFuncionario = async function() {
    try {
        // Verifica se já existem funcionários na base de dados
        const count = await Funcionario.count();
        if (count === 0) {
            // Se não existem funcionários, cria os funcionários pré-definidos
            await Funcionario.bulkCreate([
                { nome: 'Juliana', usuario: 'juliana.queen', senha: 'ju123' },
                { nome: 'Lucas', usuario: 'lucas.queen', senha: 'lu123' },
                { nome: 'Isabela', usuario: 'isabela.queen', senha: 'isa123' }
            ]);
            console.log('Funcionários pré-definidos criados com sucesso.');
        } else {
            console.log('Já existem funcionários na base de dados.');
        }
    } catch (error) {
        console.error('Erro ao inicializar funcionários pré-definidos:', error);
    }

    // No arquivo '../model/funcionario.js'

// Adicionar método estático para encontrar funcionário por usuário e senha
    Funcionario.findByCredentials = async function(usuario, senha) {
        try {
            const funcionario = await Funcionario.findOne({
                where: {
                    usuario: usuario,
                    senha: senha
                }
            });
            return funcionario;
        } catch (error) {
            console.error('Erro ao buscar funcionário por credenciais:', error);
            throw error;
        }
    };

};

module.exports = Funcionario;
