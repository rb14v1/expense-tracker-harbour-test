import React from 'react';
import { Expense, Category } from '../../types';
import ExpenseCard from '../../components/ExpenseCard';
import { useNavigate } from 'react-router-dom';

interface Props {
  expenses: Expense[];
  categories: Category[];
}

export default function RecentExpensesList({ expenses, categories }: Props) {
  const navigate = useNavigate();
  const recent = [...expenses].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <div className="recent-expenses-list">
      <h3 style={{ marginBottom: '12px' }}>Recent Expenses</h3>
      {recent.length === 0 && <p>No expenses yet.</p>}
      {recent.map(expense => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          category={categories.find(c => c.id === expense.category)}
          onClick={() => navigate(`/expenses/${expense.id}`)}
        />
      ))}
    </div>
  );
}