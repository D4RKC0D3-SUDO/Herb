'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/login')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1f1f3b] p-8 rounded-lg shadow-lg border border-purple-700 w-full max-w-md text-center"
      >
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">👋 Welcome, {user.email}</h2>
            <p className="text-sm text-gray-300 mb-6">
              You’re logged in and ready to explore natural wellness 🌱
            </p>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-md transition font-medium"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">You’re not logged in</h2>
            <p className="text-sm text-gray-300 mb-6">
              Access personalized remedies by joining the herbal circle 🍃
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push('/login')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition font-medium"
              >
                Log In
              </button>
              <button
                onClick={() => router.push('/signup')}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md transition font-medium"
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </motion.div>
    </main>
  )
}
