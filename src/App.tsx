import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { ExpensesList } from './pages/ExpensesList'
import { NewExpense } from './pages/NewExpense'
import { ExpenseDetail } from './pages/ExpenseDetail'
import { EditExpense } from './pages/EditExpense'
import { Categories } from './pages/Categories'
import { NotFound } from './pages/NotFound'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-v1-cream">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={"Expense Tracker"} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<ExpensesList />} />
            <Route path="/expenses/new" element={<NewExpense />} />
            <Route path="/expenses/:id" element={<ExpenseDetail />} />
            <Route path="/expenses/:id/edit" element={<EditExpense />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}