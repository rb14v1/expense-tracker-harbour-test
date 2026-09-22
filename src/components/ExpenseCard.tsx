import React from 'react';
import { Expense, Category } from '../types';
import CategoryBadge from './CategoryBadge';

interface Props {
  expense: Expense;
  category: Category | undefined;
  onClick?: () => void;
}

export default function ExpenseCard({ expense, category, onClick }: Props) {
  return (
    <div
      className="expense-card"
      onClick={onClick}
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '8px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>{expense.title}</div>
        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{expense.date} · {expense.submittedBy}</div>
        <CategoryBadge category={category} />
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>${expense.amount.toFixed(2)}</div>
        {expense.reimbursed && <div style={{ color: '#10b981', fontSize: '0.8rem' }}>Reimbursed</div>}
      </div>
    </div>
  );
}