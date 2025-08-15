'use client' // Because this page wants to live dangerously on the client side.

import React from 'react' // React: the reason this whole circus works.
import { motion } from 'framer-motion' // Animations so smooth, they make butter jealous.
import { Mail, Phone } from 'lucide-react' // Icons that scream “I’m professional, but cool.”

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c0c2e] via-[#121132] to-[#090820] text-white flex flex-col items-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Starts off shy and slightly below.
        animate={{ opacity: 1, y: 0 }} // Then struts into view like it owns the place.
        transition={{ duration: 0.6 }} // Smooth entrance, no drama.
        className="text-center max-w-2xl" // Centered wisdom, but not too wide.
      >
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
          📩 Contact or Invest {/* Subtle flex: we’re open to money AND messages. */}
        </h1>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          We’d love to hear from you. Whether you want to collaborate, invest in Herb, or just share your thoughts — your message matters. {/* Emotional bait with a dash of startup charm. */}
        </p>
      </motion.div>

      {/* 🌱 FORM */}
      <motion.form
        action="https://formspree.io/f/xdkdzgvo" // Outsourcing form handling because why reinvent the wheel?
        method="POST" // Old-school but reliable.
        initial={{ opacity: 0 }} // Starts invisible like a ninja.
        animate={{ opacity: 1 }} // Then gracefully fades in.
        transition={{ delay: 0.2, duration: 0.8 }} // Slight delay for dramatic effect.
        className="w-full max-w-md mt-6" // Not too wide, not too narrow—just right.
      >
        <input
          type="text"
          name="name" // Because “Hey you” isn’t specific enough.
          required // No ghost submissions allowed.
          placeholder="Your name" // A gentle nudge to be polite.
          className="w-full mb-4 p-3 rounded-lg bg-[#1f1f3d] placeholder-gray-400 text-gray-100 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500" // Styled like a futuristic input field.
        />
        <input
          type="email"
          name="email" // So we can spam you later. Just kidding. Mostly.
          required // No email, no entry.
          placeholder="Your email" // Because telepathy isn’t implemented yet.
          className="w-full mb-4 p-3 rounded-lg bg-[#1f1f3d] placeholder-gray-400 text-gray-100 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500" // Looks like it belongs in a hacker’s dream UI.
        />
        <textarea
          name="message" // Where the magic (or rant) happens.
          required // Don’t leave us hanging.
          placeholder="Your message" // Say something nice. Or spicy.
          className="w-full h-32 p-3 mb-4 rounded-lg bg-[#1f1f3d] placeholder-gray-400 text-gray-100 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" // No resizing chaos allowed.
        ></textarea>
        <button
          type="submit" // Time to launch your thoughts into the void.
          className="w-full mt-2 p-3 rounded-lg bg-purple-700 hover:bg-purple-800 font-semibold transition-all duration-200" // Button that says “I mean business.”
        >
          Send Message {/* The digital equivalent of passing a note in class. */}
        </button>
      </motion.form>

      {/* ✉️ Contact Info */}
      <motion.div
        initial={{ opacity: 0 }} // Hiding in plain sight.
        animate={{ opacity: 1 }} // Now you see me.
        transition={{ delay: 0.4, duration: 0.7 }} // Slightly fashionably late.
        className="mt-16 max-w-md w-full text-sm text-gray-300 space-y-5" // Compact and classy contact details.
      >
        <div className="flex items-center gap-3"> {/* Icon + text = modern hieroglyphics. */}
          <Mail size={20} className="text-purple-400" /> {/* Because typing out “email” is too mainstream. */}
          <span>eldadthukujr@gmail.com</span> {/* The inbox of destiny. */}
        </div>
        <div className="flex items-center gap-3"> {/* Another line, another way to reach out. */}
          <Phone size={20} className="text-purple-400" /> {/* Retro tech still going strong. */}
          <span>+254 719 308 082</span> {/* Call us maybe? */}
        </div>
      </motion.div>
    </main>
  )
}
