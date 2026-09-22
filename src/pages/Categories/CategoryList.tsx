import React from 'react';
import { Category } from '../../types';

interface Props {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

export default function CategoryList({ categories, onEdit, onDelete }: Props) {
  return (
    <div className="category-list" style={{ marginBottom: '24px' }}>
      {categories.length === 0 && <p>No categories yet.</p>}
      {categories.map(cat => (
        <div
          key={cat.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            marginBottom: '8px',
            background: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: cat.color }} />
            <span style={{ fontWeight: 600 }}>{cat.name}</span>
            {cat.budget !== undefined && (
              <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Budget: ${cat.budget}</span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => onEdit(cat)} style={{ padding: '4px 12px', borderRadius: '4px', border: '1px solid #e5e7eb', cursor: 'pointer' }}>Edit</button>
            <button onClick={() => onDelete(cat.id)} style={{ padding: '4px 12px', borderRadius: '4px', border: 'none', background: '#ef4444', color: '#fff', cursor: 'pointer' }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}