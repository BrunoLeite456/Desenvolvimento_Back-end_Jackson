const express = require('express');
const User = require('./user');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Olá Mundo!");
})

app.get('/user', (req, res) => {
    const users = User.getAll();

    res.status(200).json(users);
})
app.get('/user/:id', (req, res) => {
    const user = User.getById(Number(req.params.id));

    res.status(200).json(user);
})
app.post('/user', (req, res) => {
    const { email, password, name } = req.body

    const user = User.create(email, password, name);

    res.status(201).json(user);
})
app.put('/user/:id', (req, res) => {
    const { email, password, name } = req.body

    const user = User.update(
        Number(req.params.id),
        email,
        password,
        name
    );

    res.status(200).json(user);
})
app.delete('/user/:id', (req, res) => {
    User.delete(Number(req.params.id));

    res.status(204).json();
})

app.listen(1080, () => {
    console.info(`Servidor rodando na porta ${1080}`);
})