// No arquivo do controlador que você está utilizando

/*const Funcionario = require('../model/funcionario');

// Função para lidar com o login
async function login(req, res) {
    const { usuario, senha } = req.body;

    try {
        const funcionario = await Funcionario.findByCredentials(usuario, senha);
        
        if (!funcionario) {
            // Se não encontrar um funcionário com as credenciais fornecidas
            res.render('autenticacao.html', { erro_login: true });
        } else {
            // Se encontrar, armazenar na sessão
            req.session.usuario = {
                id: funcionario.id,
                nome: funcionario.nome,
                usuario: funcionario.usuario
                // outros dados do funcionário que desejar armazenar na sessão
            };
            res.redirect('/atualizacao'); // Redirecionar para a página home após o login
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.render('autenticacao.html', { erro_login: true });
    }
}

module.exports = {
    login
};
*/

const Funcionario = require('../model/funcionario');

// Função para lidar com o login
async function login(req, res) {
    const { usuario, senha } = req.body;

    try {
        const funcionario = await Funcionario.findByCredentials(usuario, senha);
        
        if (!funcionario) {
            // Se não encontrar um funcionário com as credenciais fornecidas
            res.render('autenticacao.html', { erro_login: true });
        } else {
            // Se encontrar, armazenar na sessão
            req.session.usuario = {
                usuario: funcionario.usuario,
                senha: funcionario.senha
            };
            res.redirect('/atualizacao.html'); // Redirecionar para a página de atualização após o login
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.render('autenticacao.html', { erro_login: true });
    }
}

module.exports = {
    login
};
