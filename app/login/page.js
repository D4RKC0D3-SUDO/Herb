'use client'; // Because this login page wants to live dangerously on the client side.

import { useState } from 'react' // React’s built-in emotional rollercoaster.
import { useRouter } from 'next/navigation' // GPS for your app. No wrong turns allowed.
import { signInWithEmailAndPassword } from 'firebase/auth' // Firebase’s way of saying “prove you’re legit.”
import { auth } from '@/firebase/firebase' // Your personal Firebase bouncer.
import Link from 'next/link' // Because buttons are too basic for navigation.
import { motion } from 'framer-motion' // Animations that make your UI feel alive.

export default function LoginPage() {
  const router = useRouter() // The redirect wizard.
  const [email, setEmail] = useState('') // Where the user types their digital identity.
  const [password, setPassword] = useState('') // Secret sauce. Hopefully not “123456.”
  const [showPassword, setShowPassword] = useState(false) // Peekaboo toggle for the paranoid.
  const [loading, setLoading] = useState(false) // Spinner state. Because patience is a virtue.
  const [error, setError] = useState('') // Where Firebase spills the tea when login fails.

  const handleLogin = async (e) => {
    e.preventDefault() // Stop the browser from doing its default form freakout.
    setLoading(true) // Cue the suspense.
    setError('') // Clear the shame from previous attempts.
    try {
      await signInWithEmailAndPassword(auth, email, password) // Ask Firebase nicely to let you in.
      router.push('/search') // Success! Now go search for something meaningful.
    } catch (err) {
      setError(err.message) // Firebase said “nope.” Tell the user why.
    } finally {
      setLoading(false) // Whether you win or lose, the spinner must die.
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Starts off shy and slightly below.
        animate={{ opacity: 1, y: 0 }} // Then rises like a UI phoenix.
        transition={{ duration: 0.7 }} // Smooth enough to impress a UX designer.
        className="w-full max-w-md" // Not too wide, not too narrow—Goldilocks approved.
      >
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text">
          HERB Login {/* Because “Login” alone wasn’t fabulous enough. */}
        </h1>

        <form onSubmit={handleLogin} className="bg-[#1b1b2f] rounded-xl p-6 shadow-lg space-y-5">
          <input
            type="email"
            placeholder="Enter email" // Hint: not your grocery list.
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state like a responsible adult.
            required
            className="w-full px-4 py-3 bg-[#262649] border border-purple-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Reveal or conceal the secrets.
              placeholder="Enter password" // Hopefully not “password.”
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update the password state. No peeking.
              required
              className="w-full px-4 py-3 bg-[#262649] border border-purple-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)} // Toggle the cloak of invisibility.
              className="absolute right-3 top-3 text-purple-300 cursor-pointer text-sm"
            >
              {showPassword ? '🙈 Hide' : '👁 Show'} {/* Emoji-powered UX. Because why not? */}
            </span>
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0 }} // Error starts off shy.
              animate={{ opacity: 1 }} // Then boldly announces your failure.
              className="text-red-400 text-sm"
            >
              {error} {/* Firebase’s brutally honest feedback. */}
            </motion.p>
          )}
          <button
            type="submit"
            disabled={loading} // No double-clicking your way into chaos.
            className={`w-full py-3 rounded-md font-semibold transition-colors duration-300 ${
              loading
                ? 'bg-purple-900 cursor-not-allowed' // Spinner mode: do not disturb.
                : 'bg-purple-700 hover:bg-purple-800' // Normal mode: click me, I dare you.
            }`}
          >
            {loading ? 'Logging in...' : 'Login'} {/* Button that knows how to read the room. */}
          </button>
        </form>

        <p className="text-center text-sm text-purple-300 mt-6">
          No account?{' '} {/* Passive-aggressive nudge to sign up. */}
          <Link href="/signup" className="underline hover:text-purple-500 transition">
            Sign up {/* Because lurking isn’t a long-term strategy. */}
          </Link>
        </p>
      </motion.div>
    </main>
  )
}
