'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Search, Leaf, Sparkles, HeartPulse } from 'lucide-react'

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="card p-6 text-center bg-[#151429] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-purple-100">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0e0d24] via-[#121132] to-[#090820] text-white flex flex-col items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mb-10 leading-relaxed"
        >
          Discover organic herbal alternatives to prescription medications.
          Backed by traditional wisdom, curated for modern wellness.
        </motion.p>

     
      </motion.div>

      <section className="mt-28 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Sparkles size={36} className="text-purple-400" />}
            title="Simple & Natural"
            desc="We simplify ancient herbal knowledge into actionable remedies you can trust."
          />
          <FeatureCard
            icon={<HeartPulse size={36} className="text-red-400" />}
            title="Backed by Science"
            desc="We cross-check traditional uses with modern studies so you know what you're taking."
          />
          <FeatureCard
            icon={<Leaf size={36} className="text-green-400" />}
            title="Your Wellness Hub"
            desc="More than herbs. It's a way of life. Restore balance, naturally."
          />
        </motion.div>
      </section>
    </main>
  )
}
