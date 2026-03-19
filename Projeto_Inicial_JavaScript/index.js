// Incialeza o Express
const express = require('express');

// Intanciar o app
const app = express();

// Definir porta
const PORT = 3000;

// Criar função de "middleware" da requisição GET
function middleware(req, res) {
    res.send("olá Mundo!");
}

// Criar rota simples de GET (HTTP GET)
app.get('/', middleware);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log("Servidor foi iniciado na porta: ", PORT);
})
