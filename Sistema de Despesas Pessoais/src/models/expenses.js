const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/expenses.json");

class Expense {
  getAll() {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath));
  }

  saveAll(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  getById(id) {
    const expenses = this.getAll();
    return expenses.find(e => e.id === id);
  }

  create(data) {
    if (!data.title) {
      throw new Error("Title is required");
    }

    if (typeof data.amount !== "number" || data.amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    if (data.date && new Date(data.date) > new Date()) {
      throw new Error("Date cannot be in the future");
    }

    const expenses = this.getAll();

    const newExpense = {
      id: `exp_${Date.now()}`,
      title: data.title,
      amount: data.amount,
      category: data.category || "Sem Categoria",
      date: data.date || null,
      description: data.description || "",
      createdAt: new Date().toISOString()
    };

    expenses.push(newExpense);
    this.saveAll(expenses);

    return newExpense;
  }

  update(id, data) {
    const expenses = this.getAll();
    const index = expenses.findIndex(e => e.id === id);

    if (index === -1) return null;

    expenses[index] = {
      ...expenses[index],
      ...data
    };

    this.saveAll(expenses);
    return expenses[index];
  }

  delete(id) {
    const expenses = this.getAll();
    const index = expenses.findIndex(e => e.id === id);

    if (index === -1) return false;

    expenses.splice(index, 1);
    this.saveAll(expenses);

    return true;
  }

  getTotal() {
    return this.getAll().reduce((acc, e) => acc + e.amount, 0);
  }

  getByCategory() {
    return this.getAll().reduce((acc, e) => {
      const cat = e.category || "Sem Categoria";

      if (!acc[cat]) acc[cat] = 0;
      acc[cat] += e.amount;

      return acc;
    }, {});
  }
}

module.exports = new Expense();