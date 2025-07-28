'use client'

import { useState } from 'react'
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SignUp() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      router.push('/')
    } catch (err) {
      setError(err.message.replace('Firebase:', '').trim())
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1f1f3b] p-8 rounded-lg shadow-xl w-full max-w-md border border-purple-600"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-400">🌿 Create Your Account</h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#2a2a45] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#2a2a45] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-400"
            >
              ⚠️ {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition text-white font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-400">
          By signing up, you agree to our mystical terms of service and the herbal privacy ritual 🌱.
        </p>
      </motion.div>
    </main>
  )
}
