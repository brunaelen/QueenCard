// controllers/authController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user && await bcrypt.compare(senha, user.senha)) {
            req.session.userId = user.id;
            res.redirect('/home'); // Redirecionar para a página principal após o login
        } else {
            res.render('login.html', { erro_login: true });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.render('login.html', { erro_login: true });
    }
};

const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home');
        }
        res.clearCookie('sid');
        res.redirect('/login');
    });
};

module.exports = {
    login,
    logout
};
