'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/search')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text">
          HERB Login
        </h1>

        <form onSubmit={handleLogin} className="bg-[#1b1b2f] rounded-xl p-6 shadow-lg space-y-5">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#262649] border border-purple-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#262649] border border-purple-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-purple-300 cursor-pointer text-sm"
            >
              {showPassword ? '🙈 Hide' : '👁 Show'}
            </span>
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold transition-colors duration-300 ${
              loading
                ? 'bg-purple-900 cursor-not-allowed'
                : 'bg-purple-700 hover:bg-purple-800'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-purple-300 mt-6">
          No account?{' '}
          <Link href="/signup" className="underline hover:text-purple-500 transition">
            Sign up
          </Link>
        </p>
      </motion.div>
    </main>
  )
}
