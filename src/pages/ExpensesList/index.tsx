import React, { useState } from 'react';
import { useExpenses } from '../../store';
import { useCategories } from '../../store';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ExpenseTable from './ExpenseTable';

export function ExpensesList() {
  const { items: expenses, remove } = useExpenses();
  const { items: categories } = useCategories();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filtered = expenses.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.submittedBy.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === '' || e.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h1>Expenses</h1>
        <a href="/expenses/new" style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          + New Expense
        </a>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
        <div style={{ flex: 1 }}>
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <CategoryFilter categories={categories} selected={categoryFilter} onChange={setCategoryFilter} />
      </div>
      <ExpenseTable expenses={filtered} categories={categories} onDelete={remove} />
    </div>
  );
}

export default ExpensesList;
