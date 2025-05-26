'use client'
import { useState } from 'react'
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('') // Clear previous errors
    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      router.push('/') // Redirect to home
    } catch (err) {
      setError(err.message) // Display meaningful errors
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        /><br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}
