import React from 'react';
import { Expense, Category } from '../../types';
import CategoryBadge from '../../components/CategoryBadge';

interface Props {
  expense: Expense;
  category: Category | undefined;
}

export default function ExpenseDetailCard({ expense, category }: Props) {
  return (
    <div className="expense-detail-card" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', maxWidth: '480px' }}>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Title</div>
        <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>{expense.title}</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Amount</div>
        <div style={{ fontWeight: 600 }}>${expense.amount.toFixed(2)}</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Category</div>
        <CategoryBadge category={category} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Date</div>
        <div>{expense.date}</div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Submitted By</div>
        <div>{expense.submittedBy}</div>
      </div>
      <div>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '2px' }}>Reimbursed</div>
        <div style={{ color: expense.reimbursed ? '#10b981' : '#f97316', fontWeight: 600 }}>
          {expense.reimbursed ? 'Yes' : 'No'}
        </div>
      </div>
    </div>
  );
}