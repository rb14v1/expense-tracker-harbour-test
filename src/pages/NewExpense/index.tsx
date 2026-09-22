import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useExpenses, useCategories } from '../../store';
import { NewExpense as NewExpenseType } from '../../types';
import ExpenseForm from './ExpenseForm';

export function NewExpense() {
  const { add } = useExpenses();
  const { items: categories } = useCategories();
  const navigate = useNavigate();

  function handleSubmit(expense: NewExpenseType) {
    add(expense);
    navigate('/expenses');
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>New Expense</h1>
      <ExpenseForm categories={categories} onSubmit={handleSubmit} />
    </div>
  );
}

export default NewExpense;
