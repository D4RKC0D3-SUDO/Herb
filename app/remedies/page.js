'use client'

import { motion } from 'framer-motion'

export default function RemediesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c2e] via-purple-900 to-purple-950 text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text drop-shadow"
      >
        🌱 Nature’s Wisdom vs. Man-Made Medicine
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed text-justify"
      >
        <p>
          For millennia, human beings survived and thrived under the gentle stewardship of nature.
          The leaves, roots, and herbs around us weren’t simply foliage they were living libraries of biochemical harmony,
          passed down through traditions older than history itself. Today, synthetic pharmaceutical medicine has replaced nature’s cures,
          often under the guise of progress but this convenience has come with alarming consequences.
        </p>

        <p>
          Every year, more than <strong>100,000 people in the U.S.</strong> die due to prescription drug side effects not misuse or overdose,
          just routine directions. The opioid epidemic, fueled by overprescription of painkillers like oxycodone and fentanyl,
          has claimed over <strong>500,000 lives</strong> and led to billion-dollar lawsuits against pharmaceutical giants.
        </p>

        <p>
          Even seemingly benign medications carry risks. Ibuprofen, used long-term, can cause gastrointestinal bleeding and kidney damage.
          Popular antidepressants may increase suicidal thoughts in some users. And antibiotics while life-saving have bred superbugs,
          bacteria that resist nearly every known treatment.
        </p>

        <p>
          In contrast, natural remedies rarely promise instant fixes but they offer sustainable balance and resilience.
          Turmeric supports liver detoxification while calming inflammation. Garlic boosts circulation and immune modulation.
          Ashwagandha, a revered adaptogen, builds stress tolerance without fog or dependency. These are not isolated effects,
          but harmonious multi-system support designed by nature.
        </p>

        <p>
          The magic lies in synergy. A single plant may hold dozens of bioactive compounds working in concert the “entourage effect,”
          nearly impossible to replicate synthetically. These remedies gently encourage the body toward equilibrium rather than forcing submission.
        </p>

        <p>
          Indigenous communities from the Maasai of Kenya to the Yanomami of the Amazon have long used bark, infusions, and poultices as medicine.
          These weren’t experiments, but carefully preserved spiritual sciences. Ironically, modern pharmaceuticals often derive their active ingredients
          from these plants extracted, isolated, and stripped of context.
        </p>

        <p>
          Championing organic remedies is not rejecting science it’s embracing a deeper, older version. One that sees the body as an ecosystem, not a machine.
          One that approaches healing as connection, not correction. And one that asks: What did the Earth intend for us all along?
        </p>

        <p className="italic text-purple-300 text-center pt-8">
          “Nature is the physician of humanity.” Hippocrates, reimagined
        </p>
      </motion.div>
    </main>
  )
}
