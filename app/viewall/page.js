'use client' // Because this page insists on being rendered in the browser like a true diva.

import remedies from '@/data/remedies' // The sacred scroll of herbal wisdom.
import Link from 'next/link' // Because buttons are too basic for navigation.
import { motion } from 'framer-motion' // Animations smoother than your morning tea.

export default function ViewAllPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#1a1a3d] to-[#0c0c2e] text-white px-6 py-10"> {/* Gradient vibes for your herbal archive. */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Starts off bashful.
        animate={{ opacity: 1, y: 0 }} // Then slides in like it owns the place.
        transition={{ duration: 0.6 }} // Smooth enough to impress your UX designer.
        className="max-w-4xl mx-auto" // Centered like your chakras.
      >
        <div className="flex justify-between items-center mb-6"> {/* Header with a side of navigation. */}
          <h1 className="text-3xl font-bold text-purple-300">🌿 All Remedies</h1> {/* Because “List” was too boring. */}
          <Link href="/search">
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition text-sm">
              🔍 Back to Search {/* Escape hatch for the indecisive. */}
            </button>
          </Link>
        </div>

        {remedies.length === 0 ? ( // If the scroll is empty, cue the disappointment.
          <p className="text-center text-gray-500">No remedies available.</p> // Sad trombone moment.
        ) : (
          remedies.map((item, idx) => ( // March through the herbal parade.
            <motion.div
              key={idx} // React’s way of keeping track of your herbal chaos.
              initial={{ opacity: 0, scale: 0.95 }} // Sneaky entrance.
              animate={{ opacity: 1, scale: 1 }} // Full reveal.
              transition={{ delay: idx * 0.1 }} // Staggered like a dramatic monologue.
              className="bg-[#1f1f3b] p-6 rounded-xl shadow-lg border border-purple-700 mb-8" // Styled like a digital potion bottle.
            >
              <h2 className="text-2xl font-bold mb-5 text-purple-300 text-center">
                {item.prescription} {/* The headline herb. */}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Two-column layout for your top picks. */}
                {item.alternatives.map((alt, i) => (
                  <div
                    key={i} // React’s way of saying “I got this.”
                    className="bg-gradient-to-r from-purple-700 to-purple-900 p-4 rounded-lg shadow-md border border-purple-500"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">🌿 {alt.name}</h3> {/* Star of the show. */}
                    <p><em>Source:</em> {alt.source}</p> {/* Where it came from. Hopefully not your backyard. */}
                    <p><em>Use:</em> {alt.use}</p> {/* What it does. Fingers crossed it’s legal. */}
                    <p><em>Dosage:</em> {alt.dosage}</p> {/* How much before you turn into a unicorn. */}
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}

        <footer className="mt-12 text-xs text-gray-500 text-center">
          These remedies are informational. For chronic illness, pregnancy, allergies or severe symptoms, consult a licensed medical professional. {/* Legal disclaimer with a sprinkle of wisdom. */}
        </footer>
      </motion.div>
    </main>
  )
}
