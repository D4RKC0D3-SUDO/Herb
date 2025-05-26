'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/search') // <-- Make sure /search exists
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>HERB</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <Link href="/signup" className="link">No account? Sign up</Link>
    </div>
  )
}
