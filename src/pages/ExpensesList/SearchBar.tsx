import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: '8px 12px',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        fontSize: '0.95rem',
        width: '100%',
        marginBottom: '12px',
      }}
    />
  );
}