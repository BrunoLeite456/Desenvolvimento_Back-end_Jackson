const express = require('express');
const userController = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API MVC funcionando 🚀");
});

app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);
app.post('/users', userController.create);
app.put('/users/:id', userController.update);
app.delete('/users/:id', userController.delete);

app.listen(1080, () => {
    console.log("Servidor rodando na porta 1080");
});