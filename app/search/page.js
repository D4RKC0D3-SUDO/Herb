'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { auth } from '@/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import remedies from '@/data/remedies'

// Fuzzy match helper
const fuzzyMatch = (input, target) => {
  const normalizedInput = input.toLowerCase().trim()
  const normalizedTarget = target.toLowerCase().trim()
  return normalizedTarget.includes(normalizedInput) || normalizedInput.includes(normalizedTarget)
}

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

  const saveSearchToLocalStorage = (searchResult) => {
    if (!user) return

    const uid = user.uid
    const allSearches = JSON.parse(localStorage.getItem('savedSearches')) || {}
    const userSearches = allSearches[uid] || []

    userSearches.push(searchResult)
    allSearches[uid] = userSearches

    localStorage.setItem('savedSearches', JSON.stringify(allSearches))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const cleanedQuery = query.toLowerCase().trim()

    const filtered = remedies
      .filter((item) => fuzzyMatch(cleanedQuery, item.prescription))
      .map((item) => ({
        ...item,
        alternatives: item.alternatives.sort((a, b) => (b.effectiveness || 0) - (a.effectiveness || 0))
      }))

    setResults(filtered)
    filtered.forEach((item) => saveSearchToLocalStorage(item))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#1a1a3d] to-[#0c0c2e] text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-end mb-6">
          <Link href="/savedsearches">
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition text-sm">
              📁 View Saved Searches
            </button>
          </Link>
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

        <section className="mt-10 space-y-8">
          {results.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              No remedies found. Try a different spelling or keyword.
            </motion.p>
          ) : (
            results.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1f1f3b] p-6 rounded-xl shadow-lg border border-purple-700"
              >
                <h2 className="text-2xl font-bold mb-5 text-purple-300 text-center">
                  {item.prescription}
                </h2>

                {/* Most Helpful Alternatives */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {item.alternatives.slice(0, 2).map((alt, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-r from-purple-700 to-purple-900 p-4 rounded-lg shadow-md border border-purple-500"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">🌟 {alt.name}</h3>
                      <p><em>Source:</em> {alt.source}</p>
                      <p><em>Use:</em> {alt.use}</p>
                      <p><em>Dosage:</em> {alt.dosage}</p>
                    </div>
                  ))}
                </div>

                {/* Expandable More Alternatives */}
                {item.alternatives.length > 2 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-purple-400 hover:text-purple-300 transition font-medium">
                      ➕ More Alternatives
                    </summary>
                    <ul className="mt-4 space-y-3 text-sm">
                      {item.alternatives.slice(2).map((alt, i) => (
                        <li
                          key={i}
                          className="bg-[#2a2a4d] p-4 rounded-md border border-purple-600"
                        >
                          <strong>{alt.name}</strong>
                          <div><em>Source:</em> {alt.source}</div>
                          <div><em>Use:</em> {alt.use}</div>
                          <div><em>Dosage:</em> {alt.dosage}</div>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
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
