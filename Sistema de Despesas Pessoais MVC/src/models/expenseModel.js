import fs from 'fs';
import path from 'path';

// caminho absoluto correto
const __dirname = new URL('.', import.meta.url).pathname;
const filePath = path.join(__dirname, '../data/expenses.json');

export default class ExpenseModel {

    static getAll() {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '[]');
        }

        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }

    static saveAll(expenses) {
        fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2));
    }

    static create(expense) {
        const expenses = this.getAll();
        expenses.push(expense);
        this.saveAll(expenses);
        return expense;
    }

    static findById(id) {
        const expenses = this.getAll();
        return expenses.find(e => e.id === id);
    }
}