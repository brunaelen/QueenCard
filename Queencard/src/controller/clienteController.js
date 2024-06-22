// clienteController.js

const Cliente = require('../model/cliente');

async function cadastrarCliente(req, res) {
    const { nome, dataNascimento, rgCpf, celular, genero } = req.body;

    try {
        // Criação do email padrão
        const email = `${nome.toLowerCase().replace(' ', '.')}@queencard.com`;
        
        // Criação da senha padrão
        const senha = gerarSenhaPadrao();

        // Criação do cliente no banco de dados
        const cliente = await Cliente.create({
            nome,
            dataNascimento,
            email,
            rgCpf,
            celular,
            genero
        });

        res.redirect('/pagina-sucesso'); // Redirecionar para a página de sucesso após o cadastro
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.render('cadastro.html', { erro_cadastro: true });
    }
}

// Função para gerar senha padrão
function gerarSenhaPadrao() {
    // Implemente lógica para gerar uma senha padrão fácil (por exemplo, "abc123")
    return 'abc123';
}

module.exports = {
    cadastrarCliente
};
