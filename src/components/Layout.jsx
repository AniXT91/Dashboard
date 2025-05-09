import { useState } from "react"
import { AppSidebar } from "./AppSidebar"
import Navbar from "./dashboard/Navbar"

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen min-w-screen bg-white">
      {/* Sidebar: collapsible width */}
      <aside
        className="bg-white border-r transition-all duration-200 ease-in-out flex-none overflow-hidden"
        style={{ width: sidebarOpen ? "16rem" : "0" }}
      >
        {sidebarOpen && <AppSidebar />}
      </aside>

      {/* Main area: Navbar + content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(open => !open)} />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
