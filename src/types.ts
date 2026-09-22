// Generated from the specification. Do not edit by hand.

export interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
  note?: string
  reimbursed: boolean
  submittedBy: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  color?: string
  budget?: number
  createdAt: string
}

export type NewExpense = Omit<Expense, 'id' | 'createdAt'>
export type NewCategory = Omit<Category, 'id' | 'createdAt'>
