import express from 'express';
import ExpenseController from '../controllers/expenseController.js';

const router = express.Router();

router.get('/', ExpenseController.getAll);
router.get('/:id', ExpenseController.getById);
router.post('/', ExpenseController.create);

export default router;