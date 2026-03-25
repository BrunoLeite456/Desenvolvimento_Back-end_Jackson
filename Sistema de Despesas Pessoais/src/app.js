const express = require("express");
const Expense = require("./models/expenses");

const app = express();
app.use(express.json());

// CREATE
app.post("/expenses", (req, res) => {
  try {
    const expense = Expense.create(req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// LIST
app.get("/expenses", (req, res) => {
  let expenses = Expense.getAll();
  const { category, date } = req.query;

  if (category) {
    expenses = expenses.filter(
      e => (e.category || "").toLowerCase() === category.toLowerCase()
    );
  }

  if (date) {
    expenses = expenses.filter(e => e.date === date);
  }

  res.json(expenses);
});

// GET BY ID
app.get("/expenses/:id", (req, res) => {
  const expense = Expense.getById(req.params.id);

  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json(expense);
});

// UPDATE
app.put("/expenses/:id", (req, res) => {
  const updated = Expense.update(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json(updated);
});

// DELETE
app.delete("/expenses/:id", (req, res) => {
  const success = Expense.delete(req.params.id);

  if (!success) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.sendStatus(204);
});

// TOTAL
app.get("/expenses/summary/total", (req, res) => {
  res.json({ total: Expense.getTotal() });
});

// TOTAL POR CATEGORIA
app.get("/expenses/summary/category", (req, res) => {
  res.json(Expense.getByCategory());
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});