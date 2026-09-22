import React from 'react';
import { Category } from '../types';

interface Props {
  category: Category | undefined;
}

export default function CategoryBadge({ category }: Props) {
  if (!category) return <span className="badge">Unknown</span>;
  return (
    <span
      className="category-badge"
      style={{
        backgroundColor: category.color,
        color: '#fff',
        padding: '2px 10px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        fontWeight: 600,
      }}
    >
      {category.name}
    </span>
  );
}