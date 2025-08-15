'use client'; // Because this page insists on living in the browser like a diva.

import { useState, useEffect } from 'react'; // React’s emotional support toolkit.
import { useRouter, useSearchParams } from 'next/navigation'; // GPS and URL whisperer for your app.
import Link from 'next/link'; // Because buttons are too basic for navigation.
import { motion } from 'framer-motion'; // Animations smoother than herbal tea.
import { firebaseAuth, firebaseDb } from '@/lib/firebaseClient'; // Summoning Firebase beasts from your lib cave.
import { onAuthStateChanged } from 'firebase/auth'; // Firebase’s gossip channel for login status.
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firestore rituals: summon, filter, and fetch.

export default function SearchPage() {
  const router = useRouter(); // Handles redirection like a pro.
  const params = useSearchParams(); // Sniffs out query params like a truffle pig.
  const initialQ = params?.get('q') || ''; // Grab the search term from the URL—or default to blank sadness.

  const [user, setUser] = useState(null); // Who’s logged in? Let’s find out.
  const [queryText, setQueryText] = useState(initialQ); // What the user wants to search for.
  const [results, setResults] = useState([]); // Where the herbal magic gets stored.
  const [loading, setLoading] = useState(false); // Spinner state. Because suspense is everything.

  // Check login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (u) => { // Firebase keeping tabs on who's in the building.
      if (u) {
        setUser(u); // Welcome, chosen one.
      } else {
        router.replace('/'); // No login? No entry. Back to the homepage with you.
      }
    });
    return () => unsubscribe(); // Clean up after yourself. Firebase hates clingy listeners.
  }, [router]);

  // Search function (Firestore)
  const doSearch = async (searchTerm) => {
    if (!searchTerm.trim()) return; // No empty searches allowed. We’re not mind readers.
    setLoading(true); // Cue the suspense.
    try {
      const prescriptionsRef = collection(firebaseDb, 'prescriptions'); // Open the Firestore vault.
      const q = query(
        prescriptionsRef,
        where('prescription_lc', '==', searchTerm.toLowerCase()) // Case-insensitive search because humans are unpredictable.
      );

      const snapshot = await getDocs(q); // Fetch the scrolls from the cloud.
      const data = snapshot.docs.map(doc => doc.data()); // Extract the juicy bits.
      setResults(data); // Show the user what they summoned.
    } catch (err) {
      console.error(err); // Log the chaos for future archaeologists.
      setResults([]); // No results, no drama.
    } finally {
      setLoading(false); // Whether you win or lose, the spinner must die.
    }
  };

  // Run search on load if URL had ?q=
  useEffect(() => {
    if (initialQ) {
      doSearch(initialQ); // Auto-search like a helpful sidekick.
    }
  }, [initialQ]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the browser from doing its default form freakout.
    doSearch(queryText); // Launch the search like a digital spell.
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#1a1a3d] to-[#0c0c2e] text-white px-6 py-10"> {/* Gradient vibes for your herbal quest. */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Starts off bashful.
        animate={{ opacity: 1, y: 0 }} // Then slides in like it owns the place.
        transition={{ duration: 0.6 }} // Smooth enough to impress your UX designer.
        className="max-w-4xl mx-auto" // Centered like your chakras.
      >
        <div className="flex justify-end mb-6"> {/* Because buttons deserve a spotlight too. */}
          <Link href="/savedsearches">
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition text-sm">
              📁 View Saved Searches {/* A shortcut to your herbal history. */}
            </button>
          </Link>
        </div>

        <form className="flex flex-col items-center" onSubmit={handleSubmit}> {/* The search ritual begins. */}
          <input
            type="text"
            placeholder="Search a prescription..." // Hint: not your grocery list.
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)} // Update the search term like a responsible adult.
            required
            className="w-full max-w-md p-3 mb-4 rounded-lg border border-purple-500 bg-[#1f1f3b] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            🔍 Find Remedies {/* Because “Search” is too basic. */}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Discover nature’s alternatives to modern medicine. {/* Marketing meets mysticism. */}
        </p>

        {loading && (
          <p className="text-center text-purple-400 mt-6">Loading remedies...</p> // Spinner with a poetic touch.
        )}

        <section className="mt-10 space-y-8"> {/* Where the results bloom. */}
          {!loading && results.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }} // Starts off invisible.
              animate={{ opacity: 1 }} // Then gently appears to break the bad news.
              className="text-center text-gray-500"
            >
              No remedies found. Try a different spelling or keyword. {/* The polite rejection. */}
            </motion.p>
          ) : (
            results.map((item, idx) => (
              <motion.div
                key={idx} // React’s way of keeping track of your herbal chaos.
                initial={{ opacity: 0, scale: 0.95 }} // Sneaky entrance.
                animate={{ opacity: 1, scale: 1 }} // Full reveal.
                transition={{ delay: idx * 0.1 }} // Staggered like a dramatic monologue.
                className="bg-[#1f1f3b] p-6 rounded-xl shadow-lg border border-purple-700" // Styled like a digital potion bottle.
              >
                <h2 className="text-2xl font-bold mb-5 text-purple-300 text-center">
                  {item.prescription} {/* The headline herb. */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"> {/* Two-column layout for your top picks. */}
                  {item.alternatives.slice(0, 2).map((alt, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-r from-purple-700 to-purple-900 p-4 rounded-lg shadow-md border border-purple-500"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        🌟 {alt.name} {/* Star of the show. */}
                      </h3>
                      <p><em>Source:</em> {alt.source}</p> {/* Where it came from. Hopefully not your backyard. */}
                      <p><em>Use:</em> {alt.use}</p> {/* What it does. Fingers crossed it’s legal. */}
                      <p><em>Dosage:</em> {alt.dosage}</p> {/* How much before you turn into a unicorn. */}
                    </div>
                  ))}
                </div>

                {item.alternatives.length > 2 && (
                  <details className="mt-4"> {/* Hidden gems for the curious. */}
                    <summary className="cursor-pointer text-purple-400 hover:text-purple-300 transition font-medium">
                      ➕ More Alternatives {/* Because two herbs are never enough. */}
                    </summary>
                    <ul className="mt-4 space-y-3 text-sm">
                      {item.alternatives.slice(2).map((alt, i) => (
                        <li
                          key={i}
                          className="bg-[#2a2a4d] p-4 rounded-md border border-purple-600"
                        >
                          <strong>{alt.name}</strong> {/* Bold name for bold healing. */}
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
  );
}