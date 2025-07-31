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
  const [isForestMode, setIsForestMode] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleModeToggle = () => {
    setIsForestMode(!isForestMode)
    document.body.classList.toggle('forest-mode')
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HERB</title>
      </head>
      <body className="font-sans transition-colors duration-300 relative bg-[#0c0c2e] text-white">
        {/* 🔮 Cosmic Background Glow */}
        <div className="background-glow" />

        {/* 🌲 Forest / 🌌 Cosmic Toggle */}
        <button
          onClick={handleModeToggle}
          className="mode-toggle fixed top-4 right-4 z-50"
        >
          {isForestMode ? '🌌 Cosmic' : '🌲 Forest'}
        </button>

        {/* 🎬 Splash Screen */}
        <AnimatePresence>
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        </AnimatePresence>

        {/* 🧭 Layout Content */}
        {!showSplash && (
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex-1 p-4 sm:p-6 overflow-x-hidden ${
                isForestMode
                  ? 'bg-gradient-to-br from-green-200 via-green-300 to-green-500 text-green-950'
                  : 'bg-gradient-to-br from-transparent via-purple-950 to-[#0c0c2e]'
              }`}
            >
              {children}
            </motion.main>
          </div>
        )}
      </body>
    </html>
  )
}
