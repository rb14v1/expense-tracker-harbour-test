import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExpenses, useCategories } from '../../store';
import { NewExpense } from '../../types';
import ExpenseForm from './ExpenseForm';

export function EditExpense() {
  const { id } = useParams<{ id: string }>();
  const { items: expenses, update } = useExpenses();
  const { items: categories } = useCategories();
  const navigate = useNavigate();

  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return <div style={{ padding: '24px' }}>Expense not found.</div>;
  }

  function handleSubmit(updated: NewExpense) {
    update(expense!.id, updated);
    navigate(`/expenses/${expense!.id}`);
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Edit Expense</h1>
      <ExpenseForm expense={expense} categories={categories} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditExpense;
