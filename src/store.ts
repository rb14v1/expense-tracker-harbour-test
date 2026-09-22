// Generated from the specification. Do not edit by hand.
//
// One module-level state object shared by every component. Reads go through useSyncExternalStore so
// each consumer re-renders on change; writes persist to localStorage synchronously inside the
// action, so nothing is lost when a page navigates away in the same handler that created a record.

import { useCallback, useSyncExternalStore } from 'react'
import type { Expense, NewExpense, Category, NewCategory } from './types'
import { SEED } from './data/seed'

const STORAGE_KEY = 'expense-tracker.state'

export interface StoreState {
  expenses: Expense[]
  categories: Category[]
}

const EMPTY: StoreState = {
  expenses: [],
  categories: []
}

function load(): StoreState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    // Seed only on a cold start. Applying it on every load would bring back deleted records.
    if (!raw) return { ...EMPTY, ...SEED }
    return { ...EMPTY, ...(JSON.parse(raw) as Partial<StoreState>) }
  } catch {
    return { ...EMPTY, ...SEED }
  }
}

let state: StoreState = load()
const listeners = new Set<() => void>()

function getState(): StoreState {
  return state
}

function setState(next: StoreState): void {
  state = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage full or blocked — keep the in-memory state usable rather than throwing at the user.
  }
  listeners.forEach(l => l())
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function newId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export function useExpenses() {
  const items = useSyncExternalStore(subscribe, () => getState().expenses, () => getState().expenses)

  const add = useCallback((draft: NewExpense): Expense => {
    const created = { ...draft, id: newId(), createdAt: new Date().toISOString() } as Expense
    setState({ ...getState(), expenses: [created, ...getState().expenses] })
    return created
  }, [])

  const update = useCallback((id: string, patch: Partial<Expense>) => {
    setState({ ...getState(), expenses: getState().expenses.map(r => (r.id === id ? { ...r, ...patch } : r)) })
  }, [])

  const remove = useCallback((id: string) => {
    setState({ ...getState(), expenses: getState().expenses.filter(r => r.id !== id) })
  }, [])

  const get = useCallback((id: string | undefined) => (id ? getState().expenses.find(r => r.id === id) : undefined), [items])

  return { items, add, update, remove, get }
}

export function useCategories() {
  const items = useSyncExternalStore(subscribe, () => getState().categories, () => getState().categories)

  const add = useCallback((draft: NewCategory): Category => {
    const created = { ...draft, id: newId(), createdAt: new Date().toISOString() } as Category
    setState({ ...getState(), categories: [created, ...getState().categories] })
    return created
  }, [])

  const update = useCallback((id: string, patch: Partial<Category>) => {
    setState({ ...getState(), categories: getState().categories.map(r => (r.id === id ? { ...r, ...patch } : r)) })
  }, [])

  const remove = useCallback((id: string) => {
    setState({ ...getState(), categories: getState().categories.filter(r => r.id !== id) })
  }, [])

  const get = useCallback((id: string | undefined) => (id ? getState().categories.find(r => r.id === id) : undefined), [items])

  return { items, add, update, remove, get }
}
