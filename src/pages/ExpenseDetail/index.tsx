import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExpenses, useCategories } from '../../store';
import ExpenseDetailCard from './ExpenseDetailCard';
import ReimburseToggle from './ReimburseToggle';

export function ExpenseDetail() {
  const { id } = useParams<{ id: string }>();
  const { items: expenses, update, remove } = useExpenses();
  const { items: categories } = useCategories();
  const navigate = useNavigate();

  const expense = expenses.find(e => e.id === id);
  const category = categories.find(c => c.id === expense?.category);

  if (!expense) {
    return <div style={{ padding: '24px' }}>Expense not found.</div>;
  }

  function handleToggleReimbursed() {
    update(expense!.id, { reimbursed: !expense!.reimbursed });
  }

  function handleDelete() {
    remove(expense!.id);
    navigate('/expenses');
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Expense Detail</h1>
      <ExpenseDetailCard expense={expense} category={category} />
      <ReimburseToggle reimbursed={expense.reimbursed} onToggle={handleToggleReimbursed} />
      <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate(`/expenses/${expense.id}/edit`)}
          style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseDetail;
