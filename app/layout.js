'use client'

import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import Sidebar from '@/app/components/sidebar'
import SplashScreen from './components/splashscreen'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000) // Optional timeout fallback
    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-[#0c0c2e] dark:text-white text-black font-sans transition-colors duration-300 relative">
        {/* 🔮 Background Glow */}
        <div className="background-glow" />

        {/* ☀️ / 🌙 Mode Toggle */}
        <button
          className="mode-toggle fixed top-4 right-4 z-50"
          onClick={() => document.body.classList.toggle('light-mode')}
        >
          ☀️ / 🌙
        </button>

        {/* 🎬 Splash Screen Animation */}
        <AnimatePresence>
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        </AnimatePresence>

        {/* 🧭 Layout */}
        {!showSplash && (
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-transparent via-purple-950 to-[#0c0c2e] overflow-x-hidden"
            >
              {children}
            </motion.main>
          </div>
        )}
      </body>
    </html>
  )
}
