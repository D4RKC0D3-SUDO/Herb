'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Search,
  Leaf,
  Info,
  PhoneCall,
  Sparkles,
  HeartPulse,
  LogOut,
} from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/home', label: 'Home', icon: <Sparkles size={20} /> },
  { href: '/search', label: 'Search', icon: <Search size={20} /> },
  { href: '/remedies', label: 'Remedies', icon: <HeartPulse size={20} /> },
  { href: '/about', label: 'About', icon: <Info size={20} /> },
  { href: '/contacts', label: 'Contact', icon: <PhoneCall size={20} /> },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [expanded, setExpanded] = useState(false)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.replace('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <>
      {/* 🌿 Floating Logo */}
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 drop-shadow-lg transition-all">
          H🌿RB
        </h2>

      {/* ☰ Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 h-screen bg-gradient-to-br from-[#161622] via-[#1d1b33] to-[#0c0c23] text-white z-40 border-r border-purple-700/20 backdrop-blur-lg flex flex-col justify-between items-start transition-all duration-300 ease-in-out"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        animate={{ width: expanded ? 240 : 64 }}
      >
        {/* ☰ Icon Trigger (3 lines visual) */}
        <div className="flex items-center justify-center w-full h-16">
          <div className="flex flex-col justify-center gap-[5px] items-center">
            <div className="w-6 h-[2px] bg-purple-400" />
            <div className="w-6 h-[2px] bg-purple-400" />
            <div className="w-6 h-[2px] bg-purple-400" />
          </div>
        </div>

        {/* 🧭 Navigation */}
        <nav className="flex flex-col gap-2 px-2 py-4 w-full">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-3 py-2 px-3 w-full rounded-lg text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'bg-purple-700/40 ring-1 ring-purple-500 text-white border-purple-500 shadow'
                    : 'hover:bg-purple-700/10 text-gray-300 hover:text-purple-200'
                }`}
              >
                <span className="text-purple-300">{icon}</span>
                {expanded && (
                  <motion.span
                    initial={false}
                    animate={{ opacity: expanded ? 1 : 0 }}
                    className="whitespace-nowrap ml-2"
                  >
                    {label}
                  </motion.span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* 🔓 Logout */}
        <div className="p-4 w-full border-t border-purple-700/30">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 w-full rounded-md text-sm bg-red-500 hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            {expanded && (
              <motion.span
                initial={false}
                animate={{ opacity: expanded ? 1 : 0 }}
                className="ml-2"
              >
                Logout
              </motion.span>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  )
}
