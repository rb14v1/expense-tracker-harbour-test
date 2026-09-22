import React, { useState } from 'react';
import { Expense, Category, NewExpense } from '../../types';

interface Props {
  expense: Expense;
  categories: Category[];
  onSubmit: (expense: NewExpense) => void;
}

export default function ExpenseForm({ expense, categories, onSubmit }: Props) {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(String(expense.amount));
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);
  const [reimbursed, setReimbursed] = useState(expense.reimbursed);
  const [submittedBy, setSubmittedBy] = useState(expense.submittedBy);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({
      title,
      amount: parseFloat(amount),
      category,
      date,
      reimbursed,
      submittedBy,
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          min="0"
          step="0.01"
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        >
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div>
        <label>Submitted By</label>
        <input
          type="text"
          value={submittedBy}
          onChange={e => setSubmittedBy(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={reimbursed}
            onChange={e => setReimbursed(e.target.checked)}
          />
          Reimbursed
        </label>
      </div>
      <div>
        <button type="submit" style={{ padding: '10px 24px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Save Changes
        </button>
      </div>
    </form>
  );
}