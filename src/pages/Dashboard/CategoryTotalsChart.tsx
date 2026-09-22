import React from 'react';
import { Expense, Category } from '../../types';

interface Props {
  expenses: Expense[];
  categories: Category[];
}

export default function CategoryTotalsChart({ expenses, categories }: Props) {
  const totals = categories.map(cat => ({
    category: cat,
    total: expenses.filter(e => e.category === cat.id).reduce((sum, e) => sum + e.amount, 0),
  }));

  const max = Math.max(...totals.map(t => t.total), 1);

  return (
    <div className="category-totals-chart" style={{ marginBottom: '24px' }}>
      <h3 style={{ marginBottom: '12px' }}>Spending by Category</h3>
      {totals.map(({ category, total }) => (
        <div key={category.id} style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '2px' }}>
            <span>{category.name}</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={{ background: '#e5e7eb', borderRadius: '4px', height: '10px' }}>
            <div
              style={{
                background: category.color,
                width: `${(total / max) * 100}%`,
                height: '10px',
                borderRadius: '4px',
                transition: 'width 0.3s',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}