import React from 'react';

interface Props {
  reimbursed: boolean;
  onToggle: () => void;
}

export default function ReimburseToggle({ reimbursed, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      style={{
        marginTop: '16px',
        padding: '10px 24px',
        background: reimbursed ? '#f97316' : '#10b981',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 600,
      }}
    >
      {reimbursed ? 'Mark as Not Reimbursed' : 'Mark as Reimbursed'}
    </button>
  );
}