'use client' // Because this page insists on running in the browser like a rebel.

import { useEffect, useState } from 'react' // React’s dynamic duo: side effects and emotional state.
import { useRouter } from 'next/navigation' // The app’s personal chauffeur.
import { motion } from 'framer-motion' // Because static pages are so last season.
import { auth } from '@/firebase/firebase' // Firebase’s gatekeeper.
import { onAuthStateChanged } from 'firebase/auth' // The gossip channel for login status.

export default function SavedSearchesPage() {
  const router = useRouter() // Handles redirection like a pro.
  const [user, setUser] = useState(null) // Who’s logged in? Let’s find out.
  const [savedSearches, setSavedSearches] = useState([]) // The treasure chest of herbal history.

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Firebase keeping tabs on who's in the building.
      if (user) {
        setUser(user) // Welcome, chosen one.
        loadSavedSearches(user.uid) // Time to dig up your past searches.
      } else {
        router.replace('/') // No login? No entry. Back to the homepage with you.
      }
    })
    return () => unsubscribe() // Clean up after yourself. Firebase hates clingy listeners.
  }, [router])

  const loadSavedSearches = (uid) => {
    const allSearches = JSON.parse(localStorage.getItem('savedSearches')) || {} // Digging through the browser’s attic.
    const userSearches = allSearches[uid] || [] // Only show the stuff that belongs to this user.
    setSavedSearches(userSearches) // Load it up like a nostalgic playlist.
  }

  const clearSavedSearches = () => {
    if (!user) return // No user? No cleanup. Move along.

    const uid = user.uid // Who are we deleting again?
    const allSearches = JSON.parse(localStorage.getItem('savedSearches')) || {} // Grab the whole messy pile.

    delete allSearches[uid] // Wipe this user’s tracks clean.
    localStorage.setItem('savedSearches', JSON.stringify(allSearches)) // Save the new, sanitized version.
    setSavedSearches([]) // And poof—no more saved searches.
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] to-[#1a1a3d] text-white px-6 py-10"> {/* Gradient vibes for your herbal archive. */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Starts off bashful.
        animate={{ opacity: 1, y: 0 }} // Then slides in like it owns the place.
        transition={{ duration: 0.6 }} // Smooth enough to impress your UX designer.
        className="max-w-4xl mx-auto" // Centered like your chakras.
      >
        <h1 className="text-2xl font-bold mb-6 text-purple-400 text-center">
          💾 Your Saved Searches {/* Because your herbal history deserves a fancy title. */}
        </h1>

        {savedSearches.length === 0 ? (
          <p className="text-center text-gray-400">No saved searches yet.</p> // The empty state: politely judging your lack of commitment.
        ) : (
          <>
            <section className="space-y-6 mb-8"> {/* Spaced out like your thoughts. */}
              {savedSearches.map((item, idx) => (
                <motion.div
                  key={idx} // React’s way of keeping track of your herbal chaos.
                  initial={{ opacity: 0, scale: 0.95 }} // Sneaky entrance.
                  animate={{ opacity: 1, scale: 1 }} // Full reveal.
                  transition={{ delay: idx * 0.1 }} // Staggered like a dramatic monologue.
                  className="bg-[#1f1f3b] p-5 rounded-lg shadow-md border border-purple-700" // Styled like a digital potion bottle.
                >
                  <h2 className="text-xl font-bold mb-3 text-purple-300">{item.prescription}</h2> {/* The headline herb. */}
                  <ul className="space-y-2 text-sm">
                    {item.alternatives.map((alt, i) => (
                      <li key={i}>
                        🌿 <strong>{alt.name}</strong> — {alt.use}<br /> {/* Herbal flex with a dash of purpose. */}
                        <em>Dosage:</em> {alt.dosage} {/* Because too much of a good thing is still too much. */}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </section>

            <div className="text-center"> {/* Because buttons deserve a spotlight too. */}
              <button
                onClick={clearSavedSearches} // Wipe the slate clean.
                className="px-5 py-2 bg-red-600 rounded hover:bg-red-700 transition"
              >
                🗑️ Clear Saved Searches {/* The digital equivalent of “forget I ever said that.” */}
              </button>
            </div>
          </>
        )}

        <footer className="mt-12 text-xs text-gray-500 text-center">
          Saved searches are stored locally on your device. Clearing them will remove only your data. {/* A gentle reminder that Big Brother isn’t watching—this time. */}
        </footer>
      </motion.div>
    </main>
  )
}
