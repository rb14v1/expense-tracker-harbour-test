import React, { useState, useEffect } from 'react';
import { Category, NewCategory } from '../../types';

interface Props {
  editing?: Category | null;
  onSubmit: (category: NewCategory) => void;
  onCancel?: () => void;
}

export default function CategoryForm({ editing, onSubmit, onCancel }: Props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#3b82f6');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setColor(editing.color ?? '#3b82f6');
      setBudget(editing.budget !== undefined ? String(editing.budget) : '');
    } else {
      setName('');
      setColor('#3b82f6');
      setBudget('');
    }
  }, [editing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({
      name,
      color,
      budget: budget ? parseFloat(budget) : undefined,
    });
    setName('');
    setColor('#3b82f6');
    setBudget('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', marginBottom: '24px' }}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div>
        <label>Color</label>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          required
          style={{ display: 'block', padding: '4px', border: '1px solid #e5e7eb', borderRadius: '6px', height: '40px', width: '80px' }}
        />
      </div>
      <div>
        <label>Budget</label>
        <input
          type="number"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          min="0"
          step="0.01"
          style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" style={{ padding: '10px 24px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {editing ? 'Update Category' : 'Add Category'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={{ padding: '10px 24px', background: '#e5e7eb', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}