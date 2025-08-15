import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { Sparkles, Info, HeartPulse, PhoneCall, LogOut } from 'lucide-react'

const navLinks = [
  { href: '/home', label: 'Home', icon: <Sparkles size={20} /> },
  { href: '/about', label: 'About', icon: <Info size={20} /> },
  { href: '/search', label: 'Remedies', icon: <HeartPulse size={20} /> },
  { href: '/contacts', label: 'Contact', icon: <PhoneCall size={20} /> },
]

function Navbar() {
  const [user, setUser] = useState(null)
  const [paddingValue, setPaddingValue] = useState('16px')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <div
      style={{ padding: paddingValue }}
      className="w-full bg-gradient-to-r from-[#161622] via-[#1d1b33] to-[#0c0c23] text-white flex items-center justify-between shadow-md border-b border-purple-700/30"
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400">
          H🌿RB
        </h1>
      </div>

      {/* Navigation Links */}
      {user && (
        <div className="flex items-center gap-6">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-8 py-2 rounded hover:bg-purple-700/20 transition font-medium"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Logout Icon Only */}
      {user && (
        <button
          onClick={handleLogout}
          className="p-2 bg-red-500 hover:bg-red-600 rounded-full transition text-white"
        >
          <LogOut size={20} />
        </button>
      )}

      {/* If user not logged in, show Login / Signup */}
      {!user && (
        <div className="flex items-center gap-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
