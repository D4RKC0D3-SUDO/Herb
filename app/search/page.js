'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { auth } from '@/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'  // ⛔ Removed signOut
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
    const filtered = remedies
      .filter((item) =>
        item.prescription.toLowerCase().includes(query.toLowerCase())
      )
      .map((item) => ({
        ...item,
        alternatives: item.alternatives
          .sort((a, b) => (b.effectiveness || 0) - (a.effectiveness || 0))
      }))
    setResults(filtered)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          {/* Logout button removed */}
        </div>

        <form className="flex flex-col items-center" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search a prescription..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="w-full max-w-md p-3 mb-4 rounded-lg border border-purple-500 bg-[#1f1f3b] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            🔍 Find Remedies
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Discover nature’s alternatives to modern medicine.
        </p>

        <section className="mt-10 space-y-6">
          {results.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              {query ? 'No herbal alternatives found.' : 'Enter a prescription to begin.'}
            </motion.p>
          ) : (
            results.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1f1f3b] p-5 rounded-lg shadow-md border border-purple-700"
              >
                <h2 className="text-xl font-bold mb-3 text-purple-300">{item.prescription}</h2>
                <ul className="space-y-2 text-sm">
                  {item.alternatives.slice(0, 2).map((alt, i) => (
                    <li key={i}>
                      🌟 <strong>{alt.name}</strong> — {alt.use}<br />
                      <em>Dosage:</em> {alt.dosage}
                    </li>
                  ))}
                  {item.alternatives.length > 2 && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-purple-500">More alternatives</summary>
                      <ul className="mt-2 space-y-1">
                        {item.alternatives.slice(2).map((alt, i) => (
                          <li key={i}>
                            <strong>{alt.name}</strong> — {alt.use}<br />
                            <em>Dosage:</em> {alt.dosage}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </ul>
              </motion.div>
            ))
          )}
        </section>

        <footer className="mt-12 text-xs text-gray-500 text-center">
          These remedies are informational. For chronic illness, pregnancy, allergies or severe symptoms, consult a licensed medical professional.
        </footer>
      </motion.div>
    </main>
  )
}
