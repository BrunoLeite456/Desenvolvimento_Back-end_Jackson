const express = require('express');
const User = require('./user');
 
const app = express();
 
app.use(express.json());
 
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
 
app.get('/user', (req, res) => {
    const users = User.getAll();
 
    res.status(200).json(users);
});
app.post('/user', (req, res) => {
    const {email, password, name} = req.body;
 
    const user = User.create(email, password, name);
 
    res.status(201).json(user);
});
app.put();
app.delete();
 
const PORT = 8080;
app.listen(PORT, () => {
    console.info(`Servidor está rodando na porta ${PORT}`)
});