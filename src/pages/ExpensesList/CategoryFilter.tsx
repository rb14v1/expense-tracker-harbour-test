import React from 'react';
import { Category } from '../../types';

interface Props {
  categories: Category[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: Props) {
  return (
    <select
      value={selected}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: '8px 12px',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        fontSize: '0.95rem',
        marginBottom: '12px',
      }}
    >
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
}