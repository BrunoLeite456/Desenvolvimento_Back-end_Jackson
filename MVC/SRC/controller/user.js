const User = require('../models/user.model');
const View = require('../views/user.view');

exports.getAll = (req, res) => {
    const users = User.getAll();
    res.status(200).json(View.renderUsers(users));
};

exports.getById = (req, res) => {
    const user = User.getById(Number(req.params.id));

    if (!user) {
        return res.status(404).json(View.error("Usuário não encontrado"));
    }

    res.status(200).json(View.renderUser(user));
};

exports.create = (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json(View.error("Dados inválidos"));
    }

    const user = User.create(email, password, name);

    if (!user) {
        return res.status(400).json(View.error("Email já cadastrado"));
    }

    res.status(201).json(View.renderUser(user));
};

exports.update = (req, res) => {
    const { email, password, name } = req.body;

    const user = User.update(
        Number(req.params.id),
        email,
        password,
        name
    );

    if (!user) {
        return res.status(404).json(View.error("Usuário não encontrado"));
    }

    res.status(200).json(View.renderUser(user));
};

exports.delete = (req, res) => {
    const deleted = User.delete(Number(req.params.id));

    if (!deleted) {
        return res.status(404).json(View.error("Usuário não encontrado"));
    }

    res.status(204).send();
};