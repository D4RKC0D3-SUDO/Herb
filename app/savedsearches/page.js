'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { auth } from '@/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function SavedSearchesPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [savedSearches, setSavedSearches] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        loadSavedSearches(user.uid)
      } else {
        router.replace('/')
      }
    })
    return () => unsubscribe()
  }, [router])

  const loadSavedSearches = (uid) => {
    const allSearches = JSON.parse(localStorage.getItem('savedSearches')) || {}
    const userSearches = allSearches[uid] || []
    setSavedSearches(userSearches)
  }

  const clearSavedSearches = () => {
    if (!user) return

    const uid = user.uid
    const allSearches = JSON.parse(localStorage.getItem('savedSearches')) || {}

    delete allSearches[uid]
    localStorage.setItem('savedSearches', JSON.stringify(allSearches))
    setSavedSearches([])
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-2xl font-bold mb-6 text-purple-400 text-center">
          💾 Your Saved Searches
        </h1>

        {savedSearches.length === 0 ? (
          <p className="text-center text-gray-400">No saved searches yet.</p>
        ) : (
          <>
            <section className="space-y-6 mb-8">
              {savedSearches.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#1f1f3b] p-5 rounded-lg shadow-md border border-purple-700"
                >
                  <h2 className="text-xl font-bold mb-3 text-purple-300">{item.prescription}</h2>
                  <ul className="space-y-2 text-sm">
                    {item.alternatives.map((alt, i) => (
                      <li key={i}>
                        🌿 <strong>{alt.name}</strong> — {alt.use}<br />
                        <em>Dosage:</em> {alt.dosage}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </section>

            <div className="text-center">
              <button
                onClick={clearSavedSearches}
                className="px-5 py-2 bg-red-600 rounded hover:bg-red-700 transition"
              >
                🗑️ Clear Saved Searches
              </button>
            </div>
          </>
        )}

        <footer className="mt-12 text-xs text-gray-500 text-center">
          Saved searches are stored locally on your device. Clearing them will remove only your data.
        </footer>
      </motion.div>
    </main>
  )
}
