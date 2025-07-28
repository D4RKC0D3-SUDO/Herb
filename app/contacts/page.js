'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white flex flex-col items-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
          📩 Contact or Invest
        </h1>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          We’d love to hear from you. Whether you want to collaborate, invest in Herb, or just share your thoughts — your message matters.
        </p>
      </motion.div>

      {/* FORM with Formspree */}
      <motion.form
        action="https://formspree.io/f/xdkdzgvo" // 🔁 Replace with your real Formspree endpoint
        method="POST"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full max-w-md mt-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full mb-4 p-3 rounded-lg bg-[#1f1f3b] text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full mb-4 p-3 rounded-lg bg-[#1f1f3b] text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="w-full h-32 p-3 mb-4 rounded-lg bg-[#1f1f3b] text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="w-full mt-2 p-3 rounded-lg bg-purple-700 hover:bg-purple-800 font-semibold transition-all duration-200"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-16 max-w-md w-full text-sm text-gray-300 space-y-5"
      >
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-purple-400" />
          <span>eldadthukujr@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-purple-400" />
          <span>+254 719 308 082</span>
        </div>
      </motion.div>
    </main>
  )
}
