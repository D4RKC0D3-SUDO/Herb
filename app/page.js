'use client'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'

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
    await signOut(auth)
    router.push('/login')
  }

  return (
    <div style={{ padding: 20 }}>
      {user ? (
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <button onClick={() => router.push('/login')}>Log In</button>
          <button onClick={() => router.push('/signup')}>Sign Up</button>
        </>
      )}
    </div>
  )
}
