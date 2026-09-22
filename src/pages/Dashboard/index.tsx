import React from 'react';
import { useExpenses } from '../../store';
import { useCategories } from '../../store';
import SummaryCards from './SummaryCards';
import CategoryTotalsChart from './CategoryTotalsChart';
import RecentExpensesList from './RecentExpensesList';

export function Dashboard() {
  const { items: expenses } = useExpenses();
  const { items: categories } = useCategories();

  return (
    <div className="dashboard" style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Dashboard</h1>
      <SummaryCards expenses={expenses} />
      <CategoryTotalsChart expenses={expenses} categories={categories} />
      <RecentExpensesList expenses={expenses} categories={categories} />
    </div>
  );
}

export default Dashboard;
