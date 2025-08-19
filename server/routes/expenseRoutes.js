import express from 'express'
import { addExpense, deleteExpense, downloadExpenseExcel, getAllExpense, getOneExpense } from '../controllers/expenseController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/add-expense',protect, addExpense)
router.get('/my-expense',protect, getAllExpense)
router.get('/:id',protect, getOneExpense)
router.delete('/:id',protect, deleteExpense)
router.get('/downloadExcel',protect, downloadExpenseExcel)

export default router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTRiZGY3MDNlY2YxMGE5MWUxNDc2NyIsImlhdCI6MTc1NTYyOTE3MiwiZXhwIjoxNzU2MjMzOTcyfQ.qtlxwDuVriyXofkFimsWUGgoTsrq3yCLSvBJrGc2ecQ