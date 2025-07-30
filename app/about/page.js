'use client'

import { motion } from 'framer-motion'
/* eslint-disable react/no-unescaped-entities */
export default function InfoPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white px-6 py-16 flex flex-col items-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-4xl w-full text-center"
      >
        {/* 🔖 Header */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text drop-shadow-md"
        >
          🌿 Natural Wisdom, Divine Restoration
        </motion.h1>

        {/* 📖 Intro & Mission */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          HERB was created for those pursuing true healing—not just relief, but renewal. We believe wellness should be rooted in nature, informed by research, and inspired by the sacred design of creation.
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          className="text-md text-gray-400 italic mb-8"
        >
          *Disclaimer: Always consult a licensed medical provider, especially if pregnant, managing a chronic condition, or allergic to plant-based compounds.
        </motion.p>

        {/* 💊 Modern Medicine Warning */}
        <motion.h2 className="text-2xl font-semibold text-purple-300 mb-4">
          🚨 A Sobering Reality
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed mb-6">
          Over <strong>100,000 people</strong> die annually from side effects of prescribed medications—not abuse, just directions followed. The opioid crisis alone has taken more than <strong>500,000 lives</strong>. These are not failures of science, but reminders that quick fixes often come with hidden costs.
        </motion.p>

        {/* 🌿 Remedy Facts */}
        <motion.h2 className="text-2xl font-semibold text-green-300 mb-4">
          🌱 Remedies Designed by Creation
        </motion.h2>
        <motion.ul className="list-disc list-inside text-left space-y-4 text-gray-300 mb-8">
          <li><strong>Turmeric</strong>: Detoxifies liver and calms inflammation.</li>
          <li><strong>Garlic</strong>: Modulates immunity and improves circulation.</li>
          <li><strong>Ashwagandha</strong>: Boosts stress resilience without sedation.</li>
          <li><strong>Moringa</strong>: Nutrient-packed and antioxidant-rich, native to East Africa.</li>
        </motion.ul>

        <motion.p className="text-gray-300 mb-6 leading-relaxed">
          These remedies do not overpower—they harmonize. Plants contain synergistic compounds that collaborate naturally, a phenomenon known as the <em>entourage effect</em>. It's something pharmaceutical chemistry still can't mimic.
        </motion.p>

        {/* 🌍 Indigenous Insight */}
        <motion.p className="text-gray-300 mb-6 leading-relaxed">
          From the Maasai of Kenya to the Yanomami of Brazil, earth-based medicine was never mere trial—it was sacred knowledge. These practices nourished communities long before modern labs, and ironically, many pharmaceuticals began by borrowing their secrets.
        </motion.p>

        {/* ✝️ Spiritual Reflection */}
        <motion.h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          ✝️ From Dust, Healing Rises
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed mb-8">
          According to Genesis, mankind was formed from the soil. The same earth that birthed us holds what restores us. When Jesus healed, He often did so with what was already present: touch, clay, water, presence. This is divine design. Healing is not hidden in complexity—it’s offered in creation.
        </motion.p>

        {/* 💡 Closing Motivation */}
        <motion.p className="text-xl text-purple-200 font-semibold text-center italic pt-6">
          “Healing isn’t always manufactured. Sometimes, it’s grown.”
        </motion.p>
        <motion.p className="text-sm text-purple-400 text-center mt-2">
          — HERB Team
        </motion.p>
      </motion.div>
    </motion.main>
  )
}
