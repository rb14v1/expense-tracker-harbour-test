import React, { useState } from 'react';
import { useCategories } from '../../store';
import { Category, NewCategory } from '../../types';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

export function Categories() {
  const { items, add, update, remove } = useCategories();
  const [editing, setEditing] = useState<Category | null>(null);

  function handleSubmit(category: NewCategory) {
    if (editing) {
      update(editing.id, category);
      setEditing(null);
    } else {
      add(category);
    }
  }

  function handleEdit(category: Category) {
    setEditing(category);
  }

  function handleDelete(id: string) {
    remove(id);
  }

  function handleCancel() {
    setEditing(null);
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Categories</h1>
      <CategoryForm editing={editing} onSubmit={handleSubmit} onCancel={editing ? handleCancel : undefined} />
      <CategoryList categories={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Categories;
