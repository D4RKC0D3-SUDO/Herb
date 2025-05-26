'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import remedies from '@/data/remedies'

export default function SearchPage() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        router.replace('/') 
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleSearch = (e) => {
    e.preventDefault()
    const filtered = remedies.filter((item) =>
      item.prescription.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.replace('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <div className="search-container">
      <div className="top-bar">
        <h1>HERB</h1>
        {user && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search prescription medication..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {results.length === 0 ? (
          <p style={{ marginTop: '1rem', textAlign: 'center', color: '#ccc' }}>
            {query ? 'No alternatives found.' : 'Try searching for a prescription.'}
          </p>
        ) : (
          results.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.prescription}</h3>
              <ul>
                {item.alternatives.map((alt, i) => (
                  <li key={i}>
                    <strong>{alt.name}</strong> - {alt.use}<br />
                    <em>Dosage:</em> {alt.dosage}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>

      {/* Fixed caution message at bottom */}
      <p className="disclaimer">
        Please note: The following are natural remedies; if symptoms persist, seek professional medical advice.
      </p>
    </div>
  )
}
