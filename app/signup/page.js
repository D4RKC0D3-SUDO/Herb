'use client' // Because this signup page insists on living in the browser like a drama queen.

import { useState } from 'react' // React’s emotional support hook.
import { auth } from '@/firebase/firebase' // Firebase’s gatekeeper to account creation.
import { createUserWithEmailAndPassword } from 'firebase/auth' // The spell that conjures new users.
import { useRouter } from 'next/navigation' // The app’s personal chauffeur.
import { motion } from 'framer-motion' // Animations smoother than your onboarding experience.

export default function SignUp() {
  const [credentials, setCredentials] = useState({ email: '', password: '' }) // The sacred scrolls of user input.
  const [showPassword, setShowPassword] = useState(false) // Peekaboo toggle for the paranoid.
  const [error, setError] = useState('') // Where Firebase spills the tea when signup fails.
  const router = useRouter() // Handles redirection like a pro.

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }) // Update the credentials like a responsible adult.
  }

  const isStrongPassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/ // Password strength test: no weaklings allowed.
    return regex.test(password) // Pass or fail. No participation trophies.
  }

  const handleSignUp = async (e) => {
    e.preventDefault() // Stop the browser from doing its default form freakout.
    setError('') // Clear the shame from previous attempts.

    if (!isStrongPassword(credentials.password)) {
      setError('Password must be at least 8 characters long and include a number and special character.') // Tough love from the password validator.
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password) // Ask Firebase nicely to let you in.
      router.push('/') // Success! Now go home and celebrate.
    } catch (err) {
      setError(err.message.replace('Firebase:', '').trim()) // Strip the Firebase branding and deliver the bad news.
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white flex items-center justify-center px-6 py-12"> {/* Gradient vibes for your onboarding ritual. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} // Starts off shy and slightly smaller.
        animate={{ opacity: 1, scale: 1 }} // Then blossoms into full view.
        transition={{ duration: 0.6 }} // Smooth enough to impress your UX designer.
        className="bg-[#1f1f3b] p-8 rounded-lg shadow-xl w-full max-w-md border border-purple-600" // Styled like a digital potion bottle.
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-400">🌿 Create Your Account</h2> {/* Fancy title for a fancy ritual. */}

        <form onSubmit={handleSignUp} className="space-y-4"> {/* The signup ceremony begins. */}
          <div>
            <label className="text-sm text-gray-300">Email</label> {/* Because “type here” is too vague. */}
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange} // Update the email state like a responsible adult.
              required
              className="w-full px-4 py-2 rounded-md bg-[#2a2a45] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="relative">
            <label className="text-sm text-gray-300">Password</label> {/* The gatekeeper of all accounts. */}
            <input
              type={showPassword ? 'text' : 'password'} // Reveal or conceal the secrets.
              name="password"
              value={credentials.password}
              onChange={handleChange} // Update the password state. No peeking.
              required
              className="w-full px-4 py-2 rounded-md bg-[#2a2a45] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <span
              onClick={() => setShowPassword(!showPassword)} // Toggle the cloak of invisibility.
              className="absolute right-3 top-9 text-purple-300 cursor-pointer text-sm"
            >
              {showPassword ? '🙈 Hide' : '👁 Show'} {/* Emoji-powered UX. Because why not? */}
            </span>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }} // Error starts off shy.
              animate={{ opacity: 1 }} // Then boldly announces your failure.
              className="text-sm text-red-400"
            >
              ⚠️ {error} {/* Firebase’s brutally honest feedback. */}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition text-white font-medium"
          >
            Sign Up {/* The final step in your digital rebirth. */}
          </button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-400">
          By signing up, you agree to our mystical terms of service and the herbal privacy ritual 🌱. {/* Legal stuff, but make it magical. */}
        </p>
      </motion.div>
    </main>
  )
}
