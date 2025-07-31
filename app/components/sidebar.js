'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Info,
  PhoneCall,
  Sparkles,
  HeartPulse,
  LogOut,
} from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

const navLinks = [
  { href: '/home', label: 'Home', icon: <Sparkles size={22} className="text-purple-300" /> },
  { href: '/about', label: 'About', icon: <Info size={22} className="text-blue-300" /> },
  { href: '/search', label: 'Remedies', icon: <HeartPulse size={22} className="text-green-300" /> },
  { href: '/contacts', label: 'Contact', icon: <PhoneCall size={22} className="text-yellow-300" /> },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.replace('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 z-40 bg-gradient-to-br from-[#161622] via-[#1d1b33] to-[#0c0c23] text-white border-r border-purple-700/30 flex flex-col justify-between">
      
      {/* 🌿 Logo */}
      <div className="px-6 pt-6 pb-4 text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 drop-shadow">
          H🌿RB
        </h2>
      </div>

      {/* 🔗 Navigation */}
      <nav className="flex flex-col gap-4 px-4">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition ${
                isActive
                  ? 'bg-purple-600/40 ring-1 ring-purple-500 text-white shadow'
                  : 'hover:bg-purple-700/10 text-gray-300 hover:text-purple-200'
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* 🔓 Logout Icon Only */}
      <button
  onClick={async () => {
    await signOut(auth)
    router.replace('/')
  }}
  className="fixed top-16 right-4 z-50 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
>
  <LogOut size={18} />
</button>
    </aside>
  )
}
