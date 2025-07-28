'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Search,
  Leaf,
  Info,
  PhoneCall,
  Sparkles,
  HeartPulse,
} from 'lucide-react'

const navLinks = [
  { href: '/home', label: 'Home', icon: <Sparkles size={20} /> },
  { href: '/search', label: 'Search', icon: <Search size={20} /> },
  { href: '/remedies', label: 'Remedies', icon: <HeartPulse size={20} /> },
  { href: '/about', label: 'About', icon: <Info size={20} /> },
  { href: '/contacts', label: 'Contact', icon: <PhoneCall size={20} /> },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 w-72 h-screen bg-gradient-to-br from-[#161622] via-[#1d1b33] to-[#0c0c23] text-white p-6 z-50 shadow-[inset_0_0_1px_rgba(255,255,255,0.05)] border-r border-purple-700/20 backdrop-blur-lg flex flex-col">
      {/* 🌿 Brand Header */}
      <div className="mb-10 text-center border-b border-purple-800/20 pb-6">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 drop-shadow-lg">
          🌿 HERB
        </h2>
       
      </div>

      {/* 🧭 Navigation Links */}
      <nav className="flex flex-col gap-3">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent ${
                isActive
                  ? 'bg-purple-700/40 text-white shadow-md ring-2 ring-purple-500 border-purple-500'
                  : 'hover:bg-purple-700/10 hover:border-purple-600 hover:shadow-sm hover:text-purple-200 text-gray-300'
              }`}
            >
              <span className={`text-purple-300 transition duration-150 ${isActive ? 'animate-pulse' : 'group-hover:text-purple-400'}`}>
                {icon}
              </span>
              {label}
            </Link>
          )
        })}
      </nav>

     
    </aside>
  )
}
