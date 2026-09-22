import { Link } from 'react-router-dom'

interface NavItem {
  path: string
  label: string
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems: NavItem[] = [
    { path: '/', label: 'Dashboard' },
    { path: '/expenses', label: 'Expenses List' },
    { path: '/expenses/new', label: 'New Expense' },
    { path: '/categories', label: 'Categories' }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside className={'fixed top-0 left-0 h-full w-64 bg-v1-dark z-40 transform transition-transform duration-300 ease-in-out ' + (isOpen ? 'translate-x-0' : '-translate-x-full') + ' lg:translate-x-0 lg:static lg:z-auto'}>
        <div className="flex flex-col h-full p-6">
          <div className="text-white font-bold mb-8">{"Expense Tracker"}</div>
          <nav className="flex-1 space-y-2">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={onClose} className="block text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded transition">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}