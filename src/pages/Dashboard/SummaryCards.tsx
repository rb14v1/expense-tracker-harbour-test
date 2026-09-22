import React from 'react';
import { Expense } from '../../types';

interface Props {
  expenses: Expense[];
}

export default function SummaryCards({ expenses }: Props) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const reimbursed = expenses.filter(e => e.reimbursed).reduce((sum, e) => sum + e.amount, 0);
  const pending = total - reimbursed;

  return (
    <div className="summary-cards" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      <div className="card" style={{ flex: 1, background: '#eff6ff', borderRadius: '8px', padding: '16px' }}>
        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Expenses</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>${total.toFixed(2)}</div>
      </div>
      <div className="card" style={{ flex: 1, background: '#f0fdf4', borderRadius: '8px', padding: '16px' }}>
        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Reimbursed</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>${reimbursed.toFixed(2)}</div>
      </div>
      <div className="card" style={{ flex: 1, background: '#fff7ed', borderRadius: '8px', padding: '16px' }}>
        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Pending</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f97316' }}>${pending.toFixed(2)}</div>
      </div>
    </div>
  );
}