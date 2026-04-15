import express from 'express';
import expenseRoutes from './routes/expenseRoutes.js';

const app = express();

app.use(express.json()); // IMPORTANTE

app.use('/expenses', expenseRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});