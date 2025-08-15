'use client';

import { motion } from 'framer-motion';

export default function AboutHerb() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0c2e] via-[#1a1a3d] to-[#0c0c2e] text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400 drop-shadow-lg"
        >
          H.E.R.B.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-300"
        >
          Holistic Empowered Remedies & Botanicals
        </motion.p>

        <motion.div
          className="mt-10 h-1 w-32 mx-auto rounded-full bg-purple-400 animate-pulse"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </main>
  );
}
