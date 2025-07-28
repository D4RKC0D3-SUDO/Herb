'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white flex flex-col items-center px-6 py-16"
    >
      <motion.div
        className="text-center max-w-2xl"
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
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
        >
          🌱 About Herb
        </motion.h1>

        {[
          "Herb was created for those seeking meaningful transformation a change that renews the body and uplifts the soul. Our mission is to empower you with access to natural remedies and herbal alternatives, honored by tradition and affirmed by science.",
          "From the soil beneath your feet comes healing that is organic, potent, and proven. Embrace wellness in harmony with nature. Choose purity over synthetic solutions. Choose peace over pollution.",
          "*Important: We strongly encourage you to consult your healthcare provider, especially if you are pregnant, managing a chronic condition, or have known allergies.",
          "Herb was founded on the belief that true health flourishes in simplicity, accessibility, and the divine wisdom embedded in creation. In a world overwhelmed by artificial choices, we offer you a return to the source, God's provision through the earth itself. Thank you for walking this natural and sacred path.",
          "Herb draws inspiration from the biblical truth that humanity was formed from the earth. What better way to restore what was made from dust than to receive healing from it? For even the earth reflects the Creator’s understanding of our needs and desires."
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              index === 2 ? "text-md text-gray-400 italic mb-8" : "text-lg text-gray-300 mb-6"
            } leading-relaxed`}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.main>
  )
}
