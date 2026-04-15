import ExpenseModel from '../models/expenseModel.js';

export default class ExpenseController {

    static getAll(req, res) {
        const expenses = ExpenseModel.getAll();
        res.json(expenses);
    }

    static getById(req, res) {
        const { id } = req.params;
        const expense = ExpenseModel.findById(id);

        if (!expense) {
            return res.status(404).json({ message: "Despesa não encontrada" });
        }

        res.json(expense);
    }

    static create(req, res) {
        const { title, category, date, description } = req.body;

        if (!title || !category || !date) {
            return res.status(400).json({
                message: "Campos obrigatórios: title, category, date"
            });
        }

        const newExpense = {
            id: String(Date.now()), // gera id automático
            title,
            category,
            date,
            description
        };

        ExpenseModel.create(newExpense);

        res.status(201).json(newExpense);
    }
}