'use client'

import remedies from '@/data/remedies'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ViewAllPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#1a1a3d] to-[#0c0c2e] text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-300">🌿 All Remedies</h1>
          <Link href="/search">
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition text-sm">
              🔍 Back to Search
            </button>
          </Link>
        </div>

        {remedies.length === 0 ? (
          <p className="text-center text-gray-500">No remedies available.</p>
        ) : (
          remedies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1f1f3b] p-6 rounded-xl shadow-lg border border-purple-700 mb-8"
            >
              <h2 className="text-2xl font-bold mb-5 text-purple-300 text-center">
                {item.prescription}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.alternatives.map((alt, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-purple-700 to-purple-900 p-4 rounded-lg shadow-md border border-purple-500"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">🌿 {alt.name}</h3>
                    <p><em>Source:</em> {alt.source}</p>
                    <p><em>Use:</em> {alt.use}</p>
                    <p><em>Dosage:</em> {alt.dosage}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}

        <footer className="mt-12 text-xs text-gray-500 text-center">
          These remedies are informational. For chronic illness, pregnancy, allergies or severe symptoms, consult a licensed medical professional.
        </footer>
      </motion.div>
    </main>
  )
}
