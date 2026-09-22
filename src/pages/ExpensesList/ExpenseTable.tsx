import React from 'react';
import { Expense, Category } from '../../types';
import CategoryBadge from '../../components/CategoryBadge';
import { useNavigate } from 'react-router-dom';

interface Props {
  expenses: Expense[];
  categories: Category[];
  onDelete: (id: string) => void;
}

export default function ExpenseTable({ expenses, categories, onDelete }: Props) {
  const navigate = useNavigate();

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f9fafb' }}>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Title</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Amount</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Category</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Date</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Submitted By</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Reimbursed</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 && (
          <tr><td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>No expenses found.</td></tr>
        )}
        {expenses.map(expense => (
          <tr key={expense.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
            <td style={{ padding: '10px' }}>{expense.title}</td>
            <td style={{ padding: '10px' }}>${expense.amount.toFixed(2)}</td>
            <td style={{ padding: '10px' }}>
              <CategoryBadge category={categories.find(c => c.id === expense.category)} />
            </td>
            <td style={{ padding: '10px' }}>{expense.date}</td>
            <td style={{ padding: '10px' }}>{expense.submittedBy}</td>
            <td style={{ padding: '10px' }}>{expense.reimbursed ? 'Yes' : 'No'}</td>
            <td style={{ padding: '10px' }}>
              <button onClick={() => navigate(`/expenses/${expense.id}`)} style={{ marginRight: '8px' }}>View</button>
              <button onClick={() => navigate(`/expenses/${expense.id}/edit`)} style={{ marginRight: '8px' }}>Edit</button>
              <button onClick={() => onDelete(expense.id)} style={{ color: '#ef4444' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}